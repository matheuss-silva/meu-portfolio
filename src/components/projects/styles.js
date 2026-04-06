import styled from "styled-components";
import { motion } from "framer-motion";

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

export const ProjectItem = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  z-index: 11;
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 18px;
  margin-bottom: 50px;
  padding: 0;

  @media (max-width: 768px) {
    max-width: 480px;
    justify-content: center;
    padding: 0 20px;
  }

  @media (max-width: 480px) {
    padding: 0 10px;
  }
`;

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 230px;
  background: linear-gradient(135deg, #f75231, #ff8a65);
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  padding: 12px 26px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 16px 30px rgba(247, 82, 49, 0.24);
  transition: transform 0.3s ease, box-shadow 0.3s ease,
    filter 0.3s ease;
  z-index: 11;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 22px 36px rgba(247, 82, 49, 0.32);
    filter: brightness(1.06);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 10px 24px;
    margin-bottom: 30px;
    min-width: 0;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.85); /* darken background */
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
  overflow: hidden; /* Evita que o click e segure/scroll mova a home por trás */
  overscroll-behavior: none; /* Bloqueia o transbordo de rolagem nesta área */
`;

export const ModalContent = styled.div`
  background: #111;
  width: 100%;
  max-width: 1200px;
  max-height: 90vh;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  animation: fadeIn 0.3s ease-out forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: #1a1a1a;
  
  h2 {
    color: #fff;
    font-size: 24px;
    font-weight: 700;
    margin: 0;
  }

  @media (max-width: 768px) {
    padding: 15px 20px;
    h2 {
      font-size: 20px;
    }
  }
`;

export const ModalCloseButton = styled.button`
  background: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 50%;
  transition: background 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const ModalGrid = styled.div`
  flex: 1;
  overflow-y: auto;
  overscroll-behavior: contain; /* Trava as instâncias de scroll somente nesta div */
  padding: 30px;
  
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  justify-items: center;

  /* Estilização da barra de rolagem para navegadores Webkit (Chrome, Safari, Edge) */
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #111;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #333;
    border-radius: 10px;
    border: 2px solid #111;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 20px;
    gap: 20px;
  }
`;
