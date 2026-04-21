# TopStep

## 概览

TopStep（前身 TopstepTrader）是美国期货 prop firm，2012 年在芝加哥由 Michael Patak 创立。公认为 **Trading Combine 模式的发明者**——此后被全球几十家 prop firm 复制的评估式出资结构。TopStep 专攻期货（不做外汇或 CFD），用 CME Group 标的，与主要期货数据 + 执行基础设施合作。到 2026 年已向出资交易员支付 $1.02 亿+。

---

## 历史与创立

**Michael Patak** 是前 CBOT（Chicago Board of Trade）Dow 期货场内交易员。2012 年 7 月在 CBOT 交易场内创立 TopstepTrader，评估流程是照 NFL Scouting Combine 来的——所以叫 "Trading Combine 评估期"。

关键节点：

- **2012 年 7 月**：Michael Patak 上线 TopstepTrader；总部芝加哥 141 W Jackson Blvd（距 CME Group 几步路）
- **2012**：推出 Trading Combine 模式——行业首个评估式出资期货账号项目
- **2016–2018**：快速增长；成为美国期货 prop firm 主导者
- **2020**：从 "TopstepTrader" 改名 **"Topstep"**
- **2021**：加 TradingView 作为支持平台；平台多元化
- **2022**：加 Quantower 作为免费平台
- **2023**：Topstep 保持期货 prop 交易市场领先；竞品（Apex、Earn2Trade、Uprofit）以类似模式冒头
- **2025 年 7 月 7 日**：所有新 Trading Combine 评估期转到专属 **TopstepX** 平台（由 ProjectX 技术驱动）
- **2024 年 8 月**：TopstepX 上的 Trading Combine 评估期默认 Daily Loss Limit 取消（其他连接平台保留）
- **2026 年 1 月**：2026-01-12 及之后加入的交易员新分润 **90/10**
- **2026**：累计分润 $1.02 亿+；13,600+ Trustpilot 评价，4.3 星

---

## Trading Combine 评估期模式

TopStep 发明了 "Trading Combine 评估期"——行业评估式出资的模板：

### 怎么运作
1. **买 Combine**：交易员付订阅费（$50–$150+/月，按账号规模）
2. **通过评估**：在定义的风险上限内，通过模拟期货账号证明盈利能力
3. **拿出资**：通过后获得实盘出资账号访问权
4. **交易赚钱**：交易员保留批准分润的 90%（2026 年后）

### Combine 参数（2025–2026）

| 账号规模 | 盈利目标 | 最大损失限制 | 日亏损 |
|---|---|---|---|
| $50K | $3,000 | $2,000 | 取消（TopstepX） |
| $100K | $6,000 | $3,000 | 取消（TopstepX） |
| $150K | $9,000 | $4,500 | 取消（TopstepX） |

注：第三方平台（NinjaTrader、Quantower、TradingView、Tradovate）上的 Daily Loss Limit 目标仍强制执行。Daily Loss Limit 取消只在 TopstepX 平台上生效。

### 关键规则
- **Maximum Loss Limit（MLL）**：账户总回撤不能超阈值；触 MLL Combine 结束
- **无时间限制**：交易员可以任意时长通过（不像 FTMO 的 30 天限制）
- **一致性**：无特定一致性规则（不像某些竞品），但异常大的盈利日会被标记
- **标的**：仅限 CME Group 期货（ES、NQ、YM、RTY、CL、GC、ZB 等）
- **无外汇 / CFD**：Topstep 是纯期货公司

---

## 平台

TopStep 官方支持多个交易平台：

### TopstepX（2025 年 7 月起为主）

Topstep 专属平台，基于 **ProjectX** 技术：
- CME 行情数据每 50ms 更新
- 风险规则（最大损失、日停用）在平台内直接强制
- 2025-07-07 起所有新 Trading Combine 评估期必须用
- Combine 和 Funded 阶段免费用
- Web + 桌面

### NinjaTrader 8

- Topstep 交易员最早也最流行的平台
- 通过 Rithmic 数据源连接
- 高级图表、NinjaScript 策略、L2 DOM
- 出资账号可用；出资阶段收费
- 仍是 Topstep 上经验丰富期货交易员的首选

### Quantower

- 免费专业交易平台
- 支持高级 order flow 工具（footprint 图、volume profile）
- Topstep 大约 2022 年加
- 通过 Rithmic 连接

### TradingView

- 云端图表；零售交易员广泛使用
- Topstep 大约 2021 年加 TradingView 集成
- 执行能力相对 NinjaTrader 或 Quantower 有限
- 适合不需要 order flow 工具的图表交易员

### Tradovate

