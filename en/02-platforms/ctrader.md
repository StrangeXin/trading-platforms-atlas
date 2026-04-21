# cTrader

## Overview

cTrader is a retail and institutional trading platform developed by Spotware Systems, a Cyprus-based fintech company. It serves as the primary competitor to MetaTrader 5 in the FX/CFD broker space and has gained significant traction as an alternative platform following MetaQuotes' 2023–2024 crackdown on unlicensed MT4/MT5 deployments in the prop trading industry.

---

## History and Founding

**Spotware Systems** was founded in 2010 in Limassol, Cyprus, by Andrey Pavlov and Ilya Holeu. The company's stated mission from inception was "Traders First" — a positioning that explicitly targeted dissatisfaction with the MetaTrader ecosystem, particularly around transparency of pricing and order execution.

The first public release of cTrader was in **April 2011**, with FxPro as the launch broker partner. FxPro remains closely associated with the platform and has historically used it as a key differentiator from MT4-dominant competitors. By end of 2011, cAlgo (the algorithmic trading module) was also released.

Key milestones:
- **2011**: cTrader 1.0 launch; FxPro goes live as first broker
- **2011**: cAlgo released (C# scripting environment for automated strategies)
- **2013–2016**: Gradual broker adoption; IC Markets and Pepperstone add cTrader alongside MT4
- **2019**: cTrader Copy launched as an integrated copy trading product
- **2022–2023**: "cAlgo" renamed to "cTrader Automate" as part of platform rebrand
- **2024**: MetaQuotes terminates licenses for many prop trading firms → significant prop firm migration to cTrader
- **2025**: cTrader 5.4 ships native Python support for cBots and indicators — first major retail platform to do so

---

## Platform Architecture

cTrader is a suite of interconnected applications:

| Component | Description |
|---|---|
| **cTrader Desktop** | Windows desktop application; primary interface |
| **cTrader Web** | Browser-based, no install required |
| **cTrader Mobile** | iOS and Android |
| **cTrader Automate** | Algorithmic trading module (formerly cAlgo) |
| **cTrader Copy** | Copy trading infrastructure, natively integrated |

### Technology Stack
- Platform core is C#/.NET
- cBots (automated strategies) written in C#; Python support added in version 5.4 (2025)
- Real-time connectivity via FIX protocol on the broker/LP side
- Spotware provides cBridge: a bridge connecting cTrader to MT4, MT5, and FIX API liquidity providers

### Level II Order Book (DOM)
cTrader natively exposes Depth of Market (DOM) — full Level II pricing showing all bid/ask quantities at each price level. This is a key differentiator from vanilla MT4, which does not expose DOM to retail users. Brokers running ECN/STP configurations can pass real interbank depth through to cTrader clients.

---

## cTrader Automate (formerly cAlgo)

cTrader Automate is the integrated algorithmic trading environment:

- **Language**: C# (primary); Python added in cTrader 5.4 (2025)
- **IDE**: Built into cTrader Desktop; no external IDE required for basic development
- **cBots**: Automated strategies that execute in real-time or backtesting mode
- **Indicators**: Custom technical indicators, shareable via cTrader's public library
- **Backtester**: Tick-level backtesting using historical data
- **Optimization**: Built-in strategy optimizer using genetic algorithms

The Python addition is positioned as the first native Python environment in a major retail trading platform, aimed at expanding the developer base beyond C# specialists.

---

## cTrader Copy

cTrader Copy is a natively integrated copy trading product, not a third-party overlay:

- Strategy providers set their own subscription fees and commission structures
- Investors browse and subscribe to strategies directly within cTrader
- Copying is automated; no manual intervention required
- Supports percentage and fixed lot copying modes
- Pelican Network (third-party infrastructure provider) integrates with cTrader Copy for brokers like IC Markets, Deriv, and Pepperstone (per [FX News Group](https://fxnewsgroup.com/forex-news/platforms/ctrader-integrates-with-copy-trading-infrastructure-provider-pelican-network/))

---

## Spotware Connect (White Label)

Spotware offers a white-label program called **Spotware Connect** that allows brokers to deploy their own branded version of cTrader:

- **Fixed rental fee** or volume-based pricing models
- Broker retains full brand identity; cTrader branding is optional
- White labels can offer unlimited sub-white-labels to their own IB partners
- B2BROKER launched a dedicated cTrader white-label prop trading solution in 2024 targeting the prop firm market

This white-label infrastructure enabled the rapid adoption of cTrader by prop firms in 2023–2024 when MetaQuotes began revoking licenses.

---

## Major Brokers Offering cTrader

As of 2025, the major brokers providing cTrader include:

| Broker | Regulation | Notes |
|---|---|---|
| **IC Markets** | ASIC, CySEC, FSA | One of the largest ECN brokers by volume; raw spread pricing on cTrader |
| **Pepperstone** | FCA, ASIC, DFSA, BaFin | Full cTrader suite including Copy; strong AU/EU market |
| **FxPro** | FCA, CySEC, FSCA, SCB | Original launch partner (2011); deeply integrated |
| **Spotware** | — | Spotware runs its own demo/live environment at ct.spotware.com |
| **Fusion Markets** | ASIC | Low-cost Australian broker; cTrader as primary platform |
| **Vantage** | ASIC, FCA | Added cTrader to supplement MT4/MT5 offering |

---

## 2023–2025: Prop Firm Migration

The most significant recent driver of cTrader adoption has been the **MetaQuotes license enforcement** of 2023–2024:

- MetaQuotes terminated MT4/MT5 white-label licenses for a number of prop trading firms that were operating demo-environment-based prop challenges without proper licensing
- Prop firms needed alternatives fast; cTrader's white-label infrastructure was mature and available
- FundedNext, The5ers, and multiple other prop firms added cTrader as a platform option
- Match-Trader (a competing platform) also gained ground in the same period
- B2BROKER launched a specific cTrader prop trading solution in response to demand
- Voyage Markets launched as a dedicated cTrader white-label prop firm infrastructure reseller

This wave of migration meaningfully expanded cTrader's installed base beyond traditional retail FX brokers into the prop trading industry.

---

## Competitive Positioning vs MT5

| Dimension | cTrader | MetaTrader 5 |
|---|---|---|
| Scripting language | C#, Python (5.4+) | MQL5 |
| DOM / Level II | Native | Via plugin |
| Transparency | ECN-friendly, no requotes design | Dealer-mode by default |
| Copy trading | Natively integrated | Requires third-party signal service |
| White label model | Spotware Connect | MetaQuotes direct |
| Marketplace | cTrader community library | MetaTrader Market ($) |
| Mobile | iOS / Android | iOS / Android |
| Prop firm support | Explicit B2B product | Not purpose-built |

cTrader's architecture is better suited to ECN/STP brokers that want to expose real market depth. MT5 remains dominant in overall installed base due to network effects and the large MQL5 developer community.

---

## Technology and API Access

- **FIX Protocol**: Supported at broker/LP level via cBridge
- **cTrader Open API**: REST/WebSocket API for third-party applications; allows external systems to submit orders, read account data, and subscribe to market data
- **cTrader Automate API**: C#/Python libraries for local strategy development
- No native FIX API access for end-retail-users (unlike IBKR or Dukascopy)

---

## Current State (2025–2026)

- Spotware remains privately held; no public ownership disclosure
- cTrader continues to expand broker network globally
- Python scripting in 5.4 is the major developer-facing feature addition
- Prop firm white-label demand continues to be a growth vector
- No confirmed M&A activity or investor disclosures as of April 2026

---

## Sources

- [ForexBrokers.com — Best cTrader Brokers 2026](https://www.forexbrokers.com/guides/best-ctrader-brokers)
- [Spotware — FxPro becomes first cTrader broker](https://www.spotware.com/news/fxpro-becomes-the-first-broker-to-offer-ctrader/)
- [Spotware — cTrader product page](https://www.spotware.com/ctrader/)
- [TradeTheDay — cTrader Ultimate Guide 2026](https://tradetheday.com/platforms/ctrader)
- [Myfxbook — Trading with cTrader 2026](https://www.myfxbook.com/articles/trading-with-ctrader-everything-you-need-to-know-in-2025/7)
- [B2BROKER — cTrader white label prop solution](https://b2broker.com/news/b2broker-launches-ctrader-white-label-prop-trading-solution/)
- [FX News Group — cTrader / Pelican Network](https://fxnewsgroup.com/forex-news/platforms/ctrader-integrates-with-copy-trading-infrastructure-provider-pelican-network/)
- [TradingView News — Prop firm MetaQuotes migration](https://www.tradingview.com/news/financemagnates:f8c595249094b:0-prop-trading-firms-renaissance-cutting-us-clients-integrating-new-trading-platforms/)
