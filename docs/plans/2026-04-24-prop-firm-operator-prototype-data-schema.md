# Prop Firm Operator - Prototype Data Schema

Date: 2026-04-24
Status: v0-scaffold

## 核心判断

如果下一步要真的做原型，最先需要的不是 UI 组件表。

更需要的是一份稳定的数据结构：

- 资源怎么表示
- 旋钮怎么表示
- 一周怎么结算
- 事件怎么触发
- 延迟后果怎么记账
- Founder 和 Scenario 怎么轻量影响同一台机器

这份文档的目标是：

**把当前 24 份设计文档里的系统对象压成一套可直接给实现使用的 prototype data schema。**

## 设计原则

### 1. 所有可见资源统一 0-100

第一版不要用真实金额、真实用户数、真实合规成本。

统一 0-100 的原因：

- UI 好做
- 数值好调
- 玩家能快速读
- 纸面模拟和代码能共用概念

### 2. 真实复杂度藏在 tags 和 counters 里

玩家看到的是：

- `Cash`
- `Flow`
- `Pass Rate`
- `Payout Liability`
- `Trust`
- `Regulatory Heat`

系统内部还需要：

- `Complaint Echo`
- `Winner Visibility`
- `Promo Debt`
- `Processor Patience`
- `Skilled Cluster`

这些隐藏变量不一定全部上屏，但它们决定事件和反噬。

### 3. 每周状态必须可回放

每周都要存完整 snapshot。

原因：

- Digest 需要引用上周变化
- Playtest 需要看玩家为何误判
- 延迟后果需要知道自己从哪一周来
- 结算诊断需要描述玩家路线

## 顶层对象

建议原型用下面 7 个顶层对象：

1. `RunState`
2. `WeekSnapshot`
3. `PlayerControls`
4. `EventCard`
5. `DelayedEffect`
6. `FounderMode`
7. `Scenario`

它们的关系是：

```text
RunState
  has current Resources
  has current Counters
  has AudienceMix
  has WeekSnapshot[]
  has DelayedEffect[]
  references FounderMode
  references Scenario
  uses EventCard[]
```

## 1. RunState

`RunState` 是当前整局的活状态。

### 推荐字段

```ts
type RunState = {
  runId: string;
  platformName: string;
  currentWeek: number;
  maxWeeks: number;
  founderModeId: string;
  scenarioId: string;
  resources: Resources;
  counters: HiddenCounters;
  audience: AudienceMix;
  controls: PlayerControls;
  delayedEffects: DelayedEffect[];
  triggeredEventIds: string[];
  snapshots: WeekSnapshot[];
  flags: RunFlags;
  status: "active" | "preview" | "ended";
};
```

### 关键说明

`RunState` 不应该只存当前数字。

它还要存：

- 哪些事件发生过
- 哪些延迟后果排队中
- 哪些 founder/scenario 偏置正在生效
- 玩家一路上的选择历史

否则 Week 12 的 diagnosis 会很空。

## 2. Resources

### 推荐字段

```ts
type Resources = {
  cash: number;
  flow: number;
  passRate: number;
  payoutLiability: number;
  trust: number;
  regulatoryHeat: number;
};
```

### 数值约束

所有值都 clamp 到 `0-100`。

但注意：

- `passRate` 的解释不是越高越好
- `payoutLiability` 和 `regulatoryHeat` 是压力资源
- `cash` 和 `flow` 也不是纯好事，高位会诱发错误判断

## 3. HiddenCounters

### 推荐字段

```ts
type HiddenCounters = {
  complaintEcho: number;
  winnerVisibility: number;
  promoDebt: number;
  processorPatience: number;
  skilledCluster: number;
};
```

### 字段含义

#### `complaintEcho`

用户抱怨的残响。

来源：

- 低通过率
- 激进营销
- 低信任
- 高客服压力

用途：

- 触发 `Feels Rigged Forum Post`
- 触发 `Support Queue Meltdown`
- 推高支付/监管事件权重

#### `winnerVisibility`

赢家是否足够可见。

来源：

- 成功 payout
- 高 payout split
- KOL 或 winner thread 放大

用途：

- 触发 `Viral Winner Thread`
- 提高 `Silent Winners Cluster` 权重
- 推高 `Payout Liability`

#### `promoDebt`

促销带来的用户质量债。

来源：

- `Weekend Promo Temptation`
- 高 `Marketing Tone`

用途：

- 2-4 周后转成投诉、客服压力、人群质量下降

#### `processorPatience`

支付合作方耐心。

建议初始值：

- `70`

下降来源：

- 高 `Regulatory Heat`
- 高争议/投诉
- 拖延 payout
- 激进营销

用途：

- 触发 `Payment Processor Warning`
- 决定支付事件选项后果

#### `skilledCluster`

真高手聚集程度。

来源：

- 高 `Trust`
- 高 `Payout Split`
- 高 `Winner Visibility`

用途：

- 触发 `Silent Winners Cluster`
- 推高 payout 压力

## 4. AudienceMix

### 推荐字段

```ts
type AudienceMix = {
  novice: number;
  gambler: number;
  skilled: number;
};
```

