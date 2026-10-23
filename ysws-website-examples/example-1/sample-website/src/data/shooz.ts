// Copy shared by every landing page, so the themes can be compared on design alone.

export const site = {
  name: "Shooz",
  punchline: "Build 20 hours of shoe-themed projects. We send you $100 for new shoes.",
  short: "You ship feet. We ship shoes.",
  signupUrl: "#signup", // TODO: real signup form
  slackUrl: "https://hackclub.com/slack/",
};

export const nav = [
  { label: "What is this", href: "#what" },
  { label: "How it works", href: "#how" },
  { label: "FAQ", href: "#faq" },
];

export const what = {
  title: "What is Shooz?",
  body: [
    "Shooz is a Hack Club You Ship, We Ship for teenagers who'd like a new pair of shoes. Spend 20 hours building software or CAD projects about feet and shoes, ship them, and we'll send you a $100 shoe grant.",
    "Spend the grant on sneakers, trainers, running shoes, boots, or Crocs. If it goes on your feet, it counts.",
  ],
  ideas: [
    { kind: "Software", title: "Sneaker collection tracker", text: "Log every pair you own, what you paid, and how many miles they've walked." },
    { kind: "Software", title: "Step counter game", text: "Turn your daily steps into XP, levels, and a leaderboard with your friends." },
    { kind: "Software", title: "Shoe size converter", text: "US, UK, EU, and cm, across brands that all size differently." },
    { kind: "CAD", title: "Croc charms", text: "Model your own clip-on charms and get them ready to 3D print." },
    { kind: "CAD", title: "Custom insole", text: "Design an insole shaped to your own foot scan or tracing." },
    { kind: "CAD", title: "Wall shoe rack", text: "A modular rack that grows as your collection does." },
  ],
};

export const steps = [
  {
    title: "Build",
    text: "Make software or CAD projects about feet or shoes. Track your time: Hackatime for code, a progress journal with screenshots for CAD. Get to 20 hours across one project or several.",
  },
  {
    title: "Submit",
    text: "Ship each project with a public repo or your CAD files, a short write-up, and a demo or renders. Someone from the team reviews it and approves your hours.",
  },
  {
    title: "Get your shoes",
    text: "Once you have 20 approved hours, we send you a $100 shoe grant. Pick your pair and post a photo of them in #shooz.",
  },
];

export const faq = [
  {
    q: "Who can join?",
    a: "Anyone aged 13 to 18, anywhere in the world. You don't need to be in a Hack Club already.",
  },
  {
    q: "How much does it cost?",
    a: "Nothing. Shooz is free, like every Hack Club program.",
  },
  {
    q: "What counts as feet or shoes themed?",
    a: "Anything where feet or shoes are the point: trackers, games, tools, shoe accessories, foot-health apps, gear for storing or cleaning shoes. If you're not sure, ask in #shooz before you start.",
  },
  {
    q: "Can I split my 20 hours across several projects?",
    a: "Yes. Ship one big project or a few small ones. Your approved hours add up.",
  },
  {
    q: "How are CAD hours tracked?",
    a: "Keep a short journal as you work, with screenshots and notes for each session. Reviewers use it, plus your final files, to approve your time.",
  },
  {
    q: "Can I really buy Crocs?",
    a: "Yes. Sneakers, trainers, boots, slides, Crocs: any shoes you'll wear, up to $100.",
  },
  {
    q: "Is this legit?",
    a: "Yes. Hack Club is a 501(c)(3) nonprofit that has run dozens of You Ship, We Ship programs for teenagers. Shooz is funded by donations.",
  },
  {
    q: "I have another question.",
    a: "Ask in the #shooz channel on the Hack Club Slack and someone will answer.",
  },
];
