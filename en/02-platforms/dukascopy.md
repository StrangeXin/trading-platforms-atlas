# Dukascopy Bank

## Overview

Dukascopy Bank SA is a Swiss-registered bank and retail foreign exchange / CFD broker, regulated by FINMA (Swiss Financial Market Supervisory Authority) as both a bank and a securities dealer. Founded in 1998 by a group of physicists led by Dr. Andrey Duka, it is headquartered in Geneva with additional offices in Riga (Latvia) and Hong Kong. Dukascopy operates the **SWFX — Swiss FX Marketplace**, a proprietary ECN connecting retail traders to a pool of interbank liquidity from 20+ major banks. Its proprietary trading platform **JForex** is a Java-based trading environment — a rare architectural choice among retail brokers. Dukascopy offers FIX API, WebSocket API, REST API, and JForex API, making it one of the most API-capable retail FX/CFD brokers available.

---

## History and Founding

The Dukascopy project was launched in **1998** by a group of physicists and mathematicians headed by **Dr. Andrey Duka**. Their mission was to apply mathematical and "econophysical" techniques to financial market modeling, and to build trading infrastructure leveraging those models.

Key milestones:

- **1998**: Dukascopy project launched; initial focus on mathematical market modeling and FX execution infrastructure
- **2004**: Dukascopy Bank SA formally established and regulated by FINMA as a bank
- **2004–2007**: SWFX Swiss FX Marketplace developed and launched — the proprietary ECN aggregating interbank liquidity
- **2007–2010**: JForex trading platform developed and deployed to retail and institutional clients
- **2010**: JForex API released, enabling Java-based algorithmic trading strategies
- **2013**: Dukascopy Europe IBS AS licensed in Latvia as a regulated investment brokerage (European entity separate from the Swiss bank)
- **2015–2016**: REST API and WebSocket API added, expanding API access beyond JForex's Java SDK
- **2019**: JForex 4 released — next-generation version with 250+ technical indicators and improved UI
- **2024**: Terms and Conditions updated (August 2024); Dukascopy participates in iFX EXPO Dubai (January 2024); active operations continue across Geneva, Riga, Hong Kong
- **2025–2026**: Dukascopy remains operational; no disclosed M&A activity or ownership changes as of April 2026

---

## Corporate Structure

- **Legal name**: Dukascopy Bank SA
- **Incorporated**: Geneva, Switzerland
- **Regulated by**: FINMA (Swiss Financial Market Supervisory Authority) — as bank AND securities dealer
- **Offices**: Geneva (HQ), Riga, Hong Kong
- **European entity**: Dukascopy Europe IBS AS (Latvia; regulated by Financial and Capital Market Commission)
- **Founder**: Dr. Andrey Duka
- **Ownership**: Privately held; no public shareholder disclosure as of 2024

---

## Why a Bank License Matters

Most retail FX brokers are regulated as investment firms or money service businesses — not banks. Dukascopy holds a **Swiss banking license** from FINMA, which carries significantly higher requirements:

- Minimum capital requirements (~CHF 10M+ for a full banking license)
- Client deposits receive protection under Swiss depositor insurance (esisuisse)
- Can offer private banking and trust services alongside brokerage
- Regulatory oversight is substantially stricter than CySEC, IFSC, or similar jurisdictions

This makes Dukascopy an unusual entity: a genuine Swiss bank that operates as a retail forex and CFD broker. This is distinct from firms that have a "Swiss banking license" only in name through subsidiaries or affiliates.

---

## Products and Services

### Retail FX / CFD Trading

- Forex: 60+ currency pairs
- Commodities: Gold, Silver, Oil, and others
- Equity Indices: Major US, EU, UK, Asian indices as CFDs
- Bonds: Selected government bond CFDs
- Cryptocurrencies: Bitcoin, Ethereum, and select crypto CFDs; also some spot crypto accounts

### SWFX Swiss FX Marketplace

Dukascopy's flagship liquidity infrastructure:
- Proprietary ECN (Electronic Communication Network)
- Connected via FIX API to **20+ major banks** — providing a deep pool of interbank FX liquidity
- Market participants include: banks, hedge funds, institutional traders, and retail clients (via Dukascopy and Dukascopy Europe)
- Level II order book visible to clients — full bid/ask depth at each price level
- All trades executed automatically; no dealing desk; no requotes (per Dukascopy policy)
- Minimum spread: 0.1 pip on EUR/USD at peak liquidity

The SWFX structure is what Dukascopy means when it describes its ECN model. Unlike MT4-based "ECN" brokers that may merely route through a single liquidity provider, SWFX is a genuine multi-bank liquidity pool with real Level II depth.

### Dukascopy TV

A proprietary live financial TV channel operated by Dukascopy:
- Market commentary, analyst interviews, economic data coverage
- Available free on dukascopy.com
- An unusual product investment for a broker; aimed at building the Dukascopy brand as a financial information source

