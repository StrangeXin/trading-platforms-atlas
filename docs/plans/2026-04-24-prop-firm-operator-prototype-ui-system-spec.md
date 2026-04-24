# Prop Firm Operator - Prototype UI System Spec

Date: 2026-04-24
Status: exploration

## 核心判断

第一版 UI 不应该追求“游戏感很强”。

它应该像一个可信的夜间运营控制室：

- 数字清楚
- 决策有重量
- 风险不吵，但一直在升温
- 每周都让玩家同时看到赚钱和发臭

这份文档的目标是：

**把 Control Room、Digest、Event Modal、Diagnosis Card 的信息层级、组件状态和视觉语义写成可实现 UI spec。**

## 视觉方向

### 关键词

- `industrial operations room`
- `polished financial SaaS`
- `late-night control desk`
- `quiet pressure`
- `credible before unsettling`

### 不要走的方向

- 不要像交易终端
- 不要像黑客电影 UI
- 不要像 meme 金融游戏
- 不要做 marketing landing page
- 不要用大面积紫色渐变

### 屏幕第一感觉

玩家应该先觉得：

**这真像一个可以经营的平台后台。**

然后才逐渐觉得：

**这个后台正在把一些不该被简化的东西简化成按钮。**

## 色彩语义

### 基础底色

- 背景：近黑但不要纯黑
- 主面板：深灰、带轻微蓝绿冷感
- 分隔线：低对比细线
- 文本：冷白、灰白、弱灰三层

### 经营语义

- Growth Green：收入、flow、增长成功
- Trust Blue：稳定、可信、处理得当
- Action Gold：高价值操作、关键按钮

### 结构风险语义

- Heat Amber：风险升温、运营摩擦
- Crisis Red：明确危机、临界状态
- Contamination Magenta：舆情扭曲、道德污染、结构异味

### 关键规则

同一屏允许同时出现：

- `Cash` 绿色上升
- `Trust` 琥珀下降
- `Regulatory Heat` 洋红或红色升高

这不是视觉冲突，而是产品主题。

## 字体与密度

### 字体方向

建议：

- 数字：窄一点、仪表盘感强的 tabular font
- 正文：清晰、冷静、低个性
- 标题：略微压缩、像内部系统标题

不要选太温暖、太圆、太消费级的字体。

### 密度原则

这是工作台，不是海报。

- 信息密度中高
- 卡片圆角小于等于 8px
- 页面不要大留白到像 SaaS 官网
- 所有按钮高度稳定，不能因文案变化撑开布局

## 全局布局

### Desktop

推荐尺寸：

- 主内容最大宽度不超过 `1440px`
- 顶部资源条固定高度
- 中央双栏或三栏
- Debug panel 可折叠在右侧

### Mobile

第一版可以不深度优化。

但至少要：

- 资源条变成 2 列或横向滚动
- 旋钮全宽
- Digest feed 不重叠
- Event options 纵向堆叠

## 组件清单

第一版最少需要 12 个 UI 组件：

1. `AppShell`
2. `TopPulseBar`
3. `ResourceCard`
4. `ControlRoom`
5. `MetricSummaryGrid`
6. `RiskCard`
7. `ControlPanel`
8. `ControlSlider`
9. `ImpactPreview`
10. `NarrativeFeed`
11. `EventModal`
12. `WeekDigest`
13. `DiagnosisCard`
14. `DebugPanel`

## 1. AppShell

### 作用

承载整个控制室。

### 必须显示

- Platform name
- Week number
- Founder mode
- Scenario
- Reset
- Export

### 视觉要求

顶部像内部系统，不像游戏标题画面。

示例：

```text
HyperGrowth Capital / Week 06 / The Showman / Bull Euphoria
```

## 2. TopPulseBar

### 作用

2 秒内告诉玩家平台脉搏。

### 包含资源

- Cash
- Flow
- Pass Rate
- Payout Liability
- Trust
- Regulatory Heat

### 每张 ResourceCard 显示

- Label
- Value
- Delta arrow
- Status label
- Tiny heat marker

### 状态

#### Normal

边框低亮，数字白色。

#### Improving

delta 区域使用 Growth Green 或 Trust Blue。

#### Worsening

delta 区域使用 Amber / Red / Magenta。

#### Critical

不要满屏闪。

只让卡片边缘变红，标题旁出现小型 warning marker。

## 3. ControlRoom

### 唯一任务

回答：

1. 本周平台赚了没
2. 哪里快出事了
3. 我现在该调什么

### 布局

```text
TopPulseBar

MetricSummaryGrid      RiskCard
ControlPanel           NarrativeFeed
```

### 首屏注意力顺序

1. Week + resource pulse
2. Cash / Flow / Pass Rate
3. Main Risk
4. Controls
5. Narrative Feed

## 4. MetricSummaryGrid

### 显示指标

- Sign-ups
- Fee Revenue
- Passed This Week
- Payout Requests
- Complaint Volume

### 每张卡

- 大数字
- 小标签
- 与上周方向
- 一句短状态

### 不要

- 不要表格化
- 不要过多 decimals
- 不要一次显示 12 个指标

## 5. RiskCard

### 作用

每周只让一个风险最大声。

### 结构

```text
Main Risk This Week
Winner Concentration Rising
High-skill accounts are starting to cluster.
Likely pressure: Payout Liability in 2-3 weeks.
```

