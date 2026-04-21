# Coinbase

## Overview

Coinbase (NASDAQ: COIN) is the largest US-based cryptocurrency exchange, founded in 2012 by Brian Armstrong and Fred Ehrsam. It went public via direct listing in April 2021 and has pursued a "regulation-first" strategy in the US market that differentiates it from offshore exchanges. Coinbase serves retail users through its main app, professional traders through Coinbase Advanced Trade (formerly Coinbase Pro), and institutions through Coinbase Prime. The company faced a major SEC enforcement action starting in 2023, which was substantially resolved by 2025 following a shift in the US regulatory environment.

---

## History and Founding

**Brian Armstrong** (born 1983, San Jose, CA) studied computer science and economics at Rice University, then worked as a software engineer at Airbnb before co-founding Coinbase. He is co-founder, CEO, and a major shareholder.

**Fred Ehrsam** co-founded Coinbase with Armstrong after meeting through Y Combinator; Ehrsam was a former Goldman Sachs trader. He departed Coinbase in 2017 to co-found Paradigm, a crypto venture capital firm.

Key milestones:

- **June 2012**: Coinbase incorporated in Delaware; Y Combinator Summer 2012 cohort
- **2012**: Coinbase launches with the ability to buy and sell Bitcoin via bank transfer
- **2013**: Receives $25M Series B from Andreessen Horowitz (a16z)
- **2014**: GDAX (Global Digital Asset Exchange) launched for professional traders with full order book
- **2016–2017**: Coinbase grows during the crypto bull market; regulatory compliance emphasis distinguishes it
- **2018**: Coinbase Custody launched for institutional asset storage
- **2019**: Coinbase Wallet (non-custodial, self-custody) launched as a separate app
- **2020**: Coinbase Prime launched — institutional brokerage aggregating liquidity across venues
- **April 14, 2021**: Coinbase lists on NASDAQ (ticker: COIN) via **direct listing** (not traditional IPO); opens at $381/share, valuing the company at ~$99.6 billion
- **2021**: GDAX rebranded to "Coinbase Pro"; later renamed to "Coinbase Advanced Trade"
- **March 22, 2023**: SEC issues Wells notice to Coinbase — targeting listed assets, Earn staking, Coinbase Prime, and Coinbase Wallet
- **June 2023**: SEC sues Coinbase alleging operation as unregistered broker, exchange, and clearing agency
- **2023–2024**: Coinbase files counter-suit against SEC; litigation proceeds; company continues operations
- **2025**: Landmark legal resolution of SEC dispute; US regulatory environment shifts
- **2026**: Coinbase publicly positioning as the "Everything Exchange"

---

## Corporate Structure

- **Incorporated**: Delaware, USA
- **HQ**: San Francisco, CA; international offices in Dublin, London, Singapore
- **Public**: NASDAQ: COIN (direct listed April 14, 2021)
- **CEO**: Brian Armstrong (co-founder)
- **Employees**: ~3,500–7,000 (fluctuated significantly; layoffs in 2022–2023 bear market)
- **Regulation**: FinCEN (MSB), NY BitLicense, CFTC (derivatives), and international equivalents

---

## Products and Services

### Coinbase (Retail)

The main Coinbase consumer app:
- Simple buy/sell interface; market orders with flat fee or spread
- Supports 200+ cryptocurrencies
- Coinbase One: ~$30/month subscription (reduced/no fees + higher staking yields)
- Coinbase Card: Visa debit card with crypto rewards
- Recurring buys / DCA scheduling
- Staking for eligible assets (regulatory-dependent; SEC action in 2023 targeted "Earn" staking)

### Coinbase Advanced Trade (Pro)

Previously GDAX / Coinbase Pro:
- Full order book trading: limit, market, stop orders
- Lower fees than retail Coinbase (maker/taker model)
- Integrated into main Coinbase app as of 2023 redesign
- REST and WebSocket API access for algorithmic trading

### Coinbase Prime

Institutional brokerage:
- Smart order routing across Coinbase Exchange and external venues
- Prime Financing: Credit facilities for institutional clients
- Prime Custody: Cold storage, regulated as NY chartered limited trust company
- Portfolio analytics, reporting, compliance tools
- Key clients include BlackRock (IBIT), MicroStrategy, Grayscale, and major hedge funds
- Is the custodian for the majority of US spot BTC ETFs (8 of 11 at launch per public disclosures)

### Coinbase Wallet

