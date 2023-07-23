import React, { useState, useEffect } from "react";
import { Container } from "./styles";

import { AiOutlineArrowUp } from "react-icons/ai";

const FlatTopButton = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setVisible] = useState(false);

  // Função que trata o evento de rolagem da página
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  // Adiciona um ouvinte de evento de rolagem ao carregar o componente
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Remove o ouvinte de evento de rolagem ao desmontar o componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Atualiza a visibilidade do botão com base na posição de rolagem
  useEffect(() => {
    let iscro = scrollPosition < 500 ? true : false;

    setVisible(iscro);
  }, [scrollPosition]);

  // Função para rolar suavemente para o topo da página
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    // Botão de seta para cima com ação para rolar para o topo
    <Container scrollVisible={isVisible} onClick={goToTop}>
      <AiOutlineArrowUp size={"40px"} />
    </Container>
  );
};

export default FlatTopButton;