三个值建议总和为 `1`。

### 默认值

```ts
const defaultAudience = {
  novice: 0.62,
  gambler: 0.28,
  skilled: 0.10,
};
```

### 设计重点

玩家不需要每周精确管理人群。

但系统必须让人群改变：

- 新手多，增长好看但支持压力上升
- 赌徒多，复购和现金好看但投诉残响上升
- 真高手多，信任更真但 payout 变贵

## 5. PlayerControls

### 推荐字段

```ts
type PlayerControls = {
  challengeFee: ControlLevel;
  profitTarget: ControlLevel;
  maxDrawdown: ControlLevel | "locked";
  payoutSplit: ControlLevel | "locked";
  marketingTone: ControlLevel;
};

type ControlLevel = 1 | 2 | 3 | 4 | 5;
```

### 旋钮含义

#### `challengeFee`

越高：

- `Cash` 短期更好
- `Flow` 更弱
- 赌徒占比上升
- `Trust` 更脆

#### `profitTarget`

越高：

- `Pass Rate` 更低
- `Cash` 更稳
- `Complaint Echo` 更高

#### `maxDrawdown`

越高表示越宽松。

越宽松：

- `Pass Rate` 上升
- `Trust` 上升
- `Payout Liability` 上升

#### `payoutSplit`

越高：

- `Trust` 上升
- `Winner Visibility` 上升
- `Payout Liability` 上升

#### `marketingTone`

越高：

- `Flow` 上升
- 新手/赌徒上升
- `Complaint Echo` 上升
- `Regulatory Heat` 上升

## 6. ControlAvailability

第一局需要控制旋钮开放节奏。

### 推荐字段

```ts
type ControlAvailability = {
  week: number;
  challengeFee: [number, number];
  profitTarget: [number, number];
  maxDrawdown: [number, number] | "locked";
  payoutSplit: [number, number] | "locked";
  marketingTone: [number, number];
};
```

### 默认规则

- Week 1: only fee / target / tone
- Week 2-3: add drawdown
- Week 4: add split
- Week 5-12: all controls open

这样可以直接对应 playable run spec。

## 7. WeekSnapshot

每周结算后生成一个 snapshot。

### 推荐字段

```ts
type WeekSnapshot = {
  week: number;
  phase: "temptation" | "crack" | "reveal" | "reckoning";
  controls: PlayerControls;
  resourcesStart: Resources;
  resourcesEnd: Resources;
  countersStart: HiddenCounters;
  countersEnd: HiddenCounters;
  audienceStart: AudienceMix;
  audienceEnd: AudienceMix;
  outcome: WeeklyOutcome;
  event?: EventResolution;
  digest: WeekDigest;
  delayedEffectsCreated: DelayedEffect[];
  delayedEffectsApplied: DelayedEffect[];
};
```

### 为什么 snapshot 要这么厚

因为这款产品的乐趣不是“本周加了几点”。

它的乐趣是：

- 我前面做了什么
- 这周为什么会这样
- 我当时为什么觉得那个选择合理

厚 snapshot 是为了服务回放、诊断和 playtest。

## 8. WeeklyOutcome

### 推荐字段

```ts
type WeeklyOutcome = {
  signups: number;
  failures: number;
  passes: number;
  payoutRequests: number;
  successfulPayouts: number;
  feeRevenue: number;
  promoCost: number;
  supportCost: number;
  payoutCost: number;
  cashDelta: number;
};
```

### 原型中的数字语义

这些可以不是美元或真实人数。

它们可以是 normalized units。

重点是：

- `signups` 给增长爽感
- `passes` 和 `successfulPayouts` 给真实性
- `payoutCost` 给赢家账单
- `supportCost` 给投诉与客服压力

## 9. WeekDigest

### 推荐字段

```ts
type WeekDigest = {
  title: string;
  subtitle?: string;
  headlineMetricIds: string[];
  narrativeFeed: NarrativeItem[];
  riskCard: RiskCard;
  statusLabels: Record<keyof Resources, string>;
};
```

### NarrativeItem

```ts
type NarrativeItem = {
  source: "user" | "kol" | "internal" | "payment" | "regulator";
  text: string;
  tone: "positive" | "neutral" | "warning" | "critical";
  relatedMetricIds: string[];
};
```

### RiskCard

```ts
type RiskCard = {
  title: string;
  body: string;
  severity: "low" | "medium" | "high" | "critical";
  relatedCounterIds: string[];
};
```

## 10. EventCard

### 推荐字段

```ts
type EventCard = {
  id: string;
  title: string;
  body: string;
  trigger: EventTrigger;
  weight: number;
  minWeek?: number;
  maxWeek?: number;
  options: EventOption[];
  tags: string[];
};
```

### EventTrigger

```ts
type EventTrigger = {
  all?: TriggerCondition[];
  any?: TriggerCondition[];
  blockedByFlags?: string[];
  requiredFlags?: string[];
};

type TriggerCondition = {
  path: string;
  op: ">=" | ">" | "<=" | "<" | "==" | "!=";
  value: number | string | boolean;
};
```

