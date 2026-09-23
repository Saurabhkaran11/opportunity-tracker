/* =============================================================================
   plan.js — the 90-day plan, as data.

   Runs Wed 23 Sep 2026 → Mon 21 Dec 2026. Week 1 is a short week because today
   is a Wednesday and the IAPS deadline is four days away.

   Each task: [id, text, optional link]
   'focus' is the one thing that matters most that week — if you only do one.
   ============================================================================= */

const PLAN_START = "2026-09-23";

const WEEKS = [
  { n:1, from:"2026-09-23", to:"2026-09-27", title:"Move on the thing that expires",
    focus:"The IAPS deadline is the only genuinely urgent item in the next three months.",
    tasks:[
      ["w1a","Apply to IAPS — closes 27 Sep, fully funded, global","https://www.iaps.ai/fellowship"],
      ["w1b","Open a free WorldQuant BRAIN account and read the intro docs","https://worldquantbrain.com/consultant"],
      ["w1c","Sign up to YC Startup School and watch the first two sessions","https://www.startupschool.org/"],
      ["w1d","Find a Toastmasters club near you and book a free guest visit","https://www.toastmasters.org/find-a-club"],
      ["w1e","Start Kaggle Learn: Python or Intro to ML, whichever fits","https://www.kaggle.com/learn"]
    ]},

  { n:2, from:"2026-09-28", to:"2026-10-04", title:"Get a surface where money can reach you",
    focus:"A profile that can receive work beats another course.",
    tasks:[
      ["w2a","Put up a Contra profile with three concrete services and prices","https://contra.com/"],
      ["w2b","Finish two Forage virtual experiences — free, and banks recognise them","https://www.theforage.com/virtual-experience/"],
      ["w2c","Submit your first BRAIN alphas, even bad ones","https://platform.worldquantbrain.com/learn"],
      ["w2d","Attend your first Toastmasters meeting as a guest",null],
      ["w2e","Draft the Recurse Center application — do not submit yet","https://www.recurse.com/apply"]
    ]},

  { n:3, from:"2026-10-05", to:"2026-10-11", title:"Submit things",
    focus:"Two applications out the door. Applications you do not send have a 0% rate.",
    tasks:[
      ["w3a","Submit the Recurse Center application","https://www.recurse.com/apply"],
      ["w3b","Decide on VC University — registration is only open 7–14 Oct","https://venturecapitaluniversity.com/online-course/"],
      ["w3c","Ten BRAIN alphas submitted in total",null],
      ["w3d","Apply to Mercor and Outlier for paid AI work","https://mercor.com/"],
      ["w3e","Join Toastmasters and book your Icebreaker speech","https://www.toastmasters.org/membership"]
    ]},

  { n:4, from:"2026-10-12", to:"2026-10-18", title:"First dollar, first speech",
    focus:"Getting paid once — any amount — changes how you think about all of this.",
    tasks:[
      ["w4a","Send ten proposals on Contra or Upwork. Volume, not perfection","https://contra.com/"],
      ["w4b","Ship a tiny public project — a script, a notebook, a page",null],
      ["w4c","Deliver your Icebreaker speech at Toastmasters",null],
      ["w4d","Enter one live Kaggle competition, even if you place last","https://www.kaggle.com/competitions"],
      ["w4e","Read the India LUT export route and note what a CA would cost","https://www.mca.gov.in/"]
    ]},

  { n:5, from:"2026-10-19", to:"2026-10-25", title:"Write the thing down",
    focus:"Articulating an idea is worth doing even if you never submit it.",
    tasks:[
      ["w5a","Draft a YC application — the deadline is 2 Nov","https://www.ycombinator.com/apply"],
      ["w5b","Outline one digital product you could sell on Gumroad","https://gumroad.com/"],
      ["w5c","Publish a short writeup of project #1 somewhere public",null],
      ["w5d","Twenty-five BRAIN alphas in total; check your rank",null],
      ["w5e","Speech #2 booked",null]
    ]},

  { n:6, from:"2026-10-26", to:"2026-11-01", title:"Decide and send",
    focus:"Submit the YC application or consciously decide not to. Do not drift.",
    tasks:[
      ["w6a","Submit YC by 2 Nov, or write one paragraph on why you are not","https://www.ycombinator.com/apply"],
      ["w6b","Check the Anthropic Fellows November intake and prepare","https://alignment.anthropic.com/2025/anthropic-fellows-program-2026/"],
      ["w6c","First paid client delivered and invoiced",null],
      ["w6d","Start the AI Safety Fundamentals course — free, and a prerequisite elsewhere","https://aisafetyfundamentals.com/"],
      ["w6e","Deliver speech #2",null]
    ]},

  { n:7, from:"2026-11-02", to:"2026-11-08", title:"Second income stream",
    focus:"One stream is a job. Two is the beginning of independence.",
    tasks:[
      ["w7a","Apply to Anthropic Fellows if the November intake is open","https://alignment.anthropic.com/2025/anthropic-fellows-program-2026/"],
      ["w7b","Ship project #2 and write it up",null],
      ["w7c","Start a Substack or equivalent; publish post one","https://substack.com/"],
      ["w7d","Build the Gumroad product to 50% done","https://gumroad.com/"],
      ["w7e","Review BRAIN progress: are you near Consultant status?",null]
    ]},

  { n:8, from:"2026-11-09", to:"2026-11-15", title:"Structure decisions",
    focus:"Work out how you will hold money before there is much of it.",
    tasks:[
      ["w8a","Talk to a chartered accountant in India about a private limited or LLP",null],
      ["w8b","Talk to an immigration attorney about what your status allows",null],
      ["w8c","Open Wise Business or Payoneer so foreign payments can land","https://wise.com/business/"],
      ["w8d","JPMorgan ReEntry opens 16 Nov — apply only if you have a 2+ year break","https://www.jpmorganchase.com/careers/explore-opportunities/programs/reentry-program"],
      ["w8e","Speech #3 booked",null]
    ]},

  { n:9, from:"2026-11-16", to:"2026-11-22", title:"Launch and show up",
    focus:"Ship the product and be in a room with people.",
    tasks:[
      ["w9a","Launch the Gumroad product. Price it; do not give it away","https://gumroad.com/"],
      ["w9b","Bengaluru Tech Summit runs 17–19 Nov — attend, or follow and reach out to five speakers","https://www.bengalurutechsummit.com/"],
      ["w9c","Post the launch on Indie Hackers and ask for feedback","https://www.indiehackers.com/"],
      ["w9d","Deliver speech #3",null],
      ["w9e","Fifty BRAIN alphas in total",null]
    ]},

  { n:10, from:"2026-11-23", to:"2026-11-29", title:"Honest review",
    focus:"Two months in: which stream actually earned, and which just consumed time?",
    tasks:[
      ["w10a","Write down every rupee and dollar earned so far, by source",null],
      ["w10b","Kill the weakest stream. Genuinely stop it",null],
      ["w10c","Apply to three fellowships matching your best track",null],
      ["w10d","Register the Indian entity if the CA conversation went well","https://www.mca.gov.in/"],
      ["w10e","Ship project #3",null]
    ]},

  { n:11, from:"2026-11-30", to:"2026-12-06", title:"Go deeper, not wider",
    focus:"Double down on the one thing that worked. Resist starting something new.",
    tasks:[
      ["w11a","Double the effort on your best-performing stream",null],
      ["w11b","Prepare for MATS Spring 2027 if AI research is the direction","https://www.matsprogram.org/apply"],
      ["w11c","Apply for a Citadel or Jump conference travel grant if you are enrolled anywhere","https://www.citadel.com/careers/programs-and-events/conference-travel-grant/"],
      ["w11d","Second product or second client tier launched",null],
      ["w11e","Publish something that took real effort to write",null]
    ]},

  { n:12, from:"2026-12-07", to:"2026-12-13", title:"Applications batch two",
    focus:"You now have evidence. Reapply to things that would have rejected you in week 1.",
    tasks:[
      ["w12a","Apply to five programmes using your new portfolio",null],
      ["w12b","Register interest for TinySeed — applications open Feb 2027","https://tinyseed.com/program"],
      ["w12c","Web Summit Qatar is 31 Jan – 3 Feb; book now if you are going","https://qatar.websummit.com/"],
      ["w12d","Ask for one testimonial from every client so far",null],
      ["w12e","Speech #4, and consider a contest entry",null]
    ]},

  { n:13, from:"2026-12-14", to:"2026-12-21", title:"90-day close",
    focus:"Decide what the next 90 days are, in writing, before the year turns.",
    tasks:[
      ["w13a","Total revenue by source; total hours by source; compute the rate",null],
      ["w13b","List everything shipped publicly. This is the portfolio",null],
      ["w13c","Pick ONE track to commit to for the next 90 days",null],
      ["w13d","Decide the entity question for real: India, US, or neither yet",null],
      ["w13e","Write the next 90-day plan using the same format",null]
    ]}
];
