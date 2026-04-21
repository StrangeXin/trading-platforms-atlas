# FIX 协议：历史、版本与普及

## 啥是 FIX？

**FIX**（Financial Information eXchange）是一套开放、非专有的消息协议，用来在金融市场做盘前和盘中信息的电子通信。它定义了订单、成交、报价等消息在交易对手方之间的文本（后来还有二进制）格式——买方、卖方 broker、交易所之间都用。

FIX 不归任何一家公司所有，由非盈利会员组织 **FIX Trading Community** 管理。

---

## 起源：1992，Fidelity + Salomon Brothers

### 要解决啥问题

1991–1992 年机构和 broker-dealer 之间的股票订单通信还在靠电话。风险很大：订单可能听错、发错、丢单。电话完之后还得手动敲进内部系统，又多一层错和延迟。

背景还有 **1986 年英国 Big Bang** 之后股票市场的国际化——跨境电子单流需要一个共通语言。

### 作者

**Robert "Bob" Lamoureux**（Fidelity Investments）和 **Chris Morstatt**（Salomon Brothers）**1992 年**写出了 FIX 第一版。注：虽然有人说是 Morgan Stanley 参与，真正的发起方是 **Fidelity 和 Salomon Brothers**。Morgan Stanley 是早期采用者，不是联合创始方。

