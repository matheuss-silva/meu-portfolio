import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(0, 0, 0);
  flex-direction: column;
  padding-top: 40px;

  h1 {
    z-index: 11;
    font-size: 45px;
    line-height: 40px;
    font-weight: 900;
    margin: 40px;
  }

  p {
    z-index: 11;
    opacity: 0.7;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start; // Alinha os itens ao topo
    flex: 1;
    max-width: 600px;
    margin: 20px;

    @media (max-width: 768px) {
      margin: 20px;
    }
  }
`;

export const ProfileImage = styled.img`
  width: 400px;
  height: auto;

  @media (max-width: 768px) {
    width: 200px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  z-index: 10;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
  }

  button {
    display: flex;
    padding: 10px 20px;
    background-color: #054f77;
    color: #fff;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: rgb(204, 0, 0);
    }
  }
`;

export const AboutTextContainer = styled.div`
  padding: 10px 20px 0px 20px;
  z-index: 10;
  flex: 1;
  max-height: calc(100vh - 320px); // Ajuste para dispositivos menores

  @media (max-width: 768px) {
    padding: 20px 0; // Ajuste para remover o padding extra nos dispositivos menores
  }
`;

export const AboutText = styled.p`
  margin: 1px 0; // Reduzi a margem vertical
  @media (max-width: 768px) {
    max-height: calc(100vh - 320px); // Ajuste para dispositivos menores
  }
`;