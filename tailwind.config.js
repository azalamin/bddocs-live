module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1868E0",
          secondary: "#4242D4",
          accent: "#96A7FF",
          neutral: "#FA668E",
          "base-100": "#FFFFFF",
          info: "#98A8DD",
          success: "#1BBB70",
          warning: "#E2AF29",
          error: "#FA5C5C",
        },
      },
      // 'dark',
    ],
  },
  plugins: [require("daisyui")],
};
