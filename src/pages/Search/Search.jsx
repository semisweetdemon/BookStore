import SearchBlock from '../../components/SearchBlock/SearchBlock';
import { useMainContext } from '../../mainContext/MainContext';

const Search = () => {
	const { search } = useMainContext();

	let arr = JSON.parse(localStorage.getItem('book')) || [];
	arr = arr.filter((el) => el.name.includes(search) || el.category.includes(search));

	return (
		<section id="search">
			<div className="container">
				<div className="search">
					<SearchBlock sch={arr} />
				</div>
			</div>
		</section>
	);
};

export default Search;
