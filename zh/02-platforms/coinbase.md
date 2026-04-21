# Coinbase

## 概览

Coinbase（NASDAQ：COIN）是美国最大加密所，2012 年由 Brian Armstrong 和 Fred Ehrsam 创立。2021 年 4 月通过直接上市登陆市场，在美国市场走的是"合规优先"路线，和离岸交易所区隔。主 app 面向零售用户，Coinbase Advanced Trade（前身 Coinbase Pro）面向专业交易员，Coinbase Prime 面向机构。2023 年起遭遇 SEC 重大执法行动，2025 年随美国监管环境转变大体收尾。

---

## 历史与创立

**Brian Armstrong**（1983 年出生于加州圣何塞）Rice 大学计算机 + 经济学出身，联合创立 Coinbase 前在 Airbnb 做软件工程师。联合创始人、CEO、主要股东。

**Fred Ehrsam** 与 Armstrong 在 Y Combinator 相识后联合创立 Coinbase；前 Goldman Sachs 交易员。2017 年离开 Coinbase，联合创立加密风投 Paradigm。

关键节点：

- **2012 年 6 月**：Coinbase 在特拉华注册；入选 Y Combinator 2012 夏期
- **2012**：上线，支持银行转账买卖比特币
- **2013**：获 Andreessen Horowitz（a16z）$25M B 轮
- **2014**：为专业交易员上线 GDAX（Global Digital Asset Exchange），带完整订单簿
- **2016–2017**：加密牛市期间增长；强调合规让它区别于对手
- **2018**：Coinbase Custody 上线，做机构资产托管
- **2019**：Coinbase Wallet（非托管、自托管）作为独立 app 上线
- **2020**：Coinbase Prime 上线——机构经纪业务，聚合多场地流动性
- **2021 年 4 月 14 日**：Coinbase 通过 **直接上市**（非传统 IPO）登陆 NASDAQ（代码 COIN）；开盘价 $381/股，估值 ~$996 亿
- **2021**：GDAX 更名 "Coinbase Pro"；后改名 "Coinbase Advanced Trade"
- **2023 年 3 月 22 日**：SEC 对 Coinbase 发出 Wells 警告——针对上币资产、Earn 质押、Coinbase Prime、Coinbase Wallet
- **2023 年 6 月**：SEC 起诉 Coinbase，指控其作为未注册 broker、交易所、清算机构运营
- **2023–2024**：Coinbase 反诉 SEC；诉讼持续；业务继续
- **2025**：SEC 纠纷取得标志性法律和解；美国监管环境转向
- **2026**：Coinbase 公开定位为"Everything Exchange"

---

## 公司架构

- **注册地**：美国特拉华
- **HQ**：加州旧金山；国际办公室在都柏林、伦敦、新加坡
- **上市**：NASDAQ：COIN（2021-04-14 直接上市）
- **CEO**：Brian Armstrong（联合创始人）
- **员工**：~3,500–7,000（波动大；2022–2023 熊市裁员）
- **监管**：FinCEN（MSB）、NY BitLicense、CFTC（衍生品）和国际对应方

---

## 产品与服务

### Coinbase（零售）

主消费端 app：
- 简单买卖界面；市价单 + 固定费或点差
- 支持 200+ 加密货币
- Coinbase One：~$30/月订阅（降费 / 免费 + 更高质押收益）
- Coinbase Card：带加密奖励的 Visa 借记卡
- 定投 / DCA 计划
- 合格资产的质押（受监管限制；2023 SEC 行动针对 "Earn" 质押）

### Coinbase Advanced Trade（Pro）

前身 GDAX / Coinbase Pro：
- 完整订单簿交易：限价、市价、止损
- 费率低于零售 Coinbase（maker/taker 模型）
- 2023 年改版后集成进主 Coinbase app
- REST + WebSocket API 给算法交易用

### Coinbase Prime

机构经纪：
- 跨 Coinbase Exchange + 外部场地的智能订单路由
- Prime Financing：机构客户信贷
- Prime Custody：冷存储，以纽约州特许有限信托公司身份受监管
- 组合分析、报告、合规工具
- 客户包括 BlackRock（IBIT）、MicroStrategy、Grayscale 和头部对冲基金
- 美国现货 BTC ETF 大多数的托管方（上线时 11 家中占 8 家，据公开披露）

### Coinbase Wallet

非托管自托管钱包（独立 app）：
- 用户自己持有私钥；资金与交易所账户分开
- 支持以太坊、Base（Coinbase 的 L2）和其他 EVM 链
- dApp 浏览器接 DeFi；NFT 浏览和转账

