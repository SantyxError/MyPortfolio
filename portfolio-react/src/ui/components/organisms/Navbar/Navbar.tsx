import React from 'react';
import {  NavMenu, Wrapper } from './Navbar.styled';
import { Button } from '../../atoms/Button/Button.styled';

const Navbar = ({ logo, items }: { logo: string; items: string[] }) => {
  return (
    <Wrapper>
      <img src={logo} alt="Logo" />
      <NavMenu className="nav-menu">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </NavMenu>
      <Button variant="primary">
        Conecta conmigo
      </Button>
    </Wrapper>
  );
};

export default Navbar;
