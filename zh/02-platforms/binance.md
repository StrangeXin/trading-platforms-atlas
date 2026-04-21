# Binance：架构深挖

## 概览

Binance 是全球成交量最大的加密货币交易所，2017 年 7 月由赵长鹏（CZ）创立，上线 6 个月内就冲上全球第一。到 2025 年——尽管经历过大额法律和解和高层更替——Binance 仍然是全球中心化加密所霸主。

---

## 创立与历史

### 赵长鹏（CZ）

1977 年出生于中国，少年时随家移民加拿大。McGill 大学计算机学位毕业，职业生涯早期在 Bloomberg、Fusion Systems 等公司写交易软件。

CZ 2013 年在一场扑克局上从李启元（Bobby Lee，BTC China 创始人）那儿第一次听说比特币。他卖掉上海的公寓 all in 比特币——这把赌赢得惊人。

Binance 之前，CZ：
- OKCoin CTO（2014–2015）
- 创立比捷科技（区块链技术服务，2015）

### 创立 Binance（2017 年 7 月）

Binance **2017 年 7 月**上线，此前通过 ICO 募资约 **$1500 万**的 Binance Coin（BNB）。ICO 本身就值得一提：BNB 被设计成实用型代币，持有可享交易费折扣——用户激励和交易所成功绑在一起。

