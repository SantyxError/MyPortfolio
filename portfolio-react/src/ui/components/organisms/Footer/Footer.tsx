import React from "react";
import {
  FooterBottom,
  FooterBottomLeft,
  FooterBottomRight,
  FooterEmail,
  FooterEmailInput,
  FooterEmailInputImage,
  FooterTop,
  FooterTopLeft,
  FooterTopLeftImg,
  FooterTopLeftParagraph,
  FooterTopRight,
  StyledHr,
  Wrapper,
} from "./Footer.styled";
import footer_logo from "../../../../assets/logo_portfolio.svg";
import user_icon from "../../../../assets/user_icon.svg";
import { Button } from "../../atoms/Button/Button.styled";

interface FooterProps {
  connectText: string;
}

const Footer: React.FC<FooterProps> = ({ connectText }) => {
  return (
    <Wrapper>
      <FooterTop>
        <FooterTopLeft>
          <FooterTopLeftImg src={footer_logo} alt="Footer Logo" />
          <FooterTopLeftParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            molestie dui turpis, ac malesuada mauris convallis ut.
          </FooterTopLeftParagraph>
        </FooterTopLeft>
        <FooterTopRight>
          <FooterEmail>
            <FooterEmailInputImage src={user_icon} alt="User Icon" />
            <FooterEmailInput type="email" placeholder="Inserta tu email" />
          </FooterEmail>
          <Button
            variant="primary"
            onClick={() => console.log("Connect clicked")}>
            {connectText}
          </Button>
        </FooterTopRight>
      </FooterTop>
      <StyledHr />
      <FooterBottom>
        <FooterBottomLeft>
          © {new Date().getFullYear()} Santiago Benito. Todos los derechos
          reservados.
        </FooterBottomLeft>
        <FooterBottomRight>
          <p>Terminos de servicio</p>
          <p>Política de privacidad</p>
          <p>Conecta conmigo</p>
        </FooterBottomRight>
      </FooterBottom>
    </Wrapper>
  );
};

export default Footer;
