# folio

jeremy.design — portfolio. Black & white, monospace, interactive terminal, zero framework, zero dependency.

## Run

```bash
bun server.ts          # → http://localhost:3025
```

Or any static server — it's just `index.html` + `style.css` + `app.js` + `data.js`.

## Edit content

Everything lives in **`data.js`** (bio, work history, projects, links). After editing it, run:

```bash
bun prerender.mjs      # re-injects the content into index.html (SEO — static HTML)
```

That's the only "build step": it copies the rendered sections between the `<!-- ssr:* -->` markers of `index.html` so crawlers get real text without executing JS. `app.js` re-renders the same markup at runtime.

## Easter eggs

`sudo hire-me` · `vim` · `:q!` · `hx` · `rm` · `exit` · `theme` — and `/` focuses the terminal from anywhere.

---
*The previous Vue 3 version lives on the `legacy-vue` branch.*
