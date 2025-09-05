import React from "react";
import { Container, Buttons, Logo, NavButton } from "./styles";

import useWindowDimensions from "../../hooks/useWindowDimensions";

const logoLink =
  "https://res.cloudinary.com/dho0yyj47/image/upload/v1689299753/logoM_sadcat.png";

const NavigationBar = () => {
  // Hook personalizado para obter as dimensões da janela do navegador
  const { height } = useWindowDimensions();

  // Função para rolar suavemente para uma determinada posição
  const goToPosition = (position) => {
    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  };

  return (
    // Componente da barra de navegação
    <Container>
      {/* Logo */}
      <Logo src={logoLink} />
      
      {/* Botões de navegação */}
      <Buttons>
        <NavButton onClick={() => goToPosition(0)}>
          Inicio
        </NavButton>
        <NavButton onClick={() => goToPosition(height + 250)}>
          Projetos
        </NavButton>
        <NavButton onClick={() => goToPosition(height * 2 + 400)}>
          Sobre
        </NavButton>
        <NavButton onClick={() => goToPosition(height * 3 + 400)}>
          Habilidades
        </NavButton>
        <NavButton onClick={() => goToPosition(height * 4 + 400)}>
          Contato
        </NavButton>
      </Buttons>
    </Container>
  );
};

export default NavigationBar;
