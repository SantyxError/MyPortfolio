import React from 'react';
import { SkillWrapper, SkillImageContainer, SkillImage, SkillText } from './Skill.styled';

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
      <SkillText data-testid="skill-text">{text}</SkillText>
    </SkillWrapper>
  );
};

export default Skill;
