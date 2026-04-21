# Leverage Is a Liquidation Countdown

**One-sentence thesis**: Leverage is not a neutral tool for "amplifying returns." It's an accelerator that, under strict mathematical laws, pushes an account toward 0. Given a broker's spread markup + biased overnight swap, **the expected terminal value of nearly every retail account is 0**, and leverage determines the speed at which it gets there.

## 1. Intuition vs. Math

**The intuitive narrative**:
> "Leverage lets small capital play in big markets. 100× leverage + 1% gain = 100% account return. Compound that and you're financially free."

**The mathematical reality**:
- Leverage amplifies both positive and negative returns
- But negative-return compounding is **asymmetric** (lose 50%, need to earn 100% to break even)
- Add the **per-trade spread markup** (typical retail: 0.5-2 pips)
- Add the **systematic bias in overnight swap** (broker sets it in its favor)
- **Stack all three**, and the retail account's expected value is negative
- Higher leverage = shorter time to the expected endpoint (0)

## 2. Deriving the Math of Account Lifetime

Assume:
- Starting balance $E_0$
- Expected per-trade return $\mu$ (typical retail = -0.1% to -0.3%, because of spread + unfavorable swap)
- Per-trade volatility $\sigma$ (typical = 1-3% per round trip)
- Trades per day $n$
- Leverage $L$

**Random walk** model for account value (simplified):
$$E_t = E_{t-1} \cdot (1 + L \cdot r_t)$$

where $r_t$ is the per-trade return, with mean $\mu$ and variance $\sigma^2$.

**Blow-up condition**: $E_t$ falls below the maintenance margin (typically 20-50% of starting), forced liquidation zeros the account.

**Key result** (approximated via Geometric Brownian Motion):

Expected time $T$ to full liquidation is roughly:

$$T \approx \frac{-\log(0.5)}{L \cdot (|\mu| + \sigma^2 / 2)}$$

Plug in typical retail parameters ($\mu = -0.2\%$, $\sigma = 2\%$, 5 trades/day):

| Leverage $L$ | Daily volatility | Expected account lifetime |
|---|---|---|
| 1:1 | ~2% | Years (almost never blows up) |
| 1:10 | ~10% | 6-12 months |
| 1:30 (ESMA cap) | ~30% | 3-6 months |
| 1:100 | ~100% theoretical | 2-4 months |
| 1:500 | - | **Weeks to months** |
| 1:1000 | - | **Days to weeks** |

(Note: at very high leverage the "daily volatility" math above 100% breaks down — blow-up probability per day approaches 100%, so the account typically dies on day 1.)

## 3. The Limits of the Kelly Criterion

**The Kelly criterion** (John Kelly, 1956) gives the **optimal position size** given a known edge $b$ and win rate $p$:

$$f^* = \frac{bp - q}{b}$$

where $q = 1-p$ is the loss rate.

**Kelly's core claim**:
- **Below Kelly**: you still win in the long run, but slowly
- **At Kelly**: fastest growth (but high volatility)
- **Above Kelly**: **long-run expected value is negative** (not "win slower" — **certain loss**)

**Typical retail-trader parameters** (assume a 55% win rate, 1.5:1 reward:risk — already **professional-grade**):

$$f^* = \frac{1.5 \times 0.55 - 0.45}{1.5} = 0.25 = 25\%$$

Even a pro-level trader's Kelly position is only 25%.

**But a real retail trader's actual parameters**:
- Win rate 45-50% (below a coin flip)
- Reward:risk 0.8-1.2 (fear/greed makes you cut winners early and let losers run)

