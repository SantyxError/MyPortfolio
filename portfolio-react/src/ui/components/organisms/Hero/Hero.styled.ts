import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const HeroImage = styled.img`
  margin-top: ${({ theme }) => theme.margin.xl};
  width: 500px;
  height: auto;
  margin-bottom: -50px;
  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    width: 400px;
  }
`;

export const TitleWrapper = styled.div`
  width: 60%;
  padding: ${({ theme }) => theme.spacing.none}
    ${({ theme }) => theme.spacing.xxxxxl};
  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    width: 80%;
    padding: ${({ theme }) => theme.spacing.none}
      ${({ theme }) => theme.spacing.l};
  }
`;

export const TextWrapper = styled.div`
  width: 45%;
  margin: ${({ theme }) => theme.margin.xl};
  padding: ${({ theme }) => theme.spacing.s}
    ${({ theme }) => theme.spacing.xxxxxl};
  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    padding: ${({ theme }) => theme.spacing.s} ${({ theme }) => theme.spacing.l};
  }
`;

export const HeroAction = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 500;
  margin-bottom: ${({ theme }) => theme.margin.xxxl};

  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    margin-bottom: ${({ theme }) => theme.margin.xl};
    gap: ${({ theme }) => theme.spacing.l};
  }
`;
