import React from "react";
import Card, { CardProps } from "../../atoms/Card/Card";
import { Container, Wrapper } from "./MyServicesList.styled";
import Text from "../../atoms/Text/Text";
import theme_pattern from "../../../../assets/theme_pattern.svg";

type MyServicesListProps = {
  services: CardProps[];
};

const MyServicesList: React.FC<MyServicesListProps> = ({ services = [] }) => {
  return (
    <Wrapper id="services">
      <Text as="h1" image={theme_pattern}>
        Mis Servicios
      </Text>
      <Container>
        {services.map((service, index) => (
          <Card
            key={index}
            number={service.number}
            name={service.name}
            description={service.description}
          />
        ))}
      </Container>
    </Wrapper>
  );
};

export default MyServicesList;
