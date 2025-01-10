// const st = prompt("enter start date");
export const calculateInterest = ({ startDateStr }: {
    startDateStr: string;
}) => {
    const startDate = new Date(startDateStr);

    const todayDate = new Date();

    const timeDifferenceInMilliseconds = todayDate.getTime() -
        startDate.getTime();

    const yearMilliseconds = 365 * 24 * 60 * 60 * 1000;
    const dayMilliseconds = 24 * 60 * 60 * 1000;

    const timeDifference = {
        months: Math.floor(timeDifferenceInMilliseconds / yearMilliseconds),
        days: Math.floor(
            (timeDifferenceInMilliseconds % yearMilliseconds) / dayMilliseconds,
        ),
    };

    return timeDifference;
};
