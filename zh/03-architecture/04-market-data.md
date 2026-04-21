# 行情数据分发架构

"订单执行"和"行情分发"是两条完全独立的技术栈。前者要强一致性、后者要高吞吐。这一篇拆行情分发。

## 层级模型

```
[交易所 / ECN]
  ↓
[Market Data Gateway]（MD server）
  ↓ 专线 / 公网
[Aggregator / Vendor]（Bloomberg / Refinitiv / TwelveData）
  ↓
[券商 / broker]（对最终用户）
  ↓
[用户终端]
```

每一层都可能被删减（加密所对零售直接推 WS），也可能被拉长（机构多跳专线 + 归一化）。

## 一、源头：交易所的 MD 分发

### 股票 / 期货 / 期权
- **FIX-FAST**：二进制压缩版 FIX，多用于 CME / Nasdaq TotalView 等
- **Multicast UDP**：CME Globex 和一堆期货所主用，TCP 单播不够——行情多播一次给所有订阅者
- **ITCH 协议**（Nasdaq）+ **MDP 3.0**（CME）：交易所专属的二进制协议
- **专线接入**：Colocation（托管机柜）+ 光纤直连，延迟可到 <10μs

### 加密所
- **WebSocket + JSON / Protobuf**：Binance / OKX / Bybit / Coinbase 主流方案
- **REST 轮询**：降级方案，不推荐高频
- 加密没有 colocation 传统（虽然部分专业做市商会租 AWS ap-northeast / US-East 同区）

### 外汇
- **EBS / Hotspot / Integral** 机构 ECN → FIX Market Data Request
- **LP / Bank Pool** → 券商：通常 FIX
- **券商 → MT5 server** → MT5 终端：MT5 协议的订阅

## 二、vendor 层：行情聚合商

### Bloomberg（BBG）
- **Bloomberg Professional Service**（终端）：$24,000+/year，行业标准
- **B-PIPE**：机构级行情 API，FIX-FAST / PAMM 协议
- 数据覆盖：股票、债券、FX、大宗、衍生品、新闻
- 技术栈：Bloomberg Terminal 是厚客户端 + 专网
- 客户数：~340,000 终端

### Refinitiv（前 Thomson Reuters Financial）
- **LSEG 2021 收购**，并入伦敦交易所集团
- **Refinitiv Real-Time**（旧名 Eikon）：Bloomberg 的直接竞品
- **TREP**（Thomson Reuters Enterprise Platform）：机构后台分发系统
- 机构市场老二

### FactSet
- 买方机构（基金 / 资管）偏好
- Web + Excel 插件
- ~8000 机构客户

### IEX Cloud（被 Intrinio 替代）/ Polygon.io / IEX Group
- 现代化、REST 友好的行情提供商
- 面向零售开发者、小基金、科技公司
- **Polygon.io**：~$99/month 起，覆盖美股 + 期权 + FX + 加密
- **Alpaca Data**：配套 Alpaca Broker，免费层含美股
- **Alpha Vantage**：免费层 + API Key，初学者多用

### TwelveData / MarketStack / EODHD
- 更小的行情聚合商，面向零售 / 个人开发者
- REST / WebSocket，全资产类覆盖（质量和完整度参差）
- 免费层 50-800 req/day

### 加密专用
- **CoinGecko / CoinMarketCap**：聚合 CEX 行情，免费 API（限频）
- **Kaiko**：机构加密行情 vendor，走 FIX 给机构
- **CryptoCompare**：历史 + 实时，REST / WS

## 三、券商 → 终端：最后一跳

传统券商：
- MT5 broker → MT5 terminal：MT5 协议的 `symbol price push`
- OANDA → fxTrade：自家 WebSocket
- IB → TWS：IB 私有协议

加密所：
- Binance / Bybit → 用户 app：直接 WebSocket 订阅
- Coinbase → Coinbase App：REST 轮询 + 部分 WS

## 四、"免费行情"到底从哪来

