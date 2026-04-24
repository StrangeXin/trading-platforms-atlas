# Prop Firm Operator - Prototype Content JSON Seed

Date: 2026-04-24
Status: exploration

## 核心判断

现在已经有足够多的设计文档。

下一步最有用的不是继续扩写世界观，而是把原型第一局需要的内容压成一份接近代码的数据种子。

这份文档的目标是：

**把 6 个事件、12 周 digest、状态词、风险句、Founder 和 Scenario 默认值整理成一份可直接粘进项目的数据 seed。**

## 使用方式

这不是最终代码。

它更像一份 `content.seed.ts` 的草案：

- 文案已经接近可上屏
- id 命名已经接近可实现
- immediate / delayed effects 已经给出方向和幅度
- 具体数值仍然可以在 `Simulation Formula v0` 里调

## 1. Founder Seed

```ts
export const founderModes = [
  {
    id: "showman",
    name: "The Showman",
    subtitle: "If they're watching, they're halfway in.",
    weaknessLine: "You mistake noise for strength.",
    startingResourceMods: {
      flow: 6,
      trust: -3,
    },
    startingCounterMods: {
      winnerVisibility: 4,
    },
    biasTags: ["growth", "visibility", "narrative"],
    eventAdviceOverrides: {
      viral_winner_thread: "This is momentum. Use it before it cools.",
      feels_rigged_forum_post: "If the story stays strong, the complaints stay small.",
      weekend_promo_temptation: "Attention compounds faster than caution.",
    },
    endingVoice: {
      dirty_momentum: "You didn't build trust. You built gravity.",
      trust_collapse_preview: "The story held until it had to carry the whole business by itself.",
    },
  },
];
```

## 2. Scenario Seed

```ts
export const scenarios = [
  {
    id: "bull_euphoria",
    name: "Bull Euphoria",
    subtitle: "When everything is going up, even bad structures feel brilliant.",
    misreadLine: "Most players mistake market heat for platform quality.",
    startingResourceMods: {
      flow: 10,
      trust: 4,
      regulatoryHeat: -2,
    },
    startingCounterMods: {
      winnerVisibility: 5,
    },
    audienceMods: {
      novice: 0.04,
      gambler: 0.02,
      skilled: -0.06,
    },
    eventWeightMods: {
      weekend_promo_temptation: 1.25,
      viral_winner_thread: 1.2,
      kol_wants_exclusivity: 1.15,
    },
    digestTitlePool: [
      "Everyone Looks Smarter in This Market",
      "Hot Traffic, Thin Judgment",
      "The Story Is Selling Itself",
    ],
    riskLinePool: [
      "The market is flattering everyone, including you.",
      "Hot conditions hide ugly mechanics well.",
      "More people believe. That does not mean more people understand.",
    ],
  },
];
```

## 3. Initial Run Seed

```ts
export const initialRunSeed = {
  platformName: "HyperGrowth Capital",
  founderModeId: "showman",
  scenarioId: "bull_euphoria",
  maxWeeks: 12,
  resources: {
    cash: 62,
    flow: 74,
    passRate: 11,
    payoutLiability: 14,
    trust: 48,
    regulatoryHeat: 22,
  },
  counters: {
    complaintEcho: 8,
    winnerVisibility: 6,
    promoDebt: 0,
    processorPatience: 70,
    skilledCluster: 5,
  },
  audience: {
    novice: 0.58,
    gambler: 0.30,
    skilled: 0.12,
  },
  controls: {
    challengeFee: 3,
    profitTarget: 3,
    maxDrawdown: "locked",
    payoutSplit: "locked",
    marketingTone: 4,
  },
};
```

## 4. Control Availability Seed

