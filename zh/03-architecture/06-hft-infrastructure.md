# HFT 基础设施：毫秒 / 微秒 / 纳秒的战争

**单句论点**：HFT（高频交易）不是软件竞赛，是**物理 + 工程 + 场地**的竞赛。全球顶尖 HFT 公司（Citadel、Jane Street、Virtu、Jump Trading）**每年投入数十亿美元**维持几十微秒的速度优势。对绝大多数零售 / 小型 quant，HFT 是**永远无法进入的另一个世界**。

## 一、为啥速度决定一切

### 做市商的基本逻辑

做市商同时挂 bid + ask。如果 bid = $100.00 / ask = $100.02：

```
场景 A（好情况）：
有人 market buy → 在 $100.02 吃掉 MM 的 ask → MM 持有短头寸
紧接着有人 market sell → 在 $100.00 吃掉 MM 的 bid → MM 回到 flat
MM 赚 $0.02 spread
    
场景 B（坏情况）：
有消息释放（比如 FED 宣布）→ 真实价值应该是 $100.50
MM 的 ask 还在 $100.02 → informed trader 吃掉 MM 的 ask
MM 现在持有 short @ $100.02，但市场真实价 $100.50
MM 亏 $0.48
```

**场景 B 是 "adverse selection"**。做市商**最怕**就是在消息释放后、报价更新前被 informed trader "picked off"。

### HFT 的核心是"快响应"

- **Informed trader**（有信息的交易者）**永远比 MM 先知道信息**
- MM 的生存之道：**更快的报价更新** → 在被 picked off 前撤单 / 调整报价
- 谁的"报价更新 latency" 短，谁赚
- 这不是"买股票要快"，是"**改单 + 撤单要快**"

## 二、延迟的构成：每一微秒的战争

### 一个"报单 + 成交"的完整路径

```
事件发生（经济数据、大单、新闻）
    ↓
交易所 matching engine 处理该事件
    ↓
交易所发出 market data update（multicast packet）
    ↓
[网络传输]：data center 内 50-500 ns，跨 datacenter 100 μs+
    ↓
HFT 公司的接收端（NIC 收到 packet）
    ↓
Ingress parsing（FPGA 或 kernel bypass）
    ↓
HFT 公司的策略模型计算新报价
    ↓
Egress（新报单 / 撤单 / 改单）
    ↓
[网络传输]：回到交易所
    ↓
交易所 matching engine 处理新订单
    ↓
total latency = "tick-to-trade"
```

### 典型"tick-to-trade" 延迟标杆（2024）

| 公司 | 美股 NYSE / Nasdaq tick-to-trade |
|---|---|
| **顶级 HFT（Citadel、Jane Street、Jump Trading）** | ~3-15 微秒 |
| **一流 HFT（Virtu、Tower Research、IMC）** | 15-50 微秒 |
| **二流 HFT / 大银行自营** | 50-200 微秒 |
| **云原生 quant（不做 HFT）** | 1-10 毫秒 |
| **散户算法交易（Python + API）** | 10-500 毫秒 |

**顶级 HFT 比散户快 1000-100,000 倍**。不是"优化 Python 代码"的问题，是不同 universe。

## 三、基础设施要素（由下往上）

### 1. 物理位置（Co-location）

**交易所把 matching engine 放在自己 datacenter 里。HFT 把服务器放在**同一个 datacenter 里。

**纽约 area（NYSE + Nasdaq 主要场地）**：
- **NY4 / NY5 / NY6**（Secaucus NJ Equinix）：Nasdaq 等交易所 + HFT colo
- **NY2 / NY11**（NJ）：NYSE 交易所
- **租 1U rack / cage**：$5K-50K / 月
- **Cross-connect（数据线从你的服务器直连交易所）**：$500-5K / 月 / 连接
- **机架位置**：离交易所 matching engine 越近越好（"equidistant cable" 规则）

**芝加哥（CME 主要场地）**：
- **CBO Aurora**（Illinois）：CME matching engine
- **Cermak**（Chicago downtown）
- 期货 HFT 的主场

**伦敦**：
- **LD4 / LD5 / LD6**（Slough UK）：多个交易所 + HFT
- **Basildon**：ICE / Euronext

**东京**：
- **TY3**（东京 Tokyo Stock Exchange）

**香港**：
- **HK2 / HK5**（HKEx）

### 2. 网络：微波 + 激光 + 专线

**跨 datacenter 传输延迟**（NY-CHI 833 英里）：

