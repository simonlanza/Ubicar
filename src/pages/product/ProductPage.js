import React from "react";
import Product from "./Product";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();
/*   useEffect(() => {
    const request = async () => {
      const response = await fetch(`http://13.59.92.254:8080/producto/${id}`);
      const result = await response.json();
      setProduct(result);
      setImages(result.imagen);
       setPolicy(result.politica); 
    };
    request();
  }, [id]); */
  return <Product id={id} />;
};

export default ProductPage;
