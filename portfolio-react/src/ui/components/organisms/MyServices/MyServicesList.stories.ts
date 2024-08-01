import { Meta, StoryObj } from "@storybook/react";
import MyServicesList from "../MyServices/MyServicesList";
import { MyServiceProps } from "../../atoms/MyService/MyService";

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
        s_no: "01",
        s_name: "Web design",
        s_desc: "Web development is the process of building, programming...",
      },
      {
        s_no: "02",
        s_name: "Graphics design",
        s_desc: "Web development is the process of building, programming...",
      },
      {
        s_no: "03",
        s_name: "Social media",
        s_desc: "Web development is the process of building, programming...",
      },
    ] as MyServiceProps[],
  },
};
