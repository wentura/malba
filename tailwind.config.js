/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
        9: "24px",
      },
      colors: {
        mabla: {
          10: "#f0f0f0",
          20: "#f0ad5d",
          50: "#c69024",
          70: "#a8b157",
          80: "#536b13",
          100: "#d7cfcd",
          200: "#454545",
          300: "#003631",
          400: "#2c301a",
        },
      },
    },
    plugins: [],
  },
};
