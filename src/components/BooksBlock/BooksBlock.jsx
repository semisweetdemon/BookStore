import { useEffect, useState } from 'react';
import { useMainContext } from '../../mainContext/MainContext';

const BooksBlock = () => {
	const { navigate, setIdBook, books, check } = useMainContext();

	useEffect(() => {
		check();
	}, []);

	return (
		<div className="booksbl">
			{books?.map((el) => (
				<div
					className="bookbl"
					onClick={() => {
						setIdBook(el.id);
						navigate(`/${el.id}`);
					}}>
					<div className="bookbl__image">
						<img src={el.file} alt="No image" />
					</div>
					<div className="bookbl__price">
						<h4>{el.price}</h4>
						<ion-icon name="cart-outline"></ion-icon>
					</div>
				</div>
			))}
		</div>
	);
};

export default BooksBlock;
