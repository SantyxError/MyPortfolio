import styled from "styled-components";

export const Wrapper = styled.div`
width 100%;
max-width:100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: ${({ theme }) => theme.margin.l} 170px;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: ${({ theme }) => theme.spacing.xxl};
  font-size: ${({ theme }) => theme.fontSize.l};
`;

export const NavMenuItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxs};
  cursor: pointer;
`;

export const NavMenuItemImg = styled.img`
  display: flex;
  margin: auto;
`;
