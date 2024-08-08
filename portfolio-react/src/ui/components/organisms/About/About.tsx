import React from "react";
import {
  AboutLeft,
  AboutLeftImg,
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
    <Wrapper id="about">
      <Title text="Sobre mí" image={theme_pattern} />
      <AboutSections>
        <AboutLeft>
          <AboutLeftImg src={profile_img} alt="Profile Image" />
        </AboutLeft>
        <AboutRight>
          <AboutParagraph>
            <Paragraph text="Donec ullamcorper mollis aliquet. Integer venenatis ligula varius, viverra urna et, scelerisque erat. Nulla laoreet molestie egestas. Integer consectetur tellus ut odio bibendum, et congue arcu convallis. Sed at imperdiet sem, et tempus sem. Praesent id metus velit. In vestibulum nisi nec aliquet pretium. Fusce mollis lorem sit amet orci tempor, auctor tempus tortor lobortis. Ut justo purus, interdum nec molestie sit amet, luctus et odio. Quisque tempor feugiat mauris in hendrerit. Nunc auctor convallis metus, ut posuere ex lobortis facilisis." />
            <Paragraph text="Vivamus ut aliquam dolor, at elementum ex. Proin fermentum lacus quis nunc venenatis, sollicitudin iaculis ipsum ultrices. Curabitur ac velit mauris. Maecenas sed orci non velit dictum ultrices non eget lorem. Etiam malesuada risus eu mauris porttitor, eget sodales urna sodales. Etiam ultrices magna sit amet consequat semper. Aliquam fermentum odio eget enim hendrerit, quis aliquam sapien finibus." />
           </AboutParagraph>
        </AboutRight>
      </AboutSections>
      <SkillsList />
    </Wrapper>
  );
};

export default About;
