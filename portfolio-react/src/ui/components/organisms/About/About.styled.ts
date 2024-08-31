import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xxxl};
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.xl};
  align-items: center;

  ${({ theme }) => theme.mediaQueries.desktop} {
    padding: ${({ theme }) => theme.spacing.xxxxl}
      ${({ theme }) => theme.spacing.xxxxxl};
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

export const Sections = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xxxxl};
  align-items: stretch;

  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  border-radius: ${({ theme }) => theme.borderRadius.m};
  height: 100%;
  width: 40%;

  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    display: none;
  }
`;

export const Paragraph = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.s};
`;
