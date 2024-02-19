import { useState, useEffect } from 'react';
import { useMainContext } from '../../mainContext/MainContext';

const CategoryBlock = () => {
	const [categorieses, setCategorieses] = useState([]);
	const sort = JSON.parse(localStorage.getItem('category')) || [];
	const { navigate } = useMainContext();

	function getCategory() {
		setCategorieses(sort);
	}
	useEffect(() => {
		getCategory();
	}, []);
	function categoryClick(value) {
		localStorage.setItem('categorieSort', JSON.stringify(value));
		console.log(value);
		navigate('/category');
	}
	return (
		<div className="nav__categoryall">
			{categorieses.map((el) => (
				<div
					className="nav__category"
					onClick={() => {
						categoryClick(el);
					}}>
					<div className="nav__category_texticon">
						<h2>{el}</h2>
						<ion-icon name="arrow-forward-outline"></ion-icon>
					</div>
				</div>
			))}
		</div>
	);
};

export default CategoryBlock;
