import type { JSX } from "preact/jsx-runtime";

const ArrowButton = (props: JSX.HTMLAttributes<HTMLButtonElement>) => {
    return (
        <button class="btn-icon" {...props}>
            <svg
                width="10"
                height="16"
                viewBox="0 0 10 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M1 1L9 7.66667L1 15"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </button>
    );
};

export default ArrowButton;
