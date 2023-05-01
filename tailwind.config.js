/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#7e3cc1",
        
"secondary": "#fce580",
        
"accent": "#becef7",
        
"neutral": "#2D2839",
        
"base-100": "#F4F2F8",
        
"info": "#789ADE",
        
"success": "#209283",
        
"warning": "#F7B35E",
        
"error": "#E6391E",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

