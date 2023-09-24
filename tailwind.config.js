/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			poppins: ["Poppins", "sans-serif"],
			
		},
		screens: {
			sm: "370px",
			// => @media (min-width: 440px) { ... }

			md: "720px",
			// => @media (min-width: 1024px) { ... }

			lg: "1280px",
			// => @media (min-width: 1280px) { ... }
		},
		// colors: {
		// 	primary: "#00040f",
		// 	secondary: "#00f6ff",
		// 	dimWhite: "rgba(255, 255, 255, 0.7)",
		// 	dimBlue: "rgba(9, 151, 124, 0.1)",
		// },
		extend: {
			colors:{
				primary: "#FFFFFF",
				secondary: "#09977C" ,
			} ,

			container:{
				padding: "1.5rem" ,
				center: true ,

			}
			
		},
	},
	plugins: [],
};
