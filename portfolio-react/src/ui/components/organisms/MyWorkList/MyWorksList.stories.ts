import MyWorksList from "./MyWorksList";
import { Meta, StoryObj } from "@storybook/react";

const exampleData = [
  { id: 1, title: "Project 1", w_img: "src/assets/project_1.svg" },
  { id: 2, title: "Project 2", w_img: "src/assets/project_2.svg" },
  { id: 3, title: "Project 3", w_img: "src/assets/project_3.svg" },
  { id: 4, title: "Project 4", w_img: "src/assets/project_4.svg" },
];

const meta: Meta<typeof MyWorksList> = {
  title: "Organisms/MyWorksList",
  component: MyWorksList,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MyWorksList>;

export const Default: Story = {
  args: {
    myWorkData: exampleData,
  },
};

export const NoWorks: Story = {
  args: {
    myWorkData: [],
  },
};
