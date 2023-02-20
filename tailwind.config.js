/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      "blue-primary": '#0D1882',
      "light-grey": "#C0C0C0",
      "dark-grey": "#808080",
      yellow:"#FCF9C6",
      "grey-yellow":"#EEEEE8",
      'grey':"#333"
    },
  },
  plugins: [],
}