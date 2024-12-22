const ServiceCard = ({ src, text }: {
    src: string;
    text: string;
}) => {
    return (
        <div class="flex items-center gap-[25px] min-w-[500px] shadow-card rounded-[10px] h-[80px] py-[26px] px-[30px]
        ">
            <img src={src} />
            <h5>
                {text}
            </h5>
        </div>
    );
};

export default ServiceCard;