Non-custodial self-custody wallet (separate app):
- User holds private keys; funds are separate from exchange account
- Supports Ethereum, Base (Coinbase's L2), and other EVM chains
- dApp browser for DeFi access; NFT viewing and transfers

### Base (Ethereum L2)

Coinbase launched Base in 2023 — an Ethereum Layer 2 network built on the OP Stack:
- Open, permissionless blockchain; Coinbase does not control user funds or transactions
- Gas fees paid in ETH
- Among the top L2s by TVL and transaction volume as of 2024–2025

### Coinbase Derivatives

CFTC-registered futures exchange offering US-compliant crypto futures:
- Nano BTC and ETH futures (1/100 contract sizes)
- Launched approximately 2024; targets US retail and institutional traders who need regulated derivatives

---

## Fee Structure

### Retail (Simple interface)
- Flat fee or spread: approximately 1.49%–3.99% depending on payment method and amount

### Advanced Trade (Professional)

| Volume tier (30-day) | Maker | Taker |
|---|---|---|
| <$10K | 0.40% | 0.60% |
| $10K–$50K | 0.25% | 0.40% |
| $50K–$100K | 0.15% | 0.25% |
| $100K+ | 0.05%–0.10% | 0.10%–0.20% |

These fees are higher than offshore equivalents (Binance, OKX, Bybit), reflecting the compliance infrastructure cost that US regulatory standing requires.

---

## SEC Regulatory Action (2023–2025)

The most consequential regulatory event in Coinbase's history:

**March 22, 2023**: SEC issues **Wells notice** covering:
- Listed digital assets alleged to be unregistered securities
- Coinbase Earn (staking service)
- Coinbase Prime (institutional brokerage)
- Coinbase Wallet

**Coinbase's position**: Listed assets are not securities; SEC lacks jurisdiction; SEC is applying law inconsistently and refusing regulatory clarity.

**Counter-action**: Coinbase sued the SEC under the Administrative Procedure Act for refusing to respond to its rulemaking petition.

**June 2023**: SEC files formal lawsuit — Coinbase is an unregistered broker, exchange, and clearing agency for at least 13 tokens named as securities.

**August 2023**: Coinbase moves to dismiss.

**2025**: Following a change in US administration and SEC leadership, the lawsuit was substantially resolved. Coinbase's public statements in April 2026 reference a "landmark 2025 legal resolution" with the regulatory cloud "largely dissipated." Specific settlement terms, if any, were not fully publicly disclosed as of the April 2026 research window.

---

## API Access

- **Advanced Trade REST API**: Order management, market data, account; OAuth2 and API key auth
- **Advanced Trade WebSocket**: Real-time Level 2 order book, matches, ticker, user channel
- **Prime API**: Institutional REST for Prime clients (portfolio, financing, custody)
- **FIX API**: Institutional Prime clients for low-latency order routing
- Documentation: docs.cdp.coinbase.com

---

## Competitive Position

| Dimension | Coinbase |
|---|---|
| US regulatory status | Strongest among major crypto exchanges |
| Institutional credibility | High; BTC ETF custodian of record |
| Retail UX | Best-in-class simplicity |
| Fees | Higher than offshore exchanges |
| US derivatives (regulated) | Yes via Coinbase Derivatives (CFTC) |
| Global market share | US-dominant |
| API maturity | Strong REST + WS + FIX (Prime) |
| L2 / Web3 | Base L2 is major infrastructure investment |

---

## Sources

- [Coinbase — Wikipedia](https://en.wikipedia.org/wiki/Coinbase)
- [Brian Armstrong — Wikipedia](https://en.wikipedia.org/wiki/Brian_Armstrong_%28businessman%29)
- [Fox Business — Coinbase direct listing 2021](https://www.foxbusiness.com/markets/coinbase-ceo-brian-armstrong-nets-13b-and-climbing-after-historic-direct-listing)
- [Coinbase — Wells notice response](https://www.coinbase.com/blog/coinbase-responds-to-the-secs-wells-notice)
- [CNBC — Coinbase Wells notice response](https://www.cnbc.com/2023/04/27/coinbase-offers-fiery-response-to-sec-wells-notice-.html)
- [CoinDesk — SEC warns Coinbase March 2023](https://www.coindesk.com/policy/2023/03/22/sec-warns-coinbase-its-pursuing-enforcement-action-over-securities-violations)
- [Daily Hodl — Wells notice full scope](https://dailyhodl.com/2023/03/22/coinbase-receives-sec-wells-notice-over-listed-crypto-assets-staking-service-coinbase-prime-and-coinbase-wallet/)
- [Coinbase Global S-1 (2021)](https://www.sec.gov/Archives/edgar/data/1679788/000162828021003168/coinbaseglobalincs-1.htm)
