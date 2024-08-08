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

export const ServicesFormatH3 = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: 600;

  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`;

export const ServicesFormatH2 = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xxxl};
  font-weight: 800;
  background: ${({ theme }) => theme.background.cuaternary};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
  }
`;

export const ServicesFormatP = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.color.bone};
  line-height: ${({ theme }) => theme.lineHeight.m};
  max-width: 100%;

  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    font-size: ${({ theme }) => theme.fontSize.l};
    ${({ theme }) => theme.lineHeight.s};
    max-width: 300px; /
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

export const ServicesReadmoreText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xl};

  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export const ServicesReadmoreImg = styled.img`
  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    width: 16px;
  }
`;
