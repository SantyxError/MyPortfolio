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

const Contact: React.FC = () => {
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "29c6498e-dd0d-40d1-b6e4-2b256a75a7bd");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        alert("El mensaje se ha enviado con éxito");
      } else {
        alert("Error al enviar el mensaje");
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

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
        <ContactRight onSubmit={onSubmit}>
          <ContactHtmlForm>Tu Nombre</ContactHtmlForm>
          <ContactHtmlFormInput
            type="text"
            placeholder="Introduce tu nombre"
            name="name"
            required
          />
          <ContactHtmlForm>Tu Email</ContactHtmlForm>
          <ContactHtmlFormInput
            type="email"
            placeholder="Introduce tu email"
            name="email"
            required
          />
          <ContactHtmlForm>Escribe tu mensaje aquí</ContactHtmlForm>
          <ContactHtmlFormTextArea
            name="message"
            rows={8}
            placeholder="Introduce tu mensaje"
            required
          />
          <Button variant="primary">Enviar mensaje</Button>
        </ContactRight>
      </ContactSection>
    </Wrapper>
  );
};

export default Contact;
