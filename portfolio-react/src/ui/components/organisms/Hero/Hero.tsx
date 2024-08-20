import React from "react";
import profile_img from "../../../../assets/profileImage.jpg";
import {
  HeroAction,
  HeroImage,
  TextWrapper,
  TitleWrapper,
  Wrapper,
} from "./Hero.styled";
import { Button } from "../../atoms/Button/Button.styled";
import Text from "../../atoms/Text/Text";

type ctasTexts = {
  primaryCtaText: string;
  secondaryCtaText: string;
};

const Hero: React.FC<ctasTexts> = ({ primaryCtaText, secondaryCtaText }) => {
  return (
    <Wrapper id="home">
      <HeroImage src={profile_img} alt="Profile Image" />
      <TitleWrapper>
        <Text as="p" align="center" fontWeight="bold" size="superLarge">
          Soy {}
          <Text as="span" align="center" fontWeight="bold">
            Santiago Benito
          </Text>
          , desarrollador y diseñador gráfico.
        </Text>
      </TitleWrapper>
      <TextWrapper>
        <Text as="p" align="center" size="large">
          Mi día a día gira en torno a Java y React, especializándome en
          desarrollo front-end/back-end. Siempre estoy emocionado por enfrentar
          nuevos desafíos y encontrar formas creativas de abordarlos.
        </Text>
      </TextWrapper>
      <HeroAction>
        <Button
          variant="primary"
          onClick={() => console.log("Connect clicked")}>
          {primaryCtaText}
        </Button>
        <Button
          variant="secondary"
          onClick={() => console.log("Resume clicked")}>
          {secondaryCtaText}
        </Button>
      </HeroAction>
    </Wrapper>
  );
};

export default Hero;
