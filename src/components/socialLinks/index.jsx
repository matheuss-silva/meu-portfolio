import React, { useState, useEffect } from "react";
import { Container, Content, Links } from "./styles";

import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiFillLinkedin,
} from "react-icons/ai";

const SocialLinks = () => {
  // Estado para armazenar a posição de scroll
  const [scrollPosition, setScrollPosition] = useState(0);
  // Estado para controlar a visibilidade dos ícones
  const [isVisible, setVisible] = useState(false);

  // Função para atualizar a posição de scroll
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  // Efeito para adicionar o listener do scroll e removê-lo quando o componente é desmontado
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Efeito para atualizar a visibilidade dos ícones com base na posição de scroll
  useEffect(() => {
    // Verifica se a posição de scroll é maior que 2200
    let iscro = scrollPosition > 2200 ? true : false;

    // Define a visibilidade dos ícones com base no resultado anterior
    setVisible(iscro);
  }, [scrollPosition]);

  // Funções para abrir os links em uma nova aba ao clicar nos ícones
  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/matheus-silva-471221277/", "_blank");
  };

  const openGitHub = () => {
    window.open("https://github.com/matheuss-silva", "_blank");
  };

  const openInstagram = () => {
    window.open("https://www.instagram.com/__.matheus.s", "_blank");
  };

  return (
    // Container para controlar a visibilidade dos ícones com base na propriedade scrollVisible
    <Container scrollVisible={isVisible}>
      <Content>
        {/* Ícone do GitHub */}
        <Links onClick={openGitHub}>
          <AiOutlineGithub size={"38px"} />
        </Links>
        {/* Ícone do Instagram */}
        <Links onClick={openInstagram}>
          <AiOutlineInstagram size={"38px"} />
        </Links>
        {/* Ícone do LinkedIn */}
        <Links onClick={openLinkedIn}>
          <AiFillLinkedin size={"38px"} />
        </Links>
      </Content>
    </Container>
  );
};

export default SocialLinks;
