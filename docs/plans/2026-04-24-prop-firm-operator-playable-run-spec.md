# Prop Firm Operator - Playable Run Spec

Date: 2026-04-24
Status: exploration

## 核心判断

原型第一局不需要完整模拟整个行业。

它需要的是一条足够清晰、足够有咬合力的 `12 Week playable run`：

- 玩家一开始觉得自己接手的是增长机器
- 中段开始发现增长正在改变流量质量
- 后段第一次意识到赢家、投诉、支付和监管不是不同问题，而是同一台机器吐出来的账单

这份规格的目标是：

**把第一局 Week 1 到 Week 12 的旋钮范围、事件顺序、Digest 标题和目标情绪串成一份可直接照着搭的 run spec。**

## 第一局的默认前提

### 默认模式

- Founder: `The Showman`
- Scenario: `Bull Euphoria`
- Platform: `HyperGrowth Capital`
- Length: `12 weeks`

### 初始资源

- `Cash = 62`
- `Flow = 84`
- `Pass Rate = 11`
- `Payout Liability = 14`
- `Trust = 52`
- `Regulatory Heat = 20`
- `Complaint Echo = 8`
- `Winner Visibility = 11`

### 默认人群

- `Novice = 62%`
- `Gambler = 28%`
- `Skilled = 10%`

### 设计重点

默认局不能太难。

它应该让玩家在 Week 1-4 觉得：

**我懂了，这门生意是可以被操盘的。**

然后在 Week 7-12 逐步让玩家发现：

**我不是懂了，我只是太早相信了好看的数字。**

## 五个旋钮的第一局开放节奏

### Week 1

只开放：

- `Challenge Fee`
- `Profit Target`
- `Marketing Tone`

锁住：

- `Max Drawdown`
- `Payout Split`

原因：
- 先让玩家体验赚钱与增长
- 不要第一分钟就把所有系统压到他脸上

### Week 2-3

开放：

- `Max Drawdown`

原因：
- 开始让玩家理解通过率不是自然发生的
- 第一次让玩家感觉自己可以设计失败

### Week 4

开放：

- `Payout Split`

原因：
- 赢家开始进入系统
- 让玩家第一次看到“更可信”也可能更贵

### Week 5-12

五个旋钮全部开放。

从这时开始，玩家每周都应能做出完整经营姿态：

- 卖得更猛
- 规则更紧
- 看起来更公平
- 保现金
- 降热度

## 旋钮范围建议

第一局不要允许极端爆表。

建议每个旋钮用 5 档，但前几周限制可选范围。

### Challenge Fee

- Week 1-2: `2-4`
- Week 3-12: `1-5`

### Profit Target

- Week 1-3: `2-4`
- Week 4-12: `1-5`

### Max Drawdown

- Week 1: locked
- Week 2-4: `2-4`
- Week 5-12: `1-5`

### Payout Split

- Week 1-3: locked
- Week 4-7: `2-4`
- Week 8-12: `1-5`

### Marketing Tone

- Week 1-4: `2-5`
- Week 5-12: `1-5`

为什么 `Marketing Tone` 早期允许更高：

- 这符合 `Bull Euphoria`
- 也更容易诱导玩家自己把门打开

## Week-by-Week Run Table

### Week 1: Strong Start

#### 可用旋钮

- `Challenge Fee`
- `Profit Target`
- `Marketing Tone`

#### 推荐默认值

- `Fee = 3`
- `Target = 3`
- `Tone = 4`

#### Digest 标题

- `Week 1 - Strong Start`

#### 本周目标情绪

玩家应该觉得：

- 平台很好理解
- 钱来得快
- 风险还很远

#### 系统反馈

- `Cash` 上升
- `Flow` 上升
- `Trust` 小幅下降或不变
- `Complaint Echo` 轻微上升

#### Narrative Feed

- `Sign-ups beat the internal target.`
- `A few users say the rules feel tight, but the thread is small.`

### Week 2: Cheap Traffic, Fast Money

#### 新开放

- `Max Drawdown`

#### 推荐事件

无强制事件，只给轻量 feed。

#### Digest 标题

- `Week 2 - Cheap Traffic, Fast Money`

#### 本周目标情绪

玩家应该开始觉得：

