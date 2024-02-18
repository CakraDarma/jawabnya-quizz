import { useAppSelector } from '@store/index';
import React from 'react';
import { ImQuestion } from 'react-icons/im';
const Counter = () => {
	const index = useAppSelector((state) => state.game.currentQuestionIndex);
	const questions = useAppSelector((state) => state.game.questions);

	const count = React.useMemo(() => questions.length, [questions]);

	return (
		<div className='flex flex-row items-center gap-1'>
			<ImQuestion size={20} />
			<h4 className='text-xl'>
				{index + 1}
				{' / '}
				{count}
			</h4>
		</div>
	);
};
export default Counter;
