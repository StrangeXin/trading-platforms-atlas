# Typical Crypto Exchange Architecture

Biggest difference from a traditional broker: **the exchange itself is the matcher** — there's no external liquidity provider chain. This is the root reason crypto-native platforms were able to bypass MT5 and own the full stack of matching + market making + custody.

## Overview

```
 [End User]
   ↓ (REST / WebSocket)
 [Gateway layer]
 - Auth (JWT / API Key / signature verification)
 - Rate limit (per IP + per account)
 - Load balancer → routes to regional nodes
   ↓
 [Core Matching Engine]
 - Order book (in memory)
 - Matching algorithm (Price-Time Priority)
 - Microsecond latency
   ↓
 [Account / Risk / Settlement]
 - Account system (balance, positions, history)
 - Real-time risk (margin call, liquidation)
 - Clearing/settlement (T+0 complete)
   ↓
 [Asset Custody]
 - Hot wallet (small-value real-time withdrawals)
 - Cold wallet (multi-sig, bulk)
 - Insurance fund
```

Every layer here is **the exchange's own code** — no external OMS plug-in. There's no MT5-style "suite"; each exchange rolls its own.

## Matching Engine

The performance core. Design principles:

- **All in-memory**: order book lives in RAM, never hits disk
- **Single-threaded matching** (Binance, CME both do this): guarantees strict determinism of matching order, avoids concurrent locking
- **Async persistence**: post-match trades flow to Kafka / proprietary message queues; background consumers write to DB
- **Lock-free queues** deliver orders to the matching engine
- **Matching speed**: Binance spot engine ~1.4M TPS peak, <100μs latency

### Mainstream Implementation Languages
- **Binance**: mix of Java / C++. Early Node.js rewritten later.
- **OKX**: mostly C++
- **Coinbase**: Go
- **FTX (defunct)**: Rust, the performance benchmark
- **Kraken**: C++
- **CME Globex (traditional futures)**: C++

### Order Types
Standard set:
- Market / Limit
- Stop / Stop-Limit / Trailing Stop
- IOC / FOK / GTC
- Post-only
- Reduce-only (leveraged contracts)

Non-standard but increasingly common:
- Iceberg (iceberg orders, split to reduce market impact)
- TWAP / VWAP algo orders
- OCO (One-Cancels-Other, two conditional orders canceling each other)

## Market-Making Mechanics

Exchanges don't necessarily make markets themselves, but they **incentivize professional market makers** to post two-sided quotes to maintain liquidity:

- **Maker Fee < Taker Fee rebate**: makers get rebates, takers pay higher fees. The delta is the market maker's thin profit margin
- **VIP tiers**: based on 30-day volume, top-tier market makers can see fees of -0.002% (negative — yes, they get paid)
- **Professional market-making agreements**: Jump Trading, Jane Street, Wintermute, GSR, Cumberland etc. sign SLA contracts with exchanges committing to quote depth + uptime in exchange for deeper rebates

### How Market-Making Bots Quote
- Dozens of levels of two-sided quotes
- Adjust spread in real time using the Avellaneda-Stoikov model
- Tighten quotes or pull them if position risk crosses a limit
- Hedge across venues: post long on exchange A, open short on exchange B to lock the spread

## REST + WebSocket API

The biggest difference from MT5's proprietary protocol: **public docs, retail-open, free to access**.

### REST
Typical endpoints:
```
POST   /api/v3/order          place order
DELETE /api/v3/order           cancel order
GET    /api/v3/order           query order
GET    /api/v3/openOrders      query all open orders
GET    /api/v3/allOrders       query historical orders
GET    /api/v3/account         account balance
POST   /api/v3/transfer        internal transfer
```

Signing: `HMAC-SHA256(queryString, secretKey)`. Rate limits: N requests per minute, per-user + per-IP.

### WebSocket
- **Market data subscribe**: `wss://stream.binance.com/ws/btcusdt@ticker` → 24h stats push
- **Depth subscribe**: `btcusdt@depth` → incremental order book updates (100ms or 1000ms refresh)
- **Trade stream**: `btcusdt@trade` → every executed trade
- **User data**: `wss://stream.binance.com/ws/listenKey` → order fills, balance changes

The full retail algo trading pipeline can be built entirely over WebSocket without REST polling. This is a hardcore advantage the crypto track uses to attract algo traders.

## Custody

Biggest architectural difference vs traditional brokers: **exchanges custody user assets themselves**.

### Hot/Cold Wallet Layering
- **Hot wallet**: private keys online, signing withdrawals in real time. Only a small fraction (Binance publicly stated 3% of equity is in hot wallets)
- **Warm wallet**: multi-sig, semi-automatic, medium sizes
- **Cold wallet**: fully offline (air-gapped), multi-sig, bulk reserves

### Insurance Fund / SAFU
- **Binance SAFU**: 10% of every trading fee goes into the fund, used to cover black swan events (the 2019 Binance hack for 7000 BTC was covered by SAFU)
- **FTX**: claimed to have an insurance fund; 2022 collapse revealed most of it was FTT (its own token)

### Audits
- **Proof-of-Reserves**: Merkle tree approach proving exchange-held assets match user balances (rose to prominence after FTX)
- But this only proves the **asset side**, not the liability side — so PoR has inherent limitations

## Futures / Perpetuals

Crypto-original derivative (traditional futures have no perpetual). Essentially **futures with no expiration**, anchored to spot by the funding rate:

```
funding_rate = clamp(premium_index × 8h window, -0.05%, +0.05%)
Settled every 8h: longs pay shorts (if funding > 0)
```

Mechanism:
- Perp price > spot → funding positive → longs pay shorts → longs lose money → fewer longs → price falls
- And vice versa

Matching engine is the same order book as spot, but adds:
- Liquidation engine (closes under-margined positions)
- Auto-Deleverage (ADL) (when the insurance fund can't cover it, forcibly close profitable opposing positions)
- Mark price (protects against targeted liquidations by using a weighted average of multiple spot feeds)

## Regional Deployments

- **Global zones**: Binance dominates Asia (Binance US is a separate entity to avoid SEC)
- **Binance**: shifting HQ between Singapore, Dubai, Bahamas
- **Coinbase**: SEC-registered in the U.S., strict regulation
- **OKX**: Seychelles + Singapore
- **ASIC (Australia), MAS (Singapore), BaFin (Germany)** regulatory licenses determine which countries each can operate in

## Compared to Broker + Prime Broker Stack

| Dimension | Retail Broker (MT5 / IB) | Crypto Exchange (Binance) |
|---|---|---|
| Matching | External (LP / ECN) | Internal (proprietary order book) |
| Custody | Bank / Prime Broker | Self (hot/cold wallet) |
| Quote source | Bank pool | Internal order book |
| Fee structure | Spread + commission | Maker/Taker + VIP |
| Settlement T+ | T+2 (FX), T+1 (stocks) | T+0 real-time |
| Regulation | CFTC / FCA / ASIC (strict) | Multi-jurisdictional / partially grey |
| API availability | FIX for wealthy/institutional, MT protocol for retail | REST/WS for all retail |
| Market making | External market makers | External + internal |

## References

- Binance Academy "How Matching Engines Work"
- Jane Street "A Guide to Market Making"
- Crypto CEX post-mortems (FTX bankruptcy docket, Mt. Gox legal filings)
- Messari / CoinGecko Exchange Due Diligence reports
- *Algorithmic Trading and DMA* (Barry Johnson) — although written for traditional markets, the matching-engine chapter is universal
