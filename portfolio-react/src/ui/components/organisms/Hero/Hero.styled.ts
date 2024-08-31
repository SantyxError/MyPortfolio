import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.xl};

  ${({ theme }) => theme.mediaQueries.desktop} {
    padding: ${({ theme }) => theme.spacing.xxxxl}
      ${({ theme }) => theme.spacing.xxxxxl};
  }
`;

export const Image = styled.img`
  margin-top: ${({ theme }) => theme.margin.xl};
  width: 400px;
  height: auto;
  margin-bottom: -50px;

  ${({ theme }) => theme.mediaQueries.desktop} {
    width: 500px;
  }
`;

export const TitleWrapper = styled.div`
  width: 80%;
  padding: ${({ theme }) => theme.spacing.none}
    ${({ theme }) => theme.spacing.l};

  ${({ theme }) => theme.mediaQueries.desktop} {
    width: 60%;
    padding: ${({ theme }) => theme.spacing.none}
      ${({ theme }) => theme.spacing.xxxxxl};
  }
`;

export const TextWrapper = styled.div`
  margin: ${({ theme }) => theme.margin.xl};

  ${({ theme }) => theme.mediaQueries.desktop} {
    width: 45%;
    padding: ${({ theme }) => theme.spacing.s}
      ${({ theme }) => theme.spacing.xxxxxl};
  }
`;

export const CtaWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 500;
  margin-bottom: ${({ theme }) => theme.margin.xl};
  gap: ${({ theme }) => theme.spacing.l};

  ${({ theme }) => theme.mediaQueries.desktop} {
    margin-bottom: ${({ theme }) => theme.margin.xxxl};
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;
