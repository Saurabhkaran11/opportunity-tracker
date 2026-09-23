/* =============================================================================
   data.js — every programme researched, as one array.
   Each row is one opportunity. Fields:
     name      display name
     url       official application / info page
     track     one of: technical, founder, ai-research, ai-policy, finance,
               business, quant, speaking, remote-business
     region    where it happens
     remote    "Remote" | "Hybrid" | "In person"
     pay       "Paid" (they pay you) | "Free" (no cost, no pay) | "You pay"
     payNote   short detail on the money
     elig      who is eligible
     deadline  human-readable next deadline
     dl        ISO date if a firm date is known, else null (drives countdown)
     verified  true = confirmed in research on 2026-09-23, false = check page
     beginner  true = explicitly open to people with no experience
     opens     what it leads to
     learn     { t: label, u: url }  free-first prep resource
     cert      { t: label, u: url }  certification, or null
   ============================================================================= */

const PROGRAMMES = [

  /* ---------------------------- reference point ---------------------------- */
  {
    name: "Horowitz Andreessen Academy (The Academy SF)",
    url: "https://www.theacademysf.com/admissions",
    track: "technical", region: "San Francisco, USA",
    remote: "In person", pay: "Free", payNote: "Tuition-free founding class; you cover living costs",
    elig: "High-school grads with UNDER 1 year of college — excludes most graduates and professionals",
    deadline: "Founding class starts Sept 2027", dl: null, verified: true, beginner: true,
    opens: "Portfolio-first alternative to a degree; a16z and partner network",
    learn: { t: "CS50x (free)", u: "https://cs50.harvard.edu/x/" },
    cert: null
  },

  /* ------------------------------- technical ------------------------------- */
  {
    name: "Recurse Center",
    url: "https://www.recurse.com/apply",
    track: "technical", region: "New York City + remote option",
    remote: "Hybrid", pay: "Free", payNote: "No tuition; need-based grants up to $7,000",
    elig: "Anyone who codes a little — 3 months to 3 decades of experience, no degree required",
    deadline: "Rolling — new batch every 6 weeks", dl: null, verified: true, beginner: true,
    opens: "Senior engineering roles through their hiring partners",
    learn: { t: "CS50x (free)", u: "https://cs50.harvard.edu/x/" },
    cert: { t: "CS50 certificate (free)", u: "https://cs50.harvard.edu/x/" }
  },
  {
    name: "AI Apprenticeship Programme (AIAP)",
    url: "https://aiap.sg/apprenticeship/",
    track: "technical", region: "Singapore",
    remote: "In person", pay: "Paid", payNote: "SGD 4,000/month, fully government-funded",
    elig: "Fresh graduates AND mid-career switchers; technical or non-technical background",
    deadline: "Next intake applications open Q4 2026", dl: "2026-12-01", verified: true, beginner: true,
    opens: "Applied-AI engineer roles; over 90% placed within 6 months",
    learn: { t: "fast.ai (free)", u: "https://course.fast.ai/" },
    cert: { t: "DeepLearning.AI (paid)", u: "https://www.deeplearning.ai/courses/" }
  },
  {
    name: "ALX",
    url: "https://www.alxafrica.com/",
    track: "technical", region: "Africa + remote",
    remote: "Hybrid", pay: "You pay", payNote: "About $5/month, Mastercard Foundation sponsored",
    elig: "Graduates and working professionals across Africa",
    deadline: "Rolling intakes", dl: null, verified: true, beginner: true,
    opens: "Data and AI roles across Africa",
    learn: { t: "freeCodeCamp (free)", u: "https://www.freecodecamp.org/" },
    cert: { t: "freeCodeCamp certs (free)", u: "https://www.freecodecamp.org/learn" }
  },
  {
    name: "01 Founders",
    url: "https://01founders.co/",
    track: "technical", region: "United Kingdom",
    remote: "In person", pay: "Free", payNote: "No tuition, no ISA; job guarantee",
    elig: "Adults with no CS background; peer-to-peer, no teachers",
    deadline: "Rolling 'Piscine' selection", dl: null, verified: false, beginner: true,
    opens: "Junior developer roles in the UK",
    learn: { t: "The Odin Project (free)", u: "https://www.theodinproject.com/" },
    cert: null
  },
  {
    name: "Navgurukul",
    url: "https://www.navgurukul.org/",
    track: "technical", region: "India",
    remote: "In person", pay: "Free", payNote: "Free plus residential housing",
    elig: "Underserved graduates",
    deadline: "Rolling", dl: null, verified: false, beginner: true,
    opens: "First engineering job in India",
    learn: { t: "Khan Academy Computing (free)", u: "https://www.khanacademy.org/computing" },
    cert: null
  },
  {
    name: "Masai School",
    url: "https://www.masaischool.com/",
    track: "technical", region: "India",
    remote: "Remote", pay: "You pay", payNote: "Income-share — pay only after you are hired",
    elig: "Graduates and career-switchers",
    deadline: "Rolling", dl: null, verified: false, beginner: true,
    opens: "Indian startup engineering roles",
    learn: { t: "Codecademy free tier", u: "https://www.codecademy.com/" },
    cert: null
  },
  {
    name: "Laboratoria",
    url: "https://www.laboratoria.la/",
    track: "technical", region: "Latin America",
    remote: "Hybrid", pay: "Free", payNote: "Free until you are employed",
    elig: "Women career-changers",
    deadline: "Cohort-based — check page", dl: null, verified: false, beginner: true,
    opens: "Junior tech roles across Latin America",
    learn: { t: "MDN Learn (free)", u: "https://developer.mozilla.org/en-US/docs/Learn" },
    cert: null
  },
  {
    name: "Platzi Master",
    url: "https://platzi.com/master/",
    track: "technical", region: "Latin America",
    remote: "Remote", pay: "You pay", payNote: "Income-share agreement",
    elig: "Beginners accepted, but selective",
    deadline: "Cohort-based", dl: null, verified: false, beginner: true,
    opens: "LatAm and remote US engineering roles",
    learn: { t: "Platzi free courses", u: "https://platzi.com/cursos-gratis/" },
    cert: { t: "Platzi certificates (paid)", u: "https://platzi.com/" }
  },

  /* -------------------------------- founder -------------------------------- */
  {
    name: "Y Combinator — Winter 2027",
    url: "https://www.ycombinator.com/apply",
    track: "founder", region: "San Francisco, USA",
    remote: "In person", pay: "Paid", payNote: "$500,000 investment",
    elig: "Needs a team and something already built",
    deadline: "2 Nov 2026, 8pm PT (decision by 11 Dec)", dl: "2026-11-02", verified: true, beginner: false,
    opens: "Seed round, top-tier investor network, Demo Day",
    learn: { t: "YC Startup School (free)", u: "https://www.startupschool.org/" },
    cert: { t: "Startup School cert (free)", u: "https://www.startupschool.org/" }
  },
  {
    name: "South Park Commons Founder Fellowship",
    url: "https://www.southparkcommons.com/apply/",
    track: "founder", region: "SF / New York / Bengaluru",
    remote: "In person", pay: "Paid", payNote: "Up to $1M — $400K upfront + $600K next round",
    elig: "Experienced engineers and operators; no idea required",
    deadline: "Spring 2027 opens late 2026", dl: null, verified: true, beginner: false,
    opens: "Lifelong community, next-round capital, $1M in startup credits",
    learn: { t: "SPC blog (free)", u: "https://blog.southparkcommons.com/" },
    cert: null
  },
  {
    name: "Entrepreneur First",
    url: "https://apply.joinef.com/",
    track: "founder", region: "SF, NY, London, Paris, Bangalore, Singapore",
    remote: "In person", pay: "Paid", payNote: "Stipend during team formation, then investment",
    elig: "Recent grads or a few years of industry experience; must be an outlier",
    deadline: "Rolling — no fixed deadline", dl: null, verified: true, beginner: false,
    opens: "A co-founder first, then a funded company",
    learn: { t: "EF resources (free)", u: "https://www.joinef.com/resources/" },
    cert: null
  },
  {
    name: "Antler",
    url: "https://www.antler.co/cohort-start-dates",
    track: "founder", region: "About 30 cities worldwide",
    remote: "In person", pay: "Paid", payNote: "$150K–$250K for 8.5–11%; stipend in some locations",
    elig: "First-time founders welcome; no idea required",
    deadline: "Rolling — start dates are not deadlines", dl: null, verified: true, beginner: false,
    opens: "Regional VC network and follow-on funding",
    learn: { t: "Antler Academy (free)", u: "https://www.antler.co/academy" },
    cert: null
  },
  {
    name: "Accel Atoms",
    url: "https://atoms.accel.com/",
    track: "founder", region: "India",
    remote: "Hybrid", pay: "Paid", payNote: "About $500,000",
    elig: "Very early builders",
    deadline: "Cohort-based", dl: null, verified: false, beginner: false,
    opens: "Accel follow-on funding",
    learn: { t: "Accel insights (free)", u: "https://www.accel.com/noteworthies" },
    cert: null
  },
  {
    name: "Iterative",
    url: "https://iterative.vc/",
    track: "founder", region: "Southeast Asia",
    remote: "In person", pay: "Paid", payNote: "$500,000",
    elig: "Early-stage teams",
    deadline: "Rolling", dl: null, verified: false, beginner: false,
    opens: "SEA investor network",
    learn: { t: "YC Startup School (free)", u: "https://www.startupschool.org/" },
    cert: null
  },
  {
    name: "Startmate",
    url: "https://www.startmate.com/",
    track: "founder", region: "Australia / New Zealand",
    remote: "Hybrid", pay: "Paid", payNote: "Investment; separate fellowship track",
    elig: "Early founders; fellowship track for students and juniors",
    deadline: "Twice yearly", dl: null, verified: false, beginner: false,
    opens: "ANZ startup ecosystem",
    learn: { t: "Startmate content (free)", u: "https://www.startmate.com/content" },
    cert: null
  },
  {
    name: "K-Startup Grand Challenge",
    url: "https://www.k-startupgc.org/",
    track: "founder", region: "Seoul, Korea",
    remote: "In person", pay: "Paid", payNote: "Stipend plus visa support",
    elig: "Foreign founders wanting to enter the Korean market",
    deadline: "Usually opens Q1", dl: null, verified: false, beginner: false,
    opens: "Korean market entry and residency",
    learn: { t: "KSGC resources (free)", u: "https://www.k-startupgc.org/" },
    cert: null
  },
  {
    name: "Hub71",
    url: "https://hub71.com/",
    track: "founder", region: "Abu Dhabi, UAE",
    remote: "In person", pay: "Paid", payNote: "Capital plus free housing and office space",
    elig: "Founders willing to relocate",
    deadline: "Rolling", dl: null, verified: false, beginner: false,
    opens: "Gulf capital and enterprise customers",
    learn: { t: "Hub71 insights (free)", u: "https://hub71.com/news" },
    cert: null
  },
  {
    name: "Flat6Labs",
    url: "https://www.flat6labs.com/",
    track: "founder", region: "Cairo, Riyadh, Tunis, Amman",
    remote: "In person", pay: "Paid", payNote: "Seed investment",
    elig: "Seed-stage teams in MENA",
    deadline: "Per-city cycles", dl: null, verified: false, beginner: false,
    opens: "MENA seed network",
    learn: { t: "Flat6Labs blog (free)", u: "https://www.flat6labs.com/blog/" },
    cert: null
  },
  {
    name: "Station F Founders Program",
    url: "https://stationf.co/",
    track: "founder", region: "Paris, France",
    remote: "In person", pay: "You pay", payNote: "Low monthly fee for desk and programme",
    elig: "Career-changers and immigrant founders welcome",
    deadline: "Programme-specific", dl: null, verified: false, beginner: true,
    opens: "French Tech Visa, EU investor network",
    learn: { t: "Station F resources (free)", u: "https://stationf.co/resources" },
    cert: null
  },
  {
    name: "Deep Science Ventures",
    url: "https://deepscienceventures.com/",
    track: "founder", region: "United Kingdom",
    remote: "Hybrid", pay: "Paid", payNote: "Salaried founder programme",
    elig: "PhD or deep technical background",
    deadline: "Cohort-based", dl: null, verified: false, beginner: false,
    opens: "Co-founding a venture-backed science company",
    learn: { t: "DSV insights (free)", u: "https://deepscienceventures.com/insights" },
    cert: null
  },
  {
    name: "Conception X",
    url: "https://conceptionx.org/",
    track: "founder", region: "United Kingdom",
    remote: "Hybrid", pay: "Free", payNote: "Free, part-time alongside your PhD",
    elig: "PhD researchers",
    deadline: "Annual, autumn start", dl: null, verified: false, beginner: false,
    opens: "Deep-tech spinout and investor introductions",
    learn: { t: "Conception X resources (free)", u: "https://conceptionx.org/" },
    cert: null
  },
  {
    name: "ETH Zurich Pioneer Fellowship",
    url: "https://ethz.ch/en/industry/entrepreneurship/for-researchers/pioneer-fellowships.html",
    track: "founder", region: "Zurich, Switzerland",
    remote: "In person", pay: "Paid", payNote: "CHF 150,000 plus coaching",
    elig: "ETH-affiliated researchers",
    deadline: "Twice yearly", dl: null, verified: false, beginner: false,
    opens: "Swiss deep-tech spinout",
    learn: { t: "ETH entrepreneurship (free)", u: "https://ethz.ch/en/industry/entrepreneurship.html" },
    cert: null
  },
  {
    name: "XPRENEURS / UnternehmerTUM",
    url: "https://www.unternehmertum.de/en/",
    track: "founder", region: "Munich, Germany",
    remote: "In person", pay: "Free", payNote: "Free incubator batches",
    elig: "Technical founders",
    deadline: "Twice yearly", dl: null, verified: false, beginner: false,
    opens: "German VC and corporate network",
    learn: { t: "UnternehmerTUM content (free)", u: "https://www.unternehmertum.de/en/" },
    cert: null
  },

  /* ----------------------------- AI research ------------------------------ */
  {
    name: "Anthropic Fellows",
    url: "https://alignment.anthropic.com/2025/anthropic-fellows-program-2026/",
    track: "ai-research", region: "US / UK",
    remote: "In person", pay: "Paid", payNote: "Weekly stipend plus substantial compute",
    elig: "Strong quantitative background; NO PhD and no ML publications required",
    deadline: "November 2026 intake", dl: "2026-11-01", verified: true, beginner: false,
    opens: "Frontier-lab research roles; a public paper as your credential",
    learn: { t: "ARENA curriculum (free)", u: "https://www.arena.education/" },
    cert: { t: "AI Safety Fundamentals (free)", u: "https://aisafetyfundamentals.com/" }
  },
  {
    name: "OpenAI Residency",
    url: "https://openai.com/residency/",
    track: "ai-research", region: "San Francisco (3+ days in office)",
    remote: "In person", pay: "Paid", payNote: "About $18,333/month as a full-time employee",
    elig: "Researchers from adjacent fields — maths, physics, neuroscience",
    deadline: "2026 cycle closed — watch for next", dl: null, verified: true, beginner: false,
    opens: "Direct conversion to full-time OpenAI roles",
    learn: { t: "Spinning Up in Deep RL (free)", u: "https://spinningup.openai.com/" },
    cert: null
  },
  {
    name: "MATS (ML Alignment Theory Scholars)",
    url: "https://www.matsprogram.org/apply",
    track: "ai-research", region: "Berkeley / London",
    remote: "In person", pay: "Paid", payNote: "$5K/month + $8K/month compute + housing + meals",
    elig: "Career-switchers common; technical aptitude required",
    deadline: "2026 closed — Spring 2027 next", dl: null, verified: true, beginner: false,
    opens: "About 80% of alumni land full-time AI alignment roles",
    learn: { t: "AI Safety Fundamentals (free)", u: "https://aisafetyfundamentals.com/" },
    cert: { t: "AISF certificate (free)", u: "https://aisafetyfundamentals.com/" }
  },
  {
    name: "Activate Fellowship",
    url: "https://www.activate.org/",
    track: "ai-research", region: "USA",
    remote: "In person", pay: "Paid", payNote: "About $100K/year stipend + $100K R&D support",
    elig: "Usually PhD-level, hard tech",
    deadline: "2027 cycle announced — check page", dl: null, verified: true, beginner: false,
    opens: "Deep-tech company with non-dilutive funding",
    learn: { t: "MIT OpenCourseWare (free)", u: "https://ocw.mit.edu/" },
    cert: null
  },

  /* ------------------------------ AI policy ------------------------------- */
  {
    name: "IAPS AI Policy Fellowship — Spring 2027",
    url: "https://www.iaps.ai/fellowship",
    track: "ai-policy", region: "Washington DC + remote",
    remote: "Hybrid", pay: "Paid", payNote: "$18,000 fellows / $24,000 senior fellows + travel",
    elig: "Emerging AI policy people, applications open globally",
    deadline: "27 Sep 2026 — programme runs 22 Feb to 14 May 2027", dl: "2026-09-27", verified: true, beginner: true,
    opens: "Think-tank and government AI policy roles",
    learn: { t: "AI Governance Fundamentals (free)", u: "https://aisafetyfundamentals.com/governance/" },
    cert: { t: "AISF governance cert (free)", u: "https://aisafetyfundamentals.com/governance/" }
  },
  {
    name: "RAND Center on AI, Security & Technology Fellows",
    url: "https://www.rand.org/global-and-emerging-risks/centers/ai-security-and-technology/fellows.html",
    track: "ai-policy", region: "USA",
    remote: "Hybrid", pay: "Paid", payNote: "Paid, 6 months renewable up to 3 years, full or part time",
    elig: "ALL experience levels — undergraduate through mid-career",
    deadline: "Rolling", dl: null, verified: true, beginner: true,
    opens: "RAND staff roles and policy credibility",
    learn: { t: "RAND commentary (free)", u: "https://www.rand.org/commentary.html" },
    cert: null
  },
  {
    name: "Horizon Fellowship",
    url: "https://horizonpublicservice.org/",
    track: "ai-policy", region: "USA",
    remote: "In person", pay: "Paid", payNote: "Full-time salary, 6–24 months",
    elig: "Early- and mid-career individuals",
    deadline: "Annual cycle — check page", dl: null, verified: true, beginner: false,
    opens: "Placement in Congress, executive branch, or think tanks",
    learn: { t: "Emerging Tech Policy Careers (free)", u: "https://emergingtechpolicy.org/" },
    cert: null
  },
  {
    name: "TechCongress Congressional Innovation Fellowship",
    url: "https://techcongress.io/apply",
    track: "ai-policy", region: "US Congress",
    remote: "In person", pay: "Paid", payNote: "Stipend, 1 year; senior track available",
    elig: "Technologists; a dedicated mid-career track exists",
    deadline: "Jan 2028 cohort opens summer 2027", dl: null, verified: true, beginner: false,
    opens: "Hill staff, agency, and policy careers",
    learn: { t: "Congress.gov primers (free)", u: "https://www.congress.gov/help" },
    cert: null
  },
  {
    name: "Coding it Forward Civic Digital Fellowship",
    url: "https://codingitforward.com/apply",
    track: "ai-policy", region: "US federal agencies",
    remote: "Hybrid", pay: "Paid", payNote: "Paid, full-time, 10 weeks",
    elig: "US citizen, national or permanent resident; 18+ at programme start",
    deadline: "Summer 2027 cycle — typically opens autumn", dl: null, verified: true, beginner: true,
    opens: "Federal tech roles, US Digital Corps",
    learn: { t: "US Digital Services Playbook (free)", u: "https://playbook.cio.gov/" },
    cert: { t: "Forage virtual experience (free)", u: "https://www.theforage.com/virtual-experience/" }
  },
  {
    name: "Aspen Science & Technology Policy Fellowship",
    url: "https://aspenpolicyacademy.org/program/science-and-technology-policy-fellowship/",
    track: "ai-policy", region: "USA",
    remote: "Hybrid", pay: "Paid", payNote: "Varies by track",
    elig: "Scientists and technologists moving into policy",
    deadline: "Check page", dl: null, verified: false, beginner: false,
    opens: "Policy network and placements",
    learn: { t: "Emerging Tech Policy (free)", u: "https://emergingtechpolicy.org/" },
    cert: { t: "IAPP AIGP (paid)", u: "https://iapp.org/certify/aigp/" }
  },

  /* -------------------------- finance / VC -------------------------------- */
  {
    name: "Included VC",
    url: "https://www.included.vc/",
    track: "finance", region: "Global, remote",
    remote: "Remote", pay: "Free", payNote: "Free or heavily subsidised",
    elig: "Career-switchers with NO finance or elite-school background — the clearest way in",
    deadline: "Annual cohort — check page", dl: null, verified: true, beginner: true,
    opens: "VC analyst and associate roles",
    learn: { t: "Venture Deals concepts (free)", u: "https://www.kauffmanfellows.org/journal" },
    cert: null
  },
  {
    name: "VC University (NVCA + Berkeley Law)",
    url: "https://venturecapitaluniversity.com/online-course/",
    track: "finance", region: "Online, global",
    remote: "Remote", pay: "You pay", payNote: "Paid course",
    elig: "Open enrolment — beginners fine",
    deadline: "Cohort 24 registration 7–14 Oct 2026 (Feb 2027 start)", dl: "2026-10-07", verified: true, beginner: true,
    opens: "The credible beginner VC credential",
    learn: { t: "NVCA resources (free)", u: "https://nvca.org/resources/" },
    cert: { t: "VC University certificate (paid)", u: "https://venturecapitaluniversity.com/online-course/" }
  },
  {
    name: "Kauffman Fellows",
    url: "https://www.kauffmanfellows.org/program/application-details",
    track: "finance", region: "Global",
    remote: "Hybrid", pay: "You pay", payNote: "$100 application fee before 12 Dec, $300 after",
    elig: "People who ALREADY invest — too early if you are exploring",
    deadline: "Fee deadline 12 Dec 2026", dl: "2026-12-12", verified: true, beginner: false,
    opens: "Partner-track VC network",
    learn: { t: "Kauffman Fellows Review (free)", u: "https://www.kauffmanfellows.org/journal" },
    cert: { t: "Fellowship is the credential", u: "https://www.kauffmanfellows.org/" }
  },
  {
    name: "Venture University",
    url: "https://www.venturecapital.university/",
    track: "finance", region: "US / remote",
    remote: "Remote", pay: "Paid", payNote: "Apprenticeship; some tracks earn carry",
    elig: "Career-switchers accepted",
    deadline: "Rolling cohorts", dl: null, verified: false, beginner: true,
    opens: "Investment team roles",
    learn: { t: "CFI free courses", u: "https://corporatefinanceinstitute.com/collections/" },
    cert: { t: "CFI FMVA (paid)", u: "https://corporatefinanceinstitute.com/certifications/" }
  },
  {
    name: "VC Lab",
    url: "https://govclab.com/",
    track: "finance", region: "Global, remote",
    remote: "Remote", pay: "Free", payNote: "Free programme",
    elig: "People launching a first fund",
    deadline: "About 3 cohorts per year", dl: null, verified: false, beginner: false,
    opens: "Actually closing your own venture fund",
    learn: { t: "VC Lab curriculum (free)", u: "https://govclab.com/cohort/" },
    cert: { t: "VC Lab completion (free)", u: "https://govclab.com/" }
  },
  {
    name: "Toigo Fellowship",
    url: "https://www.toigofoundation.org/",
    track: "finance", region: "USA",
    remote: "Hybrid", pay: "Paid", payNote: "Stipend plus support",
    elig: "Underrepresented MBA candidates entering finance",
    deadline: "Annual, spring", dl: null, verified: false, beginner: false,
    opens: "PE, VC and asset management careers",
    learn: { t: "CFA Investment Foundations (free)", u: "https://www.cfainstitute.org/programs/investment-foundations" },
    cert: { t: "CFA Foundations (free)", u: "https://www.cfainstitute.org/programs/investment-foundations" }
  },
  {
    name: "Management Leadership for Tomorrow (MLT)",
    url: "https://mlt.org/",
    track: "finance", region: "USA",
    remote: "Hybrid", pay: "Free", payNote: "Free to accepted fellows",
    elig: "Underrepresented professionals seeking career acceleration",
    deadline: "Rolling by track", dl: null, verified: false, beginner: true,
    opens: "Coached entry to banking and consulting",
    learn: { t: "CFI free courses", u: "https://corporatefinanceinstitute.com/collections/" },
    cert: { t: "Forage virtual experiences (free)", u: "https://www.theforage.com/virtual-experience/" }
  },
  {
    name: "SEO Career",
    url: "https://www.seo-usa.org/career/",
    track: "finance", region: "USA",
    remote: "In person", pay: "Paid", payNote: "Paid internships",
    elig: "Underrepresented students and early-career professionals",
    deadline: "Annual, autumn", dl: null, verified: false, beginner: true,
    opens: "IB, PE and asset management internships",
    learn: { t: "Macabacus guides (free)", u: "https://macabacus.com/learn" },
    cert: { t: "Wall Street Prep (paid)", u: "https://www.wallstreetprep.com/" }
  },
  {
    name: "Forté Foundation",
    url: "https://www.fortefoundation.org/",
    track: "finance", region: "Global",
    remote: "Remote", pay: "Free", payNote: "Free membership",
    elig: "Women entering business and finance",
    deadline: "Rolling", dl: null, verified: false, beginner: true,
    opens: "MBA scholarships and employer network",
    learn: { t: "Forté free webinars", u: "https://www.fortefoundation.org/" },
    cert: null
  },
  {
    name: "Recast Capital Enablement",
    url: "https://www.recastcapital.com/",
    track: "finance", region: "USA",
    remote: "Remote", pay: "Free", payNote: "Free programme",
    elig: "Emerging fund managers, women-focused",
    deadline: "Twice yearly", dl: null, verified: false, beginner: false,
    opens: "LP introductions",
    learn: { t: "Recast resources (free)", u: "https://www.recastcapital.com/" },
    cert: null
  },

  /* --------------------------- business / MBA-alt -------------------------- */
  {
    name: "Venture for America",
    url: "https://ventureforamerica.org/",
    track: "business", region: "USA",
    remote: "In person", pay: "Paid", payNote: "Salaried startup job plus training",
    elig: "Recent graduates",
    deadline: "Rolling, autumn-heavy", dl: null, verified: false, beginner: true,
    opens: "Operator roles and a founder network",
    learn: { t: "YC Startup School (free)", u: "https://www.startupschool.org/" },
    cert: { t: "Startup School cert (free)", u: "https://www.startupschool.org/" }
  },
  {
    name: "Reforge",
    url: "https://www.reforge.com/",
    track: "business", region: "Online, global",
    remote: "Remote", pay: "You pay", payNote: "Paid subscription",
    elig: "Working professionals in product, growth or marketing",
    deadline: "Rolling", dl: null, verified: false, beginner: false,
    opens: "Senior product and growth roles",
    learn: { t: "Reforge free articles", u: "https://www.reforge.com/blog" },
    cert: { t: "Reforge certificates (paid)", u: "https://www.reforge.com/" }
  },
  {
    name: "On Deck",
    url: "https://www.beondeck.com/",
    track: "business", region: "Online, global",
    remote: "Remote", pay: "You pay", payNote: "Paid cohort fee",
    elig: "Career-switchers and aspiring founders",
    deadline: "Rolling cohorts", dl: null, verified: false, beginner: true,
    opens: "Co-founder and job matching",
    learn: { t: "On Deck resources (free)", u: "https://www.beondeck.com/" },
    cert: null
  },
  {
    name: "Praxis",
    url: "https://discoverpraxis.com/",
    track: "business", region: "US / remote",
    remote: "Remote", pay: "Paid", payNote: "Paid placement at a startup",
    elig: "Young professionals skipping or leaving college",
    deadline: "Rolling", dl: null, verified: false, beginner: true,
    opens: "First startup job",
    learn: { t: "Praxis free content", u: "https://discoverpraxis.com/" },
    cert: null
  },
  {
    name: "Next Canada / NextAI",
    url: "https://www.nextcanada.com/",
    track: "business", region: "Canada",
    remote: "Hybrid", pay: "Paid", payNote: "Varies by track; free to selected",
    elig: "Graduates and early founders",
    deadline: "Annual, winter", dl: null, verified: false, beginner: false,
    opens: "Canadian VC network",
    learn: { t: "NextAI resources (free)", u: "https://www.nextcanada.com/" },
    cert: null
  },
  {
    name: "Creative Destruction Lab",
    url: "https://creativedestructionlab.com/",
    track: "business", region: "Global",
    remote: "Hybrid", pay: "Free", payNote: "Free, non-dilutive",
    elig: "Science and AI ventures",
    deadline: "Annual, summer", dl: null, verified: false, beginner: false,
    opens: "Angel and VC introductions",
    learn: { t: "CDL resources (free)", u: "https://creativedestructionlab.com/resources/" },
    cert: null
  },
  {
    name: "Plaksha Tech Leaders Program",
    url: "https://plaksha.edu.in/",
    track: "business", region: "India",
    remote: "In person", pay: "You pay", payNote: "Paid, heavy scholarships available",
    elig: "Graduates and working professionals",
    deadline: "Annual", dl: null, verified: false, beginner: true,
    opens: "Product and deep-tech roles in India",
    learn: { t: "NPTEL free courses", u: "https://nptel.ac.in/" },
    cert: { t: "NPTEL certificates (paid exam)", u: "https://nptel.ac.in/" }
  },
  {
    name: "Encore Fellowships",
    url: "https://encore.org/fellowships/",
    track: "business", region: "USA",
    remote: "Hybrid", pay: "Paid", payNote: "$25,000 stipend, 20 hrs/week for 6–12 months",
    elig: "Professionals with 20+ years of experience",
    deadline: "Rolling by region", dl: null, verified: true, beginner: false,
    opens: "Nonprofit leadership second career",
    learn: { t: "Encore resources (free)", u: "https://encore.org/" },
    cert: null
  },
  {
    name: "EIT Digital / Deep Tech Talent",
    url: "https://www.eitdigital.eu/",
    track: "business", region: "European Union",
    remote: "Remote", pay: "You pay", payNote: "Subsidised by the EU",
    elig: "Working professionals upskilling",
    deadline: "Rolling", dl: null, verified: false, beginner: true,
    opens: "EU deep-tech employers",
    learn: { t: "EIT free modules", u: "https://www.eitdigital.eu/" },
    cert: { t: "EIT certificates (subsidised)", u: "https://www.eitdigital.eu/" }
  },

  /* ------------------------ quant / trading / IB --------------------------- */
  {
    name: "WorldQuant BRAIN Research Consultant",
    url: "https://worldquantbrain.com/consultant",
    track: "quant", region: "Global, fully remote",
    remote: "Remote", pay: "Paid", payNote: "Master ~$2,000/quarter; Grandmaster ~$8,000+/quarter",
    elig: "NO quant finance experience needed — analytical thinking is enough",
    deadline: "Rolling — sign up any time", dl: null, verified: true, beginner: true,
    opens: "WorldQuant internships and full-time quant roles",
    learn: { t: "BRAIN learning hub (free)", u: "https://platform.worldquantbrain.com/learn" },
    cert: { t: "Consultant / Master / Grandmaster levels (free)", u: "https://worldquantbrain.com/consultant" }
  },
  {
    name: "WorldQuant International Quant Championship",
    url: "https://www.worldquant.com/brain/iqc/",
    track: "quant", region: "Global, fully remote",
    remote: "Remote", pay: "Paid", payNote: "Share of a US$100,000 prize pool",
    elig: "Open and free; beginners explicitly welcome",
    deadline: "Annual — 2026 finals done, watch for 2027", dl: null, verified: true, beginner: true,
    opens: "Consultant status and interviews at WorldQuant",
    learn: { t: "BRAIN learning hub (free)", u: "https://platform.worldquantbrain.com/learn" },
    cert: { t: "IQC placement record (free)", u: "https://www.worldquant.com/brain/iqc-guidelines/" }
  },
  {
    name: "Numerai Tournament",
    url: "https://numer.ai/",
    track: "quant", region: "Global, fully remote",
    remote: "Remote", pay: "Paid", payNote: "Stake NMR and earn on model performance",
    elig: "Anyone who can train a model",
    deadline: "Weekly rounds — always open", dl: null, verified: true, beginner: true,
    opens: "A verifiable track record for quant interviews",
    learn: { t: "Numerai docs (free)", u: "https://docs.numer.ai/" },
    cert: null
  },
  {
    name: "Kaggle Competitions",
    url: "https://www.kaggle.com/competitions",
    track: "quant", region: "Global, fully remote",
    remote: "Remote", pay: "Paid", payNote: "Prize money on many competitions",
    elig: "Complete beginners",
    deadline: "Always open", dl: null, verified: true, beginner: true,
    opens: "ML and quant interviews; public portfolio proof",
    learn: { t: "Kaggle Learn (free)", u: "https://www.kaggle.com/learn" },
    cert: { t: "Kaggle micro-course certs (free)", u: "https://www.kaggle.com/learn" }
  },
  {
    name: "Citadel Datathons / Terminal",
    url: "https://www.citadel.com/careers/students/datathons/",
    track: "quant", region: "Global",
    remote: "Hybrid", pay: "Paid", payNote: "Cash prizes",
    elig: "Students and recent graduates",
    deadline: "Several per year", dl: null, verified: false, beginner: true,
    opens: "Fast-track to Citadel and Citadel Securities",
    learn: { t: "Correlation One prep (free)", u: "https://www.correlation-one.com/" },
    cert: null
  },
  {
    name: "Jane Street programmes",
    url: "https://www.janestreet.com/join-jane-street/programs/",
    track: "quant", region: "Global",
    remote: "In person", pay: "Paid", payNote: "Paid programmes and internships",
    elig: "Mostly students; strong mathematics",
    deadline: "Cycle-dependent", dl: null, verified: false, beginner: false,
    opens: "Trading and research roles",
    learn: { t: "Jane Street puzzles (free)", u: "https://www.janestreet.com/puzzles/" },
    cert: null
  },
  {
    name: "Optiver early-career programmes",
    url: "https://optiver.com/working-at-optiver/career-opportunities/",
    track: "quant", region: "Amsterdam, London, Chicago, Sydney",
    remote: "In person", pay: "Paid", payNote: "Paid",
    elig: "Students and early career",
    deadline: "Rolling", dl: null, verified: false, beginner: false,
    opens: "Market-maker trader roles",
    learn: { t: "Optiver insights (free)", u: "https://optiver.com/insights/" },
    cert: { t: "Bloomberg Market Concepts (paid)", u: "https://portal.bloombergforeducation.com/" }
  },
  {
    name: "IMC Trading programmes",
    url: "https://careers.imc.com/",
    track: "quant", region: "Global",
    remote: "In person", pay: "Paid", payNote: "Paid",
    elig: "Students and early career",
    deadline: "Rolling", dl: null, verified: false, beginner: false,
    opens: "Trading and technology roles",
    learn: { t: "CME Group Education (free)", u: "https://www.cmegroup.com/education.html" },
    cert: { t: "Bloomberg Market Concepts (paid)", u: "https://portal.bloombergforeducation.com/" }
  },
  {
    name: "JPMorgan ReEntry Program 2027",
    url: "https://www.jpmorganchase.com/careers/explore-opportunities/programs/reentry-program",
    track: "quant", region: "Global offices",
    remote: "In person", pay: "Paid", payNote: "15-week paid fellowship",
    elig: "Experienced professionals on a career break of at least 2 years",
    deadline: "Applications 16 Nov 2026 – 28 Feb 2027", dl: "2026-11-16", verified: true, beginner: false,
    opens: "Direct return to banking, markets or technology",
    learn: { t: "JPM Forage experience (free)", u: "https://www.theforage.com/virtual-experience/" },
    cert: { t: "Forage certificate (free)", u: "https://www.theforage.com/virtual-experience/" }
  },
  {
    name: "Goldman Sachs Returnship",
    url: "https://www.goldmansachs.com/careers/programs-for-professionals/returnship",
    track: "quant", region: "Global offices",
    remote: "In person", pay: "Paid", payNote: "12-week paid, full-time",
    elig: "3+ years prior experience and a break of 2+ years",
    deadline: "Jan–Mar 2027 cohort; cycle opens spring", dl: null, verified: true, beginner: false,
    opens: "About 85% convert to full-time roles",
    learn: { t: "Goldman 10KSB content (free)", u: "https://www.goldmansachs.com/citizenship/10000-small-businesses/" },
    cert: { t: "Forage Goldman cert (free)", u: "https://www.theforage.com/virtual-experience/" }
  },
  {
    name: "Morgan Stanley Return to Work",
    url: "https://www.morganstanley.com/careers/career-opportunities-programs",
    track: "quant", region: "Global offices",
    remote: "In person", pay: "Paid", payNote: "Paid returnship",
    elig: "Professionals returning from a career break",
    deadline: "Annual", dl: null, verified: false, beginner: false,
    opens: "IB and wealth management roles",
    learn: { t: "Macabacus guides (free)", u: "https://macabacus.com/learn" },
    cert: { t: "Wall Street Prep (paid)", u: "https://www.wallstreetprep.com/" }
  },
  {
    name: "10,000 Black Interns",
    url: "https://www.10000blackinterns.com/",
    track: "quant", region: "United Kingdom",
    remote: "Hybrid", pay: "Paid", payNote: "Paid 6-week internships",
    elig: "Black UK talent, all career levels",
    deadline: "Annual, autumn open", dl: null, verified: false, beginner: true,
    opens: "IB, asset management and trading roles",
    learn: { t: "Bright Network Academy (free)", u: "https://www.brightnetwork.co.uk/career-path-guides/" },
    cert: { t: "Bright Network certs (free)", u: "https://www.brightnetwork.co.uk/" }
  },
  {
    name: "SEO London",
    url: "https://www.seo-london.org/",
    track: "quant", region: "UK / Europe",
    remote: "Hybrid", pay: "Paid", payNote: "Paid internships, free programme",
    elig: "Underrepresented students and graduates",
    deadline: "Annual, autumn", dl: null, verified: false, beginner: true,
    opens: "IB and markets internships",
    learn: { t: "Bright Network Academy (free)", u: "https://www.brightnetwork.co.uk/career-path-guides/" },
    cert: { t: "Forage virtual experiences (free)", u: "https://www.theforage.com/virtual-experience/" }
  },
  {
    name: "Amplify Trading Graduate Programme",
    url: "https://amplifyme.com/",
    track: "quant", region: "UK / remote",
    remote: "Remote", pay: "You pay", payNote: "Paid programme",
    elig: "Beginners with a finance interest",
    deadline: "Rolling cohorts", dl: null, verified: false, beginner: true,
    opens: "Prop-firm and bank trading desks",
    learn: { t: "AmplifyME free simulations", u: "https://amplifyme.com/students" },
    cert: { t: "Amplify certificate (paid)", u: "https://amplifyme.com/" }
  },
  {
    name: "Certificate in Quantitative Finance (CQF)",
    url: "https://www.cqf.com/",
    track: "quant", region: "Online, global",
    remote: "Remote", pay: "You pay", payNote: "About £20,000 — commit only when sure",
    elig: "Working professionals",
    deadline: "January and June cohorts", dl: null, verified: false, beginner: false,
    opens: "Quant analyst and risk roles",
    learn: { t: "Baruch MFE prep (free)", u: "https://mfe.baruch.cuny.edu/" },
    cert: { t: "CQF designation (paid)", u: "https://www.cqf.com/" }
  },
  {
    name: "Baruch MFE pre-programme",
    url: "https://mfe.baruch.cuny.edu/",
    track: "quant", region: "Online, global",
    remote: "Remote", pay: "Free", payNote: "Free preparatory courses",
    elig: "Anyone preparing for quant study",
    deadline: "Always open", dl: null, verified: false, beginner: true,
    opens: "Top MFE admission, then quant desks",
    learn: { t: "Baruch free prep", u: "https://mfe.baruch.cuny.edu/" },
    cert: null
  },

  /* ----------------------------- public speaking -------------------------- */
  {
    name: "Toastmasters International",
    url: "https://www.toastmasters.org/membership",
    track: "speaking", region: "About 150 countries",
    remote: "Hybrid", pay: "You pay", payNote: "$144/year (dues rose to $72 semiannually on 3 Aug 2026)",
    elig: "Anyone — no screening, no experience needed",
    deadline: "Join any time; visit free as a guest first", dl: null, verified: true, beginner: true,
    opens: "Structured speaking path up to the World Championship",
    learn: { t: "Pathways overview (free)", u: "https://www.toastmasters.org/education/pathways" },
    cert: { t: "Pathways levels 1–5 (in dues)", u: "https://www.toastmasters.org/education/pathways" }
  },
  {
    name: "TEDx speaker application",
    url: "https://www.ted.com/participate/organize-a-local-tedx-event",
    track: "speaking", region: "Global, per-event",
    remote: "Hybrid", pay: "Free", payNote: "Unpaid, but free to apply",
    elig: "Anyone with an idea worth sharing",
    deadline: "Per-event, rolling", dl: null, verified: true, beginner: true,
    opens: "A recorded talk you can point employers at",
    learn: { t: "TED Masterclass", u: "https://www.ted.com/masterclass" },
    cert: null
  },
  {
    name: "TED Fellows",
    url: "https://fellows.ted.com/program",
    track: "speaking", region: "Global",
    remote: "Hybrid", pay: "Paid", payNote: "Funded — travel, coaching, media training",
    elig: "NOMINATION-ONLY since 2024 — you need someone in your network to nominate you",
    deadline: "Annual — secure a nominator first", dl: null, verified: true, beginner: false,
    opens: "Main-stage TED talk, media training, global network",
    learn: { t: "TED Talks archive (free)", u: "https://www.ted.com/talks" },
    cert: null
  },
  {
    name: "Aspen New Voices Fellowship",
    url: "https://www.aspenglobalinnovators.org/en/programs/new-voices-fellowship/",
    track: "speaking", region: "Africa, Asia, LatAm, Caribbean",
    remote: "Hybrid", pay: "Paid", payNote: "Fully funded, year-long",
    elig: "Experts and advocates from the Global South",
    deadline: "Annual — check page", dl: null, verified: true, beginner: false,
    opens: "Op-eds, broadcast media, policy influence",
    learn: { t: "The OpEd Project (free)", u: "https://www.theopedproject.org/" },
    cert: null
  },
  {
    name: "Global Shapers (World Economic Forum)",
    url: "https://www.globalshapers.org/",
    track: "speaking", region: "150+ countries",
    remote: "Hybrid", pay: "Free", payNote: "Free to join a local hub",
    elig: "Under 30",
    deadline: "Hub-by-hub, rolling", dl: null, verified: false, beginner: true,
    opens: "Davos-adjacent network and speaking platforms",
    learn: { t: "WEF Agenda (free)", u: "https://www.weforum.org/agenda/" },
    cert: null
  },
  {
    name: "One Young World",
    url: "https://www.oneyoungworld.com/",
    track: "speaking", region: "Global summit",
    remote: "In person", pay: "Paid", payNote: "Scholarships cover most delegate costs",
    elig: "Under 30",
    deadline: "Annual, winter", dl: null, verified: false, beginner: true,
    opens: "Summit stage and global peer network",
    learn: { t: "OYW resources (free)", u: "https://www.oneyoungworld.com/" },
    cert: null
  },
  {
    name: "Obama Foundation Leaders",
    url: "https://www.obama.org/programs/leaders/",
    track: "speaking", region: "Regional cohorts",
    remote: "Hybrid", pay: "Paid", payNote: "Funded programme",
    elig: "Emerging leaders",
    deadline: "Annual, regional cycles", dl: null, verified: false, beginner: false,
    opens: "Leadership network and public platform",
    learn: { t: "Obama Foundation resources (free)", u: "https://www.obama.org/" },
    cert: null
  },
  {
    name: "National Speakers Association",
    url: "https://www.nsaspeaker.org/",
    track: "speaking", region: "USA",
    remote: "Hybrid", pay: "You pay", payNote: "Paid membership",
    elig: "Aspiring and working speakers",
    deadline: "Join any time", dl: null, verified: false, beginner: true,
    opens: "Paid speaking gigs and bureau representation",
    learn: { t: "NSA resources", u: "https://www.nsaspeaker.org/learn/" },
    cert: { t: "CSP designation (paid, needs gig history)", u: "https://www.nsaspeaker.org/" }
  },
  {
    name: "Professional Speaking Academy",
    url: "https://professionalspeaking.tv/",
    track: "speaking", region: "United Kingdom",
    remote: "Hybrid", pay: "You pay", payNote: "Paid course",
    elig: "Anyone",
    deadline: "Rolling", dl: null, verified: false, beginner: true,
    opens: "Paid keynote work",
    learn: { t: "Free intro content", u: "https://professionalspeaking.tv/" },
    cert: { t: "Academy certificate (paid)", u: "https://professionalspeaking.tv/" }
  },
  {
    name: "Second City / improv training",
    url: "https://www.secondcity.com/",
    track: "speaking", region: "US + online",
    remote: "Remote", pay: "You pay", payNote: "Paid classes; online options",
    elig: "Beginners welcome",
    deadline: "Rolling terms", dl: null, verified: false, beginner: true,
    opens: "Stage confidence and thinking on your feet",
    learn: { t: "Free improv exercises", u: "https://www.secondcity.com/" },
    cert: null
  },
  {
    name: "Intro to Public Speaking (Univ. of Washington)",
    url: "https://www.coursera.org/learn/public-speaking",
    track: "speaking", region: "Online, global",
    remote: "Remote", pay: "Free", payNote: "Free to audit; paid certificate optional",
    elig: "Anyone",
    deadline: "Always open", dl: null, verified: false, beginner: true,
    opens: "Fundamentals before you join a club",
    learn: { t: "Course itself (free audit)", u: "https://www.coursera.org/learn/public-speaking" },
    cert: { t: "Coursera certificate (paid)", u: "https://www.coursera.org/learn/public-speaking" }
  },

  /* --------------------- starting a business remotely --------------------- */
  {
    name: "TinySeed",
    url: "https://tinyseed.com/program",
    track: "remote-business", region: "Global, fully remote",
    remote: "Remote", pay: "Paid", payNote: "$120,000 first founder + $60,000 per additional founder",
    elig: "Early-stage SaaS with some revenue; year-long programme, no relocation ever",
    deadline: "Spring 2027 applications open February 2027", dl: "2027-02-01", verified: true, beginner: false,
    opens: "Bootstrapped SaaS growth without moving cities",
    learn: { t: "MicroConf content (free)", u: "https://microconf.com/" },
    cert: null
  },
  {
    name: "YC Startup School",
    url: "https://www.startupschool.org/",
    track: "remote-business", region: "Online, global",
    remote: "Remote", pay: "Free", payNote: "Completely free",
    elig: "Complete beginners",
    deadline: "Always open, self-paced", dl: null, verified: true, beginner: true,
    opens: "Free curriculum, co-founder matching, startup deals",
    learn: { t: "YC Library (free)", u: "https://www.ycombinator.com/library" },
    cert: { t: "Completion certificate (free)", u: "https://www.startupschool.org/" }
  },
  {
    name: "Founder Institute",
    url: "https://fi.co/",
    track: "remote-business", region: "200+ cities and online",
    remote: "Remote", pay: "You pay", payNote: "Fee plus equity",
    elig: "Beginners — designed so you keep your day job",
    deadline: "Rolling city and online cohorts", dl: null, verified: false, beginner: true,
    opens: "Idea to incorporated company in about 14 weeks",
    learn: { t: "FI free curriculum", u: "https://fi.co/curriculum" },
    cert: { t: "Graduate certificate (in fee)", u: "https://fi.co/" }
  },
  {
    name: "Calm Company Fund",
    url: "https://calmfund.com/",
    track: "remote-business", region: "Global, remote",
    remote: "Remote", pay: "Paid", payNote: "Revenue-based, non-dilutive funding",
    elig: "Bootstrappers with revenue",
    deadline: "Rolling", dl: null, verified: false, beginner: false,
    opens: "Growth capital without giving up control",
    learn: { t: "Calm Fund writing (free)", u: "https://calmfund.com/writing" },
    cert: null
  },
  {
    name: "Stripe Atlas",
    url: "https://stripe.com/atlas",
    track: "remote-business", region: "Global, fully remote",
    remote: "Remote", pay: "You pay", payNote: "About $500 one-off",
    elig: "Anyone, from any country",
    deadline: "Always open", dl: null, verified: true, beginner: true,
    opens: "A US company and bank account from anywhere in the world",
    learn: { t: "Atlas guides (free)", u: "https://stripe.com/atlas/guides" },
    cert: null
  },
  {
    name: "Shopify",
    url: "https://www.shopify.com/",
    track: "remote-business", region: "Global, fully remote",
    remote: "Remote", pay: "You pay", payNote: "Monthly fee, free trial",
    elig: "Anyone",
    deadline: "Always open", dl: null, verified: true, beginner: true,
    opens: "First product sales without holding inventory",
    learn: { t: "Shopify Learn (free)", u: "https://www.shopify.com/learn" },
    cert: { t: "Shopify certifications (free)", u: "https://www.shopify.com/partners/academy" }
  },
  {
    name: "Gumroad",
    url: "https://gumroad.com/",
    track: "remote-business", region: "Global, fully remote",
    remote: "Remote", pay: "You pay", payNote: "Free to start; takes a cut of sales",
    elig: "Anyone",
    deadline: "Always open", dl: null, verified: true, beginner: true,
    opens: "Selling digital products from day one",
    learn: { t: "Gumroad blog (free)", u: "https://gumroad.com/blog" },
    cert: null
  },
  {
    name: "Indie Hackers",
    url: "https://www.indiehackers.com/",
    track: "remote-business", region: "Global, fully remote",
    remote: "Remote", pay: "Free", payNote: "Free community",
    elig: "Anyone",
    deadline: "Always open", dl: null, verified: true, beginner: true,
    opens: "Accountability, first customers, real revenue case studies",
    learn: { t: "IH podcast archive (free)", u: "https://www.indiehackers.com/podcasts" },
    cert: null
  },
  {
    name: "MicroConf",
    url: "https://microconf.com/",
    track: "remote-business", region: "Global, mostly remote",
    remote: "Remote", pay: "Free", payNote: "Free content; paid events",
    elig: "Bootstrappers",
    deadline: "Rolling", dl: null, verified: false, beginner: true,
    opens: "The bootstrapper network that feeds TinySeed",
    learn: { t: "MicroConf YouTube (free)", u: "https://www.youtube.com/@MicroConf" },
    cert: null
  },
  {
    name: "Toptal",
    url: "https://www.toptal.com/",
    track: "remote-business", region: "Global, fully remote",
    remote: "Remote", pay: "Paid", payNote: "High-rate client work",
    elig: "Experienced freelancers; tough screening",
    deadline: "Rolling screening", dl: null, verified: true, beginner: false,
    opens: "Income that funds your own product build",
    learn: { t: "Toptal blog (free)", u: "https://www.toptal.com/developers/blog" },
    cert: { t: "Passing the screen is the signal", u: "https://www.toptal.com/" }
  },
  {
    name: "Contra",
    url: "https://contra.com/",
    track: "remote-business", region: "Global, fully remote",
    remote: "Remote", pay: "Paid", payNote: "Commission-free freelance income",
    elig: "Freelancers; beginners fine",
    deadline: "Always open", dl: null, verified: true, beginner: true,
    opens: "First paid client work with no platform cut",
    learn: { t: "Contra guides (free)", u: "https://contra.com/independent" },
    cert: null
  },
  {
    name: "Braintrust",
    url: "https://www.usebraintrust.com/",
    track: "remote-business", region: "Global, fully remote",
    remote: "Remote", pay: "Paid", payNote: "Enterprise contracts, no platform fee to talent",
    elig: "Mid-level and above",
    deadline: "Rolling", dl: null, verified: false, beginner: false,
    opens: "Enterprise remote contracts",
    learn: { t: "Braintrust blog (free)", u: "https://www.usebraintrust.com/blog" },
    cert: null
  },
  {
    name: "Upwork",
    url: "https://www.upwork.com/",
    track: "remote-business", region: "Global, fully remote",
    remote: "Remote", pay: "Paid", payNote: "Fastest first dollar; low rates early on",
    elig: "Anyone",
    deadline: "Always open", dl: null, verified: true, beginner: true,
    opens: "Immediate remote income while you learn",
    learn: { t: "Upwork Academy (free)", u: "https://www.upwork.com/resources/academy" },
    cert: { t: "Upwork Skill Certifications (free)", u: "https://www.upwork.com/resources/academy" }
  },
  {
    name: "Deel",
    url: "https://www.deel.com/",
    track: "remote-business", region: "Global, fully remote",
    remote: "Remote", pay: "You pay", payNote: "Per-seat fee",
    elig: "Anyone hiring across borders",
    deadline: "Always open", dl: null, verified: true, beginner: true,
    opens: "Hiring your first contractor legally, anywhere",
    learn: { t: "Deel resources (free)", u: "https://www.deel.com/resources/" },
    cert: null
  },
  {
    name: "Marketing your own business",
    url: "https://skillshop.withgoogle.com/",
    track: "remote-business", region: "Online, global",
    remote: "Remote", pay: "Free", payNote: "Free courses and certification",
    elig: "Anyone",
    deadline: "Always open", dl: null, verified: true, beginner: true,
    opens: "Getting customers without hiring an agency",
    learn: { t: "Google Digital Garage (free)", u: "https://grow.google/certificates/" },
    cert: { t: "Google Ads certification (free)", u: "https://skillshop.withgoogle.com/" }
  },
  {
    name: "Bookkeeping your own business",
    url: "https://www.xero.com/education/",
    track: "remote-business", region: "Online, global",
    remote: "Remote", pay: "Free", payNote: "Free training and certification",
    elig: "Anyone",
    deadline: "Always open", dl: null, verified: true, beginner: true,
    opens: "Running your own books legally and cheaply",
    learn: { t: "Xero Central (free)", u: "https://central.xero.com/" },
    cert: { t: "Xero Advisor certification (free)", u: "https://www.xero.com/education/" }
  }
];

