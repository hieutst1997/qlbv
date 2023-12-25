module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#FF7868',
        'gray-1': '#E0E1E3',
        'gray-2': '#F5F5F5',
        'yellow-1': '#FFD153',
        'yellow-2': '#FFDB7D',
        'yellow-3': '#FFCD56',
        'blue-1': '#37AFD4',
        'pink-1': '#F75DA6'
      },
      
      flex: {
        'flex-col-1': '0 0 8.33%',
        'flex-col-2': '0 0 16.67%',
        'flex-col-3': '0 0 25%',
        'flex-col-4': '0 0 33.33%',
        'flex-col-5': '0 0 41.67%',
        'flex-col-6': '0 0 50%',
        'flex-col-7': '0 0 58.33%',
        'flex-col-8': '0 0 66.67%',
        'flex-col-9': '0 0 75%',
        'flex-col-10': '0 0 83.33%',
        'flex-col-11': '0 0 91.67%',
        'flex-col-12': '0 0 100%',
      },
      boxShadow : {
        'shadow-ct-1': '2px 2px 9px 1px rgba(221,221,221,0.25)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}



