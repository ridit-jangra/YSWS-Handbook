// Copy shared by every landing page, so the themes can be compared on design alone.

export const site = {
  name: "You Shark, We Shark",
  short: "YSWS",
  punchline: "Build anything shark-shaped. Every hour you ship earns you Blåhajs and shark gear.",
  tagline: "You shark, we shark.",
  signupUrl: "#signup", // TODO: real signup form
  slackUrl: "https://hackclub.com/slack/",
  hackClubUrl: "https://hackclub.com/",
};

export const nav = [
  { label: "What is this", href: "#what" },
  { label: "How it works", href: "#how" },
  { label: "Shark Shop", href: "#shop" },
  { label: "FAQ", href: "#faq" },
];

export const what = {
  title: "What is You Shark, We Shark?",
  body: [
    "You Shark, We Shark is a Hack Club You Ship, We Ship for teenagers who love sharks. Build any project with a shark in it: a game, a website, an app, a bot, a PCB, a 3D print. If it has fins, it counts.",
    "Every hour you spend building earns you shark teeth. Spend your teeth in the Shark Shop on Blåhajs, plushies, hoodies, and other shark stuff, shipped to your door.",
  ],
  ideas: [
    { kind: "Game", title: "Feeding frenzy", text: "A little browser game where you're a shark trying to grow without getting caught in a net." },
    { kind: "Website", title: "Blåhaj adoption center", text: "A gallery where people post their Blåhaj, give it a name, and write its backstory." },
    { kind: "App", title: "Shark spotter", text: "A map of real tagged shark pings, with fun facts about each species that swims by." },
    { kind: "Bot", title: "Shark fact of the day", text: "A Slack or Discord bot that drops one weird, true shark fact every morning." },
    { kind: "Hardware", title: "Fin nightlight", text: "A 3D-printed dorsal fin with LEDs that ripple like light under water." },
    { kind: "Hardware", title: "Hammerhead macropad", text: "A hammerhead-shaped PCB with keys on each side of its head." },
  ],
};

export const steps = [
  {
    title: "Build",
    text: "Make something shark related, as weird or as serious as you like. Track your time with Hackatime for code, or a short build journal with photos for hardware.",
  },
  {
    title: "Submit",
    text: "Ship it with a public repo, a README, and a demo or photos. A reviewer checks it out and approves your hours.",
  },
  {
    title: "Get sharks",
    text: "Approved hours become shark teeth, 1 tooth per hour. Trade them in the Shark Shop and we mail your Blåhaj to your door.",
  },
];

// Draft prices: confirm the per-hour rate with the sponsor before launch.
export const shop = [
  { item: "Shark sticker sheet", teeth: 3 },
  { item: "Shark keychain", teeth: 5 },
  { item: "Shark socks", teeth: 8 },
  { item: "Smol Blåhaj (55 cm)", teeth: 10 },
  { item: "Shark slippers", teeth: 12 },
  { item: "Blåhaj (100 cm)", teeth: 20 },
  { item: "Shark hoodie", teeth: 25 },
];

export const faq = [
  {
    q: "Who can join?",
    a: "Anyone aged 13 to 18, anywhere in the world. You don't need any experience; first projects are welcome.",
  },
  {
    q: "Does it cost anything?",
    a: "No. You Shark, We Shark is free. You build, and we pay for the sharks and the shipping.",
  },
  {
    q: "What counts as shark related?",
    a: "Anything where sharks are the point: shark games, shark sites, shark hardware, shark data, shark art tools. Putting a shark emoji in your README doesn't count, but a reviewer will happily tell you if you're unsure.",
  },
  {
    q: "How are my hours counted?",
    a: "Code is tracked with Hackatime. Hardware and CAD hours come from your build journal: a few photos and notes for each session. Reviewers approve the hours when you submit.",
  },
  {
    q: "How many hours for a Blåhaj?",
    a: "About 10 hours gets you a smol Blåhaj and about 20 gets you the full-size one. Shop prices are still being finalised, so these may change before launch.",
  },
  {
    q: "Can I submit a project I already made?",
    a: "Only the hours you spend on it after you join count. Adding a big new shark feature to an old project is fine.",
  },
  {
    q: "Can I work with friends?",
    a: "Yes. Each person tracks and submits their own hours, and each person earns their own teeth.",
  },
  {
    q: "I've got more questions.",
    a: "Come ask in the Hack Club Slack. Someone from the team (or a fellow shark) will answer.",
  },
];
