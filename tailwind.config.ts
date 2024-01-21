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
        border: "#030B00",
        primary: "#8BF465",
        secondary: "#C1F6AE",
        white: "#FFFFFF",
        textInput: "#26312A",
        placeholer: "#6B8373",
        input: "#ACCDB7",
        point: "#171D19",
        graph: "#D7FDE4",
        nav: "#84A08E",
        p: "#45564B",
        success: "#067647",
        bord: "#EFEFEF",
        text2: "#17B26A",
        decrease: "#F04438",
        divider: "#E7E7E7",
        news: "#EAECF0",
        headerWatch: "#0B0E0C",
        taps: "#26312A",
      },
    },
  },
  plugins: [],
};
export default config;