- 我能通过规则影响结果
- 稍微收紧一点似乎很聪明

#### 系统反馈

- 高 `Marketing Tone` 会带来更多新手和赌徒
- 紧 `Max Drawdown` 会压低通过人数
- `Complaint Echo` 开始记账

#### 风险短句

- `The traffic is getting easier to buy and harder to satisfy.`

### Week 3: Growth Still Looks Clean

#### 推荐事件

- `Weekend Promo Temptation`

#### Digest 标题

- `Week 3 - Growth Still Looks Clean`

#### 本周目标情绪

玩家应该第一次遇到“脏但合理”的按钮。

#### 推荐选项

如果玩家现金低于 `65`：

- 推荐视觉高亮 `Launch the Promo`

如果玩家现金高于 `75`：

- 推荐高亮 `Run a Smaller Offer`

#### 即时反馈

- 大促让 `Cash` 和 `Flow` 明显变绿
- `Trust` 和 `Complaint Echo` 的坏影响只轻微出现

#### 埋雷

- 记录 `promo_debt = +1`
- Week 5 或 Week 6 回收

### Week 4: Strong Growth, Strange Smell

#### 新开放

- `Payout Split`

#### 推荐事件

无强制事件。

#### Digest 标题

- `Week 4 - Strong Growth, Strange Smell`

#### 本周目标情绪

玩家应该第一次意识到：

- 成功案例能卖故事
- 但 payout 不是装饰品

#### 系统反馈

- 如果 `Payout Split >= 4`，`Trust` 上升，`Payout Liability` 上升
- 如果 `Payout Split <= 2`，`Cash` 稳住，`Trust` 分裂

#### 风险短句

- `A platform looks more real when it starts owing real money.`

### Week 5: More Sign-Ups, More Friction

#### 推荐事件

- 如果 Week 3 选择大促，触发 `Feels Rigged Forum Post`
- 否则触发轻版 support feed

#### Digest 标题

- `Week 5 - More Sign-Ups, More Friction`

#### 本周目标情绪

玩家应该第一次看见延迟后果。

#### 系统反馈

- `Complaint Echo` 明显上升
- `Trust` 开始和 `Flow` 分离
- 高增长不再自动等于好状态

#### 关键 feed

- `Users are repeating the same complaint in different words.`

### Week 6: The Winners Are Getting Louder

#### 推荐事件

- `Viral Winner Thread`

#### Digest 标题

- `Week 6 - The Winners Are Getting Louder`

#### 本周目标情绪

玩家应该第一次感到赢家既是资产也是负债。

#### 推荐选项诱惑

- `Amplify It`

#### 即时反馈

- `Flow` 上升
- `Trust` 上升
- `Winner Visibility` 上升

#### 延迟后果

- Week 8-9 提高 `Silent Winners Cluster` 权重

#### 风险短句

- `The story is improving. So is the bill behind it.`

### Week 7: Cash Up, Confidence Splitting

#### 推荐事件

无强制事件，让玩家消化系统状态。

#### Digest 标题

- `Week 7 - Cash Up, Confidence Splitting`

#### 本周目标情绪

玩家应该开始主动调和：

- 现金
- 信任
- 通过率
- payout 暴露

#### 系统反馈

- 如果玩家继续高营销，`Regulatory Heat` 开始明显升
- 如果玩家降营销，`Flow` 会冷却

#### 风险短句

- `The outside still sees growth. Inside, the user mix is changing.`

### Week 8: Good Numbers, Bad Temperature

#### 推荐事件

- `Silent Winners Cluster`

#### Digest 标题

- `Week 8 - Good Numbers, Bad Temperature`

#### 本周目标情绪

玩家应该第一次感到自己被真正会赢的人盯上了。

#### 推荐选项张力

- `Tighten Reviews` 短期最香
- `Hedge Early` 长期更稳但痛
- `Watch for Now` 最像拖延

#### 系统反馈

- 真高手占比上升
- `Payout Liability` 加速
- 加严审核会伤 `Trust`

#### 风险短句

- `Competent users are not just better customers. They are different risk.`

### Week 9: Trust Starts to Crack

#### 推荐事件

- 如果 `Complaint Echo >= 28`，触发 `Support Queue Meltdown`
- 否则触发 `Feels Rigged Forum Post` 回声版

