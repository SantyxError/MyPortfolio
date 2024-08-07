import styled from "styled-components";

export const ParagraphText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xl};
  line-height: ${({ theme }) => theme.lineHeight.m};
  margin: ${({ theme }) => theme.spacing.none}
    ${({ theme }) => theme.spacing.none} ${({ theme }) => theme.spacing.m}
    ${({ theme }) => theme.spacing.none};
  text-align: justify;
`;