### EventOption

```ts
type EventOption = {
  id: string;
  label: string;
  description: string;
  immediateEffects: Effect[];
  delayedEffects: DelayedEffectTemplate[];
  flagsSet?: string[];
};
```

### Effect

```ts
type Effect = {
  path: string;
  delta: number;
  reason: string;
};
```

### 示例

```ts
const weekendPromo = {
  id: "weekend_promo_temptation",
  title: "Weekend Promo Temptation",
  minWeek: 3,
  maxWeek: 3,
  trigger: {
    any: [
      { path: "resources.cash", op: "<=", value: 70 },
      { path: "resources.flow", op: "<=", value: 85 },
    ],
  },
  options: [
    {
      id: "launch_the_promo",
      label: "Launch the Promo",
      description: "先把钱拉回来，其他问题下周再说。",
      immediateEffects: [
        { path: "resources.cash", delta: 10, reason: "promo revenue" },
        { path: "resources.flow", delta: 8, reason: "discount traffic" },
        { path: "resources.trust", delta: -4, reason: "cheapened offer" },
        { path: "counters.promoDebt", delta: 8, reason: "low quality traffic" },
      ],
      delayedEffects: [
        {
          delayWeeks: 2,
          effects: [
            { path: "counters.complaintEcho", delta: 9, reason: "promo user quality" },
            { path: "audience.gambler", delta: 0.04, reason: "promo cohort" },
          ],
        },
      ],
    },
  ],
};
```

## 11. DelayedEffect

延迟后果是原型的灵魂。

### 推荐字段

```ts
type DelayedEffect = {
  id: string;
  createdWeek: number;
  applyWeek: number;
  sourceType: "control" | "event" | "scenario" | "founder";
  sourceId: string;
  effects: Effect[];
  narrativeHint?: string;
};
```

### 设计原则

每个关键坏决定至少创建一个 delayed effect。

但不要每个小调整都排队。

否则系统会变成噪音。

## 12. FounderMode

### 推荐字段

```ts
type FounderMode = {
  id: string;
  name: string;
  subtitle: string;
  startingResourceMods: Partial<Resources>;
  startingCounterMods: Partial<HiddenCounters>;
  biasTags: string[];
  weaknessLine: string;
  eventAdviceOverrides: Record<string, string>;
  endingVoice: Record<string, string>;
};
```

### 第一版最小实现

只实现：

- `The Showman`

其他 founder 先写成 data stub。

这样可以保留未来扩展边界，但不拖慢首局。

## 13. Scenario

### 推荐字段

```ts
type Scenario = {
  id: string;
  name: string;
  subtitle: string;
  startingResourceMods: Partial<Resources>;
  startingCounterMods: Partial<HiddenCounters>;
  audienceMods: Partial<AudienceMix>;
  eventWeightMods: Record<string, number>;
  digestTitlePool: string[];
  riskLinePool: string[];
  misreadLine: string;
};
```

### 第一版最小实现

只实现：

- `Bull Euphoria`

其他 scenario 先写成 data stub。

## 14. RunFlags

### 推荐字段

```ts
type RunFlags = {
  promoUsed: boolean;
  winnerThreadAmplified: boolean;
  processorWarned: boolean;
  regulatorContacted: boolean;
  payoutDelayed: boolean;
  reviewsTightened: boolean;
};
```

### 为什么 flags 很重要

资源值只能说明平台状态。

flags 说明玩家做过什么。

结算诊断需要的是第二种。

## 15. EndingPreview

第一版 Week 12 建议做 diagnosis，而不是完整 ending。

### 推荐字段

```ts
type EndingPreview = {
  type:
    | "dirty_momentum"
    | "credibility_is_expensive"
    | "room_is_shrinking"
    | "crowd_still_believes"
    | "trust_collapse_preview"
    | "payout_shock_preview";
  title: string;
  subtitle: string;
  evidenceMetricIds: string[];
  evidenceFlags: string[];
  replayPrompt: string;
};
```

### 触发倾向

- `dirty_momentum`: 高 cash + 低 trust + 中高 heat
- `credibility_is_expensive`: 高 trust + 高 payout liability
- `room_is_shrinking`: 高 regulatory heat
- `crowd_still_believes`: 高 flow + 中低 structural failure
- `trust_collapse_preview`: trust <= 25
- `payout_shock_preview`: payout liability >= 55 且 cash <= 40

## 最小实现建议

第一版可以只落下面这些 data：

1. 1 个 `FounderMode`
2. 1 个 `Scenario`
3. 6 个 `EventCard`
4. 12 个 `WeekDigest` 标题
5. 5 个 `ControlAvailability`
6. 6 个 `Resources`
7. 5 个 `HiddenCounters`

不要急着做：

- 多 founder
- 多 scenario
- 完整 ending
- 大量随机事件
- 真实财务单位

## 一句话总结

Prototype Data Schema 的目标，不是把系统做复杂，

而是给原型一副足够稳定的骨架：

**让每一次诱惑、每一次好看的数字、每一次延迟反噬，都能被记录、解释和回放。**
