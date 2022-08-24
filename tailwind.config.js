module.exports = {
  content: [
    './src/components/**/*.{ts,tsx,js,jsx}',
    './src/containers/**/*.{ts,tsx,js,jsx}',
    './src/pages/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }
      md: '768px',
      // => @media (min-width: 768px) { ... }
      tablet: { min: '768px', max: '1024px' },
      // => @media (min-width: 768px) && (max-width: 1024px) { ... }
      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontSize: {},
      colors: {
        purple: {
          DEFAULT: '#8025FB',
          light: '#D294FF',
          dark: '#4E00B7',
        },
        green: {
          DEFAULT: '#00F46E',
        },
        blue: {
          light: '#91C1F2',
          telegram: '#0088CC',
        },
        gray: {
          1: '#F1F4F9',
          6: '#354051',
          7: '#202834',
        },
        black: {
          DEFAULT: '#000000',
          1: '#221F45',
        },
        flime: {
          DEFAULT: '#23FFB0',
        },
      },
      height: {
        content: 'fit-content',
      },
    },
  },
  variants: {},
  plugins: [],
};
