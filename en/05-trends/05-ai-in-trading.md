# Three Waves of AI in Trading (2020–2026)

LLMs + machine learning + on-chain data are fueling a post-2020 "new cycle" of AI trading. Compared to the earlier "quant revolution" (mathematicians arriving in the 1990s) and the "HFT revolution" (FPGAs and microsecond wars in the 2000s), this is the third wave — the combination of **generative AI + retail-scale distribution**.

## 1. Background: Three Historical Waves of Quant Trading

```
Wave 1: Mathematicians + statistical arbitrage (1988-2008)
  - Renaissance Medallion, D.E. Shaw, Two Sigma
  - Traders hiding PhD / physics-department backgrounds
  - Strategies: mean reversion, stat arb, pair trading, volatility arb

Wave 2: HFT + infrastructure arms race (2005-2015)
  - Citadel Securities, Virtu, Jump Trading, Tower Research
  - Strategies: market making, latency arb, sub-millisecond winners
  - Stack: colo + FPGA + microwave + private fiber

Wave 3: AI + retail-scale distribution (2020-2026)
  - LLMs (GPT, Claude), time-series ML (Temporal Fusion Transformer), on-chain LLMs
  - Numerai, Kaito AI, QuantConnect, AI prop firms
  - Strategies: sentiment, narrative trading, AI signal aggregation
  - Stack: **retail-accessible LLM APIs**, public datasets, Colab notebooks
```

**The core of Wave 3**: **anyone with $20/month and basic coding skills can run AI trading experiments**. That is unprecedented.

## 2. Three Concrete Frontiers

### Frontier 1: LLMs as Signal Generators

**The approach**: use GPT-4 / Claude / Llama to process news / earnings / social media and output "buy / sell / neutral" signals.

**Representative projects (2024–2026)**:

- **Kaito AI** (founded 2023, raised $40M in 2024): on-chain + social media sentiment aggregation → trading signals
- **BloombergGPT** (released 2023): Bloomberg's proprietary in-house finance LLM
- **LLM trading bots on GitHub** (2023–2026): tens of thousands of open-source projects
- **Numerai + AI**: added an LLM tournament in 2024 (using LLMs for feature engineering)

**Actual performance** (industry research 2024–2026):

- Signal Sharpe of 0.3–0.8 (barely above noise)
- Minuscule strategy capacity (a single $1M+ allocation crushes the signal via slippage)
- **Most "AI signals" disappear in forward testing**
- The few with real alpha get absorbed by institutions almost immediately

**The fundamental problem**:
- LLM output overlaps heavily with **market consensus** (LLM training data is historical news)
- Real alpha comes from **information the market hasn't priced in yet** — something LLMs are nearly incapable of finding
- Unless your LLM is wired into **institution-only proprietary data** (Bloomberg terminal feeds, satellite imagery, etc.)

### Frontier 2: AI Bots + Tokenized Signals

**The approach**: wrap an AI trading strategy into a "token" so retail buyers can purchase the token = purchase AUM exposure to the strategy.

**Representative projects**:

- **Numerai + NMR token**: machine learning tournament; best models earn NMR rewards
- **SingularityDAO** (2022–2024): an "AI hedge fund" governed by AGI
- **Dash2Trade** (2022–2024): AI trading signals, $D2T presale token
- **BabyDAO**, **Fetch.ai**, **Autonolas**, etc.: assorted "AI agent economy" projects

**2024–2025 results**:
- Most **token prices went to zero** (post-2022-peak bear market + real returns falling short of hype)
- A few projects (Numerai) survived, but at a fraction of the advertised scale
- On "AI tokenized signals", the **2025 industry consensus is: bubble + a handful of survivors**

**Why most of them failed**:
1. **Token economics** and **trading strategy** have **misaligned incentives** (token issuers earn off FOMO, not off alpha)
2. **Scale problem**: genuine alpha strategies have **limited capacity**; tokenization floods capital in → strategy stops working
3. **Compliance grey zone**: the SEC has started classifying these tokens as "securities"

