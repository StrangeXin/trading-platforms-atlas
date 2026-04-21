# The Liquidity Chain

"At the moment you place an order, who's actually on the other side?" — tracing this question back is the shortest path to understanding the real ecology of this industry.

## The Full Chain in One Picture

```
[Retail Trader]                          ← end of the winning/losing counterparty chain
    ↓ place order
[Retail Broker]                          ← B-Book can intercept right here
    ↓ what isn't intercepted flows downstream (A-Book)
[Prime Broker / LP]                      ← the "retail broker's gateway to interbank"
    ↓ aggregates multiple retail brokers' flow
[Tier-1 Prime Broker (Bank)]             ← the big investment banks actually wired to interbank
    ↓
[Interbank ECN: EBS / Hotspot /          ← where global FX real counterparties actually meet
 Integral / Reuters Matching]
    ↓
[Central Banks / Central Bank Agents]    ← the "primary market makers" on long time scales
```

## Layer-by-Layer

### 1. Retail → Retail Broker

This layer is the one **most likely to never leave the broker**.

**B-Book**: broker doesn't send the order externally, takes the other side. Customer loss = broker profit.
- Low-volume retail: default B-Book
- Regions with lax regulation (CySEC / IFSC / FSCA): higher B-Book ratio
- Demo / prop firm challenge phase: nearly 100% B-Book

**A-Book**: broker uses **STP (Straight-Through Processing)** to route to downstream LPs.
- High-volume / high-win-rate clients: broker routes A-Book for risk management
- Brokers labeled "ECN" / "NDD (No Dealing Desk)": push A-Book (but actually hybrid)

**Hybrid Book** is the reality: brokers internally classify clients based on historical P&L + volume + symbols + hold time and auto-route. MT5 server supports this rule configuration natively.

### 2. Retail Broker → Prime of Prime (PoP)

**Why PoPs exist**: Tier-1 Prime Brokers (major banks) have institutional onboarding thresholds — minimum $100M/month volume, minimum account $10M. Small retail brokers can't hit these.

**PoP is "the retail broker's Prime Broker"**:
- Signs contracts with Tier-1 banks on behalf of retail brokers
- Aggregates multiple small brokers' flow to meet thresholds
- Charges a small spread markup (0.1–0.5 pip per order)

**Major PoP players (2024)**:
- **ADSS** (Abu Dhabi Securities)
- **Saxo Bank** (Tier-1 that also plays PoP)
- **Invast Global**
- **CFH Clearing** (acquired by FlexTrade in 2022)
- **IS Prime**
- **Advanced Markets**
- **LMAX Exchange** (also runs an ECN)
- **Sucden Financial**
- **Swissquote** (also does PoP)

An MT5 broker typically connects 2–5 PoPs for redundancy + best-price routing.

### 3. PoP → Tier-1 Prime Broker

**Tier-1 Major Bank Prime Brokers**:
- **Goldman Sachs**
- **JPMorgan Chase**
- **Morgan Stanley**
- **Citibank**
- **UBS**
- **Deutsche Bank** (shrinking in recent years)
- **Barclays**
- **HSBC**

These banks simultaneously play:
- Market maker (quoting to PoPs)
- Broker (executing PoP orders)
- Clearing agent (T+2 delivery)
- Financing provider (giving PoPs short-term loans / credit lines)

### 4. Tier-1 → Interbank ECN

Banks counterparty each other; matched through ECN systems:

- **EBS** (BrokerTec/CME): dominates major pairs (EUR/USD, USD/JPY)
- **Reuters Matching** (LSEG): European currencies skew
- **Hotspot FX** (Cboe): U.S. preference
- **Integral**: tech-driven ECN
- **LMAX Exchange** (also open to retail): transparent order book
- **CurrenexSTP** (CME)
- **FXall** (LSEG): institutional RFQ dominated

**Typical market depth**: EUR/USD top-of-book spread 0.1 pip, multi-hundred-million USD depth on the first level.

### 5. Below ECNs: Central Banks + Sovereign Funds + Large Trading Firms

The true "primary counterparties" aren't retail flow but:
- **Central banks** doing currency-policy intervention (Japan MOF selling JPY, Swiss National Bank defending the franc ceiling)
- **Sovereign wealth funds** (Saudi PIF, Norway Oil Fund, Singapore Temasek)
- **Multinational corporate treasuries** (Apple / Samsung doing bulk FX hedging)
- **Commodity trade settlement** (OPEC oil / Cargill grain)
- **Export settlement flows** (Middle East → USD / Europe → EUR)

These real-demand counterparties form the deepest liquidity foundation of the global FX market.

## Skepticism About "Compliant STP Brokers"

Many retail brokers advertise "True ECN" / "STP" / "No Dealing Desk" — meaning "we don't take the other side; all orders flow through to interbank."

Reality:
- **99% of retail brokers are hybrid Book**
- "STP" is not a regulated, enforced term; anyone can claim it
- How to check: look at spread + commission structure
  - True STP: raw spread (may be 0 pip) + fixed commission ($3–7/lot)
  - B-Book: wider spread (1–3 pip) includes the commission

Another signal: **order rejection rate + requote rate**. True STP receives LP "Last Look" rejections during high volatility (LP gets to take a final look at the price before accepting) — rejection rate is higher but spread is fair. B-Book brokers always fill but the spread is wide.

## The Crypto Liquidity Chain (Completely Different)

```
[Retail]
  ↓ REST / WS
[Exchange order book]     ← retail orders + market-maker orders mixed in matching
  ↓
┌──────────────┐
│ Market Makers │
│ (Jump /       │
│  Wintermute / │
│  Jane Street /│
│  GSR /        │
│  Cumberland)  │
└──────────────┘
  ↓ cross-exchange hedge (open opposite on another exchange)
[Other exchange order books]
```

In crypto, liquidity **lives entirely inside the exchange's order book**. Market makers are the main suppliers (attracted by fee rebates). Cross-exchange arbitrage + perp/spot arbitrage maintains price consistency.

**There's no concept of PoP / Tier-1 Prime Broker** — because the exchange plays all those roles itself.

## Why Understanding the Liquidity Chain Matters for Traders

1. **Knowing who your real counterparty is**: a B-Book broker has interests directly opposed to yours — they want you to lose
2. **The real source of spread pricing**: how many layers of markup your quote passes through
3. **The prop firm edge**: why prop firms can hand out accounts — they eat spread downstream + challenge fees are high-margin
4. **Regulatory arbitrage logic**: why brokers set up in Cyprus instead of the UK — A/B-Book rules are looser, profit margin is wider

## Where the Money Flows in the Chain

A typical retail 1-lot EUR/USD long (€100,000 notional):
- You pay: 2-pip spread = $20
- Broker keeps: 0.5–1 pip = $5–10
- PoP keeps: 0.2–0.5 pip = $2–5
- Tier-1 bank keeps: 0.1–0.3 pip = $1–3
- ECN matching fee: $0.05–0.2

Out of the $20 per order, the biggest slice ($5–10) stays at the retail broker. That's the mechanism by which "free forex" actually has retail traders collectively donating tens of billions of USD per year.

## References

- BIS Triennial Central Bank Survey (global FX market size + structure)
- Financial Stability Board *FX Global Code*
- Finance Magnates / LeapRate annual PoP ecosystem coverage
- EBS / Hotspot / LMAX official rule docs
- BarclayHedge hedge fund FX strategy reports
- Bank for International Settlements *Triennial FX Survey 2022*
- *Currency Wars* (James Rickards) — central bank behavior's impact on FX
