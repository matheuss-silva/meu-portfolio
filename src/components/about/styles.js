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
  @media (max-width: 480px) {
    h1 {
      font-size: 28px;
      line-height: 34px;
      margin: 20px;
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

  @media (max-width: 768px) {
    flex-direction: column;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start; 
    flex: 1;
    max-width: 600px;
    margin: 20px;

    @media (max-width: 768px) {
      margin: 15px;
    }
  }
`;

export const ProfileImage = styled.img`
  width: 400px;
  height: auto;

  @media (max-width: 768px) {
    width: 200px;
  }

  @media (max-width: 480px) {
    width: 150px; /* menor no celular */
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

  @media (max-width: 480px) {
    button {
      font-size: 14px;
      padding: 8px 16px;
    }
  }
`;

export const AboutTextContainer = styled.div`
  padding: 10px 20px 0px 20px;
  z-index: 10;
  flex: 1;
  max-height: calc(100vh - 320px); 

  @media (max-width: 768px) {
    padding: 15px 10px;
  }
`;

export const AboutText = styled.p`
  margin: 5px 0;
  text-indent: 2em;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 22px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    line-height: 20px;
  }
`;
