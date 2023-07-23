import React, { useState, useEffect } from "react";
import { Container, Content, Links } from "./styles";

import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiFillLinkedin,
} from "react-icons/ai";

const SocialLinks = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setVisible] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    let iscro = scrollPosition > 2200 ? true : false;

    setVisible(iscro);
  }, [scrollPosition]);

  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/matheus-silva-471221277/", "_blank");
  };

  const openGitHub = () => {
    window.open("https://github.com/matheuss-silva", "_blank");
  };

  const openInstagram = () => {
    window.open("https://www.instagram.com/__.matheus.s", "_blank");
  };

  return (
    <Container scrollVisible={isVisible}>
      <Content>
        <Links onClick={openGitHub}>
          <AiOutlineGithub size={"38px"} />
        </Links>
        <Links onClick={openInstagram}>
          <AiOutlineInstagram size={"38px"} />
        </Links>
        <Links onClick={openLinkedIn}>
          <AiFillLinkedin size={"38px"} />
        </Links>
      </Content>
    </Container>
  );
};

export default SocialLinks;
