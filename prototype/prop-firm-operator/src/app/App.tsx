import { useMemo, useState } from "react";
import { founderModes } from "../data/founder.seed";
import { initialRunSeed } from "../data/run.seed";
import { scenarios } from "../data/scenario.seed";
import { downloadRouteExport } from "../state/routeExport";
import {
  getControlAvailability,
  getControlDisplayValue,
  isControlLocked,
  unlockReason,
} from "../sim/controlAvailability";
import { createInitialRun } from "../sim/createInitialRun";
import { phaseForCurrentWeek, phaseLabel, zoneFor } from "../sim/resourceZones";
import { peekWeekEvent, simulateWeek } from "../sim/simulateWeek";
import type {
  ControlKey,
  ControlLevel,
  EventCard,
  EventOption,
  ResourceKey,
  RunState,
} from "../sim/types";

const resourceLabels: Record<ResourceKey, string> = {
  cash: "Cash",
  flow: "Flow",
  passRate: "Pass Rate",
  payoutLiability: "Payout Liability",
  trust: "Trust",
  regulatoryHeat: "Regulatory Heat",
};

const controlLabels: Record<ControlKey, string> = {
  challengeFee: "Challenge Fee",
  profitTarget: "Profit Target",
  maxDrawdown: "Max Drawdown",
  payoutSplit: "Payout Split",
  marketingTone: "Marketing Tone",
};

const controlHints: Record<ControlKey, string> = {
  challengeFee: "Higher: faster cash, colder trust.",
  profitTarget: "Higher: fewer passes, more engineered margin.",
  maxDrawdown: "Wider: more believable, more expensive.",
  payoutSplit: "Higher: more trust, more winner liability.",
  marketingTone: "Louder: more flow, dirtier future cohort.",
};

function makeInitialRun() {
  return createInitialRun({
    seed: initialRunSeed,
    founder: founderModes[0],
    scenario: scenarios[0],
  });
}

function deltaFor(run: RunState, key: ResourceKey) {
  const last = run.snapshots.at(-1);
  if (!last) return 0;
  return last.resourcesEnd[key] - last.resourcesStart[key];
}

function formatDelta(value: number) {
  if (!value) return "0";
  return `${value > 0 ? "+" : ""}${value.toFixed(1)}`;
}

