/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */

module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    screens: {
      tablet: '768px',
      desktop: '1440px',
    },
    fontFamily: {
      sans: ['Kumbh Sans', 'sans-serif'],
      serif: ['Roboto Slab', 'serif'],
      mono: ['Space Mono', 'monospace'],
    },
    fontSize: {
      H1: [
        '100px',
        {
          lineHeight: '120px',
          letterSpacing: '-5px',
        },
      ],
      'H1-mobile': [
        '80px',
        {
          linehight: '100px',
          letterSpacing: '-5px',
        },
      ],
      H2: ['28px', '34px'],
      H3: [
        '16px',
        {
          lineHeight: '19px',
          letterSpacing: '10px',
        },
      ],
      H4: [
        '13px',
        {
          lineHeight: '16px',
          letterSpacing: '5px',
        },
      ],
      Body1: ['14px', '18px'],
      Body2: ['12px', '14px'],
    },
    colors: {
      current: 'currentColor',
      red: '#F87070',
      blue: '#70F3F8',
      pink: '#D881F8',
      white: '#fff',
      bg: {
        DEFAULT: '#1E213F',
        dark: '#161932',
        light: '#EFF1FA',
      },
      divider: '#E3E1E1',
    },
    textColor: {
      primary: '#D7E0FF',
      white: '#fff',
      dark: '#1E213F',
      red: '#F87070',
      blue: '#70F3F8',
      pink: '#D881F8',
    },
    keyframes: {
      blink: {
        '0%, 100%': {
          opacity: 1,
        },
        '50%': {
          opacity: 0,
        },
      },
    },
    animation: {
      blink: 'blink 1s ease-out infinite',
    },
    extend: {
      width: {
        '9/10': '90%',
      },
      height: {
        '9/10': '90%',
      },
      boxShadow: {
        'circle-option': '0 0 0 1px #EFF1FA',
      },
    },
  },
  plugins: [],
};
