import React from "react";
import Text from "../../atoms/Text/Text";
import theme_pattern from "../../../../assets/theme_pattern.svg";
import arrow_icon from "../../../../assets/arrow_icon.svg";
import { Wrapper, Container } from "./MyWorksList.styled";
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
      <Text as="h1" image={theme_pattern}>
        Mis últimos trabajos
      </Text>
      <Container>
        {myWorkData.map((work, index) => (
          <img key={index} src={work.workImg} alt="Work Image" />
        ))}
      </Container>
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
