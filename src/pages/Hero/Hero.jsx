import { useEffect, useState } from 'react';
import BooksBlock from '../../components/BooksBlock/BooksBlock';
import CategoryBlock from '../../components/CategoryBlock/CategoryBlock';
import { useMainContext } from '../../mainContext/MainContext';

const Hero = () => {
	const { navigate, open, setOpen } = useMainContext();
	const [count, setCount] = useState(0);
	const [values, setValues] = useState('');
	let swiperImages = ['https://images.unsplash.com/photo-1707345512638-997d31a10eaa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'];

	let data = JSON.parse(localStorage.getItem('book')) || [];

	useEffect(() => {
		setInterval(() => {
			setCount((count) => (count >= swiperImages.length - 1 ? 0 : (count += 1)));
		}, 7000);
	}, []);

	let arr = [];

	for (let i = 0; i < swiperImages.length; i++) {
		arr.push(
			<div
				onClick={() => {
					setCount(i);
				}}
				className={count === i ? 'swiper__pagination_dot dotnogray' : 'swiper__pagination_dot'}></div>
		);
	}

	const pass = 'MotionWeb2024!';
	return (
		<>
			<section id="hero">
				<div className="container">
					<div className="hero">
						<div
							className="hero__admin"
							style={{
								display: !open ? 'none' : '',
							}}>
							<div className="hero__admin_password">
								<button onClick={() => setOpen(false)}>
									<ion-icon name="close-outline"></ion-icon>
								</button>
								<input onChange={(e) => setValues(e.target.value)} type="password" placeholder="Password..." />
								<button
									onClick={() => {
										pass === values ? navigate('/admin') : alert('error');
										setOpen(false);
									}}>
									SIGN IN
								</button>
							</div>
						</div>
						<div className="hero__swiper swiper">
							<div className="swiper__arrows">
								<div
									onClick={() => {
										setCount((count) => (count <= 0 ? swiperImages.length - 1 : (count -= 1)));
									}}>
									<ion-icon name="arrow-back-outline"></ion-icon>
								</div>

								<div
									onClick={() => {
										setCount((count) => (count >= swiperImages.length - 1 ? 0 : (count += 1)));
									}}>
									<ion-icon name="arrow-forward-outline"></ion-icon>
								</div>
							</div>
							<div className="swiper__image">
								<img src={swiperImages[count]} alt="No swiper" />
							</div>
							<div className="swiper__pagination">
								<div className="swiper__pagination_dots">{arr.map((el) => el)}</div>
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
						<CategoryBlock />
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
