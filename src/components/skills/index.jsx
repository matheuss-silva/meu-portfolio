import React from "react";
import { Container, BackgroundFade, Content, SkillList } from "./styles";

// Importando os ícones das tecnologias e linguagens de programação
import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiFirebase,
  DiMysql,
  DiMongodb,
  DiAws,
} from "react-icons/di";

import {
  BiLogoFlutter,
} from "react-icons/bi";

import {
  SiDart,
} from "react-icons/si";

import {
  BsFiletypeSql,
} from "react-icons/bs";


const Skills = () => {
  return (
    <Container>
      <BackgroundFade />
      {/* Título da seção de habilidades */}
      <h1>Habilidades</h1>
      {/* Descrição da seção de habilidades */}
      <p>Algumas das tecnologias e Linguagens de Programação que eu uso!</p>
      <Content>
        <SkillList>
          {/* Ícones das tecnologias */}
          <BiLogoFlutter size={"90px"} />
          <SiDart size={"90px"} />
          <DiJavascript1 size={"90px"} />
          <DiReact size={"90px"} />
          <DiPython size={"90px"} />
        </SkillList>
        <SkillList>
          {/* Ícones das tecnologias */}
          <DiFirebase size={"90px"} />
          <DiMysql size={"90px"} />
          <DiMongodb size={"90px"} />
          <DiAws size={"90px"} />
          <BsFiletypeSql size={"90px"} />
        </SkillList>
      </Content>
    </Container>
  );
};

export default Skills;
