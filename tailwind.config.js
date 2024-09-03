/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-inner': '4px 5px 5px 4px rgba(0,0,0,0.35),inset 0px 3px 3px -1px rgba(255, 255, 255, 0.45)',
      }
    },
  },
  plugins: [],
}
