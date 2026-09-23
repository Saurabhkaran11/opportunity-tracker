/* =============================================================================
   income.js — multiple income streams and international business structures.

   Same shape as the rows in data.js, pushed into the same array so they inherit
   the filters, the F-1 //// H-1B //// India status row, and both views.

   Two tracks:
     income-streams  ways to earn money that are not a job
     intl-business   the plumbing for operating across borders
   ============================================================================= */

Object.assign(TRACKS, {
  "income-streams": { label: "Multiple income streams", blurb: "Earning outside a salary — start one, stack later" },
  "intl-business":  { label: "International business",  blurb: "Entities, banking and payments across borders" }
});

const INCOME_ROWS = [

  /* -------------------- selling your time (fastest first money) ------------- */
  { name:"Upwork", url:"https://www.upwork.com/", track:"income-streams", region:"Global, remote",
    remote:"Remote", pay:"Paid", payNote:"Hourly or fixed-price; platform takes a cut",
    elig:"Anyone; no credential needed", deadline:"Always open", dl:null, verified:true, beginner:true,
    opens:"Your first paid client and a public review history",
    learn:{t:"Upwork Academy (free)",u:"https://www.upwork.com/resources/academy"},
    cert:{t:"Skill Certifications (free)",u:"https://www.upwork.com/resources/academy"} },

  { name:"Fiverr", url:"https://www.fiverr.com/", track:"income-streams", region:"Global, remote",
    remote:"Remote", pay:"Paid", payNote:"Productised gigs from $5 up; 20% platform cut",
    elig:"Anyone", deadline:"Always open", dl:null, verified:true, beginner:true,
    opens:"Packaging a skill as a repeatable product rather than hours",
    learn:{t:"Fiverr Learn (free tier)",u:"https://learn.fiverr.com/"}, cert:null },

  { name:"Arc.dev", url:"https://arc.dev/", track:"income-streams", region:"Global, remote",
    remote:"Remote", pay:"Paid", payNote:"Remote developer contracts, vetted",
    elig:"Developers with real experience", deadline:"Rolling screening", dl:null, verified:false, beginner:false,
    opens:"Long remote contracts with US and EU companies",
    learn:{t:"Arc remote job guides (free)",u:"https://arc.dev/talent-blog/"}, cert:null },

  { name:"Clarity.fm", url:"https://clarity.fm/", track:"income-streams", region:"Global, remote",
    remote:"Remote", pay:"Paid", payNote:"Per-minute paid advice calls",
    elig:"Anyone with domain expertise", deadline:"Always open", dl:null, verified:false, beginner:false,
    opens:"Charging for knowledge instead of delivery work",
    learn:{t:"Clarity resources (free)",u:"https://clarity.fm/"}, cert:null },

  { name:"Codementer", url:"https://www.codementor.io/", track:"income-streams", region:"Global, remote",
    remote:"Remote", pay:"Paid", payNote:"Paid mentoring and freelance jobs",
    elig:"Developers", deadline:"Rolling", dl:null, verified:false, beginner:false,
    opens:"Hourly mentoring income between contracts",
    learn:{t:"Codementor blog (free)",u:"https://www.codementor.io/blog"}, cert:null },

  /* -------------------- AI and data work (open to beginners) ---------------- */
  { name:"Mercor", url:"https://mercor.com/", track:"income-streams", region:"Global, remote",
    remote:"Remote", pay:"Paid", payNote:"Hourly work training and evaluating AI models",
    elig:"Domain experts of many kinds, not only engineers", deadline:"Rolling", dl:null, verified:false, beginner:true,
    opens:"Well-paid remote AI work using whatever you already know",
    learn:{t:"Mercor FAQ (free)",u:"https://mercor.com/"}, cert:null },

  { name:"Outlier (Scale AI)", url:"https://outlier.ai/", track:"income-streams", region:"Global, remote",
    remote:"Remote", pay:"Paid", payNote:"Hourly rates for AI training tasks",
    elig:"Open to many backgrounds; some tasks need a degree", deadline:"Rolling", dl:null, verified:false, beginner:true,
    opens:"Flexible AI training income you control the hours of",
    learn:{t:"Outlier help centre (free)",u:"https://outlier.ai/"}, cert:null },

  { name:"Surge AI", url:"https://www.surgehq.ai/", track:"income-streams", region:"Global, remote",
    remote:"Remote", pay:"Paid", payNote:"Paid data labelling and evaluation",
    elig:"Open application", deadline:"Rolling", dl:null, verified:false, beginner:true,
    opens:"Entry into the AI data economy",
    learn:{t:"Surge blog (free)",u:"https://www.surgehq.ai/blog"}, cert:null },

  { name:"Prolific", url:"https://www.prolific.com/", track:"income-streams", region:"Global, remote",
    remote:"Remote", pay:"Paid", payNote:"Paid participation in academic studies; small but steady",
    elig:"Anyone in a supported country", deadline:"Always open", dl:null, verified:false, beginner:true,
    opens:"Low-effort side income while you learn something else",
    learn:{t:"Prolific participant guide (free)",u:"https://www.prolific.com/participants"}, cert:null },

  /* -------------------- digital products and audience ----------------------- */
  { name:"Gumroad", url:"https://gumroad.com/", track:"income-streams", region:"Global, remote",
    remote:"Remote", pay:"Paid", payNote:"Free to start; takes a cut per sale",
    elig:"Anyone", deadline:"Always open", dl:null, verified:true, beginner:true,
    opens:"Selling a template, guide or tool while you sleep",
    learn:{t:"Gumroad blog (free)",u:"https://gumroad.com/blog"}, cert:null },

  { name:"Lemon Squeezy", url:"https://www.lemonsqueezy.com/", track:"income-streams", region:"Global, remote",
    remote:"Remote", pay:"Paid", payNote:"Merchant of record — they handle global VAT and sales tax",
    elig:"Anyone selling digital goods", deadline:"Always open", dl:null, verified:false, beginner:true,
    opens:"Selling worldwide without registering for tax in each country",
    learn:{t:"Lemon Squeezy docs (free)",u:"https://docs.lemonsqueezy.com/"}, cert:null },

  { name:"Substack", url:"https://substack.com/", track:"income-streams", region:"Global, remote",
    remote:"Remote", pay:"Paid", payNote:"Paid subscriptions; 10% platform cut",
    elig:"Anyone who can write consistently", deadline:"Always open", dl:null, verified:true, beginner:true,
    opens:"Recurring revenue and a reputation that opens other doors",
    learn:{t:"Substack Grow (free)",u:"https://on.substack.com/"}, cert:null },

  { name:"Teachable", url:"https://teachable.com/", track:"income-streams", region:"Global, remote",
    remote:"Remote", pay:"Paid", payNote:"You keep most of course revenue; monthly fee",
    elig:"Anyone who can teach a skill", deadline:"Always open", dl:null, verified:false, beginner:true,
    opens:"Turning what you learned this year into a course next year",
    learn:{t:"Teachable free training",u:"https://teachable.com/resources"}, cert:null },

  { name:"Udemy", url:"https://www.udemy.com/teaching/", track:"income-streams", region:"Global, remote",
    remote:"Remote", pay:"Paid", payNote:"Revenue share; their audience, their pricing",
    elig:"Anyone", deadline:"Always open", dl:null, verified:false, beginner:true,
    opens:"Distribution without building your own audience first",
    learn:{t:"Udemy Teaching Center (free)",u:"https://www.udemy.com/teaching/"}, cert:null },

  { name:"Amazon KDP", url:"https://kdp.amazon.com/", track:"income-streams", region:"Global, remote",
    remote:"Remote", pay:"Paid", payNote:"Royalties up to 70%; free to publish",
    elig:"Anyone", deadline:"Always open", dl:null, verified:false, beginner:true,
    opens:"A durable royalty stream and author credibility",
    learn:{t:"KDP University (free)",u:"https://kdp.amazon.com/en_US/help/topic/G200635650"}, cert:null },

  { name:"YouTube Partner Program", url:"https://www.youtube.com/creators/", track:"income-streams", region:"Global, remote",
    remote:"Remote", pay:"Paid", payNote:"Ad revenue after 1,000 subs and 4,000 watch hours",
    elig:"Anyone; the threshold is the gate", deadline:"Always open", dl:null, verified:true, beginner:true,
    opens:"Ad income, sponsorships, and an audience that compounds",
    learn:{t:"YouTube Creator Academy (free)",u:"https://www.youtube.com/creators/"}, cert:null },

  { name:"Envato / template marketplaces", url:"https://elements.envato.com/", track:"income-streams", region:"Global, remote",
    remote:"Remote", pay:"Paid", payNote:"Royalties per download",
    elig:"Designers and developers", deadline:"Always open", dl:null, verified:false, beginner:true,
    opens:"Passive royalties from work you make once",
    learn:{t:"Envato author guides (free)",u:"https://author.envato.com/"}, cert:null },

  { name:"Notion / Figma template sales", url:"https://www.notion.com/templates", track:"income-streams", region:"Global, remote",
    remote:"Remote", pay:"Paid", payNote:"Sell through their galleries or via Gumroad",
    elig:"Anyone who can design a useful system", deadline:"Always open", dl:null, verified:false, beginner:true,
    opens:"The lowest-effort digital product there is",
    learn:{t:"Notion template guide (free)",u:"https://www.notion.com/help/guides"}, cert:null },

  /* -------------------- commerce -------------------------------------------- */
  { name:"Shopify store", url:"https://www.shopify.com/", track:"income-streams", region:"Global, remote",
    remote:"Remote", pay:"Paid", payNote:"Monthly fee; you keep the margin",
    elig:"Anyone", deadline:"Always open", dl:null, verified:true, beginner:true,
    opens:"A product business you own the customer relationship in",
    learn:{t:"Shopify Learn (free)",u:"https://www.shopify.com/learn"},
    cert:{t:"Shopify certifications (free)",u:"https://www.shopify.com/partners/academy"} },

  { name:"Printful / Printify (print on demand)", url:"https://www.printful.com/", track:"income-streams", region:"Global, remote",
    remote:"Remote", pay:"Paid", payNote:"No inventory; margin per item",
    elig:"Anyone", deadline:"Always open", dl:null, verified:false, beginner:true,
    opens:"Physical products with zero upfront stock",
    learn:{t:"Printful Academy (free)",u:"https://www.printful.com/academy"}, cert:null },

  { name:"Amazon FBA", url:"https://sell.amazon.com/", track:"income-streams", region:"Global",
    remote:"Remote", pay:"Paid", payNote:"Real capital required for inventory",
    elig:"Anyone, but it needs upfront money", deadline:"Always open", dl:null, verified:false, beginner:false,
    opens:"Scale, at the cost of margin and platform dependence",
    learn:{t:"Amazon Seller University (free)",u:"https://sell.amazon.com/learn"}, cert:null },

  { name:"Etsy", url:"https://www.etsy.com/sell", track:"income-streams", region:"Global, remote",
    remote:"Remote", pay:"Paid", payNote:"Listing plus transaction fees",
    elig:"Anyone making or designing something", deadline:"Always open", dl:null, verified:false, beginner:true,
    opens:"Built-in demand for handmade and digital goods",
    learn:{t:"Etsy Seller Handbook (free)",u:"https://www.etsy.com/seller-handbook"}, cert:null },

  /* -------------------- skill-to-cash competitions and bounties ------------- */
  { name:"HackerOne / Bugcrowd bounties", url:"https://www.hackerone.com/", track:"income-streams", region:"Global, remote",
    remote:"Remote", pay:"Paid", payNote:"Per-vulnerability bounties, from $100 to five figures",
    elig:"Anyone who can find real bugs", deadline:"Always open", dl:null, verified:true, beginner:true,
    opens:"Security career entry with a public track record",
    learn:{t:"PortSwigger Web Security Academy (free)",u:"https://portswigger.net/web-security"},
    cert:{t:"Burp Suite Certified (paid)",u:"https://portswigger.net/web-security/certification"} },

  { name:"Topcoder", url:"https://www.topcoder.com/", track:"income-streams", region:"Global, remote",
    remote:"Remote", pay:"Paid", payNote:"Prize money per challenge",
    elig:"Developers and designers", deadline:"Always open", dl:null, verified:false, beginner:true,
    opens:"Paid practice that doubles as a portfolio",
    learn:{t:"Topcoder tutorials (free)",u:"https://www.topcoder.com/thrive"}, cert:null },

  { name:"Acquire.com", url:"https://acquire.com/", track:"income-streams", region:"Global, remote",
    remote:"Remote", pay:"Paid", payNote:"Buy a small profitable business, or sell yours",
    elig:"Anyone; buying needs capital", deadline:"Always open", dl:null, verified:false, beginner:false,
    opens:"Buying cash flow instead of building it from zero",
    learn:{t:"Acquire resources (free)",u:"https://acquire.com/blog/"}, cert:null },

  /* -------------------- international business plumbing --------------------- */
  { name:"Stripe Atlas", url:"https://stripe.com/atlas", track:"intl-business", region:"Global — forms a US entity",
    remote:"Remote", pay:"You pay", payNote:"About $500 one-off; Delaware C-corp or LLC",
    elig:"Any nationality, from any country", deadline:"Always open", dl:null, verified:true, beginner:true,
    opens:"US company, EIN, and a bank account without being American",
    learn:{t:"Atlas guides (free)",u:"https://stripe.com/atlas/guides"}, cert:null },

  { name:"Firstbase.io", url:"https://www.firstbase.io/", track:"intl-business", region:"Global — forms a US entity",
    remote:"Remote", pay:"You pay", payNote:"Formation plus ongoing compliance as a service",
    elig:"Non-US founders", deadline:"Always open", dl:null, verified:false, beginner:true,
    opens:"US entity with the annual filings handled for you",
    learn:{t:"Firstbase guides (free)",u:"https://www.firstbase.io/blog"}, cert:null },

  { name:"doola", url:"https://www.doola.com/", track:"intl-business", region:"Global — forms a US entity",
    remote:"Remote", pay:"You pay", payNote:"Formation, EIN and bookkeeping bundle",
    elig:"Non-US founders, including Indian citizens", deadline:"Always open", dl:null, verified:false, beginner:true,
    opens:"US LLC run entirely from India",
    learn:{t:"doola resources (free)",u:"https://www.doola.com/blog/"}, cert:null },

  { name:"Estonia e-Residency", url:"https://www.e-resident.gov.ee/", track:"intl-business", region:"Estonia / EU",
    remote:"Remote", pay:"You pay", payNote:"Around €120 application plus company costs",
    elig:"Any nationality, including Indian citizens", deadline:"Always open", dl:null, verified:true, beginner:true,
    opens:"An EU company you run online; no Estonian residence needed",
    learn:{t:"e-Residency guides (free)",u:"https://www.e-resident.gov.ee/start-a-company/"}, cert:null },

  { name:"Indian company + LUT export", url:"https://www.gst.gov.in/", track:"intl-business", region:"India",
    remote:"Remote", pay:"You pay", payNote:"Private limited or LLP; LUT lets you export services without paying GST",
    elig:"Indian citizens — the cheapest legitimate route for you", deadline:"Always open", dl:null, verified:false, beginner:true,
    opens:"Billing foreign clients from India, zero-rated, fully legal",
    learn:{t:"MCA company registration (free)",u:"https://www.mca.gov.in/"}, cert:null },

  { name:"GIFT City (IFSC), India", url:"https://giftsez.com/", track:"intl-business", region:"Gujarat, India",
    remote:"Hybrid", pay:"You pay", payNote:"Tax holidays for units in the international finance zone",
    elig:"Indian and foreign businesses", deadline:"Always open", dl:null, verified:false, beginner:false,
    opens:"Serving global clients from India with tax advantages",
    learn:{t:"IFSCA guidance (free)",u:"https://ifsca.gov.in/"}, cert:null },

  { name:"Dubai / UAE free zone company", url:"https://www.ifza.com/", track:"intl-business", region:"UAE",
    remote:"Hybrid", pay:"You pay", payNote:"Free-zone licence; 0% personal income tax, 9% corporate above a threshold",
    elig:"Any nationality; large Indian business community", deadline:"Always open", dl:null, verified:false, beginner:false,
    opens:"Low-tax base with a residence visa attached",
    learn:{t:"UAE free zone comparisons (free)",u:"https://www.ifza.com/"}, cert:null },

  { name:"Singapore Pte Ltd", url:"https://www.acra.gov.sg/", track:"intl-business", region:"Singapore",
    remote:"Hybrid", pay:"You pay", payNote:"Needs a resident director — usually a paid nominee",
    elig:"Any nationality", deadline:"Always open", dl:null, verified:false, beginner:false,
    opens:"Credible Asian holding company for regional clients",
    learn:{t:"ACRA start-up guide (free)",u:"https://www.acra.gov.sg/"}, cert:null },

  { name:"Mercury", url:"https://mercury.com/", track:"intl-business", region:"US banking, remote",
    remote:"Remote", pay:"You pay", payNote:"Free business banking for US entities",
    elig:"US-registered companies with foreign founders", deadline:"Always open", dl:null, verified:true, beginner:true,
    opens:"US dollar banking without visiting a branch",
    learn:{t:"Mercury guides (free)",u:"https://mercury.com/blog"}, cert:null },

  { name:"Wise Business", url:"https://wise.com/business/", track:"intl-business", region:"Global",
    remote:"Remote", pay:"You pay", payNote:"Low-cost multi-currency accounts and conversion",
    elig:"Individuals and companies in supported countries", deadline:"Always open", dl:null, verified:true, beginner:true,
    opens:"Getting paid in USD, EUR and GBP and converting cheaply to INR",
    learn:{t:"Wise guides (free)",u:"https://wise.com/gb/blog/"}, cert:null },

  { name:"Payoneer", url:"https://www.payoneer.com/", track:"intl-business", region:"Global",
    remote:"Remote", pay:"You pay", payNote:"Receiving accounts in several currencies",
    elig:"Freelancers and businesses, widely used in India", deadline:"Always open", dl:null, verified:true, beginner:true,
    opens:"Collecting marketplace and client payments into an Indian account",
    learn:{t:"Payoneer resources (free)",u:"https://www.payoneer.com/resources/"}, cert:null },

  { name:"Deel", url:"https://www.deel.com/", track:"intl-business", region:"Global",
    remote:"Remote", pay:"You pay", payNote:"Per-seat fee for compliant cross-border hiring",
    elig:"Anyone hiring across borders", deadline:"Always open", dl:null, verified:true, beginner:true,
    opens:"Hiring your first contractor in another country, legally",
    learn:{t:"Deel resources (free)",u:"https://www.deel.com/resources/"}, cert:null },

  { name:"Remote.com", url:"https://remote.com/", track:"intl-business", region:"Global",
    remote:"Remote", pay:"You pay", payNote:"Employer of record in 80+ countries",
    elig:"Companies hiring abroad", deadline:"Always open", dl:null, verified:false, beginner:false,
    opens:"Employing people abroad without opening an entity there",
    learn:{t:"Remote country guides (free)",u:"https://remote.com/country-explorer"}, cert:null },

  { name:"Paddle", url:"https://www.paddle.com/", track:"intl-business", region:"Global",
    remote:"Remote", pay:"You pay", payNote:"Merchant of record; handles global sales tax and VAT",
    elig:"Software and digital businesses", deadline:"Always open", dl:null, verified:false, beginner:false,
    opens:"Selling software worldwide without 60 tax registrations",
    learn:{t:"Paddle resources (free)",u:"https://www.paddle.com/resources"}, cert:null }
];

