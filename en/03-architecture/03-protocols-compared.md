# Trading Protocols Compared

Not "which is better" but "which scenario uses which." Each of the four major protocols has a die-hard constituency and indestructible strengths.

## One-Glance Comparison

| Dimension | FIX | MT5 Proprietary | REST + WS | gRPC |
|---|---|---|---|---|
| Born | 1992 | 2010 | 2005+ | 2016 |
| Target user | Institutions / HFT / white label | Retail terminal + retail broker | Retail developers / algo | Big-tech internal + some crypto |
| Message format | `8=FIX.4.4|35=D|...` text frames | Binary proprietary | JSON (+ Protobuf WS, growing) | Protobuf |
| Transport | TCP long connection | TCP long connection | HTTP / WebSocket | HTTP/2 long stream |
| Discoverability | Standard spec public | Fully closed | OpenAPI docs public | `.proto` can be shared |
| Client | QuickFIX / Onix / in-house | Must be MT terminal / MetaApi | Any HTTP lib | Official generated stubs |
| Latency | Microseconds (institutional) ~ milliseconds (typical) | Tens of milliseconds | Tens ~ hundreds of milliseconds | Millisecond-scale |
| Dev barrier | High (contracts + certs) | Low (terminal works) / High (SDK layer) | Very low | Medium |
| Rate limit | Contract-level (TPS negotiated) | Terminal-level | Strict (per key, per IP) | Negotiable |
| Auth model | Session credentials + IP allowlist | Username/password (MT protocol auth) | API Key + Secret + IP allowlist | TLS cert + OAuth |

## FIX (Financial Information eXchange)

**What FIX is**: a financial messaging standard jointly created in 1992 by Morgan Stanley and Salomon Brothers, later maintained by the FIX Trading Community (pre-2005 called FIX Protocol Ltd).

**Sample message**:
```
8=FIX.4.4|9=122|35=D|34=215|49=CLIENT12|52=20260421-10:00:00|56=BROKER23|11=MY_ORDER_ID|21=1|55=EURUSD|54=1|60=20260421-10:00:00|38=100000|40=2|44=1.17650|59=0|10=247|
```

- `8=FIX.4.4` version
- `35=D` message type `NewOrderSingle`
- `11=MY_ORDER_ID` client-side order ID (clOrdID)
- `55=EURUSD` symbol
- `54=1` direction `1=Buy`
- `38=100000` quantity
- `40=2` order type `2=Limit`
- `44=1.17650` limit price
- `10=247` checksum

**Common versions**
- FIX 4.2 — most widespread, supported by FX / equities institutions
- FIX 4.4 — the current mainstream version
- FIX 5.0 SP2 + FIXT 1.1 — separates session layer (FIXT) from application layer
- **FIX API 2.x / FIXML** — JSON-like modernization attempt, low adoption
- **SBE** (Simple Binary Encoding) — binary FIX for CME/IEX and other speed-sensitive venues

**Who uses it**
- Equities / futures matching exchanges (NYSE / Nasdaq / CME / LSE / TSE)
- FX ECNs (EBS / Hotspot / Integral)
- Prime Brokers (GS / JPM / MS / Citi)
- The upstream path from retail broker to LP is almost entirely FIX
- Retail brokers **don't** give it to retail (institutional contracts only)

**Why it's still alive**
- Maximum network effect in finance: every counterparty supports it, too entrenched to replace
- Latency is acceptable (hand-tuned TCP + no-delay can hit sub-millisecond)
- Compact message encoding, suits HFT scenarios
- Mature session recovery (Sequence Number, GapFill, ResendRequest)

**Downsides**
- Text parsing has performance overhead → SBE binary version emerged
- Each broker has its own "FIX dialect" (custom tags, status codes vary widely)
- Hard to onboard a new language (Python's QuickFIX isn't 100% standard-compliant)

## MT4 / MT5 Proprietary Protocol

**Proprietary**: MetaQuotes doesn't publish the protocol spec. Even if you pay for a license and deploy the server, you don't get protocol details.

**Reverse engineering difficulty**: has been done (there have been open-source Linux attempts), but the server rolls protocol versions regularly and retires old clients — packet-capture tools can't keep up.

