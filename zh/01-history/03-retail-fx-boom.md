# 零售外汇爆发期（2000-2010）

零售外汇从零到全球几百万账户、日成交量数百亿美元——只用了十年。这个过程定义了今天所有的格局：为什么 MT5 垄断、为什么 Prop Firm 能存在、为什么监管从 2010 后开始收紧。

## 背景：2000 年前外汇是机构独享

- 外汇市场 1970s 布雷顿森林体系解体后浮动汇率化
- 1990s 前外汇交易**无电子零售**：
  - 真实流动性在 interbank（银行间）EBS / Reuters Dealing 等系统
  - 个人想做 FX 要走期货（CME IMM FX futures）或等银行给报价
  - 最小点差 5-10 pips、最小手数 100 万美金
- 互联网 + 杠杆监管松动 → 零售 FX 终于可能

## 三波推动因素

### 第一波：互联网 + ECN 出现（1996-2000）

1996: **Matchbook FX** 推出第一个零售 FX ECN（短命，但开路）
1996: **Gain Capital**（FOREX.com 前身）成立纽约
1998: **FXCM** 成立（后来的美国零售 FX 头部，2015 因瑞郎事件破产）
1999: **IFX Group** / **Saxo Bank** 推出网页端外汇
2000: **OANDA** 发布 **FXTrade**——24×7 报价、1-pip 点差、可任意手数（颠覆 100 万美金起步）

OANDA 的设计影响深远：
- 不限定 "lot size" 概念（1 美元也能交易）
- 24/7 交易（周末也开盘）
- 实时报价推送 + RESTful API（第一家）

### 第二波：MT4 + 欧洲 CFD 扩张（2005-2008）

2005: **MetaTrader 4** 发布——免费给 broker、EA 脚本语言、桌面 / 后台一套，俄罗斯团队干翻了老式 FX 终端
2006: MetaQuotes 签下 **Alpari**、**FxPro**、**FXCM** 等早期采用者
2007-2008: 全球零售 broker 蜂拥上 MT4
- **CySEC（塞浦路斯证监会）** 成为欧洲 FX broker 首选注册地：低税率 + 欧盟护照 + 宽松 CFD 规则
- Plus500 / eToro 2007 在塞浦路斯成立
- 大量俄罗斯 / 以色列运营团队迁塞浦路斯

2008 金融危机 → 传统股市恐慌 → 散户转向外汇投机 → 零售 FX 账户数量翻倍

### 第三波：CFD + 差价合约套利（2008-2010）

**CFD（Contract for Difference）** 是英国 1990s 创造的合约形式，绕开印花税 + 可 shorting 个股。零售外汇 broker 顺势把 CFD 品类加进 MT4 / 自家平台：
- 个股 CFD（英国 / 德国个股 × 100 杠杆）
- 指数 CFD（DAX / S&P / FTSE × 50）
- 大宗 CFD（原油 / 黄金 × 100）
- 加密 CFD（2014+）

这让 broker 不用再接传统交易所，就能提供近乎所有资产类。对 broker 是降本，对零售是"万物杠杆"。**CySEC 系零售 broker 主打"FX + CFD" 的组合延续至今**。

## 一些里程碑数据

| 年份 | 零售 FX 日交易量 | 主要 broker 数 | 点差 |
|---|---|---|---|
| 2000 | <$10B | <20 | 10-20 pip |
| 2005 | $50-100B | ~100 | 3-5 pip |
| 2010 | $300-400B | ~1000 | 1-2 pip |
| 2015 | $500-600B | ~1500 | 0.5-1.5 pip |
| 2020 | $600-900B | ~1500 | 0.1-1 pip |

数据来源：BIS Triennial FX Survey + Finance Magnates Intelligence。真实零售部分约占全球外汇 5-10%（大头还是 interbank）。

## 规则紧缩的起点

美国 **Dodd-Frank（2010）** 把零售 FX 杠杆从 100:1 砍到 50:1（major 币对）/ 20:1（其他）。CFTC 要求零售 broker 注册 NFA，合规成本飙升 → 大量 broker 退出美国市场 → FXCM 等巨头转向海外。

**MiFID II（2018）** 欧洲限制 retail CFD 杠杆 30:1（major FX），禁止 binary options，强制负余额保护。塞浦路斯 broker 被迫大改合约条款。

**ASIC 2021 规则** 澳洲同步收紧杠杆。

这些监管动作逼出后来的 **Prop Firm 模式**：

> "你给我报名费，我给你'模拟'资金，你用模拟资金交易但要过我的风控规则。如果过关，我'分你利润'。"

表面看是"训练 + 资金分配"，实质是绕开对零售个人客户的杠杆 / 风险规则——Prop Firm 给你的是"demo 账号"，Prop Firm 承担真实市场风险（或对冲）。见 [`05-prop-firm-rise.md`](./05-prop-firm-rise.md)。

## 关键教训

1. **技术商品化带动市场**：MT4 让 broker 门槛从千万美金降到十万美金，broker 数量 2000→2010 翻 50 倍
2. **监管落后于创新**：零售 FX + CFD 一路走到 2010 才碰到第一波监管
3. **白标模式一旦固化就锁定**：直到 2024 年都是 MT4/5 主导——20 年路径依赖
4. **分差收益是赢家逻辑**：零售用户不赢不输都贡献点差，broker 稳赚
5. **监管缝隙孕育新商业模式**：Prop Firm 就是监管紧缩的直接衍生品

## 参考

- BIS Triennial Central Bank Survey 2004 / 2007 / 2010
- Finance Magnates Intelligence FX Broker Database
- 《Currency Trading For Dummies》（Brian Dolan）—— 2000s 零售 FX 科普
- CFTC / NFA regulatory history
- [OANDA Company History](https://www.oanda.com/about/)
