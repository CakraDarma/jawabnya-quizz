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
			colors: {
				text: '#0a0907',
				background: '#f6f5f3',
				primary: '#d17d29',
				secondary: '#b5c4af',
				accent: '#92af97',
				danger: '#FA6D5C',
				success: '#89FA5C',
				layout: '#949494',
				content: '#363636',
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
