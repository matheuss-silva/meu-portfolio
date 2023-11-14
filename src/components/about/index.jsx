import React from "react";
import { Container, Content, ProfileImage, IconContainer, AboutTextContainer, AboutText } from "./styles";


const profileImageLink = "https://res.cloudinary.com/dho0yyj47/image/upload/v1698550734/Untitled-1_pxgs3l.png";

const About = () => {
  const documentLink = "https://drive.google.com/file/d/1ioDJ2uOj7B0X1h8MYERNHq7nann0Ydoe/view?usp=sharing";
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
            Olá! Sou Matheus Silva, desenvolvedor fullstack de 21 anos, atualmente cursando 
            Engenharia de Software. Esta formação tem enriquecido ainda mais meu conhecimento 
            técnico.
            </AboutText>
            <AboutText>
            Trabalhei em vários projetos como freelancer, o que aprimorou minha versatilidade 
            e habilidade no mundo fullstack. Essas experiências me capacitaram a desenvolver 
            soluções inovadoras para variados desafios.
            </AboutText>
            <AboutText>
            Em um mundo tecnológico em constante evolução, valorizo a aprendizagem contínua. 
            Estou pronto para colaborar com seu projeto.
            </AboutText>
          </AboutTextContainer>
          <IconContainer>
            <div>
              {/* Botão para baixar o CV */}
              <button onClick={handleOpenClick}>Baixar CV</button>
            </div>
          </IconContainer>
        </div>
      </Content>
    </Container>
  );
};

export default About;
