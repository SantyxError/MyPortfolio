import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.s};
  padding: ${({ theme }) => theme.spacing.xl}
    ${({ theme }) => theme.spacing.xxl};
  border-radius: ${({ theme }) => theme.borderRadius.l};
  border: ${({ theme }) => theme.border.xxs} solid
    ${({ theme }) => theme.color.white};
  transition: 0.4s;
  cursor: pointer;

  &:hover {
    border: ${({ theme }) => theme.border.xxs} solid
      ${({ theme }) => theme.color.purple};
    background-image: ${({ theme }) => theme.background.terciary};
    transform: scale(1.05);
    transition: 0.4s;
  }

  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    align-items: center; // Cambiado a center para centrar el contenido en móvil
    gap: ${({ theme }) => theme.spacing.s};
    padding: ${({ theme }) => theme.spacing.m};
    border-radius: ${({ theme }) => theme.borderRadius.s};
    text-align: center; // Centrar el texto en dispositivos móviles
  }
`;

export const Readmore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.l};

  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    gap: ${({ theme }) => theme.spacing.m};
  }
`;

export const ReadmoreImg = styled.img`
  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    width: 16px;
  }
`;
