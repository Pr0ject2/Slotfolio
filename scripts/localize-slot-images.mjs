import { mkdir, readFile, rename, stat, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import sharp from "sharp";

const projectRoot = process.cwd();
const sourceFile = path.join(projectRoot, "docs", "image-sources.json");
const outputDir = path.join(projectRoot, "public", "images", "slots");
const cacheDir = path.join(projectRoot, ".asset-cache", "slot-images");
const soft = process.argv.includes("--soft");
const force = process.argv.includes("--force");
const timeoutMs = 20_000;
const maxSourceBytes = 16 * 1024 * 1024;

const bytes = (n) => `${Math.max(1, Math.round(n / 1024))} KB`;

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
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/152 Safari/537.36 SlotfolioAssetBuild/1.1",
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
      if (attempt < 3)
        await new Promise((resolve) => setTimeout(resolve, 700 * attempt));
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
  )
    throw new Error(`unexpected content-type: ${contentType}`);
  const declared = Number(response.headers.get("content-length") || 0);
  if (declared > maxSourceBytes)
    throw new Error(`source is too large: ${bytes(declared)}`);
  const buffer = Buffer.from(await response.arrayBuffer());
  if (buffer.length > maxSourceBytes)
    throw new Error(`source is too large: ${bytes(buffer.length)}`);
  if (buffer.length < 1024)
    throw new Error("source response is unexpectedly small");
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
  const errors = [];
  if (entry.image) {
    try {
      return {
        buffer: await download(entry.image, entry.page),
        resolvedUrl: entry.image,
        method: "manifest URL",
      };
    } catch (error) {
      errors.push(`manifest URL: ${error?.message || error}`);
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

async function processImage(buffer, output) {
  const tmp = `${output}.tmp`;
  await sharp(buffer, { failOn: "warning" })
    .rotate()
    .resize({
      width: 1200,
      height: 675,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({ quality: 82, effort: 5, smartSubsample: true })
    .toFile(tmp);
  await rename(tmp, output);
}

await mkdir(outputDir, { recursive: true });
await mkdir(cacheDir, { recursive: true });
const manifest = JSON.parse(await readFile(sourceFile, "utf8"));
const remote = manifest;
const warnings = [];

for (const entry of remote) {
  const output = path.join(outputDir, `${entry.slug}.webp`);
  const cache = path.join(cacheDir, `${entry.slug}.source`);

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
      console.log(
        `↓ ${entry.slug}: fetched ${bytes(source.length)} via ${resolved.method}`,
      );
    } catch (error) {
      warnings.push(`${entry.slug}: ${error?.message || error}`);
      console.warn(`! ${entry.slug}: real artwork could not be downloaded`);
      continue;
    }
  }

  try {
    await processImage(source, output);
    const size = (await stat(output)).size;
    console.log(`  → public/images/slots/${entry.slug}.webp (${bytes(size)})`);
  } catch (error) {
    warnings.push(`${entry.slug}: image conversion failed: ${error?.message || error}`);
    console.warn(`! ${entry.slug}: image conversion failed`);
    await unlink(cache).catch(() => {});
    await unlink(output).catch(() => {});
  }
}

const missing = [];
for (const entry of remote) {
  const output = path.join(outputDir, `${entry.slug}.webp`);
  if (!(await exists(output))) missing.push(entry.slug);
}

if (missing.length) {
  console.error(`\nSlot image localization incomplete: ${missing.join(", ")}`);
  if (!soft) process.exit(1);
} else {
  console.log(`\nSlot images ready: ${remote.length} local asset(s).`);
}

if (warnings.length) {
  console.warn(`Artwork failures for ${warnings.length} asset(s) in this run:`);
  for (const warning of warnings) console.warn(`- ${warning}`);
}
