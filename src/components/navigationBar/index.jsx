import React from "react";
import { Container, Buttons, Logo, NavButton } from "./styles";

const logoLink =
  "https://res.cloudinary.com/dho0yyj47/image/upload/v1689299753/logoM_sadcat.png";

const NavigationBar = () => {
  const goToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <Container>
      <Logo src={logoLink} alt="Logo" />

      <Buttons>
        <NavButton onClick={() => goToSection("inicio")}>Inicio</NavButton>
        <NavButton onClick={() => goToSection("projetos")}>Projetos</NavButton>
        <NavButton onClick={() => goToSection("sobre")}>Sobre</NavButton>
        <NavButton onClick={() => goToSection("habilidades")}>
          Habilidades
        </NavButton>
        <NavButton onClick={() => goToSection("contato")}>Contato</NavButton>
      </Buttons>
    </Container>
  );
};

export default NavigationBar;
