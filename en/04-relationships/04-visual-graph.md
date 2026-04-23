# Trading Platform Relationship Graph (Master Map)

This file uses Mermaid to draw the "ownership / protocol / data flow" relationships between the major players. Open in a Mermaid-capable tool (VS Code, GitHub, Obsidian, Typora) to see the graphs rendered.

## Core Ecosystem: Retail FX + Prop Firms

```mermaid
graph TD
  %% MetaQuotes and its ecosystem
  MQ[MetaQuotes<br/>MT4 / MT5 suite<br/>🇷🇺/🇨🇾]
  MQ --- MT4[MT4 Server]
  MQ --- MT5[MT5 Server]

  %% Retail broker white-label MT5
  MT5 --- EX[Exness]
  MT5 --- XM[XM]
  MT5 --- IC[IC Markets]
  MT5 --- PEPPER[Pepperstone]
  MT5 --- FXTM[FXTM]
  MT5 --- FXCM[FXCM]
  MT5 --- HOTFX[Hotforex]

  %% Prop firms originally all on MT5
  MT5 -.historical.-> FTMO[FTMO]
  MT5 -.historical.-> TOPSTEP[TopStep]
  MT5 -.historical.-> CFT[CryptoFundTrader]
  MT5 --- THE5ERS[The5ers]
  MT5 --- FN[FundedNext]

  %% 2024 post-MetaQuotes prop firm cleanup migration
  FTMO -.2024+.-> DXT[DxTrade<br/>Devexperts]
  FTMO -.2024+.-> CT1[cTrader<br/>Spotware]
  TOPSTEP -.2023+.-> NT[NinjaTrader]
  TOPSTEP -.2023+.-> TT[TradingView bridge]

  %% Liquidity providers
  EX --- LP[Prime Brokers<br/>GS / JPM / MS / Citi]
  XM --- LP
  IC --- LP
  PEPPER --- LP
  FTMO --- LP

  %% Protocol layer
  LP --- FIX[FIX Protocol<br/>1992-]

  classDef meta fill:#1e3a8a,color:#fff
  classDef broker fill:#0369a1,color:#fff
  classDef prop fill:#7c3aed,color:#fff
  classDef alt fill:#dc2626,color:#fff

  class MQ,MT4,MT5 meta
  class EX,XM,IC,PEPPER,FXTM,FXCM,HOTFX broker
  class FTMO,TOPSTEP,CFT,THE5ERS,FN prop
  class DXT,CT1,NT,TT alt
```

## Big Picture: Protocol × User Segment

```mermaid
graph LR
  RETAIL[Retail trader]
  INST[Institution / HFT]
  DEV[Retail algo developer]

  MT5_P[MT5 proprietary protocol]
  FIX_P[FIX]
  REST_P[REST + WebSocket]

  BROKER_MT[Retail broker<br/>white-label MT5]
  BROKER_REST[Retail broker<br/>REST API<br/>OANDA / IG / IB]
  INST_BROKER[Institutional broker<br/>GS / MS / JPM]
  EXC[Crypto exchange<br/>Binance / OKX]
  ECN[ECN<br/>EBS / Hotspot]

  RETAIL --> MT5_P --> BROKER_MT
  DEV --> REST_P --> BROKER_REST
  DEV --> REST_P --> EXC
  INST --> FIX_P --> INST_BROKER
  INST --> FIX_P --> ECN

  BROKER_MT -.bridge.-> FIX_P -.-> ECN
  BROKER_REST -.bridge.-> FIX_P -.-> ECN

  classDef user fill:#059669,color:#fff
  classDef proto fill:#dc2626,color:#fff
  classDef provider fill:#0369a1,color:#fff

  class RETAIL,INST,DEV user
  class MT5_P,FIX_P,REST_P proto
  class BROKER_MT,BROKER_REST,INST_BROKER,EXC,ECN provider
```

## Liquidity Chain (Retail FX)

```mermaid
graph LR
  T[End user<br/>MT5 terminal]
  BR[Retail broker<br/>MT5 server]
  LP[LP<br/>Prime Broker]
  MM[Market maker<br/>Bank / Citadel / Jump]
  IB[Interbank<br/>real counterparty]

  T -->|MT5 proprietary protocol| BR
  BR -->|FIX| LP
  LP -->|FIX| MM
  MM -->|internal matching| IB

  BR -.B-Book internal hedge.-> BR

  classDef user fill:#059669,color:#fff
  classDef broker fill:#0369a1,color:#fff
  classDef lp fill:#7c3aed,color:#fff

  class T user
  class BR broker
  class LP,MM,IB lp
```

