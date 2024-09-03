import Contact from "./Contact";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Contact> = {
  title: "Organisms/Contact",
  component: Contact,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Contact>;

export const Primary: Story = {
  args: {},
};
