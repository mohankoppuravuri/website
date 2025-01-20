import { useReducer, useState } from "preact/hooks";
import { UpdatedInterestTable } from "../components/UpdateInterestTable.tsx";
import { ActionType, reducer } from "../InterestRowState.ts";
import { dayMilliseconds, yearMilliseconds } from "../interestCalculator.ts";

export const InterestInputs = () => {
    const [tableData, dispatch] = useReducer(reducer, []);
    const [endDate, setEndDate] = useState(
        new Date().getTime(),
    );
    const [startDate, setStartDate] = useState<number>();
    const [interestRate, setInterestRate] = useState<number>(12);
    const [amount, setAmount] = useState<number>();

    const [receivedDates, setReceivedDates] = useState<
        {
            amount: number;
            time: number;
            type: "MONEY_RECEIVED";
            interestRate: number;
        }[]
    >([]);

    const calculateTableData = () => {
        let checkPoints: ActionType[] = [
            ...receivedDates,
            {
                type: "VIEW",
                time: endDate,
                interestRate,
            },
        ];
        let i = 1;
        while (true) {
            if (startDate! + yearMilliseconds * i <= endDate) {
                checkPoints.push({
                    time: startDate! + yearMilliseconds * i,
                    type: "ANNUAL_COMPOUND",
                    interestRate,
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
        checkPoints.forEach((data) => {
            dispatch(data);
        });
    };

    return (
        <>
            <aside>
                <div class="border-black border-solid border-1 p-[20px] rounded-[4px] ">
                    <div class="flex align-middle text-center leading-[55px]">
                        <label for="amount" class="w-[100px] text-left">
                            Amount
                        </label>
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
                    <div class="flex align-middle leading-[55px]">
                        <label for="interest" class="w-[100px] text-left">
                            Interest
                        </label>
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

                    <div class="flex leading-[55px]">
                        <label for="startDate" class="w-[100px] text-left">
                            Start
                        </label>
                        <input
                            id="startDate"
                            class="rounded-[5px] pl-[10px] h-[38px] w-[192px]"
                            label="Start Date"
                            type="date"
                            // value={startDate
                            //     ? new Date(startDate).toISOString().split(
                            //         "T",
                            //     )[0]
                            //     : null}
                            onChange={(e) => {
                                setStartDate(
                                    new Date(e.target.value).getTime(),
                                );
                            }}
                        />
                    </div>
                    <div class="flex leading-[55px]">
                        <label for="endDate" class="w-[100px]">
                            End
                        </label>
                        <input
                            id="endDate"
                            class="rounded-[5px] pl-[10px] h-[38px] w-[192px]"
                            label="Start Date"
                            type="date"
                            value={new Date(endDate).toISOString().split(
                                "T",
                            )[0]}
                            onChange={(e) => {
                                setEndDate(
                                    new Date(e.target.value).getTime(),
                                );
                            }}
                        />
                    </div>
                    <div>
                        <p class="mb-[15px]">
                            If you have systematic deduction plan then you can
                            add it below
                        </p>

                        {receivedDates.map((_, idx) => {
                            return (
                                <div
                                    key={idx}
                                    class="rounded-[4px] p-[14px] shadow-card mb-[8px]"
                                >
                                    <div class="flex leading-[55px]">
                                        <label
                                            for={`receivedDate + ${idx}`}
                                            class="w-[100px] text-left"
                                        >
                                            Date
                                        </label>
                                        <input
                                            id={`receivedDate + ${idx}`}
                                            type="date"
                                            class="rounded-[5px] pl-[10px] h-[38px] w-[192px]"
                                            onChange={(e) => {
                                                setReceivedDates((prev) =>
                                                    prev.map((abc, _idx) => {
                                                        if (idx === _idx) {
                                                            return {
                                                                ...abc,
                                                                time: new Date(
                                                                    e.target
                                                                        .value,
                                                                ).getTime(),
                                                            };
                                                        }
                                                        return abc;
                                                    })
                                                );
                                            }}
                                        />
                                    </div>
                                    <div class="flex leading-[55px]">
                                        <label
                                            for={`receivedAmount + ${idx}`}
                                            class="w-[100px] text-left"
                                        >
                                            Amount
                                        </label>
                                        <input
                                            id={`receivedAmount-${idx}`}
                                            class="rounded-[5px] pl-[10px] h-[38px]"
                                            type="number"
                                            placeholder="0"
                                            onChange={(e) => {
                                                setReceivedDates((prev) =>
                                                    prev.map((abc, _idx) => {
                                                        if (idx === _idx) {
                                                            return {
                                                                ...abc,
                                                                amount: Number(
                                                                    e.target
                                                                        .value,
                                                                ),
                                                            };
                                                        }
                                                        return abc;
                                                    })
                                                );
                                            }}
                                        />
                                    </div>
                                    <button
                                        class="btn-text min-w-[95px] mb-[15px]"
                                        onClick={() => {
                                            setReceivedDates((prev) =>
                                                prev.filter((a, _idx) =>
                                                    _idx !== idx
                                                )
                                            );
                                        }}
                                    >
                                        Delete
                                    </button>
                                </div>
                            );
                        })}
                        {tableData?.length ? null : (
                            <button
                                class="btn-text min-w-[95px] mb-[15px]"
                                onClick={(e) => {
                                    setReceivedDates((
                                        perv,
                                    ) => [...perv, {
                                        amount: 0,
                                        time: startDate! +
                                            dayMilliseconds,
                                        type: "MONEY_RECEIVED",
                                        interestRate,
                                    }]);
                                }}
                            >
                                Add More
                            </button>
                        )}
                    </div>
                    <button
                        onClick={() => {
                            dispatch({
                                time: startDate!,
                                type: "ADD",
                                initialState: {
                                    description: "ADD",
                                    currentTime: startDate!,
                                    lastInterestCalculateTime: startDate!,
                                    interestAmount: 0,
                                    principalAmount: amount!,
                                    comment: `Initial amount ${amount}`,
                                },
                            });
                            calculateTableData();
                        }}
                        class="btn-coloured"
                        disabled={!startDate || !amount || !interestRate ||
                            Boolean(tableData?.length)}
                    >
                        Submit
                    </button>
                    {tableData?.length
                        ? (
                            <button
                                class="btn-text min-w-[95px] ml-1"
                                onClick={() => {
                                    dispatch({
                                        time: startDate!,
                                        type: "RESET",
                                    });
                                    setReceivedDates([]);
                                }}
                                disabled={!startDate || !amount ||
                                    !interestRate}
                            >
                                Reset
                            </button>
                        )
                        : null}
                </div>
            </aside>

            <main class="section-to-print p-[20px]">
                <UpdatedInterestTable tableData={tableData} />
            </main>
        </>
    );
};
