import { TableRow } from "../InterestRowState.ts";

const getClassName = (
    description:
        | "ANNUAL_COMPOUND"
        | "MONEY_RECEIVED"
        | "VIEW"
        | "ADD",
) => {
    switch (description) {
        case "ANNUAL_COMPOUND": {
            return "text-green-100";
        }
        case "MONEY_RECEIVED":
            return "text-red-500";
        case "VIEW":
            return "text-black-100";
    }
};

export const UpdatedInterestTable = ({ tableData }: {
    tableData: TableRow[];
}) => {
    if (!tableData.length) {
        return (
            <p>
            </p>
        );
    }

    return (
        <>
            <hr />
            <table>
                <thead>
                    <tr>
                        <td>Date</td>
                        <td>Description</td>
                        <td>Principal Amount</td>
                        <td>Interest</td>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map(({
                        currentTime,
                        principalAmount,
                        interestAmount,
                        description,
                        comment,
                    }, idx) => {
                        return (
                            <tr
                                key={`${currentTime} + ${idx}`}
                                class={getClassName(description)}
                            >
                                <td>
                                    {new Date(currentTime)
                                        .toISOString()
                                        .split(
                                            "T",
                                        )[0]}
                                </td>
                                <td>{comment}</td>

                                <td class="text-right">
                                    {principalAmount.toFixed(2)}
                                </td>
                                <td class="text-right">
                                    {interestAmount.toFixed(2)}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};
