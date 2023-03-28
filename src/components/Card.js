import React from "react";
import { CardC, StyledImg, CardDiv, StyledP1, StyledP2, StyledButton } from "../styles/ListStyles";
import { Link } from "react-router-dom"

const Card = ({ product, images }) => {
  return (
    <CardC>
      <div>
        <StyledImg src={images} alt={product.name} />
      </div>
      <CardDiv>
        <StyledP1>{product.category}</StyledP1>
        <h3>{product.title}</h3>
        <StyledP2>{product.location}</StyledP2>
        <StyledP2>{product.description}</StyledP2>
        <Link to={`product/${product.id}`} >
        <StyledButton>ver mas</StyledButton>
        </Link>
      </CardDiv>
    </CardC>
  );
};

export default Card;
