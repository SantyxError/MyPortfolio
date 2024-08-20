import styled, { css, DefaultTheme } from "styled-components";
import React from "react";
import { TextProps } from "./Text";

type StyledTextProps = TextProps & { theme: DefaultTheme };

const getStyles = ({
  as,
  theme,
  size,
  align,
  fontStyle,
  fontWeight,
  color,
}: StyledTextProps) => {
  switch (as) {
    case "h1":
      return css`
        padding: ${theme.spacing.none} ${theme.spacing.xl};
        font-size: ${theme.fontSize.xxxxxxl};
        font-weight: 600;

        ${theme.mediaQueries.mobileAndTablet} {
          font-size: ${theme.fontSize.xxxxxl};
          padding: ${theme.spacing.none};
        }
      `;
    case "h2":
      return css`
        background: ${theme.background.cuaternary};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: ${size === "small"
          ? theme.fontSize.xxxl
          : theme.fontSize.xxxxxl};
        padding: ${theme.spacing.none};
        margin-bottom: ${theme.margin.xl};
        font-weight: 600;
      `;
    case "h3":
      return css`
        font-size: ${theme.fontSize.xxl};
        font-weight: 600;

        ${theme.mediaQueries.mobileAndTablet} {
          font-size: ${theme.fontSize.xxl};
        }
      `;
    case "p":
      return css`
        font-size: ${(() => {
          switch (size) {
            case "small":
              return theme.fontSize.s;
            case "medium":
              return theme.fontSize.l;
            case "large":
              return theme.fontSize.xl;
            case "xlarge":
              return theme.fontSize.xxl;
            case "superLarge":
              return theme.fontSize.xxxxxxl;
            default:
              return theme.fontSize.xxxl;
          }
        })()};
        line-height: ${theme.lineHeight.m};
        text-align: ${align};
        font-style: ${fontStyle || "normal"};
        font-weight: ${fontWeight || "normal"};

        ${theme.mediaQueries.mobileAndTablet} {
          font-size: ${theme.fontSize.l};
        }
      `;
    case "span":
      return css`
        ${color
          ? css`
              color: ${color};
            `
          : css`
              background: ${theme.background.primary};
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            `}
        font-style: ${fontStyle || "normal"};
        font-weight: ${fontWeight || "normal"};
      `;
    default:
      return css``;
  }
};

export const Text = styled(
  ({ as = "span", children, className, size, ...rest }: TextProps) =>
    React.createElement(as, { className, ...rest }, children)
)<TextProps>`
  ${({ theme, ...props }) => getStyles({ theme, ...props })}
`;
