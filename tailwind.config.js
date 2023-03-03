/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./component/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      invert: {
        87: "87%",
      },
      sepia: {
        17: "17%",
      },
      saturate: {
        1194: "1194%",
      },
      hueRotate: {
        100: "100deg",
      },
      brightness: {
        102: "102%",
      },
      contrast: {
        102: "102%",
      },
      translate: {
        "15p": "15%",
      },
      colors: {
        primary: "#0a192f",
        primaryLigth: "#0a192f",
        primaryLigthLigth: "#233554",
        primary: "#0a192f",
        secondary: "#64ffda",
        textDark: "#495670",
        text: "#8892b0",
        textLigth: "#a8b2d1",
        textLigthLigth: "#ccd6f6",
      },
      minWidth: {
        400: "400px",
      },
      gridTemplateColumns: {
        140200: "repeat(2, minmax(140px, 200px))",
      },
    },
    fontFamily: {
      sans: [
        "Calibre",
        "Inter",
        '"San Francisco"',
        '"SF Pro Text"',
        "-apple-system",
        "system-ui,sans-serif",
      ],
      mono: [
        '"SF Mono"',
        '"Fira Code"',
        '"Fira Mono"',
        '"Roboto Mono"',
        "monospace",
      ],
    },
  },
  plugins: [],
};
