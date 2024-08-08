import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;

export const HeroImage = styled.img`
  margin-top: 2rem;
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
    margin-top: 50px;
    width: 90%;
    font-size: 50px;
  }
`;

export const HeroSpan = styled.span`
  background: ${({ theme }) => theme.background.primary};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const HeroP = styled.p`
  text-align: center;
  width: 50%;
  font-size: ${({ theme }) => theme.fontSize.xl};
  line-height: ${({ theme }) => theme.lineHeight.l};

  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    margin: 10px 0;
    width: 60%;
    font-size: 18px;
    line-height: ${({ theme }) => theme.lineHeight.m};
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
    margin-bottom: 50px;
    gap: 25px;
  }
`;
