import './App.scss';
import MainRouter from './MainRouter/MainRouter';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Category from './pages/Category/Category';

function App() {
	return (
		<div className="App">
			<Header />
			<Category/>
			<MainRouter />
			<Footer />
		</div>
	);
}

export default App;
