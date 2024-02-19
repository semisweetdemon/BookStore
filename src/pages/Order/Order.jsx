import { useMainContext } from '../../mainContext/MainContext';
import { useEffect, useState } from 'react';

const Order = () => {
	const { navigate, minusCount, plusCount, order, setOrder, delivery, setDelivery } = useMainContext();

	function getBasket() {
		let ord = JSON.parse(localStorage.getItem('book')) || [];
		setOrder(ord.filter((el) => el.order === true));
	}

	useEffect(() => {
		getBasket();
	}, [order]);

	return (
		<section id="order">
			<div className="container">
				<div className="order__header">
					<p onClick={() => navigate('/')}>Главная / </p>
					<p> Оформление заказа </p>
				</div>
				<div className="order">
					<div className="order__contact">
						<div className="order__contact_info">
							<h2>Контакные данные</h2>
							<input type="text" placeholder="Фио*" />
							<input type="nuumber" placeholder="Телефон*" />
						</div>
						<div className="order__contact_oplata">
							<h2>Оплата</h2>
							<label htmlFor="oplata">
								<input type="checkbox" id="oplata" />
								<p>Оплачу наличными при получении заказа</p>
							</label>
							<p>
								Оплата с банковской картой через <span>PayBox</span>
							</p>
							<button>Оплатить</button>
						</div>
					</div>
					<div className="order__dostavka">
						<div className="order__dostavks_info">
							<h2>Доставка</h2>
							<p>Выберите удобный способ доставки для этого заказа.</p>
							<label
								htmlFor="samovyzov"
								onClick={() => {
									setDelivery(true);
								}}>
								<input type="radio" id="samovyzov" name="dos" />
								Самовывоз
							</label>
							<label
								htmlFor="kurer"
								onClick={() => {
									setDelivery(false);
								}}>
								<input type="radio" id="kurer" name="dos" />
								Доставка курьером
							</label>
							<select
								style={{
									display: delivery ? 'block' : 'none',
								}}
								name=""
								id="">
								<option checked value="">
									Biskek
								</option>
								<option value="">Osh</option>
								<option value="">Batket</option>
								<option value="">Jalal-Abat</option>
								<option value="">Ysyk-Kol</option>
								<option value="">Chuy</option>
								<option value="">Naryn</option>
								<option value="">Talas</option>
							</select>
							<textarea
								style={{
									display: delivery ? 'none' : 'block',
									padding: '10px',
									resize: 'none',
								}}
								name=""
								id=""
								cols="35"
								rows="10"
								placeholder="Область, город (район, село), улица, дом№, кв.№*"></textarea>
						</div>
						<div className="order__dostavka_cost">
							<h1>Общая сумма:</h1>
							<h2>3000$</h2>
						</div>
					</div>
					<div className="order__choose">
						{order?.map((el) => (
							<div className="order__choose_book">
								<div className="book">
									<div className="book__image">
										<img src={el.file} />
									</div>
									<div className="book__info">
										<h1>{el.name}</h1>
										<h2>{`${el.price}$`}</h2>
										<div className="book__info_counter">
											<button
												onClick={() => {
													minusCount(el.id);
												}}>
												-
											</button>
											<div>
												<h6>{el.count}</h6>
											</div>
											<button
												onClick={() => {
													plusCount(el.id);
												}}>
												+
											</button>
										</div>
										<h3
											onClick={() => {
												let deleteOrder = JSON.parse(localStorage.getItem('book')) || [];
												deleteOrder.map((elem) => {
													if (elem.id === el.id) {
														elem.count = 1;
														elem.order = false;
													}
													return elem;
												});
												localStorage.setItem('book', JSON.stringify(deleteOrder));
											}}>
											Удалить <ion-icon name="trash-outline"></ion-icon>
										</h3>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Order;
