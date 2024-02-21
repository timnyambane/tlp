/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "san-serif"],
      },
      colors: {
        mariner: {
          "50": "#f1f8fd",
          "100": "#e0eff9",
          "200": "#c8e3f5",
          "300": "#a3d1ed",
          "400": "#77b8e3",
          "500": "#579dda",
          "600": "#4284ce",
          "700": "#3970bd",
          "800": "#345b99",
          "900": "#2e4e7a",
          "950": "#20314b",
        },
        pattensBlue: {
          "50": "#f0f9ff",
          "100": "#e0f2fe",
          "200": "#bae2fd",
          "300": "#7dc9fc",
          "400": "#38abf8",
          "500": "#0e91e9",
          "600": "#0278c7",
          "700": "#0362a1",
          "800": "#075385",
          "900": "#0c476e",
          "950": "#082f49",
        },
      },
    },
  },
  plugins: [],
};
