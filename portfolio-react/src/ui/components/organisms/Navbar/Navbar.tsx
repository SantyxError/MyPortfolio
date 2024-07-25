import React from 'react';
import { NavMenu, Wrapper } from './Navbar.styled';
import { Button } from '../../atoms/Button/Button';

interface NavbarProps {
  logo: string;
  items: string[];
  buttonText: string;
}

const Navbar: React.FC<NavbarProps> = ({ logo, items, buttonText }) => {
  return (
    <Wrapper>
      <img src={logo} alt="Logo" />
      <NavMenu className="nav-menu">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </NavMenu>
      <Button variant="primary">
        {buttonText}
      </Button>
    </Wrapper>
  );
};

export default Navbar;
