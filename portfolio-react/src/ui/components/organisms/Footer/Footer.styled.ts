import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.l};
  margin: ${({ theme }) => theme.margin.xxxxl}
    ${({ theme }) => theme.margin.xxxxxl};
`;

export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FooterTopLeft = styled.div``;

export const FooterTopLeftImg = styled.img`
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
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSize.l};
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
