# 结算与清算：交易后的真实世界

**单句论点**：你点 "Buy" 到你真的"拥有"股票之间，不是毫秒，是**1-2 个工作日**（现在的 T+1）甚至更长。这个看不见的**后清算 / 结算** 过程，由 **DTCC**、**CLS Bank**、**央行** 三类机构承担，每天处理 $10+ trillion 的金融流。它是全球金融系统的**真正骨架**，比交易本身更关键。

## 一、为啥交易和结算是两件事

### 直觉 vs 现实

**直觉**：你点"Buy 100 股 AAPL" → 立刻拥有 100 股。

**现实**：

```
T+0（今天）
  14:30 你点 Buy → broker 确认
  14:30 broker 发订单到 NYSE → 撮合
  14:30 NYSE 返回"成交"消息
  14:30 broker 告诉你"成交"
  ⚠️ 这时你还不是股票所有者 ⚠️
  
  晚上  NYSE 把今日所有成交**净额**发给 DTCC
  晚上  DTCC 内部记录"broker A 应收 100 股"、"broker B 应付 100 股"
  
T+1（明天）
  白天  资金 + 股权**实际转移**在 DTCC 内部账户
  下午  broker 更新你的"结算余额"
  ✅ 这时你才真的是法律上的所有者 ✅
```

**T+1 = Trade date + 1 business day**。你的 "buy" 需要等 1 天才真正结算完成。

### 交易 vs 结算的分工

```
[撮合 Matching]
 → 交易所匹配买卖单（毫秒）
 → 产生"trade confirmation"
 → 不涉及实际资产转移

[清算 Clearing]
 → 清算所（CCP，Central Counterparty）对每笔 trade 担保
 → 计算各 broker 的净额
 → 管理违约风险（如果 broker 破产怎么办）

[结算 Settlement]
 → 资金和资产实际交换
 → 通过中央托管（DTC）
 → T+1 或更长（取决于产品）
```

**关键**：**清算**是承担风险的逻辑层，**结算**是资产转移的执行层。两者加起来 = 把**"成交"变成"所有权"**。

## 二、美国股票结算：DTCC 体系

### DTCC 的三位一体

**DTCC（Depository Trust & Clearing Corporation）** 是美国证券清算结算**垄断**者。三个核心子公司：

| 子公司 | 作用 |
|---|---|
| **DTC**（Depository Trust Company）| 股票、债券的**中央托管方**。实际"存放"所有美国上市证券 |
| **NSCC**（National Securities Clearing Corporation）| 股票、ETFs 的**清算所**。做买卖双方的 CCP |
| **FICC**（Fixed Income Clearing Corporation）| 国债、MBS 等固收产品清算 |

### 股票成交的完整路径

```
T+0 成交
  ↓
DTCC 接收 trade report（从交易所 + ATS）
  ↓
[NSCC 清算]
  计算每个 broker 的净额
  （broker A 合计收 100,000 股，付 $10M）
  ↓
NSCC 向 broker 收取 "margin"（预存保证金）
  ↓
T+1 工作日
  ↓
[DTC 结算]
  DTC 内部账户转账：
    broker A 股票账户 +100,000 股
    broker A 现金账户 -$10M
    broker B 反向
  ↓
broker 更新客户的"结算余额"
```

### DTC 的"所有权不在你手里"机制

**震撼事实**：美国 99% 以上的上市股票**不在实物形态**存在。全部以 **DTC book-entry** 形式记录：

- DTC 是所有美股的"法律注册所有人"（**Cede & Co.** 是 DTC 的 nominee）
- 你的 broker 在 DTC 开户，持有**你"代名义"** 所有的股票
- **你是"beneficial owner"（实益拥有者）**，不是"registered owner"（注册拥有者）

**影响**：
- 你从 broker 转出股票到别的 broker → **DTC 内部 book-entry 调整**（不涉及物理移动）
- 你要求"direct registration"（DRS）→ 可以让 Apple 的 transfer agent 直接以你的名字注册（少数用户做）
- 公司治理（投票）由 broker 代投 → broker 汇总给 DTC → DTC 汇总给公司

**2021 GameStop 散户发现**"DRS your shares" 运动 → **把股票从 broker 转出到 Computershare**（Apple 的 transfer agent）以防裸卖空 → 数百万股 GME 从 DTC 转出。

## 三、2024-05-28：美国 T+2 → T+1 迁移

### 历史演变

- **1990s 前**：美国 T+5（5 工作日）
- **1995-06-07**：T+3 开始
- **2017-09-05**：T+2 开始
- **2024-05-28**：**T+1 正式生效**

### 为啥推进 T+1

