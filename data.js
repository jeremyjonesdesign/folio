// ─────────────────────────────────────────────────────────────
// data.js — tout le contenu du folio. Édite ici, rien d'autre.
// Sources : LinkedIn public + archives jeremy.design (2024-2025).
// ─────────────────────────────────────────────────────────────
const DATA = {
  name: "Jeremy Jones",
  handle: "jeremyjonesdesign",
  title: "Product Maker",
  location: "Paris, France",
  email: "contact@jeremy.design",
  bio: [
    "Multidisciplinary product designer. 17+ years in the industry — started in 2008.",
    "From IC to Head of. SaaS, gaming, healthcare & fashion. USA & Europe.",
    "3 years designing Cycle (cycle.app), until its acquisition by Atlassian.",
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
      role: "Innovation AI Product",
      note: "Digital experience analytics.",
      url: "https://contentsquare.com",
    },
    {
      period: "2022 — 2025",
      company: "Cycle",
      role: "Product Designer",
      note: "3 years building cycle.app — AI-powered product feedback. Acquired by Atlassian.",
      url: "https://www.atlassian.com",
    },
    {
      period: "independent",
      company: "Async",
      role: "Product Designer",
      note: "Voice-first collaboration, with Ilan Abehassera.",
      url: "https://async.com",
    },
    {
      period: "independent",
      company: "Typology",
      role: "Product Designer",
      note: "Designed the Typology app — from ideation to execution.",
      url: "https://typology.com",
    },
    {
      period: "2008 — now",
      company: "Independent",
      role: "Visual Product Designer",
      note: "Arcads, Facebook, Activision, Hermès, Chartboost, Voodoo, Spendesk, June, Etam, Edenred…",
    },
  ],
  education: "Institut Ingemedia — 2008-2010",
  clients: [
    "Arcads", "Facebook", "Activision", "Hermès", "Chartboost", "Voodoo", "Spendesk",
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
      url: "https://openmat.fr",
    },
    {
      id: "coachingsimple",
      name: "CoachingSimple",
      desc: "Full coaching platform — programs, nutrition, payments, AI program generation.",
      stack: "Next.js · tRPC · Supabase · Stripe",
      status: "live",
      url: "https://www.coachingsimple.fr",
    },
  ],
  more: "+ ~20 experiments in ~/projects (summail, tariff, benchmark, audioletter, spellbook…)",
  kudos: [
    {
      who: "Ilan Abehassera",
      org: "Async",
      avatar: "img/kudos/ilan.jpg",
      text: "I've worked with many UX/UI designers over the past 15 years for a few venture-backed startups, and Jeremy has consistently over delivered. He gets things fast, he has taste, and knows how to adapt to the product he's building. He's the best!",
    },
    {
      who: "Enzo Avigo",
      org: "June",
      avatar: "img/kudos/enzo.jpg",
      text: "Jeremy is a prodigious designer. He managed to deliver a really well rounded experience within a few weeks only 🔥",
    },
    {
      who: "Pierre Bascoul",
      org: "Typology",
      avatar: "img/kudos/pierre.png",
      text: "Jeremy has been instrumental in the development of our Typology application. Genuine expertise in UX and UI design, contributing at every stage from ideation to execution.",
    },
    {
      who: "Cédric Taravella",
      org: "Etam",
      avatar: "img/kudos/cedric.jpg",
      text: "Jeremy designed our progressive web app. He perfectly understood our needs and our ambition. Efficient, solution minded and passionate.",
    },
    {
      who: "Jean Davoust",
      org: "STid",
      avatar: "img/kudos/jean.png",
      text: "Very challenging schedule — Jeremy adapted perfectly to the time constraints and the team needs. He quickly grasps business issues and produces very efficiently.",
    },
  ],
  links: {
    github: "https://github.com/jeremyjonesdesign",
    linkedin: "https://www.linkedin.com/in/jeremy-jones-designer/",
    dribbble: "https://dribbble.com/jeijones",
  },
};
