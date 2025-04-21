/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "dotted-grid": "radial-gradient(#0001222 5px, transparent 5px)",
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', "monospace"],
        sans: ['"JetBrains Mono"', "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