```ts
export const controlAvailability = [
  {
    fromWeek: 1,
    toWeek: 1,
    challengeFee: [2, 4],
    profitTarget: [2, 4],
    maxDrawdown: "locked",
    payoutSplit: "locked",
    marketingTone: [2, 5],
  },
  {
    fromWeek: 2,
    toWeek: 3,
    challengeFee: [2, 4],
    profitTarget: [2, 4],
    maxDrawdown: [2, 4],
    payoutSplit: "locked",
    marketingTone: [2, 5],
  },
  {
    fromWeek: 4,
    toWeek: 4,
    challengeFee: [1, 5],
    profitTarget: [1, 5],
    maxDrawdown: [2, 4],
    payoutSplit: [2, 4],
    marketingTone: [2, 5],
  },
  {
    fromWeek: 5,
    toWeek: 12,
    challengeFee: [1, 5],
    profitTarget: [1, 5],
    maxDrawdown: [1, 5],
    payoutSplit: [1, 5],
    marketingTone: [1, 5],
  },
];
```

## 5. Event Seed

### 5.1 Weekend Promo Temptation

```ts
{
  id: "weekend_promo_temptation",
  title: "Weekend Promo Temptation",
  body: "本周现金流不够漂亮。市场部提议做一个限时五折复购活动：短期能把报名拉回来，但来的用户可能更差，也更难处理。",
  minWeek: 3,
  maxWeek: 3,
  weight: 100,
  tags: ["cash", "growth", "promo", "temptation"],
  trigger: {
    any: [
      { path: "resources.cash", op: "<=", value: 75 },
      { path: "resources.flow", op: "<=", value: 90 }
    ]
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
        { path: "counters.promoDebt", delta: 10, reason: "low quality cohort" }
      ],
      delayedEffects: [
        {
          delayWeeks: 2,
          narrativeHint: "Promo users are starting to sound different from organic users.",
          effects: [
            { path: "counters.complaintEcho", delta: 9, reason: "promo cohort frustration" },
            { path: "audience.gambler", delta: 0.04, reason: "discount-chasing retry users" },
            { path: "audience.novice", delta: 0.02, reason: "promo novice inflow" },
            { path: "resources.trust", delta: -3, reason: "promo quality backlash" }
          ]
        }
      ],
      flagsSet: ["promoUsed"]
    },
    {
      id: "run_smaller_offer",
      label: "Run a Smaller Offer",
      description: "保一点现金，也别把门开得太大。",
      immediateEffects: [
        { path: "resources.cash", delta: 5, reason: "limited promo revenue" },
        { path: "resources.flow", delta: 3, reason: "limited urgency" },
        { path: "counters.promoDebt", delta: 4, reason: "moderate user quality debt" }
      ],
      delayedEffects: [
        {
          delayWeeks: 2,
          effects: [
            { path: "counters.complaintEcho", delta: 4, reason: "moderate promo frustration" }
          ]
        }
      ]
    },
    {
      id: "hold_the_line",
      label: "Hold the Line",
      description: "宁可难看一点，也不把流量做脏。",
      immediateEffects: [
        { path: "resources.cash", delta: -4, reason: "missed promo revenue" },
        { path: "resources.flow", delta: -3, reason: "less urgency" },
        { path: "resources.trust", delta: 3, reason: "brand discipline" }
      ],
      delayedEffects: []
    }
  ]
}
```

### 5.2 Feels Rigged Forum Post

