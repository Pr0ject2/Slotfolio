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

async function download(url, referer) {
  let lastError;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const response = await fetch(url, {
        redirect: "follow",
        signal: controller.signal,
        headers: {
          accept: "image/avif,image/webp,image/png,image/jpeg,image/*;q=0.8,*/*;q=0.5",
          "accept-language": "en-US,en;q=0.8",
          referer,
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/152 Safari/537.36 SlotfolioAssetBuild/1.0",
        },
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
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
      if (buffer.length < 1024) throw new Error("source response is unexpectedly small");
      return buffer;
    } catch (error) {
      lastError = error;
      if (attempt < 3) await new Promise((resolve) => setTimeout(resolve, 700 * attempt));
    } finally {
      clearTimeout(timer);
    }
  }
  throw lastError;
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
const remote = manifest.filter((entry) => entry.localize === "build");
const failures = [];

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
      source = await download(entry.image, entry.page);
      await writeFile(cache, source);
      console.log(`↓ ${entry.slug}: fetched ${bytes(source.length)}`);
    } catch (error) {
      failures.push(`${entry.slug}: ${error?.message || error}`);
      console.error(`✗ ${entry.slug}: ${error?.message || error}`);
      continue;
    }
  }

  try {
    await processImage(source, output);
    const size = (await stat(output)).size;
    console.log(`  → public/images/slots/${entry.slug}.webp (${bytes(size)})`);
  } catch (error) {
    failures.push(`${entry.slug}: ${error?.message || error}`);
    console.error(`✗ ${entry.slug}: image conversion failed: ${error?.message || error}`);
    await unlink(cache).catch(() => {});
  }
}

if (failures.length) {
  console.error(`\nSlot image localization incomplete (${failures.length}/${remote.length}):`);
  for (const failure of failures) console.error(`- ${failure}`);
  if (!soft) {
    console.error("Build stopped so GitHub Pages cannot publish broken local image URLs.");
    process.exit(1);
  }
  console.error("Development continues because --soft was used; missing images may appear broken.");
} else {
  console.log(`\nSlot images ready: ${remote.length} build-localized asset(s).`);
}
