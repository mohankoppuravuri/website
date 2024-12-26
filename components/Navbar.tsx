const Navbar = () => {
    return (
        <nav>
            <img class="h-[45px]" src="/images/white-logo.png" alt="Logo" />

            <div class="desktop ml-auto">Study Destinations</div>

            <div class="desktop">Services</div>

            <div class="desktop">Company</div>

            <div class="desktop">Upcoming Events</div>

            <button class="desktop btn-white-lined">Logo</button>
            <svg
                style={{
                    marginLeft: "auto",
                }}
                class="mobile"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clip-path="url(#clip0_1_804)">
                    <path
                        d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"
                        fill="white"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_1_804">
                        <rect width="24" height="24" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </nav>
    );
};

export default Navbar;
