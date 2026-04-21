# 为啥加密赛道 MT 干不过

加密交易所统统绕过了 MetaQuotes 的 MT4/MT5 套件，**从零搭建**自己的平台。这不是偶然——是赛道的基因决定。

## 根本原因：没有"MT5 等价物"的供给

MT5 的成功是因为给了**传统零售 broker**一套"开箱即用、终端 + server 一键部署"的套件。

加密世界没有这个供给方：
- MetaQuotes 自己对加密态度冷淡（2022 前根本不支持加密 symbol），后来加了也是通过 broker 接 CFD-on-Crypto，不是真正持仓
- 没有第三方做类似的"加密所全家桶套件"
- 加密所第一天就得自己写撮合 + 钱包 + 客户端

结果：**加密赛道被迫自主创新**，反而发育出了更先进的架构。

## 加密所的架构优势（vs MT5）

### 1. 资产托管 = 撮合（无 PB 链路）

```
传统 FX：
[broker]—→[PB]—→[ECN]—→[银行做市]→结算

加密：
[交易所]=撮合+托管+清算 一体
         ↓
       内部订单簿
```

没有外部链路就没有延迟、佣金抽水、对账复杂度。

### 2. 24/7 + T+0 实时清结算

MT5 server 的账户日终 EOD 清算是基于"市场休市"假设。
加密不休市，**每笔成交立刻清算到账户**。这是架构层面的差异，不是配置项。

### 3. API-first

MT5 是"桌面终端 + 私有协议"基因，零售程序员要接入要过 MetaApi 这种云桥。

加密所第一天就提供 REST + WebSocket API，门槛极低：
- 5 行 Python 下单
- 浏览器 JavaScript 原生 WS
- 免费 API Key 自助生成

这导致**算法交易 + 量化策略在加密赛道繁荣**，传统零售 FX 算法只能在机构级才玩得起。

### 4. 统一账户（Unified Account）

Binance / Bybit 的 UM：现货 + 合约 + 保证金共享保证金池。
MT5 世界：每个策略 / 每种资产通常要开多个账户。

UM 的优点：
- 同一个资金能同时交易现货 + 衍生品
- 对冲更容易（多头期货 + 空头现货）
- 资金效率高

### 5. 衍生品原创：永续合约

BitMEX 2016 年创的永续合约（Perpetual Swap），**无到期日 + funding rate 锚定现货**，成为加密衍生品主力。

传统 FX / 期货没有这种产品，要么是有到期日的期货，要么是滚动的 CFD。永续简化了散户的用户体验。

### 6. 透明度：PoR + on-chain 证据

FTX 暴雷后，所有 CEX 都推了 Proof-of-Reserves（PoR）：
- Merkle tree 公开证明用户总余额 ≤ 交易所持有资产
- 地址公开（Binance 公开了上千个钱包地址）
- 用户可自己验证

MT5 / 传统 broker 的透明度远不如：你只能相信券商的审计报告。

## MT5 在加密的失败尝试

2019-2021 MetaQuotes 试图加入加密：
- 给 broker 开放加密 symbol（其实是 CFD-on-Crypto，不是真持仓）
- 某些 broker（FTMO / Pepperstone / Exness）有 MT5 加密

但：
- 没有真正的加密原生体验
- 不能提币 / 转账到链上钱包（只是账户内 P&L）
- 监管限制下杠杆比加密所低
- 用户不买账，份额 <5%

## 反方向：传统 broker 被迫学加密

这些年反而是加密所的架构在**影响传统券商**：

### 向加密学的传统改进
- **API-first**：OANDA v20 REST、IG REST 2020+ 扩张
- **Web-first UI**：TradingView 接 40+ broker，替代 MT5 终端
- **实时清算**：股票 T+1（美股 2024 实施），逼近 T+0
- **单账户统一**：Charles Schwab / Fidelity 合并不同产品线

### 向传统学的加密改进
- **合规化**：Coinbase 全合规、Binance 2024 和解 DOJ
- **ETF 桥接**：机构资金可以通过 ETF 进加密，不需要直接用 CEX
- **Prime Broker**：GS / JPM 开始给加密客户传统 PB 服务

## 预测：下一个五年

**加密原生架构会继续"污染"传统金融**：
1. 24/7 市场扩展（股票 / 期货开始延长交易时段）
2. 统一账户普及
3. 原生加密衍生品（永续合约）进入传统 CFD 场景
4. PoR 式透明度成为所有 custody 标配
5. API 开放性提升（零售级 REST 变成标配，不再是 IB 一家独大）

**MT5 不会很快消失**，但会变成"传统零售外汇 legacy 平台"定位，新用户增长转向 TradingView + REST broker 组合。

## 参考

- Binance / Coinbase 技术 blog
- Matthew Green 《FTX 破产技术分析》
- BIS 《Triennial Survey 2022》
- Chainalysis Crypto Crime Report 年度版
- TabbForum 《Exchange Technology Trends》

## 相关
- [`../01-history/04-crypto-native-era.md`](../01-history/04-crypto-native-era.md) — 加密交易所历史
- [`../03-architecture/02-exchange-architecture.md`](../03-architecture/02-exchange-architecture.md) — 加密所技术架构
- [`./01-metaquotes-v-tradingview.md`](./01-metaquotes-v-tradingview.md) — TradingView 替代 MT5 的另一条路径
