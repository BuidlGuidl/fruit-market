/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  darkTheme: "scaffoldEth",
  // DaisyUI theme colors
  daisyui: {
    themes: [
      {
        scaffoldEth: {
          primary: "#000",
          "primary-content": "#FFF",
          secondary: "#eeb14e",
          "secondary-content": "#FFF",
          accent: "#629FFC",
          "accent-content": "#212638",
          neutral: "#212638",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#ffffff",
          "base-300": "#DAE8FF",
          "base-content": "#212638",
          info: "#93BBFB",
          success: "#13b081",
          warning: "#FFCF72",
          error: "#c4461b",
          "custom-dark": "#0D0D0D",
          green: "#5DE347",
          lightgray: "#F5F5F5",

          "--rounded-btn": "9999rem",
          ".tooltip": {
            "--tooltip-tail": "6px",
          },
        },
      },
    ],
  },
  theme: {
    // Extend Tailwind classes (e.g. font-bai-jamjuree, animate-grow)
    extend: {
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
      },
      padding: {
        "btn-xs": "0.6rem",
      },
      minHeight: {
        "btn-xs": "1.5rem",
      },
      fontSize: {
        "btn-xs": "0.75rem",
      },
      colors: {
        "grey-dark": "#686868",
        "grey-medium": "#d1d1d",
        "grey-light": "#F5F5F5",
        "grey-btn": "#B5B5B5",
        "custom-green": "#5DE347",
        "custom-black": "#0D0D0D",
      },
    },
  },
};
