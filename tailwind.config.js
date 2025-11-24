/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F56C07',
        secondary: '#8A51E6',
        accent: '#E92AFE',
        purple: '#6952FF',
        blue: '#24BAFF',
        dark: '#262626',
        light: '#F6F6F6',
        white: '#FFFFFF',
        gray: {
          50: '#F6F6F6',
          100: '#EBEBEB',
          200: '#EAEAEA',
          300: '#D9D9D9',
          400: '#CCCCCC',
          500: '#8A8A8A',
          600: '#666666',
          700: '#4D4D4D',
          800: '#262626',
          900: '#1A1A1A',
        }
      },
      fontFamily: {
          'machina': ['"PP Neue Machina"', 'sans-serif'],
          'firs': ['OpenSans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'firs-bold': ['OpenSans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'unbounded': ['Unbounded', 'sans-serif'],
      },
      fontSize: {
        'xs': ['12px', '1.2'],
        'sm': ['14px', '1.3'],
        'base': ['16px', '1.3'],
        'lg': ['18px', '1.3'],
        'xl': ['20px', '1.3'],
        '2xl': ['24px', '1.1'],
        '3xl': ['28px', '1.1'],
        '4xl': ['36px', '1.3'],
        '5xl': ['62px', '1.2'],
        '6xl': ['82px', '1.3'],
          'clamp-sm': 'clamp(0.875rem, 2vw, 1.25rem)',
          'clamp-base': 'clamp(1rem, 2.5vw, 1.5rem)',
          'clamp-xl': 'clamp(2rem, 6vw, 4rem)',
      },
      letterSpacing: {
        'tight': '-0.03em',
        'tighter': '-0.05em',
      },
      lineHeight: {
        'tight': '1.29',
        'relaxed': '1.4',
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
        '5xl': '35px',
        '6xl': '42px',
        '7xl': '46px',
        '8xl': '68px',
        '9xl': '100px',
      },
      boxShadow: {
        'custom': '0px 0px 100px 0px rgba(0, 0, 0, 0.1)',
        'button': '0px 20px 25px 0px rgba(0, 0, 0, 0.1)',
        'card': '0px 11px 40px 0px rgba(0, 0, 0, 0.1)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      screens: {
          'mobile-only': { min: '320px', max: '743px' },
          'tablet-only': { min: '744px', max: '1279px' },
          'desktop-only': { min: '1280px', max: '1979px' },
          'desktop-xl-only': { min: '1980px' },
        ...defaultTheme.screens,
      },

    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
} 