## Crypto Track (Completely Different Topology)

```mermaid
graph TD
  USER[Retail + algo developer]
  USER -->|REST/WS| BINANCE[Binance]
  USER -->|REST/WS| OKX[OKX]
  USER -->|REST/WS| COINBASE[Coinbase]
  USER -->|REST/WS| KRAKEN[Kraken]
  USER -->|REST/WS| BYBIT[Bybit]

  BINANCE --- ME1[proprietary matching engine]
  OKX --- ME2[proprietary matching engine]
  COINBASE --- ME3[proprietary matching engine]

  ME1 --- CUSTODY1[self-custody wallets<br/>hot + cold + SAFU fund]
  ME2 --- CUSTODY2[self-custody wallets]
  ME3 --- CUSTODY3[self-custody wallets]

  %% Market-maker ecosystem
  JUMP[Jump Trading]
  WINTERMUTE[Wintermute]
  JANESTREET[Jane Street]
  GSR[GSR]
  CUMBER[Cumberland]

  JUMP -.FIX / REST.-> BINANCE
  WINTERMUTE -.FIX / REST.-> BINANCE
  JANESTREET -.FIX / REST.-> BINANCE
  GSR -.FIX / REST.-> OKX
  CUMBER -.FIX / REST.-> COINBASE

  classDef exch fill:#0369a1,color:#fff
  classDef mm fill:#7c3aed,color:#fff
  classDef user fill:#059669,color:#fff
  classDef hot fill:#dc2626,color:#fff

  class USER user
  class BINANCE,OKX,COINBASE,KRAKEN,BYBIT exch
  class JUMP,WINTERMUTE,JANESTREET,GSR,CUMBER mm
  class CUSTODY1,CUSTODY2,CUSTODY3 hot
```

## Bybit × Mantle: CEX Distribution into L2

```mermaid
graph LR
  USER[Retail / institutional user]
  BYBIT[Bybit<br/>CEX account + trading + custody]
  MNT[MNT<br/>exchange balance / on-chain token]
  WALLET[Self-custody wallet]
  MANTLE[Mantle Network<br/>Ethereum L2]
  DAPP[DeFi / mETH / fBTC / Rewards]
  GOV[Mantle Governance<br/>Treasury / proposals / voting]

  USER --> BYBIT
  BYBIT -->|trade / Earn / Launchpool / VIP| MNT
  MNT -->|withdraw to Mantle network| WALLET
  WALLET --> MANTLE
  MANTLE --> DAPP
  MNT --> GOV
  GOV -->|budgets / incentives| MANTLE
  BYBIT -.strategic support / advisors / liquidity.-> MANTLE

  classDef exch fill:#0369a1,color:#fff
  classDef chain fill:#7c3aed,color:#fff
  classDef token fill:#f59e0b,color:#000
  classDef user fill:#059669,color:#fff

  class USER,WALLET user
  class BYBIT exch
  class MANTLE,DAPP,GOV chain
  class MNT token
```

See: [`07-bybit-mantle.md`](./07-bybit-mantle.md)

## Wise Card × Payment Card Stack: App to Card Scheme

```mermaid
flowchart LR
  USER[Cardholder]
  WISE[Wise<br/>multi-currency account + FX]
  BANK[Local bank<br/>debit / credit card]
  CRYPTO[Exchange<br/>Bybit / Coinbase Card]
  WALLET[Apple Pay / Google Pay<br/>token wallet]
  CARD[Physical card / virtual card / mobile token]
  NETWORK[Visa / Mastercard / UnionPay / Amex]
  ACQ[Acquirer / PSP<br/>Stripe / Adyen / bank]
  MERCHANT[Merchant / ATM]

  USER --> WISE
  USER --> BANK
  USER --> CRYPTO
  WISE --> CARD
  BANK --> CARD
  CRYPTO --> CARD
  CARD --> WALLET
  CARD --> NETWORK
  WALLET --> NETWORK
  NETWORK --> ACQ
  ACQ --> MERCHANT

  classDef user fill:#059669,color:#fff
  classDef account fill:#0369a1,color:#fff
  classDef card fill:#f59e0b,color:#000
  classDef network fill:#7c3aed,color:#fff
  classDef merchant fill:#dc2626,color:#fff

  class USER user
  class WISE,BANK,CRYPTO account
  class CARD,WALLET card
  class NETWORK,ACQ network
  class MERCHANT merchant
```

