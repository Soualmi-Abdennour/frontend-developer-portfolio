import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center:true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      fontFamily:{
        inter:'var(--font-inter)',
        calistoga:'var(--font-calistoga)'
      },
      keyframes:{
        "ping-large":{
          '75%,100%':{
            transform:"scale(3)",
            opacity:"0"
          },
        },
        "move-left":{
          '0%':{
            transform:'translateX(0%)'
          },
          "100%":{
            transform:"translateX(-50%)"
          }
        },
        "move-right":{
          '0%':{
            transform:'translateX(-50%)'
          },
          "100%":{
            transform:"translateX(0%)"
          }
        },
      },
      animation:{
        'move-left':"move-left 1s linear infinite",
        'move-right':"move-right 1s linear infinite",
        'ping-large':'ping-large 1s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};
export default config;
