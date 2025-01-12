import { useState } from "preact/hooks";

import {
    calculateSimpleInterest,
    dayMilliseconds,
    yearMilliseconds,
} from "../interestCalculator.ts";

interface inputData {
    startDateStr: string;
    endDateStr: string;
    amount: number;
    interest: number;
}

interface TableRow {
    comment: string;
    description:
        | "ANNUAL_COMPOUND"
        | "MONEY_RECEIVED"
        | "VIEW";
    currentTime: number;
    lastInterestCalculateTime: number;
    interestAmount: number;
    principalAmount: number;
}

type CheckPoint =
    | number
    | {
        type: "MONEY_RECEIVED";
        time: number;
        amount: number;
    }
    | { type: "ANNUAL_COMPOUND"; time: number }
    | { type: "VIEW"; time: number };

export const InterestInputs = () => {
    const [endDate, setEndDate] = useState(
        new Date().getTime(),
    );
    const [startDate, setStartDate] = useState<number>();
    const [interestRate, setInterestRate] = useState<number>();
    const [amount, setAmount] = useState<number>();
    const [tableRow, setTableRow] = useState<TableRow[]>([]);
    const [receivedDates, setReceivedDates] = useState<
        { amount: number; time: number; type: "MONEY_RECEIVED" }[]
    >([]);

    const calculateTableData = () => {
        let checkPoints: CheckPoint[] = [
            startDate!,
            ...receivedDates,
            {
                type: "VIEW",
                time: endDate,
            },
        ];
        let i = 1;
        while (true) {
            if (startDate! + yearMilliseconds * i <= endDate) {
                checkPoints.push({
                    time: startDate! + yearMilliseconds * i,
                    type: "ANNUAL_COMPOUND",
                });
                i++;
                continue;
            }
            break;
        }
        checkPoints = checkPoints?.sort((
            a,
            b,
        ) => {
            if (typeof a === "object" && typeof b === "object") {
                return a.time - b.time;
            }
            if (typeof a === "object" && typeof b === "number") {
                return a.time - b;
            }
            if (typeof a === "number" && typeof b === "object") {
                return a - b.time;
            }
            if (typeof a === "number" && typeof b === "number") {
                return a - b;
            }
            return 0;
        });

        setTableRow(() => {
            const tableData: TableRow[] = checkPoints.reduce(
                (acc: TableRow[], data: CheckPoint, idx) => {
                    if (idx === 0) {
                        return [...acc, {
                            currentTime: startDate,
                            lastInterestCalculateTime: startDate,
                            interestAmount: 0,
                            principalAmount: amount,
                            comment: `Initial amount ${amount}`,
                        }];
                    }

                    if (
                        typeof data === "object" &&
                        data.type === "ANNUAL_COMPOUND"
                    ) {
                        const interestAmount = calculateSimpleInterest(
                            acc[acc.length - 1].principalAmount,
                            acc[acc.length - 1]
                                .lastInterestCalculateTime,
                            data.time + dayMilliseconds,
                            interestRate!,
                        );
                        return [...acc, {
                            comment: `Annual interest ${interestAmount} /-`,
                            description: "ANNUAL_COMPOUND",
                            currentTime: data.time,
                            interestAmount,
                            principalAmount:
                                acc[acc.length - 1].principalAmount +
                                interestAmount,
                            lastInterestCalculateTime: data.time +
                                dayMilliseconds,
                        }];
                    }

                    if (
                        typeof data === "object" &&
                        data.type === "MONEY_RECEIVED"
                    ) {
                        return [...acc, {
                            description: "MONEY_RECEIVED",
                            currentTime: data.time,
                            lastInterestCalculateTime: data.time,
                            interestAmount: acc[acc.length - 1].interestAmount +
                                calculateSimpleInterest(
                                    acc[acc.length - 1].principalAmount,
                                    acc[acc.length - 1]
                                        .lastInterestCalculateTime,
                                    data.time,
                                    interestRate!,
                                ),
                            principalAmount:
                                acc[acc.length - 1].principalAmount +
                                -data.amount,
                        }];
                    }

                    if (
                        typeof data === "object" &&
                        data.type === "VIEW"
                    ) {
                        return [...acc, {
                            comment: `View the principal and interest`,
                            description: "VIEW",
                            currentTime: data.time,
                            lastInterestCalculateTime:
                                acc[acc.length - 1].lastInterestCalculateTime,
                            interestAmount: acc[acc.length - 1].interestAmount,
                            principalAmount:
                                acc[acc.length - 1].principalAmount,
                        }];
                    }
                },
                [],
            );
            return tableData;
        });
    };

    return (
        <>
            <div>
                <div class="flex align-middle text-center leading-[55px]">
                    <label for="amount" class="w-[100px]">Amount</label>
                    <input
                        id="amount"
                        class="rounded-[5px] pl-[10px] h-[38px]"
                        label="Amount"
                        placeholder="Amount"
                        value={amount}
                        type="number"
                        onChange={(e) => {
                            setAmount(Number(e.target.value));
                        }}
                    />
                </div>
                <div class="flex align-middle text-center leading-[55px]">
                    <label for="interest" class="w-[100px]">Interest</label>
                    <input
                        id="interest"
                        class="rounded-[5px] pl-[10px] h-[38px]"
                        label="Interest"
                        value={interestRate}
                        type="number"
                        placeholder="Int / annum (18)"
                        onChange={(e) => {
                            setInterestRate(e.target.value);
                        }}
                    />
                </div>
                <div class="flex align-middle text-center leading-[55px]">
                    <label for="startDate" class="min-w-[60px]">Start</label>
                    <input
                        id="startDate"
                        class="rounded-[5px] pl-[10px] h-[38px]"
                        label="Start Date"
                        type="date"
                        value={startDate
                            ? new Date(startDate).toISOString().split("T")[0]
                            : null}
                        onChange={(e) => {
                            setStartDate(new Date(e.target.value).getTime());
                        }}
                    />

                    <label for="endDate" class="min-w-[60px]">End</label>
                    <input
                        id="endDate"
                        class="rounded-[5px] pl-[10px] h-[38px]"
                        label="Start Date"
                        type="date"
                        value={new Date(endDate).toISOString().split("T")[0]}
                        onChange={(e) => {
                            setEndDate(new Date(e.target.value).getTime());
                        }}
                    />
                </div>
                <button
                    onClick={() => {
                        calculateTableData();
                    }}
                    class="btn-coloured"
                    disabled={!startDate || !amount || !interestRate}
                >
                    Submit
                </button>
            </div>

            <table>
                <thead>
                    <tr>
                        <td>Date</td>

                        <td>Description</td>
                        <td>Principal Amount</td>
                        <td>Balance</td>
                    </tr>
                </thead>
                <tbody>
                    {tableRow.map(({
                        currentTime,
                        principalAmount,
                        interestAmount,
                        description,
                        comment,
                    }, idx) => {
                        return (
                            <tr key={`${currentTime} + ${idx}`}>
                                <td>
                                    {new Date(currentTime).toISOString().split(
                                        "T",
                                    )[0]}
                                </td>
                                <td>{comment}</td>

                                <td>
                                    {principalAmount}
                                </td>
                                <td>
                                    {description === "VIEW"
                                        ? principalAmount + interestAmount
                                        : principalAmount}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};
