import type { Answer } from 'types/game';
import React from 'react';
import classnames from 'classnames';

interface PropTypes {
	answer: Answer;
	number: number;
}

const ResultsAnswer: React.FC<PropTypes> = ({ answer, number }) => {
	const { question, is_correct: isCorrect, correct_answer } = answer;

	return (
		<div className='flex flex-col mt-5'>
			<p>
				<span>
					{number}
					{')  '}
				</span>
				{question}
			</p>
			<p>
				Your answer
				{': '}
				<span
					className={classnames({
						'text-danger': !isCorrect,
						'text-success': isCorrect,
					})}
				>
					{answer.answer.text}
				</span>
			</p>
			{!isCorrect && (
				<p>
					Correct Answer
					{': '}
					<span className={classnames('text-success')}>
						{correct_answer.text}
					</span>
				</p>
			)}
		</div>
	);
};
export default ResultsAnswer;
