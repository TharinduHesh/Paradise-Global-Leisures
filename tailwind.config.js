/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#e8ecf4',
          100: '#c5cfe3',
          200: '#9eafd0',
          300: '#778fbd',
          400: '#5a77ae',
          500: '#3d5fa0',
          600: '#2e5093',
          700: '#1d3f84',
          800: '#0f2d6b',
          900: '#0a1628',
          950: '#060e1a',
        },
        gold: {
          50: '#fdf8ec',
          100: '#f9edcc',
          200: '#f4dc9a',
          300: '#eec765',
          400: '#e8b33f',
          500: '#c9a84c',
          600: '#b8912e',
          700: '#9a7425',
          800: '#7d5d1f',
          900: '#664d1a',
        },
        beige: {
          50: '#fdfcfa',
          100: '#f9f6f0',
          200: '#f5f0e8',
          300: '#ede4d3',
          400: '#dfd4be',
          500: '#cfc0a5',
          600: '#b8a38a',
          700: '#9a8470',
          800: '#7d6a5a',
          900: '#635448',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(to bottom, rgba(10,22,40,0.75) 0%, rgba(10,22,40,0.5) 50%, rgba(10,22,40,0.8) 100%)",
        'gold-gradient': "linear-gradient(135deg, #c9a84c 0%, #e8b33f 50%, #c9a84c 100%)",
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-in': 'slideIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      boxShadow: {
        'gold': '0 4px 20px rgba(201, 168, 76, 0.3)',
        'navy': '0 4px 20px rgba(10, 22, 40, 0.3)',
        'card': '0 2px 15px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.05)',
        'card-hover': '0 10px 40px rgba(0,0,0,0.15), 0 4px 10px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
}
