import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button, ButtonSize, ButtonColor, ButtonState } from "./ui-kit-button";

export default {
  title: "UI/Button",
  component: Button,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (props) => (
  <div style={{ padding: 50 }}>
    <Button {...props} />
  </div>
);
export const Default = Template.bind({});
Default.args = {
  size: ButtonSize.sm,
  color: ButtonColor.primary,
  href: "superman",
  state: ButtonState.default,
  label: " Button CTA",
};

Default.parameters = {
  viewMode: "docs",
};
