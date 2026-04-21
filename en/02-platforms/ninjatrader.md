# NinjaTrader

## Overview

NinjaTrader is a US-based futures trading platform and brokerage, founded in Denver, Colorado, in 2003. It is the dominant platform for retail futures traders in the United States and serves as the primary interface for major futures prop firms including TopStep, Apex Trader Funding, and Earn2Trade. In May 2025, cryptocurrency exchange Kraken (via parent company Payward Inc.) acquired NinjaTrader for $1.5 billion in the largest deal ever combining traditional finance and crypto.

---

## History and Founding

**NinjaTrader** was founded in 2003 in Denver, Colorado, by **Raymond Deux**. The company began as a software-only operation, providing advanced charting and trade management tools for futures and equities traders.

Key milestones:
- **2003**: Founded by Raymond Deux in Denver, CO
- **2005**: NinjaScript introduced — an open trading development framework written in C#
- **2009**: NinjaTrader Brokerage launched, enabling the company to offer direct brokerage services alongside the software platform
- **2012**: NinjaTrader 7 becomes the industry standard for futures retail traders
- **2016**: NinjaTrader 8 released — major architectural overhaul; .NET 4.5, improved multithreading, performance improvements
- **2019**: TopStep, Apex, Earn2Trade, and other futures prop firms officially adopt NT8 as their primary platform
- **2020–2023**: Becomes the dominant platform in US retail futures prop trading; Rithmic data feed integration becomes standard
- **March 20, 2025**: Kraken announces $1.5B acquisition of NinjaTrader
- **May 2, 2025**: Acquisition closes; NinjaTrader operates as standalone platform within Kraken/Payward portfolio
- **Late 2025**: NinjaTrader launches "NinjaTrader Connect" — B2B white-label infrastructure for futures and prediction markets

The company's headquarters later moved from Denver to **Chicago, Illinois** to be closer to CME Group and the futures industry cluster.

---

## Platform Architecture

NinjaTrader 8 (NT8) is a multiplatform application available on desktop (Windows primary), web, and mobile.

### Core Components

| Component | Description |
|---|---|
| **Charts** | Advanced charting with 100+ built-in indicators, multi-timeframe, multi-instrument |
| **Market Analyzer** | Scannable instrument list with custom columns and conditions |
| **Order Flow+** | Add-on for order flow analysis (footprint charts, volume profile, VWAP) |
| **Level II (DOM)** | Full depth of market window; best bid/ask ladder with volume at each level |
| **Strategy Analyzer** | Backtesting and optimization engine |
| **Trade Performance** | P&L reporting, trade statistics, equity curve |
| **ATM Strategies** | Automated Trade Management — pre-configured stop/target rules |

### ATM Strategies

ATM (Automated Trade Management) is one of NinjaTrader's most-used features in the prop trading context:
- Define stop loss, profit target, and trailing stop as a template before entry
- Applied automatically upon order fill — no manual stop placement required
- Multiple ATM types: Standard, MBT (multiple brackets), and custom
- Critical for prop firm traders operating under strict drawdown rules, as it mechanically enforces risk limits at order level

### NinjaScript (C#)

NinjaScript is NinjaTrader's proprietary development framework built on C#:
- Full access to all platform data (bars, orders, positions, account)
- Two modes: **Strategies** (automated execution) and **Indicators** (visual/signal only)
- Compiled in-platform using .NET; external IDEs (Visual Studio) also supported
- Large third-party add-on ecosystem; dozens of commercial NinjaScript developers
- Strategies can run in simulation or live mode; live mode requires brokerage connection

---

## Level II Market Depth

NinjaTrader's Level II window provides:
- Full order book ladder (bid/ask quantities at each price level)
- Historical volume at price (footprint-style within DOM)
- Time and Sales integration
- Customizable ladder appearance and hotkey execution

In the prop futures context, traders use Level II to identify absorption patterns, iceberg orders, and liquidity imbalances, particularly on liquid CME instruments like ES (S&P 500 futures), NQ (Nasdaq futures), and CL (Crude Oil).

---

## Brokerage and Clearing

**NinjaTrader Brokerage** is a registered **Introducing Broker (IB)** with the CFTC. Clearing is handled through NinjaTrader Clearing, LLC, a registered Futures Commission Merchant (FCM). The brokerage offers:

- Commission structure: typically $0.09/contract for micro futures, competitive on standard
- Direct routing to CME, CBOT, NYMEX, COMEX via CME Globex
- Margin requirements per exchange minimums
- Account minimum: relatively low vs. institutional FCMs

Post-Kraken acquisition, the company is positioning NinjaTrader's FCM license as the vehicle for Kraken to offer crypto futures and derivatives to US clients under CFTC oversight.

