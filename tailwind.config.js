module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "hsl(223, 87%, 63%)",
        secondary: {
          paleBlue: "hsl(223, 100%, 88%)",
          lightRed: "hsl(354, 100%, 66%)",
        },
        neutral: {
          gray: "hsl(0, 0%, 59%)",
          veryDarkBlue: "hsl(209, 33%, 12%)",
        },
      },
      fontFamily: {
        libre: ["Libre Franklin", "sans-serif"],
      },
      fontSize: {
        body: "20px", // Custom body text size
      },
      fontWeight: {
        light: 300,
        semibold: 600,
        bold: 700,
      },
    },
  },
  plugins: [],
};
