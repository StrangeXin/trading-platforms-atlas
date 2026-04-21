# Robinhood

The American app that defined the "mobile-first retail brokerage" era — zero-commission trades, a gamified UI, and a revenue model built on PFOF (payment for order flow). The 2021 GameStop episode forced the public to understand the real commercial structure behind "zero-commission."

## Basics

- **Founded**: 2013 in Menlo Park, California
- **Founders**: Vladimir Tenev (Russian-American) and Baiju Bhatt (Indian-American), who met at Stanford
- **Regulators**: SEC and FINRA
- **Listed**: Nasdaq direct listing in July 2021 (ticker: HOOD)
- **2024 active users**: ~25M
- **2024 AUC (assets under custody)**: ~$180B

## What the Business Actually Is

### PFOF (Payment For Order Flow)

**Robinhood's primary revenue source — not user commissions:**

```
User: taps "Buy AAPL"
    ↓
Robinhood sells the order to market makers (Citadel Securities, Virtu, etc.)
    ↓
The market maker pays Robinhood a "rebate" (~$0.002–0.005 per share)
    ↓
The market maker matches the order on-exchange or in its internal pool
    ↓
The user gets a fill (potentially a few basis points worse than the true market price)
```

### Legal but Contested

- The SEC permits PFOF, on condition that the broker can demonstrate "Best Execution"
- Critics: market makers see huge retail order flow, which gives them an information advantage
- Critics: users believe trading is "free," but the hidden cost shows up as worse execution prices
- Between 2020 and 2022 the SEC repeatedly considered banning PFOF; in 2023 it ultimately **compromised on stronger disclosure rather than a ban**

### Robinhood 2023 Revenue Breakdown (estimated from the Q4 10-Q)

| Source | Share |
|---|---|
| **PFOF (options / equities / crypto)** | 60–70% |
| **Net interest income** (customer uninvested cash + margin loans) | 20–30% |
| **Gold subscription** ($5/month Pro features) | 5–10% |
| **Crypto transaction rebates** | 5–10% |

**PFOF is the core.** Without PFOF, "zero-commission" Robinhood does not exist.

## Tech Stack

### Mobile-First

- **Native iOS + Android apps** (originally Swift / Kotlin)
- The web client did not ship until 2021 — eight years after the app
- **Design language**: minimalist, gamified, color psychology (green = up, red = down)

### Backend

- In-house order routing
- **No self-matching**: Robinhood is an introducing broker, clearing through **Robinhood Clearing** (self-clearing since 2018; previously via Apex Clearing)
- Crypto: market-making via the Robinhood Crypto subsidiary

### The Famous "Gamified UI"

- A **confetti animation** after trade execution (removed in 2021 after criticism in the wake of GameStop)
- "Your First Stock is on Us": free share for new signups ($5 equity), using referral psychology to acquire users
- "Popular Stocks" list: the stocks users are buying the most — amplifies herd behavior
- Price push notifications, which drive open frequency

## Key Events

### January 28, 2021 — The GameStop Episode

**What happened**: The WallStreetBets subreddit coordinated a short squeeze on GME, and millions of Robinhood users piled in.

**Robinhood's response**: it **restricted** buying of GME (allowing only position-closing). Users were furious, believing Robinhood was "protecting the hedge fund Citadel" (Citadel Securities was both a rescuer of Melvin Capital and Robinhood's largest PFOF counterparty).

**The actual reason** (disclosed later):
- Robinhood's clearing counterparty, the DTCC, demanded an **additional $3B margin deposit** due to the risk of unsettled long GME positions
- Robinhood did not have that cash on hand, so it borrowed $1B on an emergency basis from JPM and Goldman and curbed GME buys to reduce settlement risk
- Not a conspiracy — a **structural problem with the clearing mechanism**

**Consequences**:
- SEC and congressional investigations
- Multiple class action lawsuits
- Robinhood IPO'd in 2021 at a peak market cap of $32B, which fell to $8B by 2022
- CEO Tenev testified before Congress

### 2022 Crypto Downturn and Layoffs

- 2021 crypto bull: crypto trading fees contributed 50%+ of revenue
- 2022 crypto winter: crypto revenue **fell 90%**
- Two rounds of layoffs in 2022–2023 (~40% of staff)
- Stock briefly traded below $8

