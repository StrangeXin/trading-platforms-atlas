# Interactive Brokers (IBKR)

## Overview

Interactive Brokers (NASDAQ: IBKR) is one of the world's largest electronic brokerage firms, offering access to stocks, options, futures, forex, bonds, funds, and more across 150+ markets in 33 countries. Founded by Thomas Peterffy, who remains chairman and largest shareholder, IBKR is known for its institutional-grade technology, low-cost pricing, and broad global market access. It serves retail, professional, and institutional clients through Trader Workstation (TWS) and multiple API access methods.

---

## History and Founding

**Thomas Peterffy** (born September 30, 1944) is a Hungarian-born American billionaire who immigrated to the US in 1965. He began his financial career by purchasing a seat on the American Stock Exchange in 1977, trading as an individual market maker in equity options.

Key milestones:

- **1977**: Peterffy buys AMEX seat; begins as individual options market maker
- **1978**: Forms T.P. & Co.
- **1982**: Company renamed Timber Hill Inc.
- **1983**: Timber Hill creates the first handheld computers used for trading on exchange floors
- **1987**: Peterffy builds the first fully automated algorithmic trading system — auto-creating and auto-submitting orders to markets
- **1993**: Interactive Brokers formed, linking global transaction processing capacity to new electronic exchanges
- **Late 1990s**: Trader Workstation (TWS) launched as the primary retail/professional interface
- **2007**: IPO on NASDAQ under ticker IBKR (May 4, 2007); Peterffy retains majority control
- **2019**: Peterffy steps down as CEO (retained chairman role); Milan Galik appointed CEO
- **2020–2024**: Continued global expansion; launch of IBKR GlobalTrader mobile app; fractional shares, ESG tools added
- **2021**: IBKR launches IBKR Desktop (modernized native desktop app alongside legacy TWS)
- **2024–2026**: IBKR remains one of the largest online brokers globally by assets and client base

Peterffy is still the **chairman and largest individual shareholder** of Interactive Brokers Group as of 2026.

---

## Corporate Structure

- **Parent**: Interactive Brokers Group, Inc. (NASDAQ: IBKR)
- **Operating subsidiaries**: Interactive Brokers LLC (US), IBKR UK, IBKR Ireland, IBKR Canada, IBKR Japan, IBKR Hong Kong, IBKR Singapore, IBKR Australia, and others
- **Regulation**: SEC, FINRA, FCA, MAS, ASIC, IIROC, and numerous national regulators across operating jurisdictions
- **Employees**: ~3,000+ globally (as of 2024 disclosures)
- **Publicly traded**: NASDAQ: IBKR; Peterffy owns a majority economic interest via IBG LLC

---

## Trading Platforms

### Trader Workstation (TWS)

TWS is IBKR's flagship trading application, available in two modes:

**TWS Classic**: Feature-dense desktop application; preferred by professional and active traders
- Real-time quotes, charting, options chains, order management
- Supports all asset classes from a single interface
- Highly customizable layouts
- Available for Windows, macOS, Linux (Java-based)

**TWS Mosaic**: Simplified, drag-and-drop workspace designed for less experienced users
- More modern UI than Classic
- Same underlying data and order routing

**IBKR Desktop**: A newer, native desktop application launched circa 2021 as a lighter-weight alternative to TWS Classic; supports most features but is not a full replacement yet.

### Client Portal

Browser-based web interface:
- Account management, trade history, reporting
- Basic order entry
- Connects to Client Portal REST API for programmatic account management
- No installation required

### IBKR Mobile

iOS and Android applications:
- Order entry, portfolio monitoring, options trading
- Includes IBKR GlobalTrader for simplified mobile experience

### IBKR GlobalTrader

Simplified mobile-first app launched ~2021 for retail-oriented users; supports basic stock/ETF trading with a cleaner onboarding flow than TWS.

---

## API Access

IBKR offers multiple programmatic access methods, making it the most API-accessible retail brokerage globally:

