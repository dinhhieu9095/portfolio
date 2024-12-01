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
		primary: "var(--font-fira_sans)",
		header: "var(--font-fira_sans)"
	},
  	extend: {
  		colors: {
  			primary: 'white',
			accent: {
				DEFAULT: "#00e187",
				hover: "#00FF99"
			},
			even: 'hsla(60,10%,96.08%,1)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
