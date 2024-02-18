import { useAppSelector } from '@store/index';

const Description = () => {
	const description = useAppSelector(
		(state) => state.game.currectQuestionDescription
	);

	return (
		<h2 className='text-2xl font-extrabold sm:text-4xl' key={description}>
			{description}
		</h2>
	);
};
export default Description;
