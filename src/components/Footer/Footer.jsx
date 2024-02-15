import { NavLink } from 'react-router-dom';

const Footer = () => {
	return (
		<footer id="footer">
			<div className="container">
				<div className="footer">
					<div className="`footer__logo`">
						<h2>BOOKShop</h2>
					</div>
					<div className="footer__about_shop">
						<NavLink>Способ оплаты</NavLink>
						<NavLink>Условия доставки</NavLink>
						<NavLink>Правила покупки</NavLink>
					</div>
					<div className="footer__about_company">
						<NavLink>FAQ</NavLink>
						<NavLink>О нас</NavLink>
					</div>
					<div className="footer__social">
						<h3>Связаться с нами:</h3>
						<NavLink>+996 222 533 735</NavLink>
						<NavLink>+996 222 533 735</NavLink>
						<NavLink>+996 222 533 735</NavLink>
						<div className="footer__social_icons">
							<NavLink>
								<ion-icon name="logo-instagram"></ion-icon>
							</NavLink>
							<NavLink>
								<ion-icon name="paper-plane-outline"></ion-icon>
							</NavLink>
							<NavLink>
								<ion-icon name="logo-whatsapp"></ion-icon>
							</NavLink>
							<NavLink>
								<ion-icon name="logo-facebook"></ion-icon>
							</NavLink>
						</div>
					</div>
					<div className="footer__adress">
						<h3>Адрес</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius in dolor viverra feugiat neque, sed in. Mattis volutpat malesuada velit parturient aliquam, est. Mauris vitae velit laoreet faucibus nec amet velit.</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
