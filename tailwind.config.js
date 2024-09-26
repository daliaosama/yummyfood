/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '344px',
        'md': '700px',  
        'lg': '1024px', 
        'xl': '1280px', 
      },
      gridTemplateColumns: {
        '4':'repeat(4,15rem)',
        '1':'repeat(1,20rem)'
      },
      width:{
        'menu':"75rem",
        "nav":"60rem",
        "video":"80rem",
        "formb":'23rem',
        "form":'40rem',
        "menumo":"28rem",
        
      },
      height:{
      'video':'24.5rem',
      'menu':'40rem',
      'home':"40rem",
      'form':'26rem',
      'menumo':'120rem',
      'navmo':'45rem',
      "formcontact":"35rem",
      "booking":"40rem"
      }
      ,padding:{
        pad:'20rem'
      }
    },
  },
  plugins: [],
}

