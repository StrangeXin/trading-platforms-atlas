# Kraken (Payward Inc.)

## 概览

Kraken 是仍在运营的最老加密所之一，2011 年在旧金山由 Jesse Powell 创立。法律实体 **Payward Inc.**（特拉华）。在美国可用的加密所里，Kraken 在安全和合规方面口碑一直很强。2025 年 5 月 Kraken 以 $15 亿收购 NinjaTrader——史上最大的传统金融 + 加密结合交易。Kraken 已秘密申报 IPO，目标 2026 年挂牌，估值约 $150–200 亿。

---

## 历史与创立

**Jesse Powell** 是 Kraken 主要创始人。创立 Kraken 之前，Powell 2011 年为 Mt. Gox（日本早期比特币交易所）做顾问，帮它从黑客事件中恢复。观察到 Mt. Gox 的严重安全和运营问题后，Powell 开始做一个更安全的替代。

Kraken 于 2011 年 7 月 28 日联合创立，联合创始人包括 Thanh Luu 和 Michael Gronager。

关键节点：

- **2011 年 7 月**：Payward Inc. 注册；Kraken 开始开发
- **2013 年 9 月**：Kraken 公开上线——最早支持 EUR 交易对的合规比特币交易所之一
- **2014**：最早通过密码学可验证的 proof-of-reserves 审计的交易所之一
- **2015**：收购 Coinsetter（美国比特币交易所）和 Cavirtex（加拿大）
- **2019**：收购 Crypto Facilities（英国 FCA 监管的加密期货交易所）——成为 Kraken Futures
- **2021**：收购 Staked（非托管质押平台）；向零售用户上线质押
- **2022**：Jesse Powell 辞任 CEO；任命 Dave Ripley（时任 COO）为 CEO；Powell 转任董事长。Powell 做了公司前十年的 CEO。
- **2023 年 2 月**：SEC 指控 Kraken 通过质押即服务做未注册证券发行；Kraken 同意关停美国质押并付 $3,000 万和解
- **2023 年 11 月**：SEC 再诉 Kraken 为未注册交易所
- **2023 年底**：Arjun Sethi（前 Tribe Capital VC）加入成为共同 CEO 与 Dave Ripley 并列，负责 IPO 准备
- **2025 年 3 月 20 日**：Kraken 宣布 $15 亿收购 NinjaTrader
- **2025 年 5 月 2 日**：NinjaTrader 收购交割
- **2025 年 11 月**：Payward 秘密申报 IPO
- **2025**：Payward 营收达 $22 亿（2024 年 $16 亿）；$2 万亿交易量（+34%）
- **2026 年 4 月**：Payward 同意以最高 $5.5 亿收购 Bitnomial（数字资产衍生品交易所）

---

## 公司架构

- **法律实体**：Payward Inc.（特拉华）
- **HQ**：加州旧金山
- **共同 CEO**：Dave Ripley + Arjun Sethi（2023 年底起）
- **创始人 / 董事长**：Jesse Powell
- **状态**：私人（到 2026 年 4 月；2025 年 11 月秘密 IPO 申报）
- **IPO 估值**：~$150–200 亿（据 Fortune/CoinTelegraph 报道）

---

## 产品与服务

### Kraken（零售）

基础现货交易界面：
- 200+ 加密货币
- 休闲用户简化 UI
- 法币进出通道：USD、EUR、GBP、CAD、AUD、JPY
- 可用范围：美国（多数州）、欧盟、英国、加拿大、澳洲

### Kraken Pro

专业交易界面：
- 完整订单簿 + L2 深度
- Maker/taker 费率结构（低于基础 Kraken）
- 高级图表和订单类型
- REST 和 WebSocket API
- 同一个 Kraken 账号内；无需单独注册

### Kraken Futures

原名 Crypto Facilities，英国 FCA 监管的加密期货平台，2019 年被 Kraken 收购：
- BTC、ETH 和主要山寨币的永续和定期期货
- 主要面向非美国合格客户（美国监管限制美国访问）
- 受英国 FCA 监管

### 质押

- 2023 年前 Kraken 向美国零售用户提供质押即服务（ETH、DOT、SOL 等）
- 2023 年 2 月：关停美国质押 + 付 $3,000 万 SEC 和解
- 和解后非美国用户通过不同机制仍可质押
- 2021 年收购 Staked 做非托管质押基础设施

### 机构服务

- **Kraken OTC**：大宗交易执行
- **Kraken Custody**：机构级数字资产托管
- **Kraken Institutional**：专业 / 机构客户统一品牌

### NinjaTrader（2025 年 5 月收购）

完整细节见 `ninjatrader.md`。战略逻辑摘要：
- NinjaTrader 的 CFTC FCM 牌照让 Kraken 能提供美国合规加密期货
- 给 Payward 生态加约 200 万用户
- 交叉销售：加密交易员接触期货；期货交易员在 Kraken 接触加密

### Bitnomial（2026 年 4 月宣布收购）

