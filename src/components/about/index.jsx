import React from "react";
import { Container, Content, ProfileImage, IconContainer, AboutTextContainer, AboutText } from "./styles";


const profileImageLink = "https://res.cloudinary.com/dho0yyj47/image/upload/v1698550734/Untitled-1_pxgs3l.png";


const About = () => {
  const documentLink = "https://drive.google.com/file/d/1xU8itJugRNhpysGWlLdrqZWEjAWVovHd/view?usp=sharing";
  const handleOpenClick = () => {
  window.open(documentLink, "_blank");
  };

  return (
    <Container>
      <h1>Sobre mim</h1>
      <Content>
        <ProfileImage src={profileImageLink} alt="Minha Imagem" />
        <div>
          <AboutTextContainer>
            <AboutText>
            Olá! Meu nome é Matheus Silva, sou um desenvolvedor fullstack
            de 22 anos estou me formando em Engenharia de Software pela Ulbra Palmas. 
            Esta formação tem enriquecido ainda mais meu conhecimento técnico.
            </AboutText>
            <AboutText>
            Trabalhei em vários projetos como freelancer, o que aprimorou minha versatilidade e 
            habilidade no mundo fullstack. Essas experiências capacita-me a desenvolver soluções
            inovadoras para variados desafios.
            </AboutText>
            <AboutText>
            Em um mundo tecnológico em constante evolução, valorizo a aprendizagem contínua. 
            Estou pronto para colaborar com seu projeto!
            </AboutText>
          </AboutTextContainer>
          <IconContainer>
            <div>
              {/* Botão para baixar o CV */}
              <button onClick={handleOpenClick}>Baixar Currículo</button>
            </div>
          </IconContainer>
        </div>
      </Content>
    </Container>
  );
};

export default About;
