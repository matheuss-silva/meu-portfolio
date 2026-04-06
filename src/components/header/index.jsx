import React from "react";
import {
  Container,
  Background,
  BackgroundFade,
  Content,
  TypingText,
} from "./styles";

const backgroundLink =
  "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/cca1e136569841.5720ffd3c7679.gif";

const Header = () => {
  return (
    <Container>
      <BackgroundFade />
      <Background src={backgroundLink} alt="" />

      <Content>
        <span className="welcome-text">Bem-vindo! Eu sou o</span>
        <h1>Matheus Silva</h1>
        <TypingText aria-label="Desenvolvedor Front-End">
          Desenvolvedor Front-End
        </TypingText>
      </Content>
    </Container>
  );
};

export default Header;
