import React, { useRef, useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
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
  ModalGrid,
  ProjectItem
} from "./styles";
import { projects } from "../../data/projectsdata";

const cardsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.1,
    },
  },
};

const cardItemVariants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

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
      
      <Content
        ref={contentRef}
        as={motion.div}
        variants={cardsContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {displayedProjects.map((project, index) => (
          <ProjectItem key={index} variants={cardItemVariants}>
            <ProjectCard
              title={project.title}
              image={project.image}
              link={project.link}
              desc={project.description}
              subtitle={project.subtitle}
            />
          </ProjectItem>
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
            <ModalGrid
              as={motion.div}
              variants={cardsContainerVariants}
              initial="hidden"
              animate="visible"
            >
              {projects.map((project, index) => (
                <ProjectItem key={index} variants={cardItemVariants}>
                  <ProjectCard
                    title={project.title}
                    image={project.image}
                    link={project.link}
                    desc={project.description}
                    subtitle={project.subtitle}
                  />
                </ProjectItem>
              ))}
            </ModalGrid>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default Projects;
