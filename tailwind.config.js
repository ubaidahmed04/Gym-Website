/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
           secondary:"#662249",
           black:"#1F2937",
           green:"#83A6CE",
           light:"#FFFFFF",
           darkgray:"#374151",
           darkBlue:"#213343",
           orange:"#EA580C",
          //  secondary:"#935b88",
          //  black:"#0B1B32",
          //  green:"#83A6CE",
      },
    },
  },
  plugins: [],
});