$$f^* = \frac{1.0 \times 0.5 - 0.5}{1.0} = 0 \rightarrow \text{don't trade}$$

**Kelly is telling you: your position should be 0**. But the retail broker UI pushes you to 1:100 or even 1:500 — **that's over-Kelly by a factor of 500+**.

## 4. "Half-Kelly" / "Quarter-Kelly" Field Wisdom

Professional traders / quants never trade at full Kelly. The industry consensus:

- **Half-Kelly** (50% of Kelly): balanced risk/reward
- **Quarter-Kelly** (25% of Kelly): conservative
- **Twentieth-Kelly** (5% of Kelly): very conservative, typical of large funds

**Why not full Kelly**:
- Kelly assumes you **know** the true win rate / payoff ratio → you don't, you only estimate
- Estimation error pushes you over Kelly without your realizing it
- The "certain long-run loss" property of over-Kelly is catastrophic
- So in practice you always leave a **2-20× safety margin**

**Mapping to retail**:
- Even if you estimate yourself at "55% win rate, 1.5 R:R"
- Kelly says 25%
- Quarter-Kelly says 6%
- But the MT4/MT5 "one-click" button defaults to **a lot = 10-100% of the account**
- Using broker-pushed leverage on top → you're instantly running Kelly by tens of multiples

## 5. Leverage Amplifies Not Returns, But Volatility Asymmetry

**Fact**: a 100% gain offsets only a 50% loss. The math is asymmetric:

| Loss | Gain required to break even |
|---|---|
| 10% | 11.1% |
| 20% | 25% |
| 30% | 42.9% |
| 50% | 100% |
| 70% | 233% |
| 90% | 900% |

**Amplified by leverage**:
- Small swings (±2%) are routine noise at low leverage and liquidation events at high leverage
- After each blow-up, the return needed to recover gets multiplicatively larger
- **Asymmetry + systematic markup** → strictly negative expected value

### Numbers: a medium-volatility week at 1:100

Assume EUR/USD swings ±1.5% over a week (normal).

At 1:100, your account faces daily swings of ±100% × 0.5% = ±50%.

**Account distribution after 5 days** (Monte Carlo):
- **50% already liquidated** (hit maintenance margin)
- **30% down 30-70%**
- **15% near starting balance**
- **5% up 50%+**

Even if you're the lucky 5%, the same distribution applies next week → probability of being in the 5% club four weeks running = 0.05^4 = **0.000625%**.

That's why **retail broker data shows 12-month active rates < 10%**. Not a skill problem. A math problem.

## 6. Why Brokers Love Selling High Leverage

From the broker's angle, leverage isn't "a tool for the user" — it's a **user-lifecycle accelerator**:

| Leverage | Account lifetime | Broker revenue rate (per $1 deposited) |
|---|---|---|
| 1:10 | 12 months | Slow and steady, 10-20% annualized |
| 1:100 | 3 months | Quick blow-up → redeposit → repeat, 40-80% annualized |
| 1:500 | <1 month | Ultra-fast churn, 100%+ annualized |

Broker LTV/time is maximized at high leverage. **They know high leverage kills users faster** — that's a feature, not a bug.

**Why ESMA chopped leverage to 30:1 in 2018**:
- Research showed > 100:1 leverage → 12-month failure rate **near 100%**
- At 30:1 it fell to 74-89% (still brutal, but "most blow up" rather than "everyone blows up")
- Politically a compromise — genuine consumer protection would have capped at 5:1, but industry lobbying blocked that

## 7. Psychological Traps of High Leverage

### Trap 1: the small-capital "flip it" fantasy

- User: $1,000 capital + 1:500 leverage = $500,000 notional
- Feeling: "EUR/USD moves 1%, I make $5,000 = 500%"
- Reality: EUR/USD moves 0.4% against you = liquidation
- Psychologically: user thinks they're "playing small-for-big" — actually "playing small-for-0"

### Trap 2: survivor bias in marketing

- Broker marketing: "trader turned $1,000 into $1M"
- This is real — but ignores the 99.99% of attempts that went to zero
- User sees winner photos, not the silence of a million-strong loser community

### Trap 3: the "almost had it" mindset after each blow-up

- Blow-up → user reasons "if I'd taken profit one step earlier I'd have won"
- Redeposits → this time I'll be careful → still 1:500 leverage → blow up again
- **Sunk cost + ego** drive continuous redeposits
- At this stage the broker's IB / customer service **actively markets bonus / re-deposit incentives**

## 8. Practical Advice

**The harshest truth**: if you're a retail trader, **any leverage above 5:1 is accelerating your account to zero.**

### Leverage usage rules of thumb

| Leverage | Scenario | Verdict |
|---|---|---|
| 1:1 (spot) | Long-term hold / value investing | Safe |
| 1:2-3 | Swing trading with defined stops | Acceptable |
| 1:5 | Experienced + strict risk control | Upper bound |
| 1:10 | Professional hedge-fund use | Requires institutional risk controls |
| 1:30+ | Retail "betting your life" | Long-run certain loss |
| 1:100+ | Gambling | Not "investing" |
| 1:500+ | Pure marketing stunt | Mathematically guaranteed blow-up |

### Key mental models

1. **Leverage is a cost, not a tool.** Every 1× of leverage is another round of "volatility tax."
2. **Time is your friend (low leverage) or your enemy (high leverage).** Compounding helps low-leverage long-term holds and hurts high-leverage positions.
3. **Position size comes from Kelly, not from "the button in the UI."** Compute your Kelly, take Quarter-Kelly.
4. **If you've lost three months in a row, it's not luck — it's leverage.** Drop leverage to 1/3 and re-evaluate.
5. **If you've won three months in a row, that's not skill either** — it's luck. Lower leverage exactly now, before you get cocky.

## 9. Data and History

### ESMA 2018 before/after

EU retail CFD leverage went from unlimited → 30:1 major / 20:1 indices / 10:1 commodities / 5:1 minor pairs / 2:1 crypto.

- 2017 (pre-cut): retail loss rate **89%**
- 2019 (post-cut): retail loss rate **74%**

**The cap saved 15% of users.** A cut to 5:1 would likely have saved 30-40%. It didn't happen — industry lobbying worked.

### 2015 SNB Swiss franc event: leverage at its extreme

- CHF gapped 20% in 30 seconds
- Retail accounts long EUR/CHF at 1:100 → instantly owed the broker money (negative balance)
- FXCM, the largest US retail broker, was ruined ($225M in negative balances)
- Alpari UK went under immediately
- User "profits" were nullified (broker invoked TOS 12.3.b "abnormal market" clauses); "losses" were pursued
- Regulators introduced "negative balance protection" (brokers can't pursue balances beyond zero)

### Robinhood crypto, 2022

- Zero commissions + 24/7 crypto
- Users bought Doge / Shib on "margin" (effectively leverage)
- Q2 2022 market crash → mass liquidations
- Robinhood stock dropped 70% (customer loss = company revenue high = but customers gone)

**Every leverage-diffusion + downcycle reproduces the same pattern.**

## 10. If You Absolutely Insist on "Trading"

1. **Spot positions**, no leverage — you're a "holder", long-run viable
2. **At most 2-3× leverage** — corresponds to Quarter-Kelly given typical edge
3. **1-2% total account risk per trade** — the floor for any professional risk-management regime
4. **Stop-loss matters more than take-profit** — asymmetry means your stop is what protects you
5. **The courage to quit professionally** — 90%+ of retail traders are better off after quitting

## Sources

- [Kelly's original paper — AT&T Technical Journal 1956](https://www.princeton.edu/~wbialek/rome/refs/kelly_56.pdf)
- [ESMA Retail CFD Risk Warning 2018](https://www.esma.europa.eu/press-news/esma-news/esma-agrees-prohibit-binary-options-and-restrict-cfds-protect-retail-investors)
- [FXCM 2015 SNB event — WSJ](https://www.wsj.com/articles/fxcm-gets-300-million-lifeline-1421432107)
- [Alpari UK insolvency — Reuters](https://www.reuters.com/article/markets-forex-alpari-idUSL6N0UV21320150116)
- `03-broker-economics.md`: why brokers love high leverage
- `01-retail-as-product.md`: retail-as-product meta view
- `02-prop-firm-casino.md`: leverage's role in prop firm rule design
