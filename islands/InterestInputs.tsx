import { useState } from "preact/hooks";
import Button from "./Button.tsx";

export const InterestInputs = () => {
    const [endDate, setEndDate] = useState(
        new Date().toISOString().split("T")[0],
    );
    const [startDate, setStartDate] = useState();
    const [interestRate, setInterestRate] = useState();
    const [amount, setAmount] = useState();

    return (
        <form
            class="inputContainer"
            method="GET"
            f-partial={`/partials/${startDate}_${endDate}_${amount}_${interestRate}`}
            href={`/partials/${startDate}_${amount}_${interestRate}`}
        >
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
                        setAmount(e.target.value);
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
                    value={startDate}
                    onChange={(e) => {
                        setStartDate(e.target.value);
                    }}
                />

                <label for="endDate" class="min-w-[60px]">End</label>
                <input
                    id="endDate"
                    class="rounded-[5px] pl-[10px] h-[38px]"
                    label="Start Date"
                    type="date"
                    value={endDate}
                    onChange={(e) => {
                        setEndDate(e.target.value);
                    }}
                />
            </div>
            <button
                class="btn-coloured"
                disabled={!startDate || !amount || !interestRate}
            >
                Submit
            </button>
        </form>
    );
};
