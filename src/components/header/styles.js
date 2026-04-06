import styled, { keyframes } from "styled-components";

const typing = keyframes`
  0%,
  10% {
    width: 0;
  }

  45%,
  55% {
    width: 23ch;
  }

  90%,
  100% {
    width: 0;
  }
`;

const blinkCursor = keyframes`
  0%,
  49% {
    border-color: currentColor;
  }

  50%,
  100% {
    border-color: transparent;
  }
`;

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
    margin: 8px 0 18px;
  }

  /* Ajustes para telas pequenas */
  @media (max-width: 480px) {
    h1 {
      font-size: 40px;
      line-height: 48px;
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

export const TypingText = styled.span`
  display: inline-block;
  width: 0;
  min-height: 36px;
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid ${(props) => props.theme.main};
  color: ${(props) => props.theme.main};
  font-size: 25px;
  font-weight: bold;
  letter-spacing: 0.03em;
  text-align: center;
  animation:
    ${typing} 5s steps(23) infinite,
    ${blinkCursor} 0.8s step-end infinite;

  @media (max-width: 480px) {
    min-height: 28px;
    font-size: 18px;
  }
`;
