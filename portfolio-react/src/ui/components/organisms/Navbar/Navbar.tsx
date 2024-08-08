import React, { useState, useRef, useEffect } from "react";
import { Button } from "../../atoms/Button/Button";
import {
  Wrapper,
  NavMenu,
  NavMenuItem,
  NavMenuItemImg,
  ImgNavMobClose,
  ButtonWrapper,
  ImgNavMobOpen,
  Logo,
} from "./Navbar.styled";
import underline from "../../../../assets/nav_underline.svg";
import logo from "../../../../assets/logo_portfolio.svg";
import menu_open from "../../../../assets/menu_open.svg";
import menu_close from "../../../../assets/menu_close.svg";
import { Link } from "react-scroll";

interface NavbarProps {
  buttonVariant: "primary" | "secondary" | "terciary";
  onButtonClick: () => void;
  buttonText: string;
}

const Navbar: React.FC<NavbarProps> = ({
  buttonVariant,
  onButtonClick,
  buttonText,
}) => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Wrapper isMenuOpen={isMenuOpen}>
      <Logo src={logo} alt="Logo" />
      <ImgNavMobOpen
        src={menu_open}
        alt="Menu open"
        onClick={openMenu}
        isOpen={isMenuOpen}
      />
      <NavMenu isOpen={isMenuOpen}>
        <ImgNavMobClose src={menu_close} alt="Menu close" onClick={closeMenu} />
        <NavMenuItem>
          <Link
            to="home"
            smooth={true}
            duration={500}
            onClick={() => {
              setMenu("home");
              closeMenu(); // Cierra el menú al hacer clic
            }}>
            <p>Home</p>
          </Link>
          {menu === "home" ? <NavMenuItemImg src={underline} alt="" /> : null}
        </NavMenuItem>
        <NavMenuItem>
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={() => {
              setMenu("about");
              closeMenu(); // Cierra el menú al hacer clic
            }}>
            <p>Sobre mi</p>
          </Link>
          {menu === "about" ? <NavMenuItemImg src={underline} alt="" /> : null}
        </NavMenuItem>
        <NavMenuItem>
          <Link
            to="services"
            smooth={true}
            duration={500}
            onClick={() => {
              setMenu("services");
              closeMenu(); // Cierra el menú al hacer clic
            }}>
            <p>Servicios</p>
          </Link>
          {menu === "services" ? (
            <NavMenuItemImg src={underline} alt="" />
          ) : null}
        </NavMenuItem>
        <NavMenuItem>
          <Link
            to="work"
            smooth={true}
            duration={500}
            onClick={() => {
              setMenu("work");
              closeMenu(); // Cierra el menú al hacer clic
            }}>
            <p>Portfolio</p>
          </Link>
          {menu === "work" ? <NavMenuItemImg src={underline} alt="" /> : null}
        </NavMenuItem>
        <NavMenuItem>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => {
              setMenu("contact");
              closeMenu(); // Cierra el menú al hacer clic
            }}>
            <p>Contacto</p>
          </Link>
          {menu === "contact" ? (
            <NavMenuItemImg src={underline} alt="" />
          ) : null}
        </NavMenuItem>
      </NavMenu>
      <ButtonWrapper>
        <Button variant={buttonVariant} onClick={onButtonClick}>
          {buttonText}
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Navbar;
