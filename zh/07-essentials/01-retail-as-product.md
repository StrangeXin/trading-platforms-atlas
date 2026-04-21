# 零售交易者是产品，不是客户

**单句论点**：在零售交易生态里，你不付费买服务 —— 你就是被卖的那件商品。链条上每个玩家都从你的"活动"里抽血，没人靠你赢钱来赚钱。

## 一、"看起来"与"实际上"

| 看起来 | 实际上 |
|---|---|
| Broker 帮你接入全球市场 | Broker 赚你的点差 markup + 你亏损的钱（B-book）|
| 平台（MT4/5）是中立工具 | 平台赚 broker 的 license 费，broker 从你身上赚回来 |
| Prop Firm 发现天才 trader | Prop Firm 赚 challenge 报名费 + 失败率 85%+ |
| 数据商提供行情 | 数据商赚 broker 的订阅费，broker 从你身上赚回来 |
| YouTube 大 V 教你财富自由 | V 赚联盟分成，broker 给他按你入金 30-50% 返佣 |
| 监管保护零售 | 监管提高了行业进入门槛，保护在位者 |

整条链所有的现金流**源头**是你的入金。每个中间环节都拿一点。

## 二、$1 入金的分配图（典型零售 FX broker）

假设你给一个 CySEC 持牌 broker 入金 $1,000。12 个月内平均走向：

```
$1000 入金
  ↓
 broker 持有（你的账户余额）
  ↓ 你开始交易
┌──────────────────────────────────────┐
│ 12 个月典型路径（ESMA 数据）:            │
│                                      │
│  70-89% 概率你账户余额归零或接近归零         │
│  中位数实际损失：$700-800 消失             │
│                                      │
│  这 $700-800 分配：                    │
│    - Broker B-book 内部消化：~$500      │
│    - Spread markup（累计）：~$150       │
│    - Overnight swap：~$50-100          │
│    - 滑点 / 流动性成本：~$50            │
│                                      │
│  Broker 然后再分配：                    │
│    - MetaQuotes license：~$10          │
│    - 数据供应商（TwelveData 等）：~$5    │
│    - Prime Broker fee：~$10            │
│    - IB / 推荐人返佣：~$100-200         │
│    - CySEC 合规 + 营销成本：~$100       │
│    - 净利润：~$100-200                │
└──────────────────────────────────────┘
```

这不是阴谋 —— 是 **ESMA 官方公开数据 + 行业基准利润率**自然导出的。

## 三、每个角色的真实收入来源

### Broker

- **表面**：提供交易接入，收点差 / 佣金
- **真实**：70-80% 营收来自 **B-book 内部消化**（你亏 = broker 赚 100%）
- **余下**来自 A-book 的 markup + swap + 过期费 + 提现费
- 高留存比高转化重要，所以 UI 全是"让你多交易"的机制

### 平台（MT4/MT5/TradingView/cTrader）

- **表面**：软件工具
- **真实**：**broker 的 CRM + 获客漏斗**
- MT5 server license：$2-5 万 / broker / 年 + per-account 费用
- TradingView broker 集成：$5-50 万 / broker / 年
- 这些费用最终从 broker 的 markup 抠出来 = 从你口袋出

### Prop Firm

- **表面**："发现人才 + 分配资金"
- **真实**：**challenge 报名费是主营业务**
- FTMO 2024：$329M 营收，$62M 净利（19% 净利率，比拉斯维加斯赌场的 5-15% 净利率更高）
- 大多数 prop firm 的 "funded" 资金是 demo —— 你永远没真正动过真钱
- 详情见 `02-prop-firm-casino.md`

### 数据供应商

- **表面**：卖行情
- **真实**：向 broker / 交易所 / 算法交易员分级卖 feed
- Bloomberg Terminal：$27,000 / seat / 年（机构）
- Refinitiv Eikon：$20,000+ / 年
- TwelveData / Polygon（零售友好）：$50-500 / 月
- 零售交易员几乎不直接付；broker 订阅后从 markup 里赚回来

### 金融网红 / IB（介绍经纪人）

- **表面**：教育博主 / 信号提供
- **真实**：broker 按你入金返 30-50% 给 IB，按你亏损额的一定比例再返
- 这就是 YouTube / TikTok / Discord / Telegram "trading guru" 的真实商业模型
- 他们最赚的时候是你**刚入金但还没亏完**那段 honeymoon
- 一旦你爆仓退出，他们会推下一个人来开户

### 交易所（加密 / 股票）

- **表面**：中立场地
- **真实**：收 listing fee（加密：$1-5M 一个币）、交易手续费（0.01-0.1%）、做市商返佣、自营做市
- 加密所还兼任 broker + custodian + MM，多重利益冲突 —— 详情 `05-crypto-vertical-conflict.md`