---

## Rithmic Data Feed Integration

In the prop trading ecosystem, NinjaTrader connects primarily via **Rithmic** — the industry standard data feed and routing infrastructure for US futures prop firms. Rithmic provides:

- Ultra-low latency order routing to CME Globex
- Real-time tick data with accurate historical fill prices
- Account management API (used by prop firms to monitor drawdowns)
- TopStep, Apex, Earn2Trade, and TradeDay all run on Rithmic infrastructure

When prop firm traders receive funded accounts, they get Rithmic credentials that plug directly into NinjaTrader 8.

---

## Prop Firm Integrations

NinjaTrader is the most common platform across US futures prop firms:

| Firm | NinjaTrader Integration |
|---|---|
| **TopStep** | Official integration via Rithmic; primary platform for Trading Combine |
| **Apex Trader Funding** | NT8 via Rithmic; free NT license provided at signup |
| **Earn2Trade** | Gauntlet Mini evaluation uses NT8 via Rithmic credentials |
| **Uprofit** | Officially supported |
| **Elite Trader Funding** | Officially supported |
| **TradeDay** | Rithmic-based NT8 integration |

Quantower is an alternative platform that some prop firms (including TopStep) added as a second option, but NinjaTrader remains the modal choice.

---

## Kraken Acquisition (2025)

**Announced**: March 20, 2025  
**Closed**: May 2, 2025  
**Price**: $1.5 billion  
**Acquirer**: Payward Inc. (parent company of Kraken)

This was described by Architect Partners as "the largest-ever deal combining traditional finance and crypto" ([Architect Partners analysis](https://architectpartners.com/kraken-acquires-ninjatrader-for-1-5b-the-largest-ever-bridge-deal/)). The acquisition added approximately 2 million users to Kraken's platform and resulted in a 119% increase in daily average revenue trades for Payward.

Strategic rationale:
- NinjaTrader's CFTC-registered FCM license enables Kraken to offer US-regulated crypto futures
- Kraken gains a retail futures audience; NinjaTrader gains crypto product capabilities
- Both companies target professional retail traders as their core demographic

Post-acquisition, NinjaTrader launched **NinjaTrader Connect** — a B2B infrastructure platform enabling fintechs and trading platforms to offer regulated futures and prediction markets via API, without needing their own FCM license.

In April 2026, Payward also announced a $550 million acquisition of **Bitnomial**, a digital asset derivatives exchange, further expanding the derivatives infrastructure alongside NinjaTrader and Kraken.

---

## Licensing Model

NinjaTrader offers three licensing tiers:

| Tier | Cost | Features |
|---|---|---|
| **Free** | $0 | Real-time simulation, live trading (limited), basic charting |
| **Lease** | ~$33/month | Full platform features, NinjaScript, real-time strategies |
| **Lifetime** | ~$1,099 one-time | Permanent license, all features |

Prop firm accounts (Apex, Earn2Trade, etc.) frequently provide free or discounted NT licenses as part of their onboarding.

---

## Current State (2025–2026)

- Operates as independent platform within Kraken/Payward portfolio
- Chicago HQ; CFTC-registered as IB and FCM
- Active development: mobile improvements, NinjaTrader Connect B2B product
- Core retail futures trading platform market share in US remains strong
- Crypto integration with Kraken platform in roadmap
- No disclosed financials (private company, Payward is not publicly traded)

---

## Sources

- [NinjaTrader Wikipedia](https://en.wikipedia.org/wiki/NinjaTrader)
- [Kraken — Acquisition announcement](https://blog.kraken.com/news/kraken-to-acquire-ninjatrader)
- [Architect Partners — $1.5B acquisition analysis](https://architectpartners.com/kraken-acquires-ninjatrader-for-1-5b-the-largest-ever-bridge-deal/)
- [NinjaTrader — Level II documentation](https://ninjatrader.com/support/helpGuides/nt8/level_ii.htm)
- [NinjaTrader — Market depth blog](https://ninjatrader.com/futures/blogs/observe-market-depth-with-the-level-ii-window/)
- [Vetted Prop Firms — Prop firms using NinjaTrader 2026](https://vettedpropfirms.com/prop-firms-that-use-ninjatrader/)
- [TopStepTrader review — Platform details](https://marksinsights.com/topstep/)
- [FX News Group — NinjaTrader Connect launch](https://fxnewsgroup.com/forex-news/platforms/kraken-launches-ninjatrader-connect-platform-for-prediction-markets/)
- [CoinDesk — Bitnomial acquisition](https://www.coindesk.com/business/2026/04/17/kraken-s-parent-company-payward-to-acquire-derivatives-exchange-bitnomial-for-usd550-million-in-cash-and-stock)