### Severity

- Low：细蓝线
- Medium：琥珀边
- High：琥珀 + 洋红小标记
- Critical：红边 + 低频 pulse

### 规则

RiskCard 不要同时列 5 个风险。

如果系统有多个坏信号，只选对下一周决策最有影响的一个。

## 6. ControlPanel

### 作用

让玩家调 5 个核心旋钮。

### 控件

- Challenge Fee
- Profit Target
- Max Drawdown
- Payout Split
- Marketing Tone

### 每个 ControlSlider 显示

- Label
- 一句描述
- 5 档 segmented slider
- 当前档位词
- lock 状态

### 档位词示例

#### Marketing Tone

- `Quiet`
- `Measured`
- `Active`
- `Aggressive`
- `Unavoidable`

#### Payout Split

- `Lean`
- `Controlled`
- `Standard`
- `Generous`
- `Loudly Generous`

### Locked 状态

不要只 disable 成灰。

应该显示：

- `Unlocks Week 4`
- 一句为什么现在不能调

例：

```text
Payout Split
Unlocks Week 4. Winners need to exist before generosity becomes expensive.
```

## 7. ImpactPreview

### 作用

玩家改旋钮时，立即显示方向，而不是公式。

### 显示格式

```text
Projected Pressure Shift
Cash ↑
Flow ↑
Trust ↓
Heat ↑
Audience: more novice and gambler traffic
```

### 规则

- 只显示方向
- 不显示精确数字
- 必须包含一条 audience sentence

## 8. NarrativeFeed

### 作用

把资源变化翻译成人类声音。

### 来源

- User
- KOL
- Internal
- Payment
- Regulator

### 每条 feed

- Source badge
- Tone marker
- Text
- Related metric hint

### 数量

每周 3-5 条。

不要更多。

### 排序

优先展示：

1. 与主风险相关的声音
2. 与玩家上周选择相关的声音
3. 一个正反馈
4. 一个负反馈

## 9. EventModal

### 作用

逼玩家站队。

### 布局

```text
Decision Required
Event title
Event body

Option A  Option B  Option C

Delayed risk hint
```

### Option Card

每张包含：

- Action label
- One-line posture
- Direction chips

### Direction Chips

用简短 chip：

- `Cash ↑`
- `Flow ↑`
- `Trust ↓`
- `Heat ↑`
- `Future Risk ?`

### 延迟风险暗示

不要写完整后果。

写：

```text
Some effects may not show up this week.
```

或更具体：

```text
This may change who comes back next week.
```

## 10. WeekDigest

### 作用

把一周结算做成平台现实报告。

### 布局

```text
Week title
Headline changes

Financials       Funnel
Public Mood      Structural Heat
Inside Platform

RiskCard
Proceed button
```

### Headline changes

只显示 3 个：

- 最好看的指标
- 最不安的指标
- 一个 hidden counter 的影子

例：

```text
Cash +8
Trust -5
Complaint pressure rising
```

### Delayed Effect Hint

如果本周应用了 delayed effect，Digest 必须显示一条：

```text
Echo from Week 3 promo traffic is now showing up in support volume.
```

这能解决“随机惩罚感”。

## 11. DiagnosisCard

### 作用

Week 12 告诉玩家：

**你没有单纯赢或输，你活成了一种平台。**

### 结构

- Diagnosis title
- Subtitle
- 3 evidence bullets
- Route summary
- Replay prompt
- Reset / Export

### 证据规则

必须包含：

1. 一个可见资源
2. 一个 hidden counter 的影子
3. 一个玩家选择 flag

### 示例

```text
Dirty Momentum
The machine is profitable. It is also learning what it can get away with.

- Cash stayed above 70.
- Complaint pressure kept rising under the surface.
- You used promo growth when pressure arrived.
```

## 12. DebugPanel

### 作用

给观察者和调参使用。

### 显示

- Complaint Echo
- Winner Visibility
- Promo Debt
- Processor Patience
- Skilled Cluster
- active delayed effects
- current event scores

### 规则

默认折叠。

试玩时不要让玩家看见。

## 交互状态

### Run Week Button

#### Enabled

文案：

- `Run This Week`

#### Disabled

原因必须可见：

- `Resolve current event first`
- `Controls locked for review`

#### Week 12

文案变成：

- `Run Board Review`

### Proceed Button

普通周：

- `Proceed to Next Week`

事件周：

- `Handle This Event`

Week 12：

- `View Diagnosis`

## 可访问性底线

- 所有 chip 不只靠颜色传达方向
- 所有按钮有文字 label
- 关键数字字号足够大
- hover tooltip 不能承载唯一信息
- 高风险状态必须有图标/边框/文字三重提示

## 第一版 UI QA 清单

1. 玩家 5 秒内能看到当前 Week。
2. 玩家 10 秒内能说出赚钱还是亏。
3. 玩家 15 秒内能指出本周最大风险。
4. locked control 不会让玩家误会是 bug。
5. Event option 能让玩家感到短期诱惑。
6. Digest 能解释至少一个上周选择的后果。
7. Diagnosis 不是简单胜负，而是路线判断。
8. Debug panel 不干扰玩家视野。

## 一句话总结

Prototype UI System Spec 的目标，不是让界面炫，

而是让这台机器变得可读、可信、可怕：

**玩家每周都应该先看见利润，再看见热度，最后意识到按钮背后有人。**
