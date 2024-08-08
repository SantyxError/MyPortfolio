import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xxxl};
  margin: ${({ theme }) => theme.margin.xxl}
    ${({ theme }) => theme.margin.xxxxxl};

  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    margin: 50px 70px;
    gap: 80px;
    align-items: start;
  }
`;

export const AboutSections = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xxxxl};
  align-items: stretch;

  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    flex-direction: column;
  }
`;

export const AboutLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;

  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    display: none;
  }
`;
export const AboutLeftImg = styled.img`
  border-radius: ${({ theme }) => theme.borderRadius.m};
  height: 100%;
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