/* ---------------------------------------------------------------------------
   TRACKS — display metadata for the filter buttons.
   --------------------------------------------------------------------------- */
const TRACKS = {
  "technical":       { label: "Learn to build",        blurb: "Get technical from zero" },
  "founder":         { label: "Founder programmes",    blurb: "Funded, but they want shipped work" },
  "ai-research":     { label: "AI research & safety",  blurb: "No PhD required on several" },
  "ai-policy":       { label: "AI policy",             blurb: "Best route in if you are non-technical" },
  "finance":         { label: "Finance & VC",          blurb: "Investing and venture capital" },
  "business":        { label: "Business / MBA-alt",    blurb: "Operator and management routes" },
  "quant":           { label: "IB, trading & quant",   blurb: "Includes remote paid quant platforms" },
  "speaking":        { label: "Public speaking",        blurb: "Communication and platform building" },
  "remote-business": { label: "Start a business remotely", blurb: "No visa, no relocation, no degree" }
};

/* =============================================================================
   YOU — a personal eligibility layer.
   Profile: INDIAN NATIONAL, CURRENTLY LIVING IN THE USA.

   verdict: "yes"   you can apply as you are
            "maybe" applying depends on something specific — visa status,
                    demographic criteria, or where you are physically based
            "no"    a hard gate you cannot meet (citizenship, prior career break,
                    a region you do not live in)

   The recurring caveat: if you are in the USA on F-1, earning money — freelance
   income, prize money, staking rewards — generally needs CPT/OPT authorisation.
   On H-1B you are tied to your sponsor. Confirm with an immigration attorney
   before taking income from anything marked with a money caveat.
   ============================================================================= */