PROGRAMMES.push(...INCOME_ROWS);

/* ---- nationality verdicts for the new rows ------------------------------- */
Object.assign(YOU.verdicts, {
  "Indian company + LUT export": ["yes", "You are an Indian citizen — this is the cheapest and simplest legitimate structure available to you"],
  "GIFT City (IFSC), India": ["yes", "Open to Indian citizens; requires presence in Gujarat"],
  "Estonia e-Residency": ["yes", "Explicitly open to any nationality, Indian citizens included"],
  "Stripe Atlas": ["yes", "Built for founders of any nationality, from any country"],
  "Firstbase.io": ["yes", "Built specifically for non-US founders"],
  "doola": ["yes", "Built for non-US founders, with a large Indian customer base"],
  "Dubai / UAE free zone company": ["yes", "Open to Indian citizens; a very common route"],
  "Singapore Pte Ltd": ["yes", "Open to any nationality, but you must pay for a resident director"],
  "Mercury": ["yes", "Serves US entities with foreign founders"],
  "Wise Business": ["yes", "Supported for both India and the USA"],
  "Payoneer": ["yes", "Widely used by Indian freelancers"],
  "Remote.com": ["yes", "No nationality restriction"],
  "Paddle": ["yes", "No nationality restriction"],
  "Mercor": ["yes", "Hires globally; the constraint is your work authorisation, not your passport"],
  "Outlier (Scale AI)": ["yes", "Open in many countries including India and the USA"],
  "Surge AI": ["yes", "Open application, global"],
  "Prolific": ["yes", "Open in supported countries including both India and the USA"],
  "Substack": ["yes", "Open to anyone; payouts go through Stripe"],
  "YouTube Partner Program": ["yes", "Open worldwide once you pass the threshold"],
  "Amazon KDP": ["yes", "Open worldwide"],
  "HackerOne / Bugcrowd bounties": ["yes", "Open worldwide, subject to sanctions lists"],
  "Amazon FBA": ["maybe", "Open to Indian sellers, but US sales tax and import duties get complicated fast"]
});

