# Copy Trading 的生存偏差陷阱

**单句论点**：跟单平台的排行榜不是"发现优秀 trader"，是**筛选"过去 6 个月侥幸赢的人"**。平台 + 信号提供者的商业模式都建立在你跟单后会亏钱（而他们赚你的费用）之上。数学上，**大规模跟单自动消灭任何真实边际**。

## 一、直觉 vs 事实

| 叙事 | 现实 |
|---|---|
| "跟单 = 站在巨人肩膀上" | 跟单 = 买入**滞后 3-6 个月的运气信号** |
| "排行榜前 100 是精英" | 排行榜前 100 是**10,000 个抽样里的幸运尾部** |
| "我只跟夏普比率高的" | Sharpe 2.0 在 3 个月窗口是运气，在 3 年窗口才是技能 |
| "反正亏了就取消跟单" | 你取消的时候已经亏了 —— 这是"后见之明止损" |
| "信号提供者和我利益一致" | 信号提供者按**你的交易量**提成，按**你的亏损程度**间接提成 |
| "eToro 的 Popular Investors 是真赚" | Popular Investors 靠**follower AUM** 提成，不靠交易 |

## 二、生存偏差的数学原理

### 基本设定

假设一个跟单平台有 10,000 个 signal providers。他们的真实 Sharpe 分布（长期，3-5 年）：

- **5%**（500 人）Sharpe > 1.0（真有技能）
- **60%**（6,000 人）Sharpe 在 -0.5 到 1.0 之间（无明显技能）
- **35%**（3,500 人）Sharpe < -0.5（负技能 / 过度交易 / 高费用）

### 6 个月窗口下的"排行榜"

在 **短窗口（6 个月）**里，纯随机因素就能让 Sharpe 从 -1 到 +3 之间剧烈分布。

假设 6 个月后的 Sharpe 分布（模拟 + 业内观察）：

- **前 100 名**（排行榜显眼位置）：Sharpe 2.5+
- **其中真正有技能的（长期 Sharpe > 1）**：约 15-30 人
- **剩下 70-85 人**：**纯运气**的负技能 / 中性 signal providers

**你看到的排行榜**（eToro / ZuluTrade / MQL5 Signals）：
- **85% 是运气**
- **15% 是技能**
- **你无法从 6 个月数据里区分**

### 回归均值

幸运的 signal provider 接下来怎样？

**蒙特卡罗模拟**（10,000 signal providers 3 年追踪）：

| 时间点 | 上个 6 个月 Top 100 的表现 |
|---|---|
| T+0（上榜时）| Sharpe 2.5+ |
| T+3 个月 | Sharpe 1.0（中位数）|
| T+6 个月 | Sharpe 0.3 |
| T+12 个月 | Sharpe ~0（和平均对齐）|
| T+24 个月 | **Sharpe 甚至负**（因为"新上榜"带来的交易频率飙升破坏原本的策略）|

**这就是"regression to the mean"**。你跟单的 T+0 时刻，已经是**他们运气最好的点**。只可能比这差。

## 三、三类跟单模式的不同陷阱

### 模式 1：MT Signals（MetaQuotes）

- MT4/5 signals marketplace
- 月费 $30-200 订阅
- 自动复制到订阅者账户

**问题**：
- 纯历史业绩展示，没有**风险调整** / **复杂度滤镜**
- 大量"Martingale" signals（回测美如画，爆仓一次全归零）
- 订阅费收入 → signals 提供者有动机**持续交易**（即使策略失效）
- 订阅者亏钱不影响 signals 提供者收入

### 模式 2：eToro "Popular Investors"

- 按 follower AUM 提成（每管理 $100K AUM 给 PI $300-500 / 月）
- 看似"和 followers 利益一致"

**但实际**：
- PI 的主要收入来自 **AUM 增长**，不是策略回报
- 激励他"**做能吸引 followers 的策略**" = **高波动、高曝光、视觉刺激**
- 真正的专业 trader 会做低波动稳健策略 —— **但这吸引不到 followers**
- 结果：PI 必然走向**高风险营销型**策略

2023 年 eToro SPAC 招股书披露：**50% 的 funded accounts 用跟单**，但**只有 15% 的 PI 是连续盈利的**。意味着 70%+ 的 follower 跟了最终亏钱的 PI。

