/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        martian: "#99CC33",
        "martian-dim": "#7DA829",
        dark: "#003333",
        "dark-card": "#0A4040",
        "dark-card-soft": "#063535",
        cream: "#F6F7F2",
        muted: "#9FC2B8",
      },
      fontFamily: {
        display: ['"Fredoka"', "sans-serif"],
        sans: ['"Inter"', "sans-serif"],
      },
      borderRadius: {
        "4xl": "28px",
      },
    },
  },
  plugins: [],
};
