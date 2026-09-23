/* =============================================================================
   conferences.js — seed list of conferences and dated deadlines worth attending.

   Dates confirmed by research on 23 Sep 2026. Anything unconfirmed says so.
   The daily updater appends new finds to feed.json, not to this file, so this
   stays a stable hand-checked seed.

   kind: "conference" | "deadline"
   cost: rough entry cost, and whether a free route exists
   ============================================================================= */

const EVENTS = [
  /* ---- imminent deadlines ---- */
  { kind:"deadline", name:"IAPS AI Policy Fellowship — Spring 2027", url:"https://www.iaps.ai/fellowship",
    where:"Washington DC + remote", when:"27 Sep 2026", dl:"2026-09-27",
    cost:"Free to apply; $18K–$24K stipend if accepted", verified:true,
    why:"Fully funded, global applications, and the closest imminent thing to a real fellowship you can get" },

  { kind:"deadline", name:"Y Combinator — Winter 2027", url:"https://www.ycombinator.com/apply",
    where:"San Francisco", when:"2 Nov 2026, 8pm PT", dl:"2026-11-02",
    cost:"Free to apply", verified:true,
    why:"Even a rejected application forces you to articulate an idea properly" },

  { kind:"deadline", name:"Anthropic Fellows — November intake", url:"https://alignment.anthropic.com/2025/anthropic-fellows-program-2026/",
    where:"US / UK", when:"November 2026", dl:"2026-11-01",
    cost:"Free to apply; stipend plus compute if accepted", verified:true,
    why:"No PhD or ML publications required — the most open frontier-lab route" },

  { kind:"deadline", name:"VC University registration window", url:"https://venturecapitaluniversity.com/online-course/",
    where:"Online", when:"7–14 Oct 2026", dl:"2026-10-07",
    cost:"Paid course", verified:true,
    why:"Only if you decide finance is the direction — the window is one week wide" },

  { kind:"deadline", name:"JPMorgan ReEntry 2027 applications open", url:"https://www.jpmorganchase.com/careers/explore-opportunities/programs/reentry-program",
    where:"Global offices", when:"16 Nov 2026 – 28 Feb 2027", dl:"2026-11-16",
    cost:"Free to apply; paid 15-week fellowship", verified:true,
    why:"Only relevant if you have a career break of 2+ years" },

  { kind:"deadline", name:"Kauffman Fellows early fee deadline", url:"https://www.kauffmanfellows.org/program/application-details",
    where:"Global", when:"12 Dec 2026", dl:"2026-12-12",
    cost:"$100 before, $300 after", verified:true,
    why:"Noted for completeness — you are too early for this one" },

  { kind:"deadline", name:"TinySeed Spring 2027 applications open", url:"https://tinyseed.com/program",
    where:"Fully remote", when:"February 2027", dl:"2027-02-01",
    cost:"Free to apply; $120K if accepted", verified:true,
    why:"The one accelerator that never asks you to relocate" },

  /* ---- conferences: dated and confirmed ---- */
  { kind:"conference", name:"Bengaluru Tech Summit 2026", url:"https://www.bengalurutechsummit.com/",
    where:"BIEC, Bengaluru, India", when:"17–19 Nov 2026", dl:"2026-11-17",
    cost:"Paid passes; student and startup rates exist", verified:true,
    why:"Asia's largest tech summit — the single best India networking event if you go the India route" },

  { kind:"conference", name:"Web Summit Qatar 2027", url:"https://qatar.websummit.com/",
    where:"Doha, Qatar", when:"31 Jan – 3 Feb 2027", dl:"2027-01-31",
    cost:"Paid; startup and volunteer tickets available", verified:true,
    why:"Cheapest major Web Summit to reach from both India and the US" },

  { kind:"conference", name:"India Digital Summit 2027", url:"https://www.indiadigitalsummit.in/",
    where:"The Leela Bhartiya City, Bengaluru", when:"11–12 Feb 2027", dl:"2027-02-11",
    cost:"Paid", verified:true,
    why:"India's main AI and digital growth leadership conference" },

  { kind:"conference", name:"SXSW 2027", url:"https://www.sxsw.com/",
    where:"Austin, Texas, USA", when:"13–21 Mar 2027", dl:"2027-03-13",
    cost:"Expensive; volunteer programme gives free entry", verified:true,
    why:"Volunteering is the realistic way in — apply months ahead" },

  { kind:"conference", name:"Web Summit Vancouver 2027", url:"https://vancouver.websummit.com/",
    where:"Vancouver, Canada", when:"25–28 May 2027", dl:"2027-05-25",
    cost:"Paid; ALPHA startup tickets are cheap", verified:true,
    why:"Formerly Collision; needs a Canadian visa, so plan early" },

  { kind:"conference", name:"GITEX AI India 2027", url:"https://www.gitex-india.com/",
    where:"Bengaluru, India", when:"2–4 Jun 2027", dl:"2027-06-02",
    cost:"Paid; free expo passes usually available", verified:true,
    why:"AI, semiconductors and deep tech, with investors present" },

  { kind:"conference", name:"Web Summit Rio 2027", url:"https://rio.websummit.com/en/",
    where:"Rio de Janeiro, Brazil", when:"14–17 Jun 2027", dl:"2027-06-14",
    cost:"Paid", verified:true,
    why:"Latin America's largest; relevant only if you target that market" },

  { kind:"conference", name:"TechCrunch Disrupt 2027", url:"https://techcrunch.com/events/",
    where:"San Francisco, USA", when:"October 2027 — dates unconfirmed", dl:null,
    cost:"Paid; scholarship and volunteer routes exist", verified:false,
    why:"Best US startup conference for meeting investors as a nobody" },

  { kind:"conference", name:"Web Summit Lisbon 2027", url:"https://websummit.com/",
    where:"Lisbon, Portugal", when:"8–11 Nov 2027", dl:"2027-11-08",
    cost:"Paid; ALPHA startup tickets are the cheap route", verified:true,
    why:"The largest tech conference in the world" },

  /* ---- research conferences with funded routes ---- */
  { kind:"conference", name:"NeurIPS 2027", url:"https://neurips.cc/",
    where:"Europe — city to be announced", when:"December 2027", dl:"2027-05-21",
    cost:"Travel grants for accepted authors; volunteer roles waive fees", verified:true,
    why:"Paper deadline 21 May 2027, travel grant deadline 20 Mar 2027" },

  { kind:"conference", name:"ICLR 2027", url:"https://iclr.cc/",
    where:"Rotates annually", when:"Spring 2027", dl:null,
    cost:"Student volunteer roles plus travel grants and fee waivers", verified:true,
    why:"The most accessible top-tier ML conference for newcomers" },

  { kind:"conference", name:"Citadel Conference Travel Grant", url:"https://www.citadel.com/careers/programs-and-events/conference-travel-grant/",
    where:"Funds travel to NeurIPS, ICML, Grace Hopper and others", when:"Deadlines set per conference", dl:null,
    cost:"Free — covers registration, flights, hotel and food", verified:true,
    why:"Covers the entire cost of attending a major conference. Requires current enrolment in a bachelor's, master's or PhD" },

  { kind:"conference", name:"Jump Trading Conference Travel Grant", url:"https://www.jumptrading.com/conference-travel-grant",
    where:"Major research conferences", when:"Rolling per conference", dl:null,
    cost:"Free — grant covers attendance", verified:true,
    why:"Same idea as Citadel's, different firm, separate application" }
];
