/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  darkTheme: "scaffoldEthDark",
  // DaisyUI theme colors
  daisyui: {
    themes: [
      {
        scaffoldEth: {
          primary: "#93BBFB",
          "primary-content": "#212638",
          secondary: "#DAE8FF",
          "secondary-content": "#212638",
          accent: "#93BBFB",
          "accent-content": "#212638",
          neutral: "#212638",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#f4f8ff",
          "base-300": "#DAE8FF",
          "base-content": "#212638",
          info: "#93BBFB",
          success: "#34EEB6",
          warning: "#FFCF72",
          error: "#FF8863",

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
      {
        scaffoldEthDark: {
          primary: "#212638",
          "primary-content": "#F9FBFF",
          secondary: "#323f61",
          "secondary-content": "#F9FBFF",
          accent: "#4969A6",
          "accent-content": "#F9FBFF",
          neutral: "#F9FBFF",
          "neutral-content": "#385183",
          "base-100": "#385183",
          "base-200": "#2A3655",
          "base-300": "#212638",
          "base-content": "#F9FBFF",
          info: "#385183",
          success: "#34EEB6",
          warning: "#FFCF72",
          error: "#FF8863",

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
            "--tooltip-color": "oklch(var(--p))",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
      {
        ghoPayLight: {
          primary: "#67e8f9",
          "primary-content": "#27284A",
          secondary: "#0891b2",
          "secondary-content": "#A1FFF4",
          accent: "#facc15",
          "accent-content": "#27284A",
          neutral: "#0c4a6e",
          "neutral-content": "#FAFAFA",
          "base-100": "#191920",
          "base-200": "#1F1E27",
          "base-200": "#242536",
          info: "#dbeafe",
          "info-content": "#FAFAFA",
          success: "#22c55e",
          "success-content": "#1F1E27",
          warning: "#f59e0b",
          "warning-content": "#1F1E27",
          error: "#f87171",
          "error-content": "#1F1E27",

          "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0.25s", // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          "--border-btn": "1.5px", // border width of buttons
          "--tab-border": "1.5px", // border width of tabs
          "--tab-radius": "0.5rem", // border radius of tabs
        },
      },
      {
        ghoPayDark: {
          primary: "#67e8f9", // Bright color remains the same
          "primary-content": "#E0E0E0", // Lighter text color for contrast
          secondary: "#0891b2", // Slightly brighter to stand out in dark
          "secondary-content": "#E0E0E0", // Lighter text color for contrast
          accent: "#facc15", // No change, bright color is already suitable
          "accent-content": "#27284A", // Dark text color for contrast
          neutral: "#0c4a6e", // Slightly brighter to be visible on dark backgrounds
          "neutral-content": "#E0E0E0", // Lighter text color for contrast
          "base-100": "#121212", // Darker base color
          "base-200": "#1B1B1B", // Darker shade for layered elements
          "base-300": "#242424", // Another darker shade for differentiation
          info: "#87CEEB", // Lighter color for better visibility
          "info-content": "#27284A", // Dark text color for contrast
          success: "#22c55e", // No change, already suitable for dark mode
          "success-content": "#E0E0E0", // Lighter text color for contrast
          warning: "#f59e0b", // No change, already suitable for dark mode
          "warning-content": "#27284A", // Dark text color for contrast
          error: "#f87171", // No change, already suitable for dark mode
          "error-content": "#27284A", // Dark text color for contrast

          // UI properties can remain the same as they are not color dependent
          "--rounded-box": "1rem",
          "--rounded-btn": "0.5rem",
          "--rounded-badge": "1.9rem",
          "--animation-btn": "0.25s",
          "--animation-input": "0.2s",
          "--btn-focus-scale": "0.95",
          "--border-btn": "1.5px",
          "--tab-border": "1.5px",
          "--tab-radius": "0.5rem",
        },
      },
    ],
  },
  theme: {
    extend: {
      boxShadow: {
        center: "0 0 12px -2px rgb(0 0 0 / 0.05)",
      },
      backgroundImage: {
        "text-gradient": "linear-gradient(180deg, #0891B2 0%, #67E8F9 100%)",
      },
      animation: {
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
};
