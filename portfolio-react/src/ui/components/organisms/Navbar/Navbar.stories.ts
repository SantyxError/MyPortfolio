import { Meta, StoryObj } from '@storybook/react';
import Navbar from './Navbar';
import logo from '../../../../assets/logo.svg';

const meta: Meta<typeof Navbar> = {
  component: Navbar,
  title: 'organisms/Navbar',  // Cambiado a 'organisms'
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Playground: Story = {
  args: {
    logo: logo,
    items: ['Home', 'Sobre mi', 'Servicios', 'Portfolio', 'Contacto'],
    buttonText: 'Conecta conmigo',
  },
};
