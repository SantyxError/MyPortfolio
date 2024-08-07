import React from "react";
import Title from "../../atoms/Title/Title";
import { Wrapper } from "../About/About.styled";
import theme_pattern from "../../../../assets/theme_pattern.svg";
import mail_icon from "../../../../assets/mail_icon.svg";
import location_icon from "../../../../assets/location_icon.svg";
import call_icon from "../../../../assets/call_icon.svg";
import Subtitle from "../../atoms/Subtitles/Subtitle";
import { Button } from "../../atoms/Button/Button";
import {
  ContactSection,
  ContactLeft,
  ContactLeftParagraph,
  ContactDetails,
  ContactDetail,
  ContactRight,
  ContactHtmlForm,
  ContactDetailImg,
  ContactHtmlFormInput,
  ContactHtmlFormTextArea,
} from "./Contact.styled";

function Contact() {
  return (
    <Wrapper id="contact">
      <Title text="Estamos en contacto" image={theme_pattern} />
      <ContactSection>
        <ContactLeft>
          <Subtitle text={"¡Hablemos!"} />
          <ContactLeftParagraph>
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </ContactLeftParagraph>
          <ContactDetails>
            <ContactDetail>
              <ContactDetailImg src={mail_icon} alt="Email Icon" />
              <p>email@gmail.com</p>
            </ContactDetail>
            <ContactDetail>
              <ContactDetailImg src={call_icon} alt="Call Icon" />
              <p>+1234-56-78</p>
            </ContactDetail>
            <ContactDetail>
              <ContactDetailImg src={location_icon} alt="Location Icon" />
              <p>Valencia, España</p>
            </ContactDetail>
          </ContactDetails>
        </ContactLeft>
        <ContactRight>
          <ContactHtmlForm>Tu Nombre</ContactHtmlForm>
          <ContactHtmlFormInput
            type="text"
            placeholder="Introduce tu nombre"
            name="name"
          />
          <ContactHtmlForm>Tu Email</ContactHtmlForm>
          <ContactHtmlFormInput
            type="text"
            placeholder="Introduce tu email"
            name="email"
          />
          <ContactHtmlForm>Escribe tu mensaje aquí</ContactHtmlForm>
          <ContactHtmlFormTextArea
            name="messaje"
            rows={8}
            placeholder="Introduce tu mensaje"
          />
          <Button variant="primary">Enviar mensaje</Button>
        </ContactRight>
      </ContactSection>
    </Wrapper>
  );
}

export default Contact;
