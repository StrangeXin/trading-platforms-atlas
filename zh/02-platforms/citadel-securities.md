# Citadel Securities

**美国零售股票市场 40%+ 的真实对手方**。Robinhood / Schwab / Fidelity / E*Trade 的 PFOF 订单大部分流向这里。全球最大的电子做市商之一，和 Ken Griffin 的 Citadel 对冲基金是姊妹公司但运营独立。

## 基本信息

- **创立**：2002 年（作为 Citadel 集团的做市部门）独立品牌 2017
- **创始人**：Ken Griffin（也是 Citadel 对冲基金创始人）
- **总部**：迈阿密 FL（2022 从芝加哥搬迁）+ 纽约 + 伦敦 + 香港 + 悉尼
- **员工**：~1,600（2024）
- **2024 营收**：~$10-11B（估算，私有公司）
- **2023 年 Sequoia + Paradigm 入股**：$1.15B 估值 $22B

## 在全球市场的地位

- **美国股票**：**每天成交量的 ~25-27%** 流向 Citadel Securities（2024 SIFMA 数据）
- **零售订单 PFOF**：**接收 ~40-45%** 的零售 equity orderflow
  - Robinhood PFOF 的 60% 去 Citadel Securities（单家）
  - Schwab、Fidelity、Webull、E*Trade 的 PFOF 大部分也去 Citadel
- **期权做市**：美国零售期权的 ~35%
- **ETFs**：15 个美国上市 ETFs 的 lead market maker
- **国债**：美国 Treasury 市场成交的 ~20%（2023 超越了大投行）

## 商业模式：电子做市机器

### 做市做市做市

**Citadel Securities 不是经纪商** —— 它是**市场中的报价方**。

在每个市场（股票、期权、债券、ETF、加密部分），它：

1. **持续在买卖两边挂单**
2. **赚 bid/ask spread 差**
3. **管理 inventory 风险**（持有的头寸）
4. **几毫秒内调整报价**响应市场信号

### 为啥做市赚钱

传统认知：做市商**对冲**不赌方向。但真实世界里：
- 做市商**选择性承担方向风险**
- 用统计模型 + 大量数据**预测短期方向**
- 零售订单流（通过 PFOF）是**"dumb flow"** —— 有信息优势
- 机构订单流是 **"smart flow"** —— 谨慎做市或避开

### PFOF 的经济学（Citadel 视角）

```
Robinhood 用户下单买 100 股 AAPL
    ↓
Robinhood 把订单发给 Citadel（不是发给纽交所）
    ↓
Citadel 在自己的内部池里撮合：
  - 如果有反向 Citadel inventory → 直接交易（赚 spread）
  - 否则 → Citadel 自己持有并在市场上对冲
    ↓
Citadel 给 Robinhood "rebate"（每股 $0.002-0.005）
Citadel 的毛利 = spread - rebate - 对冲成本
    ↓
Robinhood 用户看到"成交"，价格可能比交易所 mid price 差几 basis points
```

**Citadel 为啥愿意付 rebate**：
- 零售订单是**最干净 / 最无信息优势**的订单流
- 机构订单（Goldman、Morgan）可能知道市场方向 → Citadel 做市会吃亏
- 零售订单**无害** → Citadel 做市几乎总能**选择性暴露**
- 2021 研究：Citadel 在零售订单上的**平均利润 ~$0.25 / 100 股**

## 技术基础设施

Citadel Securities **疯狂投入基础设施**：

- **自研交易系统**：用 C++ + 定制硬件
- **全球 colo**：纽约 NJ（NYSE + Nasdaq + BATS）、芝加哥 CBO（CME）、伦敦 LD4 / BSX、东京 / 香港等
- **Microwave networks**：NY-CHI-LON-TKY 专用微波塔（延迟比光纤短 20-40%）
- **FPGA**：硬件加速的报价生成（部分已切换到 ASIC）
- **内部 datacenter**：纽约 NJ Equinix NY5、伦敦 LD6
- **员工比例**：~50% 工程师 / 数据科学家（对比传统银行 30-40%）

Citadel 每年在技术基础设施上花**~$2B+**。

## 关键事件

### 2021 GameStop 事件

