import React from "react";
import {
  BiLogoFlutter,
} from "react-icons/bi";
import {
  BsFiletypeSql,
} from "react-icons/bs";
import {
  DiAws,
  DiFirebase,
  DiJavascript1,
  DiMongodb,
  DiMysql,
  DiPython,
  DiReact,
} from "react-icons/di";
import {
  SiDart,
} from "react-icons/si";
import {
  Container,
  BackgroundFade,
  Content,
  SkillsGrid,
  SkillCard,
} from "./styles";

const skills = [
  { name: "Flutter", color: "#47c5fb", Icon: BiLogoFlutter },
  { name: "Dart", color: "#2bb0ed", Icon: SiDart },
  { name: "JavaScript", color: "#f7df1e", Icon: DiJavascript1 },
  { name: "React", color: "#61dafb", Icon: DiReact },
  { name: "Python", color: "#4b8bbe", Icon: DiPython },
  { name: "Firebase", color: "#ffca28", Icon: DiFirebase },
  { name: "MySQL", color: "#4f8cc9", Icon: DiMysql },
  { name: "MongoDB", color: "#47a248", Icon: DiMongodb },
  { name: "AWS", color: "#ff9900", Icon: DiAws },
  { name: "SQL", color: "#89d0ff", Icon: BsFiletypeSql },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Skills = () => {
  return (
    <Container>
      <BackgroundFade />

      <h1>Habilidades</h1>
      <p>Tecnologias e linguagens que uso para criar interfaces e produtos digitais.</p>

      <Content
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <SkillsGrid>
          {skills.map(({ name, color, Icon }) => (
            <SkillCard key={name} variants={cardVariants} $accent={color}>
              <div className="icon-wrapper">
                <Icon />
              </div>
              <strong>{name}</strong>
            </SkillCard>
          ))}
        </SkillsGrid>
      </Content>
    </Container>
  );
};

export default Skills;
