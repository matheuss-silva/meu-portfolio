import React from "react";
import { Container, Background, BackgroundFade, Content } from "./styles";

const backgroundLink =
  "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/cca1e136569841.5720ffd3c7679.gif";

const Header = () => {
  return (
    // Componente do cabeçalho
    <Container>
      {/* Camada de fundo escura */}
      <BackgroundFade />
      {/* Imagem de fundo */}
      <Background src={backgroundLink} />
      {/* Conteúdo do cabeçalho */}
      <Content>
        <span className="welcome-text">Bem vindo!👋 Eu sou o</span>
        <h1>Matheus Silva</h1>
        <span className="up">FullStack Developer</span>
      </Content>
    </Container>
  );
};

export default Header;
