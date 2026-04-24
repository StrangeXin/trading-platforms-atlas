import { assertRouteDifferentiation } from "./routeAssertions";

const result = assertRouteDifferentiation();

console.log(JSON.stringify(result.summary, null, 2));

if (!result.ok) {
  console.error("Route assertion failures:");
  for (const failure of result.failures) {
    console.error(`- ${failure}`);
  }
  process.exitCode = 1;
}
