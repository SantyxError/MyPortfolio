import styled from "styled-components";

export const Wrapper = styled.nav<{ $isMenuOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.xl}
    ${({ theme }) => theme.spacing.xxl};
  position: relative;
  overflow: ${({ $isMenuOpen }) => ($isMenuOpen ? "hidden" : "auto")};
  transition: padding 0.3s ease;

  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    padding: ${({ theme }) => theme.margin.l} ${({ theme }) => theme.margin.l};
    align-items: flex-start;
    gap: 10px;
  }
`;

export const Logo = styled.img`
  width: 10rem;
`;

export const Menu = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  list-style: none;
  gap: ${({ theme }) => theme.spacing.xxl};
  font-size: ${({ theme }) => theme.fontSize.l};
  transition: transform 0.3s ease;

  ul {
    width: 100%;

    ${({ theme }) => theme.mediaQueries.desktop} {
      display: flex;
      gap: ${({ theme }) => theme.spacing.xxl};
    }
  }

  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    position: fixed;
    flex-direction: column;
    top: 0;
    right: 0;
    background-color: ${({ theme }) => theme.color.darkPurple};
    width: 100%;
    height: 100%;
    z-index: 1;
    transform: ${({ $isOpen }) =>
      $isOpen ? "translateX(0)" : "translateX(100%)"};
    padding-top: 70px;
    overflow-y: auto;
  }
`;

export const MenuItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xxs};
  cursor: pointer;
  transition:
    color 0.3s ease,
    font-size 0.3s ease,
    transform 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.color.purple};
    transform: scale(1.15);
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    font-size: 20px;
    padding: 10px 0;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xxs};

    &:hover {
      color: ${({ theme }) => theme.color.secondary};
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    display: none;
  }
`;

export const HamburgerIcon = styled.img<{ $isOpen: boolean }>`
  display: none;
  cursor: pointer;

  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    display: ${({ $isOpen }) => ($isOpen ? "none" : "block")};
    top: 20px;
    right: 25px;
    z-index: 3;
  }
`;

export const CloseIcon = styled.img`
  display: none;
  cursor: pointer;

  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    display: block;
    position: absolute;
    top: 20px;
    right: 30px;
    width: 30px;
    z-index: 2;
  }
`;
