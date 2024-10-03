/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 30s linear infinite',
        FadeIn: 'cFadeIn 0.5s linear',
        FadeInRev: 'cFadeInRev 0.5s linear',
      },
      keyframes: {
        cFadeIn: {
          '0%, 25%': { transform: 'translateX(-20px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        cFadeInRev: {
          '0%, 25%': { transform: 'translateX(20px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
