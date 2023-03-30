import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ProductContainer,
  HeaderContainer,
  LHeader,
  RHeader,
  ImageContainer,
  DescriptionContainer,
  FeaturesContainer,
  MyH2,
  CalendarContainer,
  CalendarSection,
  CalendarItem,
  FooterContainer,
  FooterItemContainer,
  FooterItem,
} from "./ProductStyles";
import { BsFillPinMapFill } from "react-icons/bs";
import arrow from "../../assets/arrow.png";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import ProductGallery from "./ProductGallery";
import Calendar from "react-calendar";
import "./calendarStyles.css";
import { Rating } from "react-simple-star-rating";
import cars from "../../data/cars.json";
import carsImages from "../../data/carsImages.json";
import { ModalContainer, ModalItem } from "../../styles/ModalNoApi";

const Product = ({ id }) => {
  const getWindowSize = () => {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  };
  const [rating, setRating] = useState(0);
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.removeProperty("overflow");
    }
  }, [showModal]);

  const [reserveFail, setReserveFail] = useState(false);
  useEffect(() => {
    if (reserveFail) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.removeProperty("overflow");
    }
  }, [reserveFail]);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const handleModal = (index) => {
    setCurrentIndex(index);
    setShowModal(true);
  };
  const hanldeRating = (rate) => {
    setRating(rate);
  };
  return (
    <ProductContainer>
      <HeaderContainer>
        <LHeader>
          <p>{cars[id].category}</p>
          <h1>{cars[id].title}</h1>
          <div>
            <BsFillPinMapFill />
            <p>{cars[id].location}</p>
          </div>
        </LHeader>
        <RHeader>
          <Link to="/">
            <img src={arrow} alt="home" className="arrow" />
          </Link>
          <Rating
            onClick={hanldeRating}
            ratingValue={rating}
            size={windowSize.innerWidth > 700 ? 25 : 15}
            fillColor={"#f0572d"}
            allowHalfIcon={true}
            transition={true}
          />
        </RHeader>
      </HeaderContainer>
      {showModal && (
        <ProductGallery
          mainImg={cars[id].img}
          arrayImg={carsImages}
          current={currentIndex}
          handleClose={() => setShowModal(false)}
          setCurrentIndex={setCurrentIndex}
        />
      )}
      <ImageContainer>
        <div className="main-image" onClick={() => handleModal(0)}>
          <img src={cars[id].img} alt="foto auto" />
        </div>
        {!showModal &&
          carsImages.map((pic, index) => (
            <div
              className="image"
              onClick={() => handleModal(index)}
              key={index}
            >
              <img src={pic.img} alt="foto auto" />
            </div>
          ))}
      </ImageContainer>
      <DescriptionContainer>
        <h2>Disfruta un automóvil pensado para tus necesidades</h2>
        <p>{cars[id].description}</p>
      </DescriptionContainer>
      <FeaturesContainer>
        <h2>¿Qué ofrece este auto?</h2>
        <div>
          <p>gps</p>
          <p>automatico</p>
          <p>parking</p>
          <p>parlantes</p>
          <p>bluetooth</p>
        </div>
      </FeaturesContainer>
      <MyH2>Fechas disponibles</MyH2>
      <CalendarContainer>
        <Calendar
          showDoubleView={windowSize.innerWidth > 500 ? true : false}
          next2Label={null}
          prev2Label={null}
        />
        <CalendarSection>
          <CalendarItem>
            <h3>Agregá tus fechas de viaje para obtener precios exactos</h3>
            <button
              onClick={() => {
                setReserveFail(true);
              }}
            >
              Iniciar reserva
            </button>
            {reserveFail && (
              <ModalContainer>
                <ModalItem>
                  <button onClick={() => setReserveFail(false)}>X</button>
                  <h1>Ooops!</h1>
                  <h2>Hemos encontrado un error</h2>
                  <div>
                    <p>Los servicios de la API no se encuentran activos</p>
                    <p>
                      Se deshabilita la generacion de nuevas reservas online.
                    </p>
                    <p>Haz click <Link to={`/reserve/${id}`}>aqui</Link>si desea visualizar la pagina "Reservas"</p>
                  </div>
                </ModalItem>
              </ModalContainer>
            )}
          </CalendarItem>
        </CalendarSection>
      </CalendarContainer>
      <div></div>
      <FooterContainer>
        <h2>Qué tenés que saber</h2>
        <FooterItemContainer>
          <FooterItem>
            <h4>politica del auto titulo</h4>
            <p>politica del auto descripcion</p>
          </FooterItem>
          <FooterItem>
            <h4>politica del auto titulo</h4>
            <p>politica del auto descripcion</p>
          </FooterItem>
          <FooterItem>
            <h4>Cancelacion</h4>
            <p>cancelacion</p>
            <p>cancelacion</p>
            <p>cancelacion</p>
          </FooterItem>
        </FooterItemContainer>
      </FooterContainer>
    </ProductContainer>
  );
};

export default Product;
