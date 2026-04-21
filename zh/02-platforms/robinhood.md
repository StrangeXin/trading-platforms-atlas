# Robinhood

定义了"移动端零售经纪"时代的美国 app —— 零佣金、游戏化 UI、PFOF（payment for order flow）收入模型。2021 年 GameStop 事件让公众意识到"零佣金"背后的真实商业结构。

## 基本信息

- **创立**：2013 年，加州 Menlo Park
- **创始人**：Vladimir Tenev（俄罗斯裔）+ Baiju Bhatt（印度裔），两人斯坦福相识
- **监管**：SEC（美国证监会）+ FINRA
- **上市**：2021 年 7 月 Nasdaq 直接上市（ticker: HOOD）
- **2024 活跃用户**：~25M
- **2024 AUC（托管资产）**：~$180B

## 商业模式本质

### PFOF（Payment For Order Flow）

**Robinhood 的主营收来源 —— 不是用户佣金**：

```
用户：点击"Buy AAPL"
    ↓
Robinhood 把这笔订单卖给做市商（Citadel Securities、Virtu 等）
    ↓
做市商付给 Robinhood 一笔"rebate"（每股 ~$0.002-0.005）
    ↓
做市商在交易所或内部池里撮合订单
    ↓
用户得到一个价格（可能比真实市价略差几 basis points）
```

### 为啥这合法但争议

- SEC 允许 PFOF 存在（条件：broker 必须做"Best Execution"证明）
- 批评：做市商知道大量零售订单流 → 形成信息优势
- 批评：用户以为"零佣金"，实际隐形成本 = 更差的执行价
- 2020-2022 SEC 多次讨论禁止 PFOF，2023 最终**妥协加强披露而不禁止**

### Robinhood 2023 营收拆解（按 Q4 10-Q 推算）

| 来源 | 占比 |
|---|---|
| **PFOF（期权 / 股票 / 加密）** | 60-70% |
| **融资利息**（客户的 uninvested cash + margin loans）| 20-30% |
| **Gold 订阅**（$5/月 Pro 功能） | 5-10% |
| **加密 transaction rebate** | 5-10% |

**PFOF 是核心**。没有 PFOF 就没有 Robinhood 的"零佣金"。

## 技术栈

### 移动端优先

- **iOS + Android 原生 app**（早期 Swift / Kotlin）
- Web 端直到 2021 才上线（比 app 晚 8 年）
- **设计语言**：极简、游戏化、色彩心理（绿 = 涨，红 = 跌）

### 后端

- 自研订单路由
- **不自己撮合**：Robinhood 是 introducing broker，清算通过 **Robinhood Clearing**（2018 自营上线前用 Apex Clearing）
- 加密：通过 Robinhood Crypto 子公司做市

### 著名的"界面游戏化"

- 成交后**撒彩纸屑**动画（2021 年 GameStop 事件后被批评后移除）
- "Your First Stock is on Us"：免费赠股（新注册 $5 股票）—— 用推荐心理拉新
- "Popular Stocks" 列表：用户买最多的股 → 放大羊群效应
- 股票价格的 push 通知 → 提升打开频率

## 关键事件

### 2021 GameStop 事件（1 月 28 日）

**事件**：WallStreetBets subreddit 聚众做空挤压 GME，Robinhood 上百万用户涌入。

**Robinhood 的反应**：**限制**买入 GME（只允许平仓）。用户愤怒 —— 认为 Robinhood 在"保护对冲基金 Citadel"（Citadel 同时是 Melvin Capital 的救助方 + Robinhood 的最大 PFOF 付费方）。

**实际原因**（后来披露）：
- Robinhood 的 clearing 合作方 DTCC 要求 Robinhood **补缴 $3B 保证金**（因为大量未结算的 GME 多头头寸风险）
- Robinhood 没这么多现金 → 紧急从 JPM + Goldman 借 $1B → 限制 GME 买入降低结算风险
- 不是阴谋，是**清算机制的结构性问题**

**后果**：
- SEC + 国会调查
- 多起集体诉讼
- Robinhood 2021 上市时市值曾达 $32B → 2022 跌到 $8B
- CEO Tenev 在国会作证

### 2022 加密低迷 + 裁员

