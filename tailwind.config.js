/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'mono': ['Roboto Mono', 'monospace'],
      "sans": ["Inter"]
    },
    extend: {
      colors: {
        "t-blue-1000": "#0e1323",
        "t-blue-900": "#121728",
        "t-blue-800": "#11182f",
        "t-blue-700": "#131b34",
        "t-blue-500": "#1d2541",
        "t-blue-300": "#2a375a",
        "t-blue-200": "#2e3b60",
        "t-blue-100": "#36456e",
        "t-blue-50": "#506293",

        "t-indiblue-1000": "",

        "t-violet-800": "#6A64F1",
        "t-violet-700": "#726ef3",
        "t-violet-500": "#8580f3",
        "t-violet-2OO": "#a194ee",

        "t-alternative-700": "#262836"
      },
    },
  },
  plugins: [],
}
