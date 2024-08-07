import styled from "styled-components";

export const SubtitleText = styled.span`
  background: ${({ theme }) => theme.background.cuaternary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: ${({ theme }) => theme.fontSize.xxxxxl};
  padding: ${({ theme }) => theme.spacing.none}
    ${({ theme }) => theme.spacing.none};
  margin-bottom: ${({ theme }) => theme.margin.xl};
  font-weight: 600;
`;
