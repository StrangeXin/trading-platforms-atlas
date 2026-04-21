# Bybit

## Overview

Bybit is a global cryptocurrency exchange founded in 2018 with a derivatives-first architecture. It is the world's second-largest crypto exchange by trading volume as of 2025–2026, operating behind only Binance. Bybit was co-founded by Ben Zhou, who serves as CEO, and is headquartered in Dubai (relocated from Singapore in 2023). The exchange is known for its deep perpetual futures liquidity, copy trading capabilities, and strong retail derivatives user base. In February 2025, Bybit suffered the largest cryptocurrency hack in history — approximately $1.5 billion in Ethereum stolen by North Korea's Lazarus Group.

---

## History and Founding

**Ben Zhou** is a Chinese entrepreneur who spent seven years at XM (one of the largest forex brokerages in China) before co-founding Bybit. His background in retail forex derivatives directly shaped Bybit's initial product direction.

Key milestones:

- **March 2018**: Bybit incorporated; founding team includes Ben Zhou (full list of co-founders is not prominently disclosed publicly)
- **2018**: Platform launches with perpetual futures as the core product — BTCUSD inverse perpetual (coin-margined) with leverage up to 100x
- **2019**: Claims 10% of global Bitcoin trading volume; surpasses BitMEX in market share for perpetual derivatives
- **2020**: Bybit expands product range; adds USDT-margined (linear) perpetuals alongside coin-margined inverse contracts
- **2021**: Spot trading launched — marking the transition from derivatives-only to full exchange
- **2021**: Bybit copy trading platform launched; becomes a major feature differentiator
- **2022**: Options trading added; Unified Trading Account (UTA) introduced, allowing cross-margin between spot and derivatives
- **2023**: Bybit relocates headquarters from Singapore to **Dubai**, UAE; Singapore operations significantly reduced following MAS regulatory stance on crypto
- **2023**: User base grows to ~20 million registered users
- **2024**: Bybit triples user base to ~60 million users; spot market share surges from 2% to 12%+
- **February 21, 2025**: Bybit suffers $1.5 billion ETH hack attributed to North Korea's Lazarus Group — the largest single crypto theft in history
- **2025**: Post-hack recovery operations; Ben Zhou publicly leads communication; Bybit continues operations and covers user losses from reserves

---

## Founding Geography and Incorporation

- **Original incorporation**: British Virgin Islands (BVI)
- **Initial HQ**: Singapore (~2018–2023)
- **Current HQ**: Dubai, UAE (relocated 2023)
- **Registration**: BVI (international entity); Dubai operations via VASP registration with VARA
- **US users**: Not available; Bybit explicitly blocks US IPs and users per its terms

---

## Product Suite

### Perpetual Futures (Core Product)

Bybit's perpetual futures were its founding product and remain its highest-volume segment:

- **USDT-margined (Linear)**: Settled in USDT; BTC, ETH, and hundreds of altcoin perps
- **Coin-margined (Inverse)**: Settled in the underlying coin (e.g., BTC); BTC and ETH primary markets
- Leverage: Up to 100x on BTC/ETH; lower maximums on altcoins
- Funding rate mechanism: 8-hour intervals for major pairs
- 2024 daily derivatives volume: ~$6 billion (per SQ Magazine data; trailing Binance's $15.5B, ahead of OKX's $4.5B)

### Spot Trading

- Launched 2021; rapid growth post-launch
- 400+ spot trading pairs
- Spot market share grew from ~2% in 2023 to 12%+ in 2024

### Options

- BTC and ETH options; European-style
- Added approximately 2022

### Unified Trading Account (UTA)

Introduced in 2022, UTA allows:
- One account spanning spot, perpetuals, options, and margin lending
- Shared margin: spot holdings can serve as derivatives collateral
- This was a notable innovation later adopted by Binance and OKX in similar form

### Copy Trading

Bybit's copy trading is a flagship feature and a significant user acquisition vector:

