import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        fontSize: {
            xs: ["16px", "24px"], //font-size : line-height
            s: ["20px", "28px"],
            m: ["24px", "32px"],
            xl: ["32px", "40px"],
            xxl: ["40px", "48px"],
        },
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                "red-aqua": "#5DB7EE",
                "red-pink": "#FF5177",
            },
        },
    },
    plugins: [],
};
export default config;
