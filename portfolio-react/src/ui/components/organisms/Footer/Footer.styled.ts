import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.l};
  margin: ${({ theme }) => theme.margin.xxxxl}
    ${({ theme }) => theme.margin.xxxxxl};

  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    margin: 50px 70px;
  }
`;

export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;

  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    flex-direction: column;
    gap: 20px;
  }
`;

export const FooterTopLeft = styled.div``;

export const FooterTopLeftImg = styled.img`
  width: 10rem;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xxxxxl};
`;

export const FooterTopLeftParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  line-height: ${({ theme }) => theme.lineHeight.m};
  max-width: 400px;
`;

export const FooterEmail = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xxl};
  padding: ${({ theme }) => theme.spacing.m} ${({ theme }) => theme.spacing.l};
  border-radius: ${({ theme }) => theme.borderRadius.xxl};
  background: ${({ theme }) => theme.color.darkGrey};
  padding-right: ${({ theme }) => theme.spacing.xxxxxl};

  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    gap: ${({ theme }) => theme.spacing.l};
    padding: ${({ theme }) => theme.spacing.s} ${({ theme }) => theme.spacing.m};
  }
`;

export const FooterEmailInput = styled.input`
  outline: none;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.color.grey};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.l};

  &:hover {
    border: ${({ theme }) => theme.border.xxs} solid
      ${({ theme }) => theme.color.white};
  }
`;

export const FooterEmailInputImage = styled.img``;

export const FooterTopRight = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};

  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    flex-direction: column;
    align-items: start;
    gap: ${({ theme }) => theme.spacing.l};
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSize.l};

  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    display: flex;
    flex-direction: column-reverse;
    margin-bottom: ${({ theme }) => theme.margin.xxxxl};
  }
`;

export const FooterBottomLeft = styled.div``;

export const FooterBottomRight = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xxl};
  margin-bottom: ${({ theme }) => theme.margin.xxl};
`;

export const StyledHr = styled.hr`
  border: 0;
  border-top: ${({ theme }) => theme.border.xxs} solid
    ${({ theme }) => theme.color.white};
  margin: ${({ theme }) => theme.margin.s} ${({ theme }) => theme.margin.none};
`;
