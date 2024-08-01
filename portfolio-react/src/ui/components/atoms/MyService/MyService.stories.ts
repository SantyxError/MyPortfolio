import { Meta, StoryObj } from "@storybook/react";
import MyService from "../MyService/MyService";

const meta: Meta<typeof MyService> = {
  title: "Atoms/MyService",
  component: MyService,
  argTypes: {
    s_no: { control: "text" },
    s_name: { control: "text" },
    s_desc: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof MyService>;

export const Playground: Story = {
  args: {
    s_no: "01",
    s_name: "Web design",
    s_desc: "Web development is the process of building, programming...",
  },
};
