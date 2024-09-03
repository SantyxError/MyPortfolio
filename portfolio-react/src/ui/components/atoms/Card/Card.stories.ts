import { Meta, StoryObj } from "@storybook/react";
import Card from "../Card/Card";

const meta: Meta<typeof Card> = {
  title: "Atoms/Card",
  component: Card,
  argTypes: {
    number: { control: "text" },
    name: { control: "text" },
    description: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Playground: Story = {
  args: {
    number: "01",
    name: "Web design",
    description: "Web development is the process of building, programming...",
  },
};
