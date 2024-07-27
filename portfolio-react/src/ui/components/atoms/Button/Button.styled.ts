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
      }
    `}
`;
