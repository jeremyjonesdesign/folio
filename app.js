/* ──────────────────────────────────────────────────────────
   app.js — boot, banner, interactive terminal. zero deps.
   ────────────────────────────────────────────────────────── */
"use strict";

const BANNER = String.raw`
     ██╗     ██╗
     ██║     ██║
     ██║     ██║
██   ██║██   ██║
╚█████╔╝╚█████╔╝
 ╚════╝  ╚════╝`.replace(/^\n/, "");

const $ = (s) => document.querySelector(s);
const out = $("#output");
const input = $("#cmd");
const term = $("#terminal");
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ── render static sections from DATA ─────────────────── */
function esc(s) { const d = document.createElement("div"); d.textContent = s; return d.innerHTML; }

$("#about-body").innerHTML = DATA.bio.map((l) => `<p>${esc(l)}</p>`).join("");
$("#quote").innerHTML = `“${esc(DATA.quote.text)}”<br><span class="author">— ${esc(DATA.quote.author)}</span>`;

$("#work-rows").innerHTML = DATA.work.map((w) => `
  <a class="row" href="${w.url}" target="_blank" rel="noopener">
    <span class="c1">${esc(w.period)}</span>
    <span class="c2">${esc(w.company)}</span>
    <span class="c3">${esc(w.role)} — ${esc(w.note)}</span>
    <span class="c4">↗</span>
  </a>`).join("");

$("#project-rows").innerHTML = DATA.projects.map((p) => `
  <a class="row" href="${p.url}" target="_blank" rel="noopener">
    <span class="c1">${esc(p.stack)}</span>
    <span class="c2">${esc(p.name)}</span>
    <span class="c3">${esc(p.desc)}</span>
    <span class="c4">${esc(p.status)}</span>
  </a>`).join("");
$("#more").textContent = "// " + DATA.more;

$("#kudos-list").innerHTML = DATA.kudos.map((k, i) => `
  <figure class="kudo">
    <figcaption class="kudo-head">
      <img id="kudo-src-${i}" src="${k.avatar}" alt="" hidden>
      <canvas id="kudo-px-${i}" role="img" aria-label="${esc(k.who)}"></canvas>
      <span class="kudo-id"><b>${esc(k.who)}</b><span class="kudo-org">${esc(k.org)}</span></span>
    </figcaption>
    <blockquote>“${esc(k.text)}”</blockquote>
  </figure>`).join("");

/* pixelate kudos avatars — pixelit + 5-shade mono palette */
const PIX_PALETTE = [[0, 0, 0], [68, 68, 68], [136, 136, 136], [204, 204, 204], [255, 255, 255]];
DATA.kudos.forEach((k, i) => {
  const img = $(`#kudo-src-${i}`);
  const cv = $(`#kudo-px-${i}`);
  const pixelate = () => {
    // ~24 blocks across, whatever the source resolution
    const scale = Math.max(1, Math.min(50, Math.round(2400 / img.naturalWidth)));
    new pixelit({ from: img, to: cv })
      .setScale(scale).setPalette(PIX_PALETTE)
      .draw().pixelate().convertPalette();
  };
  img.onerror = () => { cv.parentElement.style.visibility = "hidden"; };
  if (img.complete && img.naturalWidth) pixelate();
  else img.onload = pixelate;
});

/* ── banner + tagline typing ──────────────────────────── */
const banner = $("#banner");
const tag = $("#tagline-text");
const TAGLINE = DATA.title;

function typeBanner(then) {
  if (reduced) { banner.textContent = BANNER; tag.textContent = TAGLINE; then(); return; }
  const lines = BANNER.split("\n");
  let i = 0;
  (function next() {
    banner.textContent = lines.slice(0, ++i).join("\n");
    if (i < lines.length) setTimeout(next, 70);
    else typeText(tag, TAGLINE, 18, then);
  })();
}
function typeText(el, text, speed, then) {
  let i = 0;
  (function tick() {
    el.textContent = text.slice(0, ++i);
    if (i < text.length) setTimeout(tick, speed);
    else if (then) then();
  })();
}

