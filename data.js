// ─────────────────────────────────────────────────────────────
// data.js — tout le contenu du folio. Édite ici, rien d'autre.
// ─────────────────────────────────────────────────────────────
const DATA = {
  name: "Jeremy Jones",
  handle: "jeremyjonesdesign",
  title: "Product Designer · Product Maker",
  location: "France",
  email: "contact@jeremy.design",
  bio: [
    "Product designer with a maker's brain.",
    "6 years designing Cycle (cycle.app) from zero to its acquisition by Atlassian.",
    "Now at Contentsquare. Nights & weekends: I ship my own products.",
    "I design in Figma, then I build the real thing.",
  ],
  quote: {
    text: "For every complex problem, there is an answer that is clear, simple and wrong.",
    author: "H.L. Mencken",
  },
  work: [
    {
      period: "2025 — now",
      company: "Contentsquare",
      role: "Product Designer",
      note: "Digital experience analytics.",
      url: "https://contentsquare.com",
    },
    {
      period: "2025",
      company: "Atlassian",
      role: "Product Designer — Jira Product Discovery",
      note: "Joined through the Cycle acquisition.",
      url: "https://www.atlassian.com/software/jira/product-discovery",
    },
    {
      period: "2019 — 2025",
      company: "Cycle",
      role: "Product Designer",
      note: "6 years building cycle.app — AI-powered product feedback. Acquired by Atlassian.",
      url: "https://cycle.app",
    },
  ],
  projects: [
    {
      id: "openmat",
      name: "OpenMat",
      desc: "Training companion for grapplers. Find open mats, log your rolls.",
      stack: "Astro · iOS · Android",
      status: "live",
      url: "https://openmat-web-eta.vercel.app",
    },
    {
      id: "coachingsimple",
      name: "CoachingSimple",
      desc: "Full coaching platform — programs, nutrition, payments, AI program generation.",
      stack: "Next.js · tRPC · Supabase · Stripe",
      status: "live",
      url: "https://coachingsimple-nextjs.vercel.app",
    },
    {
      id: "cycle",
      name: "Cycle.app",
      desc: "Product feedback, processed by AI. My 6-year design playground. Acquired by Atlassian.",
      stack: "design · 2019→2025",
      status: "acquired",
      url: "https://cycle.app",
    },
    {
      id: "agrofleet",
      name: "AgroFleet",
      desc: "Fleet management for vineyards & estates.",
      stack: "Next.js · React 19",
      status: "wip",
      url: "https://agrium-seven.vercel.app",
    },
    {
      id: "north",
      name: "North · Signature",
      desc: "Signature-packet assembly for closing teams.",
      stack: "Next.js · Claude API",
      status: "v0",
      url: "https://github.com/jeremyjonesdesign/north-signature",
    },
    {
      id: "newedge",
      name: "FontNewEdge",
      desc: "A typeface experiment. Sharp edges only.",
      stack: "type design",
      status: "open-source",
      url: "https://github.com/jeremyjonesdesign/fontnewedge",
    },
  ],
  more: "+ ~20 experiments in ~/projects (summail, tariff, benchmark, audioletter, spellbook…)",
  links: {
    github: "https://github.com/jeremyjonesdesign",
    linkedin: "https://www.linkedin.com/in/jeremy-jones-designer/",
  },
};
