import { Partial } from "$fresh/src/runtime/Partial.tsx";
import { InterestInputs } from "../islands/InterestInputs.tsx";

export default function Home() {
  return (
    <div
      class="container"
      style={{ overflowX: "hidden" }}
      f-client-nav
    >
      <aside>
        <InterestInputs />
      </aside>
      <Partial name="docs-content">
        Add data
      </Partial>
    </div>
  );
}
