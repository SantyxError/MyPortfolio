import React from "react";
import { SubtitleText } from "./Subtitle.styled";

interface SubtitleProps {
  text: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ text }) => {
  // Si el texto está vacío o solo contiene espacios, no renderiza nada
  if (text.trim() === "") return null;

  return <SubtitleText>{text}</SubtitleText>;
};

export default Subtitle;
