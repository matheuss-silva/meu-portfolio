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
              Olá! Meu nome é Matheus Silva, sou Desenvolvedor Front-End Júnior 
              formado em Engenharia de Software pela Ulbra Palmas. 
              Tenho experiência no desenvolvimento de aplicativos Android e iOS com 
              Flutter e Dart, sempre priorizando qualidade, usabilidade e boas práticas de código.
            </AboutText>
            <AboutText>
              Atuo no desenvolvimento de soluções mobile, englobando implementação de funcionalidades, 
              aprimoramento de recursos existentes, integração de APIs REST e manutenção de aplicações 
              em produção. Além disso, possuo conhecimentos em React Native, Kotlin, React.js e bancos 
              de dados relacionais e não relacionais.
            </AboutText>
            <AboutText>
              Acredito no aprendizado contínuo e na colaboração em equipe como pilares para entregar 
              resultados consistentes e gerar valor por meio da tecnologia.
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
