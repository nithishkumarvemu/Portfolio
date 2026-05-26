/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        bg: '#030712',
        bg2: '#080f20',
        bg3: '#0c1530',
        violet: {
          DEFAULT: '#7c3aed',
          light: '#a78bfa',
          dark: '#5b21b6',
        },
        cyan: {
          DEFAULT: '#06b6d4',
          light: '#67e8f9',
        },
        neon: '#8b5cf6',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(124,58,237,0.4)' },
          '50%': { boxShadow: '0 0 50px rgba(124,58,237,0.8), 0 0 80px rgba(6,182,212,0.3)' },
        },
      },
      backgroundImage: {
        'grad-primary': 'linear-gradient(135deg, #7c3aed, #06b6d4)',
        'grad-secondary': 'linear-gradient(135deg, #a855f7, #22d3ee)',
        'grad-dark': 'linear-gradient(135deg, #030712, #080f20)',
      },
    },
  },
  plugins: [],
}
