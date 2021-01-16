module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "yellow-primary": "#F5C828",
        "blue-primary": "#1147C2",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
