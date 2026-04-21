# The Rise (and Shakeout) of Retail Prop Firms

## What Is a "Retail Prop Firm"?

A retail proprietary trading firm in this context is distinct from traditional Wall Street prop desks. The model is:

1. A trader pays a **challenge fee** (typically $50–$600) to take a simulated trading evaluation.
2. If the trader passes (hitting a profit target without breaching drawdown rules), the firm "funds" them with a simulated live account — typically $25K–$400K notional.
3. The trader trades that account; profits are split (typically 70–90% to trader, 10–30% to firm).
4. The firm makes money primarily on **challenge fees** (most traders fail); secondarily on the profit split for those who succeed.

This is not traditional prop trading (where a firm deploys its own capital to skilled employees). It is closer to a skill-monetization service combined with, in the most successful cases, a legitimate risk-managed trading operation.

---

## The Origins: Late 2010s

The funded trader model was nascent before 2015. A few firms like **TopStep** (founded 2012, originally TopstepTrader) pioneered it in futures markets, but the forex version was slow to develop.

**FTMO** is widely credited with proving the forex-prop model could scale:

### FTMO — The Founding Story

- **Founders**: Otakar Šuffner and Marek Vašíček, classmates at the Prague University of Economics.
- **Idea conceived**: 2013, when the founders were personal traders who lacked the capital to scale.
- **Bootstrapped development**: They couldn't afford to hire developers, so built the platform themselves over roughly two years.
- **Official launch**: **2015**, initially only in Czech Republic and Slovakia.
- **Platform**: MetaTrader 4 initially; later added MT5, cTrader, and DxTrade.

