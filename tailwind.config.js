/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'color-1': '#272c48',
				'color-2': '#fe6b02',
				'color-3': '#52566d',
			},
			fontFamily: {
				bebasneue: 'Bebas Neue',
				poppins: 'Poppins',
			},
		},
	},
	plugins: [],
};
