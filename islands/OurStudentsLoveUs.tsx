import { useState } from "preact/hooks";
import ArrowButton from "../components/ArrowButton.tsx";

const Card = (
    {
        src,
        name,
        title,
        description,
        cardIndex,
        className,
    }: {
        src: string;
        name: string;
        title: string;
        description: string;
        cardIndex: number;
        className?: string;
    },
) => {
    return (
        <div
            class={"our-student-card " +
                className}
            style={{
                left: `${35 + cardIndex * 400}px`,
            }}
        >
            <img src={src} width="34px" />
            <p>{name}</p>
            <p class="text-text-dark font-[600] leading-[19.2px]">{title}</p>
            <p class="text-text-grey">{description}</p>
        </div>
    );
};

export const OurStudentsLoveUs = () => {
    const [leftPositions, setLeftPositions] = useState([0, 1, 2]);
    const [mobileViewIndex, setMobileViewIndex] = useState(0);
    const isMobileView = globalThis?.innerWidth <= 375;

    return (
        <div class="our-student-container">
            <h1>Our students love us</h1>
            <div class="students-love-arrow-left">
                <ArrowButton
                    disabled={leftPositions[0] === 0}
                    onClick={() => {
                        setMobileViewIndex((prev) => prev - 1);
                        setLeftPositions((prev) => {
                            return prev.map((a) => {
                                return a + 1;
                            });
                        });
                    }}
                />
            </div>
            <div class="students-love-arrow-right">
                <ArrowButton
                    disabled={leftPositions[2] === 0}
                    onClick={() => {
                        setMobileViewIndex((prev) => prev + 1);
                        setLeftPositions((prev) => {
                            return prev.map((a) => {
                                return a - 1;
                            });
                        });
                    }}
                />
            </div>

            <div class="students-love-scroll-container">
                <div class="cCarousel-inner">
                    {!isMobileView || mobileViewIndex === 0
                        ? (
                            <Card
                                cardIndex={leftPositions[0]}
                                src="images/quotations.svg"
                                name="Thank you, KC, for all the support you have provided right from shortlisting the university to the visa interview preparations. I really admire the attention and support of the KC Counsellors."
                                title="Mandar Suryawanshi"
                                description="Northeastern University, USA"
                            />
                        )
                        : null}
                    {!isMobileView || mobileViewIndex === 1
                        ? (
                            <Card
                                className="mt-[70px]"
                                cardIndex={leftPositions[1]}
                                src="images/quotations.svg"
                                name="The team made the entire process very easy. Everyone is very helpful and cooperative throughout. I am thankful to KC Sadar Team for making my dream come true."
                                title="Aarohi Sighel"
                                description="University of South Australia, Australia"
                            />
                        )
                        : null}
                    {!isMobileView || mobileViewIndex === 2
                        ? (
                            <Card
                                cardIndex={leftPositions[2]}
                                src="images/quotations.svg"
                                name="Helped with counseling and making the right decision...great staff..would definitely recommend it to anyone planning to go abroad for studies.."
                                title="Susan Mendonca"
                                description="Conestoga College, Canada"
                            />
                        )
                        : null}
                </div>
            </div>
        </div>
    );
};
