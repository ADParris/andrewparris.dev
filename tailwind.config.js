module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		backgroundColor: theme => ({
			...theme('colors'),
			overlay: 'rgba(0, 0, 0, 0.3)',
			'teal.300': '#4FD1C5',
			'teal.400': '#38B2AC',
			'teal.500': '#319795',
			'teal.600': '#2C7A7B',
			'teal.700': '#285E61',
		}),
		borderColor: theme => ({
			...theme('colors'),
			overlay: 'rgba(0, 0, 0, 0.3)',
			'teal.300': '#4FD1C5',
			'teal.400': '#38B2AC',
			'teal.500': '#319795',
			'teal.600': '#2C7A7B',
			'teal.700': '#285E61',
		}),
		fontFamily: {
			sans: [
				'"Nunito"',
				'ui-sans-serif',
				'system-ui',
				'-apple-system',
				'BlinkMacSystemFont',
				'Segoe UI',
				'Roboto',
				'Helvetica Neue',
				'Arial',
				'Noto Sans',
				'sans-serif',
				'Apple Color Emoji',
				'Segoe UI Emoji',
				'Segoe UI Symbol',
				'Noto Color Emoji',
			],
			mono: [
				'"Gruppo"',
				'ui-monospace',
				'SFMono-Regular',
				'Menlo',
				'Monaco',
				'Consolas',
				'Liberation Mono',
				'Courier New',
				'monospace',
			],
			body: ['"Nunito"'],
		},
		textColor: theme => ({
			...theme('colors'),
			overlay: 'rgba(0, 0, 0, 0.3)',
			'teal.300': '#4FD1C5',
			'teal.400': '#38B2AC',
			'teal.500': '#319795',
			'teal.600': '#2C7A7B',
			'teal.700': '#285E61',
		}),
		extend: {
			screens: {
				xs: '480px',
			},
			zIndex: {
				'pos-5': 5,
				'pos-4': 4,
				'pos-3': 3,
				'pos-2': 2,
				'pos-1': 1,
				'neg-1': -1,
				'neg-2': -2,
				'neg-3': -3,
				'neg-4': -4,
				'neg-5': -5,
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};