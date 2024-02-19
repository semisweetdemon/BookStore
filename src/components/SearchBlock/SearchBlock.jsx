import { useMainContext } from '../../mainContext/MainContext';

const SearchBlock = ({ sch }) => {
	const { navigate, setIdBook } = useMainContext();

	return (
		<section id="searchbl">
			<div className="container">
				<div className="searchbl">
					<div className="booksbl">
						{sch?.map((el) => (
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
				</div>
			</div>
		</section>
	);
};

export default SearchBlock;