- Web 端期货交易平台
- 作为支持选项加入
- 执行界面更简单；适合主观交易员

### Rithmic 数据源

所有第三方平台（NinjaTrader、Quantower、Tradovate）通过 **Rithmic** 连到 Topstep——期货行业标准数据 + 路由基础设施。Rithmic 提供：
- 实时 CME Globex tick 数据
- 账户管理 API（Topstep 用它实时监控回撤）
- 交易所订单路由

---

## 标的

TopStep 仅支持 **CME Group 标的**：

| 类别 | 例子 |
|---|---|
| 股指 | ES（S&P 500）、NQ（Nasdaq 100）、YM（Dow）、RTY（Russell 2000） |
| 能源 | CL（原油）、NG（天然气） |
| 金属 | GC（黄金）、SI（白银） |
| 利率 | ZB（30Y T-Bond）、ZN（10Y T-Note）、ZF（5Y） |
| FX 期货 | 6E（EUR/USD）、6J（JPY/USD）等 |
| 微型 | MES、MNQ、MYM、M2K（以上微型版） |

无外汇（现货）、无 CFD、无加密。这是它区别于 FTMO 这类做外汇和 CFD 的 prop firm 的关键差异。

---

## Michael Patak —— 创始人资料

- 前 CBOT 场内交易员——具体是 Dow Jones（YM）期货 pit
- 2012 年 7 月以 NFL Scouting Combine 为灵感发起 TopstepTrader
- 期货交易作为职业方向的公开倡导者；社媒活跃
- 到 2026 年仍是 Topstep CEO（多家评测确认他仍担任该角色）
- 公司的场内交易起源故事是品牌身份营销的核心

---

## 商业模式

TopStep 的营收主要来自：

1. **Combine 订阅**：评估交易员付 $50–$150+/月
2. **账号重置**：失败的交易员付费重置 Combine
3. **实盘交易基础设施**：出资交易员交易时收费（平台费、数据费）
4. **重置费**：出资交易员违反风险上限后付费"重置"

大多数评估交易员会挂掉——这让模式可持续。只有盈利、控风险的交易员最终拿到出资账号。

---

## vs CFD/外汇 Prop Firm 的区别

TopStep 结构上不同于 FTMO、FundedNext、The5ers：

| 维度 | TopStep | FTMO / 外汇 Props |
|---|---|---|
| 标的 | 仅 CME 期货 | 外汇、股指、商品、加密 CFD |
| 监管 | 期货市场贴近 CFTC | 监管较少（CFD/零售外汇） |
| 平台生态 | NinjaTrader、Quantower、TopstepX | MT4、MT5、cTrader |
| 原籍国 | 美国（芝加哥） | 欧洲（布拉格）、以色列、迪拜 |
| 商业模式 | 同评估模式 | 同评估模式 |
| 时间限制 | 无 | 通常 30 天（FTMO） |
| 流动性 | 真实 CME 市场流动性 | 合成 / 银行间 CFD |

---

## 规模和当前状态（2025–2026）

- **总部**：141 W Jackson Blvd, Chicago, IL（距 CME Group 几步路）
- **累计分润**：$1.02 亿+
- **Trustpilot**：4.3/5，13,600+ 评价
- **分润**：2026-01-12 起加入的交易员 90/10
- **平台**：TopstepX 为主；NinjaTrader 等在出资阶段仍可用
- **活跃竞品**：Apex Trader Funding、Earn2Trade、Uprofit、TradeDay、Elite Trader Funding

---

## 参考

- [TopStep Wikipedia](https://en.wikipedia.org/wiki/TopstepTrader)
- [TopStep — Trading Combine 评估期参数 Help Center](https://help.topstep.com/en/articles/8284197-trading-combine-parameters)
- [PropTradingVibes — Michael Patak 故事](https://www.proptradingvibes.com/blog/topstep-ceo-michael-patak)
- [TopStep — FAQ](https://www.topstep.com/faq/)
- [JoinProp — TopStep 评测](https://joinprop.com/prop-firm/topstep/)
- [Marks Insights — Topstep 2026 评测](https://marksinsights.com/topstep/)
- [FIA — New Member Profile: Topstep](https://www.fia.org/fia/articles/fia-new-member-profile-topstep)
- [TradingFXVPS — TopStep NinjaTrader 安装指南](https://tradingfxvps.com/how-to-install-topstep-to-ninjatrader-complete-installation-guide/)
- [QuantVPS — 用 TradingView 的期货 prop firm](https://www.quantvps.com/blog/futures-prop-firms-that-use-tradingview)
- [PickMyTrade — TopstepX vs Topstep Classic](https://blog.pickmytrade.io/topstepx-vs-topstep-classic-better-2025/)
