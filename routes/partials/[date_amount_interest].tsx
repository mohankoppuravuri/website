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

const loadContent = async (date_amount_interest: string) => {
    const [startDateStr, _amount, interest] = date_amount_interest
        .split("_");
    const interestRate = Number(interest);
    const timeDifference = calculateInterest({
        startDateStr,
    });
    const amount = Number(_amount);
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

            console.debug(
                `End of year ${
                    idx + 1
                }: ${acc} + ${currentYearInterest} = ${updatedAcc}`,
            );
            return updatedAcc;
        }, amount);

    console.debug(
        `Remaining months (${timeDifference.days / 30}): ${
            ((timeDifference.days / 30) * accumulatedAmount * interestRate) /
            100
        }`,
    );
    const finalAmount = accumulatedAmount +
        ((timeDifference.days / 30) * accumulatedAmount * (interestRate / 12)) /
            100;

    trList.push(
        <tr>
            <td>Months ({(timeDifference.days / 30).toFixed(2)})</td>
            <td>
                {(((timeDifference.days / 30) * accumulatedAmount *
                    interestRate / 12) / 100).toFixed(2)}
            </td>
            <td>{finalAmount.toFixed(2)}</td>
        </tr>,
    );

    return trList;
};

export default defineRoute(async (req, ctx) => {
    const content = await loadContent(
        ctx.params.date_amount_interest,
    );

    return (
        <Partial name="docs-content">
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
        </Partial>
    );
});
