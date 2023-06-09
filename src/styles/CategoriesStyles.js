import styled from "styled-components";

export const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: #ffffff;
  height: max-content;
  padding: 25px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const CategoryCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 310px;
  height: 246px;
  border: 1px solid #f3f1ed;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background-color: #ffffff;
  padding: 10px;
  margin-bottom: 20px;
  h3 {
    margin: 5px;
    line-height: 23px;
    font-size: 20px;
    font-weight: 700;
  }
  p {
    margin: 5px;
    line-height: 16px;
    font-size: 14px;
    font-weight: 400;
  }
`;

export const CategoryImage = styled.img`
  width: 100%;
  height: 180px;
`;
