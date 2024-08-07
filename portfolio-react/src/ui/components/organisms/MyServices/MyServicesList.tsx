import React from "react";
import MyService, { MyServiceProps } from "../../atoms/MyService/MyService";
import { ServicesContainer, Wrapper } from "./MyServicesList.styled";
import Title from "../../atoms/Title/Title";
import theme_pattern from "../../../../assets/theme_pattern.svg";

interface MyServicesListProps {
  services: MyServiceProps[];
}

const MyServicesList: React.FC<MyServicesListProps> = ({ services = [] }) => {
  return (
    <Wrapper id="services">
      <Title text="Mis Servicios" image={theme_pattern} />
      <ServicesContainer>
        {services.map((service, index) => (
          <MyService
            key={index}
            s_no={service.s_no}
            s_name={service.s_name}
            s_desc={service.s_desc}
          />
        ))}
      </ServicesContainer>
    </Wrapper>
  );
};

export default MyServicesList;
