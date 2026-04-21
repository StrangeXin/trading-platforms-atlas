# OKX

## 概览

OKX 是全球加密所，提供现货、永续 + 定期期货、期权、跟单交易和集成的 Web3 钱包。按衍生品成交量稳居全球前 3。2013 年徐明星（Star Xu）在北京创立 OKCoin，通过 OKEx 过渡到 OKX（2022 年改名）。国际交易所实体注册在塞舌尔；运营团队全球分布，在阿联酋、新加坡、欧盟有大量 presence。

---

## 历史与创立

**徐明星（Star Xu）** 是连续创业者，此前在雅虎中国和阿里巴巴工作过。他 2013 年在北京创立 OKCoin，为中国大陆市场提供支持人民币的比特币交易。

关键节点：

- **2013**：徐明星在北京创立 OKCoin；初期聚焦 BTC/CNY 现货
- **2014**：OKCoin 融资；扩到 USD 对；加基础期货模拟工具
- **2017**：OKEx 作为面向国际的独立交易所上线，做高级衍生品（期货、永续合约）服务非中国用户；在中国大陆之外注册
- **2017**：中国禁加密所；OKCoin 和 OKEx 都把业务转到海外
- **2020**：OKEx 一度暂停提现数周，涉及某关键股东被中国当局拘留调查（广泛报道但具体细节未完全公开）
- **2022 年 1 月**：OKEx 改名 **OKX**；信号从"交易所"身份转向覆盖交易、钱包、链上基础设施的多产品平台
- **2022**：OKX 在主平台内推出 Web3 钱包作为独立产品
- **2023**：OKX 签下英超（曼城）和 F1 迈凯伦赞助；激进的品牌扩张
- **2024**：OKX 用 "Smart Sync" 升级现货跟单；扩展永续上币（含 AEVO）
- **2024**：据报道徐明星退出日常运营；到 2024 年研究时 OKX 领导结构未完全公开披露
- **2025–2026**：OKX 继续按衍生品成交量排在 Binance 之后前 3；领先 Bybit

---

## 公司架构与注册

- **国际交易所实体**：OKX Trading Ltd，注册在**塞舌尔**
- **母集团**：OK Group（未上市；到 2024 年完整股东结构无公开披露）
- **创始人 / 主要股东**：徐明星（Star Xu）
- **辖区**：OKX 在不同国家运营区域实体，受当地监管；具体监管状态因地区而异——主产品对美国客户不可用
- **美国 presence**：OKX 不向美国用户提供主交易所产品；面向美国的产品有限，仍在监管分析中

---

## 交易产品

OKX 在单一统一账户下提供完整标的套件：

### 现货
- 350+ 代币；500+ 交易对
- 标准订单簿：限价、市价、止损限价、冰山单
- 主要对（BTC/USDT、ETH/USDT）流动性深，正常市场条件下亚 500ms 执行

### 永续合约
- USDT 本位、USDC 本位、币本位永续
- 杠杆最高 125x（按档位和品种）
- Funding rate 机制锚定现货
- BTC 和 ETH 永续流动性深；与 Binance、Bybit 相当

### 定期期货
- 主要加密的季度和半季度合约
- 部分合约支持实物交割

### 期权
- BTC 和 ETH 期权（USDT 本位、USDC 本位、币本位）
- 欧式；交易所报价 Greeks
- 相对现货和永续是较新产品

### 跟单交易
- 现货和衍生品跟单
- "Smart Sync" 2024 年 10 月加入现货跟单，一键镜像领头交易员组合
- 领头交易员赚取跟随者收益分成

### 交易机器人
- 网格机器人（现货和合约）
- DCA（定投）机器人
- 套利机器人
- Signal bot

---

## 撮合引擎和技术

