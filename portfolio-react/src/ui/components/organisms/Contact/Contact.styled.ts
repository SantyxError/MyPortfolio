import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xxxxxl};
  margin: ${({ theme }) => theme.margin.xxxxl}
    ${({ theme }) => theme.margin.xxxxxl};

  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    margin: ${({ theme }) => theme.margin.xxs} ${({ theme }) => theme.margin.l};
    gap: ${({ theme }) => theme.spacing.none};
  }
`;

export const ContactSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xxxxxl};

  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.s};
    align-items: center;
  }
`;

export const ContactLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 100%;

  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    align-items: center;
    text-align: center;
    margin-bottom: ${({ theme }) => theme.margin.s};
  }
`;

export const ContactLeftParagraph = styled.div`
  max-width: 100%;
  color: ${({ theme }) => theme.color.bone};
  font-size: ${({ theme }) => theme.fontSize.l};
  line-height: ${({ theme }) => theme.lineHeight.l};

  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    font-size: ${({ theme }) => theme.fontSize.m};
    line-height: ${({ theme }) => theme.lineHeight.m};
  }
`;

export const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.s};
  color: ${({ theme }) => theme.color.bone};
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-top: ${({ theme }) => theme.margin.m};

  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    font-size: ${({ theme }) => theme.fontSize.m};
    margin-top: ${({ theme }) => theme.margin.s};
  }
`;

export const ContactDetail = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.l};

  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    align-items: center;
    gap: ${({ theme }) => theme.spacing.m};
  }
`;

export const ContactDetailImg = styled.img`
  width: 25px;

  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    width: 20px;
  }
`;

export const ContactRight = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.xs};

  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    margin-top: ${({ theme }) => theme.spacing.xl};
    align-items: center;
    width: 100%;
  }
`;

export const ContactHtmlForm = styled.label`
  color: ${({ theme }) => theme.color.bone};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 500;

  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export const ContactHtmlFormInput = styled.input`
  color: #a0a0a0;
  border: none;
  width: 100%;
  height: ${({ theme }) => theme.spacing.xxxl};
  padding-left: ${({ theme }) => theme.spacing.m};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  background: ${({ theme }) => theme.color.darkGrey};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.xl};

  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    font-size: ${({ theme }) => theme.fontSize.m};
    height: ${({ theme }) => theme.spacing.xxl};
  }
`;

export const ContactHtmlFormTextArea = styled.textarea`
  color: ${({ theme }) => theme.color.grey};
  border: none;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.m};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  background: ${({ theme }) => theme.color.darkGrey};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.xl};
  margin-bottom: ${({ theme }) => theme.margin.xl};

  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    font-size: ${({ theme }) => theme.fontSize.m};
    height: ${({ theme }) => theme.spacing.xxxxxxl};
    margin-bottom: ${({ theme }) => theme.margin.m};
  }
`;