- **减少对手方违约风险**（结算周期越短越安全）
- **释放保证金**（NSCC 要求 broker 为未结算的 trade 存保证金，周期越短保证金越少）
- **提高资金效率**（机构基金周转更快）

### 迁移的技术挑战

- Broker 必须升级内部系统（好多用 1990s 代码）
- 需要在 **T+0 当天完成** trade 确认 + 汇款指令
- 国际投资者（时区差异）**没有时间做汇款**
- 2024 年 5 月**前后数周**混乱：**3%+ settlement fails**（vs 正常 <1%）
- 6-7 月恢复正常

### 后果

- **机构**：被迫改造后端，成本 $100M+
- **零售**：体验无变化（broker 自动处理）
- **国际投资者**：欧洲 / 亚洲机构难以参与 US T+0 操作
- **预期 2026+**：T+0（同日结算）讨论 → 可能 2028-2030 推进

## 四、FX 结算：CLS Bank

### FX 和股票的不同

**股票**：DTC 一家中央托管，美国内部结算简单。

**FX**：涉及**两种不同货币**，分别在**不同国家的央行系统**。没有统一的中央结算。

### CLS Bank 的诞生（2002）

**问题**：1974 年 **Herstatt Bank 倒闭**引发 "Herstatt risk"（对手方风险）：

- Herstatt 在 DEM（马克）接收方
- USD（美元）已经付出到 Chase（纽约）
- 6 月 26 日德国下午，Herstatt 被监管关停
- **德国对手方已经付出 DEM，但纽约还未处理美元付款**
- 当日对手方损失 $620M（当时巨款）

**解决方案**（30 年后）：**CLS Bank**（Continuous Linked Settlement）
- 2002 年由 20 家大银行共同设立
- 位于纽约，但监管由纽约联储 + 全球央行协同
- 核心机制：**Payment versus Payment (PvP)**
- 只有**两边同时完成付款**才算结算完成 → 消除 Herstatt risk

### 覆盖范围

- **18 种货币**（USD、EUR、GBP、JPY、AUD、CHF、CAD、NZD、HKD、SGD、ZAR、SEK、NOK、DKK、KRW、MXN、ILS、HUF）
- 日成交 **~$7+ trillion**（全球 FX 成交的 ~50-60%）
- 成员：**~75 家settlement members**（全球大银行）
- 第三方会员：数千家机构

### 不被 CLS 覆盖的

- 人民币 CNY（**没有 CLS 支持**—— 中国央行不参与）
- 俄罗斯 RUB（2022 退出）
- 大多数新兴市场货币
- 这些货币的 FX 结算仍然**有 Herstatt risk**

### CLS 运营时间

- **每工作日美国中部时间 7:00-12:00**（5 小时窗口）
- 窗口内各国央行同步处理
- **周末不运营**（所以 FX 市场 24×5）

## 五、加密的"结算"：链上 vs 链下

### 链上（On-chain）

- **UTXO / account 状态直接在区块链上更新**
- 确认时间：BTC ~10 分钟（6 blocks 共识）、ETH ~12 秒（1 block）
- 不需要第三方清算所
- **几乎即时 finality**（相比传统金融 T+1）

### 中心化交易所内部（Off-chain）

- Binance / Coinbase 等**内部账本**记录交易
- 交易不上链，**只是数据库记录**
- 用户从交易所提现时 → 才真的上链
- **对手方风险 = 交易所破产风险**（FTX 是极端案例）

### 加密的"结算"优势（理论）

- **即时 finality**（无 T+1 等待）
- 无中央托管（链上所有权明确）
- 全球 24×7 运营

### 加密的"结算"缺陷（实际）

- 高波动 + 低流动性 → 链上交易滑点大
- 中心化交易所 **重新引入对手方风险**（架起 CEX 等于重建 DTC，但没有监管）
- 跨链结算（USDC vs USDT vs 原生币）**仍然有 Herstatt-like risk**

## 六、衍生品清算：CME / ICE / LCH

### 全球三大期货清算所

- **CME Clearing**（芝加哥）：CME 期货 + Nymex 期货 + 部分商品期权
- **ICE Clear**（亚特兰大、伦敦、纽约）：ICE 系期货 + 能源 + agricultural
- **LCH**（伦敦）：利率 swap 清算（全球最大）+ 欧洲股指期货

### CCP（Central Counterparty）机制

```
Trader A ↔ Trader B（成交）
    ↓
清算所介入：
  清算所 vs Trader A（清算所欠 A 钱 / 股权）
  清算所 vs Trader B（B 欠清算所钱 / 股权）
    ↓
双方不再互为对手，清算所是双方的对手
    ↓
任一方违约 → 清算所**保证**另一方拿到钱
    ↓
清算所违约？几乎没发生过
```