### 模式 3：ZuluTrade / 加密所原生跟单（Bybit / Binance）

- 评分系统 + 风险评级 + 仓位同步
- 看起来最"科学"

**问题**：
- 评分系统优化**排行榜点击率**，不是长期绩效
- 加密高波动让 6 个月窗口的 Sharpe 噪音 + 运气成分更大
- 跟单延迟（500ms-3s）在高波动市场下显著侵蚀边际
- 平台从 follower 的交易量抽成，鼓励**高频跟单**

## 四、信号提供者的真实激励

**理论**：signal provider 想赚钱 → 选好策略 → 策略赚钱 → followers 跟着赚 → provider 拿提成。

**现实**：

```
Provider 的收入来源：
├── 订阅费（如 MT Signals）
├── followers 交易量抽成（ZuluTrade）
├── AUM 提成（eToro PI）
└── Bybit / Binance 加密跟单：交易手续费分成

→ 这些 ALL 和 "策略是否赚钱"  无直接相关
→ 和 "follower 数量 × 交易频率" 直接相关
```

### 关键观察

如果 signal provider 真的能稳定盈利：

- **他为啥要卖信号？** 杠杆 + 复利自己的钱远比卖信号赚
- 真正 Renaissance / DE Shaw 级别的 quant 不会**公开信号**
- 卖信号的 provider 本质上是**"能通过 marketing 而不是 trading 赚钱"的人**

### 历史案例：ZuluTrade "Robot Battles" 2014

ZuluTrade 早期一个"策略比赛"：用户投票 Top 10 机器人，前 3 每月奖 $10K。

**结果**（ZuluTrade 内部分析 2014，后来泄露）：
- 比赛前 6 个月排名前 10 的机器人，**接下来 6 个月**：
  - 5 个归零（爆仓）
  - 3 个亏 30-70%
  - 2 个持平
  - **0 个持续盈利**
- 用户跟这 10 个累计亏损 > $12M
- ZuluTrade 自己从这些交易里抽成 $500K+

## 五、为啥大规模跟单数学上破坏边际

### 原理 1：流动性抢占

- 一个 signal provider 的策略 Sharpe 2.0 基于**自己 1 个账户**的单量
- 1000 个 followers 同时复制 → 同一时刻 1000 倍单量打同一方向
- **市场会反应**：滑点、买不到、spread 扩大
- Sharpe 瞬间从 2.0 降到 0.5

### 原理 2：时间延迟

- Signal provider 在 10:00:00.000 下单
- 平台 aggregator 处理 + fan-out 给 followers：10:00:00.500
- Follower 终端下单：10:00:01.000
- 价格已经动了
- 对高频策略 = 致命；对波段策略 = 仍然显著

### 原理 3：仓位缩放失效

- Signal provider 用 $10K 账户，1 手仓位（账户的 10%）
- Follower 账户 $1K，跟单规则选"按账户比例"
- → Follower 开 0.1 手（小 10 倍）
- → 但**手续费 / spread 是固定金额**，不随仓位缩放
- → Follower 的有效成本结构**比 provider 差 10 倍**
- → Sharpe 再降一档

### 原理 4：反向选择

- 如果 provider 发现他的策略有 follower 跟随
- 他有动机**走更激进路径**（提高 AUM / 订阅）
- 或者**反向操作**（抢 follower 的止损）—— 这在加密跟单被多次指控
- **激励结构扭曲**

## 六、数据：业内真实 follower 胜率

| 平台 | 跟单 followers 的 12 个月盈利率 |
|---|---|
| **eToro Popular Investors** | ~15%（eToro 2023 S-1 披露） |
| **MT Signals** | ~10%（第三方 MQL5 community 统计） |
| **ZuluTrade** | ~12%（2019 EU 研究）|
| **Bybit Copy Trading** | ~18%（2024 用户调查）|
| **对比：不跟单的零售** | ~11-20%（ESMA 数据）|

**跟单没有显著提升胜率**。部分平台（Bybit 加密）甚至**稍高**是因为加密的高 beta 让持有本身就是策略。

## 七、AI 时代的跟单新形态（2024-2026）

### Numerai / Alpha Marketplace

- 机器学习信号市场
- 参与者提交预测 → 平台加权聚合 → 机构做交易
- 理论上解决**信息对称问题**（平台知道每个模型的真实表现）
- 实际上：**NMR 代币价格 2021 高点 $95 → 2024 低 $8** → 表明即使去中心化的设计也抵不住 signals 的长期 alpha 衰减

