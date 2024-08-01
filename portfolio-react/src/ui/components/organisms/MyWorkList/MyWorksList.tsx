import React from "react";
import Title from "../../atoms/Title/Title";
import theme_pattern from "../../../../assets/theme_pattern.svg";
import mywork_data from "../../../../assets/mywork_data";
import arrow_icon from "../../../../assets/arrow_icon.svg";
import {
  Wrapper,
  MyWorkContainer,
  MyWorkShowMore,
  MyWorkContainerImg,
} from "./MyWorksList.styled";

const MyWorksList = () => {
  return (
    <Wrapper>
      <Title text="Mis últimos trabajos" image={theme_pattern} />
      <MyWorkContainer>
        {mywork_data.map((work, index) => {
          return <MyWorkContainerImg key={index} src={work.w_img} alt=" " />;
        })}
      </MyWorkContainer>
      <MyWorkShowMore>
          <p>Mostrar más</p>
          <img src={arrow_icon} alt=""></img>
        </MyWorkShowMore>
    </Wrapper>
  );
};

export default MyWorksList;