据 [赵长鹏 Wikipedia](https://en.wikipedia.org/wiki/Changpeng_Zhao)，Binance 180 天内成为全球成交量第一——前所未有的增长斜率。关键原因：

- 加密原生注册（初期无法币通道，降低 KYC 摩擦）
- 上币极广（几百种山寨币很快上架）
- 低费率（基础 0.1%，用 BNB 打折到 0.05%）
- 第一天就做多语言
- 激进的 referral 奖励

### 监管动荡（2019–2023）

Binance 的全球扩张跑赢了合规进度：
- 多国发警告或封禁（英国 FCA、日本 FSA、德国 BaFin 等）
- Binance 的管辖地刻意模糊——多年对外宣称没有总部所在国
- 2021 年 CZ 说 "Binance 不是公司，是个生态"
- 公司用的是跨多辖区的复杂实体网络

**2023 年 11 月**：和美国司法部达成里程碑式和解：
- Binance 对洗钱共谋和未持牌资金转移认罪
- 支付 **$43 亿**罚款 + 罚金
- CZ 个人认罪，交 $5000 万罚款，辞任 CEO
- CZ 随后被判 **4 个月监禁**（2024 年服刑）

**2023 年 11 月**：**Richard Teng** 出任 CEO——监管老将，曾领导新加坡 MAS，此前是 Binance 欧洲 + MENA 区域市场负责人。

---

## 撮合引擎架构

### 性能

Binance 撮合引擎是全球金融行业吞吐最高之一：

- **持续容量**：每秒 140 万订单
- **峰值处理**：2022 年 5 月一次市场冲击中创下**单秒 650 万笔成交**纪录
- **延迟优化（2024 年 7 月）**：Binance 升级撮合引擎，下单到成交延迟从 **10ms 降到 5ms**；一周内日交易量涨 15%

据 [Finance Magnates / Binance 文档]，这些数字是公开宣称但没经过独立审计。

### 架构原则（据公开信息推断）

Binance 没公开完整技术架构文档。根据公开开发者文档、招聘贴、技术博客推断，撮合引擎用的是：

1. **内存订单簿**：热路径没有磁盘 I/O；订单簿整个在 RAM 里，亚毫秒撮合
2. **FIFO 撮合算法**：价格-时间优先（最优价先成交；同价按入场顺序）
3. **无锁数据结构**：高频消息处理要避开互斥锁；Binance 用无锁队列 + 原子操作
4. **CPU 核绑定**：关键线程绑到指定 CPU 核，避免上下文切换开销
5. **定制网络栈**：很可能用 DPDK（Data Plane Development Kit）或类似内核旁路网络栈绕开 OS 开销

撮合引擎大概率是 **C++ 或 Java** 写的做低延迟；Binance 后端是微服务架构，Go + Java 混用。

### 订单簿结构

每个交易对（如 BTC/USDT）Binance 维护：
- **买方（Bid）**：按价格降序；同价按时间
- **卖方（Ask）**：按价格升序；同价按时间

最优买价 ≥ 最优卖价时撮合。

---

## API

### REST API

**Base endpoint**：`https://api.binance.com`

主要 REST API namespace：
- `/api/v3/` —— 现货交易（订单、账户、行情）
- `/fapi/v1/` —— USDS 本位合约
- `/dapi/v1/` —— 币本位合约
- `/eapi/v1/` —— 欧式香草期权

**限速**（现货 REST，2024 年数据）：
- IP 级：每分钟 1,200 权重
- 订单限制：10 单/秒，100,000 单/24 小时/账号
- 超限返回 HTTP 429；反复违规会触发 IP 封禁（2 分钟到 3 天）

**鉴权**：API key + 对请求参数 + 时间戳做 HMAC-SHA256 签名。

### WebSocket API

Binance 提供两个独立的 WebSocket 服务：

1. **WebSocket 行情推送**（`wss://stream.binance.com:9443`）：推送式行情数据（成交、深度更新、kline / K 线、mini-ticker、aggregate trade）。单向——数据从 Binance 推给客户端。

2. **WebSocket API**（`wss://ws-api.binance.com:443`）：双向——可以通过 WebSocket 下单 / 撤单。和行情推送分开；两者都要用的交易员得开**两个 WebSocket 连接**。

WebSocket 专用限速：
- 连接花 **2 权重**
- WebSocket 握手尝试 **5 权重**
- Ping/pong 帧：每秒最多 5 个

### FIX API（机构）

Binance 给机构客户提供 **FIX 4.2** 接口——承认机构需要 FIX 连接。支持：
- 现货交易
- USDS 本位合约

单独开通，零售 API 用户用不了。

---

## 订单类型

Binance 在现货和衍生品上支持完整的订单类型：

| 订单类型 | 支持范围 |
|-----------|-------------|
| LIMIT | 现货、合约 |
| MARKET | 现货、合约 |
| STOP_LOSS | 现货 |
| STOP_LOSS_LIMIT | 现货、合约 |
| TAKE_PROFIT | 现货 |
| TAKE_PROFIT_LIMIT | 现货、合约 |
| LIMIT_MAKER（post-only） | 现货 |
| OCO（One-Cancels-Other） | 现货 |
| Trailing Stop | 合约 |
| TWAP | 现货（通过算法订单） |

2024 年新增：OCO 支持 TAKE_PROFIT 和 TAKE_PROFIT_LIMIT；引入 Self-Trade Prevention（STP）防止同账号自成交。

---

## 托管架构

### Binance 钱包结构

Binance 用多层托管架构：

1. **热钱包**：资产小头；可立即提现；风险最高
2. **温钱包**：中间安全层；需要有限授权；用于中等量级提现
3. **冷钱包**：绝大多数资产；离线硬件安全模块；多签；用于大额或低频转账

Binance 称客户资产大部分放冷存储。具体比例没有标准化的公开审计。

### SAFU（Secure Asset Fund for Users）

2018 年 Binance 建了 **SAFU 基金**——把 10% 交易费用分入独立保险基金，覆盖极端损失（黑客、漏洞）。到 2022 年 SAFU 持有超过 **$10 亿**资产。2022 年 LUNA/UST 崩盘时这基金部分动用过来覆盖用户损失。

### BNB Chain 和 BNB Beacon Chain

Binance 运营自己的区块链：
- **BNB Beacon Chain**（原名 Binance Chain，2019 年上线）：优化代币转账速度；DEX 原生
- **BNB Smart Chain（BSC）**（2020 年 9 月上线）：EVM 兼容的智能合约链；以太坊低 gas 替代品

这让 Binance 能一边做去中心化功能（PancakeSwap 生态的 DEX），一边保持中心化交易所运营。

---

## BUSD（Binance USD）—— 稳定币简史

**上线**：2019 年 9 月，和纽约持牌信托公司 **Paxos** 合作。

**结构**：法币抵押；Paxos 在 FDIC 保险的美国银行里存等额 USD。Paxos 发的 BUSD 原生在以太坊上；Binance 自己在 BNB Chain 和其他网络上发的"Binance-Peg BUSD"（通过跨链桥）。

**崩盘**：**2023 年 2 月**，**NYDFS**（纽约金融服务局）命令 Paxos 停止增发 BUSD。NYDFS 指控 Paxos 对 Binance 作为发行合作方做的尽调不足。BUSD 供应 2023 年底从 $160 亿降到接近零。

BUSD 谢幕后，Binance 把 USDT 和 USDC 推成主要稳定币交易对。

---

## 关键指标（2024–2025）

| 指标 | 值 |
|--------|-------|
| 日成交（现货 + 衍生品） | $50–100B+（按行情波动很大） |
| 注册用户 | 2 亿+ |
| 交易对 | 1,500+ |
| 限制 / 封禁管辖区 | 10+ 主要辖区 |
| 2023 DOJ 和解 | $43 亿 |
| 现任 CEO（CZ 之后） | Richard Teng |

---

*参考：[赵长鹏 Wikipedia](https://en.wikipedia.org/wiki/Changpeng_Zhao)、[Binance API 文档](https://developers.binance.com/docs/binance-spot-api-docs)、[Binance BUSD 文档](https://www.binance.com/en/blog/ecosystem/understanding-busd-and-binancepeg-busd-5526464425033159282)、[Bitget Binance CEO 历史](https://www.bitget.com/academy/binance-ceo-history)、[BTCC CZ 传记](https://www.btcc.com/en-US/square/H0ld1Sngs/747975)、[Databento 撮合引擎指南](https://medium.databento.com/an-introduction-to-matching-engines-a-guide-by-databento-d055a125a6f6)*
