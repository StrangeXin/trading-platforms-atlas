# MetaQuotes & the MetaTrader Family: Origin to Present

## Company Founding

MetaQuotes Software Corporation was established in **2000** in Kazan, Russia by **Renat Fatkhullin**, a Russian software entrepreneur. The company's first product was **FX Charts**, a web-based charting application for retail FX trading, which represented a genuinely novel product in the nascent internet trading space of 2000.

Per [WikiFX's history of MetaQuotes](https://www.wikifx.com/en/newsdetail/202209282994685243.html) and [MetaQuotes' own company page](https://www.metaquotes.net/en/company), Fatkhullin remains CEO and is the public face of the company. Beyond Fatkhullin, the beneficial ownership structure is not publicly disclosed (see also `04-relationships/01-ownership.md`).

The company operates a dual-jurisdiction structure:
- **Development & technical support**: Kazan, Russia
- **Sales, marketing & legal entity**: Limassol, Cyprus (MetaQuotes Ltd, a Cyprus-registered company)

---

## Product Evolution: MetaTrader 1 through 3

### MetaTrader (MT1/MT2/MT3) — 2002–2004

MetaQuotes released a sequence of trading terminals in the early 2000s:

- **2001**: Second major revision of the MetaQuotes application, expanding tradeable instruments to include CFDs alongside currency pairs.
- **Early 2002**: **MetaTrader 3** released — added futures contracts and expanded the scripting language to MQL II, enabling basic algorithmic trading by clients.
- **2003**: **MetaTrader CE** (Windows CE) and **MetaTrader for Palm** released — MetaQuotes pioneers mobile trading roughly three years before the smartphone era.

These early versions established MetaQuotes' pattern of iterating faster than competitors and giving client-side scripting as a key differentiator.

---

## MetaTrader 4 (MT4) — 2005 Launch

### Release Date

**July 1, 2005.** MetaTrader 4 was a complete ground-up redesign, not an incremental update.

### Key Technical Innovations

1. **MQL4 language**: A purpose-built C-like scripting language enabling Expert Advisors (EAs) — automated trading bots that could run directly on the client terminal and against the Strategy Tester backtesting engine.
2. **Strategy Tester**: Historical backtesting with a built-in data feed, making algo development accessible to retail traders.
3. **New client-server architecture**: Redesigned protocol for more reliable broker-server communication.
4. **Charting & indicators**: Multi-timeframe charting with a library of built-in technical indicators, plus the ability to write custom indicators in MQL4.

### Network Effect

MT4 created a massive ecosystem:
- Thousands of EAs and indicators shared on forums (later the MQL5 Marketplace)
- A generation of retail traders learned trading on MT4 first
- Brokers competed on MT4 spreads and server quality, not platform quality
- Per [LiteFinance's MT4 history](https://www.litefinance.org/blog/for-beginners/what-is-metatrader/), MT4 became the dominant retail FX platform for the following 15+ years

### Market Penetration

By the late 2000s, MT4 was the de facto standard. Virtually every retail FX broker either licensed MT4 directly or white-labeled it. Competitors (including Currenex, ActForex) failed to dislodge it because:
- Zero marginal cost for traders to learn — community knowledge was transferable across brokers
- MetaQuotes kept licensing costs reasonable ($5,000 setup + ~$1,750/month/white-label)
- No serious open-source alternative existed

---

## MetaTrader 5 (MT5) — 2010 Launch

### Release Date

**June 1, 2010.** MT5 was again a complete re-architecture, not backward-compatible with MT4.

### Key Differences from MT4

| Feature | MT4 | MT5 |
|---------|-----|-----|
| Asset classes | Forex, CFDs | Forex, CFDs, Stocks, Futures, Bonds, Crypto |
| Scripting language | MQL4 | MQL5 (C++-like, OOP, faster) |
| Order execution | Market/Pending | Market/Pending + depth-of-market |
| Backtesting | Single-threaded | Multi-threaded (uses all CPU cores) |
| Order accounting | FIFO optional | Hedging and netting both supported |
| Market Depth | No | Yes (Level 2 display) |
| Economic calendar | No | Built-in |

### Why MT4 Survived Alongside MT5

MT5's initial launch was complicated by regulatory issues:
- U.S. CFTC's FIFO rule at the time meant MT5's hedging model was controversial for U.S. brokers
- The MQL4 → MQL5 migration was non-trivial; EA developers had to rewrite bots from scratch
- Brokers already had MT4 server infrastructure and were reluctant to pay for parallel MT5 setup
- Per [HandWiki's MT5 article](https://handwiki.org/wiki/Software:MetaTrader_5), "brokers who had invested in MT4 infrastructure resisted migration for over a decade"

### MT5 Gradual Adoption

MT5 adoption accelerated in the 2015–2020 period as:
- MT5 expanded beyond FX to cover stocks and futures, making it attractive to multi-asset brokers
- Newer broker entrants defaulted to MT5 (no legacy MT4 investment)
- MetaQuotes began restricting new MT4 license issuance (formalized in Q1 2025)

Within FTMO specifically, the number of MT5 clients grew more than **15×** from 2020 to 2024, per [FTMO platform data](https://www.financemagnates.com/forex/ftmos-parent-netted-over-62-million-on-329m-revenue-in-2024/).

---

## MetaTrader Mobile

MetaQuotes has maintained iOS and Android apps for MT4 and MT5 since the smartphone era began. By the early 2020s these were among the most downloaded finance apps globally.

### The 2022 App Store Removal

**September 23, 2022**: Apple silently removed both MT4 and MT5 from the global App Store.

The removal was never formally explained by Apple. Industry speculation centered on two theories:

1. **Russia sanctions linkage**: MetaQuotes is registered in Cyprus but operationally based in Russia. Following Russia's February 2022 invasion of Ukraine, Western sanctions created pressure. A social-media post from [@awongaw](https://twitter.com/awongaw/status/1573435877610618880) (quoting industry sources) stated: "MetaQuotes is run by CEO Renat Fatkhullin. They are from Cyprus & work directly with Russia. EU is looking to block it."

2. **Fraud/scam association**: MetaTrader platforms were heavily used in investment scam operations ("pig butchering"). Apple's App Store fraud team may have been responding to user complaints — a theory broker FP Markets and others raised in their educational write-ups.

**MetaQuotes' official response**: "We do not believe that Apple's actions are linked in any way with the Western sanctions on Russia."

Android (Google Play) versions remained available throughout.

**March 2023**: After approximately six months, Apple reinstated both MT4 and MT5 on the App Store. MetaQuotes did not publicly detail what changed. Per [Mirage News](https://www.miragenews.com/apple-reinstates-metatrader-mt4-mt5-on-app-store-961954/), the reinstatement was quiet and without announcement.

---

## MetaQuotes' 2024 Prop Firm Crackdown

(Full detail in `01-history/05-prop-firm-rise.md` and `05-trends/01-metaquotes-v-tradingview.md`)

**February 2024**: MetaQuotes began systematically terminating MT4/MT5 licenses for brokers who provided grey-label access to prop trading firms — particularly those serving U.S. clients.

Key events:
- **February 6, 2024**: True Forex Funds (Hungary) loses license; CEO says "MetaQuotes did not give any prior warning."
- **February 11, 2024**: Purple Trading terminates multiple prop firm clients.
- **February 14, 2024**: Blackbull Markets terminates Funding Pips. CBD Anish Lal: "We're unfortunately in breach of our grey label license ability to offer this for prop firms, so we're forced to immediately shut down Funding Pips as a client."

MetaTrader's prop-firm market share dropped from **48% to 24%** within 9 months, per Finance Magnates data.

---

## MT4 End of Life — 2025

**Q1 2025**: MetaQuotes halted issuance of all new MT4 licenses. No new broker partners or white-label vendors can onboard MT4; existing licensees retain access.

**July 1, 2025**: MetaQuotes ended support for older builds of both MT4 and MT5. Desktop terminals running older builds lost broker connectivity. Minimum required builds:
- MT4: Build 1440 (released February 21, 2025)
- MT5: Build 4755 (released December 13, 2024)

Per [Finance Magnates](https://www.financemagnates.com/forex/metaquotes-to-end-support-for-older-metatrader-versions-in-december/), this is widely interpreted as MetaQuotes beginning the slow wind-down of MT4 support while concentrating investment in MT5.

---

## Current State (2026)

- **MT4**: Still active at hundreds of brokers; no new licenses issued; receives only security patches, no features.
- **MT5**: Primary MetaQuotes product; licensed by "hundreds" of brokers globally (exact count not disclosed); continues receiving feature updates.
- **MQL5 Marketplace**: Thousands of commercial EAs, indicators, and scripts sold through MetaQuotes' own app store.
- **MetaQuotes' ownership**: Renat Fatkhullin is confirmed CEO and at least a major beneficial owner. Full ownership structure not publicly disclosed. Company headquartered in Cyprus for legal purposes; R&D remains in Russia.
- **U.S. market**: MetaQuotes restricts MT5/MT4 access for U.S.-based prop firm clients. FTMO re-entered the U.S. market after acquiring OANDA (December 2025), giving it a regulatory bridge to offer MT5 in the U.S. legitimately.

---

## MetaQuotes Licensing Model (Summary)

| Tier | Cost (approximate) | Who uses it |
|------|-------------------|-------------|
| White Label MT5 | $5,000 setup + $1,750/month | Mid-size retail brokers |
| Full MT5 server license | Much higher; varies | Large brokers, banks |
| Grey Label (through white-label broker) | Included in broker's cost; no direct MetaQuotes relationship | Prop firms historically |

Grey labels were the practice MetaQuotes cracked down on in 2024: prop firms accessing MetaTrader infrastructure through a licensed broker without a direct MetaQuotes relationship, and without paying MetaQuotes directly.

---

*Sources: [MetaQuotes Company Page](https://www.metaquotes.net/en/company), [MetaTrader 4 Wikipedia](https://en.wikipedia.org/wiki/MetaTrader_4), [HandWiki MT5](https://handwiki.org/wiki/Software:MetaTrader_5), [ValiantCEO MetaQuotes history](https://valiantceo.com/a-brief-history-of-metaquotes-and-its-products/), [WikiFX story](https://www.wikifx.com/en/newsdetail/202209282994685243.html), [Finance Magnates MetaQuotes crackdown](https://www.financemagnates.com/forex/prop-trading-and-metaquotes-funding-pips-case-may-mark-the-end-of-mt-access-to-us-clients/), [FX News Group True Forex Funds](https://fxnewsgroup.com/forex-news/retail-forex/exclusive-prop-trading-firm-true-forex-funds-shut-down-by-metaquotes-move/), [Mirage News App Store reinstatement](https://www.miragenews.com/apple-reinstates-metatrader-mt4-mt5-on-app-store-961954/)*
