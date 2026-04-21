# FIX Protocol: History, Versions, and Adoption

## What Is FIX?

**FIX** (Financial Information eXchange) is an open, non-proprietary messaging protocol for electronic communication of pre-trade and trade information across financial markets. It defines a text-based (and later binary) format for orders, executions, quotes, and related messages exchanged between trading counterparties — buy-side firms, sell-side brokers, and exchanges.

FIX is not owned by any single company. It is governed by the **FIX Trading Community**, a non-profit membership organization.

---

## Origin: 1992, Fidelity + Salomon Brothers

### The Problem Being Solved

In 1991–1992, equity order communication between institutions and their broker-dealers was conducted verbally over phone calls. The risks were significant: orders could be misheard, misrouted, or lost. Manual re-keying into internal systems after phone calls introduced further errors and latency.

The context was also the aftermath of the **UK "Big Bang" of 1986** and the growing internationalization of equity markets. Cross-border electronic order flow needed a shared language.

### The Creators

**Robert "Bob" Lamoureux** (Fidelity Investments) and **Chris Morstatt** (Salomon Brothers) developed the first version of FIX in **1992**. Note: while the query mentioned Morgan Stanley, the actual founding parties were **Fidelity Investments and Salomon Brothers**. Morgan Stanley was an early adopter, not a co-founder.

