import MyWorksList from "./MyWorksList";
import { Meta, StoryObj } from "@storybook/react";

const exampleData = [
  { title: "Project 1", workImg: "src/assets/project_1.svg" },
  { title: "Project 2", workImg: "src/assets/project_2.svg" },
  { title: "Project 3", workImg: "src/assets/project_3.svg" },
  { title: "Project 4", workImg: "src/assets/project_4.svg" },
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
