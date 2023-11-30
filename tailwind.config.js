/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				GeneralSansRegular: "'GeneralSansRegular', serif",
				GeneralSansMedium: "'GeneralSansMedium', serif",
				GeneralSansSemibold: "'GeneralSansSemibold', serif",
				InterRegular: "'InterRegular', serif",
				InterMedium: "'InterMedium', serif",
				InterSemibold: "'InterSemibold', serif",
			},
			spacing: {
				is01px: "1px",
				529: "529px",
			},
			colors: {
				"klasha-red": "#EF2C5A",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
