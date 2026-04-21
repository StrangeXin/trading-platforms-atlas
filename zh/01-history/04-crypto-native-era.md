# 加密原生时代（2017-至今）

加密赛道完整绕开了 MT5 / FIX 体系，从零构建了自己的技术栈。这不是偶然——是时代背景和工程师文化的必然。

## 2011-2014：拓荒期

- **2010.7**：Mt. Gox 上线东京，第一个有规模的比特币交易所
- **2011**：Kraken 创立旧金山；BTC-e 创立保加利亚
- **2013**：OKCoin 创立北京；Huobi 创立北京；Coinbase 创立旧金山
- **2014.2**：Mt. Gox 倒闭，85 万 BTC 被盗，拖垮早期信任

技术栈：PHP + MySQL 粗糙实现，无撮合引擎、无风控、无冷热钱包分层。大部分是"订单簿几个 CSV + 个人服务器"。

## 2015-2016：第一次基础设施升级

- **2015**：Poloniex 崛起为山寨币交易所，开始用正规撮合引擎
- **2016**：以太坊 ERC-20 代币爆发，交易所需要快速上线新币
- **2016**：Bitfinex 被盗 12 万 BTC（但通过社会化分摊存活）

这个阶段的共识：**自建撮合引擎、自建钱包系统、自建风控**——没人授权卖这种东西，也没人愿意等 MT5 适配加密。

## 2017：大爆发

- **1 月**：BTC $1000
- **12 月**：BTC $19,000
- 全年：~1000+ 新交易所上线
- **2017.7**：Binance 创立上海（CZ + 和币安团队，前世 OKCoin 技术骨干）
- **2017.12**：币安日交易量破 $1B
- ICO 热潮拉动交易所流量 10-100 倍

Binance 从零开始用 Java + C++ 写撮合引擎，48 天上线，是当时业内最快的 MVP。这个速度只有在脱离 MT5 + 自研全栈的前提下才可能。

## 2018-2019：永续合约出现

**2016** BitMEX 推出"Perpetual Swap"——无到期日的期货，通过 funding rate 锚定现货。这是**加密原创**的衍生品（传统期货没有这种形式）。

2018-2019 所有头部交易所跟进：
- OKEx Swap（2018.12）
- Binance Futures（2019.9）
- Bybit（2018.12，专注永续）
- Deribit（2016 已做期权，2018 加永续）

永续比传统期货优势：
- 不用 roll over 合约
- 资金费率公开透明，套利机会丰富
- 杠杆 × 10/25/50/100 任选
- 交易所能收永续手续费 + 借贷利息 + 爆仓罚金三重

**2024 加密市场 70%+ 交易量在永续合约**，现货反而是配菜。这是传统 CFD/期货从来没达到的结构。

## 2020-2021：DeFi + 机构入场

- **DeFi 夏**（2020.6-）：Uniswap、Compound、Aave、Curve 等 AMM / 借贷协议爆火。**第一次有非托管交易方式对标 CEX**
- **2020.8**：Coinbase 直接上市，估值 $100B
- **2021.4**：Coinbase NASDAQ:COIN 上市开盘 $381
- **2021.Q1-Q2**：BTC 从 $30k 到 $64k；机构报告 Tesla / MicroStrategy / Square 入场
- **2021.11**：BTC 顶峰 $69k；NFT 交易额单月 $5B

技术栈层面：
- **去中心化交易所（DEX）** 用智能合约而非订单簿，无中心化撮合
- AMM（Automated Market Maker）取代 order book，通过流动性池 + 常数乘积公式定价
- DEX 日交易量 2021 Q3 超过二线 CEX

## 2022-2023：去杠杆 + 信任危机

- **2022.5**：Terra/LUNA 崩盘 $40B 蒸发
- **2022.6**：Celsius / Voyager 借贷平台破产
- **2022.11**：FTX 破产，SBF 被捕。号称第二大加密所一夜归零
- **2023.3**：硅谷银行倒闭，USDC 短暂脱钩
- **2023.6**：SEC 起诉 Binance + Coinbase（"证券化"交易所）
- **2023.11**：CZ 认罪 DOJ AML 指控，辞任 Binance CEO

FTX 后遗症改变了行业：
- **Proof-of-Reserves**（PoR）成为 CEX 标配
- 机构客户要求**隔离托管**（不再把资金放在交易所）
- Self-custody（硬件钱包）复兴

## 2024-2026：监管化 + 传统金融并购

- **2024.1**：美国现货 BTC ETF 通过（BlackRock IBIT、Fidelity FBTC 等）
- **2024.5**：美国现货 ETH ETF 通过
- **2024.11**：特朗普当选 → SEC 风向转松
- **2025.1**：Coinbase / Kraken 等撤 SEC 官司
- **2025+**：传统券商加速收购加密所 / 加密所收购传统券商
  - **Kraken 2022** 收购 NinjaTrader（期货）
  - **Robinhood 2024** 收购 Bitstamp
  - **FTMO 2025 Dec** 收购 OANDA

这波并购的底层逻辑：**零售资金流向多资产统一前端**，加密用户想在同一个 app 里炒股票炒外汇炒 crypto，反向亦然。以前的资产类墙正在倒塌。

## 技术栈特征总结

| 特征 | 传统（MT5 + FIX） | 加密原生 |
|---|---|---|
| 撮合 | 外部 ECN / LP | 交易所自营 |
| 托管 | 银行 / Prime Broker | 交易所热冷钱包 |
| API | MT5 私有 + FIX | REST + WebSocket |
| 客户端 | 桌面 terminal 为主 | Web / iOS / Android 并行 |
| 文档 | 机构才给 | 全公开 |
| 杠杆 | 监管限制（30-50x 上限） | 50-100-125x 自由 |
| 清结算 | T+1 / T+2 | T+0 实时 |
| KYC | 严 | 渐严但仍灵活 |
| 上架新品 | 周 / 月级 | 小时 / 天级 |

加密原生的结构优势不是技术本身更先进，而是**从零开始 + 无历史包袱**：
- 2011 年成立的交易所没有"20 年 FX broker 老用户会抵制换平台"的问题
- 没有"要和 FIX 对手方对账"的惯性
- 没有"机构客户规定非 FIX 不接"的合规锁

## 对传统赛道的启示

**TradingView 的做法是"加密式"思维在传统市场复刻**——
- 免费 Web 前端（对标 Binance Web App）
- REST 桥接多 broker（对标 ccxt 聚合层）
- Pine Script 策略生态（对标 TradingView 自己的 MQL 替代）
- 社交化 feed（对标 eToro / Bybit 跟单）

2024 年"MT5 被 TradingView 抢用户"的故事，根源可以追溯到 2017 年加密赛道跳过 MT5 的那个选择。

## 参考

- [Binance 8 周上线史](https://www.binance.com/en/blog/ecosystem/founders-story-binance-at-8-8228748064)
- [Mt. Gox bankruptcy filings](https://www.mtgox.com/)
- [FTX bankruptcy docket](https://restructuring.ra.kroll.com/FTX/)
- Messari / The Block 年度加密行业报告
- BitMEX 永续合约白皮书 2016
- SEC Coinbase / Binance 起诉书 2023
- 《The Cryptopians》（Laura Shin）—— 以太坊创始人群传记
- 《Number Go Up》（Zeke Faux）—— FTX / Tether 深度调查
