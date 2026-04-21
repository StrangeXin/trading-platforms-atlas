# 流动性链条

"你下单那一瞬间，对手盘到底是谁？" —— 这个问题一路回溯，是理解这个行业真实生态的最短路径。

## 完整链条一张图

```
[零售交易员 Retail]                    ← 赢亏对手方最末端
    ↓ 下单
[零售 Broker]                          ← B-Book 可能就在这截胡
    ↓ 未截胡的送到下游（A-Book）
[Prime Broker / LP]                    ← 银行间市场的"零售券商入口"
    ↓ 聚合多家零售 flow
[Tier-1 Prime Broker (银行)]          ← 真正和 interbank 连接的大型投行
    ↓
[Interbank ECN: EBS / Hotspot /        ← 全球外汇真实对手盘集合地
 Integral / Reuters Matching]
    ↓
[央行 / 央行代理交易对手]              ← 超长时间尺度的"原始做市商"
```

## 分层详解

### 1. 零售 → 零售 Broker

这一层 **最可能不走出 broker**。

**B-Book**：broker 不把单子送出去，自己做对手。客户亏 = broker 赚。
- 单量不大的散户：默认走 B-Book
- 监管稍松地区（CySEC / IFSC / FSCA）：B-Book 比例更高
- 模拟盘 / Prop Firm Challenge 阶段：几乎 100% B-Book

**A-Book**：broker 把订单**STP（Straight-Through Processing）**到下游 LP。
- 单量大 / 胜率高的客户：broker 为风险管理走 A-Book
- 标榜 "ECN" / "NDD（No Dealing Desk）" 的 broker：主推 A-Book（但实际混合）

**混合 Book** 是现实：broker 内部有"客户分类器"，根据历史盈亏 + 单量 + 标的 + 持仓时间自动分流。MT5 server 原生支持这种规则配置。

### 2. 零售 Broker → Prime of Prime (PoP)

**PoP 的存在理由**：Tier-1 Prime Broker（大银行）一般只接机构对接门槛——最低交易量 $100M / month 起步，最低账户 $10M。小型零售 broker 达不到。

**PoP 是"零售 broker 的 Prime Broker"**：
- 代零售 broker 和 Tier-1 银行签合约
- 聚合多家小 broker 的 flow 凑够门槛
- 收小额 spread 加价（每单 0.1-0.5 pip）

**主要 PoP 玩家**（2024）：
- **ADSS** (Abu Dhabi Securities)
- **Saxo Bank**（Tier-1 兼做 PoP）
- **Invast Global**
- **CFH Clearing**（2022 被 FlexTrade 收购）
- **IS Prime**
- **Advanced Markets**
- **LMAX Exchange**（兼做 ECN）
- **Sucden Financial**
- **Swissquote**（也做 PoP）

一家 MT5 broker 通常会接 2-5 家 PoP 做冗余 + 最优报价路由。

### 3. PoP → Tier-1 Prime Broker

**Tier-1 大型银行 Prime Broker**：
- **Goldman Sachs**
- **JPMorgan Chase**
- **Morgan Stanley**
- **Citibank**
- **UBS**
- **Deutsche Bank**（近年萎缩）
- **Barclays**
- **HSBC**

这些银行同时扮演：
- 做市商（给 PoP 报价）
- 经纪商（执行 PoP 订单）
- 结算商（T+2 交割）
- 融资商（给 PoP 提供短期借款 / 信用额度）

### 4. Tier-1 → Interbank ECN

银行之间互相做对手，通过 ECN 系统匹配：

- **EBS**（BrokerTec/CME 旗下）：主导主要货币对（EUR/USD、USD/JPY）
- **Reuters Matching**（LSEG 旗下）：欧洲货币偏重
- **Hotspot FX**（Cboe 旗下）：美式偏好
- **Integral**：科技型 ECN
- **LMAX Exchange**（对零售也开）：透明订单簿
- **CurrenexSTP**（CME 旗下）
- **FXall**（LSEG 旗下）：机构 RFQ 主导