#### Digest 标题

- `Week 9 - Trust Starts to Crack`

#### 本周目标情绪

玩家应该发现：

- 舆情不是单点事件
- 它会继承前几周的选择

#### 系统反馈

- `Trust` 进入明显下滑区
- `Flow` 仍可能保持中高
- 玩家会第一次觉得“外面还热，里面已经裂”

#### 风险短句

- `What users whispered earlier is now easier to find.`

### Week 10: The Cost of Looking Real

#### 推荐事件

- `Payment Processor Warning`

#### Digest 标题

- `Week 10 - The Cost of Looking Real`

#### 本周目标情绪

玩家应该第一次感到平台不是只面对用户。

#### 推荐选项张力

- `Cooperate Fully` 最痛但降热
- `Patch the Numbers and Buy Time` 最像现实诱惑
- `Shift to a More Flexible Channel` 最脏也最危险

#### 系统反馈

- 支付/风控开始成为经营空间约束
- `Regulatory Heat` 不再只是未来概念

#### 风险短句

- `The business still runs. The tolerance around it is thinning.`

### Week 11: Everyone Is Watching Different Things

#### 推荐事件

无强制事件，给一周多声部 digest。

#### Digest 标题

- `Week 11 - Everyone Is Watching Different Things`

#### 本周目标情绪

玩家应该感到世界开始分裂：

- KOL 看增长
- 用户看 payout
- 支付看争议
- 内部看现金
- 监管看表述

#### Narrative Feed

- `Marketing wants one more push before the quarter closes.`
- `Risk asks whether payout language should be tightened.`
- `Support says users are citing old promises back at the platform.`

#### 风险短句

- `Your platform has one dashboard and five audiences.`

### Week 12: The Machine Wants Feeding

#### 推荐事件

- 如果 `Regulatory Heat >= 50`，触发轻版 `First Regulator Letter`
- 如果 `Payout Liability >= 45`，触发 payout shock preview
- 如果 `Trust <= 28`，触发 trust collapse preview
- 否则触发 dirty success preview

#### Digest 标题

- `Week 12 - The Machine Wants Feeding`

#### 本周目标情绪

玩家应该结束在一种复杂状态：

- 我没有彻底失败
- 我也不再清白
- 我知道下一局可以换打法

#### 第一局结算不做正式结局

Week 12 建议叫：

- `Run Preview`
- `Board Review`
- `Operating Diagnosis`

而不是完整 ending。

原因：
- 原型目标是证明循环成立
- 不必假装这已经是一局完整商业游戏

#### 结算卡可能标题

- `Dirty Momentum`
- `Credibility Is Getting Expensive`
- `The Room Is Shrinking`
- `The Crowd Still Believes`

## 第一局的事件顺序原则

### 固定事件

建议固定：

1. Week 3: `Weekend Promo Temptation`
2. Week 6: `Viral Winner Thread`
3. Week 8: `Silent Winners Cluster`
4. Week 10: `Payment Processor Warning`

### 条件事件

建议条件触发：

- Week 5: `Feels Rigged Forum Post`
- Week 9: `Support Queue Meltdown`
- Week 12: `First Regulator Letter` 或结算预览

### 为什么这样排

这条线正好形成：

1. 先诱惑玩家自己打开门
2. 再让成功案例把门撑得更大
3. 再让真正会赢的人进来
4. 最后让支付/监管发现门开得不太对

## 第一局必须避免的 4 个问题

### 1. 不要太早惩罚

Week 1-3 必须让玩家爽。

否则玩家不会相信后面的反噬和自己有关。

### 2. 不要把所有坏事说透

提示可以出现，但不要解释成教学文本。

玩家需要自己从数字和 feed 里意识到不对劲。

### 3. 不要让事件像随机抽卡

第一局事件应该高度导演化。

因为目标不是证明内容量，而是证明因果感。

### 4. 不要让 Week 12 变成失败审判

原型首局结尾应该更像诊断：

- 你活下来了
- 但你已经活成某种东西

## 一句话总结

Playable Run Spec 的目标，不是把 12 周写成剧情关卡，

而是搭出一条足够稳定的第一次误判曲线：

**玩家先相信增长，再相信自己，最后发现自己其实是在喂一台会记账的机器。**
