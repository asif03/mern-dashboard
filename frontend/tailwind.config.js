/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    fontFamily: {
      display: ["Inter", "sans-serif"],
      body: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#2A85FF",
        light: {
          primary: "#fcfcfc",
          secondary: "#F4F4F4",
          "input-bg": "#F4F4F4",
        },
        dark: {
          primary: "#1a1d1f",
          secondary: "#111315",
          "input-bg": "#111315",
        },
      },
      textColor: {
        primary: "#FCFCFC",
        secondary: "#9a9fa5",
        light: {
          primary: "#1a1d1f",
          secondary: "#9a9fa5",
        },
        dark: {
          primary: "#fcfcfc",
          secondary: "#6f767e",
        },
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