OKX 撮合引擎在现货 + 衍生品上吞吐量高：
- BTC/USDT 对市价单正常市场条件下 500ms 内执行，滑点极小（据 [The Coinomist 2026 评测](https://thecoinomist.com/spot-trading/okx-review/) 引用的独立测试）
- 峰值 TPS 容量未公开披露；OKX 声称机构级基础设施
- 在 CoinMarketCap 和 CoinGecko 榜单上按衍生品未平仓合约和成交量稳居前 3

---

## Web3 钱包集成

OKX 的 Web3 钱包是原生嵌入平台的关键差异点：

- **非托管**：用户持私钥；OKX 无法访问钱包资金
- **多链**：支持 100+ 区块链
- **内置 DEX 聚合器**："X Routing" 跨主要 DEX 聚合流动性做最优 swap
- **NFT 市场**：在钱包界面内浏览和交易多链 NFT
- **dApp 浏览器**：在 OKX 内访问 Web3 应用
- **跨链桥**：内置支持链间桥接

这集成把 OKX 定位为 CeFi + DeFi 统一平台——相对 Binance（Web3 钱包是独立产品，集成深度较浅）的一个差异。

---

## 费率结构

OKX 用基于 30 天成交量 + OKB（原生代币）持仓的分档 maker/taker 模式：

| 档位 | Maker | Taker |
|---|---|---|
| VIP 0（默认） | 0.080% | 0.100% |
| VIP 1–3 | 0.060%–0.070% | 0.080%–0.090% |
| VIP 4+ | 更低；机构谈判定价 |

OKB 持有者享受费率折扣。对活跃交易员这些费率和 Binance 具竞争力，一般低于 Coinbase。

---

## API 访问

OKX 提供多种 API：

- **REST API**：HTTPS 完整交易、账户、行情
- **WebSocket API**：实时行情流（订单簿、成交、ticker）；也支持账户更新和订单状态私有 channel
- **FIX API**：机构客户可用；零售不公开宣传
- 限速按账号档位记录并强制执行

OKX REST 端点（如 `GET /api/v5/market/candles?instId=BTC-USDT`）被第三方工具和聚合器广泛用来拿 K 线 / 价格数据——反映 API 对程序化行情访问的适用性。

---

## 监管位置

OKX 的监管情况复杂且在演化：

- 国际交易所实体在塞舌尔（离岸、宽松辖区）
- OKX 在多辖区追求牌照：新加坡 MAS、迪拜 VARA、塞浦路斯 CySEC（OKX Europe）
- 主交易所产品**对美国用户不可用**；主动 geo 屏蔽美国 IP
- 2024 年 OKX 与美国司法部就历史美国客户访问相关的 Bank Secrecy Act 违规付 $5.05 亿和解（广泛报道）
- DOJ 和解后 OKX 宣布重新聚焦合规，正规追求美国市场准入
- OKX US（独立实体）到 2025 年处于探索 / 开发阶段

---

## 徐明星 —— 创始人资料

- 中国成都出生
- 创立 OKCoin 前在雅虎中国和阿里巴巴工作
- 加密行业公众人物；2020 年事件广泛报道但涉及的是另一名股东，并非徐明星本人——到 2024 年研究时，徐明星当前运营角色无公开详细披露
- OKX 不公开详细管理层简介或股东结构

---

## 2024–2026 重要事件

- **2024 DOJ 和解**：历史 Bank Secrecy Act 违规付 $5.05 亿
- **2024**：OKX 扩展永续上币；Smart Sync 跟单上线
- **2025**：OKX 继续在欧盟、迪拜、新加坡推进监管牌照
- **2026**：到 2026 年 4 月，OKX 按全球衍生品成交量排第 2 或第 3（落后 Binance，与 Bybit 争）

---

## 竞争位置

| 维度 | OKX |
|---|---|
| 衍生品成交量 | 全球前 3 |
| Web3 集成 | 主流 CeFi 交易所中同类最佳 |
| 美国可用性 | 多数产品被屏蔽 |
| 监管状态 | 混合；离岸 + 选择性持牌 |
| 费率竞争力 | 等档位上与 Binance 相当 |
| API 成熟度 | 强；REST + WS + FIX |
| 跟单 | 现货 + 衍生品都有 |

---

## 参考

- [OKX — Wikipedia](https://en.wikipedia.org/wiki/OKX)
- [徐明星 — OneKey blog](https://onekey.so/blog/ecosystem/star-xu-xu-mingxing-okx-founder-and-the-architect-of-the-exchange-era/)
- [Coinomist — OKX Review 2026](https://thecoinomist.com/spot-trading/okx-review/)
- [BeInCrypto — OKX Review 2026](https://beincrypto.com/learn/okx-review/)
- [GlobeNewswire — Smart Sync 跟单 2024 年 10 月](https://www.globenewswire.com/news-release/2024/10/25/2969249/0/en/OKX-Enhances-Spot-Copy-Trading-Tool-with-Smart-Sync-Effortlessly-Mirror-Lead-Traders-Spot-Portfolios-with-One-Click.html)
- [Arbitrum Docs — OKX 集成参考](https://docs.arbitrum.io/for-devs/third-party-docs/OKX)
- [IQ Wiki — OKX](https://iq.wiki/wiki/okx)
