import { white } from "$std/fmt/colors.ts";
import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "card": "0px 8px 25px 0px #0000001A",
      },
      fontSize: {
        "base": "16px",
        "medium": "14px",
        small: "12px",
      },
      fontFamily: {
        regular: ["Buenos Aires Trial"],
        bold: ["BuenosAires-bold"],
        semibold: ["BuenosAires-semibold"],
        thin: ["BuenosAires-thin"],
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(to right, #FF6A56, #FDAF4D)",
      },
      colors: {
        text: {
          dark: "#0E1B2C",
          white: "#FFFFFF",
          grey: "#64647A",
        },
        // primary: "#1DA1F2", // Custom primary color
        // secondary: "#14171A", // Custom secondary color
        // accent: "#FFAD1F", // Custom accent color
        blue: {
          30: "#DBE8FF",
          60: "#ADCBFF",
          100: "#226CF5",
        },
        purple: {
          30: "#DBD9FF",
          60: "#B8AAEE",
          100: "#6C48F0",
        },
        orange: {
          30: "#FFDCD8",
          60: "#FBBFB6",
          100: "#FF7361",
        },
        yellow: {
          30: "#FFE7C9",
          60: "#FDC98D",
          100: "#FDAF4D",
        },
        black: {
          30: "#D3D5DB", //border
          60: "#64647A",
          100: "#0E1B2C",
        },
      },
    },
  },
} satisfies Config;
