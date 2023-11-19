import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {},
        textShadow: {
            DEFAULT: "-1px -1px 0 rgb(234 88 12/ var(--tw-text-opacity)), 1px -1px 0 rgb(234 88 12/ var(--tw-text-opacity)), -1px 1px 0 rgb(234 88 12/ var(--tw-text-opacity)), 1px 1px 0 rgb(234 88 12/ var(--tw-text-opacity))",
        }
    },
    plugins: [plugin(function ({ matchUtilities, theme }) {
        matchUtilities(
            {
                "text-shadow": (value) => ({
                    textShadow: value,
                }),
            },
            { values: theme("textShadow") }
        );
    })]
} satisfies Config;
