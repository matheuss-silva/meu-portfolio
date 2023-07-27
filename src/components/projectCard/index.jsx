import React, { useState } from "react";
import { Container, Content, Info, Dest } from "./styles";

import { AiOutlineLink } from "react-icons/ai";

const ProjectCard = ({ title, image, link, desc, subtitle }) => {
  // Estado para controlar a visibilidade das descrições
  const [showDescription, setShowDescription] = useState(false);

  // Função para abrir o link do projeto em uma nova aba ao clicar no card
  const openNewTab = () => {
    const url = link;
    window.open(url, "_blank");
  };

  // Função para mostrar as descrições quando o mouse estiver sobre o card
  const handleMouseEnter = () => {
    setShowDescription(true);
  };

  // Função para ocultar as descrições quando o mouse sair do card
  const handleMouseLeave = () => {
    setShowDescription(false);
  };

  return (
    <Container
      onClick={openNewTab}
      $imageSrc={image}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Dest className={showDescription ? "content1 show" : "content1"}>
        <Content className={showDescription ? "content1 show" : "content1"}>
          {/* Título do projeto */}
          <h1>{title}</h1>
          {/* Descrição do projeto */}
          <p>{desc}</p>
        </Content>
        <Info className={showDescription ? "content1 show" : "content1"}>
          {/* Ícone do link */}
          <AiOutlineLink title={link} className="icon" />
          {/* Tecnologias/subtítulo do projeto */}
          <p className="techs">{subtitle}</p>
        </Info>
      </Dest>
    </Container>
  );
};

export default ProjectCard;
