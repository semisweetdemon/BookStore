import { useState, useEffect, useRef } from 'react';
import { useMainContext } from '../../mainContext/MainContext';
import CategoryBlock from '../../components/CategoryBlock/CategoryBlock';
import BooksBlock from '../../components/BooksBlock/BooksBlock';

const Category = () => {
	const { setHome, navigate } = useMainContext();
	const [genre, setGenre] = useState(JSON.parse(localStorage.getItem('categorieSort')) || 'Сортировка');
	const [categories, setCategories] = useState([]);

	const cate = JSON.parse(localStorage.getItem('category')) || [];

	useEffect(() => {
		localStorage.setItem('categorieSort', JSON.stringify(genre));
		let booker = JSON.parse(localStorage.getItem('categorieSort')) || 'Сортировка';
		setGenre(booker);
	}, [genre]);

	useEffect(() => {
		setCategories(cate);
	}, []);

	setHome(true);

	return (
		<section id="category">
			<div className="container">
				<div className="category">
					<CategoryBlock />
					<div className="category-nav">
						<div className="category-nav__navlist">
							<p
								onClick={() => {
									navigate('/');
								}}
								style={{ cursor: 'pointer' }}>
								Главная /
							</p>
							<span>{genre}</span>
						</div>
						<select
							onChange={(e) => {
								setGenre(e.target.value);
							}}
							value={genre}>
							<option>Сортировка</option>
							{categories.map((el) => (
								<option>{el}</option>
							))}
						</select>
					</div>
					<BooksBlock />
				</div>
			</div>
		</section>
	);
};

export default Category;