**清算所自己的违约 waterfall**：
1. 违约者的保证金
2. 其他会员的 guarantee fund
3. 清算所自己的资本
4. 其他会员额外摊派（"skin in the game"）
5. **中央银行最后救助**

### 2008 LTCM / 2011 MF Global / 2023 CS 等事件

- **所有**大清算事件后，系统**都撑住了**
- 因为 CCP waterfall 设计
- 但每次都接近"系统性风险"边缘
- 2024 年监管推动 CCP 自己的资本要求提高（Basel IV）

## 七、T+0 结算的未来

### 2024-2026 讨论

- **Atomic settlement**（原子结算）：用区块链实现 T+0
- 国际清算银行（BIS）2024 年推 Project Agora
- 美国 DTCC 2024 年宣布 "Project Ion" → DLT-based 股票清算试点
- 欧洲 ECB 2024 年推出 EC Distributed Ledger Settlement

### 挑战

- **现金侧同步**（股权在区块链上 ~ 秒完成，但资金转移还是传统银行 T+1）
- 需要央行数字货币（CBDC）配套
- 监管协调多国
- 预计 2028-2030 才可能规模化

## 八、这些对零售交易者意味着什么

### 你"买入"并不是立刻"拥有"

- T+0 到 T+1 期间，股票在"结算中"状态
- **技术上你能卖，但卖的是"未结算的股票"**（叫 "GTC selling")
- 美国 **Good-Faith Violation** 规则：T+1 内不能用未结算资金重复买入
- 违反规则会被限制 90 天现金交易

### "Free Riding" 规则

- 你用**未结算**的现金买，又在结算前卖 → "free ride"
- **违反 Reg T**（美国）
- Broker 会警告 / 限制账户

### 加密的"即时性"是优势也是陷阱

- **即时 finality** 让加密有"真实所有权"感
- 但**加密 CEX 账户依然是 IOU**，和股票 broker 的 DTC holding 本质无差
- 用 self-custody wallet 才真正"拥有"

### ETF 创建 / 赎回

- ETFs 是 T+1 结算
- 大型 AP（Authorized Participants）做 **in-kind 创建 / 赎回**
- 这影响你的 ETF 交易**价格滑差**（通常 < 1 basis point）

## 九、监管视角：结算安全的系统性重要性

**金融体系的"骨架"**：
- 股票 + 固收清算 → 如果 DTCC 挂了，美国资本市场停
- FX 结算 → 如果 CLS 挂了，全球 $3T+ 每日现金流中断
- 衍生品清算 → 如果 LCH 挂了，全球利率 swap 市场冻结

**"Too big to fail" 的终极**：
- DTCC、CLS、CME Clearing 等是 **FMU**（Financial Market Utility，金融市场基础设施）
- Dodd-Frank 2010 给 FMU 特殊地位 + 央行 backstop
- Basel III/IV 对 CCP 资本要求极高
- **实际上**：它们**不可能**被允许破产

## 十、关键事实速查

- **美国 T+1 生效**：2024-05-28
- **美国 T+2 时期**：2017-2024
- **FX CLS Bank 覆盖**：18 种货币，日 ~$7T
- **DTCC 日处理**：$2+ trillion + 大量零散 trade
- **全球主要 CCP**：DTCC、CLS、CME Clearing、ICE Clear、LCH
- **CLS 不覆盖**：CNY、RUB、大多数新兴市场货币
- **加密主要清算 = 区块链自身**（on-chain）

## 参考

- [DTCC 官网](https://www.dtcc.com/)
- [CLS Bank 官网](https://www.cls-group.com/)
- [SEC T+1 final rule 2023](https://www.sec.gov/newsroom/press-releases/2023-29)
- [T+1 settlement - Wikipedia](https://en.wikipedia.org/wiki/T%2B1_settlement)
- [Herstatt Risk history](https://www.bis.org/cpmi/publ/d01.htm)
- [DTCC Project Ion（DLT 试点）](https://www.dtcc.com/dtcc-connection/articles/2022/january/27/dtcc-announces-project-ion)
- [LCH 官网](https://www.lch.com/)
- [CME Clearing](https://www.cmegroup.com/clearing/)
- `05-fx-market-structure.md`：FX 市场结构（CLS 是结算层）
- `04-market-data.md`：市场数据分发（结算前一步）
- `../02-platforms/schwab.md`：Schwab 在 DTC 的托管地位
- `../02-platforms/binance.md` / `coinbase.md`：加密"结算"是内部账本
