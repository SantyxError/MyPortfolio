import React from "react";
import Title from "../../atoms/Title/Title";
import theme_pattern from "../../../../assets/theme_pattern.svg";
import arrow_icon from "../../../../assets/arrow_icon.svg";
import {
  Wrapper,
  MyWorkContainer,
  MyWorkShowMore,
  MyWorkContainerImg,
} from "./MyWorksList.styled";

type WorkData = {
  id: number;
  title: string;
  w_img: string;
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
          <MyWorkContainerImg key={index} src={work.w_img} alt=" " />
        ))}
      </MyWorkContainer>
      <MyWorkShowMore>
        <p>Mostrar más</p>
        <img src={arrow_icon} alt=""></img>
      </MyWorkShowMore>
    </Wrapper>
  );
};

export default MyWorksList;