**典型市场深度**：EUR/USD 顶档 spread 0.1 pip，百万美金级深度在一档就有几亿美金。

### 5. ECN 之下：央行 + 主权基金 + 大型贸易公司

真正的"原始对手方"不是 retail flow，而是：
- **央行**出于货币政策干预（如日本财务省抛售日元、瑞士央行维持瑞郎上限）
- **主权基金**（沙特 PIF、挪威 Oil Fund、新加坡淡马锡）
- **跨国公司财务部**（Apple / Samsung 做大宗外汇对冲）
- **大宗贸易结算**（石油 OPEC / 粮食 Cargill）
- **出口国汇款结算**（中东 → 美元 / 欧洲 → 欧元）

这些实需对手造就了全球外汇市场最深层的流动性底座。

## 对"合规 STP broker" 的警惕

很多零售 broker 宣传 "True ECN" / "STP" / "No Dealing Desk"——意思是"我们不做对手盘，所有单子送到银行间"。

真实情况：
- **99% 的零售 broker 都是混合 Book**
- "STP" 字样不受监管强制定义，随便用
- 检验方式：看点差 +  commission 结构
  - 真 STP：raw spread（可能 0 pip）+ 固定 commission（$3-7/lot）
  - B-Book：spread wider（1-3 pip）包含 commission

另一个信号：**订单 rejection rate + requote rate**。真 STP 在高波动时会收到 LP 的 "Last Look" 拒绝（LP 有权最后看一眼报价再决定接不接），rejection 率较高但 spread 公允。B-Book broker 永远接单但点差宽。

## 加密赛道的流动性链（完全不同）

```
[零售]
  ↓ REST / WS
[交易所订单簿]         ← 零售单 + 做市商单混合撮合
  ↓
┌────────────┐
│做市商（Jump / │
│Wintermute /   │
│Jane Street /  │
│GSR / Cumber-  │
│land）         │
└────────────┘
  ↓ 跨所对冲（在其他所开反向仓）
[其他交易所订单簿]
```

加密的流动性**全在交易所内部订单簿里**。做市商是主要提供者（手续费返佣吸引）。跨所套利 + 期现套利维持价差。

**没有 PoP / Tier-1 Prime Broker 的概念**——因为交易所自己就兼做了所有角色。

## 为什么理解流动性链对 trader 重要

1. **知道你真实的对手是谁**：B-Book broker 赢亏和你完全对立，它愿意你输
2. **点差高低的真实来源**：你的报价穿过多少层 markup
3. **Prop Firm 的 edge**：为啥 Prop Firm 能发出账号——因为它在下游吃 spread 差价 + 报名费是高毛利
4. **监管套利逻辑**：为啥 broker 开在塞浦路斯不开在英国——因为 A/B-Book 规则宽松，利润空间大

## 流动性链中的钱流

典型零售做多 1 手 EUR/USD（10 万欧元）名义价值：
- 你付出：2 pip spread = $20
- broker 留：0.5-1 pip = $5-10
- PoP 留：0.2-0.5 pip = $2-5
- Tier-1 银行留：0.1-0.3 pip = $1-3
- ECN 撮合费：$0.05-0.2

每单你付的 $20 里，大头（$5-10）留在了零售 broker。这就是"免费外汇"实际上每年零售交易员集体贡献几百亿美金的路径。

## 参考

- BIS Triennial Central Bank Survey（全球外汇市场规模 + 结构）
- Financial Stability Board《FX Global Code》
- Finance Magnates / LeapRate 关于 PoP 生态的年度报道
- EBS / Hotspot / LMAX 官方规则文档
- BarclayHedge 对冲基金外汇策略报告
- Bank for International Settlements《Triennial FX Survey 2022》
- 《Currency Wars》（James Rickards）—— 央行行为对外汇影响
