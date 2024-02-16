import { useState } from 'react';
import { useMainContext } from '../../mainContext/MainContext';

const Book = () => {
	const { bookInfo, name, setName, category, setCategory, price, setPrice, discription, setDiscription, file, setFile, idBook, setIdBook, } = useMainContext();


	console.log(bookInfo);
	return (
		<section id="book">
			<div className="container">
				<div className="book">
					<div className="book__navigate">
						<p>
							Главная / {bookInfo.category} / {bookInfo.name}
						</p>
					</div>
					<div className="book__card">
						<div className="book__img">
							{/* <img src={el.file} alt="" /> */}
						</div>
						{/* <h1>{el.}</h1> */}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Book;
