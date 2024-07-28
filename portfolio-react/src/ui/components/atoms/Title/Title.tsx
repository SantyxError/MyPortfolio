import React from "react";
import { TitleImg, TitleText, Wrapper } from "./Title.styled";

interface TitleProps {
  text: string;
  image: string;
}

const Title: React.FC<TitleProps> = ({ text, image }) => {
  return (
    <Wrapper>
      <TitleText>{text}</TitleText>
      <TitleImg src={image} alt="Title image" />
    </Wrapper>
  );
};

export default Title;
