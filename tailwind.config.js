/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#B819F0",
          "secondary": "#C43364",
          "accent": "#F69159",
          "neutral": "#fff",
          "base-100": "#0B0C10",
          "info": "#00B5FF",
          "success": "#00A96E",
          "warning": "#FFBE00",
          "error": "#FF5861",
        },
      }
    ]
  },
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")]
}

