  /** @type {import('tailwindcss').Config} */
  module.exports = {
      content: [
        "./app/**/*.{ts,tsx}",
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
      ],
      darkMode: "class",
      theme: {
        extend: {
          fontFamily: {
              yekan: ['YekanBakh', 'sans-serif'],
            },
        },
      },
      plugins: [
        require('tailwind-scrollbar'), 
        require('@tailwindcss/forms'),
      ],
    };
    