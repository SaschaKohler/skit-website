/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          peach: "#E6C7B3", // Hintergrundfarbe
          dark: "#3C3C3C", // Dunkelgrau für Seitenleiste
          accent: "#E67E22", // Orange Akzentfarbe
          gold: "#FFD700", // Goldfarbe für das Mandala-Icon
        },
        text: {
          primary: "#3C3C3C", // Haupttextfarbe
          light: "#FFFFFF", // Weißer Text
          accent: "#E67E22", // Akzent-Textfarbe
        },
      },
      gradients: {
        peach: "linear-gradient(135deg, #E6C7B3 0%, #F5DEB3 100%)",
      },
    },
  },
  plugins: [],
};
