import { useState } from 'react';
import './App.scss';
import MainRouter from './MainRouter/MainRouter';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { useMainContext } from './mainContext/MainContext';
const passw = '2024';

function App() {
	const { open, setOpen, navigate, pass, setPass } = useMainContext();
	const [values, setValues] = useState('');

	return (
		<div className="App">
			<Header />
			<div
				onClick={() => setOpen(false)}
				className="App__bgwhite"
				style={{
					display: !open ? 'none' : '',
				}}></div>

			<div
				className="App__admin"
				style={{
					display: !open ? 'none' : '',
				}}>
				<div className="App__admin_password">
					<button onClick={() => setOpen(false)}>
						<ion-icon name="close-outline"></ion-icon>
					</button>
					<input
						onKeyDown={(e) => {
							if (e.key === 'Enter') {
								setValues(e.target.value);
								if (passw === values) {
									navigate('/admin');
									setOpen(false);
								} else {
									alert('error');
								}
							}
						}}
						onChange={(e) => setValues(e.target.value)}
						type="password"
						placeholder="Password..."
					/>
					<button
						onClick={() => {
							if (pass === values) {
								setPass(!pass);

								localStorage.setItem('pass', JSON.stringify(!pass));
							}
							passw === values ? navigate('/admin') : alert('error');
							setOpen(false);
						}}>
						SIGN IN
					</button>
				</div>
			</div>
			<div className="App__wrap">
				<MainRouter />
			</div>
			<Footer />
		</div>
	);
}

export default App;
