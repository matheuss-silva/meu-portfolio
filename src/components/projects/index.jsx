import React from "react";
import ProjectCard from "../projectCard";
import { Container, BackgroundFade, Content } from "./styles";

import { projects } from "../../data/projectsdata";

const Projects = () => {
  return (
    <Container>
      <BackgroundFade />
      {/* Título da seção de projetos */}
      <h1>Projetos</h1>
      {/* Descrição da seção de projetos */}
      <p>Aqui estão alguns dos meus projetos práticos favoritos!</p>
      <Content>
        {/* Mapeando a lista de projetos e criando um card para cada projeto */}
        {projects.map((project) => (
          // Definindo a chave única para cada card (usando o título do projeto como chave)
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
