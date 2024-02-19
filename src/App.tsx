import Login from '@components/layouts/Login';
import MainLayout from '@components/layouts/Main';
import {
	Navigate,
	Route,
	BrowserRouter as Router,
	Routes,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
	const userToken = false;
	return (
		<>
			<Router>
				<Routes>
					<Route
						path='/login'
						element={userToken ? <Navigate to='/' /> : <Login />}
					/>
					<Route path='/' element={<MainLayout />} />
					{/* <Route path='*' element={<NotFound />} /> */}
				</Routes>
			</Router>
			<ToastContainer
				position='bottom-right'
				limit={1}
				autoClose={4000}
				closeOnClick={true}
				draggable={true}
				pauseOnHover={false}
			/>
		</>
	);
};
export default App;
