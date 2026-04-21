# Kraken (Payward Inc.)

## Overview

Kraken is one of the oldest operating cryptocurrency exchanges, founded in 2011 in San Francisco by Jesse Powell. The legal entity is **Payward Inc.** (Delaware). Kraken has maintained a strong reputation for security and regulatory compliance among US-accessible crypto exchanges. In May 2025, Kraken acquired NinjaTrader for $1.5 billion — the largest deal combining traditional finance and crypto. Kraken has confidentially filed for an IPO, targeting a public listing in 2026 at an estimated valuation of ~$15–20 billion.

---

## History and Founding

**Jesse Powell** is the primary founder of Kraken. Before Kraken, Powell consulted for Mt. Gox (the early Bitcoin exchange in Japan) in 2011, helping it recover from a hacking attack. Observing significant security and operational failures at Mt. Gox, Powell began building a more secure alternative.

Kraken was co-founded on July 28, 2011, with co-founders including Thanh Luu and Michael Gronager.

Key milestones:

- **July 2011**: Payward Inc. incorporated; Kraken development begins
- **September 2013**: Kraken launches publicly — one of the earliest regulated Bitcoin exchanges with EUR trading pairs
- **2014**: One of the first exchanges to pass a cryptographically verifiable proof-of-reserves audit
- **2015**: Kraken acquires Coinsetter (US Bitcoin exchange) and Cavirtex (Canada)
- **2019**: Kraken acquires Crypto Facilities (UK FCA-regulated crypto futures exchange) — becomes Kraken Futures
- **2021**: Kraken acquires Staked — a non-custodial staking platform; launches staking for retail users
- **2022**: Jesse Powell steps down as CEO; names Dave Ripley (then COO) as CEO; Powell becomes chairman. Powell had been CEO for the company's first decade.
- **February 2023**: SEC charges Kraken with unregistered securities offering via its staking-as-a-service; Kraken agrees to shut down US staking and pay $30M settlement
- **November 2023**: SEC files further lawsuit alleging Kraken operates as an unregistered exchange
- **Late 2023**: Arjun Sethi (formerly of Tribe Capital VC) joins as co-CEO alongside Dave Ripley, with mandate to lead IPO preparation
- **March 20, 2025**: Kraken announces $1.5 billion acquisition of NinjaTrader
- **May 2, 2025**: NinjaTrader acquisition closes
- **November 2025**: Payward files confidentially for IPO
- **2025**: Payward revenue reaches $2.2 billion (up from $1.6B in 2024); $2 trillion in transactions (up 34%)
- **April 2026**: Payward agrees to acquire Bitnomial (digital asset derivatives exchange) for up to $550 million

---

## Corporate Structure

- **Legal entity**: Payward Inc. (Delaware)
- **HQ**: San Francisco, CA
- **Co-CEOs**: Dave Ripley + Arjun Sethi (as of late 2023)
- **Founder / Chairman**: Jesse Powell
- **Status**: Private (as of April 2026; IPO confidentially filed November 2025)
- **Estimated valuation**: ~$15–20 billion for IPO (per Fortune/CoinTelegraph reporting)

---

## Products and Services

### Kraken (Retail)

Basic spot trading interface:
- 200+ cryptocurrencies
- Simplified UI for casual users
- Fiat on/off ramp: USD, EUR, GBP, CAD, AUD, JPY
- Available in US (most states), EU, UK, Canada, Australia

### Kraken Pro

Professional trading interface:
- Full order book with Level II market depth
- Maker/taker fee structure (lower than base Kraken)
- Advanced charting and order types
- REST and WebSocket API access
- Available within same Kraken account; no separate sign-up

### Kraken Futures

Originally Crypto Facilities, a UK-based FCA-regulated crypto futures platform acquired by Kraken in 2019:
- Perpetual futures and dated futures on BTC, ETH, and major altcoins
- Available to non-US eligible clients primarily (US regulatory constraints limit US access)
- Regulated by FCA in the UK

### Staking

- Through 2023, Kraken offered staking-as-a-service for retail US users (ETH, DOT, SOL, etc.)
- February 2023: Kraken shut down US staking and paid $30M SEC settlement
- Post-settlement, staking available through a different mechanism for non-US users
- In 2021, Kraken acquired Staked to build non-custodial staking infrastructure

### Institutional Services

- **Kraken OTC**: Large block trade execution
- **Kraken Custody**: Institutional-grade digital asset storage
- **Kraken Institutional**: Unified brand for professional/institutional clients

### NinjaTrader (acquired May 2025)

See `ninjatrader.md` for full detail. Summary of strategic rationale:
- NinjaTrader's CFTC FCM license enables Kraken to offer US-regulated crypto futures
- Adds ~2 million users to Payward's ecosystem
- Cross-sell: crypto traders access futures; futures traders access crypto on Kraken

### Bitnomial (acquisition announced April 2026)

