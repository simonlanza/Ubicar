import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(243, 200, 200, 0.7);
  backdrop-filter: blur(4px);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

export const ModalItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 638px;
  height: 480px;
  background: rgba(255, 125, 125, 0.7);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 10px;
  h1{
    font-size: 48px;
  }
  h2{
    font-size: 32px;
    color: red;
  }
  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    p{
      text-align: center;
      font-size: 24px;
      margin: 10px;
    }
  }
  @media (max-width: 500px) {
    width: 100%;
    height: 100%;
  }
`;

export const ModalButton = styled.button`
max-width: 200px;
  width: 120px;
  height: 50px;
  background: #ff7d7d;
`