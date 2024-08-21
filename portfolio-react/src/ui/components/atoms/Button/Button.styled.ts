import styled, { css } from "styled-components";

const COLOR = {
  primary: css`
    background: ${({ theme }) => theme.background.primary};
    color: ${({ theme }) => theme.color.white};
    border: unset;
    transition: color 0.3s transform 0.4s;

    &:hover {
      transform: scale(1.1);
    }
  `,
  secondary: css`
    background: none;
    color: ${({ theme }) => theme.color.white};
    border: 2px solid ${({ theme }) => theme.color.white};
    padding: ${({ theme }) => theme.spacing.m} ${({ theme }) => theme.spacing.l};
    transition: color 0.3s transform 0.4s;

    &:hover {
      transform: scale(1.1);
    }
  `,
  terciary: css`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.m};
    background: none;
    color: ${({ theme }) => theme.color.white};
    border: ${({ theme }) => theme.border.xxs} solid
      ${({ theme }) => theme.color.white};
    padding: ${({ theme }) => theme.spacing.m} ${({ theme }) => theme.spacing.l};
    font-weight: 500;
    transition:
      color 0.3s,
      background 0.3s,
      gap 0.4s,
      transform 0.4s;

    &:hover {
      color: ${({ theme }) => theme.color.purple};
      gap: ${({ theme }) => theme.spacing.xl};
      transform: scaleX(1.1);
    }
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
    transition: 0.3s;
  }

  ${({ variant }) =>
    variant === "primary" &&
    css`
      &:hover {
        box-shadow: inset 0 0 0 2px white;
      }

      ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
        font-size: ${({ theme }) => theme.fontSize.l};
        font-weight: 500;
        gap: ${({ theme }) => theme.spacing.m};
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

      ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
        font-size: ${({ theme }) => theme.fontSize.l};
        font-weight: 500;
        gap: ${({ theme }) => theme.spacing.m};
      }
    `}

  ${({ variant }) =>
    variant === "terciary" &&
    css`
      &:hover {
        gap: ${({ theme }) => theme.spacing.xl};
        transform: scaleX(1.1);
        border: ${({ theme }) => theme.border.xxs} solid
          ${({ theme }) => theme.color.purple};
      }

      ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
        font-size: ${({ theme }) => theme.fontSize.l};
        font-weight: 500;
        gap: ${({ theme }) => theme.spacing.m};
      }
    `}
`;
