# Bybit

## 概览

Bybit 是 2018 年成立的全球加密所，衍生品优先架构。到 2025–2026 年是全球第二大加密所（仅次于 Binance）。由 Ben Zhou 联合创立并担任 CEO，总部迪拜（2023 年从新加坡搬过去）。以永续合约深度流动性、跟单交易、零售衍生品用户强著称。2025 年 2 月 Bybit 遭遇史上最大加密货币黑客事件——约 $15 亿以太坊被朝鲜 Lazarus 集团（朝鲜）盗走。

---

## 历史与创立

**Ben Zhou** 是中国创业者，创立 Bybit 前在 XM（中国最大外汇 broker 之一）干了七年。他的零售外汇衍生品背景直接塑造了 Bybit 的早期产品方向。

关键节点：

- **2018 年 3 月**：Bybit 注册；创始团队包括 Ben Zhou（完整的联合创始人名单没公开大力披露）
- **2018**：平台上线，永续合约是核心产品——BTCUSD 反向永续（币本位）最高 100 倍杠杆
- **2019**：宣称占全球比特币交易量 10%；永续合约市场份额超越 BitMEX
- **2020**：产品线扩张；在币本位反向合约外加了 USDT 本位（线性）永续
- **2021**：上线现货交易——从纯衍生品走向全品类交易所
- **2021**：Bybit 跟单交易平台上线；成为核心差异化功能之一
- **2022**：加期权交易；推出 Unified Trading Account（UTA），允许现货和衍生品间跨保证金
- **2023**：Bybit 总部从新加坡搬到 **阿联酋迪拜**；新加坡业务大幅收缩，跟随 MAS 加密立场
- **2023**：注册用户涨到 ~2000 万
- **2024**：用户数翻三倍到 ~6000 万；现货市场份额从 2% 冲到 12%+
- **2025 年 2 月 21 日**：Bybit 遭受 $15 亿 ETH 黑客事件，归因朝鲜 Lazarus 集团——史上单次最大加密盗窃
- **2025**：黑客后恢复运营；Ben Zhou 公开主导沟通；Bybit 从自有储备中补贴用户损失，继续运营

---

## 创立地理和注册

- **最初注册地**：英属维尔京群岛（BVI）
- **初始 HQ**：新加坡（~2018–2023）
- **当前 HQ**：阿联酋迪拜（2023 迁移）
- **注册**：BVI（国际实体）；迪拜运营通过 VARA 的 VASP 注册
- **美国用户**：不可用；Bybit 按条款明确屏蔽美国 IP 和用户

---

## 产品线

### 永续合约（核心产品）

Bybit 的永续合约是创立产品，至今是成交量最大的板块：

- **USDT 本位（线性）**：USDT 结算；BTC、ETH 和几百种山寨币永续
- **币本位（反向）**：以标的币结算（如 BTC）；BTC 和 ETH 是主市场
- 杠杆：BTC/ETH 最高 100 倍；山寨币更低
- Funding rate：主流对 8 小时一次
- 2024 日衍生品成交：~$60 亿（据 SQ Magazine；落后 Binance 的 $155 亿，领先 OKX 的 $45 亿）

### 现货交易

- 2021 年上线；上线后增长迅猛
- 400+ 现货交易对
- 现货市场份额从 2023 年 ~2% 涨到 2024 年 12%+

### 期权

- BTC 和 ETH 期权；欧式
- 大约 2022 年加的

### Unified Trading Account（UTA）

2022 年推出，UTA 允许：
- 一个账号打通现货、永续、期权、保证金借贷
- 共享保证金：现货持仓可作为衍生品抵押
- 这是个值得注意的创新，后来 Binance 和 OKX 都以类似形式抄过去

### 跟单交易

Bybit 跟单交易是旗舰功能，也是重要的用户获取渠道：