Per [FTMO's own blog and Forbes coverage](https://ftmo.com/en/blog/forbes-the-ftmo-cover-story/): "The founders had the idea back in 2013, but didn't have the money to hire professionals, so it took them about two years to develop it themselves."

FTMO's business structure: FTMO s.r.o. is the Czech operating company; OMHC is the parent holding company that also holds real estate assets. Šuffner and Vašíček own OMHC equally.

### Early Industry Landscape (2015–2020)

The forex prop firm segment grew rapidly after FTMO proved the model:

- **The5ers** launched (Israel-based, focuses on long-term funded accounts and slower evaluation)
- **Lux Trading Firm**, **FundedNext**, numerous others launched
- Search interest in "prop firms" grew **607%** between 2020 and 2024, per [Finance Magnates market sizing data](https://www.financemagnates.com/thought-leadership/taking-stock-of-the-retail-prop-trading-market/)
- By 2023, an estimated **600–700 retail prop firms** operated globally (before the 2024 shakeout)

---

## The Peak: 2021–2023

### COVID-19 and Retail Trading Boom

The COVID-19 pandemic created an unusual environment for prop firm growth:
- Lockdown-era retail trading enthusiasm spiked globally
- Zero-commission stock apps (Robinhood etc.) drove interest in markets
- Social media trading communities (r/wallstreetbets, TikTok trading influencers) normalized active trading
- Prop firms offered a low-entry-cost path to "trade with someone else's money"

### MyForexFunds — Peak Hype and Collapse

**MyForexFunds (MFF)** became one of the largest prop firms globally, with the CFTC alleging it had generated over **$310 million** from traders between 2021 and 2023.

MFF was operated by **Murtuza Kazmi** (CEO) and incorporated in Toronto, Canada.

#### The CFTC/OSC Action — August 2023

**August 2023**: Both the U.S. CFTC and the Ontario Securities Commission (OSC) simultaneously moved against MyForexFunds:

- The CFTC obtained a **temporary restraining order** and **asset freeze** in a U.S. federal court.
- The OSC filed parallel enforcement proceedings in Ontario.
- The businesses were shut down effectively overnight.

**The CFTC's allegations** included:
- MFF told customers they were trading real, live accounts against independent third-party liquidity providers
- In reality, customers were trading **simulated (demo) accounts** controlled entirely by MFF
- MFF acted as the direct counterparty, meaning it profited directly when traders lost
- Fraud and misrepresentation of material terms

Per [Finance Magnates](https://www.financemagnates.com/forex/310-million-prop-trading-fraud-regulators-freeze-assets-of-my-forex-funds/): "$310 Million Prop Trading Fraud: Regulators Freeze Assets of My Forex Funds."

#### The Plot Twist: Case Collapses

Despite the dramatic overnight shutdown, the legal case fell apart:

- A U.S. court **dismissed the CFTC's fraud case** against MFF.
- It emerged that CFTC representatives had **"deliberately mischaracterized a tax payment"** to obtain the freeze order — a serious procedural violation.
- A federal judge ordered the CFTC to pay **$3.1 million in attorney fees** as sanctions — virtually unprecedented against a federal regulator.
- Per [DeSilva Law Offices analysis](https://www.desilvalawoffices.com/articles/blog/2025/may/cftc-case-dismissed-my-forex-funds-controversy-h/): this marked the CFTC facing sanctions after case dismissal, a significant embarrassment.

As of April 2026, MFF announced plans to return client funds and has discussed relaunching operations. Per [MyForexFunds on X (April 2025)](https://x.com/MyForexFunds/status/1976287697615327260): "In August 2023, MyForexFunds was wrongfully shut down. The CFTC's case in USA has been dismissed and the unwinding process of Receivership in Canada is still ongoing."

---

## The MetaQuotes Crackdown — February 2024

### Background: The Grey-Label Problem

Most retail prop firms did not have a direct relationship with MetaQuotes. Instead, they accessed MT4/MT5 infrastructure through "grey labels" — a licensed MT5 broker would sub-license server access to a prop firm, which was technically outside MetaQuotes' intended use terms.

The model was financially problematic for MetaQuotes:
- Prop firms ran traders on **demo servers** (simulated accounts), which generated **zero licensing revenue** for MetaQuotes
- The grey-label broker bore the MetaQuotes relationship, but MetaQuotes was not compensated for prop firm activity
- As prop firms grew to millions of accounts, they consumed MetaQuotes server infrastructure without paying for it

### Regulatory Pressure Context

MetaQuotes also faced concerns about U.S. regulatory exposure:
- Prop firms were taking U.S. clients (even if they tried to disclaim regulatory compliance)
- The CFTC's rules on off-exchange retail FX are strict; demo-to-live account structures could be viewed as regulated activity
- MetaQuotes' grey-label brokers risked their own licenses by facilitating U.S. client access to prop firms

### Timeline of the Crackdown

**February 6, 2024**: **True Forex Funds** (Hungary-based) loses its MT4/MT5 licenses. MetaQuotes gave no advance warning.

> CEO Richard Nagy: *"Due to a non-sense reason, MetaQuotes has terminated our licenses, and therefore, we have to freeze our services TEMPORARILY... MetaQuotes did not give any prior warning, nor did they provide any chance to replace the unwanted provider."* — [FX News Group](https://fxnewsgroup.com/forex-news/retail-forex/exclusive-prop-trading-firm-true-forex-funds-shut-down-by-metaquotes-move/)

Note: True Forex Funds had also appeared on the CFTC's RED List (June 2023) for soliciting U.S. customers without registration.

**February 11, 2024**: **Purple Trading** (a licensed MT5 broker) terminates multiple prop firm clients:
- Funded Engineer
- AquaFunded
- Goat Funded Trader
- The Funded Trader
- Skilled Funded Trades

**Funded Engineer statement**: *"MT5 services for USA citizens and residents will soon be discontinued, not only for us but for the entire prop industry, within the next 2 to 8 weeks."*

**February 14, 2024**: **Blackbull Markets** terminates **Funding Pips** as a client.

> Blackbull's CBD Anish Lal: *"We're unfortunately in breach of our grey label license ability to offer this for prop firms, so we're forced to immediately shut down Funding Pips as a client."* — [Finance Magnates](https://www.financemagnates.com/forex/prop-trading-and-metaquotes-funding-pips-case-may-mark-the-end-of-mt-access-to-us-clients/)

> Funding Pips CEO "Khaled": *"MetaQuotes decided to abruptly halt services due to active US accounts, with no prior notice."*

MetaQuotes never issued a formal public statement explaining its policy. It acted through its licensed broker partners.

### Scale of the Shakeout

Between February 2024 and late 2025, the prop firm industry experienced unprecedented contraction:

- **80–100 prop firms** ceased operations globally — approximately **13–14%** of all global operators, per [VeritasChain analysis](https://veritaschain.org/blog/posts/2025-12-28-prop-trading-reckoning/)
- **True Forex Funds**: Announced permanent closure May 13, 2024; ~$1.2M in unpaid trader payouts (300 traders)
- **SurgeTrader**: Shut down May 24, 2024
- **The Funded Trader**: Paused March 28, 2024; admitted to over $2M in denied payouts
- **MetaTrader's prop-firm market share**: Dropped from **48% to 24%** within 9 months

### Beneficiaries of the Crackdown

Alternative platforms saw massive growth:
- **cTrader** (Spotware): "Finance Magnates named it the top trading platform for brokers in 2026"
- **DxTrade** (Devexperts): FTMO added DxTrade in late 2023
- **MatchTrader**: Multiple firms migrated
- **TradeLocker**: Significant prop firm adoption
- **Sirix**: Some uptake

Survey data from Finance Magnates (2024): 62% of traders still preferred MT5; 9% preferred MT4; **27% chose cTrader** — a significant gain from near-zero.

---

## Survivors and the 2025 Recovery

### FTMO's Dominance

FTMO emerged from the crisis as the undisputed market leader:

**Financial performance (2024, per OMHC financial disclosures)**:
- Revenue: **CZK 6.84 billion (~$329M USD)** — up 53% year-over-year
- Net income: **CZK 1.3 billion (~$62.5M USD)**
- Total assets: **CZK 15 billion (~$721M USD)**
- Cash: **CZK 4.4 billion (~$211M USD)**
- Open trading accounts: **2.3 million** (up 33% YoY)
- Historical trader payouts: **$450M+** since founding

**Platform evolution**: FTMO now offers MT4, MT5, cTrader, and DxTrade. MT5 usage grew 15× from 2020–2024. cTrader usage nearly quadrupled in recent years.

**OANDA acquisition (December 2025)**: FTMO acquired OANDA from CVC Capital Partners in a deal that required regulatory approval from five jurisdictions over eight months. Strategic rationale: OANDA provides FTMO with regulated broker infrastructure globally, allowing FTMO to offer MT5 in the U.S. (FTMO is now the only prop firm offering MT5 to U.S. clients, per [Finance Magnates](https://www.financemagnates.com/forex/prop-trading-on-metatrader-5-is-back-in-the-us/)).

### FundedNext and The5ers

**FundedNext**: 
- Opened a brokerage brand under Comoros registration
- Applied for licenses in Mauritius and Dubai
- Opened cTrader access to U.S. traders (via [TradeInformer report](https://tradeinformer.com/broker-news/prop-firm-fundednext-returns-to-us-through-ctrader))
- Re-entered U.S. market in 2025

**The5ers**:
- Israel-based; focuses on longer-duration funded accounts and forex
- Returned to U.S. market in 2025 via alternative platforms

### TopStep

- Futures-focused U.S. prop firm; less affected by MetaQuotes' FX-centric crackdown
- Partnered with **Plus500** (the Israeli CFD broker/exchange operator) in a major strategic deal during 2025
- Continues to serve the U.S. market with CME futures challenges

---

## Regulatory Horizon: 2025–2026

### CFTC

- CFTC finalized amendments to **Rule 4.7** (September 2024) updating portfolio requirements for Qualified Eligible Persons; compliance date March 26, 2025.
- The **Digital Asset Market Clarity (CLARITY) Act** passed the U.S. House in July 2025; if enacted, could require many crypto-focused prop firms to register with the CFTC as CTAs or CPOs.

### EU/UK

- UK FCA and EU ESMA examining whether funded challenges constitute regulated financial activity.
- Several firms preemptively obtained offshore brokerage registrations (Comoros, St. Lucia, Mauritius) to gain MetaTrader licenses, though none currently offer MetaTrader in the U.S.

### Expected Changes for 2026

Per [NYC Servers prop firm regulatory analysis](https://newyorkcityservers.com/blog/prop-firm-rule-changes-2026):
- Mandatory licensing in key jurisdictions
- Stricter KYC/AML requirements
- Formal profit-split transparency disclosures
- Potential CTA classification by CFTC
- Standardized news-trading blackout periods
- Increased capital adequacy standards

---

## Industry Size and Outlook

| Metric | Value | Source |
|--------|-------|--------|
| Peak firm count (2023) | ~600–700 globally | Industry estimate |
| Post-shakeout firm count | ~500–600 (after ~80–100 closures) | VeritasChain 2025 |
| Market TAM (eval fees only) | $2–4B annually | Finance Magnates |
| Forex & Prop Market cap 2026 | $7.14B | Business Research Insights |
| Projected market size 2035 | $24.55B (10.9% CAGR) | Business Research Insights |
| Search interest growth (2020–2024) | +607% | Finance Magnates |
| Futures vs. FX dominance shift | Futures now more-searched asset class among prop traders | Finance Magnates 2025 |

---

*Sources: [Finance Magnates MFF $310M fraud](https://www.financemagnates.com/forex/310-million-prop-trading-fraud-regulators-freeze-assets-of-my-forex-funds/), [MyForexFunds X post](https://x.com/MyForexFunds/status/1976287697615327260), [FX News Group True Forex Funds](https://fxnewsgroup.com/forex-news/retail-forex/exclusive-prop-trading-firm-true-forex-funds-shut-down-by-metaquotes-move/), [Finance Magnates MetaQuotes crackdown](https://www.financemagnates.com/forex/prop-trading-and-metaquotes-funding-pips-case-may-mark-the-end-of-mt-access-to-us-clients/), [Finance Magnates FTMO revenue](https://www.financemagnates.com/forex/ftmos-parent-netted-over-62-million-on-329m-revenue-in-2024/), [FTMO OANDA acquisition](https://www.oanda.com/group/media-center/press-releases/oanda-acquired-by-ftmo/), [VeritasChain 2024 reckoning](https://veritaschain.org/blog/posts/2025-12-28-prop-trading-reckoning/), [FTMO About page](https://ftmo.com/en/about/), [DeSilva Law CFTC](https://www.desilvalawoffices.com/articles/blog/2025/may/cftc-case-dismissed-my-forex-funds-controversy-h/)*