### Base（以太坊 L2）

Coinbase 2023 年上线 Base——基于 OP Stack 的以太坊 Layer 2：
- 开放、无许可区块链；Coinbase 不控制用户资金和交易
- Gas 用 ETH 支付
- 2024–2025 按 TVL 和交易量属头部 L2 之一

### Coinbase Derivatives

CFTC 注册的期货交易所，提供美国合规加密期货：
- Nano BTC 和 ETH 期货（1/100 合约规模）
- 2024 年前后上线；面向需要合规衍生品的美国零售和机构

---

## 费率结构

### 零售（简单界面）
- 固定费或点差：约 1.49%–3.99%，随支付方式和金额变化

### Advanced Trade（专业）

| 30 天成交档 | Maker | Taker |
|---|---|---|
| <$10K | 0.40% | 0.60% |
| $10K–$50K | 0.25% | 0.40% |
| $50K–$100K | 0.15% | 0.25% |
| $100K+ | 0.05%–0.10% | 0.10%–0.20% |

这费率比离岸同行（Binance、OKX、Bybit）高——反映了撑起美国合规地位的基建成本。

---

## SEC 监管行动（2023–2025）

Coinbase 史上影响最大的监管事件：

**2023 年 3 月 22 日**：SEC 发 **Wells 警告**，覆盖：
- 被指控为未注册证券的上币资产
- Coinbase Earn（质押服务）
- Coinbase Prime（机构经纪）
- Coinbase Wallet

**Coinbase 立场**：上币资产不是证券；SEC 无管辖权；SEC 执法不一致、拒绝给监管清晰度。

**反击**：Coinbase 根据《行政程序法》起诉 SEC，因其拒绝回应 Coinbase 的规则制定请愿。

**2023 年 6 月**：SEC 正式起诉——指 Coinbase 是未注册 broker、交易所、清算机构，点名至少 13 个代币为证券。

**2023 年 8 月**：Coinbase 申请驳回。

**2025**：美国行政换届和 SEC 领导层变动后，诉讼大体解决。Coinbase 2026 年 4 月公开声明中提到"2025 年标志性法律和解"，监管阴云"大部分消散"。到 2026 年 4 月研究窗口，具体和解条款（如果有）未完全公开披露。

---

## API 访问

- **Advanced Trade REST API**：订单、行情、账户；OAuth2 和 API key 鉴权
- **Advanced Trade WebSocket**：实时 L2 订单簿、成交、ticker、用户 channel
- **Prime API**：机构 REST 给 Prime 客户（组合、融资、托管）
- **FIX API**：Prime 机构客户的低延迟订单路由
- 文档：docs.cdp.coinbase.com

---

## 竞争地位

| 维度 | Coinbase |
|---|---|
| 美国监管地位 | 主要加密所中最强 |
| 机构可信度 | 高；BTC ETF 官方托管方 |
| 零售 UX | 同类最佳简单度 |
| 费率 | 高于离岸交易所 |
| 美国合规衍生品 | 是，通过 Coinbase Derivatives（CFTC） |
| 全球市场份额 | 以美国为主 |
| API 成熟度 | REST + WS + FIX（Prime）都强 |
| L2 / Web3 | Base L2 是重大基建投入 |

---

## 参考

- [Coinbase — Wikipedia](https://en.wikipedia.org/wiki/Coinbase)
- [Brian Armstrong — Wikipedia](https://en.wikipedia.org/wiki/Brian_Armstrong_%28businessman%29)
- [Fox Business — Coinbase 2021 直接上市](https://www.foxbusiness.com/markets/coinbase-ceo-brian-armstrong-nets-13b-and-climbing-after-historic-direct-listing)
- [Coinbase — Wells 警告回应](https://www.coinbase.com/blog/coinbase-responds-to-the-secs-wells-notice)
- [CNBC — Coinbase Wells 警告回应](https://www.cnbc.com/2023/04/27/coinbase-offers-fiery-response-to-sec-wells-notice-.html)
- [CoinDesk — 2023 年 3 月 SEC 警告 Coinbase](https://www.coindesk.com/policy/2023/03/22/sec-warns-coinbase-its-pursuing-enforcement-action-over-securities-violations)
- [Daily Hodl — Wells 警告全范围](https://dailyhodl.com/2023/03/22/coinbase-receives-sec-wells-notice-over-listed-crypto-assets-staking-service-coinbase-prime-and-coinbase-wallet/)
- [Coinbase Global S-1（2021）](https://www.sec.gov/Archives/edgar/data/1679788/000162828021003168/coinbaseglobalincs-1.htm)
