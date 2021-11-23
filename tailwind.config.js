module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow"],
      },
      letterSpacing: {
        longest: "0.2em",
      },
      textColor: {
        photography: "hsl(198, 62%, 26%)",
        cyan: "hsl(167, 40%, 24%)",
      },
      backgroundColor: {
        secondary: "hsl(168, 34%, 60%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
