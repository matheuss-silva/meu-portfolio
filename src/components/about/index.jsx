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
              Olá! Sou o Matheus Silva, desenvolvedor fullstack de 21 anos, apaixonado 
              por tecnologia e atualmente cursando Engenharia de Software.
            </AboutText>
            <AboutText>
              Já tive experiências como freelancer me permitiram colaborar em projetos e desenvolver
              habilidades valiosas. Agora, meu foco é me tornar um especialista em desenvolvimento mobile.
            </AboutText>
            <AboutText>
              Acredito na aprendizagem contínua para acompanhar as tendências tecnológicas. Se procura
              um desenvolvedor fullstack comprometido e entusiasmado para contribuir com seu projeto, 
              estou aqui para ajudar.
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
