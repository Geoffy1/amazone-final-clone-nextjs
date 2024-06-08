/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  theme: {
    extend: {
      
      colors: {
        amazone_blue: {
          light: "#232F3E",
          DEFAULT: "#131921",
        },
      },
    },
    
  },
  variants: {
      extend: {},
  },
  plugins: [],
};
