import CategoryBlock from "../../components/CategoryBlock/CategoryBlock";
import { useMainContext } from "../../mainContext/MainContext";
import { useState, useEffect } from "react";
import BooksBlock from "../../components/BooksBlock/BooksBlock";

const Category = (e) => {
  let booker = JSON.parse(localStorage.getItem("categorieSort")) || 'Сортировка';
  const { open, setOpen, navigate } = useMainContext();
  const [genre, setGenre] = useState(booker);
  const [categories, setCategories] = useState([]);

  const cate = JSON.parse(localStorage.getItem("category")) || [];

  useEffect(() => {
    booker = genre;
    localStorage.setItem("categorieSort", JSON.stringify(booker));
  },[genre]);

  let data = JSON.parse(localStorage.getItem("book")) || [];
  let filterBook;

  if(genre === 'Сортировка'){
	filterBook = data
  }else{
	filterBook = data?.filter((el) => el.category === genre);
  }

  function getCategories() {
    setCategories(cate);
  }
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <section id="category">
      <div className="container">
        <div className="category">
			{/* <CategoryBlock/> */}
          <div className="category-nav">
            <div className="category-nav__navlist">
              <p
                onClick={() => {
                  navigate("/");
                }}
                style={{ cursor: "pointer" }}
              >
                Главная /
              </p>
              <span>{genre}</span>
            </div>
            <select onChange={(e) => setGenre(e.target.value)}>
              <option value="Сортировка" selected>
                Сортировка
              </option>
              {categories.map((el) => (
                <option>{el}</option>
              ))}
            </select>
          </div>
          <BooksBlock books={filterBook} />
        </div>
      </div>
    </section>
  );
};

export default Category;



// zapros,put get delete 
// run out