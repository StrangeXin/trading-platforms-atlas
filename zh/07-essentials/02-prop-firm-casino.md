# Prop Firm = 赌场 + 技能竞赛（混合体）

**单句论点**：Prop Firm 的 challenge 阶段基本等于赌场；funded 阶段取决于公司是真对冲还是继续纯 B-book。整条产业链的 19% 净利率来自统计学上精心设计的失败率。

## 一、商业模式拆解

### 表面叙事

> "我们发现有天赋的 trader，给他们资金交易，分享利润。你付一笔小报名费证明自己，过关就分你钱。"

### 实际流程

```
你付 $100-1000 challenge 报名费
    ↓
拿到一个 demo 账户（$10K-$200K 虚拟资金）
    ↓
30 天内要求：利润目标 ≥ 10%
规则：日亏损 ≤ 5%、最大回撤 ≤ 10%、最低交易天数 ≥ 4-10 天
    ↓
85-93% 失败（业内估算）→ 报名费归 Prop Firm
7-15% 通过
    ↓
拿到 "funded" 账户（仍然绝大多数是 demo）
    ↓
继续规则（日亏 / max DD / 最低天数）
    ↓
利润 80/20 或 90/10 分成
    ↓
真实 payout 支付率：第一次通过后，大部分人在 3-6 个月内违规出局
```

## 二、规则是怎么"数学设计"出失败率的

典型 FTMO-like 参数：

| 规则 | 数值 |
|---|---|
| 起始资金 | $100,000（demo）|
| 利润目标 | $10,000（10%）|
| 日亏损上限 | $5,000（5%）|
| 最大回撤 | $10,000（10%）|
| 最低交易天数 | 10 个不同日子 |
| 时间窗口 | 30 天 |

**数学问题**：

- 要 30 天做 10%，年化 ≈ 120%
- 大多数专业对冲基金长期年化 15-25%；你要做对冲基金 5 倍的速度
- 唯一"可行"路径 = 高杠杆 + 窄止损 + 大仓位
- 但高杠杆 + 大仓位触发 daily loss 5% 的概率极高
- 即便你的边际胜率 55%，盈亏比 2:1（已经是专业水平），30 天内触发 max DD 的概率仍然 > 60%

**换句话说**：规则集在 **凯利公式优化** 的意义上几乎没有安全解。**是被设计让你失败的**。

这不是巧合 —— prop firm 运营商几百次迭代过这些参数，每次调整都是在"让 15-20% 通过率"和"让想挑战的人觉得自己有可能过"之间找平衡点。

## 三、业内数字

### FTMO 是行业最头部、数据最透明

- **2024 营收**：$329M（CZK 6.84B）
- **2024 净利润**：$62M
- **净利率**：19%
- **10 年累计 payout 给 trader**：$450M（2015-2025，官方数字）
- **累计账户数**：230 万 +
- **累计真实付过钱的 trader**：公开数据没给，业内估算 15-20 万人

### 对比赌场

| 业态 | 典型净利率 |
|---|---|
| 拉斯维加斯 Strip 赌场 | 5-15% |
| 澳门 VIP 赌厅 | 3-8% |
| 在线 sports book | 5-10% |
| **Prop Firm 头部（FTMO）** | **19%** |
| 在线扑克厅（PokerStars）| 10-15% |

Prop Firm 净利率比赌场高 —— 因为 prop firm 没有实体成本（no 建筑、no 发牌员、no 免费酒水），还有每家用户"愿意自愿付报名费"的心理学优势（参与者以为自己在"投资技能"而不是"下注"）。

### 失败率

业内没统一披露，但估算：

- **Challenge 阶段 failure rate**：80-90%
- **Phase 2 / Verification failure rate**：30-40%（通过 phase 1 的人里）
- **Funded 阶段失败（违规出局）**：6 个月内 60-75%
- **从 challenge 到拿到第一次 payout**：约 3-7% 的入场者能做到
- **从第一次 payout 到持续获利 12 个月**：再减到 1-2%

## 四、MyForexFunds：模式极端化的定罪案例

**MyForexFunds（MFF）** 2020-2023 年迅速成为全球第二大 prop firm（按 client 数）。2023 年 8 月 28 日被 CFTC 在新泽西联邦法院起诉（Case 1:23-cv-11808）。

**CFTC 的指控核心**：

1. MFF 宣称 trader 过关后在"真实账户"交易 —— 但**从未把任何资金路由到外部市场**
2. 所有所谓 "funded" 账户仍然是 demo / B-book 内部账户
3. 当 trader 真的盈利到一定程度，MFF 会故意制造"服务器问题""滑点""违规判定"把账户取消
4. 累计"诈骗" $310M（CFTC 用词）

**2025 年 5 月**特别专员报告显示 CFTC 调查存在程序问题，部分指控被驳回 —— 但核心事实（没有真实账户对冲）**没有被否认**。

**为啥这很重要**：MFF 不是异类。它的模式就是**所有 challenge-based prop firm 的极端版本**。区别只是：
- 其他 prop firm 的 funded 阶段**可能**有部分真实对冲（特别是大账户）
- MFF 把"完全不对冲"做到了全业务
- 被起诉的直接原因不是商业模式本身，而是**向 trader 明确承诺了"真实账户"却没有兑现**

## 五、为啥 Prop Firm 不是完全的赌场

