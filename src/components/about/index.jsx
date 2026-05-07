import React from "react";
import {
  Container,
  Content,
  ProfileImage,
  IconContainer,
  AboutTextContainer,
  AboutText,
} from "./styles";

const profileImageLink =
  "https://res.cloudinary.com/dho0yyj47/image/upload/v1698550734/Untitled-1_pxgs3l.png";

const About = () => {
  const documentLink =
    "https://docs.google.com/document/d/1qjamWzYbee0-jj6SiVNMKZ_iwl4LeKrL6AgZIYCLAVA/edit?usp=sharing";
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
              Desenvolvedor Front-end com experiência em aplicações web e
              mobile, com foco em performance, arquitetura, qualidade de código
              e boas práticas de engenharia. Graduado em Engenharia de Software,
              atuo na criação de interfaces modernas, responsivas e escaláveis.
            </AboutText>

            <AboutText>
              Tenho experiência com Flutter, Dart, Vue.js, APIs REST, Firebase,
              autenticação JWT/OAuth, Git, Code Review, Scrum/Kanban e práticas
              básicas de CI/CD. Atualmente desenvolvo e mantenho aplicações
              mobile publicadas na Play Store e App Store, além de projetos
              front-end web.
            </AboutText>

            <AboutText>
              Estou aberto a oportunidades em Desenvolvimento Front-end e
              Mobile, especialmente em projetos que valorizem qualidade técnica,
              boa arquitetura e experiência do usuário.
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
