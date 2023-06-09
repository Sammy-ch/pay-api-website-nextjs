/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
        "xs": {"max":"375px"},

        'sm': {'max':'640px'},
        // => @media (min-width: 640px) { ... }
        'fsm': {'max':'720px'},
        
        'md': {'max':'900px'},
        // => @media (min-width: 768px) { ... }
  
        'lg': {'max':'1024px'},
        // => @media (min-width: 1024px) { ... }
  
        'xl': {'max':'1280px'},
        // => @media (min-width: 1280px) { ... }
        
        "1xl":{"max":"1350px"},
  
        '2xl': {'max':'1536px'},
        // => @media (min-width: 1536px) { ... }
    },
    extend: {
    },
  },
  plugins: [],
}
