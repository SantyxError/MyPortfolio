import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const HeroImage = styled.img`
  margin-top: ${({ theme }) => theme.margin.xl};
  width: 240px;
  height: auto;
  border-radius: 50%;
  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    width: 260px;
  }
`;

export const HeroH1 = styled.h1`
  text-align: center;
  width: 70%;
  font-size: ${({ theme }) => theme.fontSize.xxxxxxl};
  font-weight: 600;

  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    margin-top: ${({ theme }) => theme.margin.xl};
    width: 90%;
    font-size: ${({ theme }) => theme.fontSize.xxxxxl};
  }
`;

export const HeroSpan = styled.span`
  background: ${({ theme }) => theme.background.primary};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const TitleWrapper = styled.div`
  width: 60%;
  padding: ${({ theme }) => theme.spacing.none}
    ${({ theme }) => theme.spacing.xxxxxl};
  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
  }
`;

export const TextWrapper = styled.div`
  width: 45%;
  padding: ${({ theme }) => theme.spacing.s}
    ${({ theme }) => theme.spacing.xxxxxl};
  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
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
