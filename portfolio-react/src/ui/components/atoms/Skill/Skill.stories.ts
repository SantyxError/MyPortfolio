import { Meta, StoryObj } from '@storybook/react';
import Skill from './Skill';

const meta: Meta<typeof Skill> = {
  title: 'Molecules/Skill',
  component: Skill,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Skill>;

export const Primary: Story = {
  args: {
    imageSrc: 'src/assets/skills/html5-original-wordmark.svg',
    altText: 'HTML',
    text: 'HTML',
  }
};