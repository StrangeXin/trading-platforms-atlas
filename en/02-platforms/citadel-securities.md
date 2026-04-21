# Citadel Securities

**The real counterparty behind 40%+ of US retail equity trading**. The bulk of PFOF flow from Robinhood / Schwab / Fidelity / E*Trade ends up here. One of the largest electronic market makers in the world, and a sister firm — operated independently — to Ken Griffin's Citadel hedge fund.

## Basics

- **Founded**: 2002 (as the market-making arm of Citadel Group); independent brand since 2017
- **Founder**: Ken Griffin (also founder of the Citadel hedge fund)
- **Headquarters**: Miami, FL (relocated from Chicago in 2022) + New York + London + Hong Kong + Sydney
- **Employees**: ~1,600 (2024)
- **2024 revenue**: ~$10–11B (estimated; privately held)
- **2023 Sequoia + Paradigm investment**: $1.15B at a $22B valuation

## Position in Global Markets

- **US equities**: **~25–27% of daily volume** flows through Citadel Securities (2024 SIFMA data)
- **Retail PFOF**: **receives ~40–45%** of retail equity order flow
  - 60% of Robinhood's PFOF goes to Citadel Securities (single largest destination)
  - The bulk of Schwab, Fidelity, Webull and E*Trade PFOF also routes to Citadel
- **Options market making**: ~35% of US retail options
- **ETFs**: lead market maker for 15 US-listed ETFs
- **Treasuries**: ~20% of US Treasury market trading (surpassed the big investment banks in 2023)

## Business Model: An Electronic Market-Making Machine

### Market making, market making, market making

**Citadel Securities is not a broker — it's the market's quote provider.**

In every market it touches (equities, options, bonds, ETFs, parts of crypto), it:

