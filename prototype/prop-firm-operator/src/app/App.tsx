import { founderModes } from "../data/founder.seed";
import { initialRunSeed } from "../data/run.seed";
import { scenarios } from "../data/scenario.seed";
import { createInitialRun } from "../sim/createInitialRun";

const initialRun = createInitialRun({
  seed: initialRunSeed,
  founder: founderModes[0],
  scenario: scenarios[0],
});

const resourceLabels: Record<keyof typeof initialRun.resources, string> = {
  cash: "Cash",
  flow: "Flow",
  passRate: "Pass Rate",
  payoutLiability: "Payout Liability",
  trust: "Trust",
  regulatoryHeat: "Regulatory Heat",
};

export function App() {
  return (
    <main className="app-shell">
      <header className="topline">
        <div>
          <p className="eyebrow">Playable Prototype v0</p>
          <h1>{initialRun.platformName}</h1>
        </div>
        <div className="run-meta">
          <span>Week {initialRun.currentWeek}</span>
          <span>{founderModes[0].name}</span>
          <span>{scenarios[0].name}</span>
        </div>
      </header>

      <section className="resource-grid" aria-label="Initial resources">
        {Object.entries(initialRun.resources).map(([key, value]) => (
          <article className="resource-card" key={key}>
            <span>{resourceLabels[key as keyof typeof initialRun.resources]}</span>
            <strong>{Math.round(value)}</strong>
          </article>
        ))}
      </section>
    </main>
  );
}
