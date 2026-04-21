# Retail Traders Are the Product, Not the Customer

**One-sentence thesis**: In the retail trading ecosystem, you don't pay for a service — you *are* the commodity being sold. Every player in the chain bleeds you via your "activity," and nobody's business depends on you winning money.

## 1. Looking Like vs. Actually

| Looking like | Actually |
|---|---|
| Broker gives you access to global markets | Broker earns your spread markup + the money you lose (B-book) |
| The platform (MT4/5) is a neutral tool | The platform charges brokers license fees, brokers claw it back from you |
| Prop firms discover talented traders | Prop firms earn challenge fees + an 85%+ failure rate |
| Data vendors provide quotes | Data vendors charge brokers subscription fees, brokers claw it back from you |
| YouTube gurus teach you financial freedom | Gurus earn affiliate splits — brokers pay them 30-50% rev share on your deposits |
| Regulators protect retail | Regulators raise industry entry barriers, which protects incumbents |

Every cash flow in the chain **originates from your deposit.** Every intermediate layer takes a cut.

## 2. Where a $1,000 Deposit Goes (Typical Retail FX Broker)

Say you deposit $1,000 at a CySEC-licensed broker. Average trajectory over 12 months:

```
$1,000 deposit
  ↓
Broker holds it (your account balance)
  ↓ you start trading
┌──────────────────────────────────────┐
│ Typical 12-month path (ESMA data):   │
│                                      │
│  70-89% probability your balance     │
│  goes to zero or near-zero           │
│  Median real loss: $700-800 gone     │
│                                      │
│  Where that $700-800 goes:           │
│    - Broker B-book internalization: ~$500 │
│    - Spread markup (cumulative):    ~$150 │
│    - Overnight swap:               ~$50-100 │
│    - Slippage / liquidity cost:    ~$50   │
│                                      │
│  Broker then redistributes:          │
│    - MetaQuotes license:           ~$10   │
│    - Data vendor (TwelveData etc.): ~$5   │
│    - Prime Broker fee:             ~$10   │
│    - IB / affiliate rev share:    ~$100-200│
│    - CySEC compliance + marketing: ~$100  │
│    - Net profit:                  ~$100-200│
└──────────────────────────────────────┘
```

This isn't a conspiracy — it falls out naturally from **ESMA's own public data + industry-standard margin structures.**

## 3. Where Each Role's Revenue Actually Comes From

### Broker

- **Surface**: Provides market access, charges spread / commission
- **Reality**: 70-80% of revenue is **B-book internalization** (you lose = broker earns 100%)
- The rest comes from A-book markup + swap + dormancy fees + withdrawal fees
- Retention matters more than conversion, so the UI is engineered end-to-end to "make you trade more"

### Platforms (MT4/MT5/TradingView/cTrader)

- **Surface**: Software tools
- **Reality**: **Brokers' CRM + acquisition funnel**
- MT5 server license: $20-50K / broker / year + per-account fees
- TradingView broker integration: $50-500K / broker / year
- These fees ultimately come out of the broker's markup = out of your pocket

### Prop Firms

- **Surface**: "Discover talent + allocate capital"
- **Reality**: **Challenge fees are the main business**
- FTMO 2024: $329M revenue, $62M net profit (19% margin — higher than Las Vegas casinos at 5-15%)
- Most prop firms' "funded" capital is demo — you never actually touch real money
- Details in `02-prop-firm-casino.md`

### Data Vendors

- **Surface**: Selling quotes
- **Reality**: Tiered feed sales to brokers / exchanges / algo traders
- Bloomberg Terminal: $27,000 / seat / year (institutional)
- Refinitiv Eikon: $20,000+ / year
- TwelveData / Polygon (retail-friendly): $50-500 / month
- Retail traders rarely pay directly; brokers subscribe and claw it back via markup

### Finfluencers / IBs (Introducing Brokers)

- **Surface**: Education bloggers / signal providers
- **Reality**: Brokers pay IBs 30-50% rev share on your deposits, plus a cut of your losses
- This is the actual business model of every YouTube / TikTok / Discord / Telegram "trading guru"
- They make the most during the honeymoon period — **right after you deposit but before you blow up**
- Once you liquidate and quit, they push the next person to open an account

### Exchanges (Crypto / Equities)

- **Surface**: Neutral venue
- **Reality**: Charge listing fees (crypto: $1-5M per token), trading fees (0.01-0.1%), market-maker rebates, proprietary market making
- Crypto exchanges also double as broker + custodian + MM, with layered conflicts of interest — see `05-crypto-vertical-conflict.md`

### Regulators

