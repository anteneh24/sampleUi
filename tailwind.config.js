/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "var(--brand-gradient)",
        secondary: "#001C33",
        accent: "#4AC97D",
        header: "#1F3655",
        headerLight: "#00579B",
        grayLight: "#F5F5F5",
        buttonOrange: "#FD816B",
        checkBackgroundColor: "#01264A",
        buttonGray: "#D2D2D2",
      },
      gradientColorStops: {
        primary: "var(--brand-gradient)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
