import React from "react";
import { Container, Content, ProfileImage, IconContainer, AboutTextContainer, AboutText } from "./styles";

// Link para a imagem do perfil
const profileImageLink = "https://res.cloudinary.com/dho0yyj47/image/upload/v1689646531/perfil_vl7uhz.jpg";

const About = () => {
  // Link para o documento CV (Curriculum Vitae)
  //const documentLink = "https://docs.google.com/document/d/11PzcGsNIw_wgFY4k2R_9xGqSv_Y2kFncXhPZh61lGNI/edit";

  // Função para abrir o link do CV em uma nova aba
  //const handleWhatsAppClick = () => {
  //  window.open(documentLink, "_blank");
  //};

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
              <button onClick={null}>Baixar CV</button>
            </div>
          </IconContainer>
        </div>
      </Content>
    </Container>
  );
};

export default About;
