// src/ui/components/organisms/Navbar/__tests__/Navbar.test.tsx

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '../Navbar';
import {  } from "../../../atoms/Button/Button.styled";


jest.mock('../../../atoms/Button/Button.styled', () => ({
  Button: ({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) => (
    <button onClick={onClick}>{children}</button>
  ),
}));

describe('Navbar Component', () => {
  const logo = 'path/to/logo.svg';
  const buttonText = 'Conecta conmigo';
  const buttonVariant = "primary" as const; 
  const handleClick = jest.fn(); 

  it('should render Navbar with all props', () => {
    render(
      <Navbar
        logo={logo}
        items={['Home', 'Sobre mi', 'Servicios', 'Portfolio', 'Contacto']}
        buttonText={buttonText}
        buttonVariant={buttonVariant} 
        onButtonClick={handleClick} 
      />
    );

  
    expect(screen.getByAltText('Logo')).toBeInTheDocument();

    const menuItems = ['Home', 'Sobre mi', 'Servicios', 'Portfolio', 'Contacto'];
    menuItems.forEach(item => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });

    expect(screen.getByText(buttonText)).toBeInTheDocument();
  });

  it('should handle button clicks', () => {
    render(
      <Navbar
        logo={logo}
        items={['Home', 'Sobre mi', 'Servicios', 'Portfolio', 'Contacto']}
        buttonText={buttonText}
        buttonVariant={buttonVariant} 
        onButtonClick={handleClick} 
      />
    );

    const button = screen.getByText(buttonText);
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });
});
