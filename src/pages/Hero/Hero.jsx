import BooksBlock from '../../components/BooksBlock/BooksBlock';

const Hero = () => {
	let swipetImages = [];

	let data = JSON.parse(localStorage.getItem('book')) || [];

	return (
		<>
			<section id="hero">
				<div className="container">
					<div className="hero">
						<div className="hero__swiper swiper">
							<div className="swiper__arrows">
								<div className="swiper__arrows_left">
									<ion-icon name="arrow-back-outline"></ion-icon>
								</div>
								<div className="swiper__arrows_right">
									<ion-icon name="arrow-forward-outline"></ion-icon>
								</div>
							</div>
							<div className="swiper__image"></div>
							<div className="swiper__pagination">
								<div className="swiper__pagination_dots">
									<div className="swiper__pagination_dot dotnogray"></div>
									<div className="swiper__pagination_dot"></div>
									<div className="swiper__pagination_dot"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section id="herocategory">
				<div className="container">
					<div className="herocategory">
						<div className="herocategory__title title">
							<h2>Категории</h2>
						</div>
					</div>
				</div>
			</section>
			<section id="advice">
				<div className="container">
					<div className="advice">
						<div className="acvice__title ">
							<p className="title">Возможно, Вам понравится</p>
							<select value="Sort">
								<option>One</option>
								<option>Two</option>
								<option>Three</option>
							</select>
						</div>
						<div className="advice__books">
							<BooksBlock books={data} />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Hero;
