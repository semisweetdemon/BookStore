import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const mainContext = createContext();
export const useMainContext = () => useContext(mainContext);

const MainContext = ({ children }) => {
	const [admin, setAdmin] = useState([]);
	const [order, setOrder] = useState([]);
	const [open, setOpen] = useState(false);
	const navigate = useNavigate();
	const [home, setHome] = useState(false);
	const [books, setBooks] = useState();

	const [file, setFile] = useState('');
	const [name, setName] = useState('');
	const [category, setCategory] = useState('');
	const [price, setPrice] = useState('');
	const [discription, setDiscription] = useState('');
	const [idBook, setIdBook] = useState(0);
	const [bookInfo, setBookInfo] = useState({});
	const [delivery, setDelivery] = useState(false);
	const [search, setSearch] = useState('');

	const [pass, setPass] = useState(JSON.parse(localStorage.getItem('pass')));

	function getSave() {
		let obj = {
			file,
			name,
			category,
			price,
			discription,
			count: 1,
			id: Date.now(),
			order: false,
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
		setOrder(data.filter((el) => el.order === true));
		localStorage.setItem('book', JSON.stringify(data));
	}
	function minusCount(id) {
		let data = JSON.parse(localStorage.getItem('book')) || [];
		data.map((el) => {
			if (el.id === id) {
				return el.count <= 1 ? 1 : (el.count -= 1);
			}
		});
		setOrder(data.filter((el) => el.order === true));
		localStorage.setItem('book', JSON.stringify(data));
	}

	function check() {
		if (home === true) {
			let genre = JSON.parse(localStorage.getItem('categorieSort'));
			let data = JSON.parse(localStorage.getItem('book')) || [];
			if (genre === 'Сортировка') {
				setBooks(data);
			} else {
				setBooks(data.filter((el) => el.category === genre));
			}
		} else {
			setBooks(JSON.parse(localStorage.getItem('book')) || []);
		}
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
		order,
		setOrder,
		delivery,
		setDelivery,

		pass,
		setPass,

		home,
		setHome,
		books,
		setBooks,
		check,
		search,
		setSearch,
	};

	return <mainContext.Provider value={values}>{children}</mainContext.Provider>;
};

export default MainContext;
