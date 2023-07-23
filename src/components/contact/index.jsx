import React from "react";
import {
  Container,
  Content,
  BackgroundFade,
  Localize,
  Links,
  LinksContainer,
  Footer,
} from "./styles";

import {
  RiWhatsappLine,
  RiMapPin2Line,
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinBoxLine,
} from "react-icons/ri";

const Contact = () => {
  // Funções de manipulação de eventos para abrir links em uma nova aba
  const handleGithub = () => {
    window.open("https://github.com/matheuss-silva", "_blank");
  };

  const handleInstagram = () => {
    window.open("https://www.instagram.com/__.matheus.s", "_blank");
  };

  const handleLinkedin = () => {
    window.open("https://www.linkedin.com/in/matheus-silva-471221277/", "_blank");
  };

  const handleWhatsApp = () => {
    const phoneNumber = "5563999564932";
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    // Componente principal do formulário de contato
    <>
      <Container>
        <BackgroundFade />
        <h1>Entre em Contato</h1>
        <p>Será um prazer receber uma mensagem sua. <br></br>
          Envie sua proposta, questionamentos ou ideias. <br></br>
          Farei o melhor para respondê-lo(a) o quanto antes!
        </p>
        <Content>
          <Localize>
            <RiMapPin2Line size={"27px"} />
            <p>Palmas - Tocantins</p>
          </Localize>
          <LinksContainer>
            {/* Links para as redes sociais */}
            <Links onClick={handleGithub}>
              <RiGithubLine size={"47px"} />
            </Links>
            <Links onClick={handleInstagram}>
              <RiInstagramLine size={"47px"} />
            </Links>
            <Links onClick={handleLinkedin}>
              <RiLinkedinBoxLine size={"47px"} />
            </Links>
            <Links onClick={handleWhatsApp}>
              <RiWhatsappLine size={"47px"} />
            </Links>
          </LinksContainer>
        </Content>
      </Container>
      <Footer>
        <p>Desenvolvido por Matheus Silva &copy; 2023</p>
      </Footer>
    </>
  );
};

export default Contact;
