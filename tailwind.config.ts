import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	container: {
		center: true,
		padding: "2rem"
	},
	fontFamily: {
		mono: "var(--font-jetbrains_mono)",
		primary: "var(--font-proxima-nova)",
		header: "var(--font-brandon-grotesque)"
	},
  	extend: {
  		colors: {
  			primary: 'white',
			accent: {
				DEFAULT: "#00e187",
				hover: "#00FF99"
			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
