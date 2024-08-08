import React from "react";
import { ParagraphText } from "./Paragraph.styled";

interface ParagraphProps {
  text: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ text }) => {
  if (!text) {
    return;
  }
  return <ParagraphText data-testid="paragraph">{text}</ParagraphText>;
};

export default Paragraph;
