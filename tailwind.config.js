/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        "popy":['Poppins', 'sans-serif']
      },
      screens:{
        'xs':"500px"
      },
      keyframes:{
        showUp:{
          "0%" :{
            transform: "translateY(0)"
           
          },
          "100%" :{
           
            transform:"scale(1.1)"
            

           
          }
        }
      },
      animation:{
        showUp:'showUp 0.2s ease-in-out 1 forwards'
        
      }
    },
  },
  plugins: [],
}

