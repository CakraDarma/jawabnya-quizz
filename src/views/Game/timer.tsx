import { useAppSelector } from '@store/index';
import { ImClock } from 'react-icons/im';

const Timer = () => {
	const timeLeft = useAppSelector((state) => state.game.timeLeft);

	return (
		<div className='flex flex-row items-center gap-1'>
			<h4 className='text-xl'>{timeLeft}</h4>
			<ImClock size={20} />
		</div>
	);
};

export default Timer;
