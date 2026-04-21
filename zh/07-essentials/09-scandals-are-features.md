# FTX / MF Global / MyForexFunds 是特性，不是 Bug

**单句论点**：金融行业的"丑闻"不是失误，是**激励结构的自然均衡产物**。每一次丑闻都触发新的监管，新监管**强化寡头**，寡头创造下一个丑闻，循环继续。理解这一点，你就不会对下一个 FTX 感到"震惊"——你会提前知道它要来，只是不知道谁。

## 一、直觉 vs 现实

| 叙事 | 现实 |
|---|---|
| FTX 是 SBF 个人的诈骗 | FTX 是"交易所 + 对冲基金 + 做市商"结构的**必然输出** |
| MF Global 是 Corzine 的激进赌注失败 | MF Global 是**broker-dealer 混合自营的必然** |
| Mt. Gox 是 Karpelès 的无能 | Mt. Gox 是**全球首个大交易所 + 无监管**的必然 |
| 监管会预防下一个 | 监管 reactive 不是 proactive，只能"事后追责" |
| 每次丑闻后"行业反思" | 每次丑闻后行业**寡头化**，下一次更大 |

## 二、"丑闻生产线"的通用模式

按历史规律看，每一次大金融丑闻都遵循这 5 个阶段：

```
阶段 1：结构漏洞存在
    某种业务模式本质上有利益冲突（如 exchange + custodian 合体）
    
阶段 2：早期玩家用"合规"包装占位
    他们知道漏洞，但通过"合法形式"操作，压低被捕风险
    
阶段 3：增长吸引更激进玩家
    看到头部赚钱，后来者用更激进策略切入，利益冲突加深
    
阶段 4：某个激进玩家崩盘
    市场逆风 + 杠杆 + 混合角色 → 资金缺口 → 破产
    
阶段 5：监管反应 + 寡头受益
    "加强"监管 → 合规成本上升 → 小玩家退出 → 寡头市场份额扩大 → 循环到阶段 1
```

## 三、历史案例库

### 案例 1：Mt. Gox（2014）

**结构漏洞**：2011-2014 年 Mt. Gox 是全球最大比特币交易所（60%+ 市场份额），同时是托管方 + 清算方 + 没有外部审计。

**崩溃**：
- 2011 起就有安全漏洞（Coinbase 等早期竞争者已注意到）
- 2014 年 2 月宣布丢失 850,000 BTC（当时 $450M，今日 $50B+）
- CEO Mark Karpelès 被捕 + 破产

**"预防下次"的监管反应**：
- 日本 2017 通过《资金决济法》修订 → 要求加密交易所注册
- BitFlyer / bitFlyer 等日本交易所借此巩固本土
- **但**：Coincheck 2018 年被黑 $530M（新的"大事件"）
- **但**：FTX 2022 仍在发生 —— 监管完全没阻止

### 案例 2：MF Global（2011）

**结构漏洞**：MF Global 是 broker-dealer + 自营投资银行。Jon Corzine（前高盛 CEO、新泽西州长）2010 年接任 CEO，用公司客户资金做欧元区主权债务投机。

**崩溃**：
- 2011 年欧债危机期间，MF Global 买入 $6.3B 意大利 / 西班牙主权债
- 市场恶化 → margin call → **动用客户分离账户资金**
- 10 月 31 日破产，**$1.6B 客户资金"消失"**

**Corzine 的个人结局**：
- 民事和解 $5M（和政府）
- 终身禁入期货行业
- **没有刑事指控**
- 2015 年推出自己的对冲基金，继续运营

**"预防下次"**：
- CFTC 改进了"客户资金隔离"的审计要求
- Dodd-Frank 的 Volcker Rule 生效
- **但**：结构漏洞（broker-dealer 混业）**未改变**

### 案例 3：Alpari UK（2015 瑞郎）

**结构漏洞**：Alpari UK 零售 FX broker，B-book 模式，高杠杆（1:500），在 EUR/CHF 上有大量客户 long 头寸。

