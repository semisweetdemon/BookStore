import { useMainContext } from '../../mainContext/MainContext';

const BooksBlock = ({ books }) => {
	const { navigate, setIdBook, setBookInfo } = useMainContext();

	return (
		<div className="booksbl">
			{books.map((el) => (
				<div
					className="bookbl"
					onClick={() => {
						setIdBook(el.id);
						navigate(`/${el.id}`);
						setBookInfo(el);
					}}>
					<div className="bookbl__image">
						<img src={el.file} alt="No image" />
					</div>
					<div className="bookbl__price">
						<h4>{el.price}</h4>
						<ion-icon name="cart-outline"></ion-icon>
					</div>
					<div className="bookbl__text">
						<h5>{el.name}  /</h5>
						<h5>{el.discription}</h5>
					</div>
				</div>
			))}
		</div>
	);
};

export default BooksBlock;
