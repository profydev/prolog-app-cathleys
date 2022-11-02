import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button, ButtonSize, ButtonColor } from "./ui-kit-button";

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
  label: " Button CTA",
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
  disabled: "disabled",
};
Disabled.parameters = {
  pseudo: { disabled: true },
};
