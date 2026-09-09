import fs from 'node:fs';

const file = 'src/app/globals.css';
let css = fs.readFileSync(file, 'utf8');
const marker = '/* slotfolio-neutral-palette-20260909 */';

if (css.includes(marker)) {
  console.log('Neutral palette already present');
  process.exit(0);
}

css += `\n\n${marker}\n:root {\n  --paper: #f4f5f4;\n  --muted: #666866;\n  --line: #c8cbc9;\n  --olive: #e8ebe9;\n}\n\n/* Keep the existing editorial red/ink system, but remove the yellow-beige cast from large surfaces. */\n.feature-band {\n  background: #ecefed;\n  border-color: #cdd1cf;\n}\n.collection-teaser {\n  background: #eef0ee;\n  border-color: #cfd2d0;\n}\n.collection-teaser p {\n  color: #686b69;\n}\n.filters select {\n  background: #f0f2f0;\n  border-color: #c0c4c2;\n}\n.view-controls button[aria-pressed="true"] {\n  background: #e9ecea;\n}\n.comparison-table tr:nth-child(even),\n.comparison .comparison-table tr:nth-child(even) {\n  background: #eff1ef;\n}\n.comparison-summary {\n  background: #edf0ee;\n  border-color: #d2d6d4;\n}\n.comparison-summary > div + div {\n  border-color: #d2d6d4;\n}\n.comparison-selection-empty {\n  color: #a6aaa8;\n}\n`;

fs.writeFileSync(file, css);
console.log('Neutral Slotfolio palette appended');
