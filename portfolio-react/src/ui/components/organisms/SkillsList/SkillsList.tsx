import React from "react";
import Skill from "../../atoms/Skill/Skill";
import { SkillsListContainer, SkillsListWrapper } from "./SkillsList.styled";
import Text from "../../atoms/Text/Text";

const SkillsList = () => {
  return (
    <SkillsListContainer data-testid="skills-list-container">
      <Text as="span" size="superLarge">
        Mis skills
      </Text>
      <SkillsListWrapper data-testid="skills-list-wrapper">
        <Skill
          imageSrc="src\assets\skills\html5-original-wordmark.svg"
          altText="HTML"
          text="HTML"
        />
        <Skill
          imageSrc="src\assets\skills\css3-original-wordmark.svg"
          altText="CSS"
          text="CSS"
        />
        <Skill
          imageSrc="src\assets\skills\javascript-original.svg"
          altText="JavaScript"
          text="JavaScript"
        />
        <Skill
          imageSrc="src\assets\skills\typescript-original.svg"
          altText="TypeScript"
          text="TypeScript"
        />
        <Skill
          imageSrc="src\assets\skills\angularjs-original.svg"
          altText="Angular"
          text="Angular"
        />
        <Skill
          imageSrc="src\assets\skills\react-original-wordmark.svg"
          altText="React"
          text="React"
        />
        <Skill
          imageSrc="src\assets\skills\nodejs-original.svg"
          altText="Node.js"
          text="Node.js"
        />
        <Skill
          imageSrc="src\assets\skills\sass-original.svg"
          altText="Sass"
          text="Sass"
        />
        <Skill
          imageSrc="src\assets\skills\java-original.svg"
          altText="Java"
          text="Java"
        />
        <Skill
          imageSrc="src/assets/skills/bootstrap-original.svg"
          altText="Bootstrap"
          text="Bootstrap"
        />
        <Skill
          imageSrc="src\assets\skills\tailwindcss-original.svg"
          altText="Tailwind"
          text="Tailwind"
        />
        <Skill
          imageSrc="src\assets\skills\mysql-original-wordmark.svg"
          altText="MySql"
          text="MySql"
        />
        <Skill
          imageSrc="src\assets\skills\docker-original.svg"
          altText="Docker"
          text="Docker"
        />
        <Skill
          imageSrc="src\assets\skills\git-original.svg"
          altText="Git"
          text="Git"
        />
        <Skill
          imageSrc="src\assets\skills\Adobe Inc. A.svg"
          altText="Paquete Adobe"
          text="Paquete Adobe"
        />
        <Skill
          imageSrc="src\assets\skills\figma-original.svg"
          altText="Figma"
          text="Figma"
        />
      </SkillsListWrapper>
    </SkillsListContainer>
  );
};

export default SkillsList;
