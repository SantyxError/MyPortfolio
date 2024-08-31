import React from "react";
import Skill from "../../atoms/Skill/Skill";
import { Container, Wrapper } from "./SkillsList.styled";
import Text from "../../atoms/Text/Text";

const SkillsList = () => {
  const skills = [
    {
      imageSrc: "src/assets/skills/html5-original-wordmark.svg",
      altText: "HTML",
      text: "HTML",
    },
    {
      imageSrc: "src/assets/skills/css3-original-wordmark.svg",
      altText: "CSS",
      text: "CSS",
    },
    {
      imageSrc: "src/assets/skills/javascript-original.svg",
      altText: "JavaScript",
      text: "JavaScript",
    },
    {
      imageSrc: "src/assets/skills/typescript-original.svg",
      altText: "TypeScript",
      text: "TypeScript",
    },
    {
      imageSrc: "src/assets/skills/angularjs-original.svg",
      altText: "Angular",
      text: "Angular",
    },
    {
      imageSrc: "src/assets/skills/react-original-wordmark.svg",
      altText: "React",
      text: "React",
    },
    {
      imageSrc: "src/assets/skills/nodejs-original.svg",
      altText: "Node.js",
      text: "Node.js",
    },
    {
      imageSrc: "src/assets/skills/sass-original.svg",
      altText: "Sass",
      text: "Sass",
    },
    {
      imageSrc: "src/assets/skills/java-original.svg",
      altText: "Java",
      text: "Java",
    },
    {
      imageSrc: "src/assets/skills/bootstrap-original.svg",
      altText: "Bootstrap",
      text: "Bootstrap",
    },
    {
      imageSrc: "src/assets/skills/tailwindcss-original.svg",
      altText: "Tailwind",
      text: "Tailwind",
    },
    {
      imageSrc: "src/assets/skills/mysql-original-wordmark.svg",
      altText: "MySql",
      text: "MySql",
    },
    {
      imageSrc: "src/assets/skills/docker-original.svg",
      altText: "Docker",
      text: "Docker",
    },
    {
      imageSrc: "src/assets/skills/git-original.svg",
      altText: "Git",
      text: "Git",
    },
    {
      imageSrc: "src/assets/skills/Adobe Inc. A.svg",
      altText: "Paquete Adobe",
      text: "Paquete Adobe",
    },
    {
      imageSrc: "src/assets/skills/figma-original.svg",
      altText: "Figma",
      text: "Figma",
    },
  ];

  return (
    <Container>
      <Text as="span" size="superLarge">
        Mis skills
      </Text>
      <Wrapper>
        {skills.map((skill, index) => (
          <Skill
            key={index}
            imageSrc={skill.imageSrc}
            altText={skill.altText}
            text={skill.text}
          />
        ))}
      </Wrapper>
    </Container>
  );
};

export default SkillsList;
