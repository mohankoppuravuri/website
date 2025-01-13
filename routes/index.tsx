import { InterestInputs } from "../islands/InterestInputs.tsx";

export default function Home() {
  return (
    <div
      class="min-h-[100vh] bg-[#cfcdc0]"
      style={{ overflowX: "hidden" }}
      f-client-nav
    >
      <div class="flex items-center">
        <img src="/logo.png" class="max-w-32" />
        <h1 class="p-5 text-3xl">Compound Interest Calculator</h1>
      </div>

      <h4 class="p-5 text-xl">
        Determine how much your money can grow using the power of compound
        interest.
      </h4>
      <hr></hr>

      <ol type={"1"} class="p-5">
        <p>Notes:</p>
        <li>
          Interest is compounded annually, specifically every 360 days
        </li>
        <li>
          Interest is calculated on an annual basis and includes the current
          day.
        </li>
        <li>
          Any withdrawals will decrease the interest amount. If a withdrawal
          exceeds the interest earned, the principal amount will be reduced
          accordingly.
        </li>
        <li>
          Future interest calculations will be based on the adjusted principal
          amount. The annual compounding date will remain unaffected by any
          withdrawals.
        </li>
      </ol>

      <hr />

      <InterestInputs />

      {
        /* <main class="section-to-print">
        <Partial name="docs-content">
          List of interest rates.
        </Partial>
      </main> */
      }
    </div>
  );
}