/* ── terminal ─────────────────────────────────────────── */
function print(text = "", cls = "") {
  const div = document.createElement("div");
  div.className = "line" + (cls ? " " + cls : "");
  div.innerHTML = text;
  out.appendChild(div);
  term.scrollTop = term.scrollHeight;
}
function printSlow(linesArr, i = 0) {
  if (i >= linesArr.length) return;
  print(...[].concat(linesArr[i]));
  setTimeout(() => printSlow(linesArr, i + 1), reduced ? 0 : 90);
}

const FILES = {
  "about.txt": () => DATA.bio.map(esc),
  "contact.txt": () => [
    `email:    ${esc(DATA.email)}`,
    `github:   <a href="${DATA.links.github}" target="_blank" rel="noopener">${DATA.links.github}</a>`,
    `linkedin: <a href="${DATA.links.linkedin}" target="_blank" rel="noopener">${DATA.links.linkedin}</a>`,
  ],
  "quote.txt": () => [`“${esc(DATA.quote.text)}” — ${esc(DATA.quote.author)}`],
  "clients.txt": () => [DATA.clients.map(esc).join(" · "), ["(2008 → now, independent era)", "dim"]],
  "education.txt": () => [esc(DATA.education)],
};

const COMMANDS = {
  help: () => [
    ["AVAILABLE COMMANDS", "dim"],
    "  whoami            who is this guy",
    "  ls                list files & dirs",
    "  cat <file>        read a file (try: cat about.txt)",
    "  projects          list shipped things",
    "  work              employment history",
    "  clients           17 years of logos",
    "  kudos             what they say about me",
    "  open <project>    open a project (try: open openmat)",
    "  contact           reach out",
    "  theme             invert the universe",
    "  clear             clean this mess",
    ["  …and a few undocumented ones. obviously.", "dim"],
  ],
  whoami: () => [esc(DATA.name.toLowerCase().replace(" ", "-")), ...DATA.bio.map((l) => ["  " + esc(l), "dim"])],
  ls: () => [
    "drwxr-xr-x  projects/",
    "drwxr-xr-x  work/",
    "-rw-r--r--  about.txt",
    "-rw-r--r--  clients.txt",
    "-rw-r--r--  contact.txt",
    "-rw-r--r--  education.txt",
    "-rw-r--r--  quote.txt",
  ],
  clients: () => FILES["clients.txt"](),
  kudos: () => {
    location.hash = "#kudos";
    return DATA.kudos.map((k) => [`  “${esc(k.text.slice(0, 80))}…” — ${esc(k.who)} (${esc(k.org)})`, "dim"]).concat([["", ""], ["→ scrolled you to 04 KUDOS", "dim"]]);
  },
  projects: () => {
    location.hash = "#projects";
    return DATA.projects.map((p) => `  ${p.name.padEnd(18)} ${esc(p.desc)}`).concat([["", ""], ["→ scrolled you to 03 PROJECTS", "dim"]]);
  },
  work: () => {
    location.hash = "#work";
    return DATA.work.map((w) => `  ${w.period.padEnd(14)} ${w.company.padEnd(14)} ${esc(w.role)}`).concat([["", ""], ["→ scrolled you to 02 WORK", "dim"]]);
  },
  contact: () => { location.hash = "#contact"; return FILES["contact.txt"](); },
  about: () => { location.hash = "#about"; return FILES["about.txt"](); },
  theme: () => { document.documentElement.classList.toggle("invert"); return [["universe inverted.", "dim"]]; },
  clear: () => { out.innerHTML = ""; return []; },
  pwd: () => ["/home/jeremy/projects/folio"],
  date: () => [new Date().toString()],
  echo: (args) => [esc(args.join(" "))],
  history: () => history_.map((h, i) => `  ${String(i + 1).padStart(3)}  ${esc(h)}`),
  exit: () => [["there is no escape. this is a portfolio.", "dim"]],
  vim: () => [["you fool. you absolute buffoon.", "dim"], ["(type :q! like everyone else)", "dim"]],
  ":q!": () => [["fine. you may live.", "dim"]],
  hx: () => [["respect. helix user detected.", "dim"]],
  sudo: (args) => args.join(" ") === "hire-me"
    ? [`ok → <a href="mailto:${DATA.email}?subject=hire-me">${esc(DATA.email)}</a>`]
    : [["jeremy is not in the sudoers file. this incident will be reported.", "err"]],
  cat: (args) => {
    const f = args[0];
    if (!f) return [["usage: cat <file>", "dim"]];
    if (FILES[f]) return FILES[f]();
    return [[`cat: ${esc(f)}: No such file or directory`, "err"]];
  },
  open: (args) => {
    const id = (args[0] || "").toLowerCase();
    const p = DATA.projects.find((x) => x.id === id || x.name.toLowerCase() === id);
    if (!p) return [["usage: open <project>   // " + DATA.projects.map((x) => x.id).join(" · "), "dim"]];
    window.open(p.url, "_blank", "noopener");
    return [[`→ opening ${esc(p.name)}…`, "dim"]];
  },
};
COMMANDS.cd = () => [["nice try. you stay here.", "dim"]];
COMMANDS.rm = () => [["rm: permission denied (and rude)", "err"]];
COMMANDS.man = () => [["there is no manual. design is self-explanatory or it's wrong.", "dim"]];

