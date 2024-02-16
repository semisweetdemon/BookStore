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
		}
		localStorage.setItem('category', JSON.stringify(book));
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
		const data = JSON.parse(localStorage.getItem('book')) || [];
		data.map((el) => {
			if (el.id === id) {
				el.count += 1
			}
		})
	}
	function minusCount(id) {
		const data = JSON.parse(localStorage.getItem('book')) || [];
		data.map((el) => {
			if (el.id === id) {
				el.count -= 1
			}
		})
	}

	function getOrder(x) {
		const data = JSON.parse(localStorage.getItem('ordred')) || [];
		data.map((el) => {
			if (el.id === x) {
				el.count += 1
			} else {
				data.push(x)
			}
		})
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
	};

	return <mainContext.Provider value={values}>{children}</mainContext.Provider>;
};

export default MainContext;
