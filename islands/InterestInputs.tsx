import { useState } from "preact/hooks";
import Button from "./Button.tsx";

export const InterestInputs = () => {
    const [startDate, setStartDate] = useState();
    const [interestRate, setInterestRate] = useState();
    const [amount, setAmount] = useState();

    return (
        <form
            class="inputContainer"
            method="GET"
            f-partial={`/partials/${startDate}_${amount}_${interestRate}`}
            href={`/partials/${startDate}_${amount}_${interestRate}`}
        >
            <input
                class="rounded-[5px] pl-[20px] h-[48px]"
                label="Amount"
                placeholder="Amount"
                value={amount}
                type="number"
                onChange={(e) => {
                    setAmount(e.target.value);
                }}
            />
            <input
                class="rounded-[5px] pl-[20px] h-[48px]"
                label="Interest"
                value={interestRate}
                type="number"
                placeholder="Int / annum (18)"
                onChange={(e) => {
                    setInterestRate(e.target.value);
                }}
            />
            <input
                class="rounded-[5px] pl-[20px] h-[48px]"
                label="Start Date"
                type="date"
                value={startDate}
                onChange={(e) => {
                    setStartDate(e.target.value);
                }}
            />
            <button class="btn-coloured">Submit</button>
        </form>
    );
};
