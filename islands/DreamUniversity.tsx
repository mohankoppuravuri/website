import { useState } from "preact/hooks";
import { NextButton } from "./Button.tsx";

const Card = ({ src, title, desc, animationState }: {
    src: string;
    title: string;
    desc: string;
    animationState: "paused" | "running";
}) => {
    return (
        <div
            class="dream-university-card"
            style={{
                animationPlayState: animationState,
                animationDirection: "alternate",
            }}
        >
            <div class="arrow-icon">
            </div>
            <img src={src} />
            <h5 class="mt-[28.5px]">{title}</h5>
            <p class="text-[14px] leading-[22.5px] mt-[5px]">{desc}</p>
        </div>
    );
};

const DreamUniversity = () => {
    const [count, setCount] = useState(0);
    const [animationState, setAnimationState] = useState<"paused" | "running">(
        "paused",
    );

    return (
        <div class="dream-university-card-container">
            <h1 class="pb-[120px]">
                7 Easy Steps to Land in your Dream University
            </h1>
            <div class="animation-container">
                <Card
                    count={count}
                    title="Counselling"
                    desc="Plan your Academic and Career Goals"
                    src="/images/counselling.svg"
                    animationState={animationState}
                />
                <Card
                    count={count}
                    title="Test Preparation"
                    desc="Appear for Standardized Tests"
                    src="/images/test-preparation-icon.svg"
                    animationState={animationState}
                />
            </div>
            <div class="flex justify-center items-center gap-[40px] mt-[40px] translate-x-[-15%]">
                <NextButton
                    class="flex-row-reverse"
                    svgClass="rotate-180"
                    disabled={count === 0}
                    onClick={() => {
                        setCount((prev) => (prev - 1) % 2);
                        setAnimationState("running");
                        const interval = setInterval(() => {
                            setAnimationState("paused");
                            clearInterval(interval);
                        }, 2150);
                    }}
                >
                    Previous
                </NextButton>
                <NextButton
                    disabled={count === 1}
                    onClick={() => {
                        setCount((prev) => (prev + 1) % 2);
                        setAnimationState("running");
                        const interval = setInterval(() => {
                            setAnimationState("paused");
                            clearInterval(interval);
                        }, 2050);
                    }}
                >
                    Next
                </NextButton>
            </div>
        </div>
    );
};

export default DreamUniversity;
