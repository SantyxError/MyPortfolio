import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xxxxxl};
  margin: ${({ theme }) => theme.margin.xxxxl}
    ${({ theme }) => theme.margin.xxxxxl};

  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    margin: ${({ theme }) => theme.margin.xl} ${({ theme }) => theme.margin.xl}; /* Ajusta los márgenes en dispositivos más pequeños */
    gap: ${({ theme }) => theme.spacing.xxl};
  }
`;

export const MyWorkContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.xxl};
  margin-bottom: ${({ theme }) => theme.margin.l};

  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.spacing.l};
    margin-bottom: ${({ theme }) => theme.margin.xl};
  }
`;

export const MyWorkContainerImg = styled.img`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  transition: 0.3;
  cursor: pointer;

  &:hover {
    border: ${({ theme }) => theme.border.xxs} solid
      ${({ theme }) => theme.color.purple};
    border-radius: ${({ theme }) => theme.borderRadius.m};
    transform: scale(1.1);
    transition: 0.4s;
  }
`;

export const MyWorkShowMore = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.l};
  border-radius: ${({ theme }) => theme.borderRadius.xxxl};
  border: ${({ theme }) => theme.border.xxs} solid
    ${({ theme }) => theme.color.white};
  padding: ${({ theme }) => theme.spacing.m}
    ${({ theme }) => theme.spacing.xxxl};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 500;
  margin-bottom: ${({ theme }) => theme.margin.xxxl};
  transition: 0.6s;
  cursor: pointer;

  &:hover {
    gap: ${({ theme }) => theme.spacing.xxl};
    transition: 0.4s;
    border: ${({ theme }) => theme.border.xxs} solid
      ${({ theme }) => theme.color.purple};
  }

  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    padding: ${({ theme }) => theme.spacing.s} ${({ theme }) => theme.spacing.l}; /* Ajusta el padding para pantallas pequeñas */
    font-size: ${({ theme }) => theme.fontSize.m};
    gap: ${({ theme }) => theme.spacing.m};
    margin-bottom: ${({ theme }) => theme.margin.l};
  }
`;
