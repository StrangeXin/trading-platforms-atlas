# Prop Firm Ecosystem Map

The prop firm industry grew from a roughly $100M category in 2020 to a **$12B+ industry** by 2026. This chapter is separate from `03-whitelabel-map.md` (which covers the broker - MT5 - prop firm triangle) and focuses on **the prop firms' own ecosystem**: who owns whom, who depends on whom, and how the pecking order was reshuffled after the 2024 MetaQuotes purge.

## 1. 2024–2026 Industry Landscape

### Top 15 Prop Firms (by estimated revenue)

| # | Prop Firm | HQ | Est. Monthly Revenue | Primary Platform | Notes |
|---|---|---|---|---|---|
| 1 | **FTMO** | Prague | $25–30M | cTrader (ct.ftmo.com) + MT5 | 2025 acquisition of OANDA, merging into a "trading powerhouse" |
| 2 | **The5ers** | Tel Aviv | $10–15M | MT5 + cTrader | Added cTrader in 2025, dropped MT4 |
| 3 | **FundedNext** | Ajman, UAE | $10–15M | MT5 + Match-Trader + cTrader | Match-Trader live in 2024; US CFD offering shut in 2024 |
| 4 | **TopStep** | Chicago | $8–12M | TopstepX (proprietary) + NinjaTrader + TradingView | TopstepX mandatory from 2025 |
| 5 | **Apex Trader Funding** | Austin | $5–10M | NinjaTrader + Rithmic | Leader in US futures prop |
| 6 | **FundingPips** | Dubai | $5–10M | MT5 + DxTrade | Caught in the MetaQuotes 2024.2 purge |
| 7 | **True Forex Funds** | Budapest | $3–5M → defunct | MT4/5 | MT5 license pulled by MetaQuotes in 2024.2, business shuttered |
| 8 | **CryptoFundTrader** | Zug, Switzerland | $2–4M | MT5 + Match-Trader + Bybit | Crypto-focused |
| 9 | **MyForexFunds** | Mississauga, Canada | peaked at $10M → shut by lawsuit | MT4/5 | Sued by CFTC in 2023 for $310M "fraud" |
| 10 | **Maven Trading** | Dublin | $2–4M | MT5 + cTrader | Fast growth in 2024 |
| 11 | **BluBerry Funding** | London | $1–3M | MT5 | Backed by Firefly Ventures |
| 12 | **E8 Markets** | Dubai | $1–3M | MT5 | Europe + Middle East |
| 13 | **Tradenet Capital** | Israel | $1–2M | cTrader + MT5 | Longest-running Israeli prop |
| 14 | **Lux Trading Firm** | Luxembourg | $1–2M | MT5 | Tighter EU regulation |
| 15 | **FundedTrader** | Poland | $1–2M | MT5 | Polish domestic |

**Industry numbers**:
- Active prop firms globally: ~200 (peaked at ~300 in 2024, reduced after the 2024.2 purge)
- Industry-wide **annual revenue**: ~$12B (2024 estimate)
- **Top 10 combined**: ~60% of industry revenue

## 2. Platform Dependency Map

```
┌─────────────────────────────────────────────────────────────┐
│                   Prop Firm Platform Choices                 │
└─────────────────────────────────────────────────────────────┘

MetaTrader 5 (MetaQuotes)
    │
    ├── FTMO (partially migrating)
    ├── FundedNext (primary)
    ├── The5ers (moving to cTrader in 2025)
    ├── FundingPips (previously delicensed)
    ├── CryptoFundTrader (one of several platforms)
    ├── E8 Markets
    ├── BluBerry Funding
    └── Maven Trading (partial)

cTrader (Spotware)
    │
    ├── FTMO (ct.ftmo.com primary)
    ├── The5ers (primary from 2025)
    ├── FundedNext (optional)
    ├── Maven Trading (primary)
    └── Tradenet Capital

NinjaTrader (NinjaTrader LLC, acquired by Kraken)
    │
    ├── TopStep (partial)
    ├── Apex Trader Funding (primary)
    └── Other US futures props

TopstepX (proprietary)
    │
    └── TopStep (mandatory from 2025)

Match-Trader (Match-Trade Technologies)
    │
    ├── FundedNext (launched 2024)
    └── CryptoFundTrader

DxTrade (Devexperts)
    │
    └── FundingPips

TradingView (integration)
    │
    └── TopStep (as front end)

Bybit Exchange
    │
    └── CryptoFundTrader (direct integration from 2024 Q2)
```

## 3. M&A + Investment Relationships

### 2025 FTMO × OANDA is the watershed

