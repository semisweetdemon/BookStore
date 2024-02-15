import { NavLink } from 'react-router-dom';
import { useMainContext } from '../../mainContext/MainContext';

const Header = () => {
	const { navigate, setOpen } = useMainContext();

	return (
		<header id="header">
			<div className="container">
				<div className="header">
					<div
						onClick={() => {
							navigate('/');
						}}
						className="header__logo">
						<h3>BOOKShop</h3>
					</div>
					<div className="header__nav">
						<input type="text" placeholder="Search here" />
						<nav>
							<NavLink to="/order">
								<ion-icon name="cart-outline"></ion-icon>
								<p>Корзина</p>
							</NavLink>
							<NavLink onClick={() => setOpen(true)}>
								<ion-icon name="person-outline"></ion-icon>
								<p>Админ</p>
							</NavLink>
						</nav>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
