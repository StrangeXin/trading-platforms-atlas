# Saxo Bank

A Danish multi-asset investment bank and online broker. Technology-driven, positioned at the "institutional-grade retail" end of the market, aimed at high-net-worth and semi-professional traders. With around $110B in assets under custody in 2024, Saxo is one of the largest non-bank-owned brokers in Europe.

## Basics

- **Founded**: 1992 in Copenhagen
- **Founders**: Kim Fournais and Lars Seier Christensen
- **Regulators**: Denmark's FSA (lead) + EU MiFID + FCA (UK) + ASIC + FINMA (Swiss subsidiary) + MAS (Singapore) + 16 additional jurisdictions
- **Headquarters**: Hellerup, Copenhagen
- **Employees**: ~2,500 (2024)
- **AUC (client assets)**: ~DKK 750 billion ≈ $110B
- **Shareholders**: Geely Holding (33%, acquired 2018) + management + others

## Product Coverage

**Saxo's differentiator is product depth**:

- **40,000+ financial instruments** (among the broadest in the industry)
- Stocks (120+ exchanges)
- ETFs (7,000+)
- Futures (200+ products across CME / ICE / Eurex / HKEx, etc.)
- Options (equity, index, commodity)
- FX (190+ currency pairs)
- CFDs (8,800+)
- Bonds (5,900+ directly tradable)
- Mutual Funds
- Crypto ETPs (**Saxo does not offer spot crypto** — only ETP exposure)

## Core Platforms: SaxoTraderGO and SaxoTraderPRO

### SaxoTraderGO (Web + Mobile)

- The flagship retail platform, rewritten in 2015
- Responsive design across all devices
- Modern UI — substantially better than MT5 or IB TWS

### SaxoTraderPRO (Desktop, Professional)

- Multi-monitor, advanced charting, fast order entry
- Windows + Mac
- Targeted at HFT desks, market makers, and professional traders

### OpenAPI

- **Saxo has one of the most mature broker REST APIs in the industry**
- Full JSON + WebSocket documentation
- OAuth2 authentication
- The preferred integration for many third-party algo platforms (TradingView, Bookmap, MT4 bridges)

## Business Model Differences

### Not Zero-Commission, Not B-Book

- Saxo is a **traditional A-book** (STP to the market)
- Dual revenue model: **commissions** + **spread**
- Spreads are relatively **tighter** than zero-commission brokers
- Commissions are higher ($5–10 per trade)

**Net effect**:
- **High-net-worth / active traders** (more than 20 trades per month) pay **less** at Saxo than at a zero-commission broker
- Casual retail (fewer than 5 trades per month) is **more expensive** at Saxo than at Robinhood / Trading 212 / eToro

### Minimum Funding Thresholds

- In most jurisdictions, **$2,000–10,000 minimum**
- Compared with Robinhood ($0), eToro ($50), Trading 212 ($0)
- **Deliberately filters out "casual gamblers"** — Saxo is positioned for professionals and semi-professionals

## Historical Milestones

