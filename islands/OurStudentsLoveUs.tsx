import { useState } from "preact/hooks";
import ArrowButton from "../components/ArrowButton.tsx";

const Card = (
    {
        src,
        name,
        title,
        description,
        cardIndex,
    }: {
        src: string;
        name: string;
        title: string;
        description: string;
        cardIndex: number;
    },
) => {
    return (
        <div
            class="flex flex-col gap-[22px] shadow-card p-[30px] rounded-[10px] w-[370px] h-[340px] bg-text-white"
            style={{
                position: "absolute",
                transition: "0.3s ease-in-out",
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

    return (
        <div class="relative pt-[120px] pb-[120px] bg-orange-30 items-center flex flex-col gap-[40px] h-[750px]">
            <h1>Our students love us</h1>
            <div class="absolute rotate-[180deg] top-[50%] left-[50px]">
                <ArrowButton
                    disabled={leftPositions[0] === 0}
                    onClick={() => {
                        setLeftPositions((prev) => {
                            return prev.map((a) => {
                                return a + 1;
                            });
                        });
                    }}
                />
            </div>
            <div class="absolute right-[50px] top-[50%]">
                <ArrowButton
                    disabled={leftPositions[2] === 0}
                    onClick={() => {
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
                    <Card
                        cardIndex={leftPositions[0]}
                        src="images/quotations.svg"
                        name="Thank you, KC, for all the support you have provided right from shortlisting the university to the visa interview preparations. I really admire the attention and support of the KC Counsellors."
                        title="Mandar Suryawanshi"
                        description="Northeastern University, USA"
                    />
                    <Card
                        cardIndex={leftPositions[1]}
                        src="images/quotations.svg"
                        name="The team made the entire process very easy. Everyone is very helpful and cooperative throughout. I am thankful to KC Sadar Team for making my dream come true."
                        title="Aarohi Sighel"
                        description="University of South Australia, Australia"
                    />
                    <Card
                        cardIndex={leftPositions[2]}
                        src="images/quotations.svg"
                        name="Helped with counseling and making the right decision...great staff..would definitely recommend it to anyone planning to go abroad for studies.."
                        title="Susan Mendonca"
                        description="Conestoga College, Canada"
                    />
                </div>
            </div>
        </div>
    );
};