```ts
{
  id: "feels_rigged_forum_post",
  title: "\"Feels Rigged\" Forum Post",
  body: "社区热帖开始发酵：几位用户声称平台规则被设计成“永远差一点点”。帖子还不算爆，但已经有人开始跟帖讲自己的失败经历。",
  minWeek: 5,
  maxWeek: 9,
  weight: 65,
  tags: ["trust", "complaints", "rules"],
  trigger: {
    any: [
      { path: "counters.complaintEcho", op: ">=", value: 22 },
      { path: "resources.passRate", op: "<=", value: 8 }
    ]
  },
  options: [
    {
      id: "publish_calm_response",
      label: "Publish a Calm Response",
      description: "解释规则逻辑，承认体验问题，但不改核心结构。",
      immediateEffects: [
        { path: "resources.trust", delta: 3, reason: "calm explanation" },
        { path: "resources.cash", delta: -2, reason: "support and comms cost" }
      ],
      delayedEffects: [
        {
          delayWeeks: 2,
          effects: [
            { path: "counters.complaintEcho", delta: -3, reason: "some users accept explanation" }
          ]
        }
      ]
    },
    {
      id: "ease_one_rule_slightly",
      label: "Ease One Rule Slightly",
      description: "放宽一点规则，让平台重新显得可过。",
      immediateEffects: [
        { path: "resources.passRate", delta: 3, reason: "rule easing" },
        { path: "resources.trust", delta: 5, reason: "visible concession" },
        { path: "resources.payoutLiability", delta: 5, reason: "more viable accounts" },
        { path: "resources.cash", delta: -4, reason: "weaker failure economics" }
      ],
      delayedEffects: [
        {
          delayWeeks: 2,
          effects: [
            { path: "counters.winnerVisibility", delta: 4, reason: "easier path to payout stories" },
            { path: "counters.skilledCluster", delta: 3, reason: "better players notice softness" }
          ]
        }
      ]
    },
    {
      id: "push_back_hard",
      label: "Push Back Hard",
      description: "强调违规都是用户责任，拒绝让质疑定义平台。",
      immediateEffects: [
        { path: "resources.cash", delta: 2, reason: "no concession" },
        { path: "resources.trust", delta: -6, reason: "hostile posture" },
        { path: "counters.complaintEcho", delta: 8, reason: "complaints harden" }
      ],
      delayedEffects: [
        {
          delayWeeks: 2,
          effects: [
            { path: "resources.regulatoryHeat", delta: 5, reason: "public dispute trail" }
          ]
        }
      ]
    }
  ]
}
```

### 5.3 Viral Winner Thread

```ts
{
  id: "viral_winner_thread",
  title: "Viral Winner Thread",
  body: "一位用户晒出完整 payout 流程，帖子开始扩散。市场团队建议立刻拿来做投放，风控则提醒这类成功故事会吸引更难处理的人。",
  minWeek: 6,
  maxWeek: 6,
  weight: 100,
  tags: ["winner", "trust", "liability", "growth"],
  trigger: {
    any: [
      { path: "counters.winnerVisibility", op: ">=", value: 12 },
      { path: "resources.trust", op: ">=", value: 45 }
    ]
  },
  options: [
    {
      id: "amplify_it",
      label: "Amplify It",
      description: "把成功案例推到所有渠道。",
      immediateEffects: [
        { path: "resources.flow", delta: 9, reason: "winner story conversion" },
        { path: "resources.trust", delta: 6, reason: "proof of payout" },
        { path: "counters.winnerVisibility", delta: 10, reason: "amplified story" }
      ],
      delayedEffects: [
        {
          delayWeeks: 2,
          narrativeHint: "The winner story is attracting a more competent crowd.",
          effects: [
            { path: "resources.payoutLiability", delta: 10, reason: "better entrants" },
            { path: "counters.skilledCluster", delta: 8, reason: "skilled users follow proof" },
            { path: "audience.skilled", delta: 0.04, reason: "proof attracts real traders" }
          ]
        }
      ],
      flagsSet: ["winnerThreadAmplified"]
    },
    {
      id: "reference_it_carefully",
      label: "Reference It Carefully",
      description: "让案例存在，但不把它变成承诺。",
      immediateEffects: [
        { path: "resources.flow", delta: 4, reason: "controlled proof" },
        { path: "resources.trust", delta: 4, reason: "credible payout" },
        { path: "counters.winnerVisibility", delta: 4, reason: "limited spread" }
      ],
      delayedEffects: [
        {
          delayWeeks: 3,
          effects: [
            { path: "resources.payoutLiability", delta: 4, reason: "some skilled attention" }
          ]
        }
      ]
    },
    {
      id: "let_it_travel_organically",
      label: "Let It Travel Organically",
      description: "不主动放大，避免引来太多会赢的人。",
      immediateEffects: [
        { path: "resources.trust", delta: 2, reason: "organic credibility" },
        { path: "resources.flow", delta: 1, reason: "limited spread" },
        { path: "resources.cash", delta: -1, reason: "missed growth opportunity" }
      ],
      delayedEffects: []
    }
  ]
}
```

### 5.4 Silent Winners Cluster

