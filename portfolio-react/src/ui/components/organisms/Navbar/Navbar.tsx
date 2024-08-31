import React, { useState, useEffect } from "react";
import { Button } from "../../atoms/Button/Button";
import {
  Wrapper,
  CloseIcon,
  ButtonWrapper,
  HamburgerIcon,
  Logo,
  Menu,
  MenuItem,
} from "./Navbar.styled";
import underline from "../../../../assets/nav_underline.svg";
import logo from "../../../../assets/logo_portfolio.svg";
import menu_open from "../../../../assets/menu_open.svg";
import menu_close from "../../../../assets/menu_close.svg";
import { Link } from "react-scroll";
import Text from "../../atoms/Text/Text";

type NavbarProps = {
  buttonVariant: "primary" | "secondary" | "terciary";
  onButtonClick: () => void;
  buttonText: string;
};

const Navbar: React.FC<NavbarProps> = ({
  buttonVariant,
  onButtonClick,
  buttonText,
}) => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        handleCloseMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const items = [
    {
      to: "home",
      text: "Home",
    },
    {
      to: "about",
      text: "Sobre mí",
    },
    {
      to: "services",
      text: "Mis servicios",
    },
    {
      to: "work",
      text: "Mis trabajos",
    },
    {
      to: "contact",
      text: "Contacto",
    },
  ];

  return (
    <Wrapper $isMenuOpen={isMenuOpen}>
      <Logo src={logo} alt="Logo" />
      <HamburgerIcon
        src={menu_open}
        alt="Menu open"
        onClick={handleOpenMenu}
        $isOpen={isMenuOpen}
      />
      <Menu $isOpen={isMenuOpen}>
        <CloseIcon
          src={menu_close}
          alt="Menu close"
          onClick={handleCloseMenu}
        />

        <ul>
          {items.map((item, index) => (
            <MenuItem key={index}>
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                onClick={() => {
                  setMenu(`${item.to}`);
                  handleCloseMenu();
                }}>
                <Text as="p" size="large">
                  {item.text}
                </Text>
              </Link>
              {menu === item.to && <img src={underline} alt="" />}
            </MenuItem>
          ))}
        </ul>
      </Menu>
      <ButtonWrapper>
        <Button variant={buttonVariant} onClick={onButtonClick}>
          {buttonText}
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Navbar;
