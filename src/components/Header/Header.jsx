import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useMainContext } from '../../mainContext/MainContext';

const Header = () => {
	const navigate = useNavigate();
	const {getPass, open, setOpen} = useMainContext()
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
							<NavLink to="/order">Корзина</NavLink>
							<NavLink  onClick={() => setOpen(true )}>Админ</NavLink>
						</nav>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
