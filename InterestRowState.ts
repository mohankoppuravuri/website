import {
    calculateSimpleInterest,
    dayMilliseconds,
} from "./interestCalculator.ts";

export interface TableRow {
    comment: string;
    description:
        | "ANNUAL_COMPOUND"
        | "MONEY_RECEIVED"
        | "VIEW"
        | "ADD";
    currentTime: number;
    lastInterestCalculateTime: number;
    interestAmount: number;
    principalAmount: number;
}

export type ActionType =
    | {
        type: "RESET";

        /**  Need to fix */
        time: number;
    }
    | {
        type: "MONEY_RECEIVED";
        time: number;
        amount: number;
        interestRate: number;
    }
    | { type: "ANNUAL_COMPOUND"; time: number; interestRate: number }
    | { type: "VIEW"; time: number; interestRate: number }
    | {
        time: number;
        type: "ADD";
        initialState: TableRow;
    };

export const reducer: (
    acc: TableRow[],
    data: ActionType,
) => TableRow[] = (
    acc,
    data,
) => {
    switch (data.type) {
        case "RESET": {
            return [];
        }
        case "ANNUAL_COMPOUND": {
            const { interestRate } = data;

            const interestAmount = calculateSimpleInterest(
                acc[acc.length - 1].principalAmount,
                acc[acc.length - 1]
                    .lastInterestCalculateTime,
                data.time + dayMilliseconds,
                interestRate!,
            );
            return [...acc, {
                comment: `Principal amount updated by ${
                    interestAmount.toFixed(2)
                }`,
                description: "ANNUAL_COMPOUND",
                currentTime: data.time,
                interestAmount: 0,
                principalAmount: acc[acc.length - 1].principalAmount +
                    interestAmount,
                lastInterestCalculateTime: data.time +
                    dayMilliseconds,
            }];
        }
        case "MONEY_RECEIVED": {
            const { interestRate } = data;

            let principalAmount = acc[acc.length - 1].principalAmount;

            let interestAmount = acc[acc.length - 1].interestAmount +
                calculateSimpleInterest(
                    acc[acc.length - 1].principalAmount,
                    acc[acc.length - 1]
                        .lastInterestCalculateTime,
                    data.time + dayMilliseconds,
                    interestRate!,
                );

            if (interestAmount > data.amount) {
                interestAmount = interestAmount - data.amount;
            } else {
                principalAmount = principalAmount -
                    (data.amount - interestAmount);
            }

            return [...acc, {
                comment: `Withdraw  ${data.amount.toFixed(2)}`,
                description: "MONEY_RECEIVED",
                currentTime: data.time,
                lastInterestCalculateTime: data.time +
                    dayMilliseconds,
                interestAmount: 0,
                principalAmount,
            }];
        }
        case "VIEW": {
            const { interestRate } = data;

            const interestAmount = calculateSimpleInterest(
                acc[acc.length - 1].principalAmount,
                acc[acc.length - 1]
                    .lastInterestCalculateTime,
                data.time + dayMilliseconds,
                interestRate!,
            );
            return [...acc, {
                comment: `View`,
                description: "VIEW",
                currentTime: data.time,
                lastInterestCalculateTime: data.time +
                    dayMilliseconds,
                interestAmount: acc[acc.length - 1].interestAmount +
                    interestAmount,
                principalAmount: acc[acc.length - 1].principalAmount,
            }];
        }
        case "ADD": {
            return [
                ...acc,
                data.initialState,
            ];
        }
        default:
            return acc;
    }
};
