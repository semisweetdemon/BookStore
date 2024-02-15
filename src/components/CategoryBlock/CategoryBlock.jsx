import detective from "../../assets/image/detec.png";

const CategoryBlock = () => {
  return (
    <div className="nav__categoryall">
      <div className="nav__category">
        <div className="nav__category_image">
          <div></div>
          <img src={detective} alt="" />
        </div>
        <div className="nav__category_text">
          <p>Детектив</p>
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
};

export default CategoryBlock;
