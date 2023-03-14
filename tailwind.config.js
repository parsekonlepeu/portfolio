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
        carrLeft: "calc(-50% - 30px)",
        carrRight: "calc(-50% + 30px)",
      },
      colors: {
        primary: "#0a192f",
        primaryLigth: "#112240",
        primaryLigthLigth: "#233554",
        primary: "#0a192f",
        secondary: "#64ffda",
        hoverSecondary: "rgba(100,255,218,0.2)",
        textDark: "#495670",
        text: "#8892b0",
        textLigth: "#a8b2d1",
        textLigthLigth: "#ccd6f6",
      },
      minWidth: {
        400: "400px",
        700: "700px",
      },
      maxWidth: {
        1000: "1000px",
      },
      gridTemplateColumns: {
        140200: "repeat(2, minmax(140px, 200px))",
      },
      boxShadow: {
        all: "0px 0px 10px 3px #64ffda",
      },
      width: {
        forTextProjet: "calc(100% - 5rem)",
        section: "calc(100% - 16rem)",
        aside: "min(75vw, 400px)",
        photo: "380px",
        photoMd: "300px",
        photoSm: "220px",
      },
      height: {
        photo: "380px",
        photoMd: "300px",
        photoSm: "220px",
      },
      screens: {
        linkNotVisible: "850px",
        forAbout: { max: "950px" },
        forAboutLarge: { max: "1247px" },
        photoMd: { max: "1380px" },
        photoSm: { max: "1170px" },
        photoBelow: { max: "1270px" },
      },
      fontSize: {
        title: "clamp(40px, 8vw, 80px)",
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
