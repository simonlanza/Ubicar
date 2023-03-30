import React from "react";
import { useState, useEffect } from "react";import { FormDiv, UserForm, MainButton, SecondButton } from "./LoginStyles";
import { ModalContainer, ModalItem } from "../../styles/ModalNoApi";

const LoginForm = ({ handleView, setIsLogged }) => {
  /*   const User = {
    email: "simon@gmail.com",
    password: "simon123"
  } */
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.removeProperty("overflow");
    }
  }, [showModal]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
    /*     if (
      e.target.email.value === User.email &&
      e.target.password.value === User.password
    ) {
      setIsLogged(true);
      navigate("/");
    } else {
      alert("Invalid credentials");
    } */
  };
  return (
    <FormDiv>
            {showModal && (
        <ModalContainer>
          <ModalItem>
            <button onClick={() => setShowModal(false)}>X</button>
            <h1>Ooops!</h1>
            <h2>Hemos encontrado un error</h2>
            <div>
              <p>Los servicios de la API no se encuentran activos</p>
              <p>
                Se deshabilita el inicio de sesion de los usuarios y la creacion
                de nuevos usuarios.{" "}
              </p>
              <p>Disculpe las molestias</p>
            </div>
          </ModalItem>
        </ModalContainer>
      )}
      <h2>Iniciar Sesion</h2>
      <UserForm onSubmit={handleSubmit}>
        <label>
          Email:
          <input required type="email" placeholder="e-mail" name="email" />
        </label>
        <label>
          Contraeña:
          <input
            required
            type="password"
            minLength={6}
            placeholder="password"
            name="password"
          />
        </label>
        <MainButton type="submit">Ingresar</MainButton>
      </UserForm>
      <p>
        Aun no tienes cuenta?
        <SecondButton onClick={() => handleView("register")}>
          Registrate
        </SecondButton>{" "}
      </p>
    </FormDiv>
  );
};

export default LoginForm;