**背景**：Robinhood 用户集体做多 GME，很多单子流向 Citadel Securities。

**争议**：
- Citadel Securities **同时是**：
  - Robinhood PFOF 最大买家
  - Melvin Capital 的救助方（Melvin 是做空 GME 最大的对冲基金）
- 2021 年 1 月 28 日 Robinhood 限制买入 GME
- 阴谋论：**Citadel 施压 Robinhood 限制买入 → 救 Melvin**
- 官方调查（SEC、国会）：**没有找到直接证据**证明 Citadel 施压
- 真实原因：DTCC 清算保证金要求（见 robinhood.md）

**但**：
- Citadel Securities + Melvin + Robinhood 的三角关系**本身**就是系统性利益冲突
- 暴露了**美国零售股票生态的权力结构**

### 2022 $1.15B Sequoia / Paradigm 融资

- 外部机构首次大规模投资 Citadel Securities（此前纯 Griffin 私有）
- 估值 $22B（2022 加密冬天前）
- 意图：为 **IPO 做准备**
- 2024 年传闻继续讨论 IPO，但未明确时间

### 2023 美国 Treasury 做市扩张

- Citadel 在美国国债市场份额从 ~10% 涨到 ~20%
- 超越传统的 primary dealer（JPM、Goldman、Morgan Stanley）
- **这是 40 年来美国国债做市结构的最大变化**

### 2024 Ken Griffin 的政治影响

- Ken Griffin 个人财富 ~$40B（2024 Forbes）
- 美国共和党最大个人捐款者之一
- 反对 Elizabeth Warren、Bernie Sanders 的监管提议
- 2024 年 Griffin 公开呼吁"停止对做市商的监管误解"
- 政治角色让 Citadel Securities 的监管处境更复杂

## Citadel Securities vs Citadel（对冲基金）

**这两个是 Griffin 的两个独立业务**：

| 维度 | Citadel Securities | Citadel LLC（对冲基金） |
|---|---|---|
| 业务 | 做市 + liquidity provider | 对冲基金 + quant 投资 |
| 客户 | 零售 broker + 机构 | 外部 LP（pension、endowment）|
| 2024 营收 | ~$11B | ~$15B |
| 2024 AUM | N/A（自有资本）| ~$65B |
| 员工 | 1,600 | 2,600 |
| 办公地 | 独立 | 独立 |

**关键点**：监管上两者**分开**（SEC broker-dealer vs hedge fund）。但股东都是 Griffin + 员工。

## 监管 + 争议

### PFOF 争议

- 2022 SEC 主席 Gary Gensler 多次批评 PFOF
- 2023 提议完全禁止（遭 Citadel + Robinhood 等反对）
- 2024 Gensler 卸任 + Trump 就任，**监管收紧暂停**
- 2025 SEC 新主席 Paul Atkins 对 PFOF 更友好

### "Naked short selling"（裸卖空）指控

- 2021 GME 事件期间，部分散户指控 Citadel 做裸卖空
- 正式调查未找到违规
- 但是 Reddit / Twitter 上对 Citadel 的阴谋论至今未消

### 和 Melvin Capital 的关系

- 2021 年 1 月 Citadel + Point72 给 Melvin 注资 $2B
- 但这是通过**Citadel LLC**（对冲基金），不是 Citadel Securities
- 后者和 Robinhood PFOF 业务是**法律上独立**的

## 参考

- [Citadel Securities 官网](https://www.citadelsecurities.com/)
- [Ken Griffin — Wikipedia](https://en.wikipedia.org/wiki/Ken_Griffin_%28financier%29)
- [SIFMA US Equity Market Statistics](https://www.sifma.org/resources/research/)
- [Sequoia + Paradigm 投资 Citadel Securities 2022](https://www.reuters.com/business/finance/citadel-securities-raises-12-bln-sequoia-paradigm-2022-01-10/)
- `../07-essentials/05-crypto-vertical-conflict.md`：做市商 + 交易所冲突
- `../07-essentials/03-broker-economics.md`：broker 把订单流卖给谁
- `../02-platforms/robinhood.md`：Robinhood PFOF 的反面
- `jane-street.md`：另一大电子做市商