### 2023–2025 Recovery

- **Robinhood Gold** subscription growth
- **Robinhood Retirement** (IRA) launched in 2023
- **Robinhood Credit Card** launched in 2024 (3% cashback)
- 2025 active users recovered to 25M+
- Stock back above $40 by Q4 2025

## Product Lines

- **Equities trading** (US + partial international) — core business
- **Options trading** (50%+ of PFOF revenue)
- **Crypto trading** (BTC, ETH, DOGE, SHIB and ~20 coins)
- **ETFs**
- **Robinhood Wallet** (self-custody wallet, launched 2022)
- **Robinhood Gold** ($5/month subscription)
- **Margin loans**
- **IRA / Retirement** (launched 2023)
- **Cash Management** (bank-like account, high yield)
- **Robinhood Crypto's Solana integration** (2024)

## User Profile

**The typical Robinhood user**:
- Age 22–35
- First-time investor (Robinhood's 2022 S-1 disclosed: 62% of users were "first-time investors")
- Average account balance $4,000–6,000 (dramatically lower than Schwab's $350K or Fidelity's $300K)
- High-frequency tendencies (~10× the average trade frequency of a traditional broker)
- Disproportionately heavy options use (young users + options = a gambling mindset)

## Positioning vs. Other US Retail Brokers

| Platform | Core Difference |
|---|---|
| **Robinhood** | Mobile-first + zero-commission (subsidized by PFOF) + gamification |
| **Charles Schwab** | Full-service + research + higher-net-worth customers + TD Ameritrade acquisition |
| **Fidelity** | Retirement-plan giant + in-house ETFs + no PFOF (uses an internal broker-dealer) |
| **E*Trade** (acquired by Morgan Stanley) | Legacy electronic broker + options |
| **Interactive Brokers** | Professional / international markets + low (not zero) commissions |
| **Webull** | A "more professional Robinhood" (Chinese-American founders + options / futures) |

**Industry norms that Robinhood set**:
- Zero commissions (now universal)
- Mobile-first
- Fractional shares
- A single app for crypto and equities

Incumbent brokers were forced to follow on all of them.

## Geography and Regulation

### The International Expansion Flops

- 2019–2020 UK launch planned → delayed in 2020 by the pandemic and the Wirecard collapse → scrapped in 2021
- 2024: second attempt at an FCA license in the UK
- European expansion is **well behind eToro / Trading 212 / Revolut**
- International crypto expansion went more smoothly (EU MiCA-compliant)

### Regulatory Flashpoints

- **PFOF**: persistently criticized; the SEC settled in 2023 on enhanced disclosure
- **Pattern Day Trader rule**: accounts under $25K cannot make more than 3 day trades in any 5 trading days
  - Robinhood's UX quietly **pushes users toward Margin accounts to evade the limit** (greater risk)
- **Crypto staking compliance** (the SEC has gradually loosened enforcement through 2023–2024)

## Where It's Going

- **International expansion 2025+** (UK, Europe, possibly Asia)
- **Credit Card + Banking** pivot into an "all-in-one financial app"
- **Web3 + DeFi integration** (Robinhood Wallet is the first outpost)
- **IPO-stage investing** (Robinhood introduced pre-IPO allocations in 2024)
- **Institutional business** (via the 2024 X1 credit card acquisition and 2025 acquisition of crypto derivatives exchange Bitstamp)

## References

- [Robinhood official site](https://robinhood.com/)
- [Robinhood SEC filings (EDGAR)](https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001783879)
- [Vladimir Tenev — Wikipedia](https://en.wikipedia.org/wiki/Vladimir_Tenev)
- [GameStop short squeeze — Wikipedia](https://en.wikipedia.org/wiki/GameStop_short_squeeze)
- [SEC PFOF rule 2023](https://www.sec.gov/rules/2022/12/order-competition-rule)
- `../07-essentials/04-platforms-as-funnels.md`: platforms as acquisition funnels
- `../07-essentials/01-retail-as-product.md`: retail as product
- `../07-essentials/06-leverage-is-liquidation-countdown.md`: what leverage actually is
