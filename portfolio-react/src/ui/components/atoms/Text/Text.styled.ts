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

const mapFontSizeMobile = {
  default: css`
    ${({ theme }) => theme.fontSize.l};
  `,
  small: css`
    ${({ theme }) => theme.fontSize.s};
  `,
  medium: css`
    ${({ theme }) => theme.fontSize.m};
  `,
  large: css`
    ${({ theme }) => theme.fontSize.l};
  `,
  xlarge: css`
    ${({ theme }) => theme.fontSize.xxl};
  `,
  superLarge: css`
    ${({ theme }) => theme.fontSize.xxxxl};
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

type StylesObject = {
  h1: ReturnType<typeof css>;
  h2: ReturnType<typeof css>;
  h3: ReturnType<typeof css>;
  p: ReturnType<typeof css>;
  span: ReturnType<typeof css>;
};

const getStylesObject = (
  baseStyles: ReturnType<typeof commonTextStyles>,
  theme: DefaultTheme,
  size: keyof typeof mapFontSize,
  color: string | undefined
): StylesObject => ({
  h1: css`
    ${baseStyles}
    position: relative;
    padding: ${theme.spacing.none} ${theme.spacing.xl};
    font-size: ${theme.fontSize.xxxxxxl};
    font-weight: 600;

    ${theme.mediaQueries.mobileAndTablet} {
      font-size: ${!!size && mapFontSizeMobile[size]};
      padding: ${theme.spacing.none};
    }
  `,
  h2: css`
    ${baseStyles}
    background: ${theme.background.cuaternary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: ${theme.fontSize.xxxl};
    padding: ${theme.spacing.none};
    margin-bottom: ${theme.margin.xl};
    font-weight: 600;
  `,
  h3: css`
    ${baseStyles}
    font-size: ${theme.fontSize.xxl};
    font-weight: 600;

    ${theme.mediaQueries.mobileAndTablet} {
      font-size: ${!!size && mapFontSizeMobile[size]};
    }
  `,
  p: css`
    ${baseStyles}
    font-size: ${!!size && mapFontSize[size]};
    line-height: ${theme.lineHeight.m};
    margin: ${theme.margin.xs};

    ${theme.mediaQueries.mobileAndTablet} {
      font-size: ${!!size && mapFontSizeMobile[size]};
    }
  `,
  span: css`
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
    margin: ${theme.margin.m};

    ${theme.mediaQueries.mobileAndTablet} {
      font-size: ${!!size && mapFontSizeMobile[size]};
      margin: ${theme.margin.xs};
    }
  `,
});

const getStyles = ({
  as,
  theme,
  size,
  color,
  align,
  fontStyle,
  fontWeight,
}: StyledTextProps): ReturnType<typeof css> => {
  const baseStyles = commonTextStyles(align, fontStyle, fontWeight);
  const stylesObject = getStylesObject(baseStyles, theme, size!, color);

  return stylesObject[as as keyof StylesObject] || css``;
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
