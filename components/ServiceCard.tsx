const ServiceCard = ({ src, text }: {
    src: string;
    text: string;
}) => {
    return (
        <div class="servcice-card">
            <img src={src} />
            <h5>
                {text}
            </h5>
        </div>
    );
};

export default ServiceCard;
