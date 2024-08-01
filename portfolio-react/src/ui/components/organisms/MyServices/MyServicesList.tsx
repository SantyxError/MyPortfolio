import React from "react";
import MyService, { MyServiceProps } from "../../atoms/MyService/MyService";
import { ServicesContainer, Wrapper } from "./MyServicesList.styled";

interface MyServicesListProps {
  services: MyServiceProps[];
}

const MyServicesList: React.FC<MyServicesListProps> = ({ services = [] }) => {
  return (
    <Wrapper>
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
