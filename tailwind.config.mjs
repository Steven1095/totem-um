/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'slider-nav': '#003333',
				'botones': '#a8cf45',  
				'botones-hover': '#65913e',
				'color-iconos': '#DCA005'
			  },
		},
	},
	plugins: [],
}
