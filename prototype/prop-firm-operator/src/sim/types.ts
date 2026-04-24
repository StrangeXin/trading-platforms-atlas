export type ResourceKey =
  | "cash"
  | "flow"
  | "passRate"
  | "payoutLiability"
  | "trust"
  | "regulatoryHeat";

export type CounterKey =
  | "complaintEcho"
  | "winnerVisibility"
  | "promoDebt"
  | "processorPatience"
  | "skilledCluster";

export type AudienceKey = "novice" | "gambler" | "skilled";

export type ControlKey =
  | "challengeFee"
  | "profitTarget"
  | "maxDrawdown"
  | "payoutSplit"
  | "marketingTone";

export type ControlLevel = 1 | 2 | 3 | 4 | 5;
export type LockableControlLevel = ControlLevel | "locked";

export type Resources = Record<ResourceKey, number>;
export type HiddenCounters = Record<CounterKey, number>;
export type AudienceMix = Record<AudienceKey, number>;

export type PlayerControls = {
  challengeFee: ControlLevel;
  profitTarget: ControlLevel;
  maxDrawdown: LockableControlLevel;
  payoutSplit: LockableControlLevel;
  marketingTone: ControlLevel;
};

export type ControlAvailability = {
  fromWeek: number;
  toWeek: number;
  challengeFee: [ControlLevel, ControlLevel];
  profitTarget: [ControlLevel, ControlLevel];
  maxDrawdown: [ControlLevel, ControlLevel] | "locked";
  payoutSplit: [ControlLevel, ControlLevel] | "locked";
  marketingTone: [ControlLevel, ControlLevel];
};

export type RunFlags = {
  promoUsed: boolean;
  winnerThreadAmplified: boolean;
  processorWarned: boolean;
  regulatorContacted: boolean;
  payoutDelayed: boolean;
  reviewsTightened: boolean;
};

export type EffectTarget =
  | `resources.${ResourceKey}`
  | `counters.${CounterKey}`
  | `audience.${AudienceKey}`;

export type Effect = {
  path: EffectTarget;
  delta: number;
  reason: string;
};

export type DelayedEffectTemplate = {
  delayWeeks: number;
  effects: Effect[];
  narrativeHint?: string;
};

export type DelayedEffect = DelayedEffectTemplate & {
  id: string;
  createdWeek: number;
  applyWeek: number;
  sourceType: "control" | "event" | "scenario" | "founder";
  sourceId: string;
};

export type TriggerCondition = {
  path:
    | `resources.${ResourceKey}`
    | `counters.${CounterKey}`
    | `audience.${AudienceKey}`
    | `flags.${keyof RunFlags}`
    | "currentWeek";
  op: ">=" | ">" | "<=" | "<" | "==" | "!=";
  value: number | string | boolean;
};

export type EventTrigger = {
  all?: TriggerCondition[];
  any?: TriggerCondition[];
  blockedByFlags?: Array<keyof RunFlags>;
  requiredFlags?: Array<keyof RunFlags>;
};

export type EventDirectionChip = {
  label: string;
  tone: "good" | "neutral" | "risk" | "critical";
};

export type EventOption = {
  id: string;
  label: string;
  description: string;
  immediateEffects: Effect[];
  delayedEffects: DelayedEffectTemplate[];
  directionChips: EventDirectionChip[];
  flagsSet?: Array<keyof RunFlags>;
};

export type EventCard = {
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

export type EventScore = {
  eventId: string;
  score: number;
  reason: string;
};

export type EventResolution = {
  eventId: string;
  optionId: string;
  title: string;
  optionLabel: string;
  immediateEffects: Effect[];
  delayedEffectsCreated: DelayedEffect[];
};

export type WeeklyOutcome = {
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
  effectivePassRate: number;
};

export type NarrativeItem = {
  source: "user" | "kol" | "internal" | "payment" | "regulator";
  text: string;
  tone: "positive" | "neutral" | "warning" | "critical";
  relatedMetricIds: string[];
};

export type RiskCard = {
  title: string;
  body: string;
  severity: "low" | "medium" | "high" | "critical";
  relatedCounterIds: CounterKey[];
};

export type WeekDigest = {
  title: string;
  subtitle?: string;
  headlineMetricIds: string[];
  narrativeFeed: NarrativeItem[];
  riskCard: RiskCard;
  statusLabels: Record<ResourceKey, string>;
  delayedEffectHints: string[];
};

export type WeekPhase = "temptation" | "crack" | "reveal" | "reckoning";

export type WeekSnapshot = {
  week: number;
  phase: WeekPhase;
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

export type FounderMode = {
  id: string;
  name: string;
  subtitle: string;
  weaknessLine: string;
  startingResourceMods: Partial<Resources>;
  startingCounterMods: Partial<HiddenCounters>;
  biasTags: string[];
  eventAdviceOverrides: Record<string, string>;
  endingVoice: Record<string, string>;
};

export type Scenario = {
  id: string;
  name: string;
  subtitle: string;
  misreadLine: string;
  startingResourceMods: Partial<Resources>;
  startingCounterMods: Partial<HiddenCounters>;
  audienceMods: Partial<AudienceMix>;
  eventWeightMods: Record<string, number>;
  digestTitlePool: string[];
  riskLinePool: string[];
};

export type EndingType =
  | "dirty_momentum"
  | "credibility_is_expensive"
  | "room_is_shrinking"
  | "crowd_still_believes"
  | "trust_collapse_preview"
  | "payout_shock_preview";

export type EndingEvidence = {
  label: string;
  detail: string;
  kind: "resource" | "counter-shadow" | "choice";
};

export type EndingPreview = {
  type: EndingType;
  title: string;
  subtitle: string;
  evidence: EndingEvidence[];
  evidenceMetricIds: string[];
  evidenceFlags: Array<keyof RunFlags>;
  replayPrompt: string;
};

export type RunState = {
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
  eventHistory: EventResolution[];
  snapshots: WeekSnapshot[];
  flags: RunFlags;
  eventScores: EventScore[];
  diagnosis?: EndingPreview;
  status: "active" | "preview" | "ended";
};

export type InitialRunSeed = Pick<
  RunState,
  | "platformName"
  | "founderModeId"
  | "scenarioId"
  | "maxWeeks"
  | "resources"
  | "counters"
  | "audience"
  | "controls"
>;

export type FormulaResult = {
  resources: Resources;
  counters: HiddenCounters;
  audience: AudienceMix;
  outcome: WeeklyOutcome;
};