**崩溃**：
- 2015 年 1 月 15 日 SNB 解除 1.20 地板
- EUR/CHF 30 秒跳水 20%
- 客户账户瞬间穿仓 → 负余额
- Alpari UK 的负余额**大于**公司资本
- 1 月 19 日申请破产保护

**FXCM 同样事件**：
- 客户负余额 $225M
- Leucadia 紧急救助 $300M
- 2017 年被 Jefferies 收购 → 品牌继续，但公司实质没了

**"预防下次"**：
- ESMA 2018 年推"负余额保护"（broker 不能向散户追讨超余额）
- **但**：高杠杆（30:1）**仍然保留**
- **但**：broker 开始把"极端事件"条款写得更严苛
- 下一次类似事件发生时，**只是 broker 不用追讨**，散户仍然全亏

### 案例 4：FTX（2022）

**结构漏洞**：FTX 是加密交易所 + Alameda Research（自营对冲基金）的**双胞胎结构**。SBF 和 Caroline Ellison 分别是 CEO。

**崩溃**：
- Alameda 用 FTX 用户资产做高风险投资（Luna、Solana 项目、3AC 贷款）
- 2022 年 5 月 Luna 归零 + 6 月 3AC 破产 → Alameda 资不抵债
- FTX 表面仍运转，但 $8B 用户资产已被 Alameda 用掉
- 11 月 2 日 CoinDesk 报道 Alameda 资产负债表问题
- CZ（Binance CEO）随后宣布抛售 FTT → 挤兑
- 11 月 11 日 FTX 申请 Chapter 11 破产
- SBF 被捕 + 2024 年 3 月判 25 年

**"预防下次"**：
- 美国 2024 年通过 FIT21 加密法案 → 分类 commodity vs security
- SEC + CFTC 开始更积极执法
- **但**：**FTX 破产 3 年后，交易所 + 托管混合结构仍是行业默认**
- **但**：DEX 仍然零售可用但流动性差
- Bybit 2025 年 2 月被黑 $1.5B —— **新的"大事件"在 FTX 后 2 年内发生**

### 案例 5：MyForexFunds（2023）

**结构漏洞**：Prop Firm 以 demo 账户运营，声称给成功 trader "真资金"但实际从未对冲到外部市场。

**崩溃**：
- 2020-2023 年 MFF 迅速成为全球第二大 prop firm
- 2023 年 8 月 CFTC 起诉 $310M "fraud"
- MFF 停止运营 → 用户无法提现

**后续**：
- 2025 年 5 月 Special Master 报告 CFTC 程序问题 → 部分指控被驳回
- MFF 已经倒闭，诉讼实际是**给 CFTC 做 political show**
- **其他 prop firm 的结构漏洞未改变**
- MetaQuotes 2024 年 2-3 月"清洗" 借 MFF 热度 + "美国合规" 名义打击其他 prop
- 2025 年 12 月 FTMO 收购 OANDA → **Prop + broker 整合**成为新趋势

## 四、激励结构决定 predictive 模式

### 为啥每次都这样

1. **结构本身允许**：不可能完全"监管掉"交易所同时做托管 —— 因为 DEX UX 太差
2. **玩家认知"合法边界"**：走法律边界的公司**短期盈利最大**
3. **激进玩家吸引资金**：资金追高收益 → 涌入激进玩家 → 他们进一步激进
4. **黑天鹅 inevitable**：3-5 年内一定有一次市场极端事件
5. **激进玩家崩盘**：结构 + 激进 + 黑天鹅 = 破产
6. **监管 reactive**：**永远晚一步**，且容易被行业游说影响

### 当前的未来候选丑闻（2026-2028 可能的下个 FTX）

**候选 1：Prop Firm 大玩家之一**
- FTMO + OANDA 整合后的执行风险
- 如果 FTMO 收购 OANDA 的整合出问题 → 可能触发用户大规模提现
- Prop Firm 行业 2025 价值 $12B，头部集中
- **可能性**：中等

