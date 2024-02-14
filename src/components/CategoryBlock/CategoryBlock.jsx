import detective from '../../assets/image/detec.png'
import fantasy from '../../assets/image/fantasy.png'
import pri from '../../assets/image/pric.png'
import nauk from '../../assets/image/nauk.png'
const CategoryBlock = () => {
  return (
      <div className="nav_category">
		  <div className="nav_category__block">
		  <img src={detective} alt="" />
		  <div className="nav_category__block__blocks">
		  <p>Детектив</p>
		  <ion-icon name="arrow-forward-outline"></ion-icon>
		  </div>
		  </div>
		  <div className="nav_category__block">
		  <img src={fantasy} alt="" />
		  <div className="nav_category__block__blocks">
		  <p>Фантастика</p>
		  <ion-icon name="arrow-forward-outline"></ion-icon>
		  </div>
		  </div>
		  <div className="nav_category__block">
		  <img src={pri} alt="" />
		  <div className="nav_category__block__blocks">
		  <p>Приключения</p>
		  <ion-icon name="arrow-forward-outline"></ion-icon>
		  </div>
		  </div>
		  <div className="nav_category__block">
		  <img src={nauk} alt="" />
		  <div className="nav_category__block__blocks">
		  <p>Научная</p>
		  <ion-icon name="arrow-forward-outline"></ion-icon>
		  </div>
		  </div>
		  <div className="nav_category__block">
		  <img src={nauk} alt="" />
		  <div className="nav_category__block__blocks">
		  <p>Научная</p>
		  <ion-icon name="arrow-forward-outline"></ion-icon>
		  </div>
		  </div>
      </div>
  );
};

export default CategoryBlock;
