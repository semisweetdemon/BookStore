import { useMainContext } from '../../mainContext/MainContext';

const Book = () => {
	const { bookInfo } = useMainContext();

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
				</div>
			</div>
		</section>
	);
};

export default Book;
