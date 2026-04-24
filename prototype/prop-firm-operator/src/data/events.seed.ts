import type { EventCard } from "../sim/types";

export const eventCards: EventCard[] = [
  {
    id: "weekend_promo_temptation",
    title: "Weekend Promo Temptation",
    body: "Weekly cash could look better. Marketing wants a time-boxed discount that restores flow now and leaves cohort quality for later.",
    minWeek: 3,
    maxWeek: 3,
    weight: 100,
    tags: ["cash", "growth", "promo", "temptation"],
    trigger: {
      any: [
        { path: "resources.cash", op: "<=", value: 75 },
        { path: "resources.flow", op: "<=", value: 90 },
      ],
    },
    options: [
      {
        id: "launch_the_promo",
        label: "Launch the Promo",
        description: "Pull cash back first. The cohort problem can wait.",
        directionChips: [
          { label: "Cash up", tone: "good" },
          { label: "Flow up", tone: "good" },
          { label: "Promo debt", tone: "risk" },
        ],
        immediateEffects: [
          { path: "resources.cash", delta: 10, reason: "promo revenue" },
          { path: "resources.flow", delta: 8, reason: "discount traffic" },
          { path: "resources.trust", delta: -4, reason: "cheapened offer" },
          { path: "counters.promoDebt", delta: 10, reason: "low quality cohort" },
        ],
        delayedEffects: [
          {
            delayWeeks: 2,
            narrativeHint:
              "Promo users are starting to sound different from organic users.",
            effects: [
              {
                path: "counters.complaintEcho",
                delta: 9,
                reason: "promo cohort frustration",
              },
              {
                path: "audience.gambler",
                delta: 0.04,
                reason: "discount-chasing retry users",
              },
              {
                path: "audience.novice",
                delta: 0.02,
                reason: "promo novice inflow",
              },
              {
                path: "resources.trust",
                delta: -3,
                reason: "promo quality backlash",
              },
            ],
          },
        ],
        flagsSet: ["promoUsed"],
      },
      {
        id: "run_smaller_offer",
        label: "Run a Smaller Offer",
        description: "Recover some cash without opening the door too wide.",
        directionChips: [
          { label: "Cash up", tone: "good" },
          { label: "Moderate debt", tone: "neutral" },
        ],
        immediateEffects: [
          { path: "resources.cash", delta: 5, reason: "limited promo revenue" },
          { path: "resources.flow", delta: 3, reason: "limited urgency" },
          {
            path: "counters.promoDebt",
            delta: 4,
            reason: "moderate user quality debt",
          },
        ],
        delayedEffects: [
          {
            delayWeeks: 2,
            narrativeHint: "The smaller promo still leaves a support aftertaste.",
            effects: [
              {
                path: "counters.complaintEcho",
                delta: 4,
                reason: "moderate promo frustration",
              },
            ],
          },
        ],
      },
      {
        id: "hold_the_line",
        label: "Hold the Line",
        description: "Accept a worse-looking week to avoid dirtying the funnel.",
        directionChips: [
          { label: "Cash down", tone: "risk" },
          { label: "Trust up", tone: "good" },
        ],
        immediateEffects: [
          { path: "resources.cash", delta: -4, reason: "missed promo revenue" },
          { path: "resources.flow", delta: -3, reason: "less urgency" },
          { path: "resources.trust", delta: 3, reason: "brand discipline" },
        ],
        delayedEffects: [],
      },
    ],
  },
  {
    id: "feels_rigged_forum_post",
    title: "\"Feels Rigged\" Forum Post",
    body: "A community thread claims the rules are tuned so users always miss by a little. It is not viral yet, but replies are forming a pattern.",
    minWeek: 5,
    maxWeek: 9,
    weight: 65,
    tags: ["trust", "complaints", "rules"],
    trigger: {
      any: [
        { path: "counters.complaintEcho", op: ">=", value: 22 },
        { path: "resources.passRate", op: "<=", value: 8 },
      ],
    },
    options: [
      {
        id: "publish_calm_response",
        label: "Publish a Calm Response",
        description: "Explain the rules without changing the structure.",
        directionChips: [
          { label: "Trust up", tone: "good" },
          { label: "Comms cost", tone: "risk" },
        ],
        immediateEffects: [
          { path: "resources.trust", delta: 3, reason: "calm explanation" },
          { path: "resources.cash", delta: -2, reason: "support and comms cost" },
        ],
        delayedEffects: [
          {
            delayWeeks: 2,
            narrativeHint: "Some users accept the explanation. Others archive it.",
            effects: [
              {
                path: "counters.complaintEcho",
                delta: -3,
                reason: "some users accept explanation",
              },
            ],
          },
        ],
      },
      {
        id: "ease_one_rule_slightly",
        label: "Ease One Rule Slightly",
        description: "Make the platform look passable again.",
        directionChips: [
          { label: "Trust up", tone: "good" },
          { label: "Liability up", tone: "risk" },
        ],
        immediateEffects: [
          { path: "resources.passRate", delta: 3, reason: "rule easing" },
          { path: "resources.trust", delta: 5, reason: "visible concession" },
          {
            path: "resources.payoutLiability",
            delta: 5,
            reason: "more viable accounts",
          },
          { path: "resources.cash", delta: -4, reason: "weaker failure economics" },
        ],
        delayedEffects: [
          {
            delayWeeks: 2,
            narrativeHint: "The concession is making payout stories easier to produce.",
            effects: [
              {
                path: "counters.winnerVisibility",
                delta: 4,
                reason: "easier path to payout stories",
              },
              {
                path: "counters.skilledCluster",
                delta: 3,
                reason: "better players notice softness",
              },
            ],
          },
        ],
      },
      {
        id: "push_back_hard",
        label: "Push Back Hard",
        description: "Refuse to let complaints define the platform.",
        directionChips: [
          { label: "Cash protected", tone: "good" },
          { label: "Trust down", tone: "critical" },
        ],
        immediateEffects: [
          { path: "resources.cash", delta: 2, reason: "no concession" },
          { path: "resources.trust", delta: -6, reason: "hostile posture" },
          {
            path: "counters.complaintEcho",
            delta: 8,
            reason: "complaints harden",
          },
        ],
        delayedEffects: [
          {
            delayWeeks: 2,
            narrativeHint: "The hard response is easier to quote than to forget.",
            effects: [
              {
                path: "resources.regulatoryHeat",
                delta: 5,
                reason: "public dispute trail",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "viral_winner_thread",
    title: "Viral Winner Thread",
    body: "A user posts a complete payout flow. Marketing wants to amplify it. Risk notes that proof attracts better players.",
    minWeek: 6,
    maxWeek: 6,
    weight: 100,
    tags: ["winner", "trust", "liability", "growth"],
    trigger: {
      any: [
        { path: "counters.winnerVisibility", op: ">=", value: 12 },
        { path: "resources.trust", op: ">=", value: 45 },
      ],
    },
    options: [
      {
        id: "amplify_it",
        label: "Amplify It",
        description: "Push the winner story through every channel.",
        directionChips: [
          { label: "Flow up", tone: "good" },
          { label: "Trust up", tone: "good" },
          { label: "Skilled risk", tone: "risk" },
        ],
        immediateEffects: [
          { path: "resources.flow", delta: 9, reason: "winner story conversion" },
          { path: "resources.trust", delta: 6, reason: "proof of payout" },
          {
            path: "counters.winnerVisibility",
            delta: 10,
            reason: "amplified story",
          },
        ],
        delayedEffects: [
          {
            delayWeeks: 2,
            narrativeHint:
              "The winner story is attracting a more competent crowd.",
            effects: [
              {
                path: "resources.payoutLiability",
                delta: 10,
                reason: "better entrants",
              },
              {
                path: "counters.skilledCluster",
                delta: 8,
                reason: "skilled users follow proof",
              },
              {
                path: "audience.skilled",
                delta: 0.04,
                reason: "proof attracts real traders",
              },
            ],
          },
        ],
        flagsSet: ["winnerThreadAmplified"],
      },
      {
        id: "reference_it_carefully",
        label: "Reference It Carefully",
        description: "Let the proof exist without turning it into a promise.",
        directionChips: [
          { label: "Trust up", tone: "good" },
          { label: "Limited liability", tone: "neutral" },
        ],
        immediateEffects: [
          { path: "resources.flow", delta: 4, reason: "controlled proof" },
          { path: "resources.trust", delta: 4, reason: "credible payout" },
          {
            path: "counters.winnerVisibility",
            delta: 4,
            reason: "limited spread",
          },
        ],
        delayedEffects: [
          {
            delayWeeks: 3,
            narrativeHint: "The controlled proof still reaches sharper users.",
            effects: [
              {
                path: "resources.payoutLiability",
                delta: 4,
                reason: "some skilled attention",
              },
            ],
          },
        ],
      },
      {
        id: "let_it_travel_organically",
        label: "Let It Travel Organically",
        description: "Avoid attracting too many people who can actually win.",
        directionChips: [
          { label: "Trust up", tone: "good" },
          { label: "Growth missed", tone: "risk" },
        ],
        immediateEffects: [
          { path: "resources.trust", delta: 2, reason: "organic credibility" },
          { path: "resources.flow", delta: 1, reason: "limited spread" },
          { path: "resources.cash", delta: -1, reason: "missed growth opportunity" },
        ],
        delayedEffects: [],
      },
    ],
  },
  {
    id: "silent_winners_cluster",
    title: "Silent Winners Cluster",
    body: "Risk finds a small group of unusually consistent accounts. They are not loud, but they look like they know what they are doing.",
    minWeek: 8,
    maxWeek: 8,
    weight: 100,
    tags: ["winner", "risk", "payout"],
    trigger: {
      any: [
        { path: "counters.skilledCluster", op: ">=", value: 12 },
        { path: "resources.payoutLiability", op: ">=", value: 28 },
      ],
    },
    options: [
      {
        id: "hedge_early",
        label: "Hedge Early",
        description: "Pay the cost before the tail gets louder.",
        directionChips: [
          { label: "Cash down", tone: "risk" },
          { label: "Liability down", tone: "good" },
        ],
        immediateEffects: [
          { path: "resources.cash", delta: -8, reason: "hedging cost" },
          { path: "resources.payoutLiability", delta: -8, reason: "risk covered" },
          { path: "resources.trust", delta: 3, reason: "cleaner payout posture" },
        ],
        delayedEffects: [],
      },
      {
        id: "tighten_reviews",
        label: "Tighten Reviews",
        description: "Slow them down before they become this month's bill.",
        directionChips: [
          { label: "Cash protected", tone: "good" },
          { label: "Trust down", tone: "risk" },
          { label: "Heat later", tone: "critical" },
        ],
        immediateEffects: [
          { path: "resources.cash", delta: 4, reason: "slower payout approval" },
          {
            path: "resources.payoutLiability",
            delta: -4,
            reason: "review friction",
          },
          { path: "resources.trust", delta: -5, reason: "winner friction" },
          {
            path: "counters.complaintEcho",
            delta: 5,
            reason: "review suspicion",
          },
        ],
        delayedEffects: [
          {
            delayWeeks: 2,
            narrativeHint: "Review friction is turning into dispute evidence.",
            effects: [
              {
                path: "resources.regulatoryHeat",
                delta: 4,
                reason: "payout review complaints",
              },
              {
                path: "counters.processorPatience",
                delta: -6,
                reason: "dispute signal",
              },
            ],
          },
        ],
        flagsSet: ["reviewsTightened"],
      },
      {
        id: "watch_for_now",
        label: "Watch for Now",
        description: "Preserve this week's cash and brand temperature.",
        directionChips: [
          { label: "Cash held", tone: "good" },
          { label: "Cluster grows", tone: "risk" },
        ],
        immediateEffects: [
          { path: "resources.cash", delta: 2, reason: "no intervention cost" },
          {
            path: "counters.skilledCluster",
            delta: 4,
            reason: "cluster continues",
          },
        ],
        delayedEffects: [
          {
            delayWeeks: 2,
            narrativeHint: "The quiet cluster has started to mature into payouts.",
            effects: [
              {
                path: "resources.payoutLiability",
                delta: 10,
                reason: "cluster matures",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "payment_processor_warning",
    title: "Payment Processor Warning",
    body: "The payment processor asks for an explanation of recent disputes and payout handling before it rechecks your terms.",
    minWeek: 10,
    maxWeek: 10,
    weight: 100,
    tags: ["payment", "regulatory", "operating_room"],
    trigger: {
      any: [
        { path: "resources.regulatoryHeat", op: ">=", value: 38 },
        { path: "counters.processorPatience", op: "<=", value: 55 },
        { path: "counters.complaintEcho", op: ">=", value: 30 },
      ],
    },
    options: [
      {
        id: "cooperate_fully",
        label: "Cooperate Fully",
        description: "Tighten claims and keep the channel stable.",
        directionChips: [
          { label: "Heat down", tone: "good" },
          { label: "Cash down", tone: "risk" },
        ],
        immediateEffects: [
          { path: "resources.cash", delta: -7, reason: "compliance and review cost" },
          { path: "resources.flow", delta: -5, reason: "less aggressive claims" },
          {
            path: "resources.regulatoryHeat",
            delta: -8,
            reason: "cleaner posture",
          },
          {
            path: "counters.processorPatience",
            delta: 12,
            reason: "processor confidence",
          },
        ],
        delayedEffects: [],
      },
      {
        id: "patch_numbers_buy_time",
        label: "Patch the Numbers and Buy Time",
        description: "Clean up the worst-looking metrics and keep operating.",
        directionChips: [
          { label: "Cash up", tone: "good" },
          { label: "Paper trail", tone: "critical" },
        ],
        immediateEffects: [
          { path: "resources.cash", delta: 3, reason: "avoid immediate compliance cost" },
          {
            path: "counters.processorPatience",
            delta: -6,
            reason: "thin explanation",
          },
          { path: "resources.regulatoryHeat", delta: 3, reason: "paper trail risk" },
        ],
        delayedEffects: [
          {
            delayWeeks: 2,
            narrativeHint: "The patched explanation is drawing a follow-up.",
            effects: [
              {
                path: "resources.regulatoryHeat",
                delta: 7,
                reason: "processor follow-up",
              },
              {
                path: "resources.trust",
                delta: -4,
                reason: "slower payout handling",
              },
            ],
          },
        ],
        flagsSet: ["processorWarned"],
      },
      {
        id: "shift_flexible_channel",
        label: "Shift to a More Flexible Channel",
        description: "Preserve growth through a channel that tolerates more gray.",
        directionChips: [
          { label: "Flow up", tone: "good" },
          { label: "Heat up", tone: "critical" },
        ],
        immediateEffects: [
          { path: "resources.cash", delta: 5, reason: "growth channel preserved" },
          { path: "resources.flow", delta: 4, reason: "less friction" },
          { path: "resources.regulatoryHeat", delta: 9, reason: "riskier channel" },
          { path: "resources.trust", delta: -5, reason: "payment quality worsens" },
        ],
        delayedEffects: [
          {
            delayWeeks: 2,
            narrativeHint: "The flexible channel is becoming unstable.",
            effects: [
              {
                path: "counters.processorPatience",
                delta: -12,
                reason: "channel instability",
              },
              {
                path: "resources.regulatoryHeat",
                delta: 8,
                reason: "channel risk compounds",
              },
            ],
          },
        ],
        flagsSet: ["processorWarned"],
      },
    ],
  },
  {
    id: "first_regulator_letter",
    title: "First Regulator Letter",
    body: "A short, cold inquiry arrives. It asks what your claims, funding language, and payout standards actually mean.",
    minWeek: 12,
    maxWeek: 12,
    weight: 80,
    tags: ["regulatory", "reckoning", "language"],
    trigger: {
      any: [
        { path: "resources.regulatoryHeat", op: ">=", value: 50 },
        { path: "counters.processorPatience", op: "<=", value: 40 },
      ],
    },
    options: [
      {
        id: "respond_and_tighten_up",
        label: "Respond and Tighten Up",
        description: "Answer directly and shrink the riskiest claims.",
        directionChips: [
          { label: "Heat down", tone: "good" },
          { label: "Flow down", tone: "risk" },
        ],
        immediateEffects: [
          { path: "resources.flow", delta: -8, reason: "marketing restrictions" },
          { path: "resources.cash", delta: -8, reason: "legal and compliance cost" },
          { path: "resources.trust", delta: 4, reason: "credible response" },
          {
            path: "resources.regulatoryHeat",
            delta: -10,
            reason: "reduced exposure",
          },
        ],
        delayedEffects: [],
        flagsSet: ["regulatorContacted"],
      },
      {
        id: "delay_through_counsel",
        label: "Delay Through Counsel",
        description: "Buy a little more operating room.",
        directionChips: [
          { label: "Cash down", tone: "risk" },
          { label: "Heat later", tone: "critical" },
        ],
        immediateEffects: [
          { path: "resources.cash", delta: -3, reason: "legal spend" },
          { path: "resources.regulatoryHeat", delta: 3, reason: "unresolved inquiry" },
        ],
        delayedEffects: [
          {
            delayWeeks: 2,
            narrativeHint: "Unanswered questions are compounding.",
            effects: [
              {
                path: "resources.regulatoryHeat",
                delta: 12,
                reason: "unanswered questions compound",
              },
            ],
          },
        ],
        flagsSet: ["regulatorContacted"],
      },
      {
        id: "shift_attention_elsewhere",
        label: "Shift Attention Elsewhere",
        description: "Move growth toward looser markets.",
        directionChips: [
          { label: "Flow up", tone: "good" },
          { label: "Trust down", tone: "risk" },
          { label: "Heat up", tone: "critical" },
        ],
        immediateEffects: [
          { path: "resources.flow", delta: 3, reason: "new market push" },
          { path: "resources.cash", delta: 3, reason: "growth preserved" },
          { path: "resources.trust", delta: -4, reason: "inconsistent posture" },
          { path: "resources.regulatoryHeat", delta: 7, reason: "jurisdiction hopping" },
        ],
        delayedEffects: [],
        flagsSet: ["regulatorContacted"],
      },
    ],
  },
];
