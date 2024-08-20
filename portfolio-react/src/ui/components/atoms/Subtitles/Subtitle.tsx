import React from "react";
import { SubtitleText } from "./Subtitle.styled";

type SubtitleProps = {
  text: string;
};

const Subtitle: React.FC<SubtitleProps> = ({ text }) => {
  if (!text) return;

  return <SubtitleText>{text}</SubtitleText>;
};

export default Subtitle;
