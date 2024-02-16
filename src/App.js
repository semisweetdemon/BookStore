import { useState } from 'react';
import './App.scss';
import MainRouter from './MainRouter/MainRouter';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { useMainContext } from './mainContext/MainContext';

function App() {
	const { open, setOpen, navigate } = useMainContext();
	const pass = 'MotionWeb2024!';
	const [values, setValues] = useState('');

	return (
		<div className="app">
			<div
				onClick={() => setOpen(false)}
				className="app__bgwhite"
				style={{
					display: !open ? 'none' : '',
				}}></div>

			<div
				className="app__admin"
				style={{
					display: !open ? 'none' : '',
				}}>
				<div className="app__admin_password">
					<button onClick={() => setOpen(false)}>
						<ion-icon name="close-outline"></ion-icon>
					</button>
					<input onChange={(e) => setValues(e.target.value)} type="password" placeholder="Password..." />
					<button
						onClick={() => {
							pass === values ? navigate('/admin') : alert('error');
							setOpen(false);
						}}>
						SIGN IN
					</button>
				</div>
			</div>
			<div className="app__wrap">
				<Header />
				<MainRouter />
			</div>
			<Footer />
		</div>
	);
}

export default App;