```ts
{
  id: "silent_winners_cluster",
  title: "Silent Winners Cluster",
  body: "风控发现少数账户表现异常稳定。他们不像冲动型玩家，更像知道自己在做什么的人。如果继续集中，未来 payout 压力可能会突然变重。",
  minWeek: 8,
  maxWeek: 8,
  weight: 100,
  tags: ["winner", "risk", "payout"],
  trigger: {
    any: [
      { path: "counters.skilledCluster", op: ">=", value: 12 },
      { path: "resources.payoutLiability", op: ">=", value: 28 }
    ]
  },
  options: [
    {
      id: "hedge_early",
      label: "Hedge Early",
      description: "先为真正会赢的人付成本，别让尾部突然炸开。",
      immediateEffects: [
        { path: "resources.cash", delta: -8, reason: "hedging cost" },
        { path: "resources.payoutLiability", delta: -8, reason: "risk covered" },
        { path: "resources.trust", delta: 3, reason: "cleaner payout posture" }
      ],
      delayedEffects: []
    },
    {
      id: "tighten_reviews",
      label: "Tighten Reviews",
      description: "加严审核，让这些账户慢一点变成账单。",
      immediateEffects: [
        { path: "resources.cash", delta: 4, reason: "slower payout approval" },
        { path: "resources.payoutLiability", delta: -4, reason: "review friction" },
        { path: "resources.trust", delta: -5, reason: "winner friction" },
        { path: "counters.complaintEcho", delta: 5, reason: "review suspicion" }
      ],
      delayedEffects: [
        {
          delayWeeks: 2,
          effects: [
            { path: "resources.regulatoryHeat", delta: 4, reason: "payout review complaints" },
            { path: "counters.processorPatience", delta: -6, reason: "dispute signal" }
          ]
        }
      ],
      flagsSet: ["reviewsTightened"]
    },
    {
      id: "watch_for_now",
      label: "Watch for Now",
      description: "不急着处理，保留本周的现金和品牌温度。",
      immediateEffects: [
        { path: "resources.cash", delta: 2, reason: "no intervention cost" },
        { path: "counters.skilledCluster", delta: 4, reason: "cluster continues" }
      ],
      delayedEffects: [
        {
          delayWeeks: 2,
          effects: [
            { path: "resources.payoutLiability", delta: 10, reason: "cluster matures" }
          ]
        }
      ]
    }
  ]
}
```

### 5.5 Payment Processor Warning

```ts
{
  id: "payment_processor_warning",
  title: "Payment Processor Warning",
  body: "支付合作方要求你解释近期争议率与退款节奏，否则可能重新评估当前费率与处理条件。",
  minWeek: 10,
  maxWeek: 10,
  weight: 100,
  tags: ["payment", "regulatory", "operating_room"],
  trigger: {
    any: [
      { path: "resources.regulatoryHeat", op: ">=", value: 38 },
      { path: "counters.processorPatience", op: "<=", value: 55 },
      { path: "counters.complaintEcho", op: ">=", value: 30 }
    ]
  },
  options: [
    {
      id: "cooperate_fully",
      label: "Cooperate Fully",
      description: "配合解释并收紧宣传，让通道先稳住。",
      immediateEffects: [
        { path: "resources.cash", delta: -7, reason: "compliance and review cost" },
        { path: "resources.flow", delta: -5, reason: "less aggressive claims" },
        { path: "resources.regulatoryHeat", delta: -8, reason: "cleaner posture" },
        { path: "counters.processorPatience", delta: 12, reason: "processor confidence" }
      ],
      delayedEffects: []
    },
    {
      id: "patch_numbers_buy_time",
      label: "Patch the Numbers and Buy Time",
      description: "整理口径，处理几个最难看的指标，先把本周撑过去。",
      immediateEffects: [
        { path: "resources.cash", delta: 3, reason: "avoid immediate compliance cost" },
        { path: "counters.processorPatience", delta: -6, reason: "thin explanation" },
        { path: "resources.regulatoryHeat", delta: 3, reason: "paper trail risk" }
      ],
      delayedEffects: [
        {
          delayWeeks: 2,
          effects: [
            { path: "resources.regulatoryHeat", delta: 7, reason: "processor follow-up" },
            { path: "resources.trust", delta: -4, reason: "slower payout handling" }
          ]
        }
      ]
    },
    {
      id: "shift_flexible_channel",
      label: "Shift to a More Flexible Channel",
      description: "换一个更能容忍灰区的通道，保住增长速度。",
      immediateEffects: [
        { path: "resources.cash", delta: 5, reason: "growth channel preserved" },
        { path: "resources.flow", delta: 4, reason: "less friction" },
        { path: "resources.regulatoryHeat", delta: 9, reason: "riskier channel" },
        { path: "resources.trust", delta: -5, reason: "payment quality worsens" }
      ],
      delayedEffects: [
        {
          delayWeeks: 2,
          effects: [
            { path: "counters.processorPatience", delta: -12, reason: "channel instability" },
            { path: "resources.regulatoryHeat", delta: 8, reason: "channel risk compounds" }
          ]
        }
      ]
    }
  ],
  flagsSet: ["processorWarned"]
}
```

