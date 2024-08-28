import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xxxl};
  margin: ${({ theme }) => theme.margin.xxxxl}
    ${({ theme }) => theme.margin.xxxxxl};

  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    margin: ${({ theme }) => theme.margin.xl} ${({ theme }) => theme.margin.xl};
    gap: ${({ theme }) => theme.spacing.xxl};
  }
`;

export const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.xxxl};
  margin-bottom: ${({ theme }) => theme.margin.xxxxxl};

  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.spacing.m};
    margin-bottom: ${({ theme }) => theme.margin.xl};
  }
`;
