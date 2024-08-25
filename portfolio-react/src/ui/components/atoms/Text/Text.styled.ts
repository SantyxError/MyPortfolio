import styled, { css, DefaultTheme } from "styled-components";
import React, { ReactNode } from "react";
import { TextProps } from "./Text";

type StyledTextProps = TextProps & { theme: DefaultTheme };

const mapFontSize = {
  default: css`
    ${({ theme }) => theme.fontSize.l};
  `,
  small: css`
    ${({ theme }) => theme.fontSize.s};
  `,
  medium: css`
    ${({ theme }) => theme.fontSize.l};
  `,
  large: css`
    ${({ theme }) => theme.fontSize.xl};
  `,
  xlarge: css`
    ${({ theme }) => theme.fontSize.xxxl};
  `,
  superLarge: css`
    ${({ theme }) => theme.fontSize.xxxxxxl};
  `,
};

const commonTextStyles = (
  align?: string,
  fontStyle?: string,
  fontWeight?: string
) => css`
  text-align: ${align};
  font-style: ${fontStyle || "normal"};
  font-weight: ${fontWeight || "normal"};
`;

const getStyles = ({
  as,
  theme,
  size,
  color,
  align,
  fontStyle,
  fontWeight,
}: StyledTextProps) => {
  const baseStyles = commonTextStyles(align, fontStyle, fontWeight);

  switch (as) {
    case "h1":
      return css`
        ${baseStyles}
        position: relative;
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
        ${baseStyles}
        background: ${theme.background.cuaternary};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: ${theme.fontSize.xxxl};
        padding: ${theme.spacing.none};
        margin-bottom: ${theme.margin.xl};
        font-weight: 600;
      `;
    case "h3":
      return css`
        ${baseStyles}
        font-size: ${theme.fontSize.xxl};
        font-weight: 600;

        ${theme.mediaQueries.mobileAndTablet} {
          font-size: ${theme.fontSize.xxl};
        }
      `;
    case "p":
      return css`
        ${baseStyles}
        font-size: ${!!size && mapFontSize[size]};
        line-height: ${theme.lineHeight.m};

        ${theme.mediaQueries.mobileAndTablet} {
          font-size: ${theme.fontSize.l};
        }
      `;
    case "span":
      return css`
        ${baseStyles}
        ${color
          ? css`
              color: ${color};
            `
          : css`
              background: ${theme.background.primary};
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            `}
        font-size: ${!!size && mapFontSize[size]};
      `;
    default:
      return css``;
  }
};

export const TitleImg = styled.img`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.none};
  right: ${({ theme }) => theme.spacing.none};
  z-index: -1;

  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    width: 130px;
    right: -20px;
  }
`;

export const Text = styled(
  ({
    as = "span",
    children,
    className,
    size,
    image,
    ...rest
  }: TextProps & { children: ReactNode }) =>
    React.createElement(as, { className, ...rest }, [
      children,
      image && as === "h1",
    ])
)<TextProps & { children: ReactNode }>`
  ${({ theme, ...props }) => getStyles({ theme, ...props })}
`;