| 介质 | 理论 | 实际 |
|---|---|---|
| **光纤（直线）** | ~4.5 毫秒单程 | ~6.5 毫秒（绕路 + 设备）|
| **商用互联网** | - | ~12-20 毫秒 |
| **dedicated 光纤** | ~6.5 毫秒 | ~6.5 毫秒 |
| **微波塔链**（2011+ HFT 革命）| ~4.2 毫秒 | ~4.3 毫秒 |
| **自由空间激光**（FSO, 2018+）| ~4.15 毫秒 | ~4.2 毫秒 |

**2011 年的微波塔军备竞赛**：
- McKay Brothers + Jump Trading 等公司建了**NY-CHI 微波塔链**（~30 个塔）
- 投资 $100M+ 单个项目
- 延迟节省 2-3 毫秒 vs 光纤 → 年收益 $100M+

**2018+ 激光革命**：
- Anova Technologies 等公司在 NY 和 CHI 之间建**激光中继**
- **晴天**比微波快 0.1 毫秒
- 下雨 / 雾天 fallback 到微波
- 这 **0.1 毫秒节省**仍然值得数亿美元投资

**国际 HFT 专线**：
- **Hibernia Express**（大西洋海底光缆）：NY-LON 58 毫秒（vs 商用 72 毫秒）
- 专为 HFT 建，**~$300M 投资**
- 后来被 Zayo / Aqua Comms 等收购

### 3. 硬件：FPGA + ASIC + Kernel Bypass

**普通服务器（x86 + Linux kernel + TCP/IP stack）**：
- 网卡到应用：**5-10 微秒**
- 太慢

**优化层级**：

#### Layer 1: Kernel bypass (软件)
- 使用 DPDK、Solarflare Onload、Mellanox VMA 等库
- 绕过 Linux kernel TCP/IP stack
- 从 5-10 μs → 1-3 μs

#### Layer 2: SmartNIC
- Solarflare XtremeScale、Mellanox ConnectX
- 网卡内部处理部分逻辑
- 从 1-3 μs → 0.5-1 μs

#### Layer 3: FPGA
- Xilinx / Altera FPGA 板卡
- 完整的 tick-to-trade 逻辑**在硬件里**
- 响应时间：**50-500 纳秒**
- 成本：$50K-500K 一块板 + 开发 $1M+ 团队

#### Layer 4: ASIC
- 定制集成电路
- 为特定策略设计
- 响应时间：**10-100 纳秒**
- 成本：**几千万**开发费用 + 单片 $10-100K

**HFT 公司通常组合使用**：
- 普通 server 做**策略决策**（几十微秒）
- FPGA 做**快速订单生成**（几百纳秒）
- ASIC 做**最热的策略分支**（几十纳秒）

### 4. 市场数据接收

**市场数据协议**：

- **UDP multicast**（主流）：交易所向 colo 内 HFT 广播数据
- **ITCH**（Nasdaq）：二进制 protocol，每个 tick ~50 字节
- **OUCH**（Nasdaq 下单）：二进制下单 protocol
- **FIX**：机构用，慢（文本）—— HFT 不用

**全量数据订阅成本**（2024）：
- NYSE Pillar + Openbook：~$20K / 月
- Nasdaq TotalView：~$10K / 月
- CME Market Data：~$8K / 月
- 国际交易所：几千到几万不等
- **HFT 公司年数据成本**：$5M-30M

### 5. 时钟同步

HFT 依赖**纳秒级**的时钟精度：
- **GPS PPS（Pulse Per Second）**：100 ns 精度
- **PTP（Precision Time Protocol）**：10 ns 精度
- **Rubidium 原子钟**：1 ns 精度
- **NTP（普通的 Network Time Protocol）**：毫秒级，**HFT 不用**

为啥需要：
- 确定 event 的真实时间戳（监管要求）
- 对多个 datacenter 数据做 correlation
- Latency arb 策略需要精确时间

## 四、HFT 的真实盈利能力

### 全行业收入（2024 估算）

- **Citadel Securities**：~$11B
- **Jane Street**：~$21B（已超）
- **Virtu Financial**：~$1.5B（上市公司可查）
- **Jump Trading**：~$8B（估算）
- **Tower Research**：~$4B（估算）
- **IMC / Optiver / Flow Traders**：合计 ~$10B
- **DRW / XR Trading**：~$3B
- **Hudson River Trading**：~$3B

**全球电子做市年营收**：**~$50-70B**。

### 盈利来源分解

1. **做市利润**（bid/ask spread + rebate）：40%
2. **Latency arbitrage**（跨所价差捕获）：25%
3. **Statistical arb**（短期均值回归等）：20%
4. **News / event arb**（对新闻瞬时反应）：10%
5. **其他**（期权 market making、ETF arb 等）：5%

