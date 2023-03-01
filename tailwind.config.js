/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
    extend: {
      content: {
        "1.": "essa",
      },
    },
  },
  plugins: [],
};
