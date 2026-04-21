# 交易平台关系图谱（总图）

本图用 Mermaid 画主要玩家之间的"所有权 / 协议 / 数据流"关系。在支持 Mermaid 渲染的工具（VS Code、GitHub、Obsidian、Typora）打开这个文件可直接看图。

## 核心生态：零售外汇 + Prop Firm

```mermaid
graph TD
  %% MetaQuotes 及其生态
  MQ[MetaQuotes<br/>MT4 / MT5 套件<br/>🇷🇺/🇨🇾]
  MQ --- MT4[MT4 Server]
  MQ --- MT5[MT5 Server]

  %% 零售券商白标 MT5
  MT5 --- EX[Exness]
  MT5 --- XM[XM]
  MT5 --- IC[IC Markets]
  MT5 --- PEPPER[Pepperstone]
  MT5 --- FXTM[FXTM]
  MT5 --- FXCM[FXCM]
  MT5 --- HOTFX[Hotforex]

  %% Prop Firm 原本都在 MT5
  MT5 -.历史.-> FTMO[FTMO]
  MT5 -.历史.-> TOPSTEP[TopStep]
  MT5 -.历史.-> CFT[CryptoFundTrader]
  MT5 --- THE5ERS[The5ers]
  MT5 --- FN[FundedNext]

  %% 2024 MetaQuotes 清洗 Prop Firm 后的迁移
  FTMO -.2024+.-> DXT[DxTrade<br/>Devexperts]
  FTMO -.2024+.-> CT1[cTrader<br/>Spotware]
  TOPSTEP -.2023+.-> NT[NinjaTrader]
  TOPSTEP -.2023+.-> TT[TradingView 桥]

  %% 流动性提供商
  EX --- LP[Prime Brokers<br/>GS / JPM / MS / Citi]
  XM --- LP
  IC --- LP
  PEPPER --- LP
  FTMO --- LP

  %% 协议层
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

## 大图：协议 × 用户群

```mermaid
graph LR
  RETAIL[零售交易员]
  INST[机构 / HFT]
  DEV[零售算法开发者]

  MT5_P[MT5 私有协议]
  FIX_P[FIX]
  REST_P[REST + WebSocket]

  BROKER_MT[零售券商<br/>白标 MT5]
  BROKER_REST[零售券商<br/>REST API<br/>OANDA / IG / IB]
  INST_BROKER[机构券商<br/>GS / MS / JPM]
  EXC[加密所<br/>Binance / OKX]
  ECN[ECN<br/>EBS / Hotspot]

  RETAIL --> MT5_P --> BROKER_MT
  DEV --> REST_P --> BROKER_REST
  DEV --> REST_P --> EXC
  INST --> FIX_P --> INST_BROKER
  INST --> FIX_P --> ECN

  BROKER_MT -.桥.-> FIX_P -.-> ECN
  BROKER_REST -.桥.-> FIX_P -.-> ECN

  classDef user fill:#059669,color:#fff
  classDef proto fill:#dc2626,color:#fff
  classDef provider fill:#0369a1,color:#fff

  class RETAIL,INST,DEV user
  class MT5_P,FIX_P,REST_P proto
  class BROKER_MT,BROKER_REST,INST_BROKER,EXC,ECN provider
```

## 流动性链（零售外汇）

```mermaid
graph LR
  T[终端用户<br/>MT5 终端]
  BR[零售 broker<br/>MT5 server]
  LP[LP<br/>Prime Broker]
  MM[做市商<br/>Bank / Citadel / Jump]
  IB[Interbank<br/>真实对手盘]

  T -->|MT5 私有协议| BR
  BR -->|FIX| LP
  LP -->|FIX| MM
  MM -->|内部匹配| IB

  BR -.B-Book 内部对冲.-> BR

  classDef user fill:#059669,color:#fff
  classDef broker fill:#0369a1,color:#fff
  classDef lp fill:#7c3aed,color:#fff

  class T user
  class BR broker
  class LP,MM,IB lp
