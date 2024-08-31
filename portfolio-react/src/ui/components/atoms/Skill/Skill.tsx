import React from "react";
import { Wrapper, Image } from "./Skill.styled";
import Text from "../../atoms/Text/Text";

type SkillProps = {
  imageSrc: string;
  altText: string;
  text: string;
};

const Skill: React.FC<SkillProps> = ({ imageSrc, altText, text }) => {
  return (
    <Wrapper>
      <Image src={imageSrc} alt={altText} />
      <Text as="p" align="center" size="medium">
        {text}
      </Text>
    </Wrapper>
  );
};

export default Skill;
