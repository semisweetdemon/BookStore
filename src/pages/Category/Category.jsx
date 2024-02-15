import CategoryBlock from "../../components/CategoryBlock/CategoryBlock";

const Category = () => {
  return (
    <section id="category">
      <div className="container">
        <div className="category">
          {/* <CategoryBlock /> */}
          <div className="category-nav">
            <div className="category-nav__navlist">
              <p>Главная /</p>
              <span>Psihology</span>
            </div>
            <select>
              <option value="">Сортировка</option>
              <option value="">Детектив</option>
              <option value="">Фантастика</option>
              <option value="">Приключение</option>
              <option value="">Научная</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
