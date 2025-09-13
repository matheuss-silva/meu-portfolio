import styled from "styled-components";

/* Overlay do card */
export const Dest = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);

  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
  align-items: center;

  transition: 0.4s cubic-bezier(0.39, 0.575, 0.565, 1);
  padding: 20px;

  position: relative; 
`;

/* Conteúdo central: título + descrição */
export const Content = styled.div`
  flex: 1; /* ocupa espaço entre topo e rodapé */
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  gap: 12px;

  h1 {
    text-align: center;
    font-size: clamp(1.25rem, 1rem + 1vw, 1.75rem);
    line-height: 1.2;
    font-weight: 900;
    color: #fff;
    margin: 0;
  }

  p {
    text-align: center;
    font-size: clamp(0.95rem, 0.85rem + 0.5vw, 1.125rem);
    line-height: 1.5;
    color: #f5f5f5;
    max-width: 90%;
    margin: 0;
    text-shadow: 0 1px 2px rgba(0,0,0,0.35);
  }

  @media (max-width: 768px) {
    h1 { font-size: clamp(1.125rem, 2.5vw, 1.375rem); }
    p  { font-size: clamp(1rem, 2.3vw, 1.0625rem); }
  }

  @media (max-width: 440px) {
    h1 { font-size: 1.125rem; }
    p  { font-size: 1rem; }
  }
`;

/* Rodapé: tecnologias + link */
export const Info = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between; /* texto à esquerda, ícone à direita */
  align-items: center;

  padding: 8px 12px;
  border-top: 1px solid rgba(255,255,255,0.15);

  margin-top: auto; /* garante que fique no rodapé do motion.div */

  .icon {
    width: 22px;
    height: 22px;
    cursor: pointer;
    transition: 0.3s;

    :hover {
      fill: ${(props) => props.theme?.link || "#4ea1ff"};
    }
  }

  .techs {
    font-size: 0.85rem;
    line-height: 1.4;
    color: #e8e8e8;
    text-align: left;
  }

  @media (max-width: 480px) {
    .techs { font-size: 0.8125rem; }
  }
`;

/* Container do card */
export const Container = styled.div`
  transition: 0.4s cubic-bezier(0.39, 0.575, 0.565, 1);

  width: 100%;
  max-width: 480px;
  aspect-ratio: 4/3;
  height: auto;

  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;

  background-image: url(${(props) => props.$imageSrc});
  background-size: cover;
  background-position: center;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  /* conteúdo oculto até hover/enter */
  .content1 {
    opacity: 0;
    z-index: 1;
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
      display: flex;
    }

    ${Dest} {
      background: rgba(0, 0, 0, 0.78);
    }

    cursor: pointer;
  }

  @media (max-width: 768px) {
    max-width: 100%;
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
