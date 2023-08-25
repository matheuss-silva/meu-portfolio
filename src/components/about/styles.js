import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgb(0, 0, 0);

  flex-direction: column;

  padding-top: 40px;

  h1 {
    z-index: 11;
    font-size: 45px;
    line-height: 40px;
    font-weight: 900;
    margin: 40px;
  }

  p {
    z-index: 11;
    opacity: 0.7;
  }
`;



export const Card = styled.div`
  width: 300px;
  height: 300px;

  padding: 11px 20px;
  margin: 0 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  background-color: rgb(7, 7, 7);

  border: 1px solid rgb(25, 25, 25);

  transition: 0.4s cubic-bezier(0.39, 0.575, 0.565, 1);

  :hover {
    border-color: ${(props) => props.theme.link};
  }

  svg {
    margin: 10px 0;
  }

  h2,
  p {
    text-align: center;
  }

  h2 {
    z-index: 11;
    margin-bottom: 20px;
    font-size: 30px;
    line-height: 20px;
    font-weight: 900;
  }

  p {
    z-index: 11;
    opacity: 0.7;
  }

  @media (max-width: 1200px) {
    min-width: 300px;
  }
`;

export const Content = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
align-content: flex-start; // Adicionado


@media (max-width: 768px) {
  flex-direction: column;
}

  div {
    flex: 1;
    max-width: 600px;
    margin: 20px 20px;
    margin-top: 20px;

    @media (max-width: 768px) {
      margin: 20px 0;
    }
  }
`;


export const ProfileImage = styled.img`
  width: 400px;
  height: auto;

  @media (max-width: 768px) {
    width: 200px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 5px; // Adicionado para garantir espaço suficiente abaixo do botão
  z-index: 10; // Adicionado para garantir que esteja acima de outros elementos

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
`;

export const AboutTextContainer = styled.div`
padding: 20px 20px;
padding-bottom: 5px; 
z-index: 10; // Adicionado para garantir que esteja acima de outros elementos
overflow: auto; // Adicionado para permitir rolagem se necessário
`;

export const AboutText = styled.p`
margin: 2px;
`;