### TWS API (Socket-based)
- TCP socket connection; requires running TWS or IB Gateway
- Available in: Python, Java, C++, C#, VB.NET
- Full order management, real-time data, account queries
- **Not available** for IBKR Lite accounts — Pro accounts only
- Documentation: [TWS API](https://interactivebrokers.github.io/tws-api/)

### Client Portal REST API (Web API)
- RESTful HTTP interface; no TWS instance required (uses IBKR's cloud gateway)
- Endpoints for orders, portfolio, account, market data
- Two-tiered session: read-only portal session + brokerage session for order submission
- More restrictive rate limits than TWS API; better for web/cloud-based applications

### FIX API
- Industry-standard FIX 4.2/4.4 protocol
- For institutional clients and high-frequency/automated trading
- Direct market access routing; low latency
- Requires institutional account approval

### IBKR Campus / Documentation
- Comprehensive documentation hub at interactivebrokers.com/campus
- Includes tutorials, code samples, and API reference

---

## IBKR Lite vs IBKR Pro

| Feature | IBKR Lite | IBKR Pro |
|---|---|---|
| US Stock/ETF trades | Commission-free | Per-share or per-trade pricing |
| Options | $0.65/contract | Tiered (as low as $0.15 at high volume) |
| API access | None | Full (TWS API, FIX, REST) |
| Order routing | Payment for order flow (PFOF) | Smart routing / direct routing |
| Margin rates | Standard | Tiered — among lowest in industry |
| Availability | US retail only | Global |
| Target user | Passive retail investors | Active traders, professionals |

**IBKR Pro** pricing is critical for algorithmic traders and high-volume users. IBKR's margin rates (often benchmarked off Fed Funds Rate) are substantially below most retail brokers — a key competitive advantage for leveraged trading.

**IBKR Lite** was introduced in 2019 to compete with commission-free brokers like Robinhood; it uses PFOF to monetize order flow, unlike Pro.

---

## Market Access and Asset Classes

From a single IBKR account, users can access:

- **Equities**: 135+ exchanges across 33 countries; fractional shares
- **Options**: US and international options markets; IBKR's options analytics tooling is well-regarded
- **Futures**: CME, CBOT, NYMEX, ICE, Eurex, and others; US and international
- **Forex**: 23+ currency pairs; spot and forward; competitive interbank-level spreads
- **Bonds**: US Treasuries, corporate bonds, muni bonds, international government bonds
- **Funds**: Mutual funds, ETFs
- **Crypto**: Selected cryptocurrencies for eligible clients (regulatory-dependent by region)

---

## Pricing Model

IBKR Pro uses tiered pricing based on monthly volume:
- Equities: $0.0005–$0.005/share (tiered by monthly shares traded)
- Options: $0.15–$0.65/contract (tiered by monthly contracts)
- Futures: $0.25–$0.85/contract depending on product
- Forex: $0.08–$0.20 per 1,000 units of currency (commission on top of interbank spread)

This model is competitive primarily for active traders. Passive, low-volume retail accounts typically do better with IBKR Lite or other zero-commission brokers.

---

## Smart Order Routing (SMART)

IBKR's **SMART** routing algorithm:
- Routes orders across multiple exchanges to seek best execution
- Considers price, speed, and rebate/fee structures per venue
- Clients can override to direct-route to specific exchanges
- Available on Pro; Lite uses PFOF routing which does not prioritize exchange rebates

---

## Institutional Services

**IBKR Prime** / **Prime Services**: Stock loan, portfolio margin, institutional reporting

**IBKR Clients' Marketplace**: Third-party service integrations (analytics, research, data)

**Hedge Fund / Family Office Solutions**: Multi-account management, sub-account hierarchies, allocations

---

## Key Financials and Scale (as of 2024–2025 disclosures)

- Client accounts: ~3 million+
- Client equity: $500B+
- Daily average revenue trades (DARTs): ~2 million+
- Net revenues: ~$4B+ annually (2024 reported)
- Peterffy holds majority economic interest (not a full majority of voting shares due to company structure, but dominant economic ownership)

---

## 2023–2026 Notable Developments

- **2023**: IBKR expands crypto access in international markets; continues competing on margin rates
- **2024**: IBKR Desktop maturing as a modern alternative to legacy TWS
- **2025**: Continued API improvements; REST API (Web API v1.0) documentation upgraded
- **April 2026**: IBKR remains one of the top 3 largest online brokerages globally by client assets

---

## Competitive Position

IBKR's competitive moat is the combination of:
1. Lowest margin rates in retail
2. Most comprehensive global market access
3. Most capable programmatic API suite among retail brokers
4. Genuine DMA and price improvement through SMART routing (Pro)

Weaknesses include a historically complex user experience (TWS has a steep learning curve) and limited appeal to passive retail investors for whom Robinhood, Fidelity, or Schwab are simpler.

---

## Sources

- [Interactive Brokers — About and History](https://www.interactivebrokers.com/en/general/about/info-and-history.php)
- [Thomas Peterffy — Wikipedia](https://en.wikipedia.org/wiki/Thomas_Peterffy)
- [Interactive Brokers — Wikipedia](https://en.wikipedia.org/wiki/Interactive_Brokers)
- [IBKR API — Home](https://www.interactivebrokers.com/campus/ibkr-api-page/ibkr-api-home/)
- [IBKR — TWS API documentation](https://interactivebrokers.github.io/tws-api/)
- [IBKR — Client Portal REST API](https://www.interactivebrokers.com/campus/ibkr-api-page/cpapi-v1/)
- [IBKR — API introduction](https://www.interactivebrokers.com/campus/ibkr-api-page/getting-started/)
