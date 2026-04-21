# OANDA: History, v20 REST API, and Current State

## Overview

OANDA is a Canadian/American FX broker and financial data company founded in 1996. It is one of the oldest internet-era FX brokers, regulated across multiple major jurisdictions, and known for its developer-friendly API. As of December 2025, OANDA is owned by **FTMO** (the Czech prop trading firm), following FTMO's acquisition from CVC Capital Partners.

---

## Founding and History

### 1996 — Origins

OANDA was founded in **1996** (exact city of founding varies by source; initially Vancouver/New York area) by **Richard Olsen** and **Michael Stumm**. Olsen, an academic economist, had been working on high-frequency financial data research; OANDA was originally a foreign exchange data service ("OANDA" = an acronym or play on "on-demand data").

Key distinction from most FX brokers of the era: OANDA began as a **data provider** and added brokerage later, which shaped its technical orientation. The company's early claim to fame was offering free historical FX data at granular levels — a resource that academic researchers and quants valued.

### 2000s — fxTrade Platform

OANDA built its own proprietary trading platform, **fxTrade**, which was notable for:
- Fractional pip pricing (prices to 5 decimal places, vs. the 4-decimal industry standard)
- No minimum trade size (fractional unit trading — trade $1 of currency if you want)
- 24/5 continuous dealing with competitive spreads
- An early REST API (pre-v20) for algorithmic traders

This developer-friendly positioning attracted quant/algo traders who became loyal customers.

### 2018 — CVC Capital Partners Acquisition

**2018**: OANDA was acquired by **CVC Capital Partners** (European private equity) from its previous shareholders. CVC focused on scaling OANDA's digital platform, expanding regulated entities, and improving the technology stack.

Under CVC, OANDA built out regulated entities and leadership teams across:
- New York (U.S.)
- Toronto (Canada)
- London (UK — FCA regulated)
- Warsaw (Poland)
- Singapore (MAS regulated)
- Tokyo (Japan — FSA regulated)
- Sydney (Australia — ASIC regulated)

### December 2025 — FTMO Acquisition

**December 1, 2025**: FTMO completed acquisition of OANDA from CVC Asia Fund IV.

- Deal signed: Early 2025
- Regulatory approvals required: **Five jurisdictions** (U.S., Canada, UK, Singapore, Australia/Japan subset)
- Time to close: **~8 months** of regulatory process
- Transaction value: **Not disclosed**

FTMO funded the deal with a **$250 million credit line** from Czech banks led by UniCredit.

Strategic rationale for FTMO:
1. OANDA's broker licenses give FTMO regulated infrastructure globally
2. OANDA's U.S. CFTC-registered status allows FTMO to offer MT5 to U.S. prop traders (FTMO is now the only prop firm offering MT5 in the U.S.)
3. OANDA's global client base (corporate FX, retail traders) diversifies FTMO's revenue beyond prop trading fees

