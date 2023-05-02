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
        
"primary": "#91972a",
        
"secondary": "#b6c454",
        
"accent": "#d8d174",
        
"neutral": "#2D2839",
        
"base-100": "#f2f4f3",
        
"info": "#e6d3a3",
        
"success": "#209283",
        
"warning": "#F7B35E",
        
"error": "#E6391E",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