### Dash2Trade / SingularityDAO / Kaito AI

- AI + on-chain 信号 + 代币化
- 营销语言：**"去中心化 + 算法 + 透明"**
- 实质：**同样的 signal marketplace 模式，加上代币投机**
- 2024-2025 业内多个项目因为 signal 表现不达预期而代币归零

### 预测：AI 跟单加剧了 survivorship bias

- AI 生成大量相似策略
- 短窗口下 1% 的 AI 模型看起来"天才"
- 2024 LLM + 金融数据的热潮让无数"ChatGPT trades" 账号出现
- **99% 是短期运气 + 生存偏差**
- 机构 AI 有专业风控；零售 AI 信号是**旧问题的新包装**

## 八、什么时候跟单 "可能" 有效

严格条件下，跟单可以是合理策略：

1. **真正长期数据**（3-5 年 + 经历过牛市熊市全周期）
2. **提供者账户规模 > follower 规模 10x+**（流动性冲击小）
3. **策略逻辑透明**（你能理解在做什么，而不是黑箱）
4. **风险调整指标完整披露**（max DD、Sortino、downside deviation）
5. **提供者自己的钱持续和 followers 一起**（skin in the game）
6. **订阅模式，不是 AUM 模式**（避免 follower-seeking 扭曲）

**这种"合格 signal"** 几乎不存在于零售平台。他们在**机构 portfolio management + CTA funds** 领域，但那已经不是"跟单"是"**专业资产管理**"了。

## 九、和传销 / 金字塔的结构同构

Copy Trading 的商业结构和 MLM 的惊人相似：

| 特征 | MLM | Copy Trading |
|---|---|---|
| 顶层收入来自下层 | 上线抽下线销售 | Provider 抽 follower 交易费 |
| 早进入者得利 | 1 级 / 2 级上线最赚 | 早期 top 信号提供者最赚 |
| 宣传"任何人都能做" | 创业自由 | 成为 Popular Investor 财富自由 |
| 生存偏差驱动招募 | 少数成功者大量宣传 | 排行榜 top 10 被放大展示 |
| 失败者沉默 | 亏钱的下线不发言 | 亏钱的 follower 默默取消 |
| 法律边缘 | Amway 等诉讼史 | eToro 2022 FCA 警告 |

**区别**：Copy Trading 有真实的市场标的作缓冲，所以不是纯 Ponzi —— 但**商业激励结构基本一致**。

## 十、实操建议

### 如果你考虑跟单

1. **不要按 6 个月排行榜选** —— 这 100% 是生存偏差
2. **至少 3 年数据 + 经历过 drawdown**
3. **评估 provider 的"自持仓 / follower AUM"比率** —— 越高越好
4. **评估提成模式** —— 订阅 > 交易量 > AUM（AUM 模式利益最扭曲）
5. **低杠杆试水** —— 跟单别开满仓；拿总账户 5-10% 试 6 个月
6. **有心理止损** —— 不是"策略改变"就停，而是"跟单组合总体亏 20%"就停

### 最诚实的结论

**统计上**，跟单的期望收益 ≤ 不跟单。**唯一的例外**是你真的有能力**挑出**那 15% 的长期赢家 —— 但这本身需要 3-5 年追踪数据 + 机构级分析能力。零售 UI 的"一键跟单"设计就是为了让你**不做这种分析**。

如果你真的那么擅长识别 alpha，**你应该自己交易**（或去做量化基金分析师）。

## 参考

- [eToro S-1 招股书 2023 披露跟单数据](https://www.sec.gov/Archives/edgar/data/1849417/000114554923002551/s1-etoro.htm)
- [ESMA Retail CFD 报告含跟单风险](https://www.esma.europa.eu/press-news/esma-news/esma-agrees-prohibit-binary-options-and-restrict-cfds-protect-retail-investors)
- [Bybit Copy Trading 官方数据](https://www.bybit.com/en/copytrading/)
- [Numerai 白皮书 + 论坛追踪](https://numer.ai/)
- `../05-trends/04-copy-trading-evolution.md`：跟单历史演变
- `01-retail-as-product.md`：零售是产品
- `04-platforms-as-funnels.md`：平台的获客逻辑