```
FTMO
  ↓ 2025-02 CVC announces sale of OANDA
  ↓ 2025-11 regulatory approval
  ↓ 2025-12-02 deal closes
OANDA Global Corporation
```

**Why it matters**:
- OANDA has **real bank-grade licenses in multiple jurisdictions, including US CFTC**
- FTMO gets **real hedging capability** (no longer dependent on a pure B-book)
- 2025-08: FTMO + OANDA restored MT5 prop trading in the US
- Peers are all rushing to copy the model

### Other prop platform consolidation

| Year | Event |
|---|---|
| 2020 | Kraken first gets interested in NinjaTrader |
| 2023 | Apex acquires Earn2Trade (futures prop consolidation) |
| 2024 Q1 | FundedNext + Match-Trader deep integration |
| 2024 Q1 | CryptoFundTrader + Bybit partnership (April) |
| 2025-03 | **Kraken acquires NinjaTrader for $1.5B** (cash + equity) |
| 2025-06 | Kraken launches NinjaTrader Connect (B2B platform) |
| 2025-12 | **FTMO closes the OANDA acquisition** |
| 2026-03 | Kraken acquires Bitnomial for $550M |
| 2026-03-20 | Kraken cancels its IPO |

**Observations**:
- **Exchange + futures broker** consolidation (Kraken + NinjaTrader)
- **Prop firm + broker** consolidation (FTMO + OANDA)
- **Prop firm + crypto exchange** consolidation (CFT + Bybit)
- 2025–2026: the industry moves from "independent prop firm" → "vertically integrated trading group"

## 4. The MetaQuotes Love-Hate Relationship

### 2020–2023: honeymoon period

- Prop firms get MT5 licenses via white-label brokers
- MetaQuotes collects **per-account fees** (every demo account counts)
- Symbiosis: MT5 is the platform retail traders already know, and prop firms are a pipeline of new MetaQuotes users

### 2024 MetaQuotes purge

**February–March 2024**:

- 2024-02-06: True Forex Funds' MT5 license revoked
- 2024-02-14: FundingPips delicensed
- 2024-02-20: MetaQuotes confirms action against prop firms "serving US customers"
- 2024-03: multiple small and mid-tier prop firms forced to switch platforms