See: [`08-wise-card-payment-card-stack.md`](./08-wise-card-payment-card-stack.md)

## Market Card Taxonomy: Funding × Network × Form

```mermaid
mindmap
  root((Payment cards))
    Funding
      Debit
      Credit
      Charge
      Prepaid
      Gift
      Crypto
      Benefit
    Card schemes
      Visa
      Mastercard
      Maestro
      UnionPay
      Amex
      JCB
      Discover
      Local networks
    Form factors
      Physical
      Virtual
      Digital
      Disposable
      Apple Pay / Google Pay
      ATM-only
    User types
      Consumer
      Student
      Business
      Corporate
      Government
    Use cases
      Travel
      Airline / hotel
      Cashback
      Fuel
      Healthcare
      Transit
      Meal benefits
```

See: [`09-card-taxonomy.md`](./09-card-taxonomy.md)

## TradingView's "Multi-Broker Aggregation" Model

```mermaid
graph LR
  USER[TradingView user]
  TV[TradingView<br/>charts + community]

  USER --> TV
  TV --> B1[OANDA<br/>REST]
  TV --> B2[Interactive Brokers<br/>IB API]
  TV --> B3[FOREX.com<br/>REST]
  TV --> B4[AMP Futures<br/>REST]
  TV --> B5[Binance<br/>REST]
  TV --> B6[Bybit<br/>REST]
  TV --> B7[Saxo Bank<br/>REST]
  TV --> B8[...+30 more]

  classDef user fill:#059669,color:#fff
  classDef hub fill:#f59e0b,color:#000
  classDef broker fill:#0369a1,color:#fff

  class USER user
  class TV hub
  class B1,B2,B3,B4,B5,B6,B7,B8 broker
```

TradingView is currently the only platform that can **replace retail traders' habit of placing orders from the MT5 terminal** — it doesn't sell server software to brokers; it connects to broker REST APIs from the browser.

## Prop Firm Tech Stack Migration 2022 → 2026

```mermaid
graph LR
  PAST[2022 Prop Firms<br/>100% MT4/MT5]

  CRACK[2023 MyForexFunds<br/>sued + shut down by CFTC]
  CRACK2[2024 MetaQuotes<br/>prop firm license purge]

  FTMO22[FTMO 2022<br/>MT4/MT5]
  FTMO24[FTMO 2024+<br/>+ DxTrade<br/>+ cTrader]

  TOPSTEP22[TopStep 2022<br/>NinjaTrader + MT5]
  TOPSTEP24[TopStep 2024+<br/>NinjaTrader primary<br/>+ TradingView bridge]

  FNFUNDS[FundedNext 2022<br/>MT4/MT5]
  FNFUNDS24[FundedNext 2024+<br/>Match-Trader<br/>+ cTrader]

  PAST --> CRACK --> CRACK2
  CRACK2 --> FTMO22 --> FTMO24
  CRACK2 --> TOPSTEP22 --> TOPSTEP24
  CRACK2 --> FNFUNDS --> FNFUNDS24

  classDef old fill:#94a3b8,color:#000
  classDef event fill:#dc2626,color:#fff
  classDef new fill:#059669,color:#fff

  class PAST,FTMO22,TOPSTEP22,FNFUNDS old
  class CRACK,CRACK2 event
  class FTMO24,TOPSTEP24,FNFUNDS24 new
```

## Tech Stack Ownership At-a-Glance

| Platform | Owner / HQ | Founded | Business Model |
|---|---|---|---|
| **MetaQuotes** | Cyprus (originally Russia) | 2000 | Sells MT suite to brokers |
| **Spotware** | Cyprus | 2011 | cTrader platform licensing |
| **Trading Technologies (TT)** | Chicago US | 1994 | Futures trading platform |
| **NinjaTrader** | Denver US | 2003 | Futures platform + prop firm infrastructure |
| **TradingView** | London UK | 2011 | Charts + social + broker aggregation |
| **Devexperts** | US/RU | 2002 | DxTrade white-label platform |
| **cTrader Copy** | Cyprus (Spotware sub-brand) | 2013 | Copy trading |
| **Match-Trader** | Sofia BG (Match-Trade parent) | 2013 | Prop-firm-dedicated white-label platform |

## Further Reading

- `01-ownership.md` — detailed ownership trace (incl. SEC / Companies House records)
- `02-liquidity-chain.md` — deep dive on LP chain
- `03-whitelabel-map.md` — which brokers use MT5 / proprietary / hybrid
- `../05-trends/` — how these relationships will shift