const YOU = {
  profile: "Indian national, currently in the USA",

  verdicts: {
    /* ---- hard no: citizenship or a gate you cannot meet ---- */
    "AI Apprenticeship Programme (AIAP)": ["no", "Singapore Citizens only — Indian nationals are not eligible, and PRs appear excluded too"],
    "Coding it Forward Civic Digital Fellowship": ["no", "Requires US citizen, national or permanent resident"],
    "TechCongress Congressional Innovation Fellowship": ["no", "Requires US citizenship (DACA accepted); no visa sponsorship"],
    "Horizon Fellowship": ["no", "US executive-branch and Hill placements generally require US citizenship"],
    "01 Founders": ["no", "UK-based; needs the right to work in the UK"],
    "SEO London": ["no", "UK/Europe programme with UK work authorisation required"],
    "10,000 Black Interns": ["no", "UK-based and for Black UK talent specifically"],
    "Encore Fellowships": ["no", "Requires 20+ years of work experience"],
    "Kauffman Fellows": ["no", "For people already investing — too early regardless of nationality"],
    "ETH Zurich Pioneer Fellowship": ["no", "Restricted to ETH-affiliated researchers"],
    "Horowitz Andreessen Academy (The Academy SF)": ["no", "Excludes anyone with more than one year of college"],

    /* ---- yes: open to you, do it from where you are ---- */
    "Recurse Center": ["yes", "Open to anyone; not employment, and there is a remote option if your status complicates NYC"],
    "WorldQuant BRAIN Research Consultant": ["yes", "Global and remote — but the quarterly payment is income; check your visa status first"],
    "WorldQuant International Quant Championship": ["yes", "Open globally and free; prize money would be income, so check your status"],
    "Numerai Tournament": ["yes", "Open to anyone worldwide; staking and rewards are financial activity — check your status"],
    "Kaggle Competitions": ["yes", "Open to anyone; competing is free, prize money would be income"],
    "YC Startup School": ["yes", "Free, online, no nationality or residency requirement at all"],
    "Indie Hackers": ["yes", "Free global community"],
    "MicroConf": ["yes", "Free content, open globally"],
    "Stripe Atlas": ["yes", "Explicitly built for founders of any nationality, from any country"],
    "Shopify": ["yes", "Open to anyone"],
    "Gumroad": ["yes", "Open to anyone"],
    "Deel": ["yes", "Open to anyone hiring across borders"],
    "Marketing your own business": ["yes", "Free Google certifications, open globally"],
    "Bookkeeping your own business": ["yes", "Free Xero certification, open globally"],
    "Toastmasters International": ["yes", "Anyone can join, clubs across the USA and India, plus online-only clubs"],
    "TEDx speaker application": ["yes", "No nationality requirement; apply to any local event"],
    "Intro to Public Speaking (Univ. of Washington)": ["yes", "Free to audit, open to anyone"],
    "Second City / improv training": ["yes", "Open enrolment, online classes available"],
    "Baruch MFE pre-programme": ["yes", "Free preparatory courses, open to anyone"],
    "Certificate in Quantitative Finance (CQF)": ["yes", "Online and global — it is a paid credential, not employment"],
    "Amplify Trading Graduate Programme": ["yes", "Paid course, open to international applicants"],
    "VC University (NVCA + Berkeley Law)": ["yes", "Open enrolment online course, no nationality bar"],
    "VC Lab": ["yes", "Free and global"],
    "Included VC": ["yes", "Explicitly global and built for people outside the traditional finance pipeline"],
    "Reforge": ["yes", "Paid online subscription, open globally"],
    "On Deck": ["yes", "Online and global"],
    "Founder Institute": ["yes", "Runs online cohorts open to any nationality"],
    "TinySeed": ["yes", "Fully remote and global — the strongest fit on this whole list for your situation"],
    "Calm Company Fund": ["yes", "Remote and global; funds the company, not you personally"],
    "Creative Destruction Lab": ["yes", "Global programme, open application"],
    "Entrepreneur First": ["yes", "Runs in Bangalore and Singapore as well as the US and Europe; they handle visas in several locations"],
    "Antler": ["yes", "About 30 cities including India; pick the location that matches your status"],
    "K-Startup Grand Challenge": ["yes", "Designed specifically for foreign founders and includes visa support"],
    "Hub71": ["yes", "Built for relocating founders; they provide the visa"],
    "Flat6Labs": ["yes", "Open to founders relocating into MENA"],
    "Station F Founders Program": ["yes", "Open to immigrant founders; pairs with the French Tech Visa"],
    "Accel Atoms": ["yes", "Indian nationality is an advantage — but you would need to be building in India"],
    "Masai School": ["yes", "Open to Indian nationals; delivered remotely"],
    "Navgurukul": ["yes", "Open to Indian nationals, but it is residential in India"],
    "Plaksha Tech Leaders Program": ["yes", "Open to Indian nationals; requires being in India"],
    "IAPS AI Policy Fellowship — Spring 2027": ["yes", "Applications are explicitly global; two weeks in DC, and you are already in the US"],
    "Global Shapers (World Economic Forum)": ["yes", "Join a hub in your US city or in India, if you are under 30"],
    "One Young World": ["yes", "Global delegate programme, scholarships available"],
    "National Speakers Association": ["yes", "Open membership in the US"],
    "Professional Speaking Academy": ["yes", "UK-run but delivered online"],
    "EIT Digital / Deep Tech Talent": ["yes", "Online modules are open, though the network is EU-facing"],

    /* ---- maybe: depends on your visa status or a non-nationality criterion ---- */
    "Y Combinator — Winter 2027": ["maybe", "YC funds international founders and supports visas — but founding and working for your own startup on F-1 or H-1B has real legal limits. Get immigration advice first"],
    "South Park Commons Founder Fellowship": ["maybe", "Same founding-on-a-visa question; the Bengaluru option sidesteps it entirely"],
    "Anthropic Fellows": ["maybe", "US or UK based — depends on whether they can sponsor or you already hold work authorisation"],
    "OpenAI Residency": ["maybe", "Residents are full-time employees, so it needs visa sponsorship; OpenAI does sponsor, but it is competitive"],
    "MATS (ML Alignment Theory Scholars)": ["maybe", "Berkeley or London with housing provided; confirm what visa route they support for your cohort"],
    "Activate Fellowship": ["maybe", "US-based and usually PhD-level; confirm work authorisation requirements"],
    "RAND Center on AI, Security & Technology Fellows": ["maybe", "Open to all experience levels, but roles needing a security clearance are closed to non-citizens"],
    "Aspen Science & Technology Policy Fellowship": ["maybe", "US policy programme — check its work-authorisation rules"],
    "Aspen New Voices Fellowship": ["maybe", "Your Indian nationality fits the Global South remit, but it targets people working in those regions rather than in the US"],
    "TED Fellows": ["maybe", "No nationality bar, but it is nomination-only — you need someone to nominate you first"],
    "Obama Foundation Leaders": ["maybe", "Regional cohorts including Asia-Pacific; which one you qualify for depends on where you are based"],
    "JPMorgan ReEntry Program 2027": ["maybe", "The real gate is a career break of 2+ years, not nationality; JPMorgan does sponsor visas"],
    "Goldman Sachs Returnship": ["maybe", "Needs 3+ years experience and a 2+ year break; work authorisation still required"],
    "Morgan Stanley Return to Work": ["maybe", "Career-break requirement applies; confirm sponsorship"],
    "Jane Street programmes": ["maybe", "They sponsor visas, but most programmes target current students"],
    "Optiver early-career programmes": ["maybe", "Sponsors visas in the US; mostly aimed at students and new graduates"],
    "IMC Trading programmes": ["maybe", "Sponsors visas; aimed at students and early career"],
    "Citadel Datathons / Terminal": ["maybe", "Open to students and recent graduates; check the specific event's rules"],
    "Toptal": ["maybe", "Open globally, but freelance income in the US needs CPT/OPT if you are on F-1"],
    "Contra": ["maybe", "Same freelance income question — the platform itself has no nationality bar"],
    "Upwork": ["maybe", "Open globally; the constraint is your US work authorisation, not the platform"],
    "Braintrust": ["maybe", "Open globally; same US work-authorisation question"],
    "Venture for America": ["maybe", "Places you in a salaried US job, so it needs work authorisation"],
    "Praxis": ["maybe", "Paid US placements — needs work authorisation"],
    "Venture University": ["maybe", "US-based apprenticeship; confirm whether they can take international participants"],
    "SEO Career": ["maybe", "Paid US internships needing work authorisation, and it targets specific underrepresented US groups"],
    "Management Leadership for Tomorrow (MLT)": ["maybe", "Targets underrepresented professionals in the US; check whether you meet their criteria"],
    "Toigo Fellowship": ["maybe", "For underrepresented US MBA candidates — check their definition"],
    "Forté Foundation": ["maybe", "Open globally, but it is a women-focused organisation"],
    "Recast Capital Enablement": ["maybe", "Women-focused and aimed at emerging fund managers"],
    "Laboratoria": ["maybe", "Women-only and Latin America based"],
    "Platzi Master": ["maybe", "Latin America focused; Spanish-language"],
    "ALX": ["maybe", "Built for learners based in Africa"],
    "Startmate": ["maybe", "Australia and New Zealand; would need relocation and a visa"],
    "Iterative": ["maybe", "Southeast Asia focused"],
    "Next Canada / NextAI": ["maybe", "Canada-based; would need Canadian authorisation"],
    "Deep Science Ventures": ["maybe", "UK-based salaried role — needs UK work authorisation"],
    "Conception X": ["maybe", "For PhD researchers enrolled at UK universities"],
    "XPRENEURS / UnternehmerTUM": ["maybe", "Munich-based; would need relocation"]
  },

  // anything not listed above
  fallback: ["maybe", "No nationality bar found — confirm work-authorisation rules on the official page"]
};

function verdictFor(name){
  const v = YOU.verdicts[name] || YOU.fallback;
  return { v: v[0], why: v[1] };
}