export function App() {
  const [run, setRun] = useState(makeInitialRun);
  const [pendingEvent, setPendingEvent] = useState<EventCard | null>(null);
  const latestSnapshot = run.snapshots.at(-1);
  const weekLabel = run.status === "ended" ? run.maxWeeks : run.currentWeek;
  const availability = useMemo(
    () => getControlAvailability(run.currentWeek),
    [run.currentWeek],
  );

  function resetRun() {
    setPendingEvent(null);
    setRun(makeInitialRun());
  }

  function updateControl(key: ControlKey, value: ControlLevel) {
    if (isControlLocked(key, run.currentWeek) || run.status === "ended") return;
    setRun((current) => ({
      ...current,
      controls: {
        ...current.controls,
        [key]: value,
      },
    }));
  }

  function runWeek() {
    if (run.status === "ended") return;
    const event = peekWeekEvent(run);
    if (event) {
      setPendingEvent(event);
      return;
    }
    setRun((current) => simulateWeek(current));
  }

  function chooseEventOption(event: EventCard, option: EventOption) {
    setRun((current) =>
      simulateWeek(current, {
        chooseOption: () => option.id,
      }),
    );
    setPendingEvent(null);
  }

  return (
    <main className="app-shell">
      <header className="topline">
        <div>
          <p className="eyebrow">Playable Prototype v0</p>
          <h1>{run.platformName}</h1>
        </div>
        <div className="run-meta">
          <span>Week {weekLabel}</span>
          <span>{phaseLabel(phaseForCurrentWeek(weekLabel))}</span>
          <span>{founderModes[0].name}</span>
          <span>{scenarios[0].name}</span>
        </div>
      </header>

      <section className="resource-grid" aria-label="Current resources">
        {(Object.keys(run.resources) as ResourceKey[]).map((key) => {
          const delta = deltaFor(run, key);
          const zone = zoneFor(key, run.resources[key]);
          return (
            <article className="resource-card" key={key}>
              <span>{resourceLabels[key]}</span>
              <strong>{Math.round(run.resources[key])}</strong>
              <em className={`zone zone-${zone.tone}`}>{zone.label}</em>
              <em className={delta < 0 ? "delta bad" : delta > 0 ? "delta good" : "delta"}>
                {formatDelta(delta)}
              </em>
            </article>
          );
        })}
      </section>

      <section className="workbench">
        <section className="control-panel" aria-label="Weekly controls">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Decision Surface</p>
              <h2>Weekly Controls</h2>
            </div>
            <button className="primary-action" onClick={runWeek} disabled={run.status === "ended"}>
              Run Week
            </button>
          </div>

          {(Object.keys(controlLabels) as ControlKey[]).map((key) => {
            const locked = availability[key] === "locked";
            const value = getControlDisplayValue(run.controls, key);
            return (
              <label className={locked ? "control-row locked" : "control-row"} key={key}>
                <span>
                  <strong>{controlLabels[key]}</strong>
                  <small>{locked ? unlockReason(key) : controlHints[key]}</small>
                </span>
                <input
                  type="range"
                  min="1"
                  max="5"
                  step="1"
                  value={value}
                  disabled={locked || run.status === "ended"}
                  onChange={(event) =>
                    updateControl(key, Number(event.currentTarget.value) as ControlLevel)
                  }
                />
                <b>{locked ? "-" : value}</b>
              </label>
            );
          })}
        </section>

        <aside className="digest-panel" aria-label="Weekly digest">
          {run.diagnosis ? (
            <div>
              <p className="eyebrow">Week 12 Diagnosis</p>
              <h2>{run.diagnosis.title}</h2>
              <p className="body-copy">{run.diagnosis.subtitle}</p>
              <div className="evidence-list">
                {run.diagnosis.evidence.map((item) => (
                  <article key={item.label}>
                    <strong>{item.label}</strong>
                    <span>{item.detail}</span>
                  </article>
                ))}
              </div>
              <p className="body-copy">{run.diagnosis.replayPrompt}</p>
              <div className="action-row">
                <button onClick={() => downloadRouteExport(run)}>Export Route</button>
                <button onClick={resetRun}>Reset</button>
              </div>
            </div>
          ) : latestSnapshot ? (
            <div>
              <p className="eyebrow">Week Digest</p>
              <h2>{latestSnapshot.digest.title}</h2>
              <div className={`risk-card ${latestSnapshot.digest.riskCard.severity}`}>
                <strong>{latestSnapshot.digest.riskCard.title}</strong>
                <span>{latestSnapshot.digest.riskCard.body}</span>
              </div>
              <div className="feed">
                {latestSnapshot.digest.narrativeFeed.map((item, index) => (
                  <p key={`${item.source}-${index}`}>
                    <span>{item.source}</span>
                    {item.text}
                  </p>
                ))}
              </div>
              {latestSnapshot.digest.delayedEffectHints.map((hint) => (
                <p className="echo" key={hint}>
                  {hint}
                </p>
              ))}
            </div>
          ) : (
            <div>
              <p className="eyebrow">Operating Brief</p>
              <h2>The market is hot. The machine is clean enough to sell.</h2>
              <p className="body-copy">
                Tune the weekly controls, run the week, and watch which pressure
                starts to remember you.
              </p>
            </div>
          )}
        </aside>
      </section>

      <section className="debug-strip" aria-label="Route debug">
        <span>Complaint Echo {Math.round(run.counters.complaintEcho)}</span>
        <span>Winner Visibility {Math.round(run.counters.winnerVisibility)}</span>
        <span>Promo Debt {Math.round(run.counters.promoDebt)}</span>
        <span>Processor Patience {Math.round(run.counters.processorPatience)}</span>
        <span>Skilled Cluster {Math.round(run.counters.skilledCluster)}</span>
      </section>

      {pendingEvent ? (
        <div className="modal-backdrop" role="dialog" aria-modal="true">
          <section className="event-modal">
            <p className="eyebrow">Event</p>
            <h2>{pendingEvent.title}</h2>
            <p className="body-copy">{pendingEvent.body}</p>
            <div className="event-options">
              {pendingEvent.options.map((option) => (
                <button
                  className="event-option"
                  key={option.id}
                  onClick={() => chooseEventOption(pendingEvent, option)}
                >
                  <strong>{option.label}</strong>
                  <span>{option.description}</span>
                  <em>
                    {option.directionChips.map((chip) => chip.label).join(" / ")}
                  </em>
                </button>
              ))}
            </div>
          </section>
        </div>
      ) : null}
    </main>
  );
}
