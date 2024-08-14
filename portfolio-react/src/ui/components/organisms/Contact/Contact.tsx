import React from "react";
import Title from "../../atoms/Title/Title";
import { Wrapper } from "../About/About.styled";
import theme_pattern from "../../../../assets/theme_pattern.svg";
import mail_icon from "../../../../assets/mail_icon.svg";
import location_icon from "../../../../assets/location_icon.svg";
import call_icon from "../../../../assets/call_icon.svg";
import Subtitle from "../../atoms/Subtitles/Subtitle";
import { Button } from "../../atoms/Button/Button";
import Text from "../../atoms/Text/Text";
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
      <Title text="Contacto" image={theme_pattern} />
      <ContactSection>
        <ContactLeft>
          <Subtitle text={"¡Hablemos!"} />
          <ContactLeftParagraph>
            <Text as="p" align="left" size="large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              molestie dui turpis, ac malesuada mauris convallis ut.
            </Text>
          </ContactLeftParagraph>
          <ContactDetails>
            <ContactDetail>
              <ContactDetailImg src={mail_icon} alt="Email Icon" />
              <Text as="p" align="left" size="large">
                email@gmail.com
              </Text>
            </ContactDetail>
            <ContactDetail>
              <ContactDetailImg src={call_icon} alt="Call Icon" />
              <Text as="p" align="left" size="large">
                +1234-56-78
              </Text>
            </ContactDetail>
            <ContactDetail>
              <ContactDetailImg src={location_icon} alt="Location Icon" />
              <Text as="p" align="left" size="large">
                Valencia, España
              </Text>
            </ContactDetail>
          </ContactDetails>
        </ContactLeft>
        <ContactRight onSubmit={onSubmit}>
          <Text as="p" align="left" size="medium">
            Tu nombre
          </Text>
          <ContactHtmlFormInput
            type="text"
            placeholder="Introduce tu nombre"
            name="name"
            required
          />
          <Text as="p" align="left" size="medium">
            Tu email
          </Text>
          <ContactHtmlFormInput
            type="email"
            placeholder="Introduce tu email"
            name="email"
            required
          />
          <Text as="p" align="left" size="medium">
            Escribe tu mensaje aquí
          </Text>
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
