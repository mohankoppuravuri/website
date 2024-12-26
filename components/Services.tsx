import ServiceCard from "./ServiceCard.tsx";

const Services = () => {
    return (
        <div class="basic-flex-container mt-[60px]">
            {/* Add your component content here */}
            <h1>Services we provide</h1>
            <div class="grid-container-service-cards">
                <ServiceCard
                    src="/images/test-preparation.svg"
                    text="Test Preparing & Coaching"
                />
                <ServiceCard
                    src="/images/course-country.svg"
                    text="Course, Country & University Selection"
                />{" "}
                <ServiceCard
                    src="/images/application-assistence.svg"
                    text="Application Assistance"
                />{" "}
                <ServiceCard
                    src="/images/scholarships.svg"
                    text="Scholarships"
                />
            </div>
            <button class="btn-coloured text-text-white mt-[40px]">
                Enquire Now
            </button>
            <div class="global-ambitions">
                <img src="/images/realize.png" class="w-[400px] " />
                <div class="w-[536px] gap-[17px] flex flex-col">
                    <h3>
                        Realize your global ambitions with us
                    </h3>
                    <p>
                        With a keen ear for your choices and preferences, our
                        counselling experience is so seamless that you will land
                        in your dream university even before you do!
                    </p>
                    <div class="flex flex-row gap-[10px] items-center">
                        <div class="tickmark">
                            <img src="/images/tickmark.svg" />
                        </div>

                        <p class="text-left">
                            Virtual & In Person Coaching and Counselling
                        </p>
                    </div>
                    <div class="flex flex-row gap-[10px]">
                        <div class="tickmark">
                            <img src="/images/tickmark.svg" />
                        </div>
                        <p class="text-left">
                            Comprehensive Assistance for Applications,
                        </p>
                    </div>
                    <div class="flex flex-row gap-[10px]">
                        <div class="tickmark">
                            <img src="/images/tickmark.svg" />
                        </div>
                        <p class="text-left">
                            Admissions & Visas High Value Scholarships and Study
                            Loans
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
