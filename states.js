/* =============================================================================
   states.js — where to register a business, state by state.

   Fields: [ state, formationFee, annualFee, frequency, incomeTax, note ]
     formationFee  one-off LLC filing fee
     annualFee     recurring report or franchise cost
     incomeTax     "None" = no personal income tax on wages
     note          the thing that actually matters about that state

   Fees from LLC University's 2026 comparison, read on 23 Sep 2026. They change —
   confirm with the state's Secretary of State before filing.

   THE RULE THAT OVERRIDES ALL OF THIS: register where you actually live and work.
   Forming in Wyoming while sitting in California does not avoid California — you
   become a foreign LLC there and pay both. The only people who should form
   out-of-state are those with no US physical presence at all.
   ============================================================================= */

const STATES = [
  ["Alabama",        200, 50,     "Annual",    "Taxed",  "Low annual cost, but a business privilege tax applies"],
  ["Alaska",         250, 100,    "Biennial",  "None",   "No income tax and no state sales tax"],
  ["Arizona",         50, 0,      "None",      "Taxed",  "No annual report at all — cheap to maintain"],
  ["Arkansas",        45, 150,    "Annual",    "Taxed",  "Cheap to form, pricier to keep"],
  ["California",      70, 820,    "Various",   "Taxed",  "$800 minimum franchise tax every year, even at zero revenue"],
  ["Colorado",        50, 25,     "Annual",    "Taxed",  "One of the cheapest states to run a small LLC"],
  ["Connecticut",    120, 80,     "Annual",    "Taxed",  "Middling on both cost and tax"],
  ["Delaware",       110, 400,    "Annual",    "Taxed",  "Default for VC-backed C-corps; overkill and costly for a solo LLC"],
  ["Florida",        125, 138.75, "Annual",    "None",   "No income tax; popular with remote founders who actually move there"],
  ["Georgia",        110, 60,     "Annual",    "Taxed",  "Reasonable across the board"],
  ["Hawaii",          50, 15,     "Annual",    "Taxed",  "Very low fees, high cost of living"],
  ["Idaho",          100, 0,      "Annual",    "Taxed",  "Report required but free to file"],
  ["Illinois",       150, 75,     "Annual",    "Taxed",  "Higher formation cost than neighbours"],
  ["Indiana",         95, 30,     "Biennial",  "Taxed",  "Biennial filing keeps admin light"],
  ["Iowa",            50, 30,     "Biennial",  "Taxed",  "Cheap and low-maintenance"],
  ["Kansas",         160, 50,     "Annual",    "Taxed",  "Higher formation fee for the region"],
  ["Kentucky",        40, 15,     "Annual",    "Taxed",  "Second-cheapest formation in the country"],
  ["Louisiana",      125, 35,     "Annual",    "Taxed",  "Moderate throughout"],
  ["Maine",          175, 85,     "Annual",    "Taxed",  "Expensive for a small state"],
  ["Maryland",       100, 300,    "Annual",    "Taxed",  "$300 annual charge regardless of revenue"],
  ["Massachusetts",  500, 500,    "Annual",    "Taxed",  "The most expensive state to form and maintain an LLC"],
  ["Michigan",        50, 25,     "Annual",    "Taxed",  "Genuinely cheap on both counts"],
  ["Minnesota",      155, 0,      "Annual",    "Taxed",  "Free annual renewal"],
  ["Mississippi",     50, 0,      "Annual",    "Taxed",  "Cheap to form, free to renew"],
  ["Missouri",        50, 0,      "None",      "Taxed",  "No annual report requirement at all"],
  ["Montana",         35, 20,     "Annual",    "Taxed",  "Cheapest formation fee in the USA; no sales tax"],
  ["Nebraska",       100, 13,     "Biennial",  "Taxed",  "Lowest recurring cost of any state"],
  ["Nevada",         425, 350,    "Annual",    "None",   "No income tax, but the fees claw much of it back"],
  ["New Hampshire",  100, 100,    "Annual",    "None",   "Interest-and-dividends tax fully phased out from Jan 2025 — now zero income tax"],
  ["New Jersey",     100, 75,     "Annual",    "Taxed",  "Middle of the pack"],
  ["New Mexico",      50, 0,      "None",      "Taxed",  "No annual report and strong owner privacy — the cheapest to maintain"],
  ["New York",       200, 9,      "Biennial",  "Taxed",  "Tiny biennial fee, but the newspaper publication requirement can cost $1,000+"],
  ["North Carolina", 125, 200,    "Annual",    "Taxed",  "High annual report fee"],
  ["North Dakota",   135, 50,     "Annual",    "Taxed",  "Unremarkable"],
  ["Ohio",            99, 0,      "None",      "Taxed",  "No annual report — very low maintenance"],
  ["Oklahoma",       100, 25,     "Annual",    "Taxed",  "Low recurring cost"],
  ["Oregon",         100, 100,    "Annual",    "Taxed",  "No sales tax, but income tax is high"],
  ["Pennsylvania",   125, 7,      "Annual",    "Taxed",  "$7 a year — nearly the cheapest upkeep anywhere"],
  ["Rhode Island",   150, 50,     "Annual",    "Taxed",  "Moderate"],
  ["South Carolina", 110, 0,      "None",      "Taxed",  "No annual report for LLCs"],
  ["South Dakota",   150, 55,     "Annual",    "None",   "No income tax; a genuine low-tax base if you live there"],
  ["Tennessee",      300, 300,    "Annual",    "None",   "No income tax, but among the priciest LLC fees"],
  ["Texas",          300, 0,      "Annual",    "None",   "No income tax, free annual report; franchise tax only above a high revenue threshold"],
  ["Utah",            59, 18,     "Annual",    "Taxed",  "Cheap, fast, and business-friendly"],
  ["Vermont",        155, 45,     "Annual",    "Taxed",  "Higher formation cost"],
  ["Virginia",       100, 50,     "Annual",    "Taxed",  "Straightforward and moderate"],
  ["Washington",     200, 60,     "Annual",    "None",   "No wage income tax, but 7% capital gains tax above roughly $270,000"],
  ["Washington DC",   99, 300,    "Biennial",  "Taxed",  "Biennial $300; relevant if you take a DC-based fellowship"],
  ["West Virginia",  100, 25,     "Annual",    "Taxed",  "Low cost"],
  ["Wisconsin",      130, 25,     "Annual",    "Taxed",  "Low recurring cost"],
  ["Wyoming",        100, 60,     "Annual",    "None",   "No income tax, strong privacy — but only worth it if you have no presence elsewhere"]
];

/* Verdict per state for someone who is NOT a US person for work purposes.
   An LLC does not give you work authorisation — owning is not the same as working. */
const STATE_GUIDANCE = {
  headline: "An LLC is not a work permit.",
  body: "You can own a US company on F-1 or H-1B. You generally cannot work in it " +
        "without CPT, OPT or a separate sponsorship — and passive ownership is a fine " +
        "line that immigration lawyers argue about. If the company is going to be " +
        "your actual work, the clean answer is an Indian entity, or Estonia, or a US " +
        "LLC operated from India once you leave. Form the US entity where you live; " +
        "if you have no US presence, New Mexico and Wyoming are the cheapest to keep alive."
};
