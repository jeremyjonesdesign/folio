// ─────────────────────────────────────────────────────────────
// data.js — tout le contenu du folio. Édite ici, rien d'autre.
// Sources : LinkedIn public + archives jeremy.design (2024-2025).
// ─────────────────────────────────────────────────────────────
const DATA = {
  name: "Jeremy Jones",
  handle: "jeremyjonesdesign",
  title: "Product Designer · Product Maker",
  location: "Paris, France",
  email: "contact@jeremy.design",
  bio: [
    "Multidisciplinary product designer. 17+ years in the industry — started in 2008.",
    "From IC to Head of. SaaS, gaming, healthcare & fashion. USA & Europe.",
    "6 years designing Cycle (cycle.app), until its acquisition by Atlassian.",
    "Now at Contentsquare. Nights & weekends: I design AND build my own products.",
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
    {
      period: "2008 — 2025",
      company: "Independent",
      role: "Visual Product Designer",
      note: "Facebook, Activision, Hermès, Chartboost, Voodoo, Spendesk, Typology, June, Async, Etam, Edenred…",
      url: "https://web.archive.org/web/20250406145749/https://jeremy.design/",
    },
  ],
  education: "Institut Ingemedia — 2008-2010",
  clients: [
    "Facebook", "Activision", "Hermès", "Chartboost", "Voodoo", "Spendesk",
    "Typology", "June", "Async", "STid", "Brigad", "Mozza", "Hexa",
    "Etam", "Immosquare", "Edenred", "Tchek",
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
  kudos: [
    {
      who: "Ilan Abehassera",
      org: "Async",
      text: "I've worked with many UX/UI designers over the past 15 years for a few venture-backed startups, and Jeremy has consistently over delivered. He gets things fast, he has taste, and knows how to adapt to the product he's building. He's the best!",
    },
    {
      who: "Enzo Avigo",
      org: "June",
      text: "Jeremy is a prodigious designer. He managed to deliver a really well rounded experience within a few weeks only 🔥",
    },
    {
      who: "Pierre Bascoul",
      org: "Typology",
      text: "Jeremy has been instrumental in the development of our Typology application. Genuine expertise in UX and UI design, contributing at every stage from ideation to execution.",
    },
    {
      who: "Cédric Taravella",
      org: "Etam",
      text: "Jeremy designed our progressive web app. He perfectly understood our needs and our ambition. Efficient, solution minded and passionate.",
    },
    {
      who: "Jean Davoust",
      org: "STid",
      text: "Very challenging schedule — Jeremy adapted perfectly to the time constraints and the team needs. He quickly grasps business issues and produces very efficiently.",
    },
  ],
  links: {
    github: "https://github.com/jeremyjonesdesign",
    linkedin: "https://www.linkedin.com/in/jeremy-jones-designer/",
    dribbble: "https://dribbble.com/jeijones",
  },
};
