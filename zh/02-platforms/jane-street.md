# Jane Street

**加密 + ETFs 做市之王**。2023 年美国 ETFs 交易量 ~15% 经过 Jane Street，加密做市（Coinbase、Binance、Kraken）份额约 **30-40%**。SBF / Caroline Ellison / Sam Trabucco 等 FTX 核心人物都是 Jane Street 出身。

## 基本信息

- **创立**：2000 年，纽约
- **创始人**：Rob Granieri + Tim Reynolds + Marc Gerstein
- **总部**：纽约（World Trade Center Tower 4）+ 伦敦 + 香港 + 阿姆斯特丹 + 东京
- **员工**：~2,800（2024）
- **2023 营收**：**$21B 净收入**（2023 第一次披露，超越 Citadel Securities）
- **独特之处**：**合伙人制度**，无外部股东；OCaml 作为主要开发语言

## 业务核心

### ETFs 做市

Jane Street 是 ETFs 世界的"原住民"：

- **美国 ETFs 市场份额**：~15% 成交量
- **欧洲 ETFs**：~20%
- **lead market maker** for 200+ 个美国上市 ETFs
- **Authorized Participant (AP)**：帮助 ETFs 发行人创建 / 赎回单位
- 和 iShares / Vanguard / SSGA 有深度合作

### 固收 + 大宗

- 美国公司债：**~5% 市场份额**（从 2020 开始快速增长）
- 国际债券做市
- 大宗商品 ETFs + 期货
- 2023 进入 US Treasury 做市

### 加密

这是 Jane Street 最神秘 + 最盈利的业务线：

- 2015 年起加密做市（极早期进入）
- Binance、Coinbase、Kraken、FTX 的主要 LP
- **估算**：全球加密现货交易 30-40% 经过 Jane Street 做市
- 2022 FTX 崩盘后 Jane Street **明显减少**加密敞口（但没退出）
- 2024 年重新积极扩张（比特币 ETF 通过后）

### Jane Street 和比特币 ETF

- 2024 年 1 月 SEC 批准 Spot BTC ETF
- Jane Street **成为主要 AP**，为 BlackRock IBIT、Fidelity FBTC 等做市
- 这是加密 + 传统金融**真正融合**的起点
- 2024 BTC ETF 总 AUM 增长到 $80B+（Jane Street 做市份额 ~30%）

## 技术 + 文化

### OCaml：异类选择

Jane Street 是**全球最大的 OCaml 使用者**（金融业内独一无二）。

**为啥 OCaml**：
- 强类型 + 函数式 → 金融代码更少 bug
- 性能接近 C++ + 表达能力高
- 容易写 DSL（领域特定语言）→ 交易逻辑可配置
- Jane Street 贡献了 OCaml 社区最大的开源库生态

**规模**：
- ~1,000 万行 OCaml 代码
- 所有核心交易系统用 OCaml
- 只有极少数 latency-critical 部分用 C++

### 文化：数学 + 扑克

Jane Street 招聘**以数学 + 编程 + 扑克技能并重**著称：

- 扑克锦标赛是公司内部传统
- 大学招聘偏重数学竞赛 + ACM / ICPC
- **招聘题目公开**（Jane Street Insights blog、Puzzles）
- 很多人从 Jane Street 出去后创业：
  - SBF → FTX（2017）
  - Caroline Ellison → Alameda（2018）
  - Sam Trabucco → Alameda（2019）
  - Matthew Goetsche → BlockTower Capital
  - 多位 AI quant 创业者

### "独树一帜"的运营

- **无外部股东**：利润全部分给合伙人
- **不融资**：全部用自有资本做市
- **低调**：几乎从不媒体宣传
- 相对 Citadel Securities 更 "技术 driven"、更 "文化 driven"
- Ken Griffin 有个人高调形象，Jane Street **没有明显领导人 face**

## 和 FTX 的关联

**这是 Jane Street 史上最大的 PR 危机**：

- 2017-2019 年 FTX / Alameda 的核心人物全是 Jane Street 校友
- 其中 SBF 在 Jane Street 做了 3.5 年（2014-2017）
- Jane Street 的"effective altruism"（EA）文化影响了 SBF
- 2022 FTX 崩盘后，媒体大量讨论 "Jane Street 培养了 SBF"

**但**：
- SBF 离开 Jane Street 5 年后才 FTX 崩盘
- Jane Street **本身没有 FTX 资金敞口**（早期退出，2020 年就不持有 FTT）
- Jane Street 内部文化**没有 SBF 后来的极端激进**
- 公司回应：**"我们不对离职员工的行为负责"**

## 和 Citadel Securities 的对比

| 维度 | Jane Street | Citadel Securities |
|---|---|---|
| 2023 净收入 | $21B | ~$10B |
| 主力市场 | ETFs + 加密 + 固收 | 美股 + 零售 equity PFOF |
| 员工 | 2,800 | 1,600 |
| 技术栈 | OCaml + C++ | C++ + 自研 |
| 营销 | 几乎无 | Ken Griffin 高曝光 |
| 股东 | 合伙人内部 | Griffin + Sequoia + Paradigm |
| 海外 | 强（欧洲 / 亚洲 / 加密）| 强（欧洲 + 亚洲，但零售 PFOF 是美国限定）|
| 加密敞口 | 大 | 有但保守 |
| 政治关系 | 低调 | Griffin 政治捐款 |

**Jane Street 是"quiet giant"，Citadel Securities 是"loud giant"**。两者加起来控制全球电子做市约 40%。

## 监管处境

### 美国

- SEC 注册的 broker-dealer
- CFTC 注册（因为做衍生品）
- 2024 美国监管讨论限制做市商 + 对冲基金合一的风险
- Jane Street 的"合伙人"结构让监管比对冲基金好管理

### 欧洲

- FCA UK + AFM Netherlands
- 欧盟 MiFID II 做市豁免（做市商有特殊规则）
- 2024-2025 欧盟对 ETFs 做市商监管**加强**

### 加密监管

- 2023 Jane Street 加密业务在多国面临合规问题
- **2024 重新积极进入**（因为比特币 ETF 带来机构级合规通道）
- 和 Binance、Coinbase 的合规风险隔离做得好

## 2024-2026 趋势

- **比特币 + 以太币 ETF 主导**：Jane Street 的 ETF 专长 + 加密敏锐 = 完美 fit
- **固收扩张继续**：挑战传统 primary dealer
- **OCaml 持续投入**：核心技术壁垒
- **IPO 讨论**：2024 有传闻，但公司文化**抗拒 IPO**（失去合伙人独立性）
- **AI / ML 集成**：内部大量 AI 应用，但**不对外公开**

## 参考

- [Jane Street 官网](https://www.janestreet.com/)
- [Jane Street — Wikipedia](https://en.wikipedia.org/wiki/Jane_Street_Capital)
- [Jane Street Insights（招聘 + 谜题 blog）](https://www.janestreet.com/insights/)
- [Jane Street 2023 10-Q 披露](https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=jane+street&type=10-K&dateb=&owner=include&count=40)
- [OCaml at Jane Street - blog](https://blog.janestreet.com/)
- `citadel-securities.md`：另一大电子做市商
- `../07-essentials/05-crypto-vertical-conflict.md`：加密 + 做市商
- `../01-history/04-crypto-native-era.md`：加密历史
- `../05-trends/05-ai-in-trading.md`：AI 在做市中的角色
