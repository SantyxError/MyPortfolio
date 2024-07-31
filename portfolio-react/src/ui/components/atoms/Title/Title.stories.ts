import { Meta, StoryObj } from "@storybook/react";
import Title from "./Title";
import theme_pattern from "../../../../assets/theme_pattern.svg";

const meta: Meta = {
  title: "Atoms/Title",
  component: Title,
  argTypes: {
    text: { control: "text" },
    image: { control: "text" },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Primary: Story = {
  args: {
    text: "Sobre mí",
    image: theme_pattern,
  },
};
