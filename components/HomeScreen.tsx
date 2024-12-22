import ArrowButton from "./ArrowButton.tsx";

const HomeScreen = () => {
    return (
        <>
            <div class="container">
                <div class="home-branch">
                    <h5 class="opacity-50">Home</h5>
                    <div class="dot opacity-50 bg-text-white">
                    </div>
                    <h5>Pune Branch</h5>
                </div>
                <div>
                    <h1 class="z-30">
                        KC Overseas Education
                    </h1>
                    <h1 class="rectangle-bottom-overlay">Pune</h1>
                </div>
                <p class="w-[700px]">
                    We value your career aspirations, which is why we map your
                    preferences with the best that our global universities have
                    to offer. Thousands of our students are pursuing their
                    programs and aspirations in eminent universities globally
                    and we welcome you to pursue yours!
                </p>
                <div class="flex flex-row gap-[30px] ">
                    <button class="btn-coloured">Enquire now</button>
                    <div class="flex flex-row gap-[10px]">
                        <div class="rotate-[90deg]">
                            <ArrowButton />
                        </div>
                        <button>Branch Address</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeScreen;