- **Copy Trading Pro** (2024): Investors can automatically replicate "Pro Masters" across spot and derivatives
- Pro Masters earn up to 30% of follower profits
- Follower funds locked for 180-day periods with weekly redemption windows
- Available for both spot and perpetuals strategies
- Bybit marked 30 million users at the time of its copy trading platform redesign (per [Finance Magnates](https://www.financemagnates.com/cryptocurrency/bybit-marks-30-million-users-as-new-copy-trading-platform-debuts/))

### Other Products

- **Bybit Earn**: Staking, savings, and yield products
- **Bybit Card**: VISA debit card (Europe / LatAm)
- **Launchpad / Launchpool**: New token launches
- **NFT Marketplace**: Integrated NFT trading (reduced scope)
- **P2P Trading**: Peer-to-peer fiat on/off ramp
- **Trading Bots**: Grid, DCA, and arbitrage bots

---

## Technology Infrastructure

### Matching Engine

Bybit's matching engine was engineered from inception for derivatives throughput:
- Designed to handle peak load during volatile markets (crypto derivatives are highly correlated with BTC price volatility)
- Bybit has highlighted its engine's performance during multiple market stress events
- Specific TPS (transactions per second) capacity numbers are not publicly disclosed

### API

- **REST API**: Full order management, account, and market data
- **WebSocket**: Real-time market data (order book, trades, ticker, kline) and private account streams
- **Unified Account API v5** (2023 rewrite): Unified spot + derivatives + options into single API surface
- **SDK**: Official Python, Node.js, Go, C#, Rust SDKs maintained by Bybit
- **FIX API**: Available for institutional clients and market makers
- Rate limits are account-tier dependent

---

## Risk Management and Liquidation Engine

Bybit uses an **Insurance Fund** + **Auto-Deleveraging (ADL)** system:

- If a position hits liquidation price, Bybit takes over and attempts to close in the market
- If closure fails, the Insurance Fund covers the gap
- If Insurance Fund is insufficient, ADL triggers: profitable traders on the opposite side are auto-deleveraged to cover losses
- Insurance Fund size is publicly visible on the Bybit platform in real time

---

## The $1.5 Billion Hack (February 2025)

The most significant event in Bybit's history:

**Date**: February 21, 2025
**Amount stolen**: ~$1.5 billion in ETH (approximately 401,347 ETH)
**Perpetrator**: Lazarus Group (North Korea), officially linked by FBI on February 26, 2025

**How it happened** (per [NCC Group technical analysis](https://www.nccgroup.com/research/in-depth-technical-analysis-of-the-bybit-hack/) and [Check Point Research](https://research.checkpoint.com/2025/the-bybit-incident-when-research-meets-reality/)):
- Bybit used Safe Wallet (a multi-signature wallet infrastructure) for cold storage management
- Attackers compromised the **frontend source code of Safe Wallet** — not Bybit's own systems directly
- The malicious code made a fraudulent transaction appear legitimate in the signing UI
- Multiple Bybit signers, including Ben Zhou, signed what appeared to be a routine cold-to-warm wallet transfer
- The underlying transaction was a contract upgrade granting attackers control of the ETH multisig wallet

**Response**:
- Ben Zhou publicly communicated within hours via X (Twitter), confirming the breach
- Bybit covered all user losses from its own reserves and emergency loans from industry partners
- No user lost funds as a result of the hack
- Bybit launched a bounty program for information leading to fund recovery
- The incident surpassed the Ronin Network hack ($625M, 2022) as the largest crypto theft in history

---

## Regulatory Status

- **Dubai**: Bybit holds a VASP license from VARA (Virtual Assets Regulatory Authority), UAE
- **US**: Bybit is not available to US users; US residents are geoblocked
- **EU**: Bybit pursuing MiCA compliance preparation; status evolving as of 2025
- **Singapore**: Reduced operations significantly in 2023; not licensed under MAS as of 2024

---

## Fee Structure

| Product | Maker | Taker |
|---|---|---|
| Spot (base tier) | 0.100% | 0.100% |
| Perpetuals (base tier) | 0.020% | 0.055% |

VIP tiers reduce fees based on 30-day volume and Bybit Token (BIT) holdings. Derivatives fees are competitive with Binance and OKX at equivalent volume tiers.

---

## Scale and Key Metrics (2024–2025)

- Registered users: 60 million+ (as of 2024; tripled from ~20M in 2023)
- Daily derivatives volume: ~$6 billion (2024 average)
- Spot market share: ~12% (2024)
- Industry ranking by volume: #2 globally
- Insurance Fund: Publicly displayed on platform

---

## Sources

- [Bybit — Wikipedia](https://en.wikipedia.org/wiki/Bybit)
- [The Block — What is Bybit](https://www.theblock.co/learn/305102/what-is-bybit)
- [Ben Zhou — CryptoSlate profile](https://cryptoslate.com/people/ben-zhou/)
- [Finance Magnates — 30M users / copy trading redesign](https://www.financemagnates.com/cryptocurrency/bybit-marks-30-million-users-as-new-copy-trading-platform-debuts/)
- [Wilson Center — The Bybit Heist](https://www.wilsoncenter.org/article/bybit-heist-what-happened-what-now)
- [NCC Group — Technical analysis of Bybit hack](https://www.nccgroup.com/research/in-depth-technical-analysis-of-the-bybit-hack/)
- [Check Point Research — Bybit incident](https://research.checkpoint.com/2025/the-bybit-incident-when-research-meets-reality/)
- [Chainalysis — Bybit theft analysis](https://www.chainalysis.com/blog/bybit-exchange-hack-february-2025-crypto-security-dprk/)
- [CoinLaw — Bybit Statistics 2026](https://coinlaw.io/bybit-statistics/)
- [Coin Bureau — Bybit Copy Trading Review](https://coinbureau.com/review/bybit-copy-trading-review)
