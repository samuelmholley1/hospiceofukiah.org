/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2E6D38',      // Forest Green
        secondary: '#5BA8D1',    // Teal Blue
        accent: '#F9A826',       // Goldenrod
        'neutral-bg': '#F7F7F7', // Light neutral background
        text: '#333333',         // Charcoal text
      },
      fontFamily: {
        sans: ['Open Sans', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'Times New Roman', 'serif'],
      },
    },
  },
  plugins: [],
}
