import React, { ReactNode } from "react";
import { Text as TextComponent } from "./Text.styled";

type Tag = "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type Size = "small" | "medium" | "large" | "xlarge" | "superLarge";
type TextAlign = "left" | "center" | "right" | "justify";
type FontWeight = "normal" | "bold";
type FontStyle = "normal" | "italic";
type Color = "white" | "primary" | "secondary" | "bone" | "grey" | string;

export type TextProps = {
  children: ReactNode;
  as?: Tag;
  className?: string;
  size?: Size;
  image?: string;
  align?: TextAlign;
  fontWeight?: FontWeight;
  fontStyle?: FontStyle;
  color?: Color;
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
  color,
}) => {
  return (
    <TextComponent
      as={as}
      className={className}
      size={size}
      image={image}
      align={align}
      fontWeight={fontWeight}
      fontStyle={fontStyle}
      color={color}>
      {children}
    </TextComponent>
  );
};

export default Text;
