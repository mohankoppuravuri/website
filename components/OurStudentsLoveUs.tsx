const Card = ({ src, name, title, description }) => {
    return (
        <div class="flex flex-col gap-[22px] shadow-card p-[30px] rounded-[10px] w-[370px] h-[321px] bg-text-white">
            <img src={src} width="34px" />
            <p>{name}</p>
            <p class="text-text-dark font-[600] leading-[19.2px]">{title}</p>
            <p class="text-text-grey">{description}</p>
        </div>
    );
};

export const OurStudentsLoveUs = () => {
    return (
        <div class="pt-[120px] pb-[120px] bg-orange-30 items-center flex flex-col gap-[40px]">
            <h1>Our students love us</h1>
            <div class="flex  gap-[30px]">
                <Card
                    src="images/quotations.svg"
                    name="Thank you, KC, for all the support you have provided right from shortlisting the university to the visa interview preparations. I really admire the attention and support of the KC Counsellors."
                    title="Mandar Suryawanshi"
                    description="Northeastern University, USA"
                />
                <Card
                    src="images/quotations.svg"
                    name="The team made the entire process very easy. Everyone is very helpful and cooperative throughout. I am thankful to KC Sadar Team for making my dream come true."
                    title="Aarohi Sighel"
                    description="University of South Australia, Australia"
                />
                <Card
                    src="images/quotations.svg"
                    name="Helped with counseling and making the right decision...great staff..would definitely recommend it to anyone planning to go abroad for studies.."
                    title="Susan Mendonca"
                    description="Conestoga College, Canada"
                />
            </div>
        </div>
    );
};
