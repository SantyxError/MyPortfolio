import { Meta, StoryObj } from "@storybook/react";
import SkillsList from "./SkillsList";

const meta: Meta<typeof SkillsList> = {
  title: "organisms/SkillsList",
  component: SkillsList,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof SkillsList>;

export const Primary: Story = {};
