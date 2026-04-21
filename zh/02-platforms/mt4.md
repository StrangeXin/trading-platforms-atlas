# MetaTrader 4 (MT4)

MT4 是零售外汇 20 年霸主。虽然 MetaQuotes 2020 年就停更核心版本、2021 年停售 license，但到 2026 年仍有几百家 broker 靠它吃饭。海量 EA / 指标 / 教程 / 肌肉记忆沉淀让它短期不会消失，是整个零售 FX 生态的"活化石"。

## 基本信息

- **发布**：2005 年
- **开发商**：MetaQuotes Software（塞浦路斯 / 原俄罗斯喀山团队）
- **核心版本冻结**：2019 Build 1370 起不再加新特性，仅安全补丁
- **License 停售**：2021 年起 MQ 不再卖 MT4 server license 给新 broker（逼迁 MT5）
- **现状**：存量 broker 继续运营；新 broker 只能拿 MT5；第三方桥接（MetaApi / PrimeXM）勉强延命

## 系统组成（broker 端）

一套完整的 MT4 部署不是一个程序，而是一堆服务端模块：

```
客户终端（Windows / Mobile）
         ↕ (私有 TCP 二进制)
  [MT4 Main Server] —— 用户 / 订单 / 历史
         ↕
  [MT4 Data Center] —— 报价分发 / 中继（给跨地区用户降延迟）
         ↕
  [MT4 Trade Server] —— 撮合引擎 + 风控
         ↕
  [MT4 Gateway] —— 接 LP / FIX 桥接出口（A-Book 用）
         ↕
  [MT4 Manager + Admin] —— broker 后台操作（人工调价、冻结账户、查日志）
```

其中 **Manager Terminal** 是 broker 员工用的 Windows 客户端，有"手工点差调整""虚拟成交延迟""禁止 EA"等开关——这些就是后面说的"B-Book 作弊套件"的由来。

## 技术架构（对比 MT5）

和 MT5 同源，差异主要在产品覆盖 + 订单模型：

| 维度 | MT4 | MT5 |
|---|---|---|
| 资产类 | 外汇 + CFD（金属 / 指数 / 股票） | 外汇 + CFD + 股票 + 期货 + 债券 |
| 订单系统 | 位置制（每方向单独持仓 + 锁仓 hedging） | 净额制（同方向合并）+ 可选 hedging |
| 脚本语言 | MQL4（C 风格） | MQL5（C++ 风格，不兼容 MQL4） |
| Depth of Market（L2） | 不支持 | 支持 |
| 时区 | 服务器本地（大多数 broker EET/GMT+2） | UTC+ 内部标准化 |
| Strategy Tester | 单线程 | 多线程 + 云回测（MQL5 Cloud） |
| 客户端架构 | C++ 早期代码库 | C++ 重写，更现代 |
| 协议 | 私有二进制（和 MT5 不互通） | 私有二进制（新版） |
| 最大挂单数 | 理论无限（实际 broker 配置） | 理论无限 |
| 经纪商数量 (2024) | ~400+ | ~600+ |

**MT4 的独特优势**：**位置锁仓（Hedging）**——同品种可以同时有多头 + 空头头寸，分开记为两个 position。MT5 默认净额制（开空再开多 = 部分平仓），虽然 MT5 也能开 hedging 模式但不如 MT4 原生流畅。很多"双边马丁格尔"EA 依赖 MT4 的位置制，迁 MT5 直接报废。

## MQL4 生态

**MetaQuotes Market**（marketplace.mql5.com 上的 MT4 分区）是 MQL4 的官方集散地：

- **EA（Expert Advisors）**：全自动交易机器人，扩展名 `.ex4`
- **自定义指标**：`.ex4` 同格式，区别在运行上下文
- **脚本**：一次性执行的小工具
- **估计数量**（2024 年）：EA 10,000+ 付费 + 30,000+ 免费，指标 20,000+

典型付费 EA 价格 $100-500，头部（如 "Gold Scalper Pro"）累计销售上千份，作者半匿名。

**为啥 MQL4 难换**：
- 语言本身 C 风格 + 单线程 + 无现代库，**但**生态里有大量"只能在 MT4 跑"的策略
- 很多代码依赖 MT4 的 `OrderSend()` 签名（位置制），迁 MT5 要大改
- 付费 EA 作者往往不更新 MT5 版本（等客户流失完就退场）

## 为什么 MT4 20 年不死

1. **MQL4 生态**：几十万个 EA + 上万付费指标。换平台全报废，等于清零所有 broker 的"让用户自己写机器人 → 黏住"策略
2. **用户肌肉记忆**：零售交易员 20 年的 UI / 热键 / 概念（point、pip、magic number、ticket）都是 MT4 的。换 MT5 等于换键盘
3. **Broker 惰性**：2005-2015 入行的 broker 基础设施全是 MT4 server，迁移成本高 + 用户流失风险大
4. **十年教育累积**：教程、论坛（Forex Factory、Babypips）、课程几乎全以 MT4 为例，老师们都懒得重拍视频
5. **Prop Firm 锁定**：FTMO、TopStep 早期全 MT4，切换要重跑所有 challenge 规则的内部测试

