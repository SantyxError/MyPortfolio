import React from "react";
import Card, { CardProps } from "../../atoms/Card/Card";
import { ServicesContainer, Wrapper } from "./MyServicesList.styled";
import Title from "../../atoms/Title/Title";
import theme_pattern from "../../../../assets/theme_pattern.svg";

type MyServicesListProps = {
  services: CardProps[];
};

const MyServicesList: React.FC<MyServicesListProps> = ({ services = [] }) => {
  return (
    <Wrapper id="services">
      <Title text="Mis Servicios" image={theme_pattern} />
      <ServicesContainer>
        {services.map((service, index) => (
          <Card
            key={index}
            number={service.number}
            name={service.name}
            description={service.description}
          />
        ))}
      </ServicesContainer>
    </Wrapper>
  );
};

export default MyServicesList;
