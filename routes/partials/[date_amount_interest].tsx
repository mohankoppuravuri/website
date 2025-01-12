import { defineRoute, RouteConfig } from "$fresh/server.ts";
import { Partial } from "$fresh/runtime.ts";
import { calculateInterest } from "../../interestCalculator.ts";
import { JSX } from "preact/jsx-runtime";
import { InterestTable } from "../../components/InterestTable.tsx";

// We only want to render the content, so disable
// the `_app.tsx` template as well as any potentially
// inherited layouts
export const config: RouteConfig = {
    skipAppWrapper: true,
    skipInheritedLayouts: true,
};

export default defineRoute(async (req, ctx) => {
    const [startDateStr, endDateStr, amount, interest] = ctx.params
        .date_amount_interest
        .split("_");

    return (
        <Partial name="docs-content" mode="append">
            <InterestTable
                startDateStr={startDateStr}
                endDateStr={endDateStr}
                amount={Number(amount)}
                interestRate={Number(interest)}
                receivedDates={[]}
            />
        </Partial>
    );
});
