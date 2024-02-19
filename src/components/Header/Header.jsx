import { NavLink } from 'react-router-dom';
import { useMainContext } from '../../mainContext/MainContext';
import { useEffect, useState } from 'react';

const Header = () => {
	const { navigate, setOpen, search, setSearch } = useMainContext();

	function check() {
		if (search !== '') {
			navigate('/search');
		} else {
			navigate('/');
		}
	}

	useEffect(() => {
		check();
	}, [search]);

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
						<input onChange={(e) => setSearch(e.target.value.toLowerCase())} type="text" placeholder="Search here" />
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
