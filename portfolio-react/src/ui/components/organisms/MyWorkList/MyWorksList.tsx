import React from "react";
import Title from "../../atoms/Title/Title";
import theme_pattern from "../../../../assets/theme_pattern.svg";
import arrow_icon from "../../../../assets/arrow_icon.svg";
import {
  Wrapper,
  MyWorkContainer,
  MyWorkContainerImg,
} from "./MyWorksList.styled";
import { Button } from "../../atoms/Button/Button.styled";

type WorkData = {
  title: string;
  workImg: string;
};

type MyWorksListProps = {
  myWorkData: WorkData[];
};

const MyWorksList: React.FC<MyWorksListProps> = ({ myWorkData }) => {
  return (
    <Wrapper id="work">
      <Title text="Mis últimos trabajos" image={theme_pattern} />
      <MyWorkContainer>
        {myWorkData.map((work, index) => (
          <MyWorkContainerImg key={index} src={work.workImg} alt="Work Image" />
        ))}
      </MyWorkContainer>

      {/* Botón Mostrar Más */}
      <Button
        variant="terciary"
        onClick={() => console.log("Mostrar más clicked")}>
        Mostrar más
        <img src={arrow_icon} alt="Mostrar más" />
      </Button>
    </Wrapper>
  );
};

export default MyWorksList;
