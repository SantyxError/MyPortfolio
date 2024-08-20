import React from "react";
import { TitleImg, TitleText, Wrapper } from "./Title.styled";
import Text from "../Text/Text";

type TitleProps = {
  text: string;
  image: string;
};

const Title: React.FC<TitleProps> = ({ text, image }) => {
  return (
    <Wrapper>
      {/*  <TitleText>{text}</TitleText> */}
      <Text as="h1">{text}</Text>
      <TitleImg src={image} alt="Title image" />
    </Wrapper>
  );
};

export default Title;
