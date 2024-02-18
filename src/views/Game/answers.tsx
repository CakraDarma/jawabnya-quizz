import { answerQuestion } from '@store/features/game';
import { useAppDispatch, useAppSelector } from '@store/index';
import React from 'react';

const answerOrder = ['A', 'B', 'C', 'D'];

const AnswersGrid: React.FC = () => {
	const dispatch = useAppDispatch();
	const availableAnswers = useAppSelector(
		(state) => state.game.availableAnswers
	);

	const handleAnswer = (answer: { id: string; text: string }) =>
		dispatch(answerQuestion({ ...answer }));

	const getColor = (index: number) => {
		switch (index) {
			case 0:
				return 'bg-blue-custom';
			case 1:
				return 'bg-red-custom';
			case 2:
				return 'bg-green-custom';
			case 3:
				return 'bg-yellow-custom';
			default:
				return 'bg-gray-500'; // Warna default jika ada lebih dari 4 tombol
		}
	};

	return (
		<div className='flex flex-col items-center justify-center w-full gap-5'>
			{availableAnswers.map((answer, index) => (
				<button
					key={answer.id}
					className={`
					${getColor(
						index
					)} shadow-[6px_6px_0px_0px_rgba(22,57,89)] p-4 rounded-md text-black font-bold w-full border-4 border-black font-Cabinet sm:text-2xl text-xl
					
					`}
					onClick={() => {
						handleAnswer(answer);
					}}
				>
					{answerOrder[index]}
					{') '}
					{answer.text}
				</button>
			))}
		</div>
	);
};
export default AnswersGrid;
