import { NextButton } from "../islands/Button.tsx";

const WebinarCard = ({ src, time, title, desc }: {
    src: string;
    title: string;
    desc: string;
    time: string;
}) => {
    return (
        <div class="webinar-card">
            <img src={src} />
            <div class="webinar-card-desc">
                <p class="text-blue-100">{time}</p>
                <h4>{title}</h4>
                <p class="text-black-60">{desc}</p>
                <NextButton>Register Now</NextButton>
            </div>
        </div>
    );
};

export const WebinarSection = () => {
    return (
        <div class="basic-flex-container my-[120px]">
            <h1 class="mb-[40px]">Webinars & Events</h1>
            <div class="webinar-container">
                <WebinarCard
                    src="/images/webinar-1.png"
                    title="USA Vertual Addmission Day"
                    time="Mar 19 · 05:00 PM to 07:30 PM"
                    desc="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                />
                <WebinarCard
                    src="/images/webinar-2.png"
                    title="New Zealand Virtual Admissions Week"
                    time="May 18 - May 21  · 04:30 PM to 06:30 PM"
                    desc="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia..."
                />
                <WebinarCard
                    src="/images/webinar-3.png"
                    title="UK Virtual Admissions Week"
                    time="May 18 - May 21  · 04:30 PM to 06:30 PM"
                    desc="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia..."
                />
            </div>
            <NextButton class="mt-[10px]">See More</NextButton>
        </div>
    );
};
