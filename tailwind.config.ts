import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: 'var(--font-alice)',
        alt: 'var(--font-roxborough)',
      },
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        transparent: 'transparent',
        current: 'currentColor',
        status: {
          success: '#119c70',
          warning: '#F2C94C',
          error: '#F17B7B',
          info: '#2D9CDB',
        },
        gray: {
          secondary: '#E4E7EB',
          50: '#f7f7f7',
          100: '#f0f0f0',
          200: '#d9d9d9',
          300: '#c2c2c2',
          400: '#959595',
          500: '#686868',
          600: '#5e5e5e',
          700: '#4f4f4f',
          800: '#404040',
          900: '#343434',
        },
        brand: {
          secondary: '#4F796C',
          50: '#ABCED8',
          100: '#ABEDD8',
          200: '#92DDC9',
          300: '#78C8B9',
          400: '#5EBBA9',
          500: '#45AA99',
          600: '#399184',
          700: '#2E796F',
          800: '#226159',
          900: '#174844',
        },
        gradient: {
          brand: 'linear-gradient(180deg, #4F796C 0%, #45AA99 100%) ',
          light: 'linear-gradient(180deg, #FFFFFF 0%, #F7F7F7 100%)',
          dark: 'linear-gradient(180deg, #404040 0%, #343434 100%)',
          error: 'linear-gradient(180deg, #f17b7b 0%, #9f2828 100%)',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        moveHorizontal: {
          '0%': {
            transform: 'translateX(-50%) translateY(-10%)',
          },
          '50%': {
            transform: 'translateX(50%) translateY(10%)',
          },
          '100%': {
            transform: 'translateX(-50%) translateY(-10%)',
          },
        },
        moveInCircle: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '50%': {
            transform: 'rotate(180deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
        moveVertical: {
          '0%': {
            transform: 'translateY(-50%)',
          },
          '50%': {
            transform: 'translateY(50%)',
          },
          '100%': {
            transform: 'translateY(-50%)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        first: 'moveVertical 30s ease infinite',
        second: 'moveInCircle 20s reverse infinite',
        third: 'moveInCircle 40s linear infinite',
        fourth: 'moveHorizontal 40s ease infinite',
        fifth: 'moveInCircle 20s ease infinite',
      },
      backgroundImage: {
        'hero-premium': "url('/premium-banner.png')",
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
