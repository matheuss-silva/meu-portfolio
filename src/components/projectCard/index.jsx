import React, { useState } from "react";
import { Container, Content, Info, Dest } from "./styles";

import { AiOutlineLink } from "react-icons/ai";

const ProjectCard = ({ title, image, link, desc, subtitle }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const openNewTab = () => {
    const url = link;
    window.open(url, "_blank");
  };

  return (
    <Container
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={openNewTab}
      $imageSrc={image}
    >
      <Dest className={`content1 ${isHovering ? "show" : ""}`}>
        <Content className={`content1 ${isHovering ? "show" : ""}`}>
          <h1>{title}</h1>
          <p>{desc}</p>
        </Content>
        <Info className={`content1 ${isHovering ? "show" : ""}`}>
          <AiOutlineLink title={link} className="icon" />
          <p className="techs">{subtitle}</p>
        </Info>
      </Dest>
    </Container>
  );
};

export default ProjectCard;
