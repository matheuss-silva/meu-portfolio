import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;

  padding: 80px 20px 40px; 

  h1 {
    z-index: 11;
    margin-bottom: 20px;
    font-size: 35px;
    line-height: 55px;
    font-weight: 900;
    text-align: center;
  }

  p {
    z-index: 11;
    opacity: 0.7;
    text-align: center;
    max-width: 80%;
    font-size: 16px;
    line-height: 26px;
  }

  /* Ajuste para telas pequenas (celulares) */
  @media (max-width: 480px) {
    h1 {
      font-size: 28px;
      line-height: 36px;
    }

    p {
      font-size: 14px;
      line-height: 22px;
      max-width: 90%;
    }
  }
`;

export const BackgroundFade = styled.div`
  position: absolute;
  inset: 0; /* cobre todo o container */

  background: 
    linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3)),
    url("https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5d96d646847841.586690decaada.gif");

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  z-index: 1;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: rgba(10, 10, 10, 0.7);

  margin-top: 50px; 
  padding: 30px 60px;

  transition: 0.4s cubic-bezier(0.39, 0.575, 0.565, 1);
  border-radius: 7px;

  z-index: 11;
`;

export const LinksContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
`;

export const Localize = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    fill: salmon;
    z-index: 111;
    margin-right: 10px;
  }
`;

export const Links = styled.div`
  height: 55px;
  margin: 0px 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.4s cubic-bezier(0.39, 0.575, 0.565, 1);

  opacity: 0.7;

  :hover {
    cursor: pointer;
    transform: scale(1.1);
    opacity: 1;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  color: #fff;
  margin-top: auto;

  h1 {
    font-size: 20px;
    margin-right: 10px;
  }

  p {
    font-size: 14px;
    opacity: 0.7;
  }
`;
