import React, { useEffect, useRef } from "react";
import ProjectCard from "../projectCard";
import { Container, BackgroundFade, Content } from "./styles";

import { projects } from "../../data/projectsdata";

const Projects = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    // Obtém a largura total do conteúdo
    const contentWidth = scrollRef.current.scrollWidth;
    // Obtém a largura visível do contêiner do scroll (Content)
    const containerWidth = scrollRef.current.clientWidth;
    // Calcula o valor inicial de scroll para posicionar o conteúdo no meio
    const initialScrollLeft = (contentWidth - containerWidth) / 2;
    // Define o scrollLeft para o valor inicial
    scrollRef.current.scrollLeft = initialScrollLeft;
  }, []);

  return (
    <Container>
      <BackgroundFade />
      <h1>Projetos</h1>
      <p>Aqui estão alguns dos meus projetos práticos favoritos!</p>
      <Content ref={scrollRef}>
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            image={project.image}
            link={project.link}
            desc={project.description}
            subtitle={project.subtitle}
          />
        ))}
      </Content>
    </Container>
  );
};

export default Projects;
