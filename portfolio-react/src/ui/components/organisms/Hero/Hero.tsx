import React from "react";
import profile_img from "../../../../assets/profileImage.jpg";
import {
  HeroAction,
  HeroH1,
  HeroImage,
  HeroP,
  HeroSpan,
  Wrapper,
} from "./Hero.styled";
import { Button } from "../../atoms/Button/Button.styled";

interface HeroProps {
  connectText: string;
  resumeText: string;
}

const Hero: React.FC<HeroProps> = ({ connectText, resumeText }) => {
  return (
    <Wrapper id="home">
      <HeroImage src={profile_img} alt="Profile Image" />
      <HeroH1>
        Soy<HeroSpan> Santiago Benito,</HeroSpan> desarrollador y diseñador
        gráfico.
      </HeroH1>
      <HeroP>
        Mi día a día gira en torno a Java y React, especializándome en
        desarrollo front-end/back-end. Siempre estoy emocionado por enfrentar
        nuevos desafíos y encontrar formas creativas de abordarlos.
      </HeroP>
      <HeroAction>
        <Button
          variant="primary"
          onClick={() => console.log("Connect clicked")}>
          {connectText}
        </Button>
        <Button
          variant="secondary"
          onClick={() => console.log("Resume clicked")}>
          {resumeText}
        </Button>
      </HeroAction>
    </Wrapper>
  );
};

export default Hero;
