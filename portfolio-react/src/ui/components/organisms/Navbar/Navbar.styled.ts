import styled from "styled-components";

export const Wrapper = styled.div`
width 100%;
max-width:100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: ${({ theme }) => theme.margin.xl} 170px;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: ${({ theme }) => theme.spacing.xxxl};
  font-size: ${({ theme }) => theme.fontSize.xl};
`;
