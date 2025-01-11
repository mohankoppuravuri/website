import { defineRoute, RouteConfig } from "$fresh/server.ts";
import { Partial } from "$fresh/runtime.ts";
import { calculateInterest } from "../../interestCalculator.ts";
import { JSX } from "preact/jsx-runtime";

// We only want to render the content, so disable
// the `_app.tsx` template as well as any potentially
// inherited layouts
export const config: RouteConfig = {
    skipAppWrapper: true,
    skipInheritedLayouts: true,
};

const loadContent = async ({ interestRate, timeDifference, amount }) => {
    const trList: JSX.Element = [];

    const accumulatedAmount = new Array(timeDifference.months)
        .fill(0)
        .reduce((acc, _, idx) => {
            const currentYearInterest = acc * (interestRate / 100);
            const updatedAcc = acc + currentYearInterest;
            const element = (
                <tr>
                    <td>
                        End of year {idx + 1}
                    </td>
                    <td>
                        {currentYearInterest.toFixed(2)}
                    </td>
                    <td>
                        {updatedAcc.toFixed(2)}
                    </td>
                </tr>
            );
            trList.push(element);

            // console.debug(
            //     `End of year ${
            //         idx + 1
            //     }: ${acc} + ${currentYearInterest} = ${updatedAcc}`,
            // );
            return updatedAcc;
        }, amount);

    // console.debug(
    //     `Remaining months (${timeDifference.days / 30}): ${
    //         ((timeDifference.days / 30) * accumulatedAmount * interestRate) /
    //         100
    //     }`,
    // );
    const finalAmount = accumulatedAmount +
        ((timeDifference.days / 30) * accumulatedAmount * (interestRate / 12)) /
            100;

    trList.push(
        <tr>
            <td>Days ({timeDifference.days})</td>
            <td>
                {(((timeDifference.days) * accumulatedAmount *
                    interestRate / 360) / 100).toFixed(2)}
            </td>
            <td>{finalAmount.toFixed(2)}</td>
        </tr>,
    );

    return trList;
};

export default defineRoute(async (req, ctx) => {
    const [startDateStr, endDateStr, amount, interest] = ctx.params
        .date_amount_interest
        .split("_");

    const interestRate = Number(interest);
    const timeDifference = calculateInterest({
        startDateStr,
        endDateStr,
    });
    const content = await loadContent({
        amount: Number(amount),
        interestRate,
        timeDifference,
    });

    return (
        <Partial name="docs-content" mode="append">
            <div class="flex gap-[10px] mt-[10px]">
                <div class="text-green-100">Start: {startDateStr},</div>
                <div class="text-green-100">
                    Current: {endDateStr},
                </div>
                <div class="text-green-100">
                    Interest: {interest},
                </div>
                <div class="text-green-100">Amount: {amount}</div>
                <div class="text-green-100">
                    Days: {timeDifference.totalNumberOfDays}
                </div>
            </div>

            <table>
                <thead>
                    <td>Title</td>
                    <td>Interest</td>
                    <td>Amount</td>
                </thead>
                <tbody>
                    {content}
                </tbody>
            </table>
            <hr />
        </Partial>
    );
});
