const LoadingSpinner = () => {
	return (
		<div className='w-16 h-16 mb-12 rounded-full loading-container bg-black/20'>
			<h1 className='text-6xl animate-bounce'>Loading...</h1>
			<div className='w-12 h-12 bg-black rounded-full animate-bounce' />
		</div>
	);
};
export default LoadingSpinner;
