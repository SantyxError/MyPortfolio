import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.xl};
  gap: ${({ theme }) => theme.spacing.xl};

  ${({ theme }) => theme.mediaQueries.desktop} {
    gap: ${({ theme }) => theme.spacing.xxxl};
    padding: ${({ theme }) => theme.spacing.xxxxl}
      ${({ theme }) => theme.spacing.xxxxxl};
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.m};
  margin-bottom: ${({ theme }) => theme.margin.xl};

  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-template-columns: repeat(3, 1fr);
    gap: ${({ theme }) => theme.spacing.xxxl};
    margin-bottom: ${({ theme }) => theme.margin.xxxxxl};
  }
`;