### Historical Tick Data

Dukascopy provides free public access to tick-level historical FX data going back to approximately 2003:
- Available via JForex platform or direct download
- Format: `.bi5` compressed binary files; one file per hour per instrument
- Widely used by quantitative researchers and academics
- Multiple open-source backtesting libraries (Backtrader, Zipline, and others) include Dukascopy data importers
- This data resource is unique among retail FX brokers in its depth and accessibility

---

## JForex Platform

JForex is Dukascopy's proprietary trading platform — a **Java-based desktop application**:

- Available on: Windows, macOS, Linux (Java runtime; cross-platform)
- Also: JForex Web (browser-based), JForex Mobile (iOS/Android)
- 250+ technical indicators (JForex 4)
- Full order book / DOM access (SWFX Level II depth)
- Built-in strategy development in Java
- Backtesting using tick data from SWFX historical feed

**Why Java?**

JForex is the only major retail trading platform built in Java as its primary technology. This is unusual compared to:
- MetaTrader (C++ engine, MQL scripting)
- cTrader (C# platform and scripting)
- NinjaTrader (C# / .NET)

Advantages of Java: genuine cross-platform compatibility (Windows/macOS/Linux without separate builds), mature enterprise libraries, and easier integration with institutional-grade Java-based financial systems.

Disadvantage: Java Swing UI tends to feel heavier/slower than native C++ or C# implementations on equivalent hardware.

---

## API Access

Dukascopy provides four API access layers — more than most retail brokers:

### JForex API (Java)

- Primary API for strategy development
- Provides access to all platform data: bars, ticks, orders, account, news
- Two modes: **Server-side** (runs on Dukascopy's servers) and **Client-side** (runs locally, connects via JForex)
- Documentation: [JForex API Javadoc](https://www.dukascopy.com/client/javadoc/)

### FIX API (FIX 4.4)

- Industry-standard FIX 4.4 protocol
- Used to receive real-time data feed, submit orders, modify/cancel orders, receive trade confirmations
- Available via Dukascopy Europe entity
- For institutional clients and automated trading systems that use FIX

### REST API

- HTTP-based REST API for account management and basic order operations
- Less complete than JForex API; suitable for simpler integrations

### WebSocket API

- Real-time data streaming (prices, order updates)
- More suitable for web/mobile application development than JForex or FIX

---

## Competitive Position vs Other API-Capable FX Brokers

| Dimension | Dukascopy | IBKR | OANDA |
|---|---|---|---|
| Platform type | Java (JForex) | Java (TWS) | MT4/MT5 + REST |
| Level II visible | Yes (SWFX) | Yes (TWS) | No (retail) |
| FIX API | Yes | Yes | No |
| Historical tick data | Free public access | Paid | Limited |
| Bank license | Swiss FINMA banking | US broker-dealer | No |
| Geographic focus | CH/EU/Global | Global | Global |
| Min deposit | ~$1,000 | $0 (Lite) | $0 |

---

## Regulatory Entities

| Entity | Regulator | Jurisdiction |
|---|---|---|
| Dukascopy Bank SA | FINMA (bank + securities dealer) | Switzerland |
| Dukascopy Europe IBS AS | Financial and Capital Market Commission | Latvia (EU) |

The two entities allow Dukascopy to serve Swiss residents under Swiss banking regulation and EU residents under EU MiFID II regulation respectively.

---

## Scale and Current State

As of 2024–2026:
- Active operations confirmed by 2024 document updates and iFX EXPO participation
- Client count not publicly disclosed; smaller than major retail brokers (IBKR, IG Group, Pepperstone)
- Estimated to serve primarily professional and semi-institutional retail traders, quantitative traders, and clients seeking Swiss banking protections
- No disclosed M&A, fundraising, or ownership changes as of April 2026

---

## Sources

- [Dukascopy Bank — Company page](https://www.dukascopy.bank/company/)
- [Dukascopy Bank — Wikipedia](https://en.wikipedia.org/wiki/Dukascopy_Bank)
- [Dukascopy — About ECN Broker](https://www.dukascopy.com/swiss/english/about/company/)
- [Dukascopy Europe — FIX API](https://www.dukascopy.com/europe/english/forex/api/fix-api/)
- [Dukascopy Europe — JForex API](https://www.dukascopy.com/europe/english/forex/api/jforex-api/)
- [Dukascopy — FINMA Securities Dealer License news](https://www.dukascopy.com/swiss/english/about/ournews/securities-dealer-license/)
- [TradingPedia — Dukascopy Review 2026](https://www.tradingpedia.com/forex-brokers/dukascopy/)
- [The Banks EU — Dukascopy Bank SA profile](https://thebanks.eu/banks/9711)
- [Arincen — Dukascopy Review 2026](https://en.arincen.com/companies/Dukascopy)
