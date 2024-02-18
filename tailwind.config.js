/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/react';

export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
		'./index.html',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	safelist: [],
	theme: {
		extend: {
			fontFamily: {
				Cabinet: ['CabinetGrotesk-Variable', 'sans-serif'],
			},
			colors: {
				text: '#151515',
				background: '#FFF9E4',
				'pink-custom': '#F03986',
				'green-custom': '#43DD65',
				'yellow-custom': '#F2CA3C',
				'blue-custom': '#3C9BF2',
			},
			animation: {
				'fade-in': 'fadeIn 250ms ease-in',
				'fade-in-down': 'fadeInDown 250ms ease-in',
				heartbeat: 'heartBeat 350ms ease-in',
			},
			keyframes: {
				heartBeat: {
					'0%': {
						rotate: '90deg',
						transform: 'scale(1.3)',
						fill: 'red',
					},
					'100%': {
						rotate: '90deg',
						transform: 'scale(1)',
					},
				},
				fadeIn: {
					'0%': { opacity: '0%', 'pointer-events': 'none' },
					'100%': { opacity: '100%', 'pointer-events': 'auto' },
				},
				fadeInDown: {
					'0%': {
						transform: 'translateY(-10px)',
						opacity: '0%',
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: '100%',
					},
				},
			},
		},
	},
	plugins: [nextui()],
};
