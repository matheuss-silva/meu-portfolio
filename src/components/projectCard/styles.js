import styled from "styled-components";

/* Overlay do card */
export const Dest = styled.div`
  width: 100%;
  height: 100%;

  /* Escurece somente quando showDescription estiver ativo */
  background: ${({ $active }) =>
    $active ? "rgba(0, 0, 0, 0.52)" : "rgba(0, 0, 0, 0.2)"};

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding: 20px;
  position: relative;

  transition: background 0.4s ease;

  @media (max-width: 480px) {
    padding: 14px 16px;
    background: ${({ $active }) =>
      $active
        ? "linear-gradient(180deg, rgba(0, 0, 0, 0.68), rgba(0, 0, 0, 0.42) 48%, rgba(0, 0, 0, 0.72))"
        : "rgba(0, 0, 0, 0.28)"};
  }
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
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
  }

  @media (max-width: 768px) {
    gap: 8px;

    h1 {
      font-size: clamp(1.125rem, 2.5vw, 1.375rem);
    }
    p {
      font-size: 0.95rem;
      line-height: 1.42;
      max-width: 100%;
    }
  }

  @media (max-width: 440px) {
    justify-content: flex-start;
    padding-top: 4px;

    h1 {
      font-size: 1.05rem;
      line-height: 1.15;
    }

    p {
      font-size: 0.78rem;
      line-height: 1.28;
    }
  }
`;

/* Rodapé: tecnologias + link */
export const Info = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between; /* texto à esquerda, ícone à direita */
  align-items: center;

  padding: 8px 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.15);

  margin-top: auto; /* garante que fique no rodapé do motion.div */

  .icon {
    width: 22px;
    height: 22px;
    flex: 0 0 auto;
    cursor: pointer;
    transition: 0.3s;

    :hover {
      fill: ${(props) => props.theme?.link || "#4ea1ff"};
    }
  }

  .techs {
    flex: 1;
    font-size: 0.85rem;
    line-height: 1.4;
    color: #e8e8e8;
    text-align: left;
  }

  @media (max-width: 480px) {
    margin-top: 10px;
    padding: 8px 10px;
    gap: 8px;
    border-top: 0;
    border-radius: 999px;
    background: rgba(0, 0, 0, 0.36);
    backdrop-filter: blur(8px);

    .icon {
      width: 18px;
      height: 18px;
      padding: 2px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.12);
      color: #fff;
    }

    .techs {
      font-size: 0.76rem;
      line-height: 1.25;
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
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
    ${Dest} {
      background: rgba(0, 0, 0, 0.82);
    }

    cursor: pointer;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    aspect-ratio: 4/3;
  }

  @media (max-width: 440px) {
    aspect-ratio: 4/3;

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
