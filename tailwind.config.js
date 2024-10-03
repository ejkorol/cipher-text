/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    fontFamily: {
      dmSans: ["DMSans", "sans-serif"],
    },
    extend: {
      colors: {
        dark: "#212121",
        light: "#fafafa",
        gray: "#BDBDBD",
        darkGray: "#757575",
      },
    },
  },
  plugins: [],
};
