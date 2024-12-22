import { NextButton } from "./Button.tsx";

const Card = ({ src, title, desc }: {
    src: string;
    title: string;
    desc: string;
}) => {
    return (
        <div class="dream-university-card">
            <div class="arrow-icon">
            </div>
            <img src={src} />
            <h5 class="mt-[28.5px]">{title}</h5>
            <p class="text-[14px] leading-[22.5px] mt-[5px]">{desc}</p>
        </div>
    );
};

const DreamUniversity = () => {
    return (
        <div class="dream-university-card-container">
            <h1 class="pb-[120px]">
                7 Easy Steps to Land in your Dream University
            </h1>
            <div class="flex justify-center w-fit gap-[30px] m-auto">
                <Card
                    title="Counselling"
                    desc="Plan your Academic and Career Goals"
                    src="/images/counselling.svg"
                />
                <Card
                    title="Test Preparation"
                    desc="Appear for Standardized Tests"
                    src="/images/test-preparation-icon.svg"
                />
            </div>
            <div class="flex justify-center items-center gap-[40px] mt-[40px] translate-x-[-15%]">
                <NextButton
                    class="flex-row-reverse"
                    svgClass="rotate-180"
                    onClick={() => {
                        alert("yes");
                    }}
                >
                    Previous
                </NextButton>
                <NextButton>
                    Next
                </NextButton>
            </div>
        </div>
    );
};

export default DreamUniversity;
