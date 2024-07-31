// src/ui/components/atoms/MyServicesList/MyServicesList.tsx

import React from "react";
import Title from "../../atoms/Title/Title";
import theme_pattern from "../../../../assets/theme_pattern.svg";
import Services_Data from "../../../../assets/services_data";
import { Wrapper, ServicesContainer } from "./MyServicesList.styled";
import MyService from "../../atoms/MyService/MyService";

const MyServicesList = () => {
  return (
    <Wrapper>
      <Title text={"Mis Servicios"} image={theme_pattern} />
      <ServicesContainer>
        {Services_Data.map((service, index) => (
          <MyService key={index} service={service} />
        ))}
      </ServicesContainer>
    </Wrapper>
  );
};

export default MyServicesList;
