# The Retail FX Boom (2000–2010)

Retail FX went from zero to millions of global accounts and tens of billions in daily volume — in a single decade. That decade defined everything we see today: why MT5 dominates, why prop firms can exist, why regulators started tightening the screws after 2010.

## Backdrop: Before 2000, FX Was an Institutions-Only Club

- FX went to floating rates in the 1970s after Bretton Woods collapsed
- Before the 1990s there was **no electronic retail FX**:
  - Real liquidity lived on interbank systems — EBS, Reuters Dealing
  - An individual wanting to trade FX had to use futures (CME IMM FX futures) or wait for a bank to quote them
  - Minimum spreads 5–10 pips, minimum lot size $1M
- Internet + looser leverage rules → retail FX finally became possible

## Three Waves of Adoption

### Wave 1: Internet + ECNs (1996–2000)

1996: **Matchbook FX** launches the first retail FX ECN (short-lived, but set the template)
1996: **Gain Capital** (precursor to FOREX.com) founded in New York
1998: **FXCM** founded (later the dominant U.S. retail FX broker; bankrupted by the 2015 Swiss franc event)
1999: **IFX Group** / **Saxo Bank** launch web-based FX
2000: **OANDA** releases **FXTrade** — 24×7 quotes, 1-pip spreads, any lot size (killing the $1M minimum)

OANDA's design was deeply influential:
- No fixed "lot size" concept (you could trade $1)
- 24/7 trading (even weekends)
- Real-time quote push + RESTful API (the first)

### Wave 2: MT4 + European CFD Expansion (2005–2008)

2005: **MetaTrader 4** ships — free to brokers, EA scripting language, one package for desktop and back-end; a Russian team flattens the older FX terminals
2006: MetaQuotes signs **Alpari**, **FxPro**, **FXCM** and other early adopters
2007–2008: Global retail brokers pile onto MT4
- **CySEC (Cyprus Securities and Exchange Commission)** becomes the default registration venue for European FX brokers: low tax + EU passporting + permissive CFD rules
- Plus500 / eToro founded in Cyprus in 2007
- A wave of Russian/Israeli operating teams relocates to Cyprus

2008 financial crisis → panic in equities → retail rotates into FX speculation → retail FX account counts double

### Wave 3: CFDs + Contract-for-Difference Arbitrage (2008–2010)

**CFDs (Contracts for Difference)** are a UK 1990s invention — a contract structure that dodged stamp duty and let you short individual stocks. Retail FX brokers started bolting CFDs onto MT4 and proprietary platforms:
- Single-stock CFDs (UK/German stocks with 100× leverage)
- Index CFDs (DAX / S&P / FTSE × 50)
- Commodity CFDs (oil / gold × 100)
- Crypto CFDs (2014+)

This meant brokers no longer had to connect to traditional exchanges to offer near-every asset class. For the broker, it was a cost cut; for retail, it was "leverage on everything." **The CySEC broker playbook — "FX + CFDs" as a combo product — survives intact to this day.**

## A Few Milestone Datapoints

| Year | Retail FX Daily Volume | Active Brokers | Spread |
|---|---|---|---|
| 2000 | <$10B | <20 | 10–20 pip |
| 2005 | $50–100B | ~100 | 3–5 pip |
| 2010 | $300–400B | ~1000 | 1–2 pip |
| 2015 | $500–600B | ~1500 | 0.5–1.5 pip |
| 2020 | $600–900B | ~1500 | 0.1–1 pip |

Sources: BIS Triennial FX Survey + Finance Magnates Intelligence. The real retail slice is roughly 5–10% of global FX (the bulk is still interbank).

## Where Regulation First Pushed Back

**Dodd-Frank (2010)** in the U.S. slashed retail FX leverage from 100:1 to 50:1 (majors) / 20:1 (others). CFTC required retail brokers to register with NFA, compliance costs exploded → many brokers exited the U.S. market → FXCM and friends pivoted offshore.

**MiFID II (2018)** in Europe capped retail CFD leverage at 30:1 (major FX), banned binary options, forced negative-balance protection. Cyprus brokers had to rewrite their contracts from scratch.

**ASIC 2021 rules** brought Australia in line.

These regulatory moves are what eventually forced the **prop firm model** into existence:

> "You pay me an entry fee, I give you 'simulated' capital, you trade the simulated capital but you have to clear my risk rules. If you pass, I 'share the profit' with you."

On the surface it's "training + capital allocation"; underneath it's a workaround for leverage/risk rules aimed at retail individuals — the prop firm gives you a "demo account," and the prop firm carries the real market risk (or hedges it). See [`05-prop-firm-rise.md`](./05-prop-firm-rise.md).

## Key Lessons

1. **Commodity tech drives markets**: MT4 cut the cost of starting a broker from tens of millions to a hundred thousand USD — broker count grew 50× from 2000 to 2010
2. **Regulation lags innovation**: Retail FX + CFDs ran unregulated all the way until 2010
3. **Once white-label solidifies, it locks in**: MT4/5 dominance held until 2024 — 20 years of path dependence
4. **Spread capture is the winner's logic**: Retail users pay spread whether they win or lose; brokers print money either way
5. **Regulatory cracks breed new business models**: Prop firms are a direct byproduct of the regulatory squeeze

## References

- BIS Triennial Central Bank Survey 2004 / 2007 / 2010
- Finance Magnates Intelligence FX Broker Database
- *Currency Trading For Dummies* (Brian Dolan) — 2000s retail FX primer
- CFTC / NFA regulatory history
- [OANDA Company History](https://www.oanda.com/about/)
