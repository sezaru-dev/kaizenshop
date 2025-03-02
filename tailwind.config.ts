import type { Config } from "tailwindcss";
import scrollbarHide from 'tailwind-scrollbar-hide'
const plugin = require('tailwindcss/plugin');

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      animation: {
        "loop-scroll": "loop-scroll 60s linear infinite"
      },
      keyframes: {
        "loop-scroll": {
          from: {transform: "translateX(0)"},
          to: {transform: "translateX(-110%)"}
        }
      }
    },
  },
  plugins: [
    /* hide the input:number increment & decrement btn */
    plugin(function ({ addBase }: { addBase: (styles: { [key: string]: any }) => void }) {
      addBase({
        'input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button': {
          '-webkit-appearance': 'none',
          'margin': '0',
        },
        'input[type=number]': {
          '-moz-appearance': 'textfield',
        },
      });
    }),
    scrollbarHide
  ],
};
export default config;