**候选 2：某加密 CEX + 衍生品**
- Binance 虽然已经和 DOJ 和解，但仍有系统性风险
- OKX / Bybit / Kraken 的衍生品业务 + 做市 desk 结合
- 下一次加密熊市 + 高杠杆共振 = 某家重大损失
- **可能性**：高

**候选 3：AI 交易信号 / 机器人服务**
- 2024-2026 大量"AI trading bot"涌现
- 基于 LLM 的信号服务、自动跟单 bot
- 统计上必然有"黑盒崩盘"
- **可能性**：中等（规模小，但数量多）

**候选 4：DeFi 跨链桥**
- 2022-2023 已经有 Ronin / Wormhole / Nomad 桥被黑
- 2025-2026 随着跨链 DeFi 普及，再发生几次
- **可能性**：接近 100%，只是规模问题

**候选 5：某数据供应商或 Infra 被攻击**
- 2025 Bybit 的 Safe Wallet 前端攻击是前奏
- DeFi 或 CEX 依赖的 Infra（Chainlink oracle、RPC 节点、wallet UI）都是单点故障
- **可能性**：中等

## 五、为啥监管系统性失败

### 问题 1：信息不对称

- 监管员工 = 大学毕业生 + 几年政府工作
- 他们要监管的对象 = 业内 20 年经验的工程师 / 交易员
- **监管的"专家"永远落后于"创新"3-5 年**

### 问题 2：激励不对齐

- 监管员工薪水固定，成功案例不加薪
- 业内回报翻倍：$50K → $500K / 年
- 理性选择：**不要太激进**，保留未来就业机会

### 问题 3：事后监管而非事前

- 几乎所有主要监管规则都是**大事件之后**出台
- SEC 1934（1929 崩盘）、Glass-Steagall 1933（大萧条）、Dodd-Frank 2010（2008）、MiFID II 2018（债务危机）
- **没有预防性监管**

### 问题 4：技术理解滞后

- 2014 Mt. Gox 时，大多数监管员工不懂比特币
- 2022 FTX 时，大多数不懂 DeFi / staking / yield farming
- 2026 可能的 AI trading 丑闻时，大多数不懂 LLM 的边界

### 问题 5：政治议程干扰

- 选举周期影响监管重心
- 不同政党对 "严 vs 松" 有 ideological 偏好
- 即使监管知道某个问题，**政治环境决定是否执法**

## 六、破解：个人层面的"丑闻风险管理"

### 分散 counterparty 风险

**不要把所有资产放一个机构**：
- 零售 FX：分散到 2-3 个大 broker（不同辖区）
- 加密：Coinbase / Kraken / Binance 之间分散 + 部分 self-custody
- 传统股票：Fidelity / Schwab / 多个 brokerage 账户
- **任何机构 > 30% 的总资产就是过度集中**

### 警惕"高收益+高曝光"玩家

历史上**即将倒下的公司**有以下特征：
- 极高用户增长（6 个月翻倍 AUM）
- 激进营销（体育场冠名、明星代言、政治捐款）
- CEO 高调公共形象（SBF、CZ、Corzine）
- 相对竞争对手**显著更高的收益率**（不合理高）
- 财报披露不透明或频繁延迟
- 核心高管从竞争对手大量挖角

### 定期执行"breach drill"

问自己：
- 如果我用的 X broker 今天破产，我会损失什么？
- 如果我持有的 Y 币交易所今天被黑，我会损失什么？
- 答案如果超过 25% 总资产，立即减仓

### 老派原则

- **Self-custody hardware wallet**（加密）
- **账户资金分离 / 信托账户**（股票 / FX）
- **对任何"too good to be true"本能怀疑**
- **如果你的 broker 在塞舌尔 / BVI，不要存超过 $5K**
- **定期提现，让 broker 证明能提**

## 七、监管变化的 信号 vs 噪音