大部分零售工具（TradingView、MetaTrader、Investing.com）给你看的"实时报价"是：
1. **交易所的延时版**（15 分钟延迟，免费给零售）
2. **聚合商的采样版**（每秒 1 次 or 更少）
3. **另一家交易所的同标的报价**（比如 Nasdaq 显示的标普是 CME 的 S&P 期货推断出来的）

真实 tick-by-tick 实时要钱：
- Nasdaq TotalView：$200/month 零售，$15,000+ 机构
- NYSE Integrated Feed：类似
- CME Market Data：$100-500/month 按包
- 外汇 EBS Live：机构级定价

TradingView Premium（$59.95/month）含一批交易所的实时行情——这是它吸引零售的硬核卖点。

## 五、延迟数量级对比

| 链路 | 典型延迟 |
|---|---|
| CME colocation 机柜 → 做市商服务器 | <10μs |
| 纽约 → 伦敦专线（TRANSATLANTIC） | ~30ms |
| 纽约 → 东京专线 | ~80ms |
| AWS us-east-1 → Binance Tokyo | ~150ms（典型公网） |
| Bloomberg Terminal → 用户屏幕 | ~500ms |
| TwelveData REST → Python 客户端 | 1-2s |
| 零售网页刷新（TradingView） | 1-5s |
| Investing.com 报价 | ~15 min delay（合规层） |

## 六、零售前端的典型数据链

一个常见的"前端 + 后端 + broker + 历史数据聚合商"组合：

```
[Broker Cloud API（如 MetaApi）]
  ↓ (RPC / WS 私有协议)
[应用后端]
  ↓ 短轮询（5s）+ 内存缓存（1-2s TTL）抗抖动
[Web 前端]
  ↓ HTTP / WS
[浏览器]
```

实时报价跟着 broker；历史 K 线独立走更便宜的聚合商（TwelveData / OKX / Binance / ExchangeRate）。这是典型"混合 vendor"——broker 数据贵但权威，历史数据便宜可替换。

## 七、机构端的复杂度：归一化 + 去重

大机构同时订阅十几个源：Bloomberg、Refinitiv、CME、直接交易所 feed。需要：

1. **Symbology mapping**：同一个标的在不同 vendor 叫不同名（EURUSD / EUR/USD / EURUSD= / EURUSD.sim）
2. **Price cleanup**：tick 过滤（排除 off-market ticks、冷门时段异常）
3. **Timestamp normalization**：每家时区 / 精度不同，统一成 UTC ns
4. **Deduplication**：多源同一个 tick 只算一次
5. **Gap filling**：源 A 丢单时用源 B 补

这是为啥机构数据平台（OneTick / KDB+ / Arctic）价格那么贵——做清洗 + 分布式存储 + query。

## 八、关键决策表

**需要实时数据给零售用户？**
- 加密：所有交易所免费给你 WS，直接用
- 股票：TradingView 订阅 / Polygon.io / IEX Cloud
- 外汇：OANDA v20 API（免费）/ TwelveData / 接 MT5 broker
- 期货：TradingView / NinjaTrader 专业行情包

**需要历史 tick 数据做回测？**
- 加密：Kaiko / CryptoCompare 付费；或交易所自己的历史下载
- 股票：Polygon.io tick 包（$199/mo 起）/ Databento
- 外汇：Dukascopy 免费历史 tick 下载 + TrueFX

**需要推送给机构客户？**
- 上游走交易所专线
- 中间归一化（自研或买 OneTick）
- 下游 FIX-FAST / 专网分发

## 参考

- CME Globex Market Data Platform (MDP 3.0) 规范
- Nasdaq ITCH / OUCH 协议文档
- FIX Trading Community "FIX Market Data" 章节
- Bloomberg API 开发者文档 (blpapi)
- Polygon.io / IEX Cloud / TwelveData 公开 pricing
- Barry Johnson《Algorithmic Trading and DMA》第 5 章 "Market Data"
