import { NavLink } from "react-router-dom";
import "./Order.scss";
import { useMainContext } from "../../mainContext/MainContext";

const Order = () => {
  const { navigate } = useMainContext();
  return (
    <section id="order">
      <div className="container">
        {/* <div className="order__header">
          <NavLink onClick={() => navigate("/")}>Главная / </NavLink>
          <NavLink onClick={() => navigate("/order")}>Корзина / </NavLink>
          <NavLink onClick={() => navigate("/")}>Оформление заказа </NavLink>
        </div> */}
        <div className="order">
          <div className="order__contact">
            <div className="order__contact__info">
              <h2>Контакные данные</h2>
              <input type="text" placeholder="Фио*" />
              <input type="nuumber" placeholder="Телефон*" />
            </div>
            <div className="order__contact__oplata">
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
            <div className="order__dostavks__info">
              <h2>Доставка</h2>
              <p>Выберите удобный способ доставки для этого заказа.</p>
              <label htmlFor="samovyzov">
                <input type="radio" id="samovyzov" name="dos" />
                Самовывоз
              </label>
              <label htmlFor="kurer">
                <input type="radio" id="kurer" name="dos" />
                Доставка курьером
              </label>
						  <textarea
							  style={{padding: '10px'}}
                name=""
                id=""
                cols="35"
                rows="10"
                placeholder="Область, город (район, село), улица, дом№, кв.№*"></textarea>
            </div>
            <div className="order__dostavka__cost">
              <h1>Общая сумма:</h1>
              <h2>3000$</h2>
            </div>
          </div>
          <div className="order__vybor"></div>
        </div>
      </div>
    </section>
  );
};

export default Order;
