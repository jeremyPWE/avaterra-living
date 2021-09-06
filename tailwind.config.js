module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      obrown: {
        Default: "#51362D",
      },
      ogreen: {
        Default: "#C2C457",
      },
      bwhite: {
        Default: "#F1F0EA",
      },
      brown: {
        Default: "#835B4A",
      },
      white: {
        Default: "#FFFFFF",
      },
      black: {
        Default: "#00000020",
      },
    },
    extend: {
      height: {
        30: "7.5rem",
        xl: "32rem",
      },
      width: {
        xl: "28rem",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