### Frontier 3: AI Prop Firms (A New Species, 2024–2026)

**The approach**: Prop Firm + AI for trader evaluation / trade assistance / risk management.

**Representative examples**:

- **FTMO launched "FTMO AI Coach" in 2024**: uses an LLM to analyze traders' trading journals and offer suggestions
- **Traderoom**: AI analysis of statistical risk across challenge participants
- **Apex Trader Funding** added AI risk controls in 2025 → automatic detection of "copy traders" (TOS violators)
- **More aggressive**: in 2025–2026 a handful of prop firms experimented with "AI funded accounts" — applicants submit an AI strategy, the prop firm evaluates it and runs it live

**The controversy**:
- Authors of genuinely alpha-generating AI strategies **don't need a Prop Firm** — they can trade their own capital or get poached by institutions
- "AI strategies" that actually enter AI Prop Firms = dressed-up **traditional strategies with LLM decoration**
- **Economically identical to a traditional Prop Firm**, just with a marketing refresh

## 3. The Retail AI Trading App Boom

**2023–2026 saw an explosion of retail AI trading apps**:

- **Bitget Moonshot** (crypto): AI recommendations for meme coins about to pump
- **Bybit AI Trader** (2024): LLM-generated trading strategy recommendations
- **eToro AI Insights** (2024): LLM-powered post-trade reviews of a user's trading history
- **Robinhood Snacks** (2023, LLM-generated market summaries — not trading signals)
- **TradingView Ideas + AI Co-pilot** (2024): LLM-assisted technical analysis interpretation

**The numbers**:
- Global "AI Trading App" registered users by Q4 2024: ~15M (third-party estimate)
- Average account balance: $500–1500 (**below traditional broker retail averages**)
- User profile: **ages 22–35, first-time traders, crypto + stocks blend**

**The problems**:
- Most "AI recommendations" are just **dressed-up RSI / MACD**
- Real alpha models **will not end up in retail apps** (institutions keep them)
- Same survivorship bias issues as other **retail trends** (copy trading, social trading)

## 4. Institutional-Grade AI Trading: What's Actually Happening

### How Jane Street, Citadel, and Renaissance Actually Use AI

- **Renaissance Technologies** (Medallion Fund): **has used ML since the 1990s**, but as a **proprietary black box**
- **Citadel Securities**: post-2020, ML became the core market-making signal
- **Jane Street**: OCaml + ML for market making
- **Two Sigma**: the largest-scale ML-driven hedge fund

**How this differs from the Wave 3 retail AI craze**:

| Dimension | Institutional | Retail |
|---|---|---|
| Data | Proprietary + alternative data (satellite, credit card, shipping) | Public APIs |
| Compute | Thousand-GPU clusters + CPU farms | A single MacBook |
| Talent | PhD + 15 years of experience + $1M salary | Hobbyists |
| Infrastructure | Own colo + FPGA + fiber | Cloud instances |
| Transaction costs | < 1 bp | > 10 bp |
| Alpha source | Proprietary signals | "Public signals" from public APIs |

**Retail AI trading has no institutional data / compute / talent advantage**. This isn't "democratization of technology" — it's **democratization of marketing**.

### What Institutions Actually Use LLMs For

- **Research acceleration**: LLMs rapidly digest earnings / news / research reports
- **Code generation**: auto-writing backtest / strategy code
- **Anomaly detection**: monitoring massive data sources to surface irregular patterns
- **Trader augmentation**: giving human traders LLM-powered "assistants"

**But**:
- **Signal generation** is still traditional ML (LSTM, Transformer, Gradient Boosting)
- LLMs are purely **augmentation** for human traders, **not replacement**
- This is a completely different scenario from "retail AI trading"

## 5. The Regulatory Response in the AI Era

### The SEC's 2024 AI Guidance

