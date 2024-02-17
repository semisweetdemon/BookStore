import { useEffect } from 'react';
import { useMainContext } from '../../mainContext/MainContext';

const Book = () => {
	const { bookInfo, setBookInfo, idBook, navigate, plusCount, minusCount, getOrder } = useMainContext();

	function getItem(n) {
		let data = JSON.parse(localStorage.getItem('book')) || [];
		setBookInfo(data.find((el) => el.id === n));
	}

	useEffect(() => {
		getItem(idBook);
	});

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
						<p>{bookInfo.category}</p>
						<p>/</p>
						<p>{bookInfo.name}</p>
					</div>
					<div className="book__info">
						<div className="book__boba"></div>
						<div className="info">
							<div>
								<h3 className="info__title">{bookInfo.name}</h3>
								<h3 className="info__price">{bookInfo.price} $</h3>
								<h4 className="info__category">Жанр: {bookInfo.category}</h4>
								<div className="info__counter">
									<button
										onClick={() => {
											minusCount(bookInfo.id);
										}}>
										-
									</button>
									<button>{bookInfo.count}</button>
									<button
										onClick={() => {
											plusCount(bookInfo.id);
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
										getOrder(bookInfo);
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
