import { Partial } from "$fresh/src/runtime/Partial.tsx";
import { InterestInputs } from "../islands/InterestInputs.tsx";

export default function Home() {
  return (
    <div
      class="container"
      style={{ overflowX: "hidden" }}
      f-client-nav
    >
      <h3>Minimalist Interest calculator.</h3>
      <p>Compounds annually.</p>
      <p>Takes interest per annum. Example 18% interest for 1 year period.</p>
      <hr />
      <aside>
        <InterestInputs />
      </aside>
      <Partial name="docs-content">
        No data present
      </Partial>
    </div>
  );
}