- 2021 加密牛市：Robinhood 加密交易费占营收 50%+
- 2022 加密熊市：加密营收**跌 90%**
- 2022-2023 两轮裁员（~40% 员工）
- 股价一度跌破 $8

### 2023-2025 复苏

- **Robinhood Gold** 订阅增长
- **Robinhood 退休账户**（IRA）2023 推出
- **Robinhood Credit Card** 2024 推出（3% cashback）
- 2025 活跃用户回升至 25M+
- 股价 2025 Q4 恢复到 $40+

## 产品线

- **股票交易**（美国 + 部分国际）—— 主业
- **期权交易**（贡献 50%+ PFOF 营收）
- **加密交易**（BTC、ETH、DOGE、SHIB 等 ~20 币）
- **ETFs**
- **Robinhood Wallet**（自持钱包，2022 上线）
- **Robinhood Gold**（$5/月 订阅）
- **Margin loans**
- **IRA / Retirement**（2023 上线）
- **Cash Management**（类银行账户，高利息）
- **Robinhood Crypto 的 Solana integration**（2024）

## 用户画像

**Robinhood 典型用户**：
- 年龄 22-35
- 首次投资（Robinhood 2022 S-1 披露：62% 用户是"首次投资者"）
- 平均账户余额 $4,000-6,000（显著低于 Schwab $350K、Fidelity $300K）
- 高频交易倾向（比传统 broker 平均交易频率高 10 倍）
- 期权交易占比异常高（年轻用户 + 期权 = 博彩心理）

## 和美国其他零售经纪的定位

| 平台 | 核心差异 |
|---|---|
| **Robinhood** | 移动优先 + 零佣金（PFOF 补贴）+ 游戏化 |
| **Charles Schwab** | 全服务 + 研究 + 高资产用户 + 收购 TD Ameritrade |
| **Fidelity** | 养老金巨头 + ETFs 自营 + 无 PFOF（用内部经纪商） |
| **E*Trade**（被 Morgan Stanley 收购）| 传统电子经纪 + 期权 |
| **Interactive Brokers** | 专业 / 国际市场 + 低佣金（不是零） |
| **Webull** | "更专业的 Robinhood"（华人背景 + 期权 / 期货）|

**Robinhood 定义的标准**：
- 零佣金（现在全业内都是）
- 移动优先
- 分数股（fractional shares）
- 加密 / 股票统一 app

传统 broker 被迫跟进所有这些。

## 地缘 + 监管

### 国际扩张失败记

- 2019-2020 英国推出计划 → 2020 年因疫情 + Wirecard 事件延迟 → 2021 年放弃
- 2024 年重新尝试英国 FCA license
- 欧洲扩张**严重滞后于 eToro / Trading 212 / Revolut**
- 加密国际扩张较顺利（欧盟 MiCA 合规）

### 监管争议点

- **PFOF**：持续批评，2023 SEC 达成增强披露规则
- **Day Trading 限制**（PDT rule）：低于 $25K 账户每 5 天不能超过 3 次日内交易
  - Robinhood 设计上**鼓励 Margin 账户绕开**（更多风险）
- **加密 staking 合规**（2023-2024 SEC 逐步放松）

## 未来方向

- **国际扩张 2025+**（英国、欧洲、可能亚洲）
- **Credit Card + Banking** 转型为"综合金融 app"
- **Web3 + DeFi 集成**（Robinhood Wallet 是前哨）
- **IPO 阶段投资**（2024 推出 Robinhood 提前认购）
- **机构业务**（通过 2024 收购 X1 信用卡 + 2025 收购加密衍生品平台 Bitstamp）

## 参考

- [Robinhood 官网](https://robinhood.com/)
- [Robinhood SEC 申报（EDGAR）](https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001783879)
- [Vladimir Tenev — Wikipedia](https://en.wikipedia.org/wiki/Vladimir_Tenev)
- [GameStop short squeeze — Wikipedia](https://en.wikipedia.org/wiki/GameStop_short_squeeze)
- [SEC PFOF rule 2023](https://www.sec.gov/rules/2022/12/order-competition-rule)
- `../07-essentials/04-platforms-as-funnels.md`：平台的"获客漏斗"本质
- `../07-essentials/01-retail-as-product.md`：零售是产品
- `../07-essentials/06-leverage-is-liquidation-countdown.md`：杠杆本质
