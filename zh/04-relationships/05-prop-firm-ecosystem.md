# Prop Firm 生态关系图

Prop Firm 行业 2020-2026 从 $100M 规模增长到 **$12B+ 行业**。本章节独立于 `03-whitelabel-map.md`（covers broker - MT5 - prop firm triangle），专注**prop firm 自己的生态**：谁拥有谁、谁依赖谁、2024 MetaQuotes 清洗后的重新排位。

## 一、2024-2026 行业格局

### Top 15 Prop Firm（按营收估算）

| # | Prop Firm | 总部 | 月营收估算 | 主力平台 | 备注 |
|---|---|---|---|---|---|
| 1 | **FTMO** | 布拉格 | $25-30M | cTrader (ct.ftmo.com) + MT5 | 2025 收购 OANDA，合并成 "trading powerhouse" |
| 2 | **The5ers** | 特拉维夫 | $10-15M | MT5 + cTrader | 2025 加入 cTrader，弃 MT4 |
| 3 | **FundedNext** | 阿治曼 UAE | $10-15M | MT5 + Match-Trader + cTrader | 2024 Match-Trader 启用；2024 美国 CFD 停 |
| 4 | **TopStep** | 芝加哥 | $8-12M | TopstepX（自研） + NinjaTrader + TradingView | 2025 强制 TopstepX |
| 5 | **Apex Trader Funding** | Austin | $5-10M | NinjaTrader + Rithmic | 美国期货 prop 头部 |
| 6 | **FundingPips** | Dubai | $5-10M | MT5 + DxTrade | 曾被 MetaQuotes 2024.2 清洗 |
| 7 | **True Forex Funds** | 布达佩斯 | $3-5M → 倒闭 | MT4/5 | 2024.2 MetaQuotes 吊牌，业务停 |
| 8 | **CryptoFundTrader** | Zug 瑞士 | $2-4M | MT5 + Match-Trader + Bybit | 加密专注 |
| 9 | **MyForexFunds** | 密西沙加 加拿大 | 峰值 $10M → 起诉停 | MT4/5 | 2023 CFTC 起诉 $310M "fraud" |
| 10 | **Maven Trading** | Dublin | $2-4M | MT5 + cTrader | 2024 快速增长 |
| 11 | **BluBerry Funding** | London | $1-3M | MT5 | Firefly Ventures 支持 |
| 12 | **E8 Markets** | Dubai | $1-3M | MT5 | 欧洲 + 中东 |
| 13 | **Tradenet Capital** | 以色列 | $1-2M | cTrader + MT5 | 以色列 prop 历史最长 |
| 14 | **Lux Trading Firm** | Luxembourg | $1-2M | MT5 | 欧盟监管较严 |
| 15 | **FundedTrader** | 波兰 | $1-2M | MT5 | 波兰本土 |

**行业数字**：
- 全球活跃 prop firm 数量：~200 家（2024 峰值 ~300 家，2024.2 清洗后减少）
- 全行业**年营收**：~$12B（2024 估计）
- **头部 10 家合计**：~60% 行业营收

## 二、平台依赖关系

```
┌─────────────────────────────────────────────────────────────┐
│                   Prop Firm 平台选择                         │
└─────────────────────────────────────────────────────────────┘

MetaTrader 5 (MetaQuotes)
    │
    ├── FTMO (部分迁移中)
    ├── FundedNext (主力)
    ├── The5ers (2025 迁到 cTrader)
    ├── FundingPips (曾被吊牌)
    ├── CryptoFundTrader (多平台之一)
    ├── E8 Markets
    ├── BluBerry Funding
    └── Maven Trading (部分)

cTrader (Spotware)
    │
    ├── FTMO (ct.ftmo.com 主力)
    ├── The5ers (2025 主力)
    ├── FundedNext (可选)
    ├── Maven Trading (主力)
    └── Tradenet Capital

NinjaTrader (NinjaTrader LLC, 被 Kraken 收购)
    │
    ├── TopStep (部分)
    ├── Apex Trader Funding (主力)
    └── 其他美国期货 prop

TopstepX (自研)
    │
    └── TopStep (2025 强制)

Match-Trader (Match-Trade Technologies)
    │
    ├── FundedNext (2024 启用)
    └── CryptoFundTrader

DxTrade (Devexperts)
    │
    └── FundingPips

TradingView (集成)
    │
    └── TopStep (作为前端)

Bybit Exchange
    │
    └── CryptoFundTrader (2024 Q2 直接集成)
```

## 三、并购 + 投资关系

### 2025 FTMO × OANDA 是分水岭

```
FTMO
  ↓ 2025-02 CVC 宣布出售 OANDA
  ↓ 2025-11 监管批准
  ↓ 2025-12-02 完成收购
OANDA Global Corporation
```

