import { gameViews } from '@constants/game';
import { setView } from '@store/features/game';
import { useAppDispatch, useAppSelector } from '@store/index';
import React from 'react';
import ResultsAnswer from './answer';
import { ImCheckmark } from 'react-icons/im';
import { AiOutlineClose } from 'react-icons/ai';
const ResultsView: React.FC = () => {
	const questions = useAppSelector((state) => state.game.questions);
	const answers = useAppSelector((state) => state.game.answers);
	const score = useAppSelector((state) => state.game.score);
	const dispatch = useAppDispatch();

	const handleRestart = () => dispatch(setView(gameViews.INIT));

	return (
		<>
			<div className='flex flex-col gap-4 border-b-5 border-text'>
				<h1 className='mt-4 text-4xl mt sm:text-5xl'>Game Over</h1>

				<div className='flex flex-row justify-between w-full '>
					<div className='flex flex-row justify-center gap-2'>
						<h3 className='text-2xl sm:text-3xl'>Score:</h3>
					</div>
					<span className='text-2xl text-gray-600 sm:text-3xl'>
						{(score / questions.length) * 100}/100
					</span>
				</div>
				<div className='flex flex-row justify-between w-full '>
					<div className='flex flex-row justify-center gap-2'>
						<ImCheckmark size={25} color='#42AE5A' />
						<h3 className='text-2xl sm:text-3xl'>Right answers:</h3>
					</div>
					<span className='text-2xl text-gray-600 sm:text-3xl'>{score}</span>
				</div>
				<div className='flex flex-row justify-between w-full'>
					<div className='flex flex-row justify-center gap-2'>
						<AiOutlineClose size={32} color='#FF4F4F' />
						<h3 className='text-2xl sm:text-3xl'>Wrong answers:</h3>
					</div>
					<span className='text-2xl text-gray-600 sm:text-3xl'>
						{questions.length - score}
					</span>
				</div>
				<button className='my-4 text-lg font-bold' onClick={handleRestart}>
					Play again!
				</button>
			</div>

			<div className='mt-4'>
				{answers.length ? (
					<>
						{answers.map((answer, index) => (
							<ResultsAnswer answer={answer} number={index + 1} key={index} />
						))}
					</>
				) : (
					<span className='my-4 text-lg font-bold'>
						You didn't asnwer any questions!
					</span>
				)}
			</div>
		</>
	);
};
export default ResultsView;
