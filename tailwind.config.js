/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customJs: "#F3E11D",
        customJs100: "#978b09",
        customJava: "#CB2D2E",
        customPython: "#569ED0",
        customCode: "#0005",
      },
    },
  },
  plugins: [],
};