### 为啥这些公司**如此**赚

- 没有外部 LP → 全部利润归合伙人 / 股东
- 几乎无客户服务成本
- 年 return on capital 普遍 **>50%**（对比传统对冲基金 5-15%）
- **税务上有利**（美国的 trader status + 合伙人结构）

## 五、HFT 和其他市场参与者的关系

### HFT 是零售的朋友还是敌人？

**"朋友"的一面**：
- HFT 让 bid/ask spread 变窄（从 1990s 的几美分到现在的几分之一美分）
- 提供深度和流动性
- 零售订单通过 PFOF 可以几乎**免费**成交

**"敌人"的一面**：
- HFT 对 informed order flow（机构）"picking off"
- 这个成本最终**由机构转嫁给散户**（通过更贵的 mutual fund / pension）
- 零售看到的 "price" 可能**离 EBS 真实价有几 basis points 差距**

### HFT 和做市商的区别

- **做市商**：持续挂 bid + ask，赚 spread
- **HFT**：**策略性** 地挂 bid + ask，+ 各种 arb 策略
- **HFT ⊃ 电子做市商**

### 投资银行 prop desk 为啥逐渐退出 HFT

2008 Volcker Rule 之后：
- 银行不能用自有资本做 prop trading
- 只能做**客户代理**的 flow business
- 真正的 HFT 几乎全部是独立公司（Citadel、Jane Street、Jump 等）
- 这就是为啥 2008 后 Goldman、Morgan 的做市业务**萎缩**

## 六、HFT 的未来 / 有啥变化

### 1. Microwave + 激光 → Hollow Core Fiber

- 2024 新技术：Hollow Core Fiber（空心光纤）
- 光在空心里传播 = 真空中的光速 99%+
- 比普通光纤快 **30-50%**
- 部署成本高，但顶级 HFT 2024-2026 在投入

### 2. Nasdaq / NYSE 的反制

- 交易所引入 "speed bumps"（对所有订单加毫秒级延迟）
- IEX 2016 开创这种设计
- 目的：让 HFT 的速度优势**消失**
- 实际效果：**争议** —— HFT 仍然通过其他方式获取优势

### 3. Crypto HFT 的崛起

- 加密交易所（Binance、Coinbase、Kraken）**没有**传统交易所的"fair access"规则
- HFT 可以**直接付费**获得更好 API access
- 加密做市商（Jane Street、Citadel、Alameda pre-FTX collapse）掌握大份额
- 2025-2026 加密 HFT 竞争激烈

### 4. AI / ML 的集成

- HFT 公司内部**大量用 ML**（信号发现、风控）
- 但**核心下单逻辑仍是硬编码**（低延迟 + 确定性要求）
- **不是**"AI 取代 HFT"，是"ML 辅助传统 HFT"

## 七、对普通人意味着什么

### 你能进入 HFT 吗

**基本上不能**，除非：
- 你是名牌学校数学 / 计算机 / 物理博士
- 在 Jane Street / Citadel / Jump 的招聘流程**至少通过 3-5 轮**
- 起薪 $500K+ 第一年
- 但**不是"你自己开业"**

**自己做 HFT** 基本不可能：
- 基础设施投入 $10M+
- 需要交易所会员 resident 资格
- 监管合规人员
- 没有几百万资金 不用谈

### 对零售 trader 的启示

- **不要在 HFT 的时间尺度上竞争**（毫秒级别你输定）
- 退到更长的时间尺度（分钟、小时、日）
- 在那个尺度上，**HFT 的优势消失**
- 你的优势：**耐心 + 低频 + 纪律**

## 参考

- [McKay Brothers（微波塔 HFT 基础设施）](https://www.mckaybrothers.com/)
- [Hibernia Express NY-LON 海底光缆](https://www.anovanetworks.com/)
- [Equinix NY4 / NY5 datacenter](https://www.equinix.com/data-centers/americas-colocation/united-states-colocation/new-york-area-data-centers/)
- [Virtu Financial 上市公司披露](https://www.virtu.com/)
- [Nanex 对 HFT 的研究](http://www.nanex.net/)
- [Michael Lewis 《Flash Boys》（2014）](https://en.wikipedia.org/wiki/Flash_Boys)
- `05-fx-market-structure.md`：FX 市场中的 HFT 角色
- `../02-platforms/citadel-securities.md`：美国最大 HFT 之一
- `../02-platforms/jane-street.md`：加密 + ETFs 做市王
- `04-market-data.md`：市场数据分发架构
