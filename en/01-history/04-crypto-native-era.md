# The Crypto-Native Era (2017–Present)

Crypto completely routed around the MT5 / FIX stack and built its own tech stack from zero. This wasn't accidental — it was baked into the era and the engineering culture.

## 2011–2014: Frontier Days

- **July 2010**: Mt. Gox goes live in Tokyo — the first Bitcoin exchange with any real scale
- **2011**: Kraken founded in San Francisco; BTC-e founded in Bulgaria
- **2013**: OKCoin founded in Beijing; Huobi founded in Beijing; Coinbase founded in San Francisco
- **February 2014**: Mt. Gox collapses, 850K BTC stolen, dragging early trust down with it

The tech stack: crude PHP + MySQL, no matching engine, no risk controls, no hot/cold wallet separation. Most of it was "order book as a couple of CSVs on a personal server."

## 2015–2016: First Infrastructure Upgrade

- **2015**: Poloniex rises as the altcoin exchange, starts using a proper matching engine
- **2016**: Ethereum ERC-20 token explosion, exchanges need to list new coins fast
- **2016**: Bitfinex hacked for 120K BTC (survives via socialized loss)

The consensus that forms in this period: **build your own matching engine, your own wallet system, your own risk controls**. Nobody was licensing this stuff, and nobody was waiting for MT5 to get retrofitted for crypto.

## 2017: The Big Bang

- **January**: BTC $1,000
- **December**: BTC $19,000
- Full year: ~1000+ new exchanges launched
- **July 2017**: Binance founded in Shanghai (CZ + the Binance team, veterans of OKCoin's engineering core)
- **December 2017**: Binance hits $1B daily volume
- ICO frenzy pulls exchange traffic up 10–100×

Binance wrote a matching engine from scratch in Java + C++ and shipped in 48 days — the fastest MVP in the industry at the time. That speed was only possible because they were outside MT5 and self-building the full stack.

## 2018–2019: Perpetuals Arrive

**2016** BitMEX launched "Perpetual Swap" — a futures contract with no expiration, anchored to spot through a funding rate. This is a **crypto original** derivative (traditional futures have no equivalent).

2018–2019 every major exchange followed:
- OKEx Swap (December 2018)
- Binance Futures (September 2019)
- Bybit (December 2018, perps-focused)
- Deribit (had options since 2016, added perps in 2018)

Perpetuals vs traditional futures:
- No contract roll-over
- Public, transparent funding rates = rich arbitrage opportunities
- Leverage dial-up to 10/25/50/100×
- Exchange earns three ways: perp fees + borrow interest + liquidation penalties

**In 2024, 70%+ of crypto market volume is in perpetuals** — spot is the side dish. Traditional CFD/futures never reached this structure.

## 2020–2021: DeFi + Institutional Entry

- **DeFi Summer** (June 2020–): Uniswap, Compound, Aave, Curve — AMM and lending protocols take off. **First time non-custodial trading has a real answer to CEXes**
- **August 2020**: Coinbase files for direct listing, valuation ~$100B
- **April 2021**: Coinbase NASDAQ:COIN debuts at $381
- **Q1–Q2 2021**: BTC $30k → $64k; Tesla / MicroStrategy / Square go public with crypto treasuries
- **November 2021**: BTC peaks at $69k; single-month NFT volume $5B

At the tech stack level:
- **Decentralized exchanges (DEXes)** run on smart contracts instead of order books — no centralized matching
- **AMMs (Automated Market Makers)** replace order books via liquidity pools and constant-product pricing
- By Q3 2021, DEX daily volume surpasses second-tier CEXes

## 2022–2023: Deleveraging + Trust Crisis

- **May 2022**: Terra/LUNA collapse, $40B evaporates
- **June 2022**: Celsius / Voyager lending platforms go bankrupt
- **November 2022**: FTX implodes, SBF arrested. The self-proclaimed #2 crypto exchange zeroed overnight
- **March 2023**: Silicon Valley Bank fails; USDC briefly depegs
- **June 2023**: SEC sues Binance + Coinbase (treating exchanges as unregistered securities venues)
- **November 2023**: CZ pleads guilty on DOJ AML charges, resigns as Binance CEO

FTX's aftermath reshaped the industry:
- **Proof-of-Reserves** (PoR) became table stakes for CEXes
- Institutional clients demanded **segregated custody** (no more leaving funds on exchanges)
- Self-custody (hardware wallets) had a revival

## 2024–2026: Regulation + TradFi M&A

- **January 2024**: U.S. spot BTC ETFs approved (BlackRock IBIT, Fidelity FBTC, etc.)
- **May 2024**: U.S. spot ETH ETFs approved
- **November 2024**: Trump elected → SEC posture softens
- **January 2025**: Coinbase / Kraken drop SEC lawsuits
- **2025+**: TradFi brokers accelerate crypto exchange acquisitions, and vice versa
  - **Kraken 2022** acquires NinjaTrader (futures)
  - **Robinhood 2024** acquires Bitstamp
  - **FTMO 2025 Dec** acquires OANDA

The underlying logic of this M&A wave: **retail capital flows toward multi-asset unified frontends**. Crypto users want to trade stocks and FX and crypto in the same app — and vice versa. The asset-class walls are coming down.

## Tech Stack Characteristics (Summary)

| Characteristic | Traditional (MT5 + FIX) | Crypto-Native |
|---|---|---|
| Matching | External ECN / LP | Exchange-operated |
| Custody | Banks / Prime Broker | Exchange hot/cold wallets |
| API | MT5 proprietary + FIX | REST + WebSocket |
| Client | Desktop terminal dominant | Web / iOS / Android in parallel |
| Docs | Institutions only | Fully public |
| Leverage | Regulated (30–50× cap) | 50–100–125× freely |
| Settlement | T+1 / T+2 | T+0 real-time |
| KYC | Strict | Getting stricter but still flexible |
| New listings | Weeks / months | Hours / days |

The crypto-native structural advantage isn't that the technology is more advanced — it's that **zero-base builds have no historical baggage**:
- Exchanges founded in 2011 didn't have "20 years of FX broker legacy users who'd resist a platform change"
- No inertia from "we have to reconcile with FIX counterparties"
- No compliance lock-in from "institutional clients require FIX or nothing"

## What This Teaches the Traditional Side

**TradingView's playbook is crypto-style thinking grafted onto traditional markets** —
- Free Web frontend (answers the Binance Web App)
- REST bridges to multiple brokers (answers the ccxt aggregator layer)
- Pine Script strategy ecosystem (TradingView's own MQL alternative)
- Social feed (answers eToro / Bybit copy trading)

The 2024 story — "TradingView steals users from MT5" — traces directly back to the 2017 decision by the crypto track to skip MT5 entirely.

## References

- [Binance's 8-week launch story](https://www.binance.com/en/blog/ecosystem/founders-story-binance-at-8-8228748064)
- [Mt. Gox bankruptcy filings](https://www.mtgox.com/)
- [FTX bankruptcy docket](https://restructuring.ra.kroll.com/FTX/)
- Messari / The Block annual crypto industry reports
- BitMEX Perpetual Swap whitepaper 2016
- SEC Coinbase / Binance complaints 2023
- *The Cryptopians* (Laura Shin) — Ethereum founders group biography
- *Number Go Up* (Zeke Faux) — FTX / Tether deep investigation