### 真有人能持续赚钱

- 扑克厅也 90% 人亏钱，但不叫赌场
- 区别在于**是否存在技能维度**
- Prop Firm 的技能维度真实存在：风控纪律、情绪管理、市场解读、仓位管理
- 最顶层的 prop trader 有 Sharpe 1.5-2.0 的年化，不是运气

### 有些公司对盈利 trader 真对冲

- FTMO 的头部账户（$100K+ funded）据业内流传是**部分走 A-book 到 LP**的
- 这是风险管理：如果一个 trader 真的开始赚大钱，继续纯 B-book 意味着无限风险
- 2025 年 FTMO 收购 OANDA 就是为了**自己有 broker 腿**，更好处理 A-book
- 这让他们和纯赌场区分开：赌场不会给你"VIP 对赌"转成"VIP 帮你对冲"

## 六、三类 Prop Firm 识别

| 类型 | 特征 | 赌场成分 |
|---|---|---|
| **纯 B-book** | challenge + funded 都是 demo，没有外部对冲 | 接近 100% |
| **混合** | challenge 100% B-book，funded 对顶级 trader 走 A-book | 80-90% |
| **真资金分配** | challenge 通过后真给你实盘账户（罕见） | 20-30% |

**怎么识别**（对普通用户）：

- 看它有没有**自己的 broker 子公司或深度绑定关系**
  - FTMO-OANDA（2025 并购）→ 混合，倾向真
  - The5ers-own MT5 → 纯 B-book 倾向
  - FundedNext、FundingPips、BluBerry 等中小 → 基本都是纯 B-book
- 看它的 **payout 比例披露**
  - FTMO 每年主动披露累计 payout → 相对透明
  - 多数小 prop 连 payout 总额都不披露
- 看它对"违规" 的判定透明度
  - 公开规则 + 可申诉 → 相对规范
  - "编辑部裁量权" → 警告信号

## 七、MetaQuotes 2024 清洗的深层意义

**2024 年 2-3 月** MetaQuotes 突然吊销 True Forex Funds、Funding Pips 等多家的 MT5 license。表面原因："不允许美国零售客户"。

**真实原因**（业内共识）：

- Prop Firm 用 MT5 demo 服务跑了一个完全脱离 broker 支付链的副业务
- MetaQuotes 从这些 demo 账户里**拿不到 per-account fee**
- Prop Firm 每月营收数千万美元，MetaQuotes 一分没有
- MetaQuotes 有"license holder doctrine"，理论上可以随时收回任何违约行为的 license
- 借"美国监管"名义清洗，实际上是争夺 Prop Firm 这块价值 $12B（2025 行业估值）的市场

**后果**：

- 部分 prop 转 cTrader / DxTrade / Match-Trader
- FTMO 加速开发 自有 ct.ftmo.com
- Prop Firm 加速并购（FTMO-OANDA、Kraken-NinjaTrader）
- 行业从"broker 白标 + MT5"向"自有技术栈"进化

## 八、对个人的建议

如果你考虑 prop firm challenge：

1. **把报名费当报名费**，不是投资。$100 消失的概率 > 85%。
2. **如果第一次过 phase 1，概率有点偏运气**。重复尝试的意义不大 —— 规则对你的长期期望没变。
3. **只有在你已经有稳定盈利 6+ 个月真实账户**的情况下考虑 prop —— 不是用 prop 来"练技能"。
4. **谨慎选公司**：看上面的三类识别。
5. **退出阈值**：给自己设连续 3 次失败就退出规则。沉没成本谬误是最大敌人。

作为观察者 / 开发者 / 研究者：

- Prop Firm 是**监管套利**的最新进化形态（零售 FX → prop firm → 下一波：AI 信号代币化？）
- 这个行业会持续存在，会持续有人亏钱、会持续有人赚大钱（运营方）
- 2024-2026 的 MetaQuotes 清洗 + MFF 案件 + FTMO 并购 OANDA 是**行业成熟化的三个里程碑**，还没结束

## 参考

- [FTMO 2024 财报报道 - Finance Magnates](https://www.financemagnates.com/forex/ftmos-parent-netted-over-62-million-on-329m-revenue-in-2024/)
- [FTMO 10 周年 + $450M 累计 payout](https://www.financemagnates.com/forex/ftmo-announces-over-450-million-paid-out-as-prop-trading-firm-turns-10/)
- [MyForexFunds CFTC 起诉 - Finance Magnates](https://www.financemagnates.com/forex/310-million-prop-trading-fraud-regulators-freeze-assets-of-my-forex-funds/)
- [MFF CFTC case dismissal report - DeSilva Law](https://www.desilvalawoffices.com/articles/blog/2025/may/cftc-case-dismissed-my-forex-funds-controversy-h/)
- [MetaQuotes 清洗 Prop Firm - FX News Group](https://fxnewsgroup.com/forex-news/retail-forex/exclusive-prop-trading-firm-true-forex-funds-shut-down-by-metaquotes-move/)
- [Retail prop trading market size - Finance Magnates](https://www.financemagnates.com/thought-leadership/taking-stock-of-the-retail-prop-trading-market/)
- `01-retail-as-product.md`：零售是产品的 meta view
- `../02-platforms/ftmo.md`：FTMO 深度档案
- `../05-trends/03-prop-firm-consolidation.md`：Prop Firm 洗牌
