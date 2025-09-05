import styled from "styled-components";

export const Container = styled.div`
  transition: 0.4s cubic-bezier(0.39, 0.575, 0.565, 1);

  width: 100%;
  max-width: 480px;
  aspect-ratio: 4/3; 
  height: auto;

  margin: 0 auto;
  border-radius: 8px; /* 🔽 borda arredondada */
  overflow: hidden; /* garante que imagem/overlay siga a borda */

  background-image: url(${(props) => props.$imageSrc});
  background-size: cover;
  background-position: center;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  .content1 {
    opacity: 0;
    z-index: 999;
    display: none;
  }

  .content1.show {
    opacity: 1;
    transform: scale(1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  :hover {
    .content1 {
      opacity: 1;
      transform: scale(1);
    }

    .fade {
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.7),
        rgba(0, 0, 0, 1)
      );
    }

    cursor: pointer;
  }

  @media (max-width: 768px) {
    max-width: 100%; /* ocupa a largura total no mobile */
  }

  @media (max-width: 440px) {
    .content1 {
      opacity: 1;
      transform: scale(1);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const Info = styled.div`
  transition: 0.4s cubic-bezier(0.39, 0.575, 0.565, 1);

  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  flex-direction: row-reverse;

  padding: 5px 10px;
  padding-top: 25px;

  .icon {
    margin-right: 5px;

    :hover {
      fill: ${(props) => props.theme.link};
    }
  }

  .techs {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    .techs {
      font-size: 10px;
    }
  }
`;

export const Content = styled.div`
  transition: 0.4s cubic-bezier(0.39, 0.575, 0.565, 1);

  width: 100%;

  margin: 0 auto;
  background: transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  h1 {
    text-align: center;
    font-size: 28px;
  }

  p {
    text-align: center;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 22px;
    }
    p {
      font-size: 12px;
    }
  }

  @media (max-width: 440px) {
    h1 {
      font-size: 18px;
    }
    p {
      font-size: 11px;
    }

    .content1 {
      opacity: 0;
      transform: scale(1);
    }
  }
`;

export const Dest = styled.div`
  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.85); /* deixei mais escuro para melhor contraste */
  display: flex;
  justify-content: space-between;
  align-items: center;

  flex-direction: column;

  opacity: 0.4;
  transition: 0.4s cubic-bezier(0.39, 0.575, 0.565, 1);

  padding: 10px;
`;
