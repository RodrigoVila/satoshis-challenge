module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        overlay: "rgba(0,0,0,0.5)",
        darkerOverlay: "rgba(0,0,0,0.8)",
      },
      maxWidth: {
        xs: "420px",
      },
      screen: {
        xs: "420px",
      },
    },
  },
  plugins: [],
};