- Digital asset derivatives exchange
- Up to $550 million in cash and stock
- Expands Payward's US derivatives infrastructure alongside NinjaTrader and Kraken

---

## Technology

### API

- **REST API**: Full order management, account, market data; available for Kraken and Kraken Pro
- **WebSocket API**: Real-time public (order book, trades, ticker) and private (account, order updates) channels
- **FIX API**: Institutional clients; requires separate application
- Rate limits: Documented and enforced; somewhat conservative relative to offshore exchanges
- SDK: Python, Node.js, Go available (official and community)

### Security Track Record

Kraken has not experienced a major exchange-level hack at the main platform as of 2025 — a significant distinction in the crypto exchange landscape where major hacks have affected Binance, Bitfinex, Mt. Gox, Bybit, and others.

In 2024, Kraken disclosed a bug bounty incident that escalated: a security researcher exploited a critical bug and withdrew ~$3 million in test funds; the researcher refused to return the funds, and Kraken referred the matter to law enforcement.

---

## Leadership

### Jesse Powell (Founder / Chairman)

- Studied at Lewis & Clark College
- Self-described crypto maximalist and libertarian; publicly vocal on Twitter/X
- Co-consulted on Mt. Gox recovery in 2011, which inspired Kraken's security-first approach
- Stepped down as CEO in April 2023 (search results confirm this date); Powell became chairman
- Remains a significant stakeholder

### Dave Ripley (Co-CEO)

- Previously Kraken COO
- Named CEO when Powell stepped down
- Serves as operational CEO; Sethi focuses on growth and IPO

### Arjun Sethi (Co-CEO)

- Former partner at Tribe Capital (crypto-focused VC)
- Joined Kraken as co-CEO in late 2023 with mandate to prepare the company for IPO
- Per Fortune (September 2025): Sethi is "preparing firm for an IPO" ([Fortune](https://fortune.com/crypto/2025/09/25/kraken-ipo-ceo/))

---

## Regulatory History

| Year | Event |
|---|---|
| 2013 | Launches as regulated US/EU exchange with MSB registration |
| 2019 | Acquires FCA-regulated Crypto Facilities; gains UK derivatives footprint |
| 2022 | Jesse Powell resigns CEO; SEC enforcement pressure intensifies |
| Feb 2023 | SEC charges staking-as-a-service as unregistered securities; $30M settlement; US staking suspended |
| Nov 2023 | SEC files further suit alleging Kraken is an unregistered exchange |
| 2024 | SEC litigation continues; political environment shifts post-US election |
| 2025 | SEC cases largely resolved following regulatory environment change |

---

## Financial Scale (2025)

- Revenue: $2.2 billion (2025); up from $1.6B in 2024
- Transaction volume: $2 trillion (2025); up 34% YoY
- Daily Average Revenue Trades: increased 119% post-NinjaTrader acquisition
- Valuation for IPO: estimated $15–20B (per Kraken Confirms Confidential IPO Filing, Yahoo Finance)

---

## Competitive Position

| Dimension | Kraken |
|---|---|
| Founding / reputation | Among oldest; strong security track record |
| US regulatory standing | Second strongest (after Coinbase) |
| Derivatives access | Kraken Futures (non-US), NinjaTrader (US futures) |
| Staking | Limited post-2023 SEC settlement (US) |
| IPO trajectory | Confidential filing November 2025; targeting 2026 |
| Multi-asset vision | Crypto + traditional futures (NinjaTrader) + derivatives (Bitnomial) |

---

## Sources

- [Kraken — Wikipedia](https://en.wikipedia.org/wiki/Kraken_%28cryptocurrency_exchange%29)
- [Kraken Blog — Kraken is Born](https://blog.kraken.com/news/kraken-is-born)
- [Contrary Research — Kraken Business Breakdown](https://research.contrary.com/company/kraken)
- [Kraken — NinjaTrader acquisition press release](https://www.kraken.com/press/releases/kraken-to-acquire-ninjatrader-introducing-the-next-era-of-professional-trading)
- [Architect Partners — $1.5B NinjaTrader deal analysis](https://architectpartners.com/kraken-acquires-ninjatrader-for-1-5b-the-largest-ever-bridge-deal/)
- [Fortune — Arjun Sethi IPO preparation (Sep 2025)](https://fortune.com/crypto/2025/09/25/kraken-ipo-ceo/)
- [Yahoo Finance — Kraken IPO filing confirmation](https://finance.yahoo.com/markets/crypto/articles/kraken-confirms-confidential-ipo-filing-192328817.html)
- [CoinTelegraph — Payward revenue 2025](https://cointelegraph.com/news/kraken-parent-payward-revenues-jump-crypto-traders-flock-in)
- [CoinDesk — Bitnomial acquisition April 2026](https://www.coindesk.com/business/2026/04/17/kraken-s-parent-company-payward-to-acquire-derivatives-exchange-bitnomial-for-usd550-million-in-cash-and-stock)
