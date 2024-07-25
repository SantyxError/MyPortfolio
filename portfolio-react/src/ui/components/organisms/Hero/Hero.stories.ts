import { Meta, Story } from '@storybook/react';
import Hero from './Hero';

const meta: Meta<typeof Hero> = {
  component: Hero,
  title: 'Organisms/Hero',
  tags: ['autodocs'],
};

export default meta;

type HeroProps = {
  connectText: string;
  resumeText: string;
};

export const Default: Story<HeroProps> = {
  args: {
    connectText: 'Conecta conmigo',
    resumeText: 'Mis Trabajos',
  },
};
