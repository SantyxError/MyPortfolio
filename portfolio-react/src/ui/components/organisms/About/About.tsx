import React from "react";
import {
  AboutLeftImg,
  AboutParagraph,
  AboutRight,
  AboutSections,
  Wrapper,
} from "./About.styled";
import profile_img from "../../../../assets/yo_profile.jpg";
import SkillsList from "../SkillsList/SkillsList";
import Text from "../../atoms/Text/Text";
import theme_pattern from "../../../../assets/theme_pattern.svg";
import Title from "../../atoms/Title/Title";

const About = () => {
  return (
    <Wrapper id="about">
      <Title text="Sobre mí" image={theme_pattern}></Title>
      <AboutSections>
        <AboutLeftImg src={profile_img} alt="Profile Image" />
        <AboutRight>
          <AboutParagraph>
            <Text as="p" size="large">
              Soy desarrollador web con sólida experiencia en la creación de
              soluciones digitales innovadoras. me dedico a transformar ideas en
              experiencias web funcionales y atractivas. Mi enfoque se centra en
              el desarrollo front-end, donde utilizo tecnologías como HTML, CSS,
              JavaScript y React para crear interfaces intuitivas y visualmente
              impactantes. Sin embargo, mi versatilidad no termina ahí, también
              cuento con conocimientos en diseño gráfico, lo que me permite
              abordar proyectos desde una perspectiva integral, cuidando cada
              detalle estético y funcional.
            </Text>
            <Text as="p" size="large">
              He trabajado en proyectos de diversos sectores, desde pequeños
              negocios hasta grandes empresas, y he aprendido a adaptarme a las
              necesidades de cada cliente, asegurando que cada sitio web no solo
              cumpla con los estándares técnicos, sino que también refleje la
              identidad y visión de la marca. Mi objetivo es siempre crear
              productos que no solo sean funcionales, sino que también ofrezcan
              una experiencia de usuario excepcional. Mi enfoque colaborativo me
              ha permitido trabajar eficientemente con otros diseñadores,
              desarrolladores y profesionales de marketing, asegurando que el
              resultado final sea siempre de la más alta calidad.
            </Text>

            <Text as="p" size="large">
              Si estás buscando a alguien que pueda llevar tu proyecto web al
              siguiente nivel, ya sea desde la concepción visual hasta el
              desarrollo completo, ¡estaré encantado de ayudarte!
            </Text>
          </AboutParagraph>
        </AboutRight>
      </AboutSections>
      <SkillsList />
    </Wrapper>
  );
};

export default About;
