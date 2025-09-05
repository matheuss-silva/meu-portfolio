import styled from "styled-components";

export const Background = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

export const BackgroundFade = styled.div`
  height: 100vh;
  width: 100%;

  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9));

  position: absolute;
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;

  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  h1 {
    font-size: 75px;
    line-height: 75px;
    font-weight: 900;
    text-align: center;
  }

  .up {
    color: ${(props) => props.theme.main};
    font-size: 25px;
    font-weight: bold;
    text-align: center;
  }

  /* Ajustes para telas pequenas */
  @media (max-width: 480px) {
    h1 {
      font-size: 40px;
      line-height: 48px;
    }

    .up {
      font-size: 18px;
    }

    .welcome-text {
      font-size: 16px;
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background: transparent;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .welcome-text {
    font-size: 22px;
  }
`;
