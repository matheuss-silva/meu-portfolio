import React from "react";
import { Container, Content, ProfileImage, IconContainer, AboutTextContainer, AboutText } from "./styles";


const profileImageLink = "https://res.cloudinary.com/dho0yyj47/image/upload/v1698550734/Untitled-1_pxgs3l.png";


const About = () => {
  const documentLink = "https://drive.google.com/file/d/1GifS5EAmKabXyu83NFJb06l-Murt62_g/view?usp=sharing";
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
              formado em Engenharia de Software pela Ulbra Palmas. Possuo experiência
              no desenvolvimento de aplicativos Android e iOS utilizando Flutter e Dart,
              sempre com foco em qualidade, usabilidade e boas práticas de código.
            </AboutText>
            <AboutText>
              Atuo no desenvolvimento de soluções mobile, incluindo criação de
              funcionalidades, aprimoramento de recursos existentes, integração de
              APIs REST e manutenção de aplicações em produção. Também possuo
              conhecimentos adicionais em React Native, Kotlin, React.js e bancos
              de dados relacionais e não relacionais.
            </AboutText>
            <AboutText>
              Acredito na aprendizagem contínua e na colaboração em equipe para
              entregar resultados consistentes. Estou preparado para contribuir em
              projetos desafiadores e gerar valor por meio da tecnologia.
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