- **Surface**: Consumer protection
- **Reality**: Set industry entry barriers + collect annual fees + raise compliance costs (MiFID II compliance cost went from $10K/year to $500K+/year) → wipe out small players, protect incumbents
- A "30:1 leverage cap" *looks* like retail protection — it's really **industry self-insurance** (prevents mass blowups from triggering political pressure)

## 4. The Three Fates of Retail

Per ESMA + industry data, the distribution of a typical retail account over 12 months:

| Outcome | Share | Profile |
|---|---|---|
| **Fully wiped + exits** | 50-60% | Account zeroes within 3-6 months of first deposit, never re-deposits |
| **Losing but keeps depositing** | 25-35% | Average input→output ratio 3:1; the largest single pool of losses |
| **Small profit / flat** | 7-15% | Low trading volume, brokers consider them not worth retaining |
| **Persistently profitable** | **2-5%** | Brokers force-route this cohort to A-book so they can't be internalized |

Retail broker business models **depend on the second cohort** — losing but re-depositing users. They're the highest-LTV "customers."

## 5. How This Differs From a Regular Casino

| Dimension | Casino | Retail FX |
|---|---|---|
| Player win rate | Mathematically < 50% | Mathematically < 50% (derived from spread + leverage) |
| Skill component | Partial (poker) / none (slots) | Partial — a small number really can win consistently |
| House rake | 2-5% vig per hand | 0.1-2 pip spread + overnight swap per round-trip |
| Regulatory category | Gambling | Financial services |
| Marketing legitimacy | "Entertainment, small bets" disclaimer | "Investment, wealth building, passive income" — encouraged |
| Addictive-design acknowledgment | Openly admitted | Denied, but the UI is identical |

**Key difference**: Casinos are legally "gambling" and can't be sold to minors; retail FX is legally "financial services" and anyone can play. The latter's social harm is more invisible — and larger.

## 6. Who Actually Makes the Most Off Retail

Ranked by revenue capture from the "wealth transfer" out of retail:

1. **Retail brokers** (CySEC-stack: Plus500, Exness, XM, FxPro, etc.) — the biggest beneficiary
2. **Prop firms** (FTMO and other leaders) — challenge-fee business is outsized margin
3. **MetaQuotes** (MT4/MT5 license + per-account fees)
4. **Prime Broker / LPs** (serve the brokers, skim from the brokers)
5. **Crypto exchanges** (retail + proprietary market making)
6. **Data / platform vendors** (TradingView, etc.)
7. **Finfluencer / IB networks**
8. **Regulators / license intermediaries**

## 7. How to Break Out

If you genuinely want to do retail trading:

1. **Acknowledge the rules of the game first**: this is a negative-sum game (for you); you need a **big enough edge** to cut through the chain's cost stack
2. **Cut intermediaries**:
   - Go directly to a Tier-2 broker (IC Markets, Pepperstone) instead of a small retail shop
   - ECN or commission-based, avoid markup brokers
   - Avoid copy trading, signal subscriptions, and paid courses
3. **Cut leverage**: 1:5 to 1:10 is a rational ceiling; beyond that you're racing against time
4. **Extend the time horizon**: intraday has the worst cost structure; focus on swing / positional (weeks)
5. **Courage to exit**: the highest-EV action a retail trader can take is often **not trading**
6. **If you want to do this as a career**: be the broker or the prop firm, not the trader. Details in `03-broker-economics.md`

## 8. Key Numbers

- **Global retail FX daily turnover**: $400-700B (BIS 2022)
- **Global active retail FX accounts**: ~15-20M (2024 industry estimate)
- **Average account lifetime at one broker**: 3-6 months
- **Retail customer LTV (net)**: $100-500 (CySEC broker data)
- **Retail CAC**: $50-200
- **Industry total annual revenue (retail FX / CFD)**: $10-15B (Finance Magnates Intelligence)
- **Share of global FX**: 5-10%

## Sources

- [ESMA retail CFD risk disclosure (74-89% loss rate)](https://www.esma.europa.eu/press-news/esma-news/esma-agrees-prohibit-binary-options-and-restrict-cfds-protect-retail-investors)
- [BIS Triennial Central Bank Survey 2022](https://www.bis.org/statistics/rpfx22.htm)
- [FTMO 2024 earnings (Finance Magnates)](https://www.financemagnates.com/forex/ftmos-parent-netted-over-62-million-on-329m-revenue-in-2024/)
- `02-prop-firm-casino.md`: What prop firms actually are
- `03-broker-economics.md`: Broker profit structure
- `../04-relationships/02-liquidity-chain.md`: The liquidity chain
- `../01-history/03-retail-fx-boom.md`: Retail FX history