```

## 加密赛道（完全不同的拓扑）

```mermaid
graph TD
  USER[零售 + 算法开发者]
  USER -->|REST/WS| BINANCE[Binance]
  USER -->|REST/WS| OKX[OKX]
  USER -->|REST/WS| COINBASE[Coinbase]
  USER -->|REST/WS| KRAKEN[Kraken]
  USER -->|REST/WS| BYBIT[Bybit]

  BINANCE --- ME1[自营撮合引擎]
  OKX --- ME2[自营撮合引擎]
  COINBASE --- ME3[自营撮合引擎]

  ME1 --- CUSTODY1[自托管钱包<br/>热 + 冷 + 保险基金 SAFU]
  ME2 --- CUSTODY2[自托管钱包]
  ME3 --- CUSTODY3[自托管钱包]

  %% 做市商生态
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

## TradingView 的"多 broker 聚合"模式

```mermaid
graph LR
  USER[TradingView 用户]
  TV[TradingView<br/>图表 + 社区]

  USER --> TV
  TV --> B1[OANDA<br/>REST]
  TV --> B2[盈透<br/>IB API]
  TV --> B3[FOREX.com<br/>REST]
  TV --> B4[AMP Futures<br/>REST]
  TV --> B5[Binance<br/>REST]
  TV --> B6[Bybit<br/>REST]
  TV --> B7[Saxo Bank<br/>REST]
  TV --> B8[...+30 更多]

  classDef user fill:#059669,color:#fff
  classDef hub fill:#f59e0b,color:#000
  classDef broker fill:#0369a1,color:#fff

  class USER user
  class TV hub
  class B1,B2,B3,B4,B5,B6,B7,B8 broker
```

TradingView 是目前唯一能**替代零售交易员在 MT5 终端下单习惯**的平台——它不卖 server 给 broker，而是在浏览器前端连 broker 的 REST API。

## Prop Firm 技术栈迁移 2022 → 2026

```mermaid
graph LR
  PAST[2022 Prop Firm<br/>100% MT4/MT5]

  CRACK[2023 MyForexFunds<br/>被 CFTC 起诉关停]
  CRACK2[2024 MetaQuotes<br/>削减 Prop Firm license]

  FTMO22[FTMO 2022<br/>MT4/MT5]
  FTMO24[FTMO 2024+<br/>+ DxTrade<br/>+ cTrader]

  TOPSTEP22[TopStep 2022<br/>NinjaTrader + MT5]
  TOPSTEP24[TopStep 2024+<br/>NinjaTrader 主<br/>+ TradingView 桥]

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

## 技术栈所有权一览

| 平台名 | 所属 / 总部 | 成立 | 业务模式 |
|---|---|---|---|
| **MetaQuotes** | Cyprus（原俄罗斯）| 2000 | 卖 MT 套件给 broker |
| **Spotware** | Cyprus | 2011 | cTrader 平台授权 |
| **Trading Technologies (TT)** | Chicago US | 1994 | 期货交易平台 |
| **NinjaTrader** | Denver US | 2003 | 期货交易平台 + Prop Firm 底座 |
| **TradingView** | London UK | 2011 | 图表 + 社交 + broker 聚合 |
| **Devexperts** | US/RU | 2002 | DxTrade 白标平台 |
| **cTrader Copy** | Cyprus（Spotware 子品牌） | 2013 | 跟单 |
| **Match-Trader** | Sofia BG（Match-Trade 母公司） | 2013 | Prop Firm 专用白标平台 |

## 延伸阅读

- `01-ownership.md` — 详细所有权追溯（含 SEC / Companies House 记录）
- `02-liquidity-chain.md` — LP 链条深入
- `03-whitelabel-map.md` — 哪家 broker 用 MT5 / 自研 / 混合
- `../05-trends/` — 这些关系未来怎么变
