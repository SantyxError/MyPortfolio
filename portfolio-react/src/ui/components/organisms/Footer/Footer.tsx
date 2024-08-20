import React from "react";
import {
  Divider,
  FooterBottom,
  FooterBottomRight,
  FooterEmail,
  FooterEmailInput,
  FooterEmailInputImage,
  FooterTop,
  FooterTopLeft,
  FooterTopLeftImg,
  FooterTopRight,
  Wrapper,
} from "./Footer.styled";
import Text from "../../atoms/Text/Text";
import footer_logo from "../../../../assets/logo_portfolio.svg";
import user_icon from "../../../../assets/user_icon.svg";
import { Button } from "../../atoms/Button/Button.styled";

type FooterProps = {
  connectButtonText: string;
};

const Footer: React.FC<FooterProps> = ({ connectButtonText }) => {
  return (
    <Wrapper>
      <FooterTop>
        <FooterTopLeft>
          <FooterTopLeftImg src={footer_logo} alt="Footer Logo" />
          <Text as="p" align="left" size="medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            molestie dui turpis, ac malesuada mauris convallis ut.
          </Text>
        </FooterTopLeft>
        <FooterTopRight>
          <FooterEmail>
            <FooterEmailInputImage src={user_icon} alt="User Icon" />
            <FooterEmailInput type="email" placeholder="Inserta tu email" />
          </FooterEmail>
          <Button
            variant="primary"
            onClick={() => console.log("Connect clicked")}>
            {connectButtonText}
          </Button>
        </FooterTopRight>
      </FooterTop>
      <Divider />
      <FooterBottom>
        <Text as="p" align="left" size="medium">
          © {new Date().getFullYear()} Santiago Benito. Todos los derechos
          reservados.
        </Text>
        <FooterBottomRight>
          <Text as="p" align="left" size="medium">
            Terminos de servicio
          </Text>
          <Text as="p" align="left" size="medium">
            Política de privacidad
          </Text>
          <Text as="p" align="left" size="medium">
            Conecta conmigo
          </Text>
        </FooterBottomRight>
      </FooterBottom>
    </Wrapper>
  );
};

export default Footer;
