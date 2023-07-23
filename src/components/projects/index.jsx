import React from "react";
import ProjectCard from "../projectCard";
import { Container, BackgroundFade, Content } from "./styles";

import { projects } from "../../data/projectsdata";

const Projects = () => {
  return (
    <Container>
      <BackgroundFade />
      <h1>Projetos</h1>
      <p>Aqui estão alguns dos meus projetos práticos favoritos!</p>
      <Content>
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
