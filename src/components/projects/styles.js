import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative; /* Necessário para o BackgroundFade se limitar a este container */

  background: transparent;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background: url("https://i.pinimg.com/originals/f5/81/ed/f581ed2cb2711454b0b62acf93004c6e.png");

  h1 {
    z-index: 11;
    margin-bottom: 20px;
    font-size: 40px;
    line-height: 55px;
    font-weight: 900;
    text-align: center;
  }

  p {
    z-index: 11;
    opacity: 0.7;
    text-align: center;
    max-width: 80%;
    font-size: 14px;
  }

  /* Ajustes para telas menores */
  @media (max-width: 768px) {
    h1 {
      font-size: 32px;
      line-height: 40px;
    }

    p {
      font-size: 16px;
      max-width: 90%;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 26px;
      line-height: 32px;
    }

    p {
      font-size: 14px;
    }
  }
`;

export const BackgroundFade = styled.div`
  position: absolute;
  inset: 0; /* cobre todo o Container */
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1)),
    linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 1));
  z-index: 1;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;

  z-index: 11;

  display: grid;
  grid-template-columns: repeat(2, minmax(300px, 1fr));
  gap: 40px;
  justify-items: center;

  margin-top: 40px;
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Mobile → 1 card por linha */
    gap: 25px;
    margin-top: 25px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    gap: 20px;
  }
`;
