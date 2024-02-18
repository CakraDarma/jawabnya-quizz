export const gameViews = Object.freeze({
	INIT: 'INIT',
	GAME: 'GAME',
	END: 'END',
});

export const gameDuration = 6000000; // seconds
export const gameEndingIndicator = Math.round(gameDuration * 0.25); // percent
