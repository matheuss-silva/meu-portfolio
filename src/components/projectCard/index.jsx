import React, { useState } from "react";
import { motion } from "framer-motion";
import { Container, Content, Info, Dest } from "./styles";
import { AiOutlineLink } from "react-icons/ai";

const ProjectCard = ({ title, image, link, desc, subtitle }) => {
  const [showDescription, setShowDescription] = useState(false);

  const openNewTab = () => window.open(link, "_blank");

  return (
    <motion.div
      whileHover={{ scale: 1.05 }} // zoom suave no card
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      style={{ width: "100%", maxWidth: "480px" }}
    >
      <Container
        onClick={openNewTab}
        $imageSrc={image}
        onMouseEnter={() => setShowDescription(true)}
        onMouseLeave={() => setShowDescription(false)}
      >
        <Dest>
          {/* Tudo (conteúdo + rodapé) entra junto na animação */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: showDescription ? 1 : 0, y: showDescription ? 0 : 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}
          >
            <Content>
              <h1>{title}</h1>
              <p>{desc}</p>
            </Content>

            <Info>
              <AiOutlineLink title={link} className="icon" />
              <p className="techs">{subtitle}</p>
            </Info>
          </motion.div>
        </Dest>
      </Container>
    </motion.div>
  );
};

export default ProjectCard;
