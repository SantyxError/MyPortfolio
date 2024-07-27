import styled from "styled-components";

export const ParagraphText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  line-height: ${({ theme }) => theme.lineHeight.l};
  margin: ${({ theme }) => theme.spacing.none}
    ${({ theme }) => theme.spacing.none} ${({ theme }) => theme.spacing.m}
    ${({ theme }) => theme.spacing.none};
  text-align: justify;
`;