### 5.6 First Regulator Letter

```ts
{
  id: "first_regulator_letter",
  title: "First Regulator Letter",
  body: "一封简短但冰冷的问询函到了。对方想知道你的宣传表述、资金支持说法，以及 payout 处理标准到底是什么意思。",
  minWeek: 12,
  maxWeek: 12,
  weight: 80,
  tags: ["regulatory", "reckoning", "language"],
  trigger: {
    any: [
      { path: "resources.regulatoryHeat", op: ">=", value: 50 },
      { path: "counters.processorPatience", op: "<=", value: 40 }
    ]
  },
  options: [
    {
      id: "respond_and_tighten_up",
      label: "Respond and Tighten Up",
      description: "正面回应，收缩最危险的宣传和规则口径。",
      immediateEffects: [
        { path: "resources.flow", delta: -8, reason: "marketing restrictions" },
        { path: "resources.cash", delta: -8, reason: "legal and compliance cost" },
        { path: "resources.trust", delta: 4, reason: "credible response" },
        { path: "resources.regulatoryHeat", delta: -10, reason: "reduced exposure" }
      ],
      delayedEffects: []
    },
    {
      id: "delay_through_counsel",
      label: "Delay Through Counsel",
      description: "交给法务拖延，争取几周经营空间。",
      immediateEffects: [
        { path: "resources.cash", delta: -3, reason: "legal spend" },
        { path: "resources.regulatoryHeat", delta: 3, reason: "unresolved inquiry" }
      ],
      delayedEffects: [
        {
          delayWeeks: 2,
          effects: [
            { path: "resources.regulatoryHeat", delta: 12, reason: "unanswered questions compound" }
          ]
        }
      ]
    },
    {
      id: "shift_attention_elsewhere",
      label: "Shift Attention Elsewhere",
      description: "把增长重点转去更松的市场，别让这封信定义全局。",
      immediateEffects: [
        { path: "resources.flow", delta: 3, reason: "new market push" },
        { path: "resources.cash", delta: 3, reason: "growth preserved" },
        { path: "resources.trust", delta: -4, reason: "inconsistent posture" },
        { path: "resources.regulatoryHeat", delta: 7, reason: "jurisdiction hopping" }
      ],
      delayedEffects: []
    }
  ],
  flagsSet: ["regulatorContacted"]
}
```

## 6. Weekly Digest Seed

