import React from "react";
import { Container, Content, ProfileImage, IconContainer, AboutTextContainer, AboutText } from "./styles";


const profileImageLink = "https://res.cloudinary.com/dho0yyj47/image/upload/v1698550734/Untitled-1_pxgs3l.png";


const About = () => {
  const documentLink = "https://docs.google.com/document/d/1qjamWzYbee0-jj6SiVNMKZ_iwl4LeKrL6AgZIYCLAVA/edit?usp=sharing";
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
              Sou Desenvolvedor Mobile com foco em Flutter, atuando no desenvolvimento de aplicações Android e iOS com ênfase em performance, arquitetura e qualidade de código. Graduado em Engenharia de Software, construo interfaces modernas, funcionais e responsivas, aplicando princípios de escalabilidade e boas práticas de engenharia.
            </AboutText>
            <AboutText>
              Atualmente atuo como Desenvolvedor Front-end, desenvolvendo e mantendo aplicações mobile publicadas na Play Store e App Store, além de projetos front-end web utilizando Vue.js. Trabalho na evolução contínua dos sistemas, com foco em estabilidade, organização arquitetural e melhoria do fluxo de entrega.
            </AboutText>
            <AboutText>
              Possuo experiência sólida com Flutter e Dart, aplicando Clean Architecture, integração com APIs REST, Firebase e autenticação segura (JWT e OAuth). No front-end web, atuo na construção de interfaces reativas e componentizadas com Vue.js. Também trabalho com gerenciamento de estado (Provider e conhecimentos em BLoC), versionamento com Git, Code Review e metodologias ágeis (Scrum/Kanban), além de práticas básicas de CI/CD para automação de builds.
            </AboutText>
            <AboutText>
              Estou aberto a novas oportunidades em Desenvolvimento Front-end e Mobile, especialmente em projetos que priorizem qualidade técnica, arquitetura bem estruturada e experiência do usuário.
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
