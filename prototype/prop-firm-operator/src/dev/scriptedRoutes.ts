import { founderModes } from "../data/founder.seed";
import { initialRunSeed } from "../data/run.seed";
import { scenarios } from "../data/scenario.seed";
import { createInitialRun } from "../sim/createInitialRun";
import { simulateWeek } from "../sim/simulateWeek";
import type { ControlLevel, EventCard, PlayerControls, RunState } from "../sim/types";

type ScriptedRoute = {
  id: string;
  label: string;
  controls: Required<Record<keyof PlayerControls, ControlLevel>>;
  optionByEvent: Record<string, string>;
};

export const scriptedRoutes: ScriptedRoute[] = [
  {
    id: "dirty_growth",
    label: "Dirty Growth",
    controls: {
      challengeFee: 4,
      profitTarget: 4,
      maxDrawdown: 2,
      payoutSplit: 2,
      marketingTone: 5,
    },
    optionByEvent: {
      weekend_promo_temptation: "launch_the_promo",
      feels_rigged_forum_post: "push_back_hard",
      viral_winner_thread: "amplify_it",
      silent_winners_cluster: "tighten_reviews",
      payment_processor_warning: "shift_flexible_channel",
      first_regulator_letter: "shift_attention_elsewhere",
    },
  },
  {
    id: "pseudo_fair",
    label: "Pseudo Fair",
    controls: {
      challengeFee: 3,
      profitTarget: 3,
      maxDrawdown: 4,
      payoutSplit: 4,
      marketingTone: 3,
    },
    optionByEvent: {
      weekend_promo_temptation: "run_smaller_offer",
      feels_rigged_forum_post: "ease_one_rule_slightly",
      viral_winner_thread: "reference_it_carefully",
      silent_winners_cluster: "hedge_early",
      payment_processor_warning: "cooperate_fully",
      first_regulator_letter: "respond_and_tighten_up",
    },
  },
  {
    id: "rational_tightening",
    label: "Rational Tightening",
    controls: {
      challengeFee: 4,
      profitTarget: 5,
      maxDrawdown: 1,
      payoutSplit: 2,
      marketingTone: 2,
    },
    optionByEvent: {
      weekend_promo_temptation: "hold_the_line",
      feels_rigged_forum_post: "publish_calm_response",
      viral_winner_thread: "let_it_travel_organically",
      silent_winners_cluster: "tighten_reviews",
      payment_processor_warning: "patch_numbers_buy_time",
      first_regulator_letter: "delay_through_counsel",
    },
  },
];

export function createBaseRun() {
  return createInitialRun({
    seed: initialRunSeed,
    founder: founderModes[0],
    scenario: scenarios[0],
  });
}

export function runScriptedRoute(route: ScriptedRoute): RunState {
  let state = createBaseRun();

  while (state.status !== "ended") {
    state = simulateWeek(state, {
      controls: route.controls,
      chooseOption: (event: EventCard) =>
        route.optionByEvent[event.id] ?? event.options[0].id,
    });
  }

  return state;
}

export function runAllScriptedRoutes() {
  return scriptedRoutes.map((route) => ({
    route,
    state: runScriptedRoute(route),
  }));
}
