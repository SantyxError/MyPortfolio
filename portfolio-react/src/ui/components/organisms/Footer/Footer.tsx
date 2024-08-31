import React from "react";
import {
  Divider,
  Bottom,
  LegalItems,
  Top,
  Description,
  Wrapper,
} from "./Footer.styled";
import Text from "../../atoms/Text/Text";
import footer_logo from "../../../../assets/logo_portfolio.svg";

const Footer: React.FC = () => {
  const legalItems = [
    "Terminos de servicio",
    "Política de privacidad",
    "Conecta conmigo",
  ];

  return (
    <Wrapper>
      <Top>
        <Description>
          <img src={footer_logo} alt="Footer Logo" />
          <Text as="p" align="left" size="medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            molestie dui turpis, ac malesuada mauris convallis ut.
          </Text>
        </Description>
      </Top>
      <Divider />
      <Bottom>
        <Text as="p" align="left" size="medium">
          © {new Date().getFullYear()} Santiago Benito. Todos los derechos
          reservados.
        </Text>
        <LegalItems>
          {legalItems.map((item, index) => (
            <li key={index}>
              <Text as="span" align="left" size="medium" color="white">
                {item}
              </Text>
            </li>
          ))}
        </LegalItems>
      </Bottom>
    </Wrapper>
  );
};

export default Footer;
