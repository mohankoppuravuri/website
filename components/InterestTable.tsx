import { calculateInterest } from "../interestCalculator.ts";
interface InterestData {
    startDateStr: string;
    endDateStr: string;
    amount: number;
    interestRate: number;
    receivedDates: { amount: number; receivedDate: string }[];
}

const loadContent = ({ interestRate, timeDifference, amount }) => {
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

export const InterestTable = ({
    startDateStr,
    endDateStr,
    interestRate,
    amount,
    receivedDates,
}: InterestData) => {
    const timeDifference = calculateInterest({
        startDateStr,
        endDateStr,
    });
    const content = loadContent({
        amount: amount,
        interestRate,
        timeDifference,
    });

    return (
        <div>
            <div class="flex gap-[10px] mt-[10px]">
                <div class="text-green-100">Start: {startDateStr},</div>
                <div class="text-green-100">
                    Current: {endDateStr},
                </div>
                <div class="text-green-100">
                    Interest: {interestRate},
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
        </div>
    );
};
