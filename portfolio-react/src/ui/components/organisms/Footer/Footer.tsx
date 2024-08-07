// src/ui/components/organisms/Footer/Footer.tsx
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
import footer_logo from "../../../../assets/footer_logo.svg";
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
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
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
          © {new Date().getFullYear()} Santiago Benito. All rights reserved.
        </FooterBottomLeft>
        <FooterBottomRight>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </FooterBottomRight>
      </FooterBottom>
    </Wrapper>
  );
};

export default Footer;
