// const st = prompt("enter start date");
export const yearMilliseconds = 360 * 24 * 60 * 60 * 1000;
export const dayMilliseconds = 24 * 60 * 60 * 1000;
export const calculateInterest = ({ startDateStr, endDateStr }: {
    startDateStr: string;
    endDateStr: string;
}) => {
    const startDate = new Date(startDateStr);

    const todayDate = new Date(endDateStr);

    const timeDifferenceInMilliseconds = Math.abs(
        todayDate.getTime() -
            startDate.getTime(),
    ) + dayMilliseconds;

    const totalNumberOfDays = timeDifferenceInMilliseconds / dayMilliseconds;

    const timeDifference = {
        months: Math.floor(timeDifferenceInMilliseconds / yearMilliseconds),
        days: Math.floor(
            (timeDifferenceInMilliseconds % yearMilliseconds) / dayMilliseconds,
        ),
        totalNumberOfDays,
    };

    return timeDifference;
};

export const calculateSimpleInterest: (
    amount: number,
    t1: number,
    t2: number,
    rate: number,
) => number = (
    amount,
    t1,
    t2,
    rate,
) => {
    console.debug(t1, t2, t2 - t1, dayMilliseconds, amount);
    const numberOfDays = (t2 - t1) / dayMilliseconds;
    return amount * numberOfDays * (rate / 360) / 100;
};
