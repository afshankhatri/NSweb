/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#93c5fd', // sky-300
          DEFAULT: '#60a5fa', // sky-400
          dark: '#3b82f6', // sky-500
        },
        secondary: {
          light: '#86efac', // green-300
          DEFAULT: '#4ade80', // green-400
          dark: '#22c55e', // green-500
        },
        accent: {
          light: '#fde047', // yellow-300
          DEFAULT: '#facc15', // yellow-400
          dark: '#eab308', // yellow-500
        },
        background: '#f0f9ff', // sky-50
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      boxShadow: {
        glow: '0 0 10px rgba(96, 165, 250, 0.5), 0 0 20px rgba(74, 222, 128, 0.3), 0 0 30px rgba(250, 204, 21, 0.2)',
      },
    },
  },
  plugins: [],
}