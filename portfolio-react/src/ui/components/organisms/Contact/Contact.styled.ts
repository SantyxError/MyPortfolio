import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xxxxxl};
  margin: ${({ theme }) => theme.margin.xxxxl}
    ${({ theme }) => theme.margin.xxxxxl};
`;

export const ContactSection = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xxxxxl};
`;

export const ContactLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContactLeftParagraph = styled.div`
  max-width: 550px;
  color: ${({ theme }) => theme.color.bone};
  font-size: ${({ theme }) => theme.fontSize.l};
  line-height: ${({ theme }) => theme.lineHeight.l};
`;

export const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.s};
  color: ${({ theme }) => theme.color.bone};
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-top: ${({ theme }) => theme.margin.m};
`;

export const ContactDetail = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.l};
`;

export const ContactDetailImg = styled.img`
  width: 25px;
`;

export const ContactRight = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: ${({ theme }) => theme.spacing.l};
`;

export const ContactHtmlForm = styled.label`
  color: ${({ theme }) => theme.color.bone};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 500;
`;

export const ContactHtmlFormInput = styled.input`
  color: #a0a0a0;
  border: none;
  width: 45rem;
  height: ${({ theme }) => theme.spacing.xxxl};
  padding-left: ${({ theme }) => theme.spacing.m};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  background: ${({ theme }) => theme.color.darkGrey};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

export const ContactHtmlFormTextArea = styled.textarea`
  color: ${({ theme }) => theme.color.grey};
  border: none;
  width: 44rem;
  padding: ${({ theme }) => theme.spacing.m};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  background: ${({ theme }) => theme.color.darkGrey};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: 20px;
`;