- **Copy Trading Pro**（2024）：投资者可在现货和衍生品上自动跟单"Pro Masters"
- Pro Masters 赚取跟随者收益的最高 30%
- 跟随者资金锁定 180 天，每周有赎回窗口
- 现货和永续策略都支持
- Bybit 在跟单平台重构时已有 3000 万用户（据 [Finance Magnates](https://www.financemagnates.com/cryptocurrency/bybit-marks-30-million-users-as-new-copy-trading-platform-debuts/)）

### 其他产品

- **Bybit Earn**：质押、储蓄、收益产品
- **Bybit Card**：VISA 借记卡（欧洲 / 拉美）
- **Launchpad / Launchpool**：新币发行
- **NFT Marketplace**：集成 NFT 交易（范围有收缩）
- **P2P Trading**：点对点法币进出通道
- **Trading Bots**：网格、DCA、套利机器人

---

## 技术基础设施

### 撮合引擎

Bybit 撮合引擎从一开始就为衍生品吞吐做设计：
- 针对波动市场的峰值负载（加密衍生品和 BTC 波动高度相关）
- Bybit 多次强调引擎在市场压力事件下的表现
- 具体 TPS（每秒事务）容量数字未公开

### API

- **REST API**：完整的订单管理、账户、行情
- **WebSocket**：实时行情（订单簿、成交、ticker、kline）和账户私有流
- **Unified Account API v5**（2023 重写）：现货 + 衍生品 + 期权统一到同一个 API 面
- **SDK**：Bybit 官方维护 Python、Node.js、Go、C#、Rust
- **FIX API**：给机构和做市商
- 限速按账号档位

---

## 风控和清算引擎

Bybit 用 **Insurance Fund** + **Auto-Deleveraging（ADL）**：

- 仓位到达强平价，Bybit 接管并尝试市场平仓
- 平不掉就由 Insurance Fund 补差额
- Insurance Fund 不够时触发 ADL：对手方盈利交易员被自动减仓来覆盖损失
- Insurance Fund 规模在 Bybit 平台实时公开

---

## $15 亿黑客事件（2025 年 2 月）

Bybit 历史上最大的事件：

**日期**：2025 年 2 月 21 日
**被盗金额**：~$15 亿 ETH（约 401,347 ETH）
**始作俑者**：Lazarus 集团（朝鲜），FBI 于 2025 年 2 月 26 日正式认定

**怎么发生的**（据 [NCC Group 技术分析](https://www.nccgroup.com/research/in-depth-technical-analysis-of-the-bybit-hack/) 和 [Check Point Research](https://research.checkpoint.com/2025/the-bybit-incident-when-research-meets-reality/)）：
- Bybit 冷钱包管理用的是 Safe Wallet（多签钱包基础设施）
- 攻击者攻破了 **Safe Wallet 的前端源码**——不是直接攻破 Bybit 自身系统
- 恶意代码让一笔欺诈交易在签名 UI 里看起来像合法的
- 多名 Bybit 签名人（包括 Ben Zhou）签了一笔看似是常规冷钱包到温钱包转账的交易
- 底层交易其实是个合约升级，把 ETH 多签钱包的控制权交给了攻击者

**应对**：
- Ben Zhou 几小时内通过 X（Twitter）公开沟通，确认事件
- Bybit 从自有储备 + 行业伙伴紧急借款中补贴所有用户损失
- 用户没因此损失资金
- Bybit 推出资金追踪赏金计划
- 事件规模超过 Ronin Network 黑客（$6.25 亿，2022），成为史上最大加密盗窃

---

## 监管状态

- **迪拜**：Bybit 持 VARA（Virtual Assets Regulatory Authority）VASP 牌照
- **美国**：不可用；美国居民被 geo 屏蔽
- **欧盟**：在推进 MiCA 合规准备；2025 年状态在演化
- **新加坡**：2023 年大幅收缩业务；2024 年未获 MAS 持牌

---

## 费率结构

| 产品 | Maker | Taker |
|---|---|---|
| 现货（基础档） | 0.100% | 0.100% |
| 永续（基础档） | 0.020% | 0.055% |

VIP 档按 30 天成交量和 Bybit Token（BIT）持仓打折。等量级下衍生品费率和 Binance、OKX 相当。

---

## 规模和关键指标（2024–2025）

- 注册用户：6000 万+（2024；2023 年 ~2000 万，翻三倍）
- 日衍生品成交：~$60 亿（2024 均值）
- 现货市场份额：~12%（2024）
- 行业成交排名：全球第 2
- Insurance Fund：平台实时公开

---

## 参考

- [Bybit — Wikipedia](https://en.wikipedia.org/wiki/Bybit)
- [The Block — What is Bybit](https://www.theblock.co/learn/305102/what-is-bybit)
- [Ben Zhou — CryptoSlate profile](https://cryptoslate.com/people/ben-zhou/)
- [Finance Magnates — 3000 万用户 / 跟单重构](https://www.financemagnates.com/cryptocurrency/bybit-marks-30-million-users-as-new-copy-trading-platform-debuts/)
- [Wilson Center — The Bybit Heist](https://www.wilsoncenter.org/article/bybit-heist-what-happened-what-now)
- [NCC Group — Bybit 黑客技术分析](https://www.nccgroup.com/research/in-depth-technical-analysis-of-the-bybit-hack/)
- [Check Point Research — Bybit 事件](https://research.checkpoint.com/2025/the-bybit-incident-when-research-meets-reality/)
- [Chainalysis — Bybit 被盗分析](https://www.chainalysis.com/blog/bybit-exchange-hack-february-2025-crypto-security-dprk/)
- [CoinLaw — Bybit Statistics 2026](https://coinlaw.io/bybit-statistics/)
- [Coin Bureau — Bybit Copy Trading Review](https://coinbureau.com/review/bybit-copy-trading-review)
