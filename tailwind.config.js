/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Añade soporte para dark mode
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {      
      colors: {        
          "wh-10": "#F4F4F4",
          "wh-20":  "FFFFFF",
          "wh-50": "#FBFBFB",
          "wh-100": "#C9C9C9",
          "wh-300": "#939393",
          "wh-500": "#595959",
          "wh-900": "#0F0F0F",
          "accent-red": "#EA9648",
          "accent-orange": "#F6CF68",
          "accent-green": "#C2E9B4",
        
        dark: {
          "wh-10": "#0B0B0B",
          "wh-50": "#161616",
          "wh-100": "#363636",
          "wh-300": "#6C6C6C",
          "wh-500": "#A6A6A6",
          "wh-900": "#F0F0F0",
          "accent-red": "#B35832",
          "accent-orange": "#C2A252",
          "accent-green": "#91B38A",
        }
      },
      animation: {
        ticker: 'ticker 10s linear infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      backgroundImage: (theme) => ({
        "gradient-gradual":
        "linear-gradient(180deg, rgba(116,116,116,0) 66.15%, #000000 100%)",
      }),
    },
    screens: {
      xs:"480px",
      sm: "768px",
      md: "1060px",
    }
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
}
