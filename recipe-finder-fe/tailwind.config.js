/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'foodHubOrange': '#E27D08',
        'background': '#FCFDF7'
      }
    }
  },
  plugins: [],
};
