import React from "react";
import { CategoryCard, CategoryImage } from "../styles/CategoriesStyles";
import { Link } from "react-router-dom";

const CardCategories = ({ category }) => {
  return (
    <>
    <CategoryCard>
        <CategoryImage src={category.img} alt={category.caption} />
      <h3>{category.caption}</h3>
      <p>{category.total} autos</p>
    </CategoryCard>
    </>
  );
};

export default CardCategories;