- 数字资产衍生品交易所
- 最高 $5.5 亿现金 + 股票
- 与 NinjaTrader 和 Kraken 一起扩展 Payward 的美国衍生品基础设施

---

## 技术

### API

- **REST API**：完整订单管理、账户、行情；Kraken 和 Kraken Pro 通用
- **WebSocket API**：实时公开（订单簿、成交、ticker）+ 私有（账户、订单更新）channel
- **FIX API**：机构客户；需要单独申请
- 限速：有文档并强制；相对离岸交易所偏保守
- SDK：Python、Node.js、Go（官方 + 社区）

### 安全记录

到 2025 年 Kraken 主平台没发生过大型交易所级黑客事件——在这个 Binance、Bitfinex、Mt. Gox、Bybit 等头部都中过招的行业里是个重要区分点。

2024 年 Kraken 披露了一起升级的 bug 赏金事件：安全研究员利用一个严重 bug 提走 ~$300 万测试资金；研究员拒绝归还，Kraken 把事情移交执法部门。

---

## 领导层

### Jesse Powell（创始人 / 董事长）

- Lewis & Clark College 毕业
- 自称加密极客 + libertarian；在 Twitter/X 上活跃发声
- 2011 年参与 Mt. Gox 恢复咨询，催生 Kraken 的"安全第一"路线
- 2023 年 4 月辞任 CEO（搜索结果确认该日期）；转任董事长
- 仍是重要股东

### Dave Ripley（共同 CEO）

- 前 Kraken COO
- Powell 辞任时接任 CEO
- 运营 CEO 角色；Sethi 聚焦增长和 IPO

### Arjun Sethi（共同 CEO）

- 前 Tribe Capital（加密 VC）合伙人
- 2023 年底加入做共同 CEO，负责 IPO 准备
- 据 Fortune（2025 年 9 月）：Sethi 正在"为 IPO 准备公司"（[Fortune](https://fortune.com/crypto/2025/09/25/kraken-ipo-ceo/)）

---

## 监管历史

| 年份 | 事件 |
|---|---|
| 2013 | 作为受监管的美 / 欧交易所上线，持 MSB 注册 |
| 2019 | 收购 FCA 监管的 Crypto Facilities；获得英国衍生品足迹 |
| 2022 | Jesse Powell 辞任 CEO；SEC 执法压力加剧 |
| 2023 年 2 月 | SEC 指控质押即服务为未注册证券；$3,000 万和解；美国质押暂停 |
| 2023 年 11 月 | SEC 进一步起诉 Kraken 为未注册交易所 |
| 2024 | SEC 诉讼持续；美国大选后政治环境转向 |
| 2025 | 监管环境变化后 SEC 案件大体解决 |

---

## 财务规模（2025）

- 营收：$22 亿（2025）；2024 $16 亿
- 交易量：$2 万亿（2025）；YoY +34%
- 日均交易数：NinjaTrader 收购后 +119%
- IPO 估值：$150–200 亿（据 Yahoo Finance《Kraken Confirms Confidential IPO Filing》）

---

## 竞争位置

| 维度 | Kraken |
|---|---|
| 成立 / 口碑 | 最老之一；安全记录强 |
| 美国监管地位 | 次强（仅次于 Coinbase） |
| 衍生品接入 | Kraken Futures（非美）、NinjaTrader（美国期货） |
| 质押 | 2023 SEC 和解后（美国）受限 |
| IPO 路径 | 2025 年 11 月秘密申报；目标 2026 |
| 多资产愿景 | 加密 + 传统期货（NinjaTrader）+ 衍生品（Bitnomial） |

---

## 参考

- [Kraken — Wikipedia](https://en.wikipedia.org/wiki/Kraken_%28cryptocurrency_exchange%29)
- [Kraken Blog — Kraken is Born](https://blog.kraken.com/news/kraken-is-born)
- [Contrary Research — Kraken 业务拆解](https://research.contrary.com/company/kraken)
- [Kraken — NinjaTrader 收购新闻稿](https://www.kraken.com/press/releases/kraken-to-acquire-ninjatrader-introducing-the-next-era-of-professional-trading)
- [Architect Partners — $15 亿 NinjaTrader 交易分析](https://architectpartners.com/kraken-acquires-ninjatrader-for-1-5b-the-largest-ever-bridge-deal/)
- [Fortune — Arjun Sethi IPO 准备（2025-09）](https://fortune.com/crypto/2025/09/25/kraken-ipo-ceo/)
- [Yahoo Finance — Kraken IPO 申报确认](https://finance.yahoo.com/markets/crypto/articles/kraken-confirms-confidential-ipo-filing-192328817.html)
- [CoinTelegraph — Payward 2025 营收](https://cointelegraph.com/news/kraken-parent-payward-revenues-jump-crypto-traders-flock-in)
- [CoinDesk — Bitnomial 2026 年 4 月收购](https://www.coindesk.com/business/2026/04/17/kraken-s-parent-company-payward-to-acquire-derivatives-exchange-bitnomial-for-usd550-million-in-cash-and-stock)
