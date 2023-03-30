import React from "react";
import { FormDiv2, UserForm, MainButton, SecondButton } from "./LoginStyles";
import { ModalContainer, ModalItem } from "../../styles/ModalNoApi";
import { useState, useEffect } from "react";

const RegisterForm = ({ handleView }) => {
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
  }
  return (
    <FormDiv2>
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
      <h2>Crea tu cuenta</h2>
      <UserForm onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input required type="text" />
        </label>
        <label>
          Apellido:
          <input required type="text" />
        </label>
        <label>
          Email:
          <input required type="email" />
        </label>
        <label>
          Contraeña:
          <input required type="password" />
        </label>
        <label>
          Confirmar contraeña:
          <input required type="password" />
        </label>
        <MainButton type="submit">Crear cuenta</MainButton>
      </UserForm>
      <p>Ya tienes una cuenta?       <SecondButton onClick={() => handleView("login")}>Inicia Sesion</SecondButton> </p>
    </FormDiv2>
  );
}

export default RegisterForm;