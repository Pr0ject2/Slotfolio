import fs from "node:fs/promises";
await fs.mkdir("public/images", { recursive: true });
const sources = [];
for (const [i, s] of [
  "gates-of-olympus",
  "sweet-bonanza",
  "the-dog-house",
  "big-bass-bonanza",
  "book-of-dead",
  "reactoonz",
].entries()) {
  const page =
    i < 4
      ? "https://www.pragmaticplay.com/en/games/" + s + "/"
      : "https://www.playngo.com/games/" + s;
  const html = await (await fetch(page)).text();
  const url = html.match(/<meta property="og:image" content="([^"]+)/)[1];
  await fs.writeFile(
    "public/images/" + s + (i < 4 ? ".png" : ".webp"),
    Buffer.from(await (await fetch(url)).arrayBuffer()),
  );
  sources.push({ slug: s, page, image: url });
}
await fs.writeFile("docs/image-sources.json", JSON.stringify(sources, null, 2));
