import Counter from '@views/Game/counter';
import Description from '@views/Game/description';
import Timer from '@views/Game/timer';
import React from 'react';
import AnswersGrid from './answers';
import { useAppDispatch } from '@store/index';
import { setView } from '@store/features/game';
import { gameViews } from '@constants/game';

const GameView: React.FC = () => {
	const dispatch = useAppDispatch();
	const handleEndGame = () => dispatch(setView(gameViews.END));
	return (
		<div id=''>
			<div className='flex flex-row justify-between my-6 border-b-5 border-text'>
				<Counter />
				<button
					className='px-4 py-2 font-bold text-black border-2 rounded-md border-text '
					onClick={handleEndGame}
				>
					Stop
				</button>
				<Timer />
			</div>
			<div className='flex flex-col gap-8'>
				<Description />
				<AnswersGrid />
			</div>
		</div>
	);
};
export default GameView;
