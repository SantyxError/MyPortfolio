import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xl};
  margin: ${({ theme }) => theme.margin.xxl}
    ${({ theme }) => theme.margin.xxxxxl};
`;

export const AboutTitle = styled.div`
  position: relative;
`;

export const AboutTitleH1 = styled.h1`
  padding: ${({ theme }) => theme.spacing.none}
    ${({ theme }) => theme.spacing.xl};
  font-size: ${({ theme }) => theme.fontSize.xxxxl};
  font-weight: 600;
`;

export const AboutTitleImg = styled.img`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.none};
  right: ${({ theme }) => theme.spacing.none};
  z-index: -1;
`;

export const AboutSections = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xxxxl};
  align-items: stretch;
`;

export const AboutLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
`;

export const AboutRight = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AboutParagraph = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.s};
`;

export const AboutParaText = styled.p`
  font-size: ${({ theme }) => theme.spacing.s};
  line-height: ${({ theme }) => theme.lineHeight.m};
  margin: ${({ theme }) => theme.spacing.none}
    ${({ theme }) => theme.spacing.none} ${({ theme }) => theme.spacing.m}
    ${({ theme }) => theme.spacing.none};
  text-align: justify;
`;