- **1992**: founded as Midas Fondsmæglerselskab (Midas futures brokerage)
- **1998**: rebranded Saxo Bank; obtained a Danish FSA banking license
- **2001**: launched the proprietary SaxoTrader platform (the ancestor of today's Web + Pro clients)
- **2007**: institutional clients such as Equinor / DNB went live
- **2011**: Saxo Privatbank launched the wealth-management business
- **2015**: SaxoTraderGO rewrite shipped
- **2018**: Geely Holding (Zhejiang, China) acquired 51.5%, later reduced to 33%. Geely has remained the largest shareholder
- **2019**: UK FCA license for the Saxo Markets UK arm matured
- **2020**: relaunched BinckBank (the Dutch retail broker subsidiary acquired earlier)
- **2022**: acquired Rabobank Australia's wholesale CFD business
- **2024**: AUC crossed $110B
- **Q1 2025**: partnership with Flow Traders on crypto ETPs

## Why Saxo Is Different

### 1. Technology-Driven, Not Channel-Driven

- Most European brokers rely on marketing (Plus500, eToro, XM)
- Saxo runs on **technology assets**: 40K-instrument connectivity, market-maker links, an open API
- 30% of revenue comes from **B2B white-label** — Saxo supplies the back end to other brokers

### 2. Institutional DNA

- Kim Fournais and Lars Seier Christensen came out of interbank FX and futures trading
- Not a "marketing-led retail brokerage" but an operation that "brings institutional-grade execution to retail"
- That is why SaxoPro has a UX built for professional traders

### 3. Geographic Diversity

**How many countries these brokers can actually operate in**:
- Plus500: ~40 countries
- eToro: ~140 countries
- Saxo: **~170 countries**, with 9 local subsidiaries and joint ventures

### 4. No PFOF

- Saxo **does not accept payment for order flow** — even in its US business, voluntarily
- Orders route directly to LPs and exchanges
- The canonical "real A-book" example

## Criticisms and Weaknesses

### Platform Complexity

- SaxoPro is too complex for newcomers
- Customer support is not as responsive as IB or Schwab

### Controversial Fee Structure

- Bond trading carries a **1% markup** — hidden pricing
- FX spreads advertised at 0.4 pips, but the "minimum commission" rule pushes effective spreads on small trades above 1 pip
- Withdrawal fees (the 2022 $40 wire fee for US clients caused backlash)

### Missing Crypto

- From 2023 through today, Saxo **does not support spot crypto**
- Only crypto ETPs (Bitcoin ETF, Ethereum ETF, etc.)
- Losing market share to Kraken, Coinbase, and Bybit among crypto-native users

## Saxo vs. Other Large European Brokers

| Platform | Positioning | 2024 AUC |
|---|---|---|
| **Saxo Bank** | HNW / professional / multi-asset | $110B |
| **Swissquote** (Switzerland) | All-asset + retail + Swiss banking license | $60B |
| **IG Group** (UK) | CFD + professional retail + spread betting | $90B client funds |
| **CMC Markets** (UK) | CFD + spread betting | $8B |
| **Plus500** (Israel / Cyprus) | Pure-retail CFD | $20B |
| **DeGiro** (Netherlands, merged into flatexDEGIRO 2020) | Low-commission + European retail equities | $40B |
| **eToro** (Israel) | Social + copy trading + crypto | $50B |

**Saxo is the European player that looks most like Schwab / IB**: full product suite, direct market access, HNW positioning.

## The China / Geely Angle

- **Geely bought 51.5% in 2018** (later down to 33% as Saxo management increased its stake)
- Strategic rationale: Geely already owned Volvo in Sweden and was expanding into financial services
- Saxo provided the tech stack for **Geely's fintech ambitions in the Chinese market**
- Localization in China **never actually materialized** (regulatory resistance)
- Geely's involvement has **not** materially shifted Saxo's product direction or corporate culture (management retains independence)

## Institutional Product Lines

- **Saxo Liquidity Provider**: white-label liquidity for other brokers
- **Saxo Prime** (launched 2020): Prime-of-Prime services, competing with ADSS, Finalto, and similar
- **Saxo Tech**: SaxoOpenAPI and platform licensing to other financial institutions

**Saxo is a "banker's banker"** — a meaningful number of mid-sized European brokers are actually running Saxo on the back end.

## References

- [Saxo Bank official site](https://www.home.saxo/)
- [Saxo Bank — Wikipedia](https://en.wikipedia.org/wiki/Saxo_Bank)
- [Saxo OpenAPI docs](https://developer.saxo/)
- [Geely acquires Saxo Bank 2018 — Reuters](https://www.reuters.com/article/us-saxo-bank-m-a-geely-idUSKBN1HN1IJ)
- [Saxo 2024 annual report](https://www.home.saxo/about-us/investor-relations)
- `../03-architecture/01-broker-architecture.md`: broker architecture
- `../04-relationships/02-liquidity-chain.md`: the liquidity chain (Saxo as a PoP)