Their goal was to replace verbal phone conversations with "machine-readable data which could then be shared among traders, analyzed, acted on and stored." Per [FIXspec Medium history](https://fixspec.medium.com/history-of-fix-protocol-17103a5e81f4), the initial scope was deliberately narrow: equity order instructions (buy/sell) and trade notifications.

---

## Version History

### FIX 1.0 (1992)

- Original private specification between Fidelity and Salomon Brothers.
- Text-based format using tag=value pairs (e.g., `49=SENDER`, `56=TARGET`, `35=D` for a New Order).
- Covered basic equity order workflows only.

### FIX 2.x — 4.0 (Early-Mid 1990s)

- Incremental expansions as other firms joined.
- FIX 4.0 (published in the early 1990s) began standardizing the header/trailer structure still visible in modern FIX messages.
- All versions through FIX 4.x maintained a monolithic specification: application semantics, encoding, and session layer in a single document.

### FIX 4.2 (2001) — The Workhorse

**FIX 4.2 is the version that achieved universal equity-market adoption.** Released in 2001, it is still in active use at many institutions decades later — a remarkable longevity. Key capabilities added by 4.2:

- Expanded order types (stop, stop-limit, market-on-open, etc.)
- IOI (Indication of Interest) messages
- Allocation and confirmation messages for post-trade
- News and email message types

Per [ONIX FIX history](https://www.onixs.biz/insights/exploring-the-history-behind-fix-protocol), "FIX 4.2, released in 2001, is still widely used today" for equity products.

### FIX 4.4 (Mid-2000s) — Multi-Asset Expansion

FIX 4.4 extended the standard into non-equity asset classes:

- **Global fixed income** products
- **Derivatives** (listed and OTC)
- Enhanced allocation and settlement flows
- New fields for FX products (currency pairs, settlement conventions)

FIX 4.4 represents the shift from an equities-only protocol to a genuinely multi-asset messaging standard.

### FIX 5.0 / FIXT 1.1 — Session Separation

FIX 5.0 introduced a crucial architectural change: the **session layer was split** from the application layer. A new companion specification, **FIXT (FIX Transport) 1.1**, handles the connection/session lifecycle (logon, logout, heartbeat, resend), while FIX 5.0 messages define the application-level content.

This separation allows:
- Different transport protocols (FIXT, MQ, custom) while keeping the same FIX 5.0 message schema
- Independent evolution of transport and business logic

### FAST Protocol (2005)

**FIX Adapted for Streaming (FAST)** was released in 2005 to address a specific problem: market data distribution at high volume. Standard tag=value FIX is verbose; sending full order book updates for thousands of instruments is bandwidth-intensive. FAST uses:

- Template-based compression
- Delta encoding (sending only changes from a baseline)
- Binary encoding optimized for multicast feeds

FAST became the encoding standard for most major exchange market data feeds (CME, Euronext, etc.) even when those feeds used custom application-layer schemas rather than FIX messages.

### Simple Binary Encoding (SBE, 2020)

In **2020**, the FIX Trading Community released a new binary encoding standard based on **SBE (Simple Binary Encoding)**. SBE is designed for ultra-low-latency applications where FAST's streaming-focused design adds unnecessary overhead. SBE targets fixed-length, in-order, zero-copy message parsing — amenable to hardware acceleration.

CME Group adopted SBE for its MDP 3.0 market data platform, which handles the CME Globex derivatives feed.

---

## Adoption Wave: 1990s–Present

### The 1990s: Equity Markets Adopt

FIX spread rapidly through buy-side institutional investors and sell-side prime brokers in the 1990s. The network effect was powerful: once one major firm adopted FIX for order routing, their counterparties needed to as well. By the end of the decade:

- All major U.S. equity prime brokers supported FIX
- European equity markets followed, aided by the post-Big Bang push for electronic connectivity
- ECNs (Island, Archipelago, REDIBook) built FIX interfaces as their primary API

### The 2000s: Derivatives, FX, and Fixed Income

FIX 4.4's expansion into derivatives and FX drew new adopters:

- **CME Group** adopted FIX for its Globex electronic futures platform
- **FX prime brokers** (Morgan Stanley, Deutsche Bank, UBS) began offering FIX order-routing for spot FX
- **FIXatdl** (FIX Algorithmic Trading Definition Language) emerged as a sub-standard for communicating algo parameters between buy-side and sell-side

### The 2010s: FX Retail and Crypto Context

Retail FX platforms like OANDA, FXCM, and Interactive Brokers built FIX APIs to attract institutional and algorithmic clients. The OANDA v20 REST API — a JSON-over-HTTPS modern alternative — competes in the retail/algorithmic space but does not aim to replace FIX for institutional flows.

Crypto exchanges (Binance, Coinbase, Kraken) have largely ignored FIX in favor of REST+WebSocket APIs, reflecting their different client base. However, as institutional participation in crypto grows, several crypto platforms (including Coinbase Advanced) have begun offering FIX connectivity for institutional clients.

---

## Who Uses FIX Today

### Buy-Side
- Asset managers (Fidelity, BlackRock, Vanguard, etc.)
- Hedge funds
- Proprietary trading firms
- Mutual funds

### Sell-Side
- Investment banks (Goldman Sachs, Morgan Stanley, JPMorgan)
- Broker-dealers
- Prime brokers

### Venues
- Equity exchanges: NYSE, NASDAQ, LSE, Euronext, Deutsche Börse
- Derivatives exchanges: CME Group, ICE, Eurex
- Dark pools and ATSs
- FX electronic communication networks (EBS, Reuters Matching)

### Technology Vendors
FIX connectivity is supported by virtually all institutional OMS (order management system) and EMS (execution management system) vendors: Bloomberg, Charles River, SS&C Eze, FlexTrade, and others.

---

## FIX Governance: The FIX Trading Community

The **FIX Trading Community** (previously called FIX Protocol Limited) is a non-profit standards body that:

- Maintains the FIX specification
- Coordinates working groups for new asset classes and workflows
- Hosts the annual FIX Global Trading Conference
- Manages the [fixtrading.org](https://www.fixtrading.org) online specification

Membership is open to firms across the trading ecosystem. Working groups operate by consensus; changes to the standard require broad member agreement.

---

## FIX vs. Modern REST/WebSocket APIs

| Dimension | FIX | REST/WebSocket |
|-----------|-----|----------------|
| Message format | Tag=value text or binary (SBE/FAST) | JSON (REST), JSON or binary (WS) |
| Connection | Persistent TCP session | HTTP stateless (REST); persistent (WS) |
| Latency | Sub-millisecond for binary FIX | Milliseconds (REST); low ms (WS) |
| Primary adopters | Institutional buy/sell side | Retail traders, crypto, fintechs |
| Standardization | Single cross-firm standard | Each exchange/broker defines own schema |
| Learning curve | High (specialized knowledge required) | Low (any HTTP client works) |

FIX remains the language of institutional equity and derivatives trading. REST+WebSocket dominate retail trading platforms, crypto, and new fintech integrations. The two worlds have not converged.

---

*Sources: [ONIX FIX History](https://www.onixs.biz/insights/exploring-the-history-behind-fix-protocol), [FIXspec Medium History](https://fixspec.medium.com/history-of-fix-protocol-17103a5e81f4), [FIX Wikipedia](https://en.wikipedia.org/wiki/Financial_Information_eXchange), [FIX Trading Community](https://www.fixtrading.org/online-specification/introduction/), [QuantInsti FIX guide](https://blog.quantinsti.com/fix-trading-protocol/), [Oxera Benefits of FIX](https://www.oxera.com/wp-content/uploads/2018/03/Benefits-of-the-FIX-Protocol.pdf)*