```ts
export const weeklyDigestSeeds = [
  {
    week: 1,
    title: "Week 1 - Strong Start",
    targetEmotion: "The business feels easy to understand and easy to grow.",
    riskLine: "Nothing serious yet. That's how it starts.",
    feed: [
      { source: "internal", tone: "positive", text: "Sign-ups beat the internal target." },
      { source: "user", tone: "neutral", text: "A few users say the rules feel tight, but the thread is small." }
    ]
  },
  {
    week: 2,
    title: "Week 2 - Cheap Traffic, Fast Money",
    targetEmotion: "Rules begin to feel like a profit instrument.",
    riskLine: "The traffic is getting easier to buy and harder to satisfy.",
    feed: [
      { source: "kol", tone: "positive", text: "This platform is getting loud in the right circles." },
      { source: "internal", tone: "warning", text: "Low-quality traffic is rising faster than support capacity." }
    ]
  },
  {
    week: 3,
    title: "Week 3 - Growth Still Looks Clean",
    targetEmotion: "The first dirty choice feels practical, not evil.",
    riskLine: "The numbers look clean because the cohort is still new.",
    feed: [
      { source: "internal", tone: "positive", text: "The promo forecast would restore weekly cash momentum." },
      { source: "user", tone: "neutral", text: "Discount traffic is asking more basic questions before buying." }
    ]
  },
  {
    week: 4,
    title: "Week 4 - Strong Growth, Strange Smell",
    targetEmotion: "Winners begin to look useful and expensive.",
    riskLine: "A platform looks more real when it starts owing real money.",
    feed: [
      { source: "user", tone: "positive", text: "Someone posted a clean payout screenshot." },
      { source: "internal", tone: "warning", text: "Risk notes that better users are staying longer." }
    ]
  },
  {
    week: 5,
    title: "Week 5 - More Sign-Ups, More Friction",
    targetEmotion: "Early choices start returning as operational pressure.",
    riskLine: "Users are repeating the same complaint in different words.",
    feed: [
      { source: "user", tone: "warning", text: "Several users say they keep failing by almost nothing." },
      { source: "internal", tone: "warning", text: "Support load is rising faster than the headline funnel." }
    ]
  },
  {
    week: 6,
    title: "Week 6 - The Winners Are Getting Louder",
    targetEmotion: "The player feels happy and nervous about proof.",
    riskLine: "The story is improving. So is the bill behind it.",
    feed: [
      { source: "kol", tone: "positive", text: "A winner thread is moving sign-ups without paid spend." },
      { source: "internal", tone: "warning", text: "The same thread is attracting users with better discipline." }
    ]
  },
  {
    week: 7,
    title: "Week 7 - Cash Up, Confidence Splitting",
    targetEmotion: "The dashboard still looks okay, but the platform feels less unified.",
    riskLine: "The outside still sees growth. Inside, the user mix is changing.",
    feed: [
      { source: "user", tone: "neutral", text: "Some users call the platform legit. Others call it engineered." },
      { source: "internal", tone: "warning", text: "Finance likes the week. Support does not." }
    ]
  },
  {
    week: 8,
    title: "Week 8 - Good Numbers, Bad Temperature",
    targetEmotion: "Competent users become a distinct threat.",
    riskLine: "Competent users are not just better customers. They are different risk.",
    feed: [
      { source: "internal", tone: "critical", text: "A small cluster is passing challenges with unusual consistency." },
      { source: "user", tone: "positive", text: "The platform is starting to look real to more serious traders." }
    ]
  },
  {
    week: 9,
    title: "Week 9 - Trust Starts to Crack",
    targetEmotion: "The player sees that public mood has memory.",
    riskLine: "What users whispered earlier is now easier to find.",
    feed: [
      { source: "user", tone: "warning", text: "Old complaints are being linked into one larger thread." },
      { source: "internal", tone: "warning", text: "Support says users are quoting past promises back at the platform." }
    ]
  },
  {
    week: 10,
    title: "Week 10 - The Cost of Looking Real",
    targetEmotion: "Payment and regulation become operating constraints.",
    riskLine: "The business still runs. The tolerance around it is thinning.",
    feed: [
      { source: "payment", tone: "critical", text: "Recent dispute ratios require further explanation." },
      { source: "internal", tone: "warning", text: "Payout language and actual handling are drifting apart." }
    ]
  },
  {
    week: 11,
    title: "Week 11 - Everyone Is Watching Different Things",
    targetEmotion: "The player sees the platform has several audiences at once.",
    riskLine: "Your platform has one dashboard and five audiences.",
    feed: [
      { source: "kol", tone: "positive", text: "Marketing wants one more push before the quarter closes." },
      { source: "payment", tone: "warning", text: "Risk asks whether payout language should be tightened." },
      { source: "internal", tone: "warning", text: "Support says old tickets are becoming public receipts." }
    ]
  },
  {
    week: 12,
    title: "Week 12 - The Machine Wants Feeding",
    targetEmotion: "The player feels alive, implicated, and curious to rerun.",
    riskLine: "You are not finished. You are becoming legible.",
    feed: [
      { source: "internal", tone: "warning", text: "The board review asks what kind of platform this is becoming." },
      { source: "regulator", tone: "warning", text: "Several public claims now deserve cleaner definitions." }
    ]
  }
];
```

