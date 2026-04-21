# Prop Firm = Casino + Skill Contest Hybrid

**One-sentence thesis**: A prop firm's challenge phase is essentially a casino; the funded phase depends on whether the firm actually hedges or just keeps running pure B-book. The industry's 19% net margin comes from a statistically engineered failure rate.

## 1. Business Model Breakdown

### Surface Narrative

> "We discover talented traders, give them capital to trade, and share the profits. You pay a small entry fee to prove yourself — pass, and we split the winnings."

### Actual Flow

```
You pay a $100-1000 challenge fee
    ↓
Get a demo account ($10K-$200K of virtual capital)
    ↓
30-day target: profit ≥ 10%
Rules: daily loss ≤ 5%, max drawdown ≤ 10%, min trading days ≥ 4-10
    ↓
85-93% fail (industry estimate) → fee goes to prop firm
7-15% pass
    ↓
Get a "funded" account (still mostly demo)
    ↓
Same rules continue (daily loss / max DD / min days)
    ↓
80/20 or 90/10 profit split
    ↓
Real payout rate: after first pass, most traders wash out within 3-6 months
```

## 2. How the Rules Are "Mathematically Engineered" for Failure

Typical FTMO-like parameters:

| Rule | Value |
|---|---|
| Starting capital | $100,000 (demo) |
| Profit target | $10,000 (10%) |
| Daily loss cap | $5,000 (5%) |
| Max drawdown | $10,000 (10%) |
| Minimum trading days | 10 distinct days |
| Time window | 30 days |

**The math problem**:

- Hitting 10% in 30 days ≈ 120% annualized
- Most professional hedge funds run 15-25% annualized long-term; you're being asked to run 5× a hedge fund's pace
- The only "viable" path = high leverage + tight stops + large size
- But high leverage + large size blows through the 5% daily loss with high probability
- Even at a 55% edge and 2:1 R:R (already professional-grade), probability of hitting max DD inside 30 days is still > 60%

**In other words**: under **Kelly-optimal** play, the ruleset has almost no safe solution. **It's designed for you to fail.**

This isn't coincidence — prop firm operators have iterated these parameters hundreds of times, each tweak balancing "15-20% pass rate" against "make challengers still feel they have a shot."

## 3. Industry Numbers

### FTMO is the biggest + most transparent

- **2024 revenue**: $329M (CZK 6.84B)
- **2024 net profit**: $62M
- **Net margin**: 19%
- **10-year cumulative payouts to traders**: $450M (2015-2025, official)
- **Cumulative accounts**: 2.3M+
- **Cumulative traders actually paid out**: not officially disclosed; industry estimate 150-200K

### Comparison to casinos

| Segment | Typical net margin |
|---|---|
| Las Vegas Strip casino | 5-15% |
| Macau VIP rooms | 3-8% |
| Online sportsbook | 5-10% |
| **Prop firm leader (FTMO)** | **19%** |
| Online poker room (PokerStars) | 10-15% |

Prop firm net margins are higher than casinos — no physical footprint (no buildings, no dealers, no free drinks), and a psychological edge on top: participants **voluntarily pay the entry fee** because they think they're "investing in skill" rather than "placing a bet."

### Failure rates

Not uniformly disclosed, but estimates:

- **Challenge phase failure rate**: 80-90%
- **Phase 2 / Verification failure rate**: 30-40% (of those who passed phase 1)
- **Funded-stage failure (rule-break washout)**: 60-75% within 6 months
- **Challenge entrant → first payout**: ~3-7% of entrants make it
- **First payout → sustained profitability over 12 months**: drops again to 1-2%

## 4. MyForexFunds: The Indictment Case That Took the Model to Its Extreme

**MyForexFunds (MFF)** rocketed from 2020-2023 to become the second-largest prop firm globally (by client count). On 2023-08-28 the CFTC sued them in the New Jersey federal court (Case 1:23-cv-11808).

**Core CFTC allegations**:

