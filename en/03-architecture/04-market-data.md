# Market Data Distribution Architecture

"Order execution" and "market data distribution" are two completely independent tech stacks. The former demands strong consistency, the latter demands high throughput. This piece breaks down the data distribution side.

## Hierarchical Model

```
[Exchange / ECN]
  ↓
[Market Data Gateway] (MD server)
  ↓ dedicated line / public internet
[Aggregator / Vendor] (Bloomberg / Refinitiv / TwelveData)
  ↓
[Broker] (to end user)
  ↓
[User Terminal]
```

Every layer can be collapsed (crypto exchanges push WS directly to retail) or stretched out (institutions run multi-hop dedicated lines + normalization).

## 1. Source: Exchange MD Distribution

### Stocks / Futures / Options
- **FIX-FAST**: binary-compressed FIX, used on CME / Nasdaq TotalView etc.
- **Multicast UDP**: CME Globex and plenty of futures exchanges use this as the main feed — TCP unicast doesn't scale; multicast pushes the feed once to all subscribers
- **ITCH protocol** (Nasdaq) + **MDP 3.0** (CME): exchange-proprietary binary protocols
- **Dedicated access**: colocation (managed rack) + fiber direct-connect, latency down to <10μs

### Crypto Exchanges
- **WebSocket + JSON / Protobuf**: Binance / OKX / Bybit / Coinbase standard
- **REST polling**: fallback option, not recommended for high-frequency
- Crypto has no colocation tradition (though some pro market makers co-tenant AWS ap-northeast / US-East)

### FX
- **EBS / Hotspot / Integral** institutional ECNs → FIX Market Data Request
- **LP / Bank Pool** → broker: typically FIX
- **Broker → MT5 server** → MT5 terminal: MT5 protocol subscription

## 2. Vendor Layer: Market Data Aggregators

### Bloomberg (BBG)
- **Bloomberg Professional Service** (terminal): $24,000+/year, industry standard
- **B-PIPE**: institutional-grade market data API, FIX-FAST / PAMM protocols
- Data coverage: equities, bonds, FX, commodities, derivatives, news
- Tech stack: Bloomberg Terminal is a fat client + dedicated network
- Customer count: ~340,000 terminals

### Refinitiv (formerly Thomson Reuters Financial)
- **Acquired by LSEG in 2021**, folded into London Stock Exchange Group
- **Refinitiv Real-Time** (formerly Eikon): direct competitor to Bloomberg
- **TREP** (Thomson Reuters Enterprise Platform): institutional backend distribution system
- Institutional #2

### FactSet
- Buy-side institutions (funds / asset managers) favorite
- Web + Excel plug-in
- ~8000 institutional clients

### IEX Cloud (replaced by Intrinio) / Polygon.io / IEX Group
- Modern, REST-friendly market data providers
- Target retail developers, small funds, tech companies
- **Polygon.io**: from ~$99/month, covers U.S. equities + options + FX + crypto
- **Alpaca Data**: paired with Alpaca Broker, free tier includes U.S. equities
- **Alpha Vantage**: free tier + API Key, popular with beginners

### TwelveData / MarketStack / EODHD
- Smaller market data aggregators, retail / individual developers
- REST / WebSocket, covers all asset classes (quality and completeness vary)
- Free tier 50–800 req/day

### Crypto-Specific
- **CoinGecko / CoinMarketCap**: aggregate CEX market data, free API (rate-limited)
- **Kaiko**: institutional crypto data vendor, serves institutions over FIX
- **CryptoCompare**: historical + real-time, REST / WS

## 3. Broker → Terminal: The Last Hop

Traditional brokers:
- MT5 broker → MT5 terminal: MT5 protocol `symbol price push`
- OANDA → fxTrade: proprietary WebSocket
- IB → TWS: IB proprietary protocol

Crypto exchanges:
- Binance / Bybit → user app: direct WebSocket subscription
- Coinbase → Coinbase app: REST polling + partial WS

