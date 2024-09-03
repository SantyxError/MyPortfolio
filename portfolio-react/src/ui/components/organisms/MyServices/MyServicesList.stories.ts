import { Meta, StoryObj } from "@storybook/react";
import MyServicesList from "./MyServicesList";
import { CardProps } from "../../atoms/Card/Card";

const meta: Meta<typeof MyServicesList> = {
  title: "Organisms/MyServicesList",
  component: MyServicesList,
  argTypes: {
    services: { control: "object" },
  },
};
export default meta;

type Story = StoryObj<typeof MyServicesList>;

export const Playground: Story = {
  args: {
    services: [
      {
        number: "01",
        name: "Web design",
        description:
          "Web development is the process of building, programming...",
      },
      {
        number: "02",
        name: "Graphics design",
        description:
          "Graphics design involves creating visual content to communicate messages...",
      },
      {
        number: "03",
        name: "Social media",
        description:
          "Social media services help businesses to promote their products and services...",
      },
    ] as CardProps[],
  },
};
