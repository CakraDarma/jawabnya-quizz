import MainLayout from '@components/layouts/Main';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
	return (
		<React.Fragment>
			<ToastContainer
				position='bottom-right'
				limit={1}
				autoClose={4000}
				closeOnClick={true}
				draggable={true}
				pauseOnHover={false}
			/>

			<MainLayout />
		</React.Fragment>
	);
};
export default App;
