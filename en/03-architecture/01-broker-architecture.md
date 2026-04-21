# Typical Retail Broker Architecture

## Overview

```
 [Trader]
   ↓
 Client (MT5 / cTrader / Web / proprietary app / third-party API client)
   ↓ —— Protocol layer (FIX / REST / WS / MT5 proprietary) ——
   ↓
 [Broker OMS — Order Management System]
   ├─ Risk engine (margin, position limits, banned-trading list)
   ├─ Account system (balance, positions, history, deposits/withdrawals)
   ├─ Quote distribution (MD server / multicast)
   └─ Matching routing (Routing Engine)
       ↓
     ┌──────┴──────┐
     ↓             ↓
 [Internal Dealer Pool]  [Liquidity Provider (LP)]
 (A-Book / B-Book)        (Prime Broker, ECN, Bank Pool)
```

The OMS (Order Management System) is the brain: receive orders → risk check → match/route → write to accounts.
Every client is ultimately just telling the OMS to do those things. "How the client talks to the OMS" is the protocol choice.

## Three Access Protocols

### FIX (Financial Information eXchange)

- Created in 1992 by Morgan Stanley + Salomon Brothers jointly, the messaging standard of the financial industry
- TCP long connection + text message frames (`8=FIX.4.4|9=...|35=D|...`)
- Institutional standard: almost every major bank / ECN / Prime Broker supports it
- Given to institutions / quant funds / HFTs / white-label partners — **not to retail**
- To provide FIX, a broker typically runs a FIX engine (QuickFIX / Onix / in-house) for session management, message routing, failover

**Why give it out**: institutions send large volumes and sizes, and FIX reduces their friction of building custom MT5 EAs.

### REST / WebSocket

- Provided by modern brokers (OANDA / IG / IB), crypto exchanges (Binance / OKX / Kraken), and digitally native platforms
- HTTP + JSON endpoints like `POST /v3/orders`, `GET /v3/positions` + WS quote push
- Backend is typically an HTTP Gateway → internal RPC to the OMS, wrapping the OMS as a JSON API
- Retail-friendly: self-service API keys, public docs, rate limits instead of whitelists

**Why give it out**: targeting the developer market (algo trading, bots, copy-trading aggregators). Much lower barrier than FIX.

### MT4 / MT5 Proprietary Protocol

- Retail-grade terminal + server suite made by MetaQuotes (a Russian company)
- Broker leases MetaQuotes' server license (tens of thousands USD/year) → deploys MT5 server
- MT5 server is a full-featured OMS + matching + risk + quote distribution package; broker just configures it and connects LPs
- Protocol is MetaQuotes' proprietary binary, **not public**
- Users connect via MT5 Windows/Mac/iOS/Android terminals

**Why use it**: turnkey solution, saves having to write your own matching engine + client. Prop firms are almost entirely on MT5.

## Protocol Comparison

| Dimension | FIX | REST/WS | MT5 Proprietary |
|---|---|---|---|
| Target user | Institutions / quants | Retail developers | Retail end users |
| Barrier | Sign contract + whitelist IP | Self-service API key | Use MT5 client |
| Message format | FIX messages | JSON | Binary proprietary |
| Connection | TCP long-lived | HTTP + WS | Persistent TCP |
| Market data subscribe | MDRequest | WS subscribe | MT protocol subscribe |
| Public documentation | Standard + per-vendor dialects | Yes | None |
| Third-party clients | QuickFIX / FIXT | fetch / ccxt / official SDKs | Must be MT terminal or MetaApi |
| Latency | Millisecond-scale | Tens of milliseconds | Tens of milliseconds |

## A-Book / B-Book

**A-Book** (Straight-Through Processing, STP) — client orders are **routed directly to external liquidity** (LPs, ECNs, Bank Pools). The broker earns spread rebates / commission.

**B-Book** — the broker **takes the opposite side** of the trade and doesn't send it out. Customer losses = broker profit. Very common in retail FX.

**Hybrid Book** — what most retail brokers actually run: use risk rules to route "high-signal clients" to A-Book and keep "frequently losing clients" on B-Book.

The MT5 server's risk module natively supports this kind of routing. This is the hidden reason MT has a stranglehold on retail FX — brokers can run B-Book profits cheaply with it.

## Prop Firms' Particular Flavor

Prop firm (FTMO / TopStep / CryptoFundTrader, etc.) business model:

1. Sell a "challenge" entry fee ($100–$1000)
2. Give the user a simulated MT5 account
3. User has to hit a target under rule constraints (profit target + risk limits)
4. Upon passing, sign a deal to trade the prop firm's "real capital," split profits 80/20 or 90/10

Their tech stack is basically: **MT5 suite + rule engine + settlement system + marketing**.

- MT5 server provides accounts / matching / logs
- Rule engine reads MT5 logs to do EOD reconciliation (daily loss / max drawdown / trading days)
- User side: MT5 terminal + prop firm website dashboard

See `../02-platforms/ftmo.md` and other prop firm deep-dives.

## Relationship to "Market Maker vs Broker vs Exchange"

```
Market Maker
  ↑ provides liquidity
[Broker] ————— connects ————— [Exchange / ECN]
  ↑ faces retail users             ↑ centrally matches multiple market makers
[End User]
```

- **Broker**: faces retail, provides accounts + terminal + deposits/withdrawals, sends orders to an exchange or hedges against a market maker
- **Exchange**: centralizes matching, doesn't directly serve retail (some crypto exchanges do both roles)
- **Market Maker**: continuously posts bid/ask on exchanges, earns on spread

Retail FX is special: most currency pairs don't have a centralized exchange (global FX is decentralized market-making), so the broker plays OMS + half-sized mini-exchange simultaneously.
Crypto is the opposite: exchanges face retail directly because there's no historical broker middle layer.

## References

- CFTC *Retail Foreign Exchange Transactions* 2010 rule (regulatory definition)
- Finance Magnates *FX Industry Directory* annual edition
- MetaQuotes official broker-onboarding documentation
- "A-Book vs B-Book" — InstaForex 2019 whitepaper
- BIS Triennial Survey (FX market sizing)
