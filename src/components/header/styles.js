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
  inset: 0;

  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9));

  position: absolute;
`;

export const Content = styled.div`
  inset: 0;
  padding: 0 20px;

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

  @media (max-width: 768px) {
    h1 {
      font-size: 56px;
      line-height: 62px;
    }

    .welcome-text {
      font-size: 18px;
    }
  }

  /* Ajustes para telas pequenas */
  @media (max-width: 480px) {
    h1 {
      font-size: clamp(34px, 11vw, 42px);
      line-height: 1.12;
      margin: 6px 0 14px;
    }

    .welcome-text {
      font-size: 16px;
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 100svh;
  position: relative;
  overflow: hidden;

  background: transparent;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .welcome-text {
    font-size: 22px;
  }

  @media (max-width: 768px) {
    height: 100svh;
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

  @media (max-width: 768px) {
    min-height: 32px;
    font-size: 22px;
  }

  @media (max-width: 480px) {
    min-height: 28px;
    max-width: calc(100vw - 40px);
    font-size: clamp(16px, 5vw, 18px);
  }
`;