### 监管机构

- **表面**：保护消费者
- **真实**：设定行业准入门槛 + 收年费 + 增加合规成本（MiFID II 合规成本从 $10K/年飙到 $500K+/年）→ 清洗小玩家，保护在位者
- "30:1 杠杆上限"看似保护散户，实际是**行业的自我保险**（防止大规模爆仓引发政治压力）

## 四、零售的三种命运

按 ESMA + 业内数据，一个典型零售账户在 12 个月内的分布：

| 结局 | 比例 | 特征 |
|---|---|---|
| **全亏 + 退出** | 50-60% | 入金 3-6 个月内账户归零，不再入金 |
| **亏损但不断加金** | 25-35% | 平均 input→output ratio 3:1，总亏损最大的群体 |
| **小盈 / 平平** | 7-15% | 交易量低，broker 嫌他不值得维护 |
| **持续盈利** | **2-5%** | broker 会把这部分强制走 A-book，不让内部消化 |

零售 broker 的商业模型**依赖第二类**—— 亏损但持续再入金的用户。他们是 LTV 最高的"客户"。

## 五、这和传统赌场的区别

| 维度 | 赌场 | 零售 FX |
|---|---|---|
| 玩家胜率 | 数学上明确低于 50% | 数学上也低于 50%（由点差 + 杠杆导出）|
| 技能成分 | 部分（扑克）/ 全无（老虎机）| 部分 —— 真有少数人能稳定赢 |
| 房子加价 | 每手 2-5%（vig） | 每手 0.1-2 pip spread + overnight swap |
| 监管分类 | 博彩 | 金融服务 |
| 营销合法性 | "娱乐、小玩"免责 | "投资、理财、被动收入"鼓励 |
| 成瘾设计 | 明确承认 | 否认，但 UI 一模一样 |

**关键差异**：赌场法律上是"博彩"，不能卖给未成年；零售 FX 法律上是"金融服务"，谁都能玩。后者的社会危害更隐形但更大。

## 六、谁真的从零售身上赚得最多

按营收贡献给散户带来的 "转移" 金额估算：

1. **零售 broker**（CySEC 系的 Plus500、Exness、XM、FxPro 等）—— 最大受益者
2. **Prop Firm**（FTMO 等头部）—— 报名费业务暴利
3. **MetaQuotes**（MT4/MT5 拿 license + per-account 费）
4. **Prime Broker / LP**（服务 broker，从 broker 抽）
5. **加密所**（兼营零售 + 做市）
6. **数据 / 平台供应商**（TradingView 等）
7. **金融网红 / IB 网络**
8. **监管 / 牌照中介**

## 七、怎么破解

如果你真的想做零售交易：

1. **先承认游戏规则**：这是负和游戏（对你），要求你有**足够大的边际**才能穿透链条成本
2. **削减中间环节**：
   - 直接接 Tier-2 broker（IC Markets、Pepperstone）而不是小零售
   - ECN 或 commission-based，避开 markup broker
   - 避开 copy trading、信号订阅、付费课程
3. **削减杠杆**：1:5 到 1:10 是理性上限；超过这个数字你在和时间赛跑
4. **增加时间维度**：日内交易的成本结构最不利；波段 / 持仓周为主
5. **退出的勇气**：零售交易者中**最赚的动作**往往是**不交易**
6. **如果你想做这行当职业**：当 broker 或 Prop Firm，不是当 trader。详情 `03-broker-economics.md`

## 八、数据速查

- **零售 FX 全球日成交量**：$400-700B（BIS 2022）
- **全球零售 FX 账户数**：~1500-2000 万个活跃账户（2024 业内估算）
- **一个 broker 的平均账户寿命**：3-6 个月
- **零售客户 LTV（净）**：$100-500（CySEC broker 数据）
- **零售客户 CAC（获客成本）**：$50-200
- **行业总年营收（零售 FX / CFD）**：$10-15B（Finance Magnates Intelligence）
- **占全球 FX 比例**：5-10%

## 参考

- [ESMA 官方零售 CFD 风险披露规则（74-89% 亏损）](https://www.esma.europa.eu/press-news/esma-news/esma-agrees-prohibit-binary-options-and-restrict-cfds-protect-retail-investors)
- [BIS Triennial Central Bank Survey 2022](https://www.bis.org/statistics/rpfx22.htm)
- [FTMO 2024 财报（Finance Magnates 报道）](https://www.financemagnates.com/forex/ftmos-parent-netted-over-62-million-on-329m-revenue-in-2024/)
- `02-prop-firm-casino.md`：Prop Firm 本质深入
- `03-broker-economics.md`：Broker 盈利结构
- `../04-relationships/02-liquidity-chain.md`：流动性链条
- `../01-history/03-retail-fx-boom.md`：零售 FX 历史