**为啥重要**：
- OANDA 是有**美国 CFTC + 多国真银行牌照**的券商
- FTMO 拿到**真正的对冲能力**（不再依赖纯 B-book）
- 2025-08 FTMO + OANDA 在美国恢复 MT5 prop trading
- 同业都在复制这个模式

### 其他 Prop 平台整合

| 年份 | 事件 |
|---|---|
| 2020 | Kraken 对 NinjaTrader 兴趣起 |
| 2023 | Apex 收购 Earn2Trade（期货 prop 整合）|
| 2024 Q1 | FundedNext + Match-Trader 深度集成 |
| 2024 Q1 | CryptoFundTrader + Bybit 合作（4月）|
| 2025-03 | **Kraken 收购 NinjaTrader $1.5B**（现金 + 股权）|
| 2025-06 | Kraken 发布 NinjaTrader Connect（B2B 平台）|
| 2025-12 | **FTMO 完成 OANDA 收购** |
| 2026-03 | Kraken Bitnomial 收购 $550M |
| 2026-03-20 | Kraken 取消 IPO |

**观察**：
- **交易所 + 期货 broker** 整合（Kraken + NinjaTrader）
- **Prop firm + broker** 整合（FTMO + OANDA）
- **Prop firm + 加密所** 整合（CFT + Bybit）
- 2025-2026 行业从 "independent prop firm" → "vertical integrated trading group"

## 四、和 MetaQuotes 的"爱恨情仇"

### 2020-2023：蜜月期

- Prop firms 通过 white-label broker 拿 MT5 license
- MetaQuotes 收**per-account 费用**（每个 demo 账户也算）
- 双方共生：MT5 是零售 trader 熟悉的平台，prop firm 是 MetaQuotes 新用户来源

### 2024 MetaQuotes 大清洗

**2024 年 2-3 月**：

- 2024-02-06：True Forex Funds 被吊销 MT5 license
- 2024-02-14：Funding Pips 被吊销
- 2024-02-20：MetaQuotes 确认对"向美国客户提供服务"的 prop firm 采取行动
- 2024-03：多家中小 prop firm 被迫转平台

**表面原因**："美国合规"（MetaQuotes 不希望没有 CFTC 牌照的 prop firm 接美国散户）

**深层原因**：
- Prop firm 每月上亿美元营收，**MetaQuotes 拿不到合理比例**（因为账户是 demo）
- MetaQuotes 希望**重建谈判筹码**
- 借"美国合规"之名行商业利益之实

**后果**：
- **cTrader 受益最大**（FTMO、The5ers、FundedNext 等迁入）
- Match-Trader + DxTrade 次受益
- Prop firm 行业**加速去 MetaQuotes 化**
- 2025 年估计 **MT5 Prop Firm 市场份额从 90% → 55-60%**

### 2025 重新缓和？

- FTMO 通过收购 OANDA（本身有 MT5 license）重新接入
- MetaQuotes 在国会听证会上**态度软化**
- 2025 Q3 起 MT5 prop firm 数量**触底反弹**
- 但**主导地位已丧失**，多平台分散已形成

## 五、Prop Firm 母公司 / 股东关系

### FTMO 集团

- **OMHC**（Omega Holding Company）是 FTMO 母公司
- 位于捷克布拉格
- 创始人 Otakar Šuffner + Marek Vašíček（保持 100% 私有，无外部股东）
- 2025 年 Forbes 披露两人估计身价 **€1B+ 各**
- 旗下业务：FTMO、OANDA（2025 收购）

### The5ers

- 以色列私人公司
- 创始人 + 管理层 100% 持股
- 无公开外部融资

### FundedNext

- 创始人 Syed Abdullah Jayed（孟加拉）
- 阿联酋 + 孟加拉双重注册
- 持有 **Cyprus Securities & Exchange Commission** license 2024 年补齐

### TopStep

- 芝加哥 2012 年 Michael Patak 创立
- 保持私有（多次被投资但拒绝）
- 2024 年 Nava Capital 少数投资（未披露金额）

### Apex Trader Funding

- Austin TX 2022 创立
- 快速增长，业内推测**外部 PE 投资**但未公开

## 六、地理分布

```
欧洲（~50% 行业营收）
├── 捷克：FTMO (头部)
├── 爱尔兰：Maven Trading
├── 卢森堡：Lux Trading Firm
├── 波兰：FundedTrader
├── 英国：BluBerry Funding
├── 匈牙利：True Forex Funds（已倒）
├── 塞浦路斯：多家（FundedNext 欧洲子）
└── 德国：部分 (非头部)

中东（~20%）
├── UAE Dubai + Ajman：FundedNext、E8 Markets、FundingPips 等
└── 以色列：The5ers、Tradenet

美洲（~20%）
├── 美国芝加哥：TopStep
├── 美国 Austin：Apex Trader Funding
├── 加拿大：MyForexFunds（已倒）
└── 其他美洲：小型

亚洲（~10%）
├── 香港 / 新加坡：几家
└── 印度 / 东南亚：零星

非洲（<1%）
└── 南非零星
```

