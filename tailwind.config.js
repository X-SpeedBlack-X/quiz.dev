/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins, sans-serif"],
      },
      colors: {
        purple: {
          400: "#9885f0",
          500: "#6c54d8",
        },
        green: {
          600: "#2baa6d",
        },
        red: {
          600: "#e44a4c",
        },
      },
    },
  },
  plugins: [],
};
