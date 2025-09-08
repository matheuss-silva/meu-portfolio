import styled from "styled-components";

/* 1) Declare Dest primeiro para poder usá-lo dentro de Container */
export const Dest = styled.div`
  width: 100%;
  height: 100%;
  /* Não usamos opacity aqui para não desbotar o texto */
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  transition: 0.4s cubic-bezier(0.39, 0.575, 0.565, 1);
  padding: 10px;
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
  gap: 8px;

  h1 {
    text-align: center;
    /* ~20px–28px conforme largura */
    font-size: clamp(1.25rem, 1rem + 1vw, 1.75rem);
    line-height: 1.2;
    color: #fff;
    margin: 0;
  }

  p {
    text-align: center;
    /* descrição maior: ~15px–18px */
    font-size: clamp(0.95rem, 0.85rem + 0.5vw, 1.125rem);
    line-height: 1.55;
    color: #f5f5f5;
    max-width: 90%;
    margin: 0;
    text-shadow: 0 1px 2px rgba(0,0,0,0.35);
  }

  @media (max-width: 768px) {
    h1 { font-size: clamp(1.125rem, 2.5vw, 1.375rem); } /* ~18–22px */
    p  { font-size: clamp(1rem, 2.3vw, 1.0625rem); }     /* ~16–17px */
  }

  @media (max-width: 440px) {
    h1 { font-size: 1.125rem; } /* ~18px */
    p  { font-size: 1rem; }     /* ~16px */
    .content1 { opacity: 0; transform: scale(1); }
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
    width: 20px;
    height: 20px;

    :hover {
      fill: ${(props) => props.theme?.link || "#4ea1ff"};
    }
  }

  .techs {
    font-size: 0.875rem; /* ~14px */
    line-height: 1.4;
    color: #e8e8e8;
    text-align: left;
  }

  @media (max-width: 480px) {
    .techs { font-size: 0.8125rem; } /* ~13px */
  }
`;

/* 4) Container por último — agora pode referenciar ${Dest} sem erro */
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
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  /* padrão: conteúdo oculto até hover/enter */
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

    /* escurece levemente o overlay no hover para aumentar contraste */
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
