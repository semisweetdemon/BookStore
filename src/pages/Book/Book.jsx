import { useMainContext } from '../../mainContext/MainContext';

const Book = () => {
	const { bookInfo, navigate } = useMainContext();

	console.log(bookInfo);

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
						<div className="book__image"></div>
						<div className="info">
							<div>
								<div className="info__title">{bookInfo.name}</div>
								<div className="info__price">{bookInfo.price} $</div>
								<div className="info__category">Жанр: {bookInfo.category}</div>
								<div className="info__counter">
									<button>-</button>
									<button>1</button>
									<button>+</button>
								</div>
								<div className="info__description">
									<h3>Описание</h3>
									<p>{bookInfo.discription}</p>
								</div>
							</div>
							<div className="info__buttons">
								<button>Добавить в корзину</button>
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
