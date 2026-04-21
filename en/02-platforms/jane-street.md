# Jane Street

**The king of crypto + ETF market making**. In 2023 roughly 15% of US ETF volume passed through Jane Street, and its share of crypto market making (Coinbase, Binance, Kraken) sits around **30–40%**. The FTX core — SBF, Caroline Ellison, Sam Trabucco — all came out of Jane Street.

## Basics

- **Founded**: 2000, New York
- **Founders**: Rob Granieri + Tim Reynolds + Marc Gerstein
- **Headquarters**: New York (World Trade Center Tower 4) + London + Hong Kong + Amsterdam + Tokyo
- **Employees**: ~2,800 (2024)
- **2023 revenue**: **$21B net revenue** (first disclosure in 2023, surpassing Citadel Securities)
- **What's unusual**: a **partnership structure** with no outside shareholders; OCaml as the primary development language

## Core Business

### ETF market making

Jane Street is a "native" of the ETF world:

- **US ETF market share**: ~15% of volume
- **European ETFs**: ~20%
- **Lead market maker** for 200+ US-listed ETFs
- **Authorized Participant (AP)**: helps ETF issuers create and redeem units
- Deep partnerships with iShares / Vanguard / SSGA

### Fixed income + commodities

- US corporate bonds: **~5% market share** (rapidly growing since 2020)
- International bond market making
- Commodity ETFs + futures
- Entered US Treasury market making in 2023

### Crypto

This is Jane Street's most mysterious and most profitable line of business:

- Market making in crypto since 2015 (extremely early)
- A principal LP for Binance, Coinbase, Kraken, FTX
- **Estimated**: 30–40% of global crypto spot trading passes through Jane Street
- After the 2022 FTX collapse, Jane Street **visibly pulled back** on crypto exposure (but didn't exit)
- In 2024 it re-expanded aggressively (post-Bitcoin ETF approval)

### Jane Street and the Bitcoin ETF

- January 2024: SEC approves Spot BTC ETFs
- Jane Street became a **principal AP**, market-making for BlackRock IBIT, Fidelity FBTC, etc.
- This is the actual point where crypto and traditional finance **converge**
- 2024 total BTC ETF AUM grew to $80B+ (Jane Street's market-making share ~30%)

## Tech + Culture

### OCaml: the contrarian choice

Jane Street is the **largest OCaml user on the planet** — unique in finance.

**Why OCaml**:
- Strong static typing + functional style → fewer bugs in financial code
- Performance close to C++ with much better expressiveness
- Easy to build DSLs (domain-specific languages) → configurable trading logic
- Jane Street has contributed the largest open-source library ecosystem in the OCaml community

**Scale**:
- ~10 million lines of OCaml
- All core trading systems are OCaml
- Only the handful of latency-critical paths drop to C++

### Culture: math + poker

Jane Street's hiring is famous for weighting **math + programming + poker** equally:

- Poker tournaments are a company tradition
- University recruiting skews toward math olympiads and ACM / ICPC
- **Interview questions are public** (Jane Street Insights blog, Puzzles)
- Many people leave Jane Street and start their own firms:
  - SBF → FTX (2017)
  - Caroline Ellison → Alameda (2018)
  - Sam Trabucco → Alameda (2019)
  - Matthew Goetsche → BlockTower Capital
  - A long list of AI quant founders

### Its "one-of-a-kind" operating model

- **No outside shareholders**: all profits distributed to the partners
- **No fundraising**: market making is done entirely on proprietary capital
- **Low-key**: almost no media outreach
- More **technology-driven** and **culture-driven** than Citadel Securities
- Ken Griffin has a personal high-profile presence; Jane Street **has no obvious face at the top**

## The FTX Connection

**This is the biggest PR crisis in Jane Street's history**:

- From 2017–2019, the FTX / Alameda core was entirely Jane Street alumni
- SBF spent 3.5 years at Jane Street (2014–2017)
- Jane Street's "effective altruism" (EA) culture shaped SBF
- After FTX's 2022 collapse, the media extensively discussed "Jane Street produced SBF"

**But**:
- SBF left Jane Street 5 years before FTX blew up
- Jane Street **had no FTX exposure itself** (it exited early and stopped holding FTT in 2020)
- Jane Street's internal culture **doesn't contain the extreme recklessness that SBF later developed**
- Company response: **"We're not responsible for the actions of former employees."**

## Jane Street vs. Citadel Securities

| Dimension | Jane Street | Citadel Securities |
|---|---|---|
| 2023 net revenue | $21B | ~$10B |
| Core markets | ETFs + crypto + fixed income | US equities + retail equity PFOF |
| Employees | 2,800 | 1,600 |
| Tech stack | OCaml + C++ | C++ + in-house |
| Marketing | Essentially none | Ken Griffin highly visible |
| Ownership | Internal partnership | Griffin + Sequoia + Paradigm |
| International | Strong (Europe / Asia / crypto) | Strong (Europe + Asia, but retail PFOF is US-only) |
| Crypto exposure | Large | Present but conservative |
| Political footprint | Low-key | Griffin's political donations |

**Jane Street is the "quiet giant"; Citadel Securities is the "loud giant."** Together they control about 40% of global electronic market making.

## Regulatory Posture

### United States

- SEC-registered broker-dealer
- CFTC-registered (for its derivatives business)
- 2024: US regulators discussing whether to curb the risks of combining market making and hedge fund activity
- Jane Street's partnership structure makes it easier for regulators to handle than a hedge fund

### Europe

- FCA UK + AFM Netherlands
- EU MiFID II market-maker exemptions (market makers have their own rules)
- 2024–2025: EU stepping up regulation of ETF market makers

### Crypto regulation

- 2023: Jane Street's crypto business faced compliance issues in several jurisdictions
- **Re-engaged aggressively in 2024** (the Bitcoin ETF opened an institutional-grade compliance path)
- Keeps compliance risk well isolated from counterparties like Binance and Coinbase

## 2024–2026 Trends

- **Bitcoin + Ether ETFs dominate**: Jane Street's ETF expertise + crypto savvy = perfect fit
- **Fixed income expansion continues**: taking on the traditional primary dealers
- **Continued investment in OCaml**: the core technical moat
- **IPO speculation**: rumored in 2024, but the culture **is resistant to IPO** (would cost the partnership its independence)
- **AI / ML integration**: heavy internal AI use, but **nothing publicly disclosed**

## References

- [Jane Street official site](https://www.janestreet.com/)
- [Jane Street — Wikipedia](https://en.wikipedia.org/wiki/Jane_Street_Capital)
- [Jane Street Insights (recruiting + puzzles blog)](https://www.janestreet.com/insights/)
- [Jane Street 2023 10-Q disclosure](https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=jane+street&type=10-K&dateb=&owner=include&count=40)
- [OCaml at Jane Street — blog](https://blog.janestreet.com/)
- `citadel-securities.md`: the other major electronic market maker
- `../07-essentials/05-crypto-vertical-conflict.md`: crypto + market makers
- `../01-history/04-crypto-native-era.md`: crypto history
- `../05-trends/05-ai-in-trading.md`: AI's role in market making
