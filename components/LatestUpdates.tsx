import { NextButton } from "../islands/Button.tsx";

export const LatestUpdates = () => {
    return (
        <div class="mt-[120px] mb-[120px] items-center justify-center flex flex-col gap-[22px]">
            <h1>Latest KC Updates</h1>
            <div class="mt-[40px] flex flex-row gap-[22px]">
                <div class="w-[570px] h-[500px] shadow-card rounded-[10px] p-[50px] bg-yellow-100 gap-[22px] flex flex-col">
                    <h1>We’re Hiring!</h1>
                    <h4 class="font-[400] text-text-dark">
                        KC continues recruitments for its offices across India
                        and Asia even during the unprecedented times of Covid.
                    </h4>
                    <button class="btn-white-lined mt-auto">Apply Now</button>
                </div>
                <div class="w-[270px] h-[500px] shadow-card rounded-[10px]">
                </div>
                <div class="w-[270px] h-[500px] shadow-card rounde-[10px]">
                </div>
            </div>
            <NextButton>More News</NextButton>
        </div>
    );
};
