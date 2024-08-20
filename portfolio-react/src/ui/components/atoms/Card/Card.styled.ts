import styled from "styled-components";

export const ServicesFormat = styled.div`
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
    align-items: start;
    gap:  ${({ theme }) => theme.spacing.s};
    padding:  ${({ theme }) => theme.spacing.m}
    border-radius: ${({ theme }) => theme.borderRadius.s};
  }
`;

export const ServicesReadmore = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.l};

  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    gap: ${({ theme }) => theme.spacing.m};
  }
`;

export const ServicesReadmoreImg = styled.img`
  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    width: 16px;
  }
`;