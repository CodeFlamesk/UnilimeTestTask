/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {

    extend: {
      lineHeight: {

      },

      borderColor: ['focus', 'valid', 'invalid'],
      outlineColor: ['focus', 'valid', 'invalid'],
      screens: {
        'xs': '360px',
        'ft': '420px',
        'ff': '440px',
        'ftx': '500px',
        'fnin': '519px',
        'fs': '574px',
        'ss': '670px',
        'tfe': '348px',
        'mde': '800px',
        'tb': '991.98px',
        'ct': '1344px',
        '3xl': '1920px'

      },
      fontSize: {

      },

      spacing: {

      },
      borderRadius: {

      },

    },

    colors: {
      "grey-100": "#F1F5F9",
      "grey-300": "#CBD5E1",
      "grey-700": "#334155",
      "grey-800": "#1E293B",
      "grey-900": "#0F172A",
      "grey-border": "#E2E8F0",
      "white": "#FFFFFF",
      "dark": "#1E1E1E",
      "orange-btn": "#F9C06A",
      "color-coffee": "#603809",
      "grey": "#707070",
      "grey-second": "#B3AEA9",
      "orange-lite": "#FFF9F1",
      "yellow-lite": "#F3D83B",
      "color-hover": "#FFEED8",
      "twitter": "#1DA1F2",
      "instagram": "#E1306C",
      "facebook": "#17A9FD",
      "green": "#bfee00",
      "red": "#fe0000",
      "blue": "#3B82F6",
      "primary-500": "#3B82F6",
      "bts-grey": "#94A3B8",
      "green-link": "#4CB051",
      "red-youtube": "#fe0000",
    },

  },
  plugins: [],
  variants: {},

}

