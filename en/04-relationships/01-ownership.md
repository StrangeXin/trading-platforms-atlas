# Trading Platform Ownership Trace

"Who owns whom" is the ground-floor map for understanding this industry's political motives. The fight over technology roadmaps is ultimately a game between a handful of private / family-held / PE-controlled companies.

---

## 1. MetaQuotes (MT4 / MT5)

- **Registered**: currently Cyprus (Limassol)
- **Founded**: 2000 in Kazan, Russia; founder Renat Fatkhullin (still CEO)
- **Equity**: private; held by family / key employees. Never raised outside capital, never listed
- **Revenue**: not disclosed. Industry estimate for 2024 total revenue $300M+ (server licenses + value-added services)
- **Employees**: ~300
- **Russia factor**:
  - 2022 Apple App Store **pulled MT4/MT5 mobile versions** for six months due to Russia sanctions
  - Gradually reinstated in 2023
  - Publicly emphasizes Cyprus HQ, downplays Russia connection
- **Core assets**:
  - MT4 server license + client (all platforms)
  - MT5 server license + client (all platforms)
  - MQL5 community (MQL5.com / Marketplace / Signals / VPS)
  - MetaTrader dedicated VPS

**Key dynamic**: starting in 2024, **cleansing of prop firms** — revoking licenses from MyForexFunds, True Forex Funds, and others; forcing FTMO / FundedNext to pivot to DxTrade / cTrader. See [`05-trends/03-prop-firm-consolidation.md`](../05-trends/03-prop-firm-consolidation.md).

