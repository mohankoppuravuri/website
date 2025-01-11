import { Partial } from "$fresh/src/runtime/Partial.tsx";
import { InterestInputs } from "../islands/InterestInputs.tsx";

export default function Home() {
  return (
    <div
      class="container"
      style={{ overflowX: "hidden" }}
      f-client-nav
    >
      <h1>Compound Interest calculator.</h1>
      <ol type={"1"}>
        <li>
          Compounds annually.
        </li>
        <li>
          Takes interest per annum. Includes current day
        </li>
      </ol>

      <hr />
      <aside>
        <InterestInputs />
      </aside>
      <main class="section-to-print">
        <Partial name="docs-content">
          List of interest rates.
        </Partial>
      </main>
    </div>
  );
}
