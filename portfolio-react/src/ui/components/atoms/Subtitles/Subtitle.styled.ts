import styled from "styled-components";

export const SubtitleText = styled.span`
  background: ${({ theme }) => theme.background.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: ${({ theme }) => theme.fontSize.xxxl};
  padding: ${({ theme }) => theme.spacing.xl}
    ${({ theme }) => theme.spacing.none};
  font-weight: 600;
`;
