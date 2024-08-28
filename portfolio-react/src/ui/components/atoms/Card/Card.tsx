import React from "react";
import {
  ServicesFormat,
  ServicesReadmore,
  ServicesReadmoreImg,
} from "./Card.styled";
import arrow_icon from "../../../../assets/arrow_icon.svg";
import Text from "../Text/Text";

export type CardProps = {
  number: string;
  name: string;
  description: string;
};

const Card: React.FC<CardProps> = ({ number, name, description }) => {
  return (
    <ServicesFormat>
      <Text as="h3" align="center">
        {number}
      </Text>
      <Text as="h2" align="center">
        {name}
      </Text>
      <Text as="p" size="large" align="center">
        {description}
      </Text>
      <ServicesReadmore>
        <Text as="span" size="medium" color="white">
          Leer más
        </Text>
        <ServicesReadmoreImg src={arrow_icon} alt="Leer más" />
      </ServicesReadmore>
    </ServicesFormat>
  );
};

export default Card;
