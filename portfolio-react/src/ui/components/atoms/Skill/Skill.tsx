import React from "react";
import { SkillWrapper, SkillImage } from "./Skill.styled";
import Text from "../../atoms/Text/Text";

type SkillProps = {
  imageSrc: string;
  altText: string;
  text: string;
};

const Skill: React.FC<SkillProps> = ({ imageSrc, altText, text }) => {
  return (
    <SkillWrapper data-testid="skill-wrapper">
      <SkillImage src={imageSrc} alt={altText} data-testid="skill-image" />
      <Text as="p" align="center" size="medium">
        {text}
      </Text>
    </SkillWrapper>
  );
};

export default Skill;
