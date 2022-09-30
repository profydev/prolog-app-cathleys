// Button.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./button";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { label: "Button CTA" };

export const Secondary = Template.bind({});
Secondary.args = { backgroundColor: "#ff0", label: "Button CTA" };

export const Gray = Template.bind({});
Gray.args = { backgroundColor: "#ff0", label: "Button CTA" };