- 2023–2024: the SEC released multiple AI risk guidance documents
- Primary focus: **"AI washing"** (companies exaggerating AI usage)
- February 2024: the SEC fined two investment advisers $400K for false AI marketing claims
- Expect more AI trading regulation in 2025–2026

### EU AI Act 2024

- AI in finance is classified as "high-risk"
- Algorithms must be **transparent + explainable + auditable**
- Poses a direct challenge to black-box LLM trading signals

### The Core Regulatory Problem

- **Explainability** of AI models (LLMs in particular are black boxes)
- Liability assignment (if an AI model causes losses, is it the model vendor's or the user's fault?)
- Model drift + data contamination (risk of stale training data)
- **There is no good answer** — regulators are still feeling their way through it

## 6. What Actually Happened in 2025–2026

### Already happened

- **Numerai** added an LLM tournament in 2024
- **Perplexity Finance** (launched Q4 2024): AI search specializing in finance
- **Bloomberg GPT** upgraded to v2 (multimodal) in 2024
- **Binance** launched AI-powered smart order routing in Q3 2024
- **Kaito AI** raised $40M in 2024
- **FTMO AI Coach** launched in 2024
- **TradingView Pine Script v6** added ML-related APIs in 2024

### Expected in 2026+

- Further consolidation of AI Prop Firms (possibly mirroring the FTMO-OANDA merger pattern)
- Retail "AI hedge fund" apps (funds for retail investors + AI signals)
- Native AI market-making at CEXs (Binance / OKX scaling out in-house AI desks)
- AI agents capturing MEV on DEXs (auto market-making + front-running)
- The first "large-scale AI trading scandal" (probably Q2–Q4 2026)

## 7. Practical Advice for Retail Traders

### Which AI Tools Are Actually Useful

- **LLMs as research accelerators** (digesting news / earnings) — YES
- **LLMs as sentiment assistants** — fine, but don't treat them as your primary signal
- **LLMs for backtest code** — YES, huge productivity boost
- **LLMs generating trading signals** — basically useless
- **AI trading bot subscriptions** — almost all scams
- **AI token presales** — stay away

### Where the Real Edge Actually Lives

- **Not more AI, but better of the following**:
  1. **Unique data** (your information edge from being deep in some industry / community)
  2. **Longer time horizons** (retail can hold 5–10 years; institutions can't)
  3. **Lower trading frequency** (less cost + avoids HFT competition)
  4. **Risk management** (most retail traders die from position sizing, not from signals)

**AI will not help the average retail trader beat the market**. It lets you process more data, but the information edge **still comes from the data itself**.

## 8. AI × Regulation Predictions (2026–2030)

1. **Black-box LLM trading signals banned in the EU and U.S.** (unless auditable)
2. **AI-driven retail apps required to disclose "AI contribution"**
3. **AI Prop Firms become regulated** (similar to today's CFD brokers)
4. **Open-source models + regulatory sandboxes** (an ML analogue to MiFID II's Clarity Note)
5. **Institutional AI keeps running ahead** — regulation is always 3–5 years behind

## References

- [Numerai — Wikipedia alternative](https://numer.ai/)
- [BloombergGPT paper](https://arxiv.org/abs/2303.17564)
- [SEC AI washing enforcement 2024](https://www.sec.gov/newsroom/press-releases/2024-36)
- [Kaito AI official site](https://www.kaito.ai/)
- [EU AI Act - European Commission](https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai)
- [TradingView Pine Script v6 announcement](https://www.tradingview.com/blog/en/pine-script-v6-has-landed-48830/)
- [FTMO official blog](https://ftmo.com/en/blog/)
- `../07-essentials/07-copy-trading-survivorship.md`: why most "AI signals" suffer from survivorship bias
- `../07-essentials/02-prop-firm-casino.md`: the Prop Firm model (AI variants follow the same logic)
- `../05-trends/04-copy-trading-evolution.md`: historical evolution of copy trading
- `../01-history/04-crypto-native-era.md`: the crypto-native era backdrop
