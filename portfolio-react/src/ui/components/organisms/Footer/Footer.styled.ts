import styled from "styled-components";

export const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.l};
  padding: 50px 70px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.desktop} {
    padding: ${({ theme }) => theme.spacing.xxxxl}
      ${({ theme }) => theme.spacing.xxxxxl};
    text-align: left;
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;

  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    flex-direction: column;
    gap: 20px;
  }
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  flex-direction: column;

  img {
    width: 10rem;
    display: flex;
    align-items: center;

    ${({ theme }) => theme.mediaQueries.desktop} {
      justify-content: flex-start;
      align-items: flex-start;
    }
  }

  ${({ theme }) => theme.mediaQueries.desktop} {
    width: 30%;
    align-items: flex-start;
  }
`;

export const FooterTopLeftParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  line-height: ${({ theme }) => theme.lineHeight.m};
  max-width: 400px;
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSize.l};
  text-align: center;

  p {
    text-align: center;

    ${({ theme }) => theme.mediaQueries.desktop} {
      text-align: left;
    }
  }

  ${({ theme }) => theme.mediaQueries.desktop} {
    flex-direction: row;
    text-align: left;
    align-items: baseline;
  }
`;

export const LegalItems = styled.ul`
  display: flex;
  flex-direction: column-reverse;
  gap: ${({ theme }) => theme.spacing.m};
  margin-bottom: ${({ theme }) => theme.margin.xxl};

  ${({ theme }) => theme.mediaQueries.desktop} {
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing.xxl};
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  border-top: ${({ theme }) => theme.border.xxs} solid
    ${({ theme }) => theme.color.white};
  margin: ${({ theme }) => theme.margin.s} ${({ theme }) => theme.margin.none};
`;