### 信号（真的会改变行业结构）

- **牌照门槛大幅提升**（如 MiFID II 级别的重写）
- **强制托管分离**（crypto 最大变数）
- **CEO 个人刑事责任**（如 SBF 25 年徒刑）
- **多国 concerted action**（不是单一辖区）

### 噪音（表面严厉实际没用）

- 罚款（即使 $10B 对大型公司仍是成本）
- 警告信 / 公开训斥
- "我们正在调查" 声明
- 媒体监管报道（vs 实际执法）

## 八、循环什么时候会停

**历史规律告诉我们**：金融业的丑闻循环**在结构改变前不会停**。结构改变需要：

1. **灾难级事件**（远超 FTX）—— 如果下个加密事件有 $50B+ 用户损失可能触发
2. **政治共识**（两党 / 左右通力）—— 极罕见
3. **技术替代**（如 DEX 真正 UX 赶上 CEX）—— 长期可能，短期不可能
4. **代际交接**（年轻人主导监管 + 技术）—— 20 年尺度

短中期（2026-2030）：**循环继续**。

## 九、实操：如何从"丑闻是特性"认知中获益

### 作为个人

- **避免成为受害者**：分散 + self-custody + 怀疑
- **识别信号**：高增长 + 高曝光 + 不透明 = 红灯
- **不要"相信 X 不会倒"**：没有 too big to fail，有 too slow to react

### 作为开发者 / 创业者

- **Compliance infrastructure** 是增长市场（每次新监管都催生新合规服务）
- **Risk management** 工具对 broker / exchange 是刚需
- **独立审计 / Proof of Reserves** 是未充分开发的市场
- **DEX UX 改进**是长期方向

### 作为研究者

- **追踪结构漏洞**比追踪具体公司更有价值
- 哪里有 conflict of interest，哪里就是下个丑闻候选
- **监管提案**的通过率 + 实际执行力是关键指标

## 十、最后的结论

**"FTX 是例外吗？"** —— 不。FTX 是激励结构 + 缺乏监管 + 加密高速发展的**必然输出**。

**"下一个 FTX 能避免吗？"** —— 不。结构没变。

**"监管会真正保护我吗？"** —— 有限。监管的目标函数不完全是"保护你"。

**"那我该怎么办？"** —— 认识到这是**周期性现象**，**自己做风险管理**，**不依赖监管**。

这不是悲观主义。是**清醒的现实主义**。

## 参考

- [FTX Chapter 11 Restructuring - Kroll](https://restructuring.ra.kroll.com/FTX/)
- [Mt. Gox official site - claims process](https://www.mtgox.com/)
- [Forex Scandal 2013 - Wikipedia](https://en.wikipedia.org/wiki/Forex_scandal)
- [Alpari UK insolvency - Reuters](https://www.reuters.com/article/markets-forex-alpari-idUSL6N0UV21320150116)
- [FXCM $300M 救助 - WSJ](https://www.wsj.com/articles/fxcm-gets-300-million-lifeline-1421432107)
- [My Forex Funds $310M fraud CFTC](https://www.financemagnates.com/forex/310-million-prop-trading-fraud-regulators-freeze-assets-of-my-forex-funds/)
- [MFF CFTC case dismissed - DeSilva Law](https://www.desilvalawoffices.com/articles/blog/2025/may/cftc-case-dismissed-my-forex-funds-controversy-h/)
- [Bybit 2025 hack analysis - Wilson Center](https://www.wilsoncenter.org/article/bybit-heist-what-happened-what-now)
- [Bybit hack technical - NCC Group](https://www.nccgroup.com/research/in-depth-technical-analysis-of-the-bybit-hack/)
- `08-regulator-rent-setting.md`：监管的护城河本质
- `05-crypto-vertical-conflict.md`：加密所垂直冲突
- `02-prop-firm-casino.md`：Prop Firm 本质
- `../05-trends/03-prop-firm-consolidation.md`：Prop Firm 行业并购