他们的目标是把电话口头交流替换成"机器可读的数据——能在交易员之间共享、可被分析、执行、存储"。据 [FIXspec Medium 历史](https://fixspec.medium.com/history-of-fix-protocol-17103a5e81f4)，最早范围刻意做得窄：股票订单指令（买/卖）+ 成交通知。

---

## 版本史

### FIX 1.0（1992）

- 最初是 Fidelity 和 Salomon 之间的私有规范。
- 文本格式，tag=value 键值对（例如 `49=SENDER`、`56=TARGET`、`35=D` 表示 New Order）。
- 只覆盖基础股票订单流程。

### FIX 2.x — 4.0（1990 年代中前期）

- 其他公司加入，增量扩展。
- FIX 4.0（1990 年代初发布）开始规范现代 FIX 消息中还能见到的 header/trailer 结构。
- FIX 4.x 全系列都是单文档：应用语义、编码、会话层全塞一起。

### FIX 4.2（2001）—— 老黄牛

**FIX 4.2 是在股票市场达成全行业普及的那一版。** 2001 年发布，几十年后依然在大量机构活跃使用——寿命相当惊人。4.2 新增的关键能力：

- 扩展订单类型（stop、stop-limit、market-on-open 等）
- IOI（Indication of Interest）消息
- 成交后分配和确认消息
- 新闻和邮件消息类型

据 [ONIX FIX 历史](https://www.onixs.biz/insights/exploring-the-history-behind-fix-protocol)："FIX 4.2（2001 年发布）至今在股票产品上仍被广泛使用。"

### FIX 4.4（2000 年代中期）—— 多资产扩张

FIX 4.4 把标准延伸到非股票资产：

- **全球固定收益**产品
- **衍生品**（场内和场外）
- 更完善的分配和结算流程
- 面向 FX 产品的新字段（货币对、结算惯例）

FIX 4.4 标志着协议从纯股票走向真正的多资产消息标准。

### FIX 5.0 / FIXT 1.1 —— 会话层分离

FIX 5.0 引入了一个关键架构变化：**会话层从应用层拆出来**。新的配套规范 **FIXT（FIX Transport）1.1** 管连接 / 会话生命周期（登录、登出、心跳、重传），FIX 5.0 消息只定义应用层内容。

这么拆的好处：
- 可以换不同的传输协议（FIXT、MQ、自定义）而保持 FIX 5.0 消息 schema 不变
- 传输层和业务逻辑可以独立演进

### FAST 协议（2005）

**FAST**（FIX Adapted for Streaming）2005 年发布，解决的是大流量行情分发问题。标准的 tag=value FIX 很啰嗦，上千品种的全量订单簿推送很吃带宽。FAST 用的是：

- 模板压缩
- 差量编码（只发相对基线的增量）
- 针对组播推送优化的二进制编码

FAST 成了大多数主流交易所行情推送（CME、Euronext 等）的事实标准编码——即使那些推送用的是自定义应用层 schema，不是 FIX 消息。

### 简单二进制编码（SBE，2020）

**2020 年** FIX Trading Community 发布基于 **SBE（Simple Binary Encoding）** 的新二进制编码标准。SBE 面向超低延迟场景——FAST 那套流式设计在这种场景下反而是多余开销。SBE 追求定长、顺序、零拷贝解析，可以配合硬件加速。

CME Group 的 MDP 3.0 行情平台（跑 CME Globex 衍生品推送）用的就是 SBE。

---

## 普及潮：1990s 至今

### 1990s：股票市场先行

FIX 在 1990 年代迅速扩散到买方机构投资者和卖方主经纪商。网络效应很强：只要一家大机构用 FIX 路由订单，对手方就得跟着上。到 90 年代末：

- 美国主流股票主经纪商全支持 FIX
- 欧洲股票市场紧随其后，Big Bang 后的电子化连接推了一把
- ECN（Island、Archipelago、REDIBook）把 FIX 做成主 API

### 2000s：衍生品、FX、固收

FIX 4.4 扩到衍生品和 FX，吸引了新一批采用者：

- **CME Group** 的 Globex 电子期货平台用 FIX
- **FX 主经纪商**（Morgan Stanley、Deutsche Bank、UBS）开始给现货 FX 提供 FIX 路由
- **FIXatdl**（FIX Algorithmic Trading Definition Language）作为子标准出现，用来在买卖双方之间传递算法参数

### 2010s：零售 FX + 加密背景

OANDA、FXCM、Interactive Brokers 这类零售 FX 平台做了 FIX API 来吸引机构和算法客户。OANDA v20 REST API——JSON-over-HTTPS 的现代替代——在零售 / 算法层面竞争，但没想过替换机构的 FIX 流。

加密交易所（Binance、Coinbase、Kraken）基本无视 FIX，选了 REST + WebSocket API，反映了不同的客户群。不过随着机构加密参与度上升，几家加密平台（包括 Coinbase Advanced）开始给机构客户提供 FIX 连接。

---

## 今天谁在用 FIX

### 买方
- 资产管理公司（Fidelity、BlackRock、Vanguard 等）
- 对冲基金
- 自营交易公司
- 共同基金

### 卖方
- 投行（Goldman Sachs、Morgan Stanley、JPMorgan）
- Broker-dealer
- 主经纪商

### 场地
- 股票交易所：NYSE、NASDAQ、LSE、Euronext、Deutsche Börse
- 衍生品交易所：CME Group、ICE、Eurex
- Dark pool 和 ATS
- FX 电子通信网络（EBS、Reuters Matching）

### 技术供应商
几乎所有机构级 OMS（订单管理系统）和 EMS（执行管理系统）供应商都支持 FIX 连接：Bloomberg、Charles River、SS&C Eze、FlexTrade 等。

---

## FIX 治理：FIX Trading Community

**FIX Trading Community**（前身 FIX Protocol Limited）是非盈利标准组织，负责：

- 维护 FIX 规范
- 协调新资产类和工作流的工作组
- 主办年度 FIX Global Trading Conference
- 运营 [fixtrading.org](https://www.fixtrading.org) 在线规范

交易生态里的公司都可以入会。工作组靠共识运作；标准变更需要会员广泛同意。

---

## FIX vs. 现代 REST/WebSocket API

| 维度 | FIX | REST/WebSocket |
|-----------|-----|----------------|
| 消息格式 | tag=value 文本或二进制（SBE/FAST） | JSON（REST），JSON 或二进制（WS） |
| 连接 | 持久 TCP 会话 | HTTP 无状态（REST）；持久（WS） |
| 延迟 | 二进制 FIX 亚毫秒级 | 毫秒级（REST）；低毫秒（WS） |
| 主要采用者 | 机构买卖方 | 零售交易员、加密、fintech |
| 标准化 | 单一跨公司标准 | 每家交易所 / broker 自己一套 |
| 上手难度 | 高（要懂专业知识） | 低（任何 HTTP 客户端都能用） |

FIX 仍是机构股票和衍生品交易的共同语言。REST + WebSocket 在零售交易平台、加密、新 fintech 集成里占统治地位。两个世界还没合流。

---

*参考：[ONIX FIX 历史](https://www.onixs.biz/insights/exploring-the-history-behind-fix-protocol)、[FIXspec Medium 历史](https://fixspec.medium.com/history-of-fix-protocol-17103a5e81f4)、[FIX Wikipedia](https://en.wikipedia.org/wiki/Financial_Information_eXchange)、[FIX Trading Community](https://www.fixtrading.org/online-specification/introduction/)、[QuantInsti FIX 指南](https://blog.quantinsti.com/fix-trading-protocol/)、[Oxera FIX 收益分析](https://www.oxera.com/wp-content/uploads/2018/03/Benefits-of-the-FIX-Protocol.pdf)*
