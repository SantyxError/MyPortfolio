import React from "react";
import {
  ServicesFormat,
  ServicesFormatH3,
  ServicesFormatH2,
  ServicesFormatP,
  ServicesReadmore,
  ServicesReadmoreText,
  ServicesReadmoreImg,
} from "./MyService.styled";
import arrow_icon from "../../../../assets/arrow_icon.svg";

export interface MyServiceProps {
  s_no: string;
  s_name: string;
  s_desc: string;
}

const MyService: React.FC<MyServiceProps> = ({ s_no, s_name, s_desc }) => {
  return (
    <ServicesFormat>
      <ServicesFormatH3>{s_no}</ServicesFormatH3>
      <ServicesFormatH2>{s_name}</ServicesFormatH2>
      <ServicesFormatP>{s_desc}</ServicesFormatP>
      <ServicesReadmore>
        <ServicesReadmoreText>Leer más</ServicesReadmoreText>
        <ServicesReadmoreImg src={arrow_icon} alt="Leer más" />
      </ServicesReadmore>
    </ServicesFormat>
  );
};

export default MyService;
