# 交易平台所有权追溯

"谁拥有谁" 是理解这个行业政治动机的底层地图。技术路线之争，本质是几家私有 / 家族 / PE 控股公司之间的博弈。

---

## 1. MetaQuotes（MT4 / MT5）

- **注册地**：目前塞浦路斯（利马索尔）
- **创始**：2000 年俄罗斯喀山，创始人 Renat Fatkhullin（仍在位 CEO）
- **股权**：私有、家族 / 核心员工持股。从未融资，从未上市
- **营收**：不公开。行业估算 2024 年度总收入 $300M+（server license + 增值服务）
- **员工**：~300 人
- **俄罗斯因素**：
  - 2022 Apple App Store 因对俄制裁 **下架 MT4/MT5 移动版** 半年
  - 2023 年逐步恢复
  - 官方对外一直强调总部在塞浦路斯，淡化俄罗斯关联
- **核心资产**：
  - MT4 server license + client（全平台）
  - MT5 server license + client（全平台）
  - MQL5 社区（MQL5.com / Marketplace / Signals / VPS）
  - MetaTrader 专用 VPS

**关键动态**：2024 年开始 **清洗 Prop Firm**——撤销包括 MyForexFunds、True Forex Funds 等的 license，FTMO / FundedNext 被迫转向 DxTrade / cTrader。见 [`05-trends/03-prop-firm-consolidation.md`](../05-trends/03-prop-firm-consolidation.md)。

