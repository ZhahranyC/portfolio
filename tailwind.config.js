/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        "Roboto-slab": ["Roboto-slab", "serif"],
      },
      colors: {
        "main-bg": "#181A1B",
        "sub-bg": "#26292A",
        "main-green": "#456455",
        "sub-green": "#556A5E",
        "light-green": "#AFD0BD",
        "navbar-base": "#989898",
      },
      width: {
        "200plus52": "calc(200% + 52px)",
      },
    },
  },
  plugins: [],
};