1. **Continuously posts quotes on both sides**
2. **Earns the bid/ask spread**
3. **Manages inventory risk** (the positions it's holding)
4. **Adjusts quotes within milliseconds** in response to market signals

### Why market making is actually profitable

The textbook story: market makers **hedge** and don't bet on direction. The real world:
- Market makers **take directional risk selectively**
- Statistical models + massive data sets **predict short-term direction**
- Retail order flow (via PFOF) is **"dumb flow"** — MMs have an information edge
- Institutional order flow is **"smart flow"** — they quote cautiously or step away

### The economics of PFOF (from Citadel's side)

```
Robinhood user places a buy order for 100 shares of AAPL
    ↓
Robinhood sends the order to Citadel (not to NYSE)
    ↓
Citadel matches it inside its own internal pool:
  - If Citadel has offsetting inventory → crosses directly (earns the spread)
  - Otherwise → Citadel takes the position and hedges externally
    ↓
Citadel pays Robinhood a "rebate" ($0.002–0.005 per share)
Citadel's gross = spread − rebate − hedging cost
    ↓
The Robinhood user sees a "fill" — possibly a few basis points worse than exchange mid
```

**Why Citadel is willing to pay the rebate**:
- Retail orders are the **cleanest / lowest-information** order flow
- Institutional orders (Goldman, Morgan) may know which way the market is going → market making gets picked off
- Retail orders are **harmless** → Citadel can almost always **choose its exposure selectively**
- 2021 research: Citadel's **average profit on a retail order was ~$0.25 per 100 shares**

## Technical Infrastructure

Citadel Securities **pours money into infrastructure**:

- **In-house trading system**: C++ + custom hardware
- **Global colo footprint**: New York NJ (NYSE + Nasdaq + BATS), Chicago CBO (CME), London LD4 / BSX, Tokyo / Hong Kong, etc.
- **Microwave networks**: dedicated NY-CHI-LON-TKY microwave towers (20–40% lower latency than fiber)
- **FPGA**: hardware-accelerated quote generation (parts have migrated to ASIC)
- **Internal datacenters**: New York NJ Equinix NY5, London LD6
- **Headcount mix**: ~50% engineers / data scientists (vs. 30–40% at traditional banks)

Citadel spends **~$2B+ per year** on tech infrastructure.

## Key Events

### 2021 GameStop

**Context**: Robinhood users piled into long GME, and a large share of the orders routed to Citadel Securities.

**The controversy**:
- Citadel Securities was **simultaneously**:
  - The largest buyer of Robinhood's PFOF
  - The rescuer of Melvin Capital (Melvin was the largest GME short)
- On January 28, 2021 Robinhood restricted buys on GME
- Conspiracy theory: **Citadel pressured Robinhood to restrict buying → bailout for Melvin**
- Official investigations (SEC, Congress): **found no direct evidence** that Citadel applied pressure
- The actual reason: DTCC clearing margin requirements (see robinhood.md)

**But**:
- The Citadel Securities + Melvin + Robinhood triangle **is itself** a systemic conflict of interest
- It exposed **the power structure of the US retail equity ecosystem**

### 2022 $1.15B Sequoia / Paradigm Round

- First large outside investment in Citadel Securities (previously fully Griffin-owned)
- $22B valuation (just before the 2022 crypto winter)
- Intent: **preparing for IPO**
- 2024 chatter still circled IPO, but with no firm timeline

### 2023 US Treasury Market-Making Expansion

- Citadel's share of US Treasury trading went from ~10% to ~20%
- Surpassed the traditional primary dealers (JPM, Goldman, Morgan Stanley)
- **The biggest structural change to US Treasury market making in 40 years**

### 2024 Ken Griffin and Politics

- Ken Griffin's personal net worth ~$40B (2024 Forbes)
- One of the largest individual donors to the US Republican Party
- Opposes the regulatory proposals coming from Elizabeth Warren and Bernie Sanders
- In 2024 Griffin publicly called to "stop the regulatory misreading of market makers"
- The political profile complicates Citadel Securities' regulatory posture

## Citadel Securities vs. Citadel (the hedge fund)

**These are two separate Griffin businesses**:

| Dimension | Citadel Securities | Citadel LLC (hedge fund) |
|---|---|---|
| Business | Market making + liquidity provider | Hedge fund + quant investing |
| Clients | Retail brokers + institutions | External LPs (pensions, endowments) |
| 2024 revenue | ~$11B | ~$15B |
| 2024 AUM | N/A (proprietary capital) | ~$65B |
| Employees | 1,600 | 2,600 |
| Offices | Separate | Separate |

**Key point**: they're **separate for regulatory purposes** (SEC broker-dealer vs. hedge fund). But the shareholders are the same — Griffin + employees.

## Regulation + Controversies

### The PFOF debate

- 2022 SEC Chair Gary Gensler criticized PFOF repeatedly
- 2023 proposed an outright ban (opposed by Citadel + Robinhood and others)
- 2024: Gensler stepped down, Trump took office, **the regulatory tightening stalled**
- 2025: new SEC Chair Paul Atkins is friendlier toward PFOF

### Naked short selling accusations

- During the 2021 GME episode, parts of the retail crowd accused Citadel of naked short selling
- Formal investigations found no violations
- But Reddit / Twitter conspiracy theories about Citadel have never really died down

### Relationship with Melvin Capital

- In January 2021, Citadel + Point72 injected $2B into Melvin
- This was done through **Citadel LLC** (the hedge fund), not Citadel Securities
- The latter is **legally separate** from the Robinhood PFOF business

## References

- [Citadel Securities official site](https://www.citadelsecurities.com/)
- [Ken Griffin — Wikipedia](https://en.wikipedia.org/wiki/Ken_Griffin_%28financier%29)
- [SIFMA US Equity Market Statistics](https://www.sifma.org/resources/research/)
- [Sequoia + Paradigm invest in Citadel Securities 2022](https://www.reuters.com/business/finance/citadel-securities-raises-12-bln-sequoia-paradigm-2022-01-10/)
- `../07-essentials/05-crypto-vertical-conflict.md`: market-maker + exchange conflicts
- `../07-essentials/03-broker-economics.md`: who brokers sell their order flow to
- `../02-platforms/robinhood.md`: the other side of Robinhood PFOF
- `jane-street.md`: the other major electronic market maker
