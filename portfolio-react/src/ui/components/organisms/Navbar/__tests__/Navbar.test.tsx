import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '../Navbar';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';
import logo from '@/assets/logo.svg';
import React from 'react';

const renderNavbar = (props: React.ComponentProps<typeof Navbar>) => {
  return render(
    <ThemeProvider theme={theme}>
      <Navbar {...props} />
    </ThemeProvider>
  );
};

describe('Navbar', () => {
  test('renders the logo', () => {
    renderNavbar({
      logo,
      items: ['Home', 'Sobre mi', 'Servicios', 'Portfolio', 'Contacto'],
    });

    const logoElement = screen.getByAltText('Logo');
    expect(logoElement).toBeInTheDocument();
  });

  test('renders menu items', () => {
    renderNavbar({
      logo,
      items: ['Home', 'Sobre mi', 'Servicios', 'Portfolio', 'Contacto'],
    });

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Sobre mi')).toBeInTheDocument();
    expect(screen.getByText('Servicios')).toBeInTheDocument();
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
    expect(screen.getByText('Contacto')).toBeInTheDocument();
  });

  test('renders connect button with correct text', () => {
    renderNavbar({
      logo,
      items: ['Home', 'Sobre mi', 'Servicios', 'Portfolio', 'Contacto'],
    });

    const connectButton = screen.getByText('Conecta conmigo');
    expect(connectButton).toBeInTheDocument();
  });
});
