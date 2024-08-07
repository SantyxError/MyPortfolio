import React, { useState } from "react";
import { Button } from "../../atoms/Button/Button";
import { Wrapper, NavMenu, NavMenuItem, NavMenuItemImg } from "./Navbar.styled";
import underline from "../../../../assets/nav_underline.svg";
import logo from "../../../../assets/logo.svg";
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

  return (
    <Wrapper>
      <img src={logo} alt="Logo" />
      <NavMenu>
        <NavMenuItem>
          <Link
            to="home"
            smooth={true}
            duration={500}
            onClick={() => setMenu("home")}
          >
            <p>Home</p>
          </Link>
          {menu === "home" ? <NavMenuItemImg src={underline} alt="" /> : null}
        </NavMenuItem>
        <NavMenuItem>
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={() => setMenu("about")}
          >
            <p>Sobre mi</p>
          </Link>
          {menu === "about" ? <NavMenuItemImg src={underline} alt="" /> : null}
        </NavMenuItem>
        <NavMenuItem>
          <Link
            to="services"
            smooth={true}
            duration={500}
            onClick={() => setMenu("services")}
          >
            <p>Servicios</p>
          </Link>
          {menu === "services" ? <NavMenuItemImg src={underline} alt="" /> : null}
        </NavMenuItem>
        <NavMenuItem>
          <Link
            to="work"
            smooth={true}
            duration={500}
            onClick={() => setMenu("work")}
          >
            <p>Portfolio</p>
          </Link>
          {menu === "work" ? <NavMenuItemImg src={underline} alt="" /> : null}
        </NavMenuItem>
        <NavMenuItem>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => setMenu("contact")}
          >
            <p>Contact</p>
          </Link>
          {menu === "contact" ? <NavMenuItemImg src={underline} alt="" /> : null}
        </NavMenuItem>
      </NavMenu>
      <Button variant={buttonVariant} onClick={onButtonClick}>
        {buttonText}
      </Button>
    </Wrapper>
  );
};

export default Navbar;
