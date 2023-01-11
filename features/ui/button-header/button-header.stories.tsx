import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ButtonHeader, ButtonSize, ButtonColor } from "./button-header";

export default {
  title: "UI/Button",
  component: ButtonHeader,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ButtonHeader>;

const Template: ComponentStory<typeof ButtonHeader> = (props) => (
  <div style={{ padding: 50 }}>
    <ButtonHeader {...props} />
  </div>
);
export const Default = Template.bind({});
Default.args = {
  size: ButtonSize.sm,
  color: ButtonColor.primary,
  href: "superman",
  label: " Button CTA",
};
Default.parameters = {
  viewMode: "docs",
};

export const Hover = Template.bind({});
Hover.args = {
  size: ButtonSize.md,
  color: ButtonColor.primary,
  href: "superman",
  label: "Click Me!",
};
Hover.parameters = {
  pseudo: { hover: true },
};

export const Focus = Template.bind({});
Focus.args = {
  size: ButtonSize.md,
  color: ButtonColor.primary,
  href: "superman",
  label: "Click Me!",
};
Focus.parameters = {
  pseudo: { focus: true },
};

export const Disabled = Template.bind({});
Disabled.args = {
  size: ButtonSize.md,
  color: ButtonColor.primary,
  href: "superman",
  label: "Click Me!",
};
Disabled.parameters = {
  pseudo: { disabled: true },
};