Per [FTMO press release](https://ftmo.com/en/press-release/ftmo-completes-acquisition-of-oanda-from-cvc/): "FTMO plans to maintain the OANDA group as a fully standalone business."

---

## The v20 REST API

### Background: v1 vs. v20

OANDA has operated two parallel API versions:
- **Legacy v1 (REST)**: The original API, available for older "v1" account types. Still functional but deprecated.
- **v20 (REST + Streaming)**: Launched around 2016; designed for OANDA's "v20" trading engine. All new accounts are v20. v1 accounts can only use the v1 API.

The v20 API is a modern, well-documented JSON-over-HTTPS REST API — not FIX — designed to be accessible to any programmer regardless of financial background.

### Architecture Overview

The v20 API follows REST conventions with streaming extensions:

**Base URL**: `https://api-fxtrade.oanda.com/v3/` (live) / `https://api-fxpractice.oanda.com/v3/` (paper trading)

**Authentication**: Bearer token (OAuth-style personal access token, generated in the OANDA web interface)

**Key API namespaces**:

| Namespace | Purpose |
|-----------|---------|
| `/v3/accounts/{accountID}` | Account details, balance, margin, NAV |
| `/v3/accounts/{accountID}/orders` | Create/modify/cancel orders |
| `/v3/accounts/{accountID}/trades` | List open trades (positions); modify SL/TP |
| `/v3/accounts/{accountID}/positions` | Aggregate position per instrument |
| `/v3/accounts/{accountID}/transactions` | Trade history, ledger entries |
| `/v3/accounts/{accountID}/pricing/stream` | Real-time price streaming (Server-Sent Events) |
| `/v3/instruments/{instrument}/candles` | Historical OHLCV data |
| `/v3/instruments/{instrument}/orderBook` | Order book snapshot |
| `/v3/instruments/{instrument}/positionBook` | Position book (% long vs. short) |

### Streaming Pricing

A distinguishing feature: OANDA's pricing endpoint supports **Server-Sent Events (SSE)** streaming — a persistent HTTP connection that pushes price ticks in real time:

```
GET /v3/accounts/{accountID}/pricing/stream?instruments=EUR_USD,GBP_USD
```

The stream delivers JSON-formatted `PRICE` events (bid/ask/tradeable) and `HEARTBEAT` events (to keep the connection alive) — the standard pattern for any application implementing real-time price monitoring via OANDA.

### Order Types

OANDA v20 supports:
- **Market orders**: Immediate execution at best available price
- **Limit orders**: Execute at a specific price or better
- **Stop orders**: Execute when price reaches a trigger level
- **Market-if-touched (MIT)**: Trigger on price breach, then execute at market
- **Trailing stop**: Dynamic stop that follows price

Orders can have attached **Take Profit**, **Stop Loss**, and **Trailing Stop Loss** instructions.

### Instrument Naming Convention

OANDA uses underscore-separated instrument names: `EUR_USD`, `GBP_JPY`, `XAU_USD` (gold), `SPX500_USD` (S&P 500 CFD), `BCO_USD` (Brent crude), `BTC_USD`.

This is reflected in TradingView's data integration: OANDA data shows as `OANDA:EURUSD` in TradingView.

### Account Snapshot Pattern

A key design pattern recommended in the v20 API:
1. Fetch the full account state with one `GET /v3/accounts/{id}` call
2. Maintain that snapshot locally
3. Call `GET /v3/accounts/{id}/changes` repeatedly (or stream) to get only the delta changes

This reduces bandwidth and computational overhead compared to repeatedly fetching full state.

### Rate Limits

OANDA v20 API is free to use with a funded account. Rate limits are not published in the same granular format as Binance's, but OANDA's developer guide notes:
- Limits exist per account and per IP
- Heavy polling (e.g., per-second account polls) may trigger throttling
- Streaming endpoints are preferred over repeated REST polling for market data

### Position Book API (Unique Feature)

OANDA publishes a **Position Book** — the percentage of open positions that are long vs. short across its client base — for major FX instruments. This is unique among major FX brokers and provides insight into retail trader positioning (often used as a contrarian sentiment indicator).

---

## OANDA's Technical Positioning

### Strengths
1. **Developer-friendly API**: Well-documented, consistent, with Python/Java/JavaScript SDKs available
2. **Multi-jurisdiction regulation**: FCA, CFTC, ASIC, MAS, FSA — covers most major trading jurisdictions
3. **Data heritage**: Long history as a data provider; OANDAfxData historically provided free granular tick data to researchers
4. **No dealing desk for most clients**: OANDA operates primarily as an NDD (No Dealing Desk) broker for retail
5. **Fractional trading**: Minimum trade size of one unit of base currency (vs. standard 1,000 unit micro lots)

### Weaknesses
1. **Spread-centric pricing**: OANDA's primary revenue is spread; not always the tightest for high-volume FX traders (vs. ECN brokers like IC Markets)
2. **Limited product range**: Primarily forex and CFDs; no equities direct ownership, no options
3. **No MT5 (historically)**: OANDA built its own platform; MT5 is now available through the FTMO integration
4. **Ownership transition risk**: FTMO ownership is new; strategic direction under prop-firm parent remains to be seen

---

## Instruments Available

OANDA offers trading in:
- **70+ forex pairs** (major, minor, exotic)
- **Indices CFDs**: SPX500 (S&P 500), NAS100, DE30 (DAX), etc.
- **Commodities**: Gold (XAU), Silver (XAG), Oil (WTI + Brent)
- **Bonds**: US Treasury, UK Gilts (limited)
- **Crypto CFDs**: BTC/USD, ETH/USD (price exposure, not actual crypto)

---

## Regulatory Status (Pre-FTMO Acquisition)

| Jurisdiction | Regulator | License Type |
|-------------|-----------|-------------|
| USA | CFTC / NFA | Registered FDM + RFED |
| Canada | IIROC | Dealer Member |
| UK | FCA | Authorized |
| Singapore | MAS | Capital Markets Services |
| Japan | JFSA | Type I Financial Instruments Business |
| Australia | ASIC | Australian Financial Services |

This multi-jurisdiction regulatory footprint is precisely why FTMO paid a premium to acquire OANDA — it would take years to obtain these licenses independently.

---

*Sources: [OANDA API Introduction](https://developer.oanda.com/rest-live-v20/introduction/), [OANDA API Comparison](https://developer.oanda.com/rest-live-v20/api-comparison/), [FTMO OANDA acquisition press release](https://ftmo.com/en/press-release/ftmo-completes-acquisition-of-oanda-from-cvc/), [GlobeNewswire FTMO press release](https://www.globenewswire.com/news-release/2025/12/02/3197594/0/en/FTMO-Building-Global-Trading-Powerhouse-Completes-Acquisition-of-OANDA-from-CVC.html), [CVC OANDA sale announcement](https://www.cvc.com/media/news/2025/cvc-funds-agree-sale-of-oanda-to-ftmo/), [PickMyTrade OANDA API guide](https://blog.pickmytrade.trade/oanda-api-automated-forex-trading-rest-v20-guide-2025/)*
