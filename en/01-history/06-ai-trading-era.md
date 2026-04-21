# The AI Trading Era (2020-2026)

The **Third Major Shift** in retail trading history happened at the resonance point between the COVID stay-at-home wave of 2020 and the explosion of LLMs. The first two shifts: the 2005 release of MT4 gave retail a usable terminal, and the 2017 crypto boom gave retail the ability to trade 24x7. The third: **AI turned "analysis" from a scarce resource into a commodity.**

## Timeline at a Glance

```
2020-03  COVID lockdowns -> retail FX / equities / crypto surge in parallel
2020-06  Robinhood adds 3M new signups in a single quarter (vs. 3M in all of 2019)
2021-01  GameStop WallStreetBets short squeeze -> "meme stocks" enters the lexicon
2021-10  Numerai crosses $1B AUM; the ML-signal marketplace takes shape
2022-11  ChatGPT launches -> retail gets its first usable AI tool
2023-03  BloombergGPT paper -> institutional LLM applications in finance go public
2023-06  TradingView Pine Script v5 + AI Ideas -> retail AI assistance arrives
2024-01  Spot BTC ETF approval -> institutional AI infrastructure covers crypto for the first time
2024-02  MetaQuotes purges Prop Firms -> the industry's de-MT5-ification begins
2024-10  SEC issues its first "AI washing" fine against an adviser
2024-12  Pine Script v6 ships with ML-related primitives
2025-02  Bybit $1.5B hack -> regulatory urgency around crypto + AI intensifies
2025-08  FTMO announces AI Coach -> Prop + AI fusion
2025-12  FTMO acquires OANDA -> consolidation among the big players begins
```

## I. The Structural Reasons for the Third Major Shift

### The Evolution of Retail Tooling

| Generation | Years | What retail could do | Bottleneck |
|---|---|---|---|
| **Retail FX 1.0** | 2000-2005 | Open an account, place orders | No standardized terminal |
| **Retail FX 2.0 (the MT4 era)** | 2005-2015 | Write EAs, auto-trade, use technical indicators | Lots of tools, but poor signal quality |
| **Retail FX 3.0 (crypto + mobile)** | 2015-2022 | Trade 24x7, trade from a phone, copy-trade | Analysis still done by hand |
| **Retail FX 4.0 (the AI era)** | 2022+ | LLM-assisted analysis, auto-generated strategies | "Commoditization of analysis" — but alpha is still scarce |

**Each generation solved the prior generation's "operational bottleneck"** — but **none of them solved the alpha generation problem**. The AI era will not either.

### The Core Cognitive Shift

