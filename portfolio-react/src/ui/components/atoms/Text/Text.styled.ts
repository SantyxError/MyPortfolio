import styled, { css } from "styled-components";
import React from "react";
import { TextProps } from "./Text";

const TAG = {
  h1: css`
    padding: ${({ theme }) => theme.spacing.none}
      ${({ theme }) => theme.spacing.xl};
    font-size: ${({ theme }) => theme.fontSize.xxxxxxl};
    font-weight: 600;

    ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
      font-size: ${({ theme }) => theme.fontSize.xxxxxl};
      padding: ${({ theme }) => theme.spacing.none};
    }
  `,
  h2: css`
    background: ${({ theme }) => theme.background.cuaternary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: ${({ theme, size }) =>
      size === "small" ? theme.fontSize.xxxl : theme.fontSize.xxxxxl};
    padding: ${({ theme }) => theme.spacing.none}
      ${({ theme }) => theme.spacing.none};
    margin-bottom: ${({ theme }) => theme.margin.xl};
    font-weight: 600;
  `,
  h3: css`
    font-size: ${({ theme }) => theme.fontSize.xxl};
    font-weight: 600;

    ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
      font-size: ${({ theme }) => theme.fontSize.xxl};
    }
  `,
  h4: css``,
  h5: css``,
  h6: css``,

  p: css`
    font-size: ${({ theme, size }) =>
      size === "small"
        ? theme.fontSize.s
        : size === "medium"
          ? theme.fontSize.l
          : size === "large"
            ? theme.fontSize.xl
            : size === "xlarge"
              ? theme.fontSize.xxl
              : size === "superLarge"
                ? theme.fontSize.xxxxxxl
                : theme.fontSize.xxxl};
    line-height: ${({ theme }) => theme.lineHeight.m};
    text-align: ${({ align }) => align};
    font-style: ${({ fontStyle }) => fontStyle || "normal"};
    font-weight: ${({ fontWeight }) => fontWeight || "normal"};

    ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
      gap: ${({ theme }) => theme.spacing.m};
      font-size: ${({ theme }) => theme.fontSize.l};
      line-height: ${({ theme }) => theme.lineHeight.m};
    }
  `,
  span: css`
    background: ${({ theme }) => theme.background.primary};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-style: ${({ fontStyle }) => fontStyle || "normal"};
    font-weight: ${({ fontWeight }) => fontWeight || "normal"};
  `,
  default: css``,
};

export const Text = styled(
  ({ as = "span", children, className, size, ...rest }: TextProps) =>
    React.createElement(as, { className, ...rest }, children)
)<TextProps>`
  ${({ as }) => TAG[as as keyof typeof TAG] || TAG.default}
`;
