import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(0, 0, 0);
  flex-direction: column;
  padding-top: 40px;

  h1 {
    z-index: 11;
    font-size: 40px;
    line-height: 40px;
    font-weight: 900;
    margin: 40px;
    text-align: center;
  }

  p {
    z-index: 11;
    opacity: 0.7;
  }

  /* Ajustes para celular */
  @media (max-width: 768px) {
    min-height: auto;
    padding: 76px 18px 64px;
  }

  @media (max-width: 480px) {
    padding: 64px 16px 56px;

    h1 {
      font-size: 28px;
      line-height: 34px;
      margin: 0 0 24px;
    }

    p {
      font-size: 14px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1080px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 22px;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex: 1;
    max-width: 600px;
    margin: 20px;

    @media (max-width: 768px) {
      width: 100%;
      margin: 0;
    }
  }
`;

export const ProfileImage = styled.img`
  width: 400px;
  height: auto;
  max-width: min(400px, 42vw);

  @media (max-width: 768px) {
    width: min(240px, 62vw);
    max-width: 100%;
  }

  @media (max-width: 480px) {
    width: min(180px, 58vw);
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  z-index: 10;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    margin-top: 18px;
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
  }

  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 210px;
    padding: 12px 24px;
    background: linear-gradient(135deg, #f75231, #ff8a65);
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0.02em;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 12px;
    cursor: pointer;
    box-shadow: 0 16px 30px rgba(247, 82, 49, 0.24);
    transition: transform 0.3s ease, box-shadow 0.3s ease,
      filter 0.3s ease;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 22px 36px rgba(247, 82, 49, 0.32);
      filter: brightness(1.06);
    }
  }

  @media (max-width: 480px) {
    button {
      min-width: 0;
      width: 100%;
      font-size: 14px;
      padding: 10px 16px;
    }
  }
`;

export const AboutTextContainer = styled.div`
  padding: 10px 20px 0px 20px;
  z-index: 10;
  flex: 1;

  /* Removido: max-height que causava sobreposição no mobile */
  max-height: none;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const AboutText = styled.p`
  margin: 5px 0;
  text-indent: 2em;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 22px;
    text-indent: 0;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    line-height: 21px;
  }
`;
