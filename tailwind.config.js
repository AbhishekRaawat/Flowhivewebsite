/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: '#2B065D',
          dark: '#1A0038',
          light: '#8E44AD',
          overlay: '#1A1A1A'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-overlay': 'linear-gradient(180deg, rgba(26, 26, 26, 0.4), rgba(43, 6, 93, 0.3))',
        'gradient-card': 'linear-gradient(135deg, rgba(43, 6, 93, 0.2), rgba(142, 68, 173, 0.1))',
        'gradient-glow': 'linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))'
      },
      boxShadow: {
        'neon': '0 0 20px rgba(142, 68, 173, 0.5)',
        'neon-hover': '0 0 30px rgba(142, 68, 173, 0.7)',
        'inner-glow': 'inset 0 0 20px rgba(142, 68, 173, 0.3)'
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(142, 68, 173, 0.5)' },
          '50%': { boxShadow: '0 0 30px rgba(142, 68, 173, 0.8)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      }
    }
  },
  plugins: [],
};