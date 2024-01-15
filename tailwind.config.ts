import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F2F2F2",
        main: "#1F332B",
        main2: "#2E644E",
        primary: "#8BF465",
        secondary: "#C1F6AE",
        white: "#FFFFFF",
        textInput: "#26312A",
        placeholer: "#6B8373",
        input: "#ACCDB7",
        point: "#171D19",
        p: "#45564B",
      },
    },
  },
  plugins: [],
};
export default config;
