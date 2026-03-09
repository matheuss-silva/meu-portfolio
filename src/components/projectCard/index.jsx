import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Container, Content, Info, Dest } from "./styles";
import { AiOutlineLink } from "react-icons/ai";

const ProjectCard = ({ title, image, link, desc, subtitle }) => {
  const [showDescription, setShowDescription] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Verifica se a tela é mobile no primeiro carregamento e no resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile(); // Check inicial
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const openNewTab = () => window.open(link, "_blank");

  // O texto fica visível se estiver hoverado OU se for mobile
  const isVisible = showDescription || isMobile;

  return (
    <motion.div
      whileHover={!isMobile ? { scale: 1.05 } : {}} // remove o zoom chato do mobile no toque
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      style={{ width: "100%", maxWidth: "480px" }}
    >
      <Container
        onClick={openNewTab}
        $imageSrc={image}
        onMouseEnter={() => setShowDescription(true)}
        onMouseLeave={() => setShowDescription(false)}
      >
        <Dest $active={isVisible}>
          {/* Tudo (conteúdo + rodapé) entra junto na animação */}
          <motion.div
            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{
              opacity: isVisible ? 1 : 0,
              y: isVisible ? 0 : 20,
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
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
