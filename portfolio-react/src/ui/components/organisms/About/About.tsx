import React from "react";
import {
  AboutLeft,
  AboutParagraph,
  AboutRight,
  AboutSections,
  Wrapper,
} from "./About.styled";
import profile_img from "../../../../assets/about_profile.svg";
import SkillsList from "../SkillsList/SkillsList";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Title from "../../atoms/Title/Title";
import theme_pattern from "../../../../assets/theme_pattern.svg";

const About = () => {
  return (
    <Wrapper>
      <Title text="Sobre mí" image={theme_pattern}/>
      <AboutSections>
        <AboutLeft>
          <img src={profile_img} alt="Profile Image" />
        </AboutLeft>
        <AboutRight>
          <AboutParagraph>
            <Paragraph text="Apasionado programador con un profundo amor por el mundo de la tecnología y la resolución creativa de problemas. He tenido el privilegio de trabajar en proyectos emocionantes y desafiantes que han moldeado mi habilidad y enfoque en esta industria en constante evolución." />
            <Paragraph text="Mi día a día gira en torno a Java o React y me especializo en desarrollo front-end/back-end. Siempre estoy emocionado por enfrentar nuevos desafíos y encontrar formas creativas de abordarlos." />
            <Paragraph text="Además de mis habilidades técnicas, creo firmemente en el poder del trabajo en equipo y la colaboración. He tenido la oportunidad de trabajar con equipos diversos y multidisciplinarios, donde he aprendido la importancia de la comunicación efectiva y el intercambio de conocimientos." />
            <Paragraph text="Mi pasión por mantenerme al tanto de las últimas tendencias y avances en la industria me impulsa a continuar aprendiendo y creciendo. Siempre estoy buscando nuevos desafíos que me permitan aplicar mis habilidades y aportar valor significativo." />
            <Paragraph text="Si algo de esto te interesa, ¡me encantaría conectar contigo!" />
          </AboutParagraph>
        </AboutRight>
      </AboutSections>
      <SkillsList />
    </Wrapper>
  );
};

export default About;
