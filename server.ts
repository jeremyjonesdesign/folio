// Tiny static server — zero dependency, like the rest.
const port = Number(process.env.PORT ?? 3025);
const root = import.meta.dir;
const types: Record<string, string> = {
  html: "text/html; charset=utf-8",
  css: "text/css; charset=utf-8",
  js: "text/javascript; charset=utf-8",
  svg: "image/svg+xml",
  png: "image/png",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  ico: "image/x-icon",
  woff2: "font/woff2",
  txt: "text/plain; charset=utf-8",
  xml: "application/xml; charset=utf-8",
};

Bun.serve({
  port,
  async fetch(req) {
    const url = new URL(req.url);
    let path = decodeURIComponent(url.pathname);
    if (path === "/") path = "/index.html";
    if (path.includes("..")) return new Response("nope", { status: 400 });
    const file = Bun.file(root + path);
    if (!(await file.exists())) {
      return new Response("404 — try /  (or: curl jeremy.design | less)", {
        status: 404,
        headers: { "content-type": "text/plain; charset=utf-8" },
      });
    }
    const ext = path.split(".").pop() ?? "";
    return new Response(file, {
      headers: { "content-type": types[ext] ?? "application/octet-stream" },
    });
  },
});
console.log(`folio → http://localhost:${port}`);
