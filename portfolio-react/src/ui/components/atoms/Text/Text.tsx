import React from "react";
import { Text as TextComponent } from "./Text.styled";

type Tag = "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type Size = "small" | "medium" | "large" | "xlarge" | "superLarge";
type TextAlign = "left" | "center" | "right" | "justify";
type FontWeight = "normal" | "bold";
type FontStyle = "normal" | "italic";

export type TextProps = {
  children: React.ReactNode;
  as?: Tag;
  className?: string;
  size?: Size;
  image?: string;
  align?: TextAlign;
  fontWeight?: FontWeight;
  fontStyle?: FontStyle;
};

const Text: React.FC<TextProps> = ({
  children,
  as = "span",
  className,
  size,
  image,
  align = "justify",
  fontWeight = "normal",
  fontStyle = "normal",
}) => {
  return (
    <TextComponent
      as={as}
      className={className}
      size={size}
      image={image}
      align={align}
      fontWeight={fontWeight}
      fontStyle={fontStyle}>
      {children}
    </TextComponent>
  );
};

export default Text;
