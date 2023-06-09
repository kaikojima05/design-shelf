/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}",
        "./ui/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "light-gray": "rgba(255, 255, 255, 0.1)",
                "gray-black": "#202023",
                "light-white": "rgba(255, 255, 255, 0.45)",
                peach: "rgba(251, 216, 181, 0.8)",
                purple: "rgba(129, 140, 248)",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            animation: {
                "flip-vertical-right":
                    "flip-vertical-right 0.7s cubic-bezier(0.455, 0.030, 0.515, 0.955)   both",
            },
            keyframes: {
                "flip-vertical-right": {
                    "0%": {
                        transform: "rotateY(0)",
                    },
                    to: {
                        transform: "rotateY(360deg)",
                    },
                },
            },
        },
    },
    plugins: [],
};
