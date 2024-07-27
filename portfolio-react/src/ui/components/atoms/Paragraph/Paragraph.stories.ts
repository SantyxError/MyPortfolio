import { Meta, StoryObj } from "@storybook/react";
import Paragraph from "./Paragraph";

const meta: Meta<typeof Paragraph> = {
  title: "Atoms/Paragraph",
  component: Paragraph,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Paragraph>;

export const Primary: Story = {
  args: {
    text: "Este es un párrafo de ejemplo.",
  }
};