1. MFF told traders their funded accounts traded in the "real market" — but **never routed a single order to external markets**
2. All "funded" accounts were still demo / B-book internal accounts
3. When a trader actually became meaningfully profitable, MFF manufactured "server issues," "slippage," or "rule violations" to cancel the account
4. Cumulative "fraud" of $310M (CFTC's term)

**In May 2025** the Special Counsel report showed procedural problems with the CFTC investigation and some charges were dismissed — but the core factual claim (no real-market hedging) **was not refuted.**

**Why this matters**: MFF isn't an outlier. Its model is **the extreme version of every challenge-based prop firm.** The differences:

- Other prop firms' funded phase **may** run partial real hedging (especially for bigger accounts)
- MFF took "zero hedging" as its entire operating model
- The reason they got sued wasn't the business model itself — it's that **they explicitly promised "real accounts" and didn't deliver.**

## 5. Why Prop Firms Aren't Pure Casinos

### Some people really do make money consistently

- Poker rooms also have 90% losers, but we don't call them casinos
- The distinction: **is there a skill dimension?**
- Prop firms' skill dimension is real: risk discipline, emotional control, market read, position sizing
- Top prop traders run Sharpe 1.5-2.0 annualized — that's not luck

### Some firms actually hedge profitable traders

- FTMO's large-account cohort ($100K+ funded) is rumored in the industry to **partially A-book to LPs**
- This is risk management: if a trader actually starts winning big, staying pure B-book means unbounded risk
- FTMO's 2025 OANDA acquisition was precisely to **own a broker leg** and handle A-book flow better
- This separates them from pure casinos: no casino ever pivots a "VIP prop bet" into "we'll hedge the VIP for him."

## 6. Identifying the Three Types of Prop Firm

| Type | Characteristics | Casino element |
|---|---|---|
| **Pure B-book** | Both challenge and funded are demo, no external hedging | Close to 100% |
| **Hybrid** | Challenge 100% B-book, funded A-books top traders | 80-90% |
| **Real capital allocation** | Real live-account access after passing (rare) | 20-30% |

**How to identify** (for regular users):

- Does it have **its own broker subsidiary or deep broker partnership?**
  - FTMO-OANDA (2025 acquisition) → hybrid, trending toward real
  - The5ers own MT5 → pure B-book leaning
  - FundedNext, FundingPips, BluBerry, etc. (mid/small) → basically all pure B-book
- **Payout transparency**
  - FTMO proactively publishes cumulative payouts annually → relatively transparent
  - Most small props don't disclose cumulative payouts at all
- **Violation-adjudication transparency**
  - Public rules + appeals process → relatively above-board
  - "Editorial discretion" → warning sign

## 7. The Deeper Meaning of the 2024 MetaQuotes Purge

**In February-March 2024** MetaQuotes abruptly revoked MT5 licenses for True Forex Funds, Funding Pips, and others. Stated reason: "no US retail clients allowed."

**Actual reason** (industry consensus):

- Prop firms used MT5 demo services to run an entire side business that bypassed the broker payment chain
- MetaQuotes **couldn't collect per-account fees** from these demo accounts
- Prop firms were doing tens of millions in monthly revenue; MetaQuotes got zero
- MetaQuotes' "license-holder doctrine" lets them revoke any license for any violation at any time
- Using "US regulation" as cover — really a play to capture the prop firm vertical, a market valued at $12B (2025 industry estimate)

**Consequences**:

- Some props migrated to cTrader / DxTrade / Match-Trader
- FTMO accelerated development of its own ct.ftmo.com
- Prop firm M&A accelerated (FTMO-OANDA, Kraken-NinjaTrader)
- The industry is evolving from "broker white-label + MT5" to "own the tech stack"

## 8. Advice for Individuals

If you're considering a prop firm challenge:

1. **Treat the challenge fee like a challenge fee** — not an investment. The $100 has a > 85% probability of evaporating.
2. **If you pass phase 1 once, it's probably partly luck.** Repeat attempts are pointless — the ruleset didn't change your long-run expectation.
3. **Only consider prop after you already have 6+ months of stable profitability on a real account.** Don't use prop to "practice skills."
4. **Pick firms carefully**: use the three-type framework above.
5. **Exit threshold**: give yourself a "3 consecutive failures and you're out" rule. Sunk-cost fallacy is the real enemy.

As an observer / developer / researcher:

- Prop firms are the latest evolution of **regulatory arbitrage** (retail FX → prop firm → next wave: tokenized AI signals?)
- The industry will persist; people will keep losing and the operators will keep making a lot of money
- 2024-2026's MetaQuotes purge + MFF case + FTMO-OANDA are **three milestones in industry maturation** — and there's more to come

## Sources

- [FTMO 2024 earnings report - Finance Magnates](https://www.financemagnates.com/forex/ftmos-parent-netted-over-62-million-on-329m-revenue-in-2024/)
- [FTMO 10-year anniversary + $450M cumulative payout](https://www.financemagnates.com/forex/ftmo-announces-over-450-million-paid-out-as-prop-trading-firm-turns-10/)
- [MyForexFunds CFTC complaint - Finance Magnates](https://www.financemagnates.com/forex/310-million-prop-trading-fraud-regulators-freeze-assets-of-my-forex-funds/)
- [MFF CFTC case dismissal report - DeSilva Law](https://www.desilvalawoffices.com/articles/blog/2025/may/cftc-case-dismissed-my-forex-funds-controversy-h/)
- [MetaQuotes purge of prop firms - FX News Group](https://fxnewsgroup.com/forex-news/retail-forex/exclusive-prop-trading-firm-true-forex-funds-shut-down-by-metaquotes-move/)
- [Retail prop trading market size - Finance Magnates](https://www.financemagnates.com/thought-leadership/taking-stock-of-the-retail-prop-trading-market/)
- `01-retail-as-product.md`: Retail-as-product meta view
- `../02-platforms/ftmo.md`: FTMO deep dive
- `../05-trends/03-prop-firm-consolidation.md`: Prop firm shakeout
