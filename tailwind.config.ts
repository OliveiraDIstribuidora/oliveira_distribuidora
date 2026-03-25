import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#d70005',
          dark: '#161617',
        },
      },
      animation: {
        'slide': 'slide 40s linear infinite',
        'slide-in-right': 'slide-in-right 0.3s ease-out',
        'modal-in': 'modal-in 0.2s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
      },
      keyframes: {
        slide: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'slide-in-right': {
          from: { transform: 'translateX(100%)' },
          to:   { transform: 'translateX(0%)' },
        },
        'modal-in': {
          from: { opacity: '0', transform: 'scale(0.95) translateY(8px)' },
          to:   { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

export default config
