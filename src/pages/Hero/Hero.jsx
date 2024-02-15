import { useState } from "react";
import { useMainContext } from "../../mainContext/MainContext";
import { useNavigate } from "react-router-dom";

const Hero = () => {
	let swipetImages = [];
	const navigate = useNavigate();


	const {open, setOpen} = useMainContext()
	// const [password, setPassword] = useState([])
	const pass = 'MotionWeb2024!'
	const [values, setValues] = useState('')
	return (
		<section id="hero">
			<div className="container">
				<div className="hero">
					<div className="admin" style={{
						display: !open ? 'none' : ''
					}}>
						<div className="admin__password">
							<div className="btnsClose">
								<button onClick={() => setOpen(false)}><ion-icon name="close-outline"></ion-icon></button>
							</div>
							<div className="drivePassword">
								<input onChange={(e) => setValues(e.target.value)} type="password" placeholder="Password..."/>
								<button onClick={() => {pass === values ? navigate('/admin') : alert('error'); setOpen(false)}}>SIGN IN</button>
							</div>

						</div>
					</div>
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
