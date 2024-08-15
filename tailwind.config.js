/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#071952",
          300: "#088395",
          100: "#37B7C3",
          0: "#EBF4F6",
        },
        secondary: {
          500: "#215A2D",
          300: "#578C3E",
          100: "#97BF6F",
          0: "#C2D9A0",
        },
        tertiary: {
          500: "#A6774E",
          300: "#A67E6F",
          100: "#BFA59B",
          0: "#D9C7C1",
        },
      },
    },
  },
  plugins: [],
};
