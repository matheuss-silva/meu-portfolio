import React from "react";
import { Container } from "./styles";

import NavigationBar from "../../components/navigationBar";
import Header from "../../components/header";
import Projects from "../../components/projects";
import SocialLinks from "../../components/socialLinks";
import Skills from "../../components/skills";
import Separator from "../../components/separator";
import Contact from "../../components/contact";
import FlatTopButton from "../../components/flatTopButton";
import About from "../../components/about";

const HomePage = () => {
  return (
    <Container>
      <NavigationBar />
      <Header />
      <Separator />
      <Projects />
      <SocialLinks />
      <Separator />
      <About />
      <Skills />
      <Contact />
      <FlatTopButton />
    </Container>
  );
};

export default HomePage;
