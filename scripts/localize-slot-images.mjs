import { mkdir, readFile, rename, stat, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import sharp from "sharp";

const projectRoot = process.cwd();
const sourceFile = path.join(projectRoot, "docs", "image-sources.json");
const additionsFile = path.join(projectRoot, "docs", "image-sources-v128.json");
const cacheDir = path.join(projectRoot, ".asset-cache", "slot-images");
const soft = process.argv.includes("--soft");
const force = process.argv.includes("--force");
const verifyOnly = process.argv.includes("--verify-only");
const timeoutMs = 20_000;
const maxSourceBytes = 16 * 1024 * 1024;

const bytes = (n) => `${Math.max(1, Math.round(n / 1024))} KB`;

function profileFor(entry) {
  const feature = entry.slug.endsWith("-feature") || String(entry.use || "").toLowerCase().includes("large");
  return feature
    ? { width: 1200, height: 630, targetBytes: 180 * 1024, hardMaxBytes: 260 * 1024 }
    : { width: 960, height: 540, targetBytes: 140 * 1024, hardMaxBytes: 220 * 1024 };
}

function outputFor(entry) {
  const local = String(entry.local || `/images/slots/${entry.slug}.webp`).replace(/^\/+/, "");
  return path.join(projectRoot, "public", local);
}

async function exists(file) {
  try {
    return (await stat(file)).size > 1024;
  } catch {
    return false;
  }
}

function headers({ referer, accept }) {
  return {
    accept,
    "accept-language": "en-US,en;q=0.8",
    ...(referer ? { referer } : {}),
    "user-agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/152 Safari/537.36 SlotfolioAssetBuild/1.2",
  };
}

async function fetchWithRetry(url, options) {
  let lastError;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const response = await fetch(url, {
        redirect: "follow",
        signal: controller.signal,
        headers: headers(options),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response;
    } catch (error) {
      lastError = error;
      if (attempt < 3) await new Promise((resolve) => setTimeout(resolve, 700 * attempt));
    } finally {
      clearTimeout(timer);
    }
  }
  throw lastError;
}

async function download(url, referer) {
  const response = await fetchWithRetry(url, {
    referer,
    accept: "image/avif,image/webp,image/png,image/jpeg,image/*;q=0.8,*/*;q=0.5",
  });
  const contentType = response.headers.get("content-type") || "";
  const normalizedType = contentType.toLowerCase().split(";", 1)[0].trim();
  if (
    normalizedType &&
    !normalizedType.startsWith("image/") &&
    normalizedType !== "application/octet-stream" &&
    normalizedType !== "binary/octet-stream"
  ) throw new Error(`unexpected content-type: ${contentType}`);
  const declared = Number(response.headers.get("content-length") || 0);
  if (declared > maxSourceBytes) throw new Error(`source is too large: ${bytes(declared)}`);
  const buffer = Buffer.from(await response.arrayBuffer());
  if (buffer.length > maxSourceBytes) throw new Error(`source is too large: ${bytes(buffer.length)}`);
  if (buffer.length < 1024) throw new Error("source response is unexpectedly small");
  return buffer;
}

function decodeHtml(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}

function metaContent(html, key) {
  const escaped = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const forward = new RegExp(
    `<meta[^>]+(?:property|name)=["']${escaped}["'][^>]+content=["']([^"']+)["'][^>]*>`,
    "i",
  );
  const reverse = new RegExp(
    `<meta[^>]+content=["']([^"']+)["'][^>]+(?:property|name)=["']${escaped}["'][^>]*>`,
    "i",
  );
  return forward.exec(html)?.[1] || reverse.exec(html)?.[1] || "";
}

async function discoverImage(pageUrl) {
  const response = await fetchWithRetry(pageUrl, {
    accept: "text/html,application/xhtml+xml;q=0.9,*/*;q=0.5",
  });
  const html = await response.text();
  const candidate =
    metaContent(html, "og:image:secure_url") ||
    metaContent(html, "og:image") ||
    metaContent(html, "twitter:image") ||
    metaContent(html, "twitter:image:src");
  if (!candidate) throw new Error("official page has no social preview image metadata");
  return new URL(decodeHtml(candidate), pageUrl).toString();
}

async function resolveSource(entry) {
  if (entry.requireExplicitImage && !entry.image) {
    throw new Error("reviewed game-specific manifest image required; page preview is not approved artwork");
  }
  const errors = [];
  if (entry.image) {
    try {
      return {
        buffer: await download(entry.image, entry.page),
        resolvedUrl: entry.image,
        method: "manifest URL",
      };
    } catch (error) {
      throw new Error(`manifest URL: ${error?.message || error}`);
    }
  }
  try {
    const discovered = await discoverImage(entry.page);
    return {
      buffer: await download(discovered, entry.page),
      resolvedUrl: discovered,
      method: "official page metadata",
    };
  } catch (error) {
    errors.push(`page metadata: ${error?.message || error}`);
  }
  throw new Error(errors.join("; "));
}

async function processImage(buffer, output, entry) {
  const profile = profileFor(entry);
  const base = sharp(buffer, { failOn: "warning" }).rotate().resize({
    width: profile.width,
    height: profile.height,
    fit: "inside",
    withoutEnlargement: true,
  });
  let encoded;
  for (const quality of [76, 72, 68]) {
    encoded = await base.clone().webp({ quality, effort: 5, smartSubsample: true }).toBuffer();
    if (encoded.length <= profile.targetBytes) break;
  }
  await mkdir(path.dirname(output), { recursive: true });
  const tmp = `${output}.tmp`;
  await writeFile(tmp, encoded);
  await rename(tmp, output);
}

async function verifyEntry(entry) {
  const output = outputFor(entry);
  if (!(await exists(output))) return { ok: false, error: "missing" };
  const fileStat = await stat(output);
  const profile = profileFor(entry);
  let metadata;
  try {
    metadata = await sharp(output).metadata();
  } catch (error) {
    return { ok: false, error: `cannot decode: ${error?.message || error}` };
  }
  if ((metadata.width || 0) > profile.width || (metadata.height || 0) > profile.height)
    return { ok: false, error: `dimensions ${metadata.width}×${metadata.height} exceed ${profile.width}×${profile.height}` };
  if (fileStat.size > profile.hardMaxBytes)
    return { ok: false, error: `${bytes(fileStat.size)} exceeds ${bytes(profile.hardMaxBytes)}` };
  return { ok: true, size: fileStat.size };
}

await mkdir(cacheDir, { recursive: true });
const baseManifest = JSON.parse(await readFile(sourceFile, "utf8"));
let additionsManifest = [];
try {
  additionsManifest = JSON.parse(await readFile(additionsFile, "utf8"));
} catch (error) {
  if (error?.code !== "ENOENT") throw error;
}
const manifest = [...baseManifest, ...additionsManifest];
const warnings = [];

if (!verifyOnly) {
  for (const entry of manifest) {
    const output = outputFor(entry);
    const cache = path.join(cacheDir, `${entry.slug}.source`);

    if (entry.localize === "checked-in-placeholder" && (await exists(output))) {
      console.log(`✓ ${entry.slug}: checked-in editorial placeholder present`);
      continue;
    }

    if (!force && (await exists(output))) {
      console.log(`✓ ${entry.slug}: local asset already present`);
      continue;
    }

    let source;
    if (!force && (await exists(cache))) {
      source = await readFile(cache);
      console.log(`↺ ${entry.slug}: using cached source (${bytes(source.length)})`);
    } else {
      try {
        const resolved = await resolveSource(entry);
        source = resolved.buffer;
        await writeFile(cache, source);
        console.log(`↓ ${entry.slug}: fetched ${bytes(source.length)} via ${resolved.method}`);
      } catch (error) {
        warnings.push(`${entry.slug}: ${error?.message || error}`);
        console.warn(`! ${entry.slug}: real artwork could not be downloaded`);
        continue;
      }
    }

    try {
      await processImage(source, output, entry);
      const size = (await stat(output)).size;
      console.log(`  → ${path.relative(projectRoot, output).replaceAll("\\", "/")} (${bytes(size)})`);
    } catch (error) {
      warnings.push(`${entry.slug}: image conversion failed: ${error?.message || error}`);
      console.warn(`! ${entry.slug}: image conversion failed`);
      await unlink(cache).catch(() => {});
      await unlink(output).catch(() => {});
    }
  }
}

const invalid = [];
let totalBytes = 0;
for (const entry of manifest) {
  const result = await verifyEntry(entry);
  if (!result.ok) invalid.push(`${entry.slug}: ${result.error}`);
  else totalBytes += result.size;
}

if (invalid.length) {
  console.error(`\nSlot image verification failed for ${invalid.length} asset(s):`);
  for (const item of invalid) console.error(`- ${item}`);
  if (!soft) process.exit(1);
} else {
  console.log(`\nSlot images ready: ${manifest.length} local asset(s), ${bytes(totalBytes)} total.`);
}

if (warnings.length) {
  console.warn(`Artwork failures for ${warnings.length} asset(s) in this run:`);
  for (const warning of warnings) console.warn(`- ${warning}`);
}
