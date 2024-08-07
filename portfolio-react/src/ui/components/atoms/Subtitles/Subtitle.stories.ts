import { Meta, StoryObj } from "@storybook/react";
import Subtitle from "./Subtitle";

const meta: Meta<typeof Subtitle> = {
  title: "Atoms/Subtitle",
  component: Subtitle,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Subtitle>;

export const Primary: Story = {
  args: {
    text: "Este es un subtitulo de ejemplo.",
  },
};
