import styled, { css } from 'styled-components';

const COLOR = {
  primary: css`
    background: ${({ theme }) => theme.background.primary};
    color: ${({ theme }) => theme.color.white};
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.color.secondary};
    color: ${({ theme }) => theme.color.white};
  `,
  terciary: css`
    background-color: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.black};
  `,
};

export const Button = styled.button<{
  variant: 'primary' | 'secondary' | 'terciary';
}>`
  ${({ variant }) => COLOR[variant]}
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  border: unset;
  padding: ${({ theme }) => theme.spacing.m} ${({ theme }) => theme.spacing.l};
  font-weight: bold;

  &:hover {
    background: linear-gradient(267deg, #b923e1 0.36%, #da7c25 102.06%);
    transform: scale(1.05);
  }
`;
