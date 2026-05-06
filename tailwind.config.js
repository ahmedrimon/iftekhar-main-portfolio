/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      animation: {
        shine: "shine 0.8s ease-in-out",
      },
      keyframes:{
        shine : {
          "0%": { left: "-100%" },
          "100%": { left: "100%" },
        },
      },
      fontFamily: {
        display: ['"Editorial New"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      colors: {
        ink: '#0a0a0a',
        paper: '#f2f0eb',
        'paper-2': '#e8e5de',
        muted: '#9a9590',
        accent: '#c8b89a',
      },
    },
  },
  plugins: [],
}
