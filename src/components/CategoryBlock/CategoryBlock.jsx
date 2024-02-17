import detective from "../../assets/image/detec.png";
import { useState, useEffect } from 'react';

const CategoryBlock = () => {
  const [categorieses,setCategorieses] = useState([])
  const sort = JSON.parse(localStorage.getItem('category')) || [];

  function getCategory(){
    setCategorieses(sort)
  }

  useEffect(()=> {
    getCategory()
  },[])

  return (
    <div className="nav__categoryall">
      {categorieses.map((el)=> (
        <div>{el}</div>
      ))}
    </div>
  );
};

export default CategoryBlock;