## 7. Status Label Seed

```ts
export const statusLabels = {
  cash: [
    { min: 80, label: "Strong" },
    { min: 55, label: "Comfortable" },
    { min: 35, label: "Tight" },
    { min: 0, label: "Bleeding" }
  ],
  flow: [
    { min: 75, label: "Hot" },
    { min: 50, label: "Rising" },
    { min: 30, label: "Cooling" },
    { min: 0, label: "Drying" }
  ],
  passRate: [
    { min: 25, label: "Leaking" },
    { min: 16, label: "Loose" },
    { min: 8, label: "Engineered" },
    { min: 0, label: "Tight" }
  ],
  payoutLiability: [
    { min: 65, label: "Critical" },
    { min: 40, label: "Loaded" },
    { min: 20, label: "Building" },
    { min: 0, label: "Low" }
  ],
  trust: [
    { min: 70, label: "Stable" },
    { min: 45, label: "Mixed" },
    { min: 25, label: "Slipping" },
    { min: 0, label: "Poisoned" }
  ],
  regulatoryHeat: [
    { min: 65, label: "Closing In" },
    { min: 40, label: "Watching" },
    { min: 20, label: "Warm" },
    { min: 0, label: "Quiet" }
  ]
};
```

## 8. Ending Preview Seed

```ts
export const endingPreviews = [
  {
    id: "dirty_momentum",
    title: "Dirty Momentum",
    subtitle: "The machine is profitable. It is also learning what it can get away with.",
    trigger: {
      all: [
        { path: "resources.cash", op: ">=", value: 65 },
        { path: "resources.trust", op: "<=", value: 42 }
      ]
    },
    replayPrompt: "Try running the same growth story without letting every shortcut become policy."
  },
  {
    id: "credibility_is_expensive",
    title: "Credibility Is Getting Expensive",
    subtitle: "The platform looks more real because it is carrying more real obligations.",
    trigger: {
      all: [
        { path: "resources.trust", op: ">=", value: 55 },
        { path: "resources.payoutLiability", op: ">=", value: 42 }
      ]
    },
    replayPrompt: "Try proving legitimacy without letting winners define your balance sheet."
  },
  {
    id: "room_is_shrinking",
    title: "The Room Is Shrinking",
    subtitle: "You can still operate, just not as loosely as before.",
    trigger: {
      all: [
        { path: "resources.regulatoryHeat", op: ">=", value: 55 }
      ]
    },
    replayPrompt: "Try growing before the paper trail starts writing your strategy for you."
  },
  {
    id: "trust_collapse_preview",
    title: "Trust Collapse Preview",
    subtitle: "The money did not stop first. Belief did.",
    trigger: {
      all: [
        { path: "resources.trust", op: "<=", value: 25 }
      ]
    },
    replayPrompt: "Try taking fewer easy cash saves and see which costs arrive later instead."
  },
  {
    id: "payout_shock_preview",
    title: "Payout Shock Preview",
    subtitle: "Winners helped sell the story. Then they became the bill.",
    trigger: {
      all: [
        { path: "resources.payoutLiability", op: ">=", value: 55 },
        { path: "resources.cash", op: "<=", value: 45 }
      ]
    },
    replayPrompt: "Try being less generous, or being generous only after you can afford it."
  }
];
```

## 一句话总结

Prototype Content JSON Seed 的目标，不是替代设计文档，

而是把设计文档里最该进原型的东西先压成一块可搬运的数据：

**让下一步不再从空白项目开始，而是从一台已经有声音、有事件、有误判路径的机器开始。**
