# Saxo Bank

丹麦多资产投资银行 + 在线经纪商。技术驱动型的"机构级零售"—— 定位高净值 + 半专业 trader。2024 年资产管理规模 ~$110B，是欧洲最大的非银行系经纪商之一。

## 基本信息

- **创立**：1992 年，哥本哈根
- **创始人**：Kim Fournais + Lars Seier Christensen
- **监管**：丹麦 FSA（主）+ 欧盟 MiFID + FCA（英国）+ ASIC + FINMA（瑞士子）+ MAS（新加坡）+ 16 + 其他辖区
- **总部**：Hellerup, 哥本哈根
- **员工**：~2,500（2024）
- **AUC（客户资产）**：~DKK 750 billion ≈ $110B
- **股东**：Geely Holding（吉利，33%，2018 买入）+ 管理层 + 其他

## 产品覆盖

**Saxo 的差异化 = 产品深度**：

- **40,000+ 金融工具**（全业内最广之一）
- 股票（120 + 交易所）
- ETFs（7,000+）
- 期货（200+ 产品，CME / ICE / Eurex / HKEx 等）
- 期权（股票 + 指数 + 商品）
- FX（190 + 货币对）
- CFDs（8,800+）
- 债券（5,900+ 直接交易）
- Mutual Funds
- 加密 ETPs（**Saxo 不做加密现货**，仅通过 ETPs）

## 核心平台：SaxoTraderGO + SaxoTraderPRO

### SaxoTraderGO（Web + 移动）

- 2015 重写的主力零售平台
- 响应式设计，支持所有设备
- 现代化 UI（比 MT5、IB TWS 好得多）

### SaxoTraderPRO（桌面，专业用户）

- 多屏幕、复杂图表、高频下单
- Windows + Mac
- 针对 HFT / 做市商 / 专业 trader

### OpenAPI

- **Saxo 有业内最成熟的 broker REST API**
- 完整 JSON + WebSocket 文档
- OAuth2 认证
- 很多第三方算法交易平台（TradingView、Bookmap、Mt4 bridge）首选集成 Saxo

## 商业模式差异

### 不主打零佣金 + 不主打 B-book

- Saxo 是**传统 A-book**（STP 到市场）
- 收 **佣金** + **点差** 的双重模式
- 点差相对零佣金 broker **更紧**
- 佣金较高（$5-10 / trade）

**结果**：
- **高净值 / 主动交易者**（月交易 > 20 笔）在 Saxo 实际成本 **低于** 零佣金 broker
- 零售 casual trader（月 <5 笔）Saxo **贵于** Robinhood / Trading 212 / eToro

### 最低入金门槛

- 大多数辖区 **$2,000-10,000 最低**
- 对比 Robinhood ($0)、eToro ($50)、Trading 212 ($0)
- **明确筛掉"casual gamblers"**，定位专业或半专业

## 历史关键节点

- **1992**：创立 Midas Fondsmæglerselskab（米达斯期货经纪）
- **1998**：改名 Saxo Bank，获得丹麦 FSA 银行牌照
- **2001**：自研 SaxoTrader 平台（后来演化成 Web + Pro）
- **2007**：Equinor / DNB 等机构客户接入
- **2011**：Saxo Privatbank 推出财富管理业务
- **2015**：SaxoTraderGO 重写上线
- **2018**：Geely Holding（吉利控股，浙江）购入 51.5%，后降至 33%。此后 Geely 是最大股东
- **2019**：Saxo Markets 英国分支 FCA 牌照成熟
- **2020**：重新推出 "BinckBank"（收购的荷兰零售 broker 子公司）
- **2022**：收购 Rabobank Australia 的 Wholesale CFD business
- **2024**：AUC 突破 $110B
- **2025 Q1**：与 Flow Traders 建立加密 ETPs 合作

## 为啥 Saxo 不同

### 1. 技术 vs 渠道驱动

