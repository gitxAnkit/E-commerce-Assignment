/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' }
        }
      }
    },
  },
  plugins: [
    // Plugin function to add custom styles
    function ({ addBase, addComponents, addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',

          /* Firefox */
          'scrollbar-width': 'none',

          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        },

        '.scrollbar-default': {
          /* IE and Edge */
          '-ms-overflow-style': 'auto',

          /* Firefox */
          'scrollbar-width': 'auto',

          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'block'
          }
        }
      });

      // Add base styles for smooth scrolling
      addBase({
        'html': {
          'scroll-behavior': 'smooth',
        }
      });

      // Add component styles for cards
      addComponents({
        '.category-card': {
          '@apply min-w-[200px] md:min-w-[250px] p-2 transition-transform duration-300 hover:scale-105': {},
        },
        '.category-scroll-container': {
          '@apply flex overflow-x-auto scroll-smooth gap-4 px-4 scrollbar-hide': {},
        },
        '.scroll-button': {
          '@apply absolute top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm': {},
        }
      });
    }
  ],
}