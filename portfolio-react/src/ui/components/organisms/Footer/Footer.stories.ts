import Footer from "./Footer";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Footer> = {
  title: "Organisms/Footer",
  component: Footer,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Primary: Story = {
  args: {},
};
