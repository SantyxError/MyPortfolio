import React from "react";
import { SkillWrapper, SkillImageContainer, SkillImage } from "./Skill.styled";
import Text from "../../atoms/Text/Text";

type SkillProps = {
  imageSrc: string;
  altText: string;
  text: string;
};

const Skill: React.FC<SkillProps> = ({ imageSrc, altText, text }) => {
  return (
    <SkillWrapper data-testid="skill-wrapper">
      <SkillImageContainer data-testid="skill-image-container">
        <SkillImage src={imageSrc} alt={altText} data-testid="skill-image" />
      </SkillImageContainer>
      <Text as="p" align="center" size="large">
        {text}
      </Text>
    </SkillWrapper>
  );
};

export default Skill;
