import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  margin-bottom: ${({ theme }) => theme.margin.s};
`;

export const TitleText = styled.h1`
  padding: ${({ theme }) => theme.spacing.none}
    ${({ theme }) => theme.spacing.xl};
  font-size: ${({ theme }) => theme.fontSize.xxxxxxl};
  font-weight: 600;
`;

export const TitleImg = styled.img`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.none};
  right: ${({ theme }) => theme.spacing.none};
  z-index: -1;
`;
