# FTMO: Deep Dive

## Overview

FTMO is the world's largest retail proprietary trading firm by revenue and active accounts. Founded in 2015 in Prague, Czech Republic, it pioneered the modern "funded trader challenge" business model and grew to become a $329M revenue company by 2024. In December 2025, FTMO completed the acquisition of OANDA, transitioning from a pure prop firm to a financial conglomerate spanning prop trading, brokerage, and financial data.

---

## Founding and Early History

### The Founders

- **Otakar Šuffner** (CEO): Graduated from University of Economics, Prague in banking and insurance
- **Marek Vašíček** (Co-founder): Classmate of Šuffner at the Prague University of Economics
- They own FTMO/OMHC **equally**

### The Origin Story

The founders conceived the idea in **2013** while active as personal traders:
- They lacked capital to scale their trading strategies
- Recognized that many skilled traders faced the same problem
- Envisioned a structured evaluation system to identify genuinely skilled traders

They couldn't afford to hire developers, so spent roughly two years building the platform themselves. FTMO officially launched in **2015**, initially serving only Czech Republic and Slovakia.

Per the [Forbes FTMO cover story](https://ftmo.com/en/blog/forbes-the-ftmo-cover-story/): the founders pursued this idea from their dormitory rooms, coding nights and weekends to build a functional challenge evaluation system.

---

## Business Model

### The Three-Stage Revenue Engine

**1. Challenge Fees (Primary Revenue)**

Traders pay a one-time, non-refundable fee to attempt the FTMO Challenge:
- FTMO Challenge: $55 (10K account) to $540 (200K account)
- Free Trial Challenge: Also available (limited conditions)
- The fee is refundable upon passing and receiving the first profit split

The economics: the overwhelming majority of traders **fail** the challenge. Failure rates are not published by FTMO but industry estimates suggest 70–90% fail before becoming funded. Each failed attempt generates another challenge fee.

**2. Profit Split (Secondary Revenue)**

Traders who pass the Challenge and Verification phases receive a "funded" account. FTMO retains 10–20% of profits generated. FTMO's scale (2.3M open accounts in 2024) means even a modest average profit per funded trader generates significant revenue.

**3. Scaling Plans**

Successful funded traders can scale their account sizes, generating larger absolute profit splits over time.

### The Business Is Not Pure Challenge Fees

A common misconception is that FTMO makes money purely from challenge fees (implying traders failing is the entire model). The financial disclosures show FTMO's revenue ($329M in 2024) is real trading revenue from multiple sources. The firm does appear to do some real trading activity — but the majority of the business model relies on the fee structure, not actual prop trading P&L.

---

## Corporate Structure

- **OMHC** (Otakar Marek Holding Company, or similar — the exact expansion of the abbreviation is not publicly confirmed): The Czech holding company that owns FTMO s.r.o. and related entities; also holds real estate investments.
- **FTMO s.r.o.**: Czech operating company, registered in the Commercial Register in Prague
- **FTMO Evaluation Global s.r.o.**: Related entity for international challenge operations
- **FTMO Trading Global s.r.o.**: Related entity for trading operations
- **FTMO (post-December 2025)**: Also now parent company of OANDA Global Corporation

Šuffner and Vašíček own OMHC equally.

---

## Platform and Technology Stack

### Platform History

| Period | Platforms Available |
|--------|-------------------|
| 2015–2019 | MT4 only |
| 2019–2022 | MT4 + MT5 |
| Late 2023 | MT4 + MT5 + DxTrade added |
| 2024 | MT4 + MT5 + DxTrade + cTrader (expanded) |
| 2025–2026 | MT4 + MT5 + cTrader + DxTrade (all four active) |

### MetaTrader History and the 2024 Crisis

FTMO began on MT4, which was the industry standard in 2015. As MT5 matured, FTMO added it; by 2024, MT5 clients had grown **15× since 2020**.

However, the MetaQuotes crackdown of February 2024 affected the broader industry (not FTMO specifically — FTMO had a more direct relationship with MetaQuotes as one of the larger prop firms). FTMO responded by diversifying its platform stack, adding DxTrade and expanding cTrader availability.

**The U.S. market problem**: MetaQuotes restricted MT4/MT5 for U.S. users of prop firms. FTMO's solution was the OANDA acquisition — OANDA's CFTC-registered status provides regulatory cover for offering MT5 to U.S. clients. FTMO is now the **only prop firm offering MT5 to U.S. clients**, per [Finance Magnates 2025](https://www.financemagnates.com/forex/prop-trading-on-metatrader-5-is-back-in-the-us/).

### DxTrade

Added in **late 2023**, DxTrade is a browser-based trading terminal developed by **Devexperts**. FTMO describes it as "a fully featured interface" offering:
- Web-native operation (no desktop installation required)
- Advanced charting
- Risk and order management tools
- Access to forex, indices, commodities, stocks, and cryptocurrencies

### cTrader

FTMO's cTrader offering grew significantly post-2024. Usage of cTrader "nearly quadrupled" in recent user growth metrics (per FTMO platform data). cTrader is FTMO's preferred non-MetaTrader platform for traders who want ECN-style transparency and a modern interface.

FTMO's cTrader is available at [ct.ftmo.com](https://ct.ftmo.com/).

---

## The FTMO Challenge and Verification Process

### Challenge Phase

- **Duration**: No time limit (removed — original 30-day limit was scrapped as a differentiator)
- **Profit Target**: 10% of account balance
- **Maximum Daily Loss**: 5% of account balance (equity-based, not balance-based in some versions)
- **Maximum Loss**: 10% overall account drawdown
- **Minimum Trading Days**: 4 days (must trade at least 4 different calendar days)

### Verification Phase

- **Duration**: No time limit
- **Profit Target**: 5% of account balance
- **Same drawdown rules as Challenge phase**

### Funded FTMO Account

Upon passing Verification:
- Trader receives a "funded" account (FTMO's capital at risk)
- Profit split: **80%** to trader, **20%** to FTMO (standard); scaling to **90%/10%** for consistently profitable traders
- Scaling plan: Accounts scaled up 25% after passing 3 months with 10%+ profit and no more than 5% drawdown in any month

---

## Financial Performance

### Key Metrics (2024, per OMHC financial disclosures)

| Metric | Value |
|--------|-------|
| Revenue (OMHC) | CZK 6.84 billion (~$329M USD) |
| Year-over-year growth | +53% |
| Net income | CZK 1.3 billion (~$62.5M USD) |
| Total assets | CZK 15 billion (~$721M USD) |
| Cash holdings | CZK 4.4 billion (~$211M USD) |
| Open trading accounts | 2.3 million (+33% YoY) |

### Historical Payouts

FTMO announced over **$450 million paid out to traders** over its first 10 years (2015–2025), per [Finance Magnates](https://www.financemagnates.com/forex/ftmo-announces-over-450-million-paid-out-as-prop-trading-firm-turns-10/).

### 2023 Comparison

- 2023 turnover: ~$213M USD
- 2023 EBITDA: ~$100M USD

---

## The MetaQuotes Breakup Story (Full Narrative)

FTMO's relationship with MetaQuotes was not the direct confrontation that smaller prop firms experienced. As a large, established firm, FTMO had more negotiating leverage. The "breakup" is more nuanced:

### Why FTMO Maintained MetaTrader

FTMO's regulatory structure and scale meant it had a more defensible MetaTrader relationship than smaller prop firms using grey labels. FTMO continued offering MT4 and MT5 throughout the 2024 crackdown.

### Why FTMO Added Alternatives

The MetaQuotes crackdown demonstrated **platform concentration risk**. FTMO responded preemptively:
- DxTrade added in **late 2023** (before the peak of the crackdown)
- cTrader usage was expanded
- Multiple platforms = resilience against any single vendor action

### The U.S. MetaTrader Gap

MetaQuotes' U.S. restriction left FTMO unable to serve U.S.-based MT5 users through its existing structure. The OANDA acquisition solved this:
- OANDA holds CFTC/NFA registration
- Under the OANDA regulatory umbrella, FTMO can offer MT5 to U.S. clients
- FTMO is the only prop firm to achieve this as of 2026

This is the strategic significance of the $250M+ OANDA acquisition: not just the OANDA business itself, but the regulatory infrastructure that allows FTMO to serve the enormous U.S. market with MetaTrader.

---

## Competitive Position (2025–2026)

### Why FTMO Dominates

1. **First-mover advantage**: 10-year head start on most competitors
2. **Brand recognition**: "FTMO" has become a generic term in some trading communities for funded accounts
3. **Financial strength**: $211M cash position allows absorbing market dislocations without solvency risk
4. **Geographic diversification**: Czech Republic base = outside direct CFTC jurisdiction; regulated entities in multiple zones
5. **Platform breadth**: Four platforms vs. most competitors offering one or two
6. **OANDA acquisition**: Regulatory and infrastructure moat that smaller competitors cannot replicate

### Competitive Threats

1. **Futures-native firms** (TopStep, OneUp Trader, Apex Trader Funding): U.S.-focused; operate under CFTC's existing futures framework without the MetaTrader regulatory ambiguity
2. **FundedNext**: Well-funded; aggressive expansion; entered U.S. via cTrader
3. **The5ers**: Differentiated model (longer evaluation, focus on consistent traders)
4. **Regulatory change**: If regulators classify funded challenges as regulated financial products, compliance costs would escalate

---

## Geographic Availability

FTMO operates globally with some restrictions:
- Not available to U.S. residents historically (OANDA acquisition changes this)
- Restricted in certain OFAC-sanctioned jurisdictions
- Czech Republic regulatory framework applies; no direct registration with CFTC/FCA historically

---

*Sources: [FTMO About page](https://ftmo.com/en/about/), [FTMO OANDA acquisition](https://ftmo.com/en/press-release/ftmo-completes-acquisition-of-oanda-from-cvc/), [FTMO platforms page](https://ftmo.com/en/ftmo-trading-platforms/), [Finance Magnates FTMO revenue $329M](https://www.financemagnates.com/forex/ftmos-parent-netted-over-62-million-on-329m-revenue-in-2024/), [Finance Magnates MT5 back in US](https://www.financemagnates.com/forex/prop-trading-on-metatrader-5-is-back-in-the-us/), [Finance Magnates FTMO 10 years](https://www.financemagnates.com/forex/ftmo-announces-over-450-million-paid-out-as-prop-trading-firm-turns-10/), [Otakar Šuffner profile](https://tradingfunder.com/otakar-suffner-ceo-and-co-founder-of-ftmo/), [Forbes FTMO cover story](https://ftmo.com/en/blog/forbes-the-ftmo-cover-story/)*
