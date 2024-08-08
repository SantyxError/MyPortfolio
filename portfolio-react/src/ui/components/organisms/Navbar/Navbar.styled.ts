import styled from "styled-components";

// Wrapper del Navbar
export const Wrapper = styled.div<{ isMenuOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.margin.l} 20px;
  position: relative;
  overflow: ${({ isMenuOpen }) => (isMenuOpen ? "hidden" : "auto")};
  transition: padding 0.3s ease; /* Transición suave para el padding si es necesario */

  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    padding: ${({ theme }) => theme.margin.m} 25px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

export const Logo = styled.img`
  width: 10rem;
`;

export const NavMenu = styled.ul<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  list-style: none;
  gap: ${({ theme }) => theme.spacing.xxl};
  font-size: ${({ theme }) => theme.fontSize.l};
  transition: transform 0.3s ease; /* Transición suave para el menú */

  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    position: fixed;
    flex-direction: column;
    align-items: flex-start;
    top: 0;
    right: 0;
    gap: 15px;
    background-color: #1f0016;
    width: 35%;
    height: 100%;
    z-index: 2;
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(100%)"};
    padding: 20px;
    padding-top: 70px;
    overflow-y: auto;
  }
`;

export const NavMenuItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xxs};
  cursor: pointer;
  transition: color 0.3s ease; /* Transición suave para el color si es necesario */

  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    font-size: 20px;
    padding: 10px 0;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.xxs};
    width: 100%;
  }
`;

export const NavMenuItemImg = styled.img`
  display: flex;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    display: none;
  }
`;

export const ImgNavMobOpen = styled.img<{ isOpen: boolean }>`
  display: none;
  cursor: pointer;

  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    display: ${({ isOpen }) => (isOpen ? "none" : "block")};
    position: fixed;
    top: 20px;
    right: 25px;
    z-index: 3;
  }
`;

export const ImgNavMobClose = styled.img`
  display: none;
  cursor: pointer;

  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 30px;
    z-index: 3;
  }
`;
