/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#060918",
        cardBg: "rgba(15, 23, 42, 0.72)",
        cardBorder: "rgba(148, 163, 184, 0.12)",
        cyberCyan: "#4b9bff",
        cyberPurple: "#7c83ff",
        cyberBlue: "#5f8efb",
        neonGreen: "#38b2ac",
        neonPink: "#f472b6",
      },
      fontFamily: {
        sans: ["Inter", "Outfit", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float-delayed 7s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'glow-cyan': 'glow-cyan 2s ease-in-out infinite alternate',
        'glow-purple': 'glow-purple 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'float-delayed': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(15px)' },
        },
        'glow-cyan': {
          '0%': { boxShadow: '0 0 5px rgba(0, 242, 254, 0.2), 0 0 10px rgba(0, 242, 254, 0.1)' },
          '100%': { boxShadow: '0 0 15px rgba(0, 242, 254, 0.6), 0 0 30px rgba(0, 242, 254, 0.3)' }
        },
        'glow-purple': {
          '0%': { boxShadow: '0 0 5px rgba(138, 43, 226, 0.2), 0 0 10px rgba(138, 43, 226, 0.1)' },
          '100%': { boxShadow: '0 0 15px rgba(138, 43, 226, 0.6), 0 0 30px rgba(138, 43, 226, 0.3)' }
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
