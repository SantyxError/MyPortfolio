import styled, { css } from "styled-components";

const COLOR = {
  primary: css`
    background: ${({ theme }) => theme.background.primary};
    color: ${({ theme }) => theme.color.white};
    border: unset;
  `,
  secondary: css`
    background: none;
    color: ${({ theme }) => theme.color.white};
    border: 2px solid ${({ theme }) => theme.color.white};
    padding: ${({ theme }) => theme.spacing.m} ${({ theme }) => theme.spacing.l};
    transition: color 0.3s;
  `,
  terciary: css`
    background-color: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.black};
  `,
};

export const Button = styled.button<{
  variant: "primary" | "secondary" | "terciary";
}>`
  ${({ variant }) => COLOR[variant]}
  font-weight: bold;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.l};
  padding: ${({ theme }) => theme.spacing.m} ${({ theme }) => theme.spacing.l};
  border-radius: ${({ theme }) => theme.borderRadius.xxxl};
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: 0.3s;
  }

  ${({ variant }) =>
    variant === "primary" &&
    css`
      &:hover {
        box-shadow: inset 0 0 0 2px white;
      }
    `}

  ${({ variant }) =>
    variant === "secondary" &&
    css`
      &:hover {
        border: 2px solid ${({ theme }) => theme.color.purple};
        background: ${({ theme }) => theme.background.primary};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        color: ${({ theme }) => theme.color.purple};
      }
    `}
`;
