import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const mainContext = createContext();
export const useMainContext = () => useContext(mainContext);

const MainContext = ({ children }) => {
	const [admin, setAdmin] = useState([]);
	const [open, setOpen] = useState(false);
	const navigate = useNavigate();

	const [file, setFile] = useState('');
	const [name, setName] = useState('');
	const [category, setCategory] = useState('');
	const [price, setPrice] = useState('');
	const [discription, setDiscription] = useState('');
	const [idBook, setIdBook] = useState(0);
	const [bookInfo, setBookInfo] = useState({});

	const [pass, setPass] = useState(JSON.parse(localStorage.getItem('pass')))

	function getSave() {
		let obj = {
			file,
			name,
			category,
			price,
			discription,
			count: 1,
			id: Date.now(),
		};
		const book = JSON.parse(localStorage.getItem('category')) || [];
		if (book.includes(category) !== true) {
			book.push(category);
			localStorage.setItem('category', JSON.stringify(book));
		}
		const data = JSON.parse(localStorage.getItem('book')) || [];
		data.push(obj);
		localStorage.setItem('book', JSON.stringify(data));

		setFile('');
		setName('');
		setCategory('');
		setPrice('');
		setDiscription('');

		navigate('/');
	}

	function plusCount(id) {
		let data = JSON.parse(localStorage.getItem('book')) || [];
		data.map((el) => {
			if (el.id === id) {
				el.count += 1;
			}
		});
		localStorage.setItem('book', JSON.stringify(data));
	}
	function minusCount(id) {
		let data = JSON.parse(localStorage.getItem('book')) || [];
		data.map((el) => {
			if (el.id === id) {
				return el.count <= 0 ? 0 : (el.count -= 1);
			}
		});
		localStorage.setItem('book', JSON.stringify(data));
	}

	function getOrder(x) {
		let getOrderData = JSON.parse(localStorage.getItem('order')) || [];

		if (getOrderData.length > 0) {
			getOrderData.map((el) => (el.id === x.id ? (el.count = x.count) : getOrderData.push(x)));
		} else {
			getOrderData.push(x);
		}

		localStorage.setItem('order', JSON.stringify(getOrderData));
	}

	let values = {
		admin,
		setAdmin,
		open,
		setOpen,

		name,
		setName,
		category,
		setCategory,
		price,
		setPrice,
		discription,
		setDiscription,
		file,
		setFile,
		idBook,
		setIdBook,
		getSave,

		navigate,
		bookInfo,
		setBookInfo,

		plusCount,
		minusCount,
		getOrder,

		pass, setPass,
	};

	return <mainContext.Provider value={values}>{children}</mainContext.Provider>;
};

export default MainContext;
