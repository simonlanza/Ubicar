import React from "react";
import { useState, useEffect } from "react";
import Card from "./Card";
import { ListC, ListDiv, ListH3 } from "../styles/ListStyles";
import cars from "../data/cars.json";

const List = ({selectedCity,selectedCategory, cat}) => {
  const [products, setProducts] = useState(cars);
  const [title, setTitle] = useState("Recomendaciones")
/*   useEffect(() => {
    let apiProducts = [];
    const request = async () => {
      const response = await fetch(`http://13.59.92.254:8080/producto/listar`);
      const result = await response.json();
      apiProducts=result;
    };
    request().then(()=>{
      if(selectedCategory && selectedCity) {
        const filteredProducts = apiProducts.filter(car => car.categoria.id === selectedCategory && car.ciudad.localidad === selectedCity);
        setProducts(filteredProducts);
        setTitle(`Autos ${cat} en ${selectedCity}`)
      } else if(selectedCity) {
        const productsByCity = apiProducts.filter(car => car.ciudad.localidad === selectedCity )
        setProducts(productsByCity);
        setTitle(`Autos en ${selectedCity}`)
      } else if (selectedCategory) {
        const productsByCategory = apiProducts.filter(car => car.categoria.id === selectedCategory);
        setProducts(productsByCategory);
        setTitle(`Autos ${cat}`)
      } else return setProducts(apiProducts);
    })
  }, [selectedCategory, selectedCity, cat]); */
  useEffect(() => {
      const filteredProducts = cars.filter(car => car.category === selectedCategory?.caption);
      setProducts(filteredProducts);
      setTitle(`Autos ${cat}`)
  }, [selectedCategory])
  return (
    <ListDiv>
      <ListH3>{selectedCategory && title}</ListH3>
      <ListC>
        {selectedCategory && products?.map((product) => (
          <Card key={product.id} product={product} images={product.img} />
        ))}
      </ListC>
    </ListDiv>
  );
};

export default List;
