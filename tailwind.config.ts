import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#004D6E",
        "primary-hover": "#003a54",
        secondary: "#FFAE00",
        accent: "#77B4CE",
        background: "#F7F9FA",
        textBlack: "#07090A",
        textBlack1: "#7D7F80",
        textBlack2: "#4c4c4c",
        card: "#EAF0F3",
        border: "#D3D5D6",
        warning: "#F39C12",
        success: "#0CC85C",
        error: "#E74C3C",
        placeholder: "#ABABAB",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },
      container: {
        screens: {
          DEFAULT: "1450px",
        },
        center: true,
        padding: "1.2rem",
      },
      screens: {
        xs: "540px",
      },
    },
  },

  plugins: [],
} satisfies Config;
