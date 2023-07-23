import React from "react";
import { Container, Content, ProfileImage, IconContainer, AboutTextContainer, AboutText } from "./styles";

const profileImageLink = "https://res.cloudinary.com/dho0yyj47/image/upload/v1689646531/perfil_vl7uhz.jpg";

const About = () => {
  const whatsappLink = "https://api.whatsapp.com/send?phone=seu-numero"; // Insira seu número de telefone com o código do país aqui

  const handleWhatsAppClick = () => {
    window.open(whatsappLink, "_blank");
  };

  return (
    <Container>
      <h1>Sobre mim</h1>
      <Content>
        <ProfileImage src={profileImageLink} alt="Minha Imagem" />
        <div>
          <AboutTextContainer>
            <AboutText>
            Olá! Sou Matheus Silva, desenvolvedor fullstack de 21 anos, apaixonado 
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
              <button onClick={handleWhatsAppClick}>Baixar CV</button>
            </div>
          </IconContainer>
        </div>
      </Content>
    </Container>
  );
};

export default About;
