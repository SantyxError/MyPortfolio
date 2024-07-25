// src/ui/components/organisms/Navbar/Navbar.tsx

import React from 'react';
import { Button } from '../../atoms/Button/Button.styled';
import { Wrapper, NavMenu } from './Navbar.styled';

interface NavbarProps {
  logo: string;
  items: string[];
  buttonText: string;
  onButtonClick: () => void;
  buttonVariant: "primary" | "secondary" | "terciary"; 
}

const Navbar: React.FC<NavbarProps> = ({ logo, items, buttonText, onButtonClick, buttonVariant }) => {
  return (
    <Wrapper>
      <img src={logo} alt="Logo" />
      <NavMenu>
        {items.map(item => (
          <li key={item}>{item}</li>
        ))}
      </NavMenu>
      <Button variant={buttonVariant} onClick={onButtonClick}>{buttonText}</Button>
    </Wrapper>
  );
};

export default Navbar;
