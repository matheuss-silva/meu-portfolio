import React, { useRef, useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import ProjectCard from "../projectCard";
import { 
  Container, 
  BackgroundFade, 
  Content, 
  ButtonContainer, 
  StyledButton,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalGrid
} from "./styles";
import { projects } from "../../data/projectsdata";

const Projects = () => {
  const contentRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const displayedProjects = projects.slice(0, 4);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    // Cleanup na desmontagem do componente
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    <Container>
      <BackgroundFade />
      <h1>Projetos</h1>
      <p>Aqui estão alguns dos meus projetos práticos favoritos!</p>
      
      <Content ref={contentRef}>
        {displayedProjects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            image={project.image}
            link={project.link}
            desc={project.description}
            subtitle={project.subtitle}
          />
        ))}
      </Content>
      
      {projects.length > 4 && (
        <ButtonContainer>
          <StyledButton onClick={() => setIsModalOpen(true)}>
            Ver todos os projetos
          </StyledButton>
        </ButtonContainer>
      )}

      {isModalOpen && (
        <ModalOverlay onClick={() => setIsModalOpen(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <h2>Todos os Projetos</h2>
              <ModalCloseButton onClick={() => setIsModalOpen(false)}>
                <AiOutlineClose size={24} />
              </ModalCloseButton>
            </ModalHeader>
            <ModalGrid>
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  image={project.image}
                  link={project.link}
                  desc={project.description}
                  subtitle={project.subtitle}
                />
              ))}
            </ModalGrid>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default Projects;
