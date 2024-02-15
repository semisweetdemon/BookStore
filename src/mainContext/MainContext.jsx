import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const mainContext = createContext();
export const useMainContext = () => useContext(mainContext);


const MainContext = ({ children }) => {


const [admin, setAdmin] = useState([])
const [off, setOff] = useState(false)
const [open, setOpen] = useState(false)
const  navigate = useNavigate()


const [image, setImage] = useState('')
const [name, setName] = useState('')
const [category, setCategory] = useState('')
const [price, setPrice] = useState('')
const [discriotion, setDiscriotion] = useState('')

function getSave() {
	let obj = {
		image,
		name,
		category,
		price,
		discriotion,
		id: Date.now(),
	}
	const data = JSON.parse(localStorage.getItem('book')) || []
	data.push(obj)
	localStorage.setItem('book', JSON.stringify(data))
	
	setImage('')
	setName('')
	setCategory('')
	setPrice('')
	setDiscriotion('')

	navigate('/')
}



const password = 'MoutionWeb!'
function getPass() {
	const data = JSON.parse(localStorage.getItem('book')) || []
	
}

	let values = {
		admin, setAdmin,
		open, setOpen,

	  image,	setImage,
		name, setName,
		category, setCategory,
		price, setPrice,
		discriotion, setDiscriotion,
		
		getPass,
		getSave,
	};

	return <mainContext.Provider value={values}>{children}</mainContext.Provider>;
};

export default MainContext;
