/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        header: '560px',
        rate: '400px',
      },
      fontSize: {
        h1: '2.6rem',
      },
      screens: {
        xs: '475px',
      },
      colors: {
        main: '#131722',
        subMain: '#1D2331',
        textMain: '#fff',
        textSubMain: '#CBCBCB',
        star: '#FFB000',
        text: '#C0C0C0',
        border: '#4b5563',
        dryGray: '#E0D5D5',
        progressText: "#CBCBCB",
        progressBar: "#614BB7",
        win: "#2CA37D",
        lose: "#E87CA0",
        winner: "#5A86DD",
        blue: "#4EC0E8",
        lightBlue: "#38B5E3",
        green: "#53C2B6",
        wrong: "#ED0F4F"

      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'quicksand': ['Quicksand', 'sans-serif']
      },
      fontSize: {
        boxtext: ['8px', '21px'],
        xs: ['8px', '16px'],
        sm: ['12px', '14px'],
        base: ['14px', '21px'],
        lg: ['18px', '28px'],
        xl: ['24px', '32px'],
        xxl: ['14px', '32px'],
      },
      boxShadow: {
        base: '0 1px 12px 0 hsl(0deg 0% 80% / 11%)',
      }
    },
  },
  plugins: [],
}
