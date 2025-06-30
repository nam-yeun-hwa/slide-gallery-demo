/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";
module.exports = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          50: "#eeefff",
          100: "#dfe1ff",
          200: "#c6c7ff",
          300: "#a4a3fe",
          400: "#897efb",
          500: "#7860f4",
          600: "#6b42e9",
          700: "#5c35cd",
          800: "#4a2da4",
          900: "#3f2c83",
          950: "#261a4c",
        },
        rose: {
          50: "#fff0f3",
          100: "#ffe3e9",
          200: "#ffcbd8",
          300: "#ffa0ba",
          400: "#ff6a95",
          500: "#fd3574",
          600: "#eb1362",
          700: "#c70953",
          800: "#a60b4c",
          900: "#8e0d48",
          950: "#500122",
        },
        gray: {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#999999",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#262626",
          999: "#a0a0a0",
        },
      },
      padding: {
        20: "20px",
      },
      margin: {
        10: "2.5rem", // 40px
        12: "3rem", // 48px
      },
      fontSize: {
        12: "12px",
        14: "14px",
      },
      fontWeight: {
        "extra-thin": 50,
      },
      lineHeight: {
        14: "14px",
        20: "20px",
      },
      letterSpacing: {
        narrow: "-.5px",
        // "slightly-narrow": "-0.02em",
        // wide: "0.1em",
        // "extra-wide": "0.2em",
      },
      fontFamily: {
        ibm: ["var(--font-IBM_Plex_Sans_KR)", "sans-serif"],
        orbit: ["var(--font-orbit_regular)", "sans-serif"],
      },
    },
    borderRadius: {
      20: "20px",
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".text-clamp-2": {
          display: "-webkit-box",
          "-webkit-line-clamp": "2",
          "-webkit-box-orient": "vertical",
          overflow: "hidden",
          "text-overflow": "ellipsis",
          // "overflow-wrap": "break-word",
          "white-space ": "nowrap",
          "word-break": "keep-all",
        },
      });
    }),
  ],
};
