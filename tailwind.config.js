module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/modules/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        "width": "width",
        "spacing": 'margin, padding',
      },
      maxWidth: {
        "8xl": "100rem",
      },
      screens: {
        "2xsmall": "320px",
        "xsmall": "512px",
        "small": "1024px",
        "medium": "1280px",
        "large": "1440px",
        "xlarge": "1680px",
        "2xlarge": "1920px",
      },
      fontFamily: {
        sans: [
          "GT-Eesti-Thin",
          "Noto Sans",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        gray: {
          50: '#f7f9f9',
          200: '#D9E1E2',
          700: '#768692',
          900: '#333F48',
        },
      }
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '22px'],
      lg: ['20px', '27px'],
      xl: ['30px', '27px'],
      xxl: ['75px', '80px'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#FFFFFF',
      'n-blue': '#00A2C6',
      'n-sky': '#6AD1E3',
      'n-lake': '#0077C8',
      'n-blueslate': '#0032A0',
      'n-pink': '#C6007E',
      'n-red': '#D1314F',
      'n-sun': '#F4CB43',
      'n-grass': '#CEDD50',
      'n-power': '#8BC058',
    },

  },
  plugins: [],
}