**Stated reason**: "US compliance" (MetaQuotes didn't want prop firms without CFTC licenses onboarding US retail)

**Underlying reason**:
- Prop firms generate hundreds of millions per month in revenue, and **MetaQuotes can't capture a fair share** (because the accounts are demo)
- MetaQuotes wants to **reset the negotiating leverage**
- Using "US compliance" as a cover for commercial ends

**Consequences**:
- **cTrader benefited the most** (FTMO, The5ers, FundedNext and others migrated in)
- Match-Trader + DxTrade were secondary beneficiaries
- The prop firm industry **accelerated its de-MetaQuotes shift**
- 2025: MT5's prop firm market share estimated to have gone from **90% → 55–60%**

### 2025: détente?

- FTMO reconnects via acquiring OANDA (which has its own MT5 license)
- MetaQuotes **softened its posture** at congressional hearings
- From 2025 Q3, MT5 prop firm counts **bottom out and rebound**
- But **the dominant position is already lost**; the platform mix is now diversified

## 5. Prop Firm Parent Company / Shareholder Relationships

### FTMO Group

- **OMHC** (Omega Holding Company) is FTMO's parent
- Based in Prague, Czech Republic
- Founders Otakar Šuffner + Marek Vašíček (100% private, no outside shareholders)
- 2025 Forbes disclosed both founders at an estimated **€1B+ each** in net worth
- Businesses: FTMO, OANDA (2025 acquisition)

### The5ers

- Private Israeli company
- 100% held by founders + management
- No public outside funding

### FundedNext

- Founder Syed Abdullah Jayed (Bangladesh)
- Dual registration in UAE + Bangladesh
- Holds a **Cyprus Securities & Exchange Commission** license (added in 2024)

### TopStep

- Founded in Chicago in 2012 by Michael Patak
- Remains private (has turned down multiple investment offers)
- 2024: minority investment from Nava Capital (amount undisclosed)

### Apex Trader Funding

- Founded in Austin, TX in 2022
- Fast growth; the industry assumes **outside PE investment** but nothing is public

## 6. Geographic Distribution

```
Europe (~50% of industry revenue)
├── Czech Republic: FTMO (top)
├── Ireland: Maven Trading
├── Luxembourg: Lux Trading Firm
├── Poland: FundedTrader
├── UK: BluBerry Funding
├── Hungary: True Forex Funds (defunct)
├── Cyprus: many (e.g., FundedNext's European sub)
└── Germany: some (not top-tier)

Middle East (~20%)
├── UAE Dubai + Ajman: FundedNext, E8 Markets, FundingPips, etc.
└── Israel: The5ers, Tradenet

Americas (~20%)
├── US Chicago: TopStep
├── US Austin: Apex Trader Funding
├── Canada: MyForexFunds (defunct)
└── Other Americas: small

Asia (~10%)
├── Hong Kong / Singapore: several
└── India / Southeast Asia: scattered

Africa (<1%)
└── Scattered in South Africa
```

**Observations**:
- **Dubai is the emerging hub for 2024–2026** (tax + light regulation)
- **Israel + Cyprus** carry the traditional "fintech + FX" DNA
- **The US is effectively absent** (high CFTC bar)
- **Asia is very small** (unclear regulation, a lot of unlicensed operators)

## 7. The Prop Firm "Peripheral Service Providers"

### Payments / deposits

- **PayPal + Stripe** (most major props avoid these — they get frozen regularly)
- **Skrill / Neteller** (small e-money)
- **Crypto payments** (accepted by most major props)
- **Bank wire** (for large challenge fees)

### Tech / white-label brokers

- **B2Broker**: MT5 white-label + risk management for smaller props
- **Leverate**: the legacy MT5 white-label player
- **Quadcode**: FX / CFD tech stack
- **Match-Trade Technologies**: next-gen tech stack, prop-friendly
- **Spotware**: the official cTrader maker, deeply partnered with FTMO

### Regulation / compliance

- **ADL Legal and other specialist firms**: prop firm regulatory advisory
- **KPMG / Deloitte**: audit (for mid- and large-tier props)
- **CySEC registered agents**: used by smaller props

### Marketing / paid acquisition

- **Google Ads "FX prop firm"** keywords: brutally competitive (CPC $5–30)
- **Facebook / Instagram**: primary acquisition channel
- **YouTube FX influencers**: 30–50% revenue share deals
- **Paid Discord / Telegram communities**

## 8. Prop Firm 5-Year Predictions (2026–2030)

1. **Continued M&A**: FTMO + OANDA is the opening shot; more prop + broker consolidation to come
2. **Geographic shift**: more relocations to Dubai / UAE (tax + regulation)
3. **AI integration**: every prop firm will have its own "AI coach" (some already do)
4. **Tighter regulation**: the UK FCA and EU ESMA are likely to publish prop-firm-specific rules in 2026–2028
5. **Return to the US**: via broker acquisition (the FTMO-OANDA model) + CFTC compliance path
6. **Crypto convergence**: more props will support crypto (taking cues from CryptoFundTrader)
7. **"AI prop firms"**: a new species (see `../05-trends/05-ai-in-trading.md`)
8. **A top-tier IPO?**: FTMO could IPO in 2027–2028 (at a $5–10B-class valuation)

## References

- [Finance Magnates prop trading industry report](https://www.financemagnates.com/thought-leadership/taking-stock-of-the-retail-prop-trading-market/)
- [FTMO completes OANDA acquisition — GlobeNewswire](https://www.globenewswire.com/news-release/2025/12/02/3197594/0/en/FTMO-Building-Global-Trading-Powerhouse-Completes-Acquisition-of-OANDA-from-CVC.html)
- [CVC sells OANDA](https://www.cvc.com/media/news/2025/cvc-funds-agree-sale-of-oanda-to-ftmo/)
- [Kraken acquires NinjaTrader](https://www.kraken.com/press/releases/kraken-to-acquire-ninjatrader-introducing-the-next-era-of-professional-trading)
- [True Forex Funds delicensed by MetaQuotes](https://fxnewsgroup.com/forex-news/retail-forex/exclusive-prop-trading-firm-true-forex-funds-shut-down-by-metaquotes-move/)
- [MyForexFunds CFTC lawsuit](https://www.financemagnates.com/forex/310-million-prop-trading-fraud-regulators-freeze-assets-of-my-forex-funds/)
- [VeritasChain 2025 prop firm retrospective](https://veritaschain.org/blog/posts/2025-12-28-prop-trading-reckoning/)
- [FTMO 2024 financials: $329M](https://www.financemagnates.com/forex/ftmos-parent-netted-over-62-million-on-329m-revenue-in-2024/)
- [2026 prop firm rule-change forecast](https://newyorkcityservers.com/blog/prop-firm-rule-changes-2026)
- `03-whitelabel-map.md`: the Prop Firm × MT5 × broker white-label web
- `../07-essentials/02-prop-firm-casino.md`: what a prop firm actually is
- `../02-platforms/ftmo.md` / `topstep.md` / `cryptofundtrader.md`, etc.: individual platform profiles
- `../05-trends/03-prop-firm-consolidation.md`: prop firm M&A history
