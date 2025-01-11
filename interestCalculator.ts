// const st = prompt("enter start date");
const yearMilliseconds = 360 * 24 * 60 * 60 * 1000;
const dayMilliseconds = 24 * 60 * 60 * 1000;
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
