# Interactive Brokers (IBKR) + TWS Platform

## Overview

- **Company**: Interactive Brokers Group (NASDAQ:IBKR)
- **Founded**: 1978 by Hungarian-American mathematician **Thomas Peterffy**
- **Controlling stake**: Peterffy still personally owns ~70% of the equity (2026) — one of the most concentrated controlling stakes of any listed U.S. financial company
- **Market cap**: ~$60–70B (Q1 2026)
- **Coverage**: 150+ markets globally, 26 currencies, accounts available in 200+ countries
- **Asset classes**: Stocks, options, futures, FX, bonds, funds, crypto (limited)

## Why It Deserves a Dedicated Deep-Dive

IB is one of the **very few brokers that simultaneously hits all three of: retail-open, institutional-grade architecture, and proprietary tech stack**. Most same-tier peers (Goldman, Morgan) don't accept retail; most retail brokers (Robinhood, eToro) don't hit institutional-grade.

## Flagship Clients

### Trader Workstation (TWS)
- Desktop app, written in Java (cross-platform)
- Released 1999, continuously iterated since
- **UI is notoriously complex** (ten windows on one screen is normal)
- But functional depth is unrivaled: option chains, algorithmic orders, cross-market aggregation

### IBKR Mobile
- Native iOS / Android
- Simplifies TWS's complexity for mobile order entry

### IBKR Desktop (2023, new)
- Modern desktop app (React + Electron)
- Aimed at younger users, simplifies TWS
- Features still expanding

### Client Portal Web
- Browser-based
- Lighter than TWS, good for checking positions / basic trading

## API Ecosystem

IB is a developer favorite because the **APIs are complete and free**:

### TWS API
- Proxied through TWS (TWS must be running + logged in)
- Official Python / Java / C# / C++ SDKs
- Constraint: the client must be running

### FIX CTCI
- Institutional-grade FIX access
- Requires IB manual authorization + $1,500/month
- Lowest latency

### Client Portal API (REST)
- Next-gen REST API
- No TWS backend required
- Pushed since 2019, suits serverless / cloud deployments

### Third-Party Wrappers
- **ib_insync** (Python, async-friendly) — the community favorite
- **IBridgePy**, **pyalgotrade**, **zipline** and other quant libraries all support IB

## Business Model

IB positions itself as "low cost + high transparency":
- **IBKR Lite** (2019+): zero-commission equity trading for retail
- **IBKR Pro**: $0.0035/share commission ($0.35 min), for institutions + quants + heavy users
- Margin rates are the lowest in the industry (Pro clients ~BM + 0.75%)
- FX spread: interbank + tiny markup

This cost structure drives 40%+ net margins (2023 annual report), far above industry average.

## Technical Architecture Highlights

### IB SmartRouting
- Every stock order scans 100+ exchanges / dark pools for best price
- Splits orders in real time to minimize market impact
- Retail Lite customers get it by default (it is also a payment-for-order-flow model — IB earns rebates from market makers but doesn't pass the cost to customers)

### Global Account
- One login, access to every market globally
- Positions can span currencies (shorting Japanese stocks while holding U.S. stocks)
- Margin is shared across assets (Portfolio Margin)

### Institutional-Grade Clearing
- Proprietary clearing system
- Connects directly to major exchanges (no third-party clearing member in between)

## Customer Profile

- Experienced traders (10+ years)
- Quant programmers / algorithmic strategies
- Family offices + small hedge funds
- Cross-border high-net-worth asset managers

IB is never the retail newcomer's first choice — the UI scares them away. But anyone who becomes a "serious trader" ends up on IB eventually.

## Key Numbers (2024 Annual Report)

| Metric | Value |
|---|---|
| Total client accounts | ~2.6M (Q2 2025) |
| Average daily orders | ~3M (2024) |
| Total client equity | $460B+ |
| Total revenue | $4.9B (2024) |
| Net income | $2.1B |
| Employees | ~3000 |

## Thomas Peterffy's Saga

- Hungarian refugee to the U.S. (1965)
- 1977 trading on the AMEX floor as an individual trader
- **1983** invents the first trading algorithm (used an NEC printer on the AMEX floor as the command system)
- **1987** founds Timber Hill (market-making, later folded into IB's parent business)
- **1993** founds Interactive Brokers (brokerage business)
- 2007 takes IB public
- **Still serves as Chairman** (2026) — approaching 80 and showing no sign of retiring

## References

- [Interactive Brokers website](https://www.interactivebrokers.com/)
- [SEC 10-K Annual Report](https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001381197)
- *The Front Lines of Brokerage* 2018 Peterffy interview
- IBKR Campus (educational portal)
