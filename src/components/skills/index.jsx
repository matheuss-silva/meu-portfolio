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
  <BiLogoFlutter />
  <SiDart />
  <DiJavascript1 />
  <DiReact />
  <DiPython />
</SkillList>
<SkillList>
  {/* Ícones das tecnologias */}
  <DiFirebase />
  <DiMysql />
  <DiMongodb />
  <DiAws />
  <BsFiletypeSql />
</SkillList>
      </Content>
    </Container>
  );
};

export default Skills;
