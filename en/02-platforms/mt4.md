# MetaTrader 4 (MT4)

MT4 has been the king of retail FX for 20 years. Even though MetaQuotes froze the core version in 2020 and stopped selling licenses in 2021, hundreds of brokers still run their business on it in 2026. The enormous pile of EAs, indicators, tutorials, and muscle memory means it won't disappear any time soon — it's the "living fossil" of the retail FX ecosystem.

## Basics

- **Released**: 2005
- **Developer**: MetaQuotes Software (Cyprus / originally Kazan, Russia team)
- **Core version frozen**: Since 2019 Build 1370, no new features, only security patches
- **License sales stopped**: Since 2021 MQ stopped selling new MT4 server licenses to new brokers (forcing migration to MT5)
- **Current state**: Existing brokers keep operating; new brokers can only get MT5; third-party bridges (MetaApi / PrimeXM) keep it on life support

## System Components (Broker Side)

A full MT4 deployment isn't one program — it's a pile of server-side modules:

```
Client terminal (Windows / Mobile)
         ↕ (proprietary TCP binary)
  [MT4 Main Server] —— users / orders / history
         ↕
  [MT4 Data Center] —— quote distribution / relay (cuts latency for cross-region users)
         ↕
  [MT4 Trade Server] —— matching engine + risk
         ↕
  [MT4 Gateway] —— connects to LPs / FIX bridges (A-Book)
         ↕
  [MT4 Manager + Admin] —— broker ops (manual price adjust, freeze accounts, logs)
```

Among these, the **Manager Terminal** is the Windows client used by broker staff — it has switches like "manual spread adjustment," "virtual execution delay," "block EAs." These are the source of what people later call the "B-Book cheating toolkit."

## Technical Architecture (vs MT5)

Same lineage as MT5 — differences are mostly product coverage + order model:

| Dimension | MT4 | MT5 |
|---|---|---|
| Asset classes | FX + CFDs (metals / indices / stocks) | FX + CFDs + stocks + futures + bonds |
| Order model | Position-based (separate long/short positions + hedging) | Netting (same direction merged) + optional hedging |
| Scripting language | MQL4 (C-style) | MQL5 (C++-style, not compatible with MQL4) |
| Depth of Market (L2) | Not supported | Supported |
| Timezone | Server-local (most brokers EET/GMT+2) | UTC+ standardized internally |
| Strategy Tester | Single-threaded | Multi-threaded + cloud backtest (MQL5 Cloud) |
| Client architecture | C++ legacy codebase | C++ rewrite, more modern |
| Protocol | Proprietary binary (not interoperable with MT5) | Proprietary binary (newer) |
| Max pending orders | Unlimited in theory (broker config in practice) | Unlimited in theory |
| Broker count (2024) | ~400+ | ~600+ |

**MT4's unique advantage**: **position-based hedging** — same symbol can have long + short positions simultaneously, recorded as two separate positions. MT5 defaults to netting (open short after long = partial close), and even though MT5 supports hedging mode, it's not as native as MT4. Many "two-sided martingale" EAs depend on MT4's position model and break completely if migrated to MT5.

## MQL4 Ecosystem

**MetaQuotes Market** (the MT4 section on marketplace.mql5.com) is the official MQL4 distribution hub:

- **EAs (Expert Advisors)**: Fully automated trading bots, `.ex4` extension
- **Custom indicators**: Same `.ex4` format, difference is the runtime context
- **Scripts**: One-shot utilities
- **Estimated counts (2024)**: 10,000+ paid EAs + 30,000+ free; 20,000+ indicators

Typical paid EAs run $100–500; flagship products (e.g., "Gold Scalper Pro") have cumulative sales in the thousands; authors are mostly semi-anonymous.

**Why MQL4 is hard to migrate off**:
- The language itself is C-style + single-threaded + no modern libraries, **but** the ecosystem holds a huge number of "MT4-only" strategies
- A lot of code depends on MT4's `OrderSend()` signature (position-based); porting to MT5 means major rewrites
- Paid EA authors often don't release MT5 versions (they exit when customers drain off)

## Why MT4 Refuses to Die for 20 Years

1. **MQL4 ecosystem**: Hundreds of thousands of EAs + tens of thousands of paid indicators. Switching platforms nukes them all, which would kill every broker's "let users write their own bots → stickiness" strategy
2. **User muscle memory**: Retail traders have 20 years of UI / hotkeys / concepts (point, pip, magic number, ticket) baked in from MT4. Switching to MT5 is like switching keyboards
3. **Broker inertia**: Brokers that entered 2005–2015 have MT4 server infrastructure end-to-end; migration cost is high + user churn risk is real
4. **Decade of educational accumulation**: Tutorials, forums (Forex Factory, Babypips), courses almost all use MT4 as the example — instructors don't want to re-record videos
5. **Prop firm lock-in**: FTMO, TopStep were 100% MT4 early on; switching means re-running every challenge rule's internal test