**观察**：
- **迪拜是 2024-2026 新兴中心**（税收 + 监管宽松）
- **以色列 + 塞浦路斯** 是传统"金融科技 + FX"DNA
- **美国几乎不存在**（因为 CFTC 高门槛）
- **亚洲很小**（监管不明，大量非法运营）

## 七、Prop Firm 生态的"外围服务商"

### 支付 / 入金

- **PayPal + Stripe**（大部分主流 prop 避开，因为经常被冻结）
- **Skrill / Neteller**（小型 e-money）
- **加密支付**（主流 prop 都接）
- **Bank wire**（大 challenge fee 用）

### 技术 / 白标 broker

- **B2Broker**：给小型 prop 提供 MT5 white-label + risk management
- **Leverate**：MT5 white-label 传统玩家
- **Quadcode**：FX / CFD tech stack
- **Match-Trade Technologies**：新一代 tech stack，prop friendly
- **Spotware**：cTrader 官方，和 FTMO 深度合作

### 监管 / 合规

- **ADL Legal + 其他专业律所**：prop firm 监管咨询
- **KPMG / Deloitte**：审计（中大型 prop）
- **CySEC 注册代理**：小型 prop 用

### 营销 / 付费流量

- **Google Ads FX prop firm** 关键词：极度竞争（CPC $5-30）
- **Facebook / Instagram**：主要获客来源
- **YouTube FX 大 V**：30-50% 收入分成
- **Discord / Telegram 付费社群**

## 八、Prop Firm 未来 5 年预测（2026-2030）

1. **持续并购**：FTMO + OANDA 是开端，更多 prop + broker 整合
2. **地理转移**：更多迁到 Dubai / 阿联酋（税收 + 监管）
3. **AI 集成**：每个 prop firm 会有自己的 "AI coach"（有些已有）
4. **监管加强**：英国 FCA 和 EU ESMA 可能在 2026-2028 发布 prop firm 专项规则
5. **美国重新进入**：通过 broker 收购（FTMO-OANDA 模式）+ CFTC 合规路径
6. **加密融合**：更多 prop 支持加密（借鉴 CryptoFundTrader）
7. **"AI prop firm"**：新物种（见 `../05-trends/05-ai-in-trading.md`）
8. **大玩家 IPO？**：FTMO 有可能 2027-2028 IPO（估值 $5-10B 级别）

## 参考

- [Finance Magnates Prop Trading 行业报告](https://www.financemagnates.com/thought-leadership/taking-stock-of-the-retail-prop-trading-market/)
- [FTMO 收购 OANDA 完成 - GlobeNewswire](https://www.globenewswire.com/news-release/2025/12/02/3197594/0/en/FTMO-Building-Global-Trading-Powerhouse-Completes-Acquisition-of-OANDA-from-CVC.html)
- [CVC 出售 OANDA](https://www.cvc.com/media/news/2025/cvc-funds-agree-sale-of-oanda-to-ftmo/)
- [Kraken 收购 NinjaTrader](https://www.kraken.com/press/releases/kraken-to-acquire-ninjatrader-introducing-the-next-era-of-professional-trading)
- [True Forex Funds 被 MetaQuotes 吊牌](https://fxnewsgroup.com/forex-news/retail-forex/exclusive-prop-trading-firm-true-forex-funds-shut-down-by-metaquotes-move/)
- [MyForexFunds CFTC 起诉](https://www.financemagnates.com/forex/310-million-prop-trading-fraud-regulators-freeze-assets-of-my-forex-funds/)
- [VeritasChain 2025 Prop Firm 复盘](https://veritaschain.org/blog/posts/2025-12-28-prop-trading-reckoning/)
- [FTMO 2024 财报 $329M](https://www.financemagnates.com/forex/ftmos-parent-netted-over-62-million-on-329m-revenue-in-2024/)
- [2026 Prop Firm 规则变化预测](https://newyorkcityservers.com/blog/prop-firm-rule-changes-2026)
- `03-whitelabel-map.md`：Prop Firm × MT5 × broker 的白标关系
- `../07-essentials/02-prop-firm-casino.md`：Prop Firm 本质
- `../02-platforms/ftmo.md` / `topstep.md` / `cryptofundtrader.md` 等：单平台档案
- `../05-trends/03-prop-firm-consolidation.md`：Prop Firm 并购历史
