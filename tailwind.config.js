/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "main-blue": "#0066FF",
      },
      fontFamily: {
        sans: ["Pretendard", "sans-serif"],
      },
    },
  },
  plugins: [],
};