/* ---- how money flows, which drives the F-1 //// H-1B //// India row ------- */
Object.assign(WORK_OVERRIDE, {
  "Upwork":"income", "Fiverr":"income", "Arc.dev":"income", "Clarity.fm":"income",
  "Codementer":"income", "Mercor":"income", "Outlier (Scale AI)":"income",
  "Surge AI":"income", "Prolific":"income", "Topcoder":"income",
  "HackerOne / Bugcrowd bounties":"income",

  "Gumroad":"company", "Lemon Squeezy":"company", "Substack":"company",
  "Teachable":"company", "Udemy":"company", "Amazon KDP":"company",
  "YouTube Partner Program":"company", "Envato / template marketplaces":"company",
  "Notion / Figma template sales":"company", "Shopify store":"company",
  "Printful / Printify (print on demand)":"company", "Amazon FBA":"company",
  "Etsy":"company", "Acquire.com":"company",

  "Stripe Atlas":"company", "Firstbase.io":"company", "doola":"company",
  "Estonia e-Residency":"company", "Indian company + LUT export":"company",
  "GIFT City (IFSC), India":"company", "Dubai / UAE free zone company":"relocate",
  "Singapore Pte Ltd":"company", "Mercury":"company", "Wise Business":"none",
  "Payoneer":"none", "Remote.com":"company", "Paddle":"company"
});

/* From India these are clean — the only objection was ever US work authorisation */
["Upwork","Fiverr","Arc.dev","Clarity.fm","Codementer","Mercor","Outlier (Scale AI)",
 "Surge AI","Prolific","Topcoder","HackerOne / Bugcrowd bounties","Gumroad",
 "Lemon Squeezy","Substack","Teachable","Udemy","Amazon KDP","YouTube Partner Program",
 "Envato / template marketplaces","Notion / Figma template sales","Shopify store",
 "Printful / Printify (print on demand)","Etsy","Acquire.com","Stripe Atlas",
 "Firstbase.io","doola","Estonia e-Residency","Indian company + LUT export",
 "Mercury","Remote.com","Paddle","Singapore Pte Ltd"
].forEach(n => US_VISA_CAVEAT_ONLY.add(n));
