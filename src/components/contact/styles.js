import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: url("https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5d96d646847841.586690decaada.gif");

  flex-direction: column;

  background-size: cover;
  background-repeat: no-repeat;

  h1 {
    z-index: 11;
    margin-bottom: 20px;
    font-size: 40px;
    line-height: 45px;
    font-weight: 900;
    margin-top: 40px;
  }

  p {
    z-index: 11;
    opacity: 0.7;
    max-width: 70%;
    text-align: center;
  }
`;

export const BackgroundFade = styled.div`
  height: 100vh;
  width: 100%;

  background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)),
    linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));

  position: absolute;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  background-color: rgba(10, 10, 10, 0.7);

  margin-top: 100px;

  padding: 30px 60px;

  transition: 0.4s cubic-bezier(0.39, 0.575, 0.565, 1);

  border-radius: 7px;
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

