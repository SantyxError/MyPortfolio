import React from "react";
import { Readmore, ReadmoreImg, Wrapper } from "./Card.styled";
import arrow_icon from "../../../../assets/arrow_icon.svg";
import Text from "../Text/Text";

export type CardProps = {
  number: string;
  name: string;
  description: string;
};

const Card: React.FC<CardProps> = ({ number, name, description }) => {
  return (
    <Wrapper>
      <Text as="h3" align="center">
        {number}
      </Text>
      <Text as="h2" align="center">
        {name}
      </Text>
      <Text as="p" size="large" align="center">
        {description}
      </Text>
      <Readmore>
        <Text as="span" size="medium" color="white">
          Leer más
        </Text>
        <ReadmoreImg src={arrow_icon} alt="Leer más" />
      </Readmore>
    </Wrapper>
  );
};

export default Card;
