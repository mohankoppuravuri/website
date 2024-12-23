export const Footer = () => {
    return (
        <footer>
            <h2 class="text-text-white">Stay updated with KC Overseas</h2>
            <div class="flex gap-[20px]">
                <input
                    class="rounded-[5px] pl-[20px] h-[48px]"
                    placeholder="Email ID"
                />
                <input
                    class="rounded-[5px] pl-[20px] h-[48px]"
                    placeholder="I’m Interested in"
                />
                <button class="btn-coloured !text-text-white">
                    Suscribe Now
                </button>
            </div>
        </footer>
    );
};
