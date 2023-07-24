import React from "react";
import { Container, Content, Info, Dest } from "./styles";

import { AiOutlineLink } from "react-icons/ai";

const ProjectCard = ({ title, image, link, desc, subtitle }) => {
  // Função para abrir o link do projeto em uma nova aba ao clicar no card
  const openNewTab = () => {
    const url = link;
    window.open(url, "_blank");
  };

  return (
    <Container onClick={openNewTab} $imageSrc={image}>
      <Dest className="content1">
        <Content className="content1">
          {/* Título do projeto */}
          <h1>{title}</h1>
          {/* Descrição do projeto */}
          <p>{desc}</p>
        </Content>
        <Info className="content1">
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
