const Hero = () => {
	let swipetImages = [];

	return (
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
								<div className="swiper__pagination_dot dotgray"></div>
								<div className="swiper__pagination_dot"></div>
								<div className="swiper__pagination_dot"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
