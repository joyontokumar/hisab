module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xll: "1536px",
    },
    extend: {
      colors: {
        red: "#FF0000",
      },
      screens: {
        lg: "992px",
      },
    },
  },
  plugins: [],
};