- 2005-2022: **Analysis is a scarce resource** (requires years of study and professional tools)
- 2022+: **Analysis is a $20/month ChatGPT subscription** (for the first time, retail tools are on par with professional traders')
- But **analysis is not alpha** (see the mathematical argument in `../07-essentials/07-copy-trading-survivorship.md`)
- Result: **everyone is using AI to do the same "analysis"** -> signal homogenization -> alpha gets arbitraged away

## II. 2020-2022: COVID and the Retail Rush

### COVID's Triple Impact

**Impact 1: Trading from home**
- Global lockdowns in March 2020 -> workers stuck at home -> for the first time, vast amounts of time to stare at screens
- Robinhood, eToro, and Binance saw 3-10x growth in new signups
- In Q2 2020, retail accounted for roughly **25%** of U.S. equity volume (vs. 15% in 2019)

**Impact 2: Stimulus checks (U.S.)**
- First stimulus round in April 2020 ($1,200 per adult)
- A portion flowed into brokerage accounts
- Peak inflows at Robinhood

**Impact 3: Low rates / liquidity glut**
- Fed and ECB cut rates to zero
- Risk assets (equities, crypto) rallied across the board
- For new traders, the first experience of markets was a **bull market** (dangerous)

### The 2021 Meme Stock Revolution

**The GameStop episode in January** (see `../02-platforms/robinhood.md`):
- WallStreetBets -> short squeeze -> retail vs. hedge funds
- For the first time, **a retail community could move institutional players**
- Robinhood's buy-side restriction triggered a "retail awakening"
- AMC, BlackBerry, BB&B and other "meme stocks" followed

**Longer-term consequences**:
- Retail came to believe "community > institutions"
- But in the subsequent drawdowns, **a vast number of retail traders lost 90%+**
- This is the origin of the **"community-driven" decision-making pattern that defines retail in the AI era**

### 2022: The Crypto Bear Market and the FTX Collapse

- November 2022: FTX files for bankruptcy -> $8B user asset shortfall
- Crypto retail's trust in "centralized institutions" collapsed
- But **the structure did not change**: everyone kept using CEXes — they just switched venues.

## III. November 2022: The ChatGPT Watershed

When ChatGPT launched, almost no one realized what it meant for trading.

### Wave One (First half of 2023): **Dumb Experiments**

- YouTube videos of the "Teach ChatGPT to trade stocks" variety exploded (millions of views)
- Thousands of "AI trading bot" open-source projects appeared on GitHub
- Most were **GPT-3.5 + price data + simple signals**
- **Forward tests failed at scale**
- Media hype about "AI replacing traders" — in reality, every test suffered from **data leakage + backtest overfitting**

### Wave Two (Second half of 2023): **Institutions Start Integrating**

- **BloombergGPT** paper (March): Bloomberg's internally built 50-billion-parameter financial LLM
- **Renaissance, Citadel, Two Sigma** used GPT-4 heavily internally for research augmentation
- But **the core order-routing logic was still classical ML** (LSTM, XGBoost, and the like)
- **It wasn't LLMs replacing quant; it was LLMs assisting quant**

### Wave Three (2024+): **Tokenization and Marketing**

- **Numerai + LLM tournament** (2024)
- **Kaito AI** ($40M raised)
- **Dash2Trade**, **SingularityDAO**, and other "tokenized AI signal" projects
- **Retail AI trading apps**: Bitget Moonshot, Bybit AI Trader, eToro AI Insights
- **Prop Firms + AI**: FTMO AI Coach, Apex AI risk controls

Details: `../05-trends/05-ai-in-trading.md`

## IV. 2020-2026 Milestones for Key Companies and Products

### Robinhood

- 2020: $180M -> $959M in revenue (5x growth)
- July 2021: Nasdaq direct listing
- January 2021: GameStop episode
- 2022: crypto bear market + 40% layoffs
- 2023-2025: recovery and diversification (IRAs, credit cards)

### Binance

- 2020 revenue of $8B -> $12B in 2024
- November 2023: $4.3B DOJ settlement; CZ steps down as CEO
- 2024+: compliance push and global rebuild

### Coinbase

- April 2021: NASDAQ direct listing
- June 2023: SEC lawsuit (dismissed in Q1 2024)
- 2024: biggest winner from the Bitcoin ETF (custody revenue surges)

### FTMO

- 2020 revenue of ~$50M -> $329M in 2024
- February 2024: MetaQuotes crackdown (limited impact on FTMO)
- December 2025: acquired OANDA for CZK 10B

### MetaQuotes

- 2020-2023: retained absolute dominance
- February 2024: Prop Firm purge -> lost meaningful market share
- October 2024: announced end-of-life for the old MT4
- 2025+: position under threat but still at the top

### Traditional Exits

- **Mt. Gox** continued paying out creditors in 2024-2025 (finally, ten years later)
- **FXCM** exists in name but is effectively dead (a subsidiary of Jefferies)
- **Alpari UK** disappeared entirely after collapsing in 2015
- **FTX** liquidation is ongoing in 2024-2025; users recovered part of their funds
- **MyForexFunds** shut down after the CFTC sued in 2023
- **Celsius / Voyager** partial asset recovery for users after the 2022 crypto bankruptcies

## V. Defining Features of the "AI Trading Era"

### Feature 1: Information abundance + signal scarcity

- Every minute produces a flood of news, tweets, and analysis
- LLMs let anyone digest all of it
- Result: **everyone is seeing an "LLM-processed" version of the world** -> homogenization
- **Real alpha comes from information asymmetry** — and AI has reduced that asymmetry

### Feature 2: Execution speed has been democratized; signal quality has not

- Python + REST API = any ordinary developer can build a trading bot in a few hours
- But **institutional market makers' tick-to-trade is measured in microseconds** (retail will never match it)
- For retail, **the only rational move is to back off from the millisecond race to the hour/day timeframe**

### Feature 3: Regulation falls further behind

- 2022-2024: crypto regulatory chaos (SEC vs. CFTC jurisdictional turf war)
- 2023+: AI regulation is just getting started (SEC AI washing, EU AI Act)
- Every "financial innovation" runs **3-5 years ahead of the regulators**
- What happens during that window = **the next FTX / MFF**

### Feature 4: Retail shifts from "investing" to "participating"

- 2000-2015: retail took investing seriously (multi-year holds)
- 2015-2022: retail started to go short-term and leveraged (crypto + the Robinhood UI)
- 2022+: retail **chases memes, AI narratives, and short-term volatility**
- This is the end state of **casinoification**

## VI. The Three Major Trends of 2024-2026 (In Progress)

### Trend 1: Platform consolidation

- FTMO + OANDA (Prop + broker)
- Kraken + NinjaTrader (crypto + futures broker)
- Expect more broker + exchange + prop vertical integration in 2026-2028

### Trend 2: AI commoditization vs. alpha scarcity

- Everyone can run an "AI strategy"
- But **most AI strategies are classical strategies with LLM wrapping**
- True alpha still lives in **institutional proprietary data**
- Retail AI tools mainly **improve efficiency** — **they do not improve win rate**

### Trend 3: Regulation vs. geographic arbitrage

- European, U.S., and U.K. regulators are gradually tightening (especially around Prop Firms and AI)
- Low-friction jurisdictions like Dubai, BVI, and the Seychelles absorb refugee brokers
- Regulatory divergence accelerates in 2026-2028

## VII. Predictions for Post-2026

These aren't optimistic or pessimistic — they are **structural analysis**:

1. **The next big scandal lands in 2026-2027** (see `../07-essentials/09-scandals-are-features.md`) — likely an AI trading bot story, or one of the firms left standing after prop firm consolidation
2. **Global retail FX + CFD growth slows** (regulation + market saturation)
3. **Crypto + traditional finance integration accelerates** (BTC ETF -> ETH ETF -> other coin ETFs)
4. **The EU AI Act's impact on FX / CFD starts showing up in 2026**
5. **The Prop Firm industry may narrow to a Top 10 by 2028** (the mid and long tail get squeezed out)
6. **Mobile + AI assistants become table stakes** (both MT5 and TradingView are building toward this)
7. **DEX UX catching up to CEX takes until 2030+** (not soon)
8. **Domestic platforms in China and Russia rise** (against a backdrop of de-dollarization)

## VIII. Comparison with the Previous Two Major Shifts

| Dimension | 2005 MT4 revolution | 2017 crypto-native revolution | 2020-2022 AI / COVID revolution |
|---|---|---|---|
| Trigger | MT4 release + commoditization of CySEC licenses | BTC bull market + crypto exchanges going live | COVID + ChatGPT |
| Core change | Retail got a professional terminal for the first time | Retail got a 24x7 market for the first time | Retail got AI tools for the first time |
| Top winners | Alpari, FxPro, FXCM | Binance, Coinbase, Bybit | A matured Robinhood, crypto giants |
| Top losers | Traditional interbank brokers | Traditional equity brokers (slow to react) | Mid-tier retail brokers (AI replaced their customer service) |
| Regulatory response | ESMA MiFID II 2018 (13 years later) | U.S. FIT21 2024 (7 years later) | EU AI Act 2024 (2 years later — fastest in history) |
| Retail net-loss rate | 74-89% (ESMA measurement) | ~80% (crypto bear market data) | Projected 80-90% (still early) |

**The common pattern**: every shift opens a **brief retail opportunity window** (early movers occasionally strike it rich), which is then rapidly commoditized -> back to the casino baseline.

## References

- [ChatGPT launch - OpenAI](https://openai.com/blog/chatgpt)
- [BloombergGPT paper on arXiv](https://arxiv.org/abs/2303.17564)
- [GameStop short squeeze - Wikipedia](https://en.wikipedia.org/wiki/GameStop_short_squeeze)
- [FTX Chapter 11](https://restructuring.ra.kroll.com/FTX/)
- [MetaTrader 4 - Wikipedia](https://en.wikipedia.org/wiki/MetaTrader_4)
- [Binance DOJ settlement 2023 - CFTC](https://www.cftc.gov/PressRoom/PressReleases)
- [EU AI Act - European Commission](https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai)
- [Robinhood S-1 IPO 2021](https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001783879)
- `00-timeline.md`: the overall timeline
- `04-crypto-native-era.md`: the crypto-native era
- `05-prop-firm-rise.md`: the rise of Prop Firms
- `../05-trends/05-ai-in-trading.md`: forward-looking analysis of AI
- `../07-essentials/07-copy-trading-survivorship.md`: why "AI signals" cannot persist
