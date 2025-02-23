module.exports = {
  plugins: [require("@tailwindcss/forms")],
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Adjust this to match your file structure
  ],
  theme: {
    extend: {
      
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