## 2015 瑞郎黑天鹅：MT4 第一次大考

**2015.1.15** 瑞士央行解除欧元 / 瑞郎 1.20 地板，EURCHF 30 秒跌 20%。

- 大量 MT4 broker 的 B-Book 头寸瞬间爆仓
- **FXCM**（全美最大零售 FX）亏 $225M，被 Leucadia 紧急救助 $300M，后来被 Jefferies 吞并
- **Alpari UK**（欧洲第三大 MT4 broker）直接破产倒闭
- 部分 broker 的 MT4 server 没扛住撮合风暴，挂了几小时，事后给用户"追加亏损"
- Apple 的 App Store 里 MT4 / MT5 客户端成为用户吐槽"亏损是 app 的错"的重灾区

这次事件让 ESMA 加速 MiFID II 谈判，2018 年把零售 FX 杠杆从 200+ 砍到 30:1，MT4 的"百倍杠杆为卖点"时代终结。

## Apple 事件 2022

**2022.9** Apple 以 "俄罗斯企业" 为由下架 MetaTrader 4 / 5 iOS app 约半年。

- MetaQuotes 紧急把 App Store 开发者账户迁到塞浦路斯子公司 "MQ Software Corp"
- **2023.3** 重新上架
- 影响：iOS 用户被迫走 Web 端 / 第三方 wrapper，不少中端 broker 失去 20-30% 的 iOS 活跃

这是 MetaQuotes **地缘政治风险**的第一次公开暴露。之后：
- broker 开始要求多平台备份（TradingView、cTrader、DxTrade）
- 大型 Prop Firm（如 FTMO）加速上 cTrader 作为 plan B
- MetaQuotes 实际 UBO 成为监管和媒体重点追踪（至今无官方披露）

## B-Book "作弊套件" 与 MT4 的黑历史

MT4 server 有一整套未公开的 plugin API（通过 Manager Terminal 加载），黑灰产版本主要有：

- **Virtual Dealer Plugin**：人工延迟成交、重新报价、让用户亏得更多
- **Stop Hunter Plugin**：看谁挂了止损，滑点触发
- **EA Killer**：识别 EA 特征，给该账户加人为滑点
- **IB Plugin**：给推荐人分成的 b-book 对冲工具（合规但边界灰）

这些 plugin 大多 CIS 地区俄语开发者写的，售价 $5,000-20,000 一次性。**2015-2018 多次被 Finance Magnates / LeapRate 曝光**，部分塞浦路斯 broker 被 CySEC 罚款。MT4 server 没有原生抵抗这种改造的机制，靠 broker 自觉。

MT5 server 据说做了 plugin 签名 + 审计日志，但 MetaQuotes 官方从未公开这部分。

## 现状 2024-2026

- 新 broker 默认只能买 MT5 license；已有 MT4 license 的 broker 还能续
- 高频 / 机构派 broker（IC Markets / Pepperstone）主推 MT5
- 零售 / 营销派 broker（Exness / XM / FBS）MT4 + MT5 并行提供用户选
- Apple / Google Play 偶尔因国别政策再下架 MT apps，MetaQuotes 靠主体转移维持上架
- 2024 MetaQuotes 公开表示"MT4 用户已 < MT5"，但业内估计 MT4 零售活跃账户仍在 2-3 百万量级

**迁移出口**（broker 视角）：
- MT5（官方路径）—— 迁移工具 MQ 提供，但 EA 兼容性差
- cTrader（Spotware）—— 现代 UI + C# + L2 DOM，Prop Firm 首选备份
- TradingView + 自研后端 —— 做 API 整合，绕开 MetaQuotes

## 参考

- [MetaQuotes 官网 MT4](https://www.metatrader4.com/)
- [MQL4 官方文档](https://docs.mql4.com/)
- [MetaTrader 4 — Wikipedia](https://en.wikipedia.org/wiki/MetaTrader_4)
- [Apple reinstates MetaTrader MT4/MT5 on App Store — MirageNews](https://www.miragenews.com/apple-reinstates-metatrader-mt4-mt5-on-app-store-961954/)
- [3 reasons why iOS removed MT4 and MT5 — FP Markets](https://www.fpmarkets.com/blog/3-reasons-why-ios-removed-mt4-and-mt5-from-the-app-store/)
- [WikiFX — MT4/MT5 下架事件](https://www.wikifx.com/en/newsdetail/202209282994685243.html)
- Forex Factory / Babypips 论坛 MT4 板块（社区教程）