## 2015 Swiss Franc Black Swan: MT4's First Stress Test

**2015-01-15**: Swiss National Bank removes the EUR/CHF 1.20 floor, EUR/CHF drops 20% in 30 seconds.

- Massive MT4 broker B-Book positions blown out instantly
- **FXCM** (largest U.S. retail FX broker) loses $225M, gets emergency $300M from Leucadia, later absorbed by Jefferies
- **Alpari UK** (Europe's third-largest MT4 broker) goes straight into bankruptcy
- Some brokers' MT4 servers can't handle the matching storm, go down for hours, and retroactively "reconcile losses" with users
- On Apple's App Store, MT4 / MT5 clients become the focal point for user complaints about "it's the app's fault that I lost money"

This event accelerated ESMA's MiFID II negotiations — in 2018 retail FX leverage was cut from 200+ to 30:1, ending the "100× leverage as marketing" era of MT4.

## The Apple Incident 2022

**September 2022**: Apple pulls MetaTrader 4 / 5 iOS apps for roughly six months, citing "Russian company."

- MetaQuotes urgently migrates App Store developer account to Cyprus subsidiary "MQ Software Corp"
- **March 2023** back on the store
- Impact: iOS users forced to Web / third-party wrappers, many mid-tier brokers lose 20–30% of iOS active users

This was the first public exposure of MetaQuotes' **geopolitical risk**. In the aftermath:
- Brokers started requiring multi-platform backups (TradingView, cTrader, DxTrade)
- Major prop firms (like FTMO) accelerated adding cTrader as a plan B
- MetaQuotes' actual UBO became a hot topic for regulators and press (still no official disclosure)

## B-Book "Cheating Toolkit" and MT4's Dark History

MT4 server has an entire set of undocumented plugin APIs (loaded through Manager Terminal). Grey/black-market versions include:

- **Virtual Dealer Plugin**: Artificial execution delay, requotes, making users lose more
- **Stop Hunter Plugin**: Sees who set stops, triggers via slippage
- **EA Killer**: Fingerprints EAs, adds artificial slippage to those accounts
- **IB Plugin**: Referral commission + b-book hedging tool (compliant but borderline grey)

Most of these plugins were written by Russian-speaking developers in the CIS region, sold for $5,000–20,000 one-time. **2015–2018 saw multiple exposés from Finance Magnates / LeapRate**, and some Cyprus brokers were fined by CySEC. MT4 server has no native mechanism to resist this kind of modification — it relies on broker self-policing.

MT5 server reportedly added plugin signing + audit logs, but MetaQuotes never publicly documented this.

## Current State 2024–2026

- New brokers can only buy MT5 licenses; existing MT4 license holders can continue renewing
- HFT / institutional-leaning brokers (IC Markets / Pepperstone) push MT5 primarily
- Retail / marketing-leaning brokers (Exness / XM / FBS) offer MT4 + MT5 in parallel
- Apple / Google Play occasionally re-pulls MT apps due to country-level policies; MetaQuotes keeps them live by moving the listing entity
- In 2024 MetaQuotes publicly stated "MT4 users now < MT5 users," but industry estimates put MT4 retail active accounts still in the 2–3M range

**Exit options (broker POV)**:
- MT5 (official path) — migration tools provided by MQ, but EA compatibility is poor
- cTrader (Spotware) — modern UI + C# + L2 DOM; prop firms' preferred backup
- TradingView + proprietary backend — API integration, route around MetaQuotes

## References

- [MetaQuotes official MT4 page](https://www.metatrader4.com/)
- [MQL4 official docs](https://docs.mql4.com/)
- [MetaTrader 4 — Wikipedia](https://en.wikipedia.org/wiki/MetaTrader_4)
- [Apple reinstates MetaTrader MT4/MT5 on App Store — MirageNews](https://www.miragenews.com/apple-reinstates-metatrader-mt4-mt5-on-app-store-961954/)
- [3 reasons why iOS removed MT4 and MT5 — FP Markets](https://www.fpmarkets.com/blog/3-reasons-why-ios-removed-mt4-and-mt5-from-the-app-store/)
- [WikiFX — MT4/MT5 removal event](https://www.wikifx.com/en/newsdetail/202209282994685243.html)
- Forex Factory / Babypips forum MT4 sections (community tutorials)
