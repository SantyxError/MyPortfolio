import React from "react";
import theme_pattern from "../../../../assets/theme_pattern.svg";
import mail_icon from "../../../../assets/mail_icon.svg";
import location_icon from "../../../../assets/location_icon.svg";
import call_icon from "../../../../assets/call_icon.svg";
import { Button } from "../../atoms/Button/Button";
import Text from "../../atoms/Text/Text";
import {
  Section,
  Info,
  InfoDetails,
  Detail,
  Form,
  DetailImg,
  Input,
  TextArea,
  Wrapper,
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
      <Text as="h1" image={theme_pattern}>
        Contacto
      </Text>
      <Section>
        <Info>
          <Text as="span" size="superLarge">
            ¡Hablemos!
          </Text>

          <Text as="p" align="left" size="large" color="bone">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            molestie dui turpis, ac malesuada mauris convallis ut.
          </Text>

          <InfoDetails>
            <Detail>
              <DetailImg src={mail_icon} alt="Email Icon" />
              <Text as="span" align="left" size="large" color="bone">
                email@gmail.com
              </Text>
            </Detail>
            <Detail>
              <DetailImg src={call_icon} alt="Call Icon" />
              <Text as="span" align="left" size="large" color="bone">
                +1234-56-78
              </Text>
            </Detail>
            <Detail>
              <DetailImg src={location_icon} alt="Location Icon" />
              <Text as="span" align="left" size="large" color="bone">
                Valencia, España
              </Text>
            </Detail>
          </InfoDetails>
        </Info>
        <Form onSubmit={onSubmit}>
          <Text as="p" align="left" size="medium">
            Tu nombre
          </Text>
          <Input
            type="text"
            placeholder="Introduce tu nombre"
            name="name"
            required
          />
          <Text as="p" align="left" size="medium">
            Tu email
          </Text>
          <Input
            type="email"
            placeholder="Introduce tu email"
            name="email"
            required
          />
          <Text as="p" align="left" size="medium">
            Escribe tu mensaje aquí
          </Text>
          <TextArea
            name="message"
            rows={8}
            placeholder="Introduce tu mensaje"
            required
          />
          <Button variant="primary">Enviar mensaje</Button>
        </Form>
      </Section>
    </Wrapper>
  );
};

export default Contact;
