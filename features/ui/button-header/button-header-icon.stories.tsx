import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ButtonIcons, ButtonHeaderIcon } from "./button-header-icon";
import { ButtonHeader } from "@features/ui";
import { ButtonColor, ButtonSize } from "./button-header";

export default {
  title: "UI/Button/with Icon",
  component: ButtonHeaderIcon,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ButtonHeaderIcon>;

const Template: ComponentStory<typeof ButtonHeaderIcon> = (props) => (
  <div style={{ padding: 50 }}>
    <ButtonHeaderIcon {...props} />
  </div>
);
export const Leading = Template.bind({});
Leading.args = {
  label: "Button CTA",
  icon: ButtonIcons.leading,
  iconSrc: "/icons/circle.svg",
  color: ButtonColor.primary,
  size: ButtonSize.md,
};

export const Trailing = Template.bind({});
Trailing.args = {
  label: "Button CTA",
  icon: ButtonIcons.trailing,
  iconSrc: "/icons/circle.svg",
  color: ButtonColor.primary,
  size: ButtonSize.md,
};

export const Only = Template.bind({});
Only.args = {
  icon: ButtonIcons.only,
  iconSrc: "/icons/circle.svg",
  color: ButtonColor.primary,
  size: ButtonSize.md,
};