**Client authentication**: username/password + server address (e.g., `OANDA-Demo-1`). Protocol internally does challenge-response auth + session encryption.

**Order path**:
```
MT5 terminal
   ↓ (proprietary TCP, port 443 or port 443x range)
MT5 Server
   ├─ Internal OMS (order book + account + risk + logs)
   └─ Gateway (MT5 Server → LP FIX bridge)
          ↓ FIX.4.4
       LP pool
```

The MT5 server itself is a fully functional small-scale trading system — it only sends orders over FIX to LPs in the portion of **net exposure** it chooses to externalize.

**Capabilities baked into the protocol**:
- Order management (market / limit / stop / trailing stop)
- Account queries
- History queries
- Market data subscribe (tick-level push)
- **Chart data pull** (OHLC lives server-side; client pulls on demand)
- **EA trading signal push** (MT5 supports server-side uploaded EAs too)
- **Admin interface** (broker back-office, risk rule pushing, etc.)

**This is why HTTP can't simply replace it** — the MT5 ecosystem has over a decade of protocol-level features embedded; changing one breaks the retail user ecosystem.

## REST + WebSocket

**The standard kit for retail crypto exchanges and modern brokers like OANDA.**

Typical design:
- REST for **state changes** (place, cancel, modify, query)
- WebSocket for **real-time push** (market data, trade stream, account updates)
- REST signing: HMAC-SHA256 signature over query string / body, header carries timestamp to prevent replay
- WebSocket auth: pass API Key in header during HTTP upgrade, or send an `auth` message

**Why it's dominant**
- HTTP / JSON tooling exists in every programming language
- Browsers support WebSocket natively, great for PWA / Web App
- OpenAPI / Swagger auto-generates client SDKs
- Rate limit + API Key model suits self-service retail provisioning

**Trade-offs**
- Latency is an order of magnitude worse than FIX (tens of ms vs a few ms)
- JSON is verbose (Binance's high-frequency users switch to Protobuf WS)
- Each venue's signing / parameter format is different (ccxt and similar aggregation libraries paper over this)

## gRPC

A **relatively new** protocol stack, used internally at crypto exchanges and exposed externally by some digital brokers.

- Based on HTTP/2 + Protobuf
- Supports bidirectional streaming, unidirectional streaming, single RPC
- 3–10× smaller than JSON, faster to encode/decode
- But browsers don't support it natively (need a gRPC-Web gateway)

**Who uses it**
- Coinbase exposes some internal services externally
- Binance institutional API for select paths
- Crypto infrastructure companies (Chainflip / Hyperliquid) for RPC
- Rarely used in traditional brokerage (ecosystem inertia is too strong)

## Selection Decision Tree

```
Connecting to FTMO / TopStep / any retail MT5 broker?
  → MT5 protocol (use MT5 terminal or the MetaApi cloud bridge)

Connecting to retail FX but want to route around MT5?
  → Switch broker (OANDA v20 REST / IG REST / IBKR TWS API)

Doing HFT or institutional scale?
  → FIX (contract with broker, IP whitelist required)
  → Or the broker's SBE / custom binary version

Playing in crypto-native?
  → REST + WebSocket (Binance / OKX / Bybit)
  → Or ccxt unified abstraction layer

Building a web app that directly places orders?
  → REST + WebSocket (only option)
  → Or relay orders through your own backend (to dodge CORS)
```

## FIX → REST → Aggregator Historical Arc

```
1992  FIX is born, institutional-only
2000  Retail internet brokers take off; MT4 enters and dominates retail
2005+ FIX-over-SSL standardization, MT4 global expansion
2010  MT5 released
2012+ Crypto exchanges go all-in on REST + WS, skipping FIX entirely
2015+ ccxt / TradeClient and other aggregation layers appear, papering over per-venue differences
2020+ TradingView does "multi-broker aggregation" — user places orders in TV, backend routes to each broker's API
2024+ Prop firms start exploring DxTrade / cTrader APIs to replace MT5
```

## References

- FIX Trading Community official spec (fixtrading.org)
- QuickFIX open-source implementation + docs
- MetaQuotes MT5 Server Administrator Manual
- ccxt GitHub readme (map of API differences across 150+ exchanges)
- Binance / OKX / Bybit public API docs
- CME Globex FIX / SBE access docs
