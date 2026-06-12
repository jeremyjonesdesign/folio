// ─────────────────────────────────────────────────────────────
// prerender.mjs — injecte le contenu de data.js en dur dans
// index.html (entre les marqueurs <!-- ssr:x -->) pour le SEO.
// À relancer après chaque édition de data.js :
//   bun prerender.mjs   (ou: node prerender.mjs)
// app.js ré-écrit le même markup au chargement — idempotent.
// ─────────────────────────────────────────────────────────────
import { readFileSync, writeFileSync } from "node:fs";

const dataSrc = readFileSync(new URL("./data.js", import.meta.url), "utf8");
const DATA = new Function(`${dataSrc}; return DATA;`)();

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const sections = {
  about: DATA.bio.map((l) => `<p>${esc(l)}</p>`).join(""),
  quote: `“${esc(DATA.quote.text)}”<br><span class="author">— ${esc(DATA.quote.author)}</span>`,
  work: DATA.work.map((w) => {
    const inner = `
    <span class="c1">${esc(w.period)}</span>
    <span class="c2">${esc(w.company)}</span>
    <span class="c3">${esc(w.role)} — ${esc(w.note)}</span>
    ${w.url ? '<span class="c4">↗</span>' : ""}`;
    return w.url
      ? `<a class="row" href="${w.url}" target="_blank" rel="noopener">${inner}</a>`
      : `<div class="row">${inner}</div>`;
  }).join(""),
  projects: DATA.projects.map((p) => `
  <a class="row" href="${p.url}" target="_blank" rel="noopener">
    <span class="c1">${esc(p.stack)}</span>
    <span class="c2">${esc(p.name)}</span>
    <span class="c3">${esc(p.desc)}</span>
    <span class="c4">${esc(p.status)}</span>
  </a>`).join(""),
  more: esc("// " + DATA.more),
  kudos: DATA.kudos.map((k, i) => `
  <figure class="kudo">
    <figcaption class="kudo-head">
      <img id="kudo-src-${i}" src="${k.avatar}" alt="" hidden>
      <canvas id="kudo-px-${i}" role="img" aria-label="${esc(k.who)}"></canvas>
      <span class="kudo-id"><b>${esc(k.who)}</b><span class="kudo-org">${esc(k.org)}</span></span>
    </figcaption>
    <blockquote>“${esc(k.text)}”</blockquote>
  </figure>`).join(""),
};

const htmlPath = new URL("./index.html", import.meta.url);
let html = readFileSync(htmlPath, "utf8");
for (const [key, content] of Object.entries(sections)) {
  const re = new RegExp(`(<!-- ssr:${key} -->)[\\s\\S]*?(<!-- /ssr:${key} -->)`);
  if (!re.test(html)) throw new Error(`marqueur ssr:${key} introuvable dans index.html`);
  html = html.replace(re, `$1${content}$2`);
}
writeFileSync(htmlPath, html);
console.log("index.html pré-rendu ✓ (" + Object.keys(sections).join(", ") + ")");