- 大多数欧洲 broker 靠营销（Plus500、eToro、XM）
- Saxo 靠**技术资产**：40K 产品接入、做市商连接、开放 API
- 30% 营收来自 **B2B 白标** —— Saxo 给其他 broker 提供后端

### 2. 机构 DNA

- Kim Fournais 和 Lars Seier Christensen 两位创始人背景是 interbank FX + 期货交易
- 不是"营销型零售券商"，是"把机构级执行带给零售"
- 这就是为啥 SaxoPro 有专业 trader 的 UX

### 3. 地理多样性

**单纯 broker 能在多少国家运营**：
- Plus500: ~40 国
- eToro: ~140 国
- Saxo: **~170 国**，有 9 个本地分支 + 合资

### 4. 无 PFOF

- Saxo **不接受 payment for order flow**（即使美国业务也自愿）
- 订单直接路由到 LP / 交易所
- 是"真 A-book"示范

## Saxo 的批评 / 弱点

### 平台复杂度

- SaxoPro 对新手太复杂
- 客户支持不如 IB 或 Schwab 即时

### 佣金结构争议

- 债券交易手续费 **1% markup** 是隐形加价
- FX 点差声称 0.4 pip，但 "min commission" 规则下小单实际点差 ≥ 1 pip
- 出金费用（2022 美国客户 $40 wire fee 引争议）

### 加密缺失

- 2023 直到现在 Saxo **不支持加密现货**
- 只有加密 ETPs（Bitcoin ETF、Ethereum ETF 等）
- 针对加密原生用户失去市场份额（给 Kraken、Coinbase、Bybit）

## Saxo 和其他欧洲大 broker 对比

| 平台 | 定位 | 2024 AUC |
|---|---|---|
| **Saxo Bank** | 高净值 / 专业 / 多资产 | $110B |
| **Swissquote**（瑞士） | 全资产 + 零售 + 瑞士银行牌照 | $60B |
| **IG Group**（英国） | CFD + 专业零售 + spread betting | $90B 客户资金 |
| **CMC Markets**（英国） | CFD + spread betting | $8B |
| **Plus500**（以色列 / 塞浦路斯） | CFD 纯零售 | $20B |
| **DeGiro**（荷兰，2020 被 flatexDEGIRO 并） | 低佣 + 欧洲零售股票 | $40B |
| **eToro**（以色列） | 社交 + 跟单 + 加密 | $50B |

**Saxo 是"最像 Schwab / IB"的欧洲玩家**：完整产品、直接市场接入、高净值定位。

## 中国 / 吉利的影响

- **吉利 2018 买入 51.5%**（后降至 33%，Saxo 管理层重新增持）
- 战略目的：吉利在瑞典已经有 Volvo，扩展金融服务
- Saxo 提供**吉利在中国市场做金融科技**的技术栈
- 中国本土化**从未真正落地**（监管阻力）
- Geely 的介入**没有**大幅影响 Saxo 的产品方向或公司文化（Saxo 管理层保持独立）

## 机构产品线

- **Saxo Liquidity Provider**：给其他 broker 的白标流动性
- **Saxo Prime**（2020 启动）：做 Prime of Prime 业务，替代 ADSS、Finalto 等
- **Saxo Tech**：卖 SaxoOpenAPI + 平台 license 给其他金融机构

**Saxo 是"banker's banker"** —— 大量欧洲中型 broker 其实用 Saxo 的后端。

## 参考

- [Saxo Bank 官网](https://www.home.saxo/)
- [Saxo Bank — Wikipedia](https://en.wikipedia.org/wiki/Saxo_Bank)
- [Saxo OpenAPI 文档](https://developer.saxo/)
- [Geely 收购 Saxo Bank 2018](https://www.reuters.com/article/us-saxo-bank-m-a-geely-idUSKBN1HN1IJ)
- [Saxo 2024 annual report](https://www.home.saxo/about-us/investor-relations)
- `../03-architecture/01-broker-architecture.md`：broker 架构
- `../04-relationships/02-liquidity-chain.md`：流动性链条（Saxo 作为 PoP）
