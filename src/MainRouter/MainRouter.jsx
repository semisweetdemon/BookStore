import { Route, Routes } from 'react-router-dom';
import Admin from '../pages/Admin/Admin';
import Order from '../pages/Order/Order';
import Book from '../pages/Book/Book';
import Category from '../pages/Category/Category';
import Hero from '../pages/Hero/Hero';

const MainRouter = () => {
	let pages = [
		{ path: '/', element: <Hero />, key: 1 },
		{ path: '/admin', element: <Admin />, key: 2 },
		{ path: '/order', element: <Order />, key: 3 },
		{ path: '/book', element: <Book />, key: 4 },
		{ path: '/category', element: <Category />, key: 5 },
	];

	return (
		<Routes>
			{pages.map((el) => (
				<Route path={el.path} element={el.element} key={el.key}></Route>
			))}
		</Routes>
	);
};

export default MainRouter;
