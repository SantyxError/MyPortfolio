import React from "react";
import { Wrapper } from "./Title.styled";
import Text from "../Text/Text";

type TitleProps = {
  text: string;
  image: string;
};

const Title: React.FC<TitleProps> = ({ text, image }) => {
  return (
    <Wrapper>
      <Text as="h1" image={image}>
        {text}
      </Text>
    </Wrapper>
  );
};

export default Title;
