# FX Market Structure & The Root of Price Data

"What is FX? Where does the price come from?" — once you have these two answers, everything else (retail brokers, prop firms, copy platforms) is just surface.

## 1. What FX Actually Is

**FX = a bilateral credit agreement to exchange one currency for another.** There is no underlying asset, no central exchange, no official closing price.

Contrast with equities / futures:

| Dimension | Equities / Futures | FX |
|---|---|---|
| Underlying | A company / a contract | An exchange rate between two currencies |
| Venue | Centralized exchange (NYSE / CME) | **Decentralized OTC** (Over-the-Counter) |
| Counterparty | Anonymous (exchange matches) | **Bilateral** (you know who you're facing) |
| Clearing | Central clearinghouse (DTCC / CME Clearing) | Bilateral or CLS Bank (large values) |
| Price | Single official last price | **No official price** — every bank quotes its own |
| Hours | Open / close | **24×5**, following Earth's rotation |
| Minimum size | 100 shares / 1 contract | Infinitely divisible in theory (OANDA allows $1 trades) |

FX's decentralization isn't a design choice of the internet era — it's a historical accident. When Bretton Woods collapsed in 1971 and currencies floated, banks naturally started quoting bilaterally over phone and telex. **There has never been a central FX exchange.** Electronic matching (ECNs) came later, but legally they're "messaging platforms," not exchanges, and they don't clear trades.

## 2. Size and Structure

### Global FX Daily Turnover

From the BIS Triennial Survey 2022 (next edition due 2025-09):

- **$7.5 trillion / day** global FX turnover (spot + forward + swap + options)
- Of which spot is about **$2.1 trillion / day**
- Retail FX accounts for only **5-10%** ($400-700B/day); the bulk is interbank + institutional hedging + central bank operations

### Participant Hierarchy

```
[Central Banks] ── Monetary policy + intervention
      ↓
[Tier-1 Banks] ── JPM / Citi / Deutsche / UBS / Goldman / BoA, etc.
   Top 5-10 dealers market-making to each other
      ↓
[Tier-2 Banks + Hedge Funds + Large Corporate Treasuries]
      ↓
[Prime Brokers (PB)] ── Provide access to institutional clients / smaller funds
      ↓
[Prime of Prime (PoP)] ── Aggregate access for smaller retail brokers
      ↓
[Retail Brokers] ── Face the individual trader
      ↓
[Retail Traders]
```

Each tier adds spread markup, increases latency, and shrinks tradable size. A retail user sees a **fourth- or fifth-hand price.**

## 3. The Root of Price Data

### Where real FX prices are actually discovered: interbank ECNs

Global FX price discovery happens primarily on **two electronic matching platforms**:

**EBS (Electronic Broking Services)**
- Founded 1990 as a consortium of major banks to break Reuters' monopoly
- Acquired by ICAP in 2006; in 2018 CME Group bought NEX Group (ICAP's parent) for $5.5B, bringing EBS under CME
- **Home pairs**: EUR/USD, USD/JPY, USD/CHF, EUR/JPY, EUR/CHF, USD/CNH
- Access limited to Tier-1 banks + select large Prime Brokers
- Minimum trade size typically $1M

**Refinitiv Matching (formerly Reuters Matching / Thomson Reuters)**
- Launched by Reuters in 1989, evolved through multiple platform generations
- In 2021, LSEG (London Stock Exchange Group) acquired Refinitiv for $27B; Matching is now an LSEG property
- **Home pairs**: GBP/USD, AUD/USD, NZD/USD, USD/CAD, most emerging-market pairs
- Similar client structure to EBS

The two platforms **split the major pairs between them**: EBS owns EUR/USD and USD/JPY; Reuters owns GBP/USD, AUD/USD, NZD/USD. Historical origin — EBS was led by US/Japanese/continental European banks (continental currencies); Reuters emerged from the Commonwealth (sterling-bloc and emerging markets).

**The key point**: whatever "market price" for EUR/USD you see anywhere in the world, its **ultimate price discovery happens inside EBS's order book.** When the bid/ask on EBS moves, it cascades to Reuters, Bloomberg, Prime Brokers, other ECNs, and retail brokers. **Every EUR/USD quote globally derives from this.**

### The Role of Central Banks

Central banks don't "quote," but their existence sets long-term direction:

- **Policy rates** → drive interest-rate differentials → drive medium-term FX trends
- **Interventions**:
  - Swiss National Bank (SNB) maintained a EUR/CHF 1.20 floor from 2011-2015
  - Bank of Japan (BoJ) intervened multiple times in 2022-2024 to prevent USD/JPY from breaking 152+
  - People's Bank of China (PBoC) guides USD/CNY via its daily fix
- **Reserve operations**: large central banks have daily FX flows that provide baseline liquidity

Central banks are the FX market's **counterparty of last resort** — in theory, a central bank can print its own currency to buy foreign currency, so it can't go bankrupt in domestic terms. But in practice, political / inflation / reserve constraints do bind.

## 4. The Price Distribution Chain

From interbank ECN to retail terminal:

```
EBS / Reuters Matching (real matching)
  ↓ market data feed (millisecond-level)
Tier-1 banks (internalize + re-quote)
  ↓
Prime Broker aggregates 5-20 bank quotes
  ↓
Data vendors (Bloomberg / Refinitiv / ICE Data Services)
  ↓ resold to institutional / retail data providers
Retail data aggregators (TwelveData / Polygon / Finnhub)
  ↓
Retail broker's own matching / pricing engine
  ↓ add markup (0.1-2 pip)
Retail terminal (MT4 / MT5 / TradingView / proprietary app)
  ↓
The EUR/USD you see
```

Latency accumulates at each layer:
- EBS → Tier-1 banks: < 1ms (co-located physical servers)
- Tier-1 → PB: 1-10ms
- PB → retail broker: 10-50ms
- Retail broker → user terminal: 50-500ms

Result: when you see EUR/USD = 1.0850, EBS may already be at 1.0851. For most retail this is irrelevant; for HFT and arbitrage it's the difference between alive and dead.

## 5. No "Single Price" — But There Are Benchmark Fixings

### Fixing Mechanisms

While there's no single FX price, the institutional world needs a **daily reference** for valuation, settlement, and derivatives clearing. Hence:

**London 4pm Fix (WM/Reuters Benchmark)**
- 5-minute window around 16:00 London time each business day
- Weighted average of EBS + Reuters executed prices in that window
- **The most widely used FX benchmark**: referenced by MSCI indices, most FX ETFs, and derivative contracts
- History: in 2013, major banks' FX traders were exposed manipulating the fix via WhatsApp chatrooms → $10B+ in fines (JPM, Citi, UBS, Barclays, RBS)

**ECB Fix (European Central Bank reference rates)**
- Published at 14:15 CET each business day
- Covers 32 EUR pairs
- Composite of central-bank surveys + Reuters quotes — a "reference," not a tradable price
- Standard for institutional valuation of EUR positions

Others: **Tokyo Fix** (9:55 JST), **NY Close** (17:00 EST).

### Why retail doesn't use these fixes

Retail orders execute at **the live price at the moment of execution**, not at a fix. Fixings are **historical settlement references** for:
- ETF rebalancing
- Derivative expiry settlement
- Institutional portfolio valuation
- Academic research

## 6. Physical Reason for 24×5

The "24-hour" FX market is fundamentally about **Earth rotation + financial centers handing off**:

| Session (UTC) | Dominant center | Character |
|---|---|---|
| 22:00 previous day → 07:00 | Sydney → Tokyo | Asian session, AUD/NZD/JPY active |
| 07:00 → 16:00 | London (largest FX center globally, 38%) | Home of EUR / GBP |
| 12:00 → 21:00 | New York (second largest, 19%) | Peak USD liquidity across all pairs |
| 13:00 → 16:00 | London-New York overlap | **Peak global FX liquidity** |
| 21:00 → 22:00 | NY close → Sydney open | Handover gap |

- **Weekends** are closed — not a technical limitation, but a Tier-1 bank staffing arrangement. CLS Bank (settlement for large FX trades) operates only on business days.
- Middle Eastern perpetual-crypto and crypto-native FX tokens try to fill the weekend gap but haven't gone mainstream.

## 7. Why Retail Spreads Are Always Wider Than Bank Spreads

On MT5 you see EUR/USD bid/ask spread of 0.8 pip. The real interbank spread is maybe 0.1 pip. Where did the 0.7 pip go?

```
EBS actual spread:       0.1 pip (annual avg)
+ Tier-1 markup:        +0.1 pip
+ PB markup:            +0.2 pip
+ Retail broker markup: +0.2-2 pip
───────────────────────────────────
= What retail sees:     0.5-2+ pip
```

Retail brokers **are allowed to markup** — it's a legitimate business model. "ECN broker" claims of 0 pip spreads simply shift the revenue to commission instead of markup (economically the same thing).

## 8. What "Price Truth" Means for Different Actors

| Role | Price they see | Source they trust as "ground truth" |
|---|---|---|
| Typical retail | Whatever MT4 shows | Actually just the broker's internal aggregate |
| Algo retail | Median across multiple brokers | Their own aggregation |
| Small fund | Prime Broker feed | EBS + Reuters |
| Large fund | Direct EBS / Reuters connection | The EBS / Reuters order book itself |
| Market maker | EBS order book + their own risk system | **They are the source** |
| Central bank | Their own end-of-day market reports | CLS Bank settlement data |

The closer you get to the "truth," the higher the fixed cost (Bloomberg Terminal is $27K/year/seat, EBS direct connection is $50K+/month), but the larger the information edge.

## 9. Key Facts Cheat Sheet

- **Global FX daily turnover $7.5T; spot portion $2.1T** (BIS 2022)
- **London 38% + New York 19% + Singapore 9% + Hong Kong 7% + Tokyo 4%** = 77% of global activity
- **EUR/USD + USD/JPY + GBP/USD together = ~52%** of all FX trading
- **Retail = 5-10% of global volume**, but contributes 80% of broker markup revenue
- **Top 10 Tier-1 banks** (2024: JPM #1 at 9.4%, UBS #2 at 8.7%, Deutsche #3, Goldman #4...) account for ~65% of interbank market share

## 10. Practical Takeaways

For a developer / researcher / retail trader:

1. **"What's EUR/USD right now?" has no single answer**. Every data source is an approximation; 0.1-2 pip variation is normal.
2. **If you're building a quant system**: go upstream as far as your budget allows. TwelveData / Polygon > retail broker feeds, institutional Bloomberg/Refinitiv > retail aggregators, direct EBS is the apex.
3. **Mind the timestamp**: many retail feeds stamp prices with the broker's server time, not EBS actual execution time. That's tens of ms off.
4. **Fix mechanics are exploitable**: there's a well-known "fix hunting" algo trade in the 5-10 minutes around London 4pm Fix; many algo funds run on it.
5. **Weekend gaps are real**: between Friday NY 17:00 close and Sunday 22:00 open, Middle East central bank actions or breaking news create Monday-open jumps.

## Sources

- [BIS Triennial Central Bank Survey 2022](https://www.bis.org/statistics/rpfx22.htm)
- [ECB Euro Reference Rates](https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html)
- [NEX Group — Wikipedia (covers CME's 2018 $5.5B acquisition)](https://en.wikipedia.org/wiki/NEX_Group)
- [Refinitiv — Wikipedia (covers LSEG's 2021 $27B acquisition)](https://en.wikipedia.org/wiki/Refinitiv)
- [Forex scandal — Wikipedia (2013 fix manipulation, $10B+ in fines)](https://en.wikipedia.org/wiki/Forex_scandal)
- [CLS Bank operational stats](https://www.cls-group.com/news/)
- `02-liquidity-chain.md`: business-side view of the same chain
- `../01-history/03-retail-fx-boom.md`: retail FX history
