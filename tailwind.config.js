/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        light_header_image: "url('/bg-desktop-light.jpg')",
        dark_header_image: "url('/bg-desktop-dark.jpg')",
        light_header_image_mobile: "url('/bg-mobile-light.jpg')",

        dark_header_image_mobile: "url('/bg-mobile-dark.jpg')",
      },
    },
  },
  plugins: [],
};
