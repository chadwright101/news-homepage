/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      project: {
        orange: "hsl(35, 77%, 62%)",
        red: "hsl(5, 85%, 63%)",
        white: "hsl(36, 100%, 99%)",
        grey: "hsl(233, 8%, 79%)",
        darkGrey: "hsl(236, 13%, 42%)",
        black: "hsl(240, 100%, 5%)",
      },
    },
    extend: {
      fontSize: {
        project: {
          paragraph: "0.938rem",
        },
      },
      fontWeight: {
        project: {
          regular: "400",
          medium: "700",
          bold: "800",
        },
      },
      width: {
        project: {
          mobile: "375px",
        },
      },
    },
  },
  plugins: [],
};
