import React from "react";
import {
  GalleryContainer,
  GalleryItem,
  GalleryButton,
  MainImageContainer,
  MainImage,
  ArrowButton,
  Carrousel,
  CarrouselImg,
  MyP,
} from "./ProductStyles";

const ProductGallery = ({
  arrayImg,
  current,
  handleClose,
  setCurrentIndex,
  mainImg,
}) => {
  const arrayImgObj = [{ id: 0, img: mainImg }, ...arrayImg];

  const handleArrow = () => {
    if (current === 4) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(current + 1);
    }
  };

  return (
    <GalleryContainer>
      <GalleryItem>
        {current != null && (
          <div>
            <MainImageContainer>
              <GalleryButton onClick={handleClose}>X</GalleryButton>
              <MainImage src={arrayImgObj[current].img} alt="product" />
              <ArrowButton onClick={() => handleArrow()}>{`>`}</ArrowButton>
            </MainImageContainer>
            <MyP>{current + 1 + "/5"}</MyP>
            <Carrousel>
              {arrayImgObj.map(
                (pic, index) =>
                  index !== current && (
                    <CarrouselImg
                      onClick={() => setCurrentIndex(index)}
                      src={pic.img}
                      alt="product"
                      key={index}
                    />
                  )
              )}
            </Carrousel>
          </div>
        )}
      </GalleryItem>
    </GalleryContainer>
  );
};

export default ProductGallery;
