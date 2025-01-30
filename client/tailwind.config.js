/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Add custom classes if needed
      noScrollBar: {
        "::-webkit-scrollbar": "hidden",
        "-ms-overflow-style": "none",
        "scrollbar-width": "none",
      },
      scrollbar: {
        custom: {
          width: "12px",
          "track-color": "#e5e7eb",
          "thumb-color": "#4f46e5",
          "thumb-radius": "6px",
          "thumb-border": "3px solid #e5e7eb",
        },
      },
    },
  },
  plugins: [],
};
