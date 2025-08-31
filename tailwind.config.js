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
        primary: '#ae485e',      // Maroon Rose (official brand)
        secondary: '#abb0d3',    // Lavender (official brand)
        accent: '#ae485e',       // Using primary for accent
        'neutral-bg': '#feffff', // Off-white neutral background
        text: '#333333',         // Charcoal text
      },
      fontFamily: {
        sans: ['Open Sans', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'Times New Roman', 'serif'],
      },
    },
  },
  plugins: [],
}
