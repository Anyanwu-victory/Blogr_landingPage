/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      backgroundImage: {
        'mobile-pattern': "url('/images/bg-pattern-intro-mobile.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },

      colors:{
        lightRed: 'hsl(356, 100%, 66%)',
        veryLightRed: 'hsl(355, 100%, 74%)',
        veryDarkBlue: 'hsl(208, 49%, 24%)',
        grayishBlue: 'hsl(240, 2%, 79%)',
        veryDarkGrayishBlue: 'hsl(207, 13%, 34%)',
        veryDarkBlackBlue: 'hsl(240, 10%, 16%)',
        veryLightRed: 'hsl(13, 100%, 72%)',
        lightRed:' hsl(353, 100%, 62%)',
        veryDarkGrayBlue: 'hsl(237, 17%, 21%)',
        veryDarkDesaturateBlue: 'hsl(237, 23%, 32%)',

      },
    },
  },
  plugins: [],
}

