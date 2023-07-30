/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "light-gray": "#F8F9FA",
        "middle-gray": "#6C757D",
        primary: "#2B7EFB",
        "primary-text": "#212529",
        "secondary-text": "#6C757D",
      },
      fontSize: {
        "3xl": "1.75rem",
        "4xl": "2.5rem",
      },
    },
  },
  plugins: [],
};
