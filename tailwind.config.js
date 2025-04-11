/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    backgroundImage: {
      heroImg: "url('/images/Hero-Img.jpeg')",
    },
    // colors: {
    //   primary: {
    //   //  DEFAULT: "#060E18",
    //   },
    // },
  },
  plugins: [],
};
