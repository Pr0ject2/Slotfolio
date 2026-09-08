import fs from "node:fs/promises";
await fs.mkdir("public/fonts", { recursive: true });
let css = await (
  await fetch(
    "https://fonts.googleapis.com/css2?family=Golos+Text:wght@400;500;600;700;800&display=swap",
    { headers: { "User-Agent": "Mozilla/5.0" } },
  )
).text();
let i = 0;
for (const url of new Set(css.match(/https:\/\/[^)]+/g) || [])) {
  const path = "golos-" + i++ + (url.includes("woff2") ? ".woff2" : ".ttf");
  await fs.writeFile(
    "public/fonts/" + path,
    Buffer.from(await (await fetch(url)).arrayBuffer()),
  );
  css = css.split(url).join("/fonts/" + path);
}
await fs.writeFile("public/fonts/fonts.css", css);