来源：
- [MetaQuotes 官网 About 页](https://www.metaquotes.net/en/company)
- [Apple Reinstates MetaTrader on App Store - Mirage News](https://www.miragenews.com/apple-reinstates-metatrader-mt4-mt5-on-app-store-961954/)
- Cyprus Registrar of Companies 备案数据

---

## 2. Spotware Systems（cTrader）

- **注册地**：塞浦路斯利马索尔（和 MetaQuotes 同城，连锁咖啡店级距离）
- **创始**：2011 年，由一批离开 MetaQuotes 的工程师创办（业内公开秘密）
- **股权**：私有
- **产品**：
  - cTrader 桌面 / Web / 移动
  - cTrader Copy（跟单）
  - cAlgo（MQL5 竞品，C# 语言）
  - cBroker（broker 后台）
- **定位**：MT5 的体面替代品，主打机构级功能 + 透明的 Level II 订单深度
- **采用度**：远小于 MT5，但 2024 年因 Prop Firm 迁移获得一波增长

来源：
- [Spotware 官网](https://spotware.com/)
- 业内老外汇媒体 LeapRate / Finance Feeds 2011-2013 年深度报道

---

## 3. Devexperts（DxTrade）

- **注册地**：美国 + 俄罗斯圣彼得堡（美俄双轨运营）
- **创始**：2002 年圣彼得堡
- **股权**：私有
- **产品**：
  - DxTrade（Prop Firm 常用的 MT5 替代）
  - DxFeed（行情数据）
  - DxCharts（图表组件）
  - 大量机构定制方案
- **客户**：CQG、TD Ameritrade、E*Trade、盈透、Tastytrade
- **关键动态**：2024 年成为 FTMO 等 Prop Firm 从 MT5 迁移后的首选接替方

来源：
- Devexperts 官网 + LinkedIn 公司档案
- FTMO 在多篇公告里提及 DxTrade 合作

---

## 4. Match-Trade Technologies（Match-Trader）

- **注册地**：保加利亚索菲亚（母公司），开发团队多国
- **创始**：2013 年
- **股权**：私有
- **产品**：
  - Match-Trader（白标交易平台，对标 MT5）
  - 风控引擎（Prop Firm 友好，支持评估期 / 资金账户）
- **增长点**：Prop Firm 赛道。因平台原生支持 challenge / 资金账户管理 workflow，比 MT5 更适配 Prop Firm 业务
- **典型客户**：FundedNext、Funded Trading Plus、Apex Trader Funding、Earn2Trade 等十几家 Prop Firm

来源：
- Match-Trade 官方 [Clients](https://match-trade.com/match-trader) 页面
- 各 Prop Firm 官网公告迁移新闻稿

---

## 5. TradingView

- **注册地**：英国伦敦（TradingView Ltd），开发团队西班牙 / 英国
- **创始**：2011 年，创始人 Denis Globa / Stan Bokov / Constantin Ivanov（俄裔）
- **股权**：
  - 2021 年 C 轮融资 **$298M**，投后估值 **$3B**
  - 投资方：Tiger Global、DST Global、Insight Partners、Index Ventures
- **营收**：不披露。行业估算 2024 年 $300-500M ARR
- **产品**：
  - TradingView.com 图表 + 社区
  - Pine Script（自研策略语言）
  - 多 broker 下单聚合层（见下文 whitelabel map）
- **差异化**：**唯一一家没有自己 server 但直接对接 40+ broker 的前端**——这就是威胁 MT5 的核心机制

来源：
- [Crunchbase TradingView 融资记录](https://www.crunchbase.com/organization/tradingview)
- [TradingView Brokerage Integration 页](https://www.tradingview.com/brokerage-integration/)

---

## 6. NinjaTrader

- **注册地**：丹佛 CO，美国
- **创始**：2003 年
- **股权**：
  - 2025 年 3 月宣布被 **Kraken 加密所**（Payward Inc.）收购，$1.5B（现金 + 股权），2025 上半年完成——跨界并购标志性事件
  - 并购后仍以 NinjaTrader 品牌独立运作
- **核心业务**：美国期货 + CFD 零售经纪 + 自有交易平台
- **技术栈**：NinjaTrader 桌面软件 + NinjaScript（C#）

来源：
- [Kraken to Acquire NinjaTrader — 官方 press release](https://www.kraken.com/press/releases/kraken-to-acquire-ninjatrader-introducing-the-next-era-of-professional-trading)
- [Kraken 收购 NinjaTrader — Kraken Blog](https://blog.kraken.com/news/kraken-to-acquire-ninjatrader)
- CFTC / NFA 券商注册数据

---

## 7. Trading Technologies (TT)

- **注册地**：芝加哥 IL，美国
- **创始**：1994 年
- **股权**：
  - 2021 年被 **Bregal Sagemount**（PE）收购
  - 2022 年 Bregal 分拆为独立运营公司
- **核心业务**：期货交易平台 + 算法执行服务
- **主要客户**：CME、ICE、Eurex、SGX 等期货交易所做市商 + HFT + 基金

来源：
- [TT 公司 About 页面](https://www.tradingtechnologies.com/about/)
- Bregal Sagemount portfolio 列表

---

## 8. 加密交易所

### Binance
- 法律上主体散落多地域（开曼 → 马耳他 → 直布罗陀 → 2023+ 阿联酋）
- 创始人 **Changpeng Zhao (CZ)**，2023 年被 DOJ 起诉 AML 问题，辞任 CEO
- 2024 起新 CEO **Richard Teng**（新加坡籍）
- **非上市**，私有
- 营收估算 2024 $20B（币圈自身估算，无审计）

### OKX
- **注册地**：塞舌尔
- **创始**：2017（前身 OKCoin 2013）
- **控股人**：星空资本 / Star Capital（徐明星控股）
- **非上市**

### Coinbase
- **上市**：2021 年 NASDAQ:COIN 直接上市（非 IPO）
- **注册地**：Delaware 美国
- **CEO**：Brian Armstrong（2012 联合创始）
- 2024 营收 $6.6B

### Kraken（Payward Inc.）
- **注册地**：旧金山 CA
- **创始**：2011 年，CEO Jesse Powell（2022 卸任）
- 2025 年路透社报道 **筹备 IPO**
- 2022 并购 NinjaTrader 进入传统经纪业务

### Bybit
- **注册地**：阿联酋迪拜（原新加坡 / 香港飘移）
- **创始**：2018
- **非上市**

来源：
- [SEC EDGAR Coinbase S-1](https://www.sec.gov/Archives/edgar/data/1679788/000162828021003168/coinbaseglobalincs-1.htm)
- [Reuters Kraken IPO 2025](https://www.reuters.com/business/finance/kraken-ipo-filing/)
- 各交易所 "Terms of Service" 法律主体页面

---

## 9. 零售经纪 / 混合平台

### Interactive Brokers (IB)
- **上市**：NASDAQ:IBKR
- **创始**：1978，现任董事长 Thomas Peterffy（匈牙利裔美籍，仍为最大股东 ~70%）
- **市值**：~$60B（2026 Q1）
- 自有 TWS 平台 + REST API + FIX

### OANDA
- **历史**：1996 多伦多创立（"Olsen and Associates" 缩写）
- **2018**：被 **CVC Capital Partners**（欧洲 PE）收购
- **2025 Dec**：**被 FTMO 收购** ← 这是本行业近期最大新闻之一
- 自有 v20 REST API + MT4 混合供给

### IG Group
- **上市**：LSE:IGG，英国
- **创始**：1974 年
- 自有 IG 平台 + ProRealTime + MT4 混合

### Saxo Bank
- **注册地**：丹麦哥本哈根
- **大股东**：Geely（吉利，中国）持有 49% since 2017
- 自有 SaxoTrader + OpenAPI REST

来源：
- [FTMO 收购 OANDA 公告 2025-12](https://ftmo.com/blog/oanda-acquisition/)
- [CVC Capital Portfolio](https://www.cvc.com/portfolio/)
- LSE 公开披露文件 / Bloomberg 公司档案

---

## 所有权动向总结（2020-2026）

| 年份 | 事件 |
|---|---|
| 2017 | 吉利 49% 入股 Saxo Bank |
| 2018 | CVC Capital 收购 OANDA |
| 2021 | TradingView C 轮融资 $298M @ $3B 估值 |
| 2021 | Bregal Sagemount 收购 Trading Technologies |
| 2022 | Kraken 收购 NinjaTrader |
| 2022 | MetaQuotes 移动版因制裁被 App Store 下架（半年后恢复） |
| 2023 | CFTC / OSC 联手关停 MyForexFunds |
| 2023 | Binance 美国部（BUSD）被 SEC 起诉；CZ 辞任 |
| 2024 | MetaQuotes 开始大规模撤销 Prop Firm license |
| 2024 | FTMO 切 DxTrade + cTrader 作为 MT5 替代 |
| 2025 | FTMO 收购 OANDA（Prop Firm → 综合金融） |
| 2025 | Kraken 传言 IPO 筹备 |

## 关键观察

1. **MT5 生态的政治脆弱性**：MetaQuotes 本质是私有 / 俄罗斯背景公司，对下游 broker 和 Prop Firm 的生杀大权高度集中。App Store 下架 + Prop Firm 清洗都证明了这点。下游长期有动力分散。

2. **PE 主导零售交易基础设施**：TT（Bregal）、OANDA（CVC）、TradingView（Tiger + DST + Insight）、Robinhood（DST + Sequoia）、eToro（eToro 自 2023 SPAC）——这个赛道的中台 / 前端技术大量被私募基金持有，决策周期偏短期、偏退出。

3. **传统 + 加密边界模糊化**：Kraken 买 NinjaTrader、FTMO 买 OANDA——加密原生公司和传统零售券商开始并购。未来几年会继续。

4. **中国资本在 Saxo、吉利**：Saxo 的吉利持股是少见的"欧洲投资银行 × 中国制造业"跨界资产。监管敏感但长期持有。

## 参考

- Crunchbase / PitchBook / Bloomberg 企业数据
- SEC EDGAR / LSE RNS / Companies House 官方披露
- Finance Magnates / Finance Feeds / LeapRate 行业报道
- 各公司官方 Press Release
