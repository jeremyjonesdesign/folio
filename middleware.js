// ──────────────────────────────────────────────────────────
// Vercel Routing Middleware — gate /admin behind HTTP Basic Auth.
// Runs at the edge BEFORE the static file is served. The secret
// lives only in env vars (ADMIN_USER / ADMIN_PASSWORD), never in
// the client or the repo. Public site is untouched.
// ──────────────────────────────────────────────────────────
export const config = {
  matcher: ["/admin", "/admin.html"],
};

// constant-time-ish string compare (avoids trivial timing leaks)
function safeEqual(a, b) {
  if (typeof a !== "string" || typeof b !== "string") return false;
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

const UNAUTHORIZED = () =>
  new Response("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="JJ studio", charset="UTF-8"',
      "Cache-Control": "no-store",
    },
  });

export default function middleware(request) {
  const expectedUser = process.env.ADMIN_USER || "jeremy";
  const expectedPass = process.env.ADMIN_PASSWORD;

  // Fail closed: if no password is configured, the page stays locked.
  if (!expectedPass) {
    return new Response(
      "Admin locked — set the ADMIN_PASSWORD environment variable in Vercel.",
      { status: 503, headers: { "Cache-Control": "no-store" } }
    );
  }

  const header = request.headers.get("authorization") || "";
  if (!header.startsWith("Basic ")) return UNAUTHORIZED();

  let user = "", pass = "";
  try {
    const decoded = atob(header.slice(6));
    const i = decoded.indexOf(":");
    user = decoded.slice(0, i);
    pass = decoded.slice(i + 1);
  } catch {
    return UNAUTHORIZED();
  }

  if (safeEqual(user, expectedUser) && safeEqual(pass, expectedPass)) {
    return; // authenticated → continue to the static file
  }
  return UNAUTHORIZED();
}
