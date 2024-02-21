import { useEffect, useState } from 'react';
import { useMainContext } from '../../mainContext/MainContext';
import localforage from 'localforage';

const Book = () => {
	const { bookInfo, setBookInfo, idBook, navigate, plusCount, minusCount } = useMainContext();

	const [imageBook, setImageBook] = useState(0);

	function getItem(n) {
		let data = JSON.parse(localStorage.getItem('book')) || [];
		let k = data.find((el) => el.id === n);
		setBookInfo(k);
		localforage
			.getItem(`${n}`)
			.then(function (value) {
				setImageBook(value);
				console.log(value);
			})
			.catch(function (err) {
				console.log(err);
			});
	}

	useEffect(() => {
		getItem(idBook);
	}, [idBook]);

	return (
		<section id="book">
			<div className="container">
				<div className="book">
					<div className="book__navigate">
						<p
							onClick={() => {
								navigate('/');
							}}>
							Главная
						</p>
						<p>/</p>
						<p
							onClick={() => {
								navigate('/category');
								localStorage.setItem('categorieSort', JSON.stringify(bookInfo.category));
							}}>
							{bookInfo.category}
						</p>
						<p>/</p>
						<p>{bookInfo.name}</p>
					</div>
					<div className="book__info">
						<div className="book__boba">
							<img src={imageBook} alt="" />
						</div>
						<div className="info">
							<div>
								<h3 className="info__title">{bookInfo.name}</h3>
								<h3 className="info__price">{bookInfo.price} $</h3>
								<h4 className="info__category">Жанр: {bookInfo.category}</h4>
								<div className="info__counter">
									<button
										onClick={() => {
											minusCount(bookInfo.id);
											getItem(idBook);
										}}>
										-
									</button>
									<button>{bookInfo.count}</button>
									<button
										onClick={() => {
											plusCount(bookInfo.id);
											getItem(idBook);
										}}>
										+
									</button>
								</div>
								<div className="info__description">
									<h3>Описание</h3>
									<p>{bookInfo.discription}</p>
								</div>
							</div>
							<div className="info__buttons">
								<button
									onClick={() => {
										let order = JSON.parse(localStorage.getItem('book')) || [];
										order.map((el) => {
											if (el.id === bookInfo.id) {
												if (el.order === true) {
													el.count += 1;
												} else {
													el.order = true;
												}
											}
										});
										localStorage.setItem('book', JSON.stringify(order));
									}}>
									Добавить в корзину
								</button>
								<button>Сделать заказ</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Book;
