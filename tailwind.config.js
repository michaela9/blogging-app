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
      boxShadow: {
        "my-shadow": "0 16px 48px 0 rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
