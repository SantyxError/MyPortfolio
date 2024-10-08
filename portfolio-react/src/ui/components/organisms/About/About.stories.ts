import { Meta, StoryObj } from "@storybook/react";
import About from "./About";

const meta: Meta<typeof About> = {
  title: "organisms/About",
  component: About,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};
export default meta;

type Story = StoryObj<typeof About>;

export const Primary: Story = {
  args: {},
};
