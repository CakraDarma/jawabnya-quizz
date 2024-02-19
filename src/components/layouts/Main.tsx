import LoadingSpinner from '@components/Loading';
import { Nav } from '@components/Navbar';
import { gameViews } from '@constants/game';
import { getCategories } from '@store/features/game';
import { useAppDispatch, useAppSelector } from '@store/index';
import GamePage from '@views/Game';
import InitialPage from '@views/Initial';
import ScorePage from '@views/Results';
import React from 'react';
import { toast } from 'react-toastify';

const MainLayout: React.FC = () => {
	const activeView = useAppSelector((state) => state.game.activeView);
	const loading = useAppSelector((state) => state.game.categoriesLoading);
	const initialized = useAppSelector(
		(state) => state.game.categoriesInitialized
	);
	const dispatch = useAppDispatch();

	const isFillingForm = activeView === gameViews.INIT;
	const isPlaying = activeView === gameViews.GAME;
	const isComplete = activeView === gameViews.END;

	React.useEffect(() => {
		if (!initialized)
			dispatch(getCategories())
				.unwrap()
				.catch((error) => {
					toast.error(error);
				});
	}, [dispatch, initialized]);

	return (
		<>
			<Nav />
			<main className='px-6 lg:px-20 3xl:px-0  mx-auto max-w-[1280px]'>
				{loading ? (
					<div className='flex flex-row items-center justify-center w-full h-screen'>
						<LoadingSpinner />
						<h1>Jawabnya Quizz</h1>
					</div>
				) : (
					<>
						{isFillingForm && <InitialPage />}
						{isPlaying && <GamePage />}
						{isComplete && <ScorePage />}
					</>
				)}
			</main>
		</>
	);
};
export default MainLayout;
