import styled from "styled-components";

export const Container = styled.div`
  width: 60px;

  background: rgba(30, 30, 30, 0.5);
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  position: fixed;
  bottom: 20px;
  left: 20px;

  z-index: 9999999999;

  opacity: ${(props) => (props.scrollVisible ? 0 : 1)};

  transform: translateY(${(props) => (props.scrollVisible ? "0" : "-30px")});

  transition: 0.4s cubic-bezier(0.39, 0.575, 0.565, 1);
  border: 1px solid rgb(36, 36, 36);

  @media (max-width: 640px) {
    display: none;
  }
`;

export const Content = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
`;

export const Links = styled.div`
  width: 100%;
  height: 55px;
  position: relative;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: transform 0.32s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.28s ease, background 0.28s ease;

  opacity: 0.7;
  transform-origin: center;
  will-change: transform, opacity;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.12),
      transparent 70%
    );
    opacity: 0;
    transform: scale(0.7);
    transition: opacity 0.3s ease, transform 0.35s ease;
    pointer-events: none;
  }

  svg {
    position: relative;
    z-index: 1;
    transition: transform 0.32s cubic-bezier(0.22, 1, 0.36, 1),
      filter 0.32s ease;
    will-change: transform, filter;
  }

  :hover {
    cursor: pointer;
    transform: translateY(-3px) scale(1.06);
    opacity: 1;

    &::before {
      opacity: 1;
      transform: scale(1);
    }

    svg {
      transform: scale(1.08);
      filter: drop-shadow(0 6px 14px rgba(255, 255, 255, 0.18));
    }
  }

  :active {
    transform: translateY(-1px) scale(1.02);
  }
`;
