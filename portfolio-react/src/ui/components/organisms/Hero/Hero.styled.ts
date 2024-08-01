import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;

export const HeroImage = styled.img`
  margin-top: 150px;
`;

export const HeroH1 = styled.h1`
  text-align: center;
  width: 70%;
  font-size: ${({ theme }) => theme.fontSize.xxxxxl};
  font-weight: 600;
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
`;

export const HeroAction = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 500;
  margin-bottom: ${({ theme }) => theme.margin.xxxl};
`;