const history_ = [];
let histIdx = -1;

function run(raw) {
  const line = raw.trim();
  print(`<span class="dim">guest@jeremy.design:~$</span> ${esc(line)}`);
  if (!line) return;
  history_.push(line);
  histIdx = history_.length;
  const [cmd, ...args] = line.split(/\s+/);
  const fn = COMMANDS[cmd.toLowerCase()] || COMMANDS[cmd];
  if (fn) printSlow(fn(args));
  else print(`command not found: ${esc(cmd)} <span class="dim">— try help</span>`, "err");
}

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") { run(input.value); input.value = ""; sizeInput(); }
  else if (e.key === "ArrowUp") { e.preventDefault(); if (histIdx > 0) { input.value = history_[--histIdx]; sizeInput(); } }
  else if (e.key === "ArrowDown") { e.preventDefault(); input.value = histIdx < history_.length - 1 ? history_[++histIdx] : ((histIdx = history_.length), ""); sizeInput(); }
  else if (e.key === "Tab") {
    e.preventDefault();
    const v = input.value.toLowerCase();
    if (!v) return;
    const m = Object.keys(COMMANDS).filter((c) => c.startsWith(v));
    if (m.length === 1) { input.value = m[0] + " "; sizeInput(); }
    else if (m.length > 1) print(m.join("  "), "dim");
  }
});
input.addEventListener("input", sizeInput);
function sizeInput() { input.style.width = Math.max(1, input.value.length) + "ch"; }
term.addEventListener("click", () => input.focus());
document.addEventListener("keydown", (e) => {
  if (e.key === "/" && document.activeElement !== input) { e.preventDefault(); input.focus(); }
});
document.querySelectorAll(".cmdlink").forEach((b) =>
  b.addEventListener("click", () => { run(b.dataset.cmd); input.focus(); })
);

/* ── boot ─────────────────────────────────────────────── */
typeBanner(() => {
  printSlow([
    ["[ OK ] loading design system… found: black, white.", "dim"],
    ["[ OK ] 17 years of design experience loaded (since 2008)", "dim"],
    ["[ OK ] mounting ~/projects (26 entries)", "dim"],
    ["[ OK ] 3 years @ cycle.app → exit: acquired (atlassian)", "dim"],
    ["[ OK ] current: contentsquare", "dim"],
    ["[ OK ] side-projects daemon: running", "dim"],
    "",
    "welcome. type <b>help</b> — or press <b>/</b> anywhere to focus the terminal.",
  ]);
  if (!matchMedia("(max-width: 720px)").matches) input.focus();
});
sizeInput();