Sources:
- [MetaQuotes official About page](https://www.metaquotes.net/en/company)
- [Apple Reinstates MetaTrader on App Store — Mirage News](https://www.miragenews.com/apple-reinstates-metatrader-mt4-mt5-on-app-store-961954/)
- Cyprus Registrar of Companies filings

---

## 2. Spotware Systems (cTrader)

- **Registered**: Limassol, Cyprus (same city as MetaQuotes, literally coffee-shop-chain distance apart)
- **Founded**: 2011 by a group of engineers who left MetaQuotes (industry open secret)
- **Equity**: private
- **Products**:
  - cTrader Desktop / Web / Mobile
  - cTrader Copy (copy trading)
  - cAlgo (competitor to MQL5, uses C#)
  - cBroker (broker back-office)
- **Positioning**: respectable alternative to MT5, pushing institutional-grade features + transparent Level II order depth
- **Adoption**: much smaller than MT5, but got a growth pop in 2024 thanks to prop firm migration

Sources:
- [Spotware website](https://spotware.com/)
- Older FX media (LeapRate / Finance Feeds) 2011–2013 deep-dive coverage

---

## 3. Devexperts (DxTrade)

- **Registered**: U.S. + St. Petersburg, Russia (U.S./Russia dual-track operations)
- **Founded**: 2002 in St. Petersburg
- **Equity**: private
- **Products**:
  - DxTrade (the MT5 alternative prop firms commonly use)
  - DxFeed (market data)
  - DxCharts (charting component)
  - Large amount of institutional custom work
- **Clients**: CQG, TD Ameritrade, E*Trade, Interactive Brokers, Tastytrade
- **Key dynamic**: became the go-to replacement for FTMO and other prop firms migrating off MT5 in 2024

Sources:
- Devexperts website + LinkedIn company profile
- FTMO mentions DxTrade partnership in several announcements

---

## 4. Match-Trade Technologies (Match-Trader)

- **Registered**: Sofia, Bulgaria (parent company); dev team across multiple countries
- **Founded**: 2013
- **Equity**: private
- **Products**:
  - Match-Trader (white-label trading platform, targeting MT5)
  - Risk engine (prop-firm-friendly, supports evaluation phase / funded accounts)
- **Growth driver**: the prop firm track. Because the platform natively supports the challenge / funded account workflow, it fits prop firm business better than MT5
- **Typical clients**: FundedNext, Funded Trading Plus, Apex Trader Funding, Earn2Trade, and a dozen+ other prop firms

Sources:
- Match-Trade official [Clients](https://match-trade.com/match-trader) page
- Migration press releases on each prop firm's website

---

## 5. TradingView

- **Registered**: London, UK (TradingView Ltd); dev team in Spain / UK
- **Founded**: 2011; founders Denis Globa / Stan Bokov / Constantin Ivanov (Russian heritage)
- **Equity**:
  - 2021 Series C raised **$298M**, post-money valuation **$3B**
  - Investors: Tiger Global, DST Global, Insight Partners, Index Ventures
- **Revenue**: undisclosed. Industry estimate 2024 ARR $300–500M
- **Products**:
  - TradingView.com charts + community
  - Pine Script (proprietary strategy language)
  - Multi-broker order aggregation layer (see whitelabel map below)
- **Differentiation**: **the only company without its own server that directly integrates with 40+ brokers' frontends** — this is the core mechanism threatening MT5

Sources:
- [Crunchbase TradingView funding](https://www.crunchbase.com/organization/tradingview)
- [TradingView Brokerage Integration page](https://www.tradingview.com/brokerage-integration/)

---

## 6. NinjaTrader

- **Registered**: Denver CO, U.S.
- **Founded**: 2003
- **Equity**:
  - March 2025 announced acquisition by **Kraken crypto exchange** (Payward Inc.) for $1.5B (cash + equity), completed first half of 2025 — landmark cross-industry M&A
  - Continues operating under the NinjaTrader brand post-acquisition
- **Core business**: U.S. futures + CFD retail brokerage + proprietary trading platform
- **Tech stack**: NinjaTrader desktop software + NinjaScript (C#)

Sources:
- [Kraken to Acquire NinjaTrader — official press release](https://www.kraken.com/press/releases/kraken-to-acquire-ninjatrader-introducing-the-next-era-of-professional-trading)
- [Kraken acquires NinjaTrader — Kraken Blog](https://blog.kraken.com/news/kraken-to-acquire-ninjatrader)
- CFTC / NFA broker registration data

---

## 7. Trading Technologies (TT)

- **Registered**: Chicago IL, U.S.
- **Founded**: 1994
- **Equity**:
  - 2021 acquired by **Bregal Sagemount** (PE)
  - 2022 spun out as a standalone operating company
- **Core business**: futures trading platform + algo execution services
- **Main clients**: CME, ICE, Eurex, SGX futures exchange market makers + HFTs + funds

Sources:
- [TT company About page](https://www.tradingtechnologies.com/about/)
- Bregal Sagemount portfolio listing

---

## 8. Crypto Exchanges

### Binance
- Legal entities scattered across jurisdictions (Cayman → Malta → Gibraltar → 2023+ UAE)
- Founder **Changpeng Zhao (CZ)**, 2023 DOJ AML charges, stepped down as CEO
- Since 2024 new CEO **Richard Teng** (Singaporean)
- **Private**, not listed
- Revenue estimate for 2024: $20B (industry estimate, unaudited)

### OKX
- **Registered**: Seychelles
- **Founded**: 2017 (predecessor OKCoin 2013)
- **Controlling shareholder**: Star Capital (Star XiaoFang / Xu Mingxing controlling)
- **Private**

### Coinbase
- **Listed**: 2021 NASDAQ:COIN direct listing (not a traditional IPO)
- **Registered**: Delaware, U.S.
- **CEO**: Brian Armstrong (co-founder since 2012)
- 2024 revenue $6.6B

### Kraken (Payward Inc.)
- **Registered**: San Francisco CA
- **Founded**: 2011; CEO Jesse Powell (stepped down 2022)
- 2025 Reuters reports Kraken is **preparing IPO**
- 2022 acquires NinjaTrader, entering traditional brokerage

### Bybit
- **Registered**: Dubai, UAE (originally Singapore / Hong Kong, has moved around)
- **Founded**: 2018
- **Private**

Sources:
- [SEC EDGAR Coinbase S-1](https://www.sec.gov/Archives/edgar/data/1679788/000162828021003168/coinbaseglobalincs-1.htm)
- [Reuters Kraken IPO 2025](https://www.reuters.com/business/finance/kraken-ipo-filing/)
- Each exchange's "Terms of Service" legal entity page

---

## 9. Retail Brokers / Hybrid Platforms

### Interactive Brokers (IB)
- **Listed**: NASDAQ:IBKR
- **Founded**: 1978; current Chairman Thomas Peterffy (Hungarian-American, still largest shareholder ~70%)
- **Market cap**: ~$60B (Q1 2026)
- Proprietary TWS platform + REST API + FIX

### OANDA
- **History**: founded 1996 in Toronto ("Olsen and Associates" acronym)
- **2018**: acquired by **CVC Capital Partners** (European PE)
- **2025 Dec**: **acquired by FTMO** ← one of this industry's biggest recent news items
- Proprietary v20 REST API + MT4 hybrid offering

### IG Group
- **Listed**: LSE:IGG, UK
- **Founded**: 1974
- Proprietary IG platform + ProRealTime + MT4 hybrid

### Saxo Bank
- **Registered**: Copenhagen, Denmark
- **Large shareholder**: Geely (Chinese automaker) holds 49% since 2017
- Proprietary SaxoTrader + OpenAPI REST

Sources:
- [FTMO acquires OANDA announcement 2025-12](https://ftmo.com/blog/oanda-acquisition/)
- [CVC Capital Portfolio](https://www.cvc.com/portfolio/)
- LSE public disclosure filings / Bloomberg company profiles

---

## Ownership Movements Summary (2020–2026)

| Year | Event |
|---|---|
| 2017 | Geely acquires 49% of Saxo Bank |
| 2018 | CVC Capital acquires OANDA |
| 2021 | TradingView Series C $298M @ $3B valuation |
| 2021 | Bregal Sagemount acquires Trading Technologies |
| 2022 | Kraken acquires NinjaTrader |
| 2022 | MetaQuotes mobile pulled from App Store due to sanctions (reinstated six months later) |
| 2023 | CFTC / OSC jointly shut down MyForexFunds |
| 2023 | Binance U.S. (BUSD) sued by SEC; CZ steps down |
| 2024 | MetaQuotes begins mass revocation of prop firm licenses |
| 2024 | FTMO adopts DxTrade + cTrader as MT5 replacements |
| 2025 | FTMO acquires OANDA (prop firm → diversified finance) |
| 2025 | Kraken reportedly preparing IPO |

## Key Observations

1. **Political fragility of the MT5 ecosystem**: MetaQuotes is fundamentally a private / Russian-background company; its life-and-death power over downstream brokers and prop firms is highly concentrated. The App Store pull + prop firm cleansing both demonstrate this. The downstream has long-term incentive to diversify.

2. **PE dominance in retail trading infrastructure**: TT (Bregal), OANDA (CVC), TradingView (Tiger + DST + Insight), Robinhood (DST + Sequoia), eToro (eToro SPAC 2023) — this sector's middle/frontend tech is heavily held by private equity, making decision cycles shorter and exit-oriented.

3. **Traditional + crypto boundary blurring**: Kraken buys NinjaTrader, FTMO buys OANDA — crypto-native companies and traditional retail brokers have started merging. Expect this to continue over the next few years.

4. **Chinese capital in Saxo, via Geely**: Geely's stake in Saxo is a rare "European investment bank × Chinese manufacturing" cross-industry asset. Regulatorily sensitive but long-held.

## References

- Crunchbase / PitchBook / Bloomberg company data
- SEC EDGAR / LSE RNS / Companies House official disclosures
- Finance Magnates / Finance Feeds / LeapRate industry coverage
- Each company's official press releases
