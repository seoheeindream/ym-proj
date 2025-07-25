/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        lightseagreen: "#3fafa6",
        white: "#fff",
        gray: "rgba(255, 255, 255, 0.9)",
        black: "#000",
      },
      fontFamily: {
        "bagel-fat-one": "Bagel Fat One",
        "cafe24-pro-up": "Cafe24 PRO UP",
        "Bagel Fat One": "Bagel Fat One",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