## 4. Where Does "Free Market Data" Actually Come From?

The "real-time quote" most retail tools (TradingView, MetaTrader, Investing.com) show you is:
1. **Exchange's delayed feed** (15-minute delay, free to retail)
2. **Aggregator's sampled feed** (1 per second or less)
3. **Quotes from a different exchange for the same symbol** (e.g., S&P displayed on Nasdaq is inferred from CME S&P futures)

Real tick-by-tick real-time costs money:
- Nasdaq TotalView: $200/month retail, $15,000+ institutional
- NYSE Integrated Feed: similar
- CME Market Data: $100–500/month depending on package
- FX EBS Live: institutional-level pricing

TradingView Premium ($59.95/month) bundles real-time feeds for a set of exchanges — that's their hardcore retail attraction.

## 5. Latency Order-of-Magnitude Comparison

| Hop | Typical Latency |
|---|---|
| CME colocation rack → market maker server | <10μs |
| New York → London dedicated line (TRANSATLANTIC) | ~30ms |
| New York → Tokyo dedicated line | ~80ms |
| AWS us-east-1 → Binance Tokyo | ~150ms (typical public internet) |
| Bloomberg Terminal → user screen | ~500ms |
| TwelveData REST → Python client | 1–2s |
| Retail web refresh (TradingView) | 1–5s |
| Investing.com quotes | ~15 min delay (compliance layer) |

## 6. Typical Retail Frontend Data Pipeline

A common "frontend + backend + broker + historical data aggregator" combo:

```
[Broker Cloud API (e.g., MetaApi)]
  ↓ (RPC / WS proprietary protocol)
[Application backend]
  ↓ short polling (5s) + memory cache (1–2s TTL) for smoothing
[Web frontend]
  ↓ HTTP / WS
[Browser]
```

Real-time quotes track the broker; historical K-line lines use a cheaper aggregator independently (TwelveData / OKX / Binance / ExchangeRate). This is typical "hybrid vendor" — broker data is expensive but authoritative, historical data is cheap and swappable.

## 7. Institutional Complexity: Normalization + Deduplication

Large institutions subscribe to a dozen sources simultaneously — Bloomberg, Refinitiv, CME, direct exchange feeds. They need:

1. **Symbology mapping**: same symbol has different names across vendors (EURUSD / EUR/USD / EURUSD= / EURUSD.sim)
2. **Price cleanup**: tick filtering (exclude off-market ticks, anomalies during low-volume periods)
3. **Timestamp normalization**: each vendor uses different timezones / precision; unify to UTC ns
4. **Deduplication**: same tick from multiple sources counted once
5. **Gap filling**: if source A drops, backfill from source B

This is why institutional data platforms (OneTick / KDB+ / Arctic) are so expensive — they handle cleanup + distributed storage + queries.

## 8. Key Decision Table

**Need real-time data for retail users?**
- Crypto: every exchange gives you WS free, just use it
- Stocks: TradingView subscription / Polygon.io / IEX Cloud
- FX: OANDA v20 API (free) / TwelveData / connect to an MT5 broker
- Futures: TradingView / NinjaTrader professional data packages

**Need historical tick data for backtesting?**
- Crypto: Kaiko / CryptoCompare paid; or the exchange's own historical download
- Stocks: Polygon.io tick package (from $199/month) / Databento
- FX: Dukascopy free historical tick download + TrueFX

**Need to push to institutional clients?**
- Upstream goes over exchange dedicated line
- Middle normalization (in-house or buy OneTick)
- Downstream FIX-FAST / dedicated network distribution

## References

- CME Globex Market Data Platform (MDP 3.0) spec
- Nasdaq ITCH / OUCH protocol docs
- FIX Trading Community "FIX Market Data" chapter
- Bloomberg API developer docs (blpapi)
- Polygon.io / IEX Cloud / TwelveData public pricing
- Barry Johnson, *Algorithmic Trading and DMA*, Chapter 5 "Market Data"
