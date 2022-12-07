/** @type {import('tailwindcss').Config} */
module.exports = {
	important: true,
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'color-1': '#d9f24f',
				'color-2': '#1f1f1f',
			},
			fontFamily: {
				'fivo-sans': 'Fivo Sans',
				'versus-ultra': 'Versus Ultra',
			},
		},
	},
	plugins: [],
};
