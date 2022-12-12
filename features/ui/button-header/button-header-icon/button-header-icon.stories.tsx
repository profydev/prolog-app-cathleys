import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  ButtonIcons,
  ButtonwithIcon,
  ButtonColor,
  ButtonSize,
} from "./button-header-icon";

export default {
  title: "UI/Button/with Icon",
  component: ButtonwithIcon,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ButtonwithIcon>;

const Template: ComponentStory<typeof ButtonwithIcon> = (props) => (
  <div style={{ padding: 50 }}>
    <ButtonwithIcon {...props}>Button CTA</ButtonwithIcon>
  </div>
);
export const Leading = Template.bind({});
Leading.args = {
  size: ButtonSize.sm,
  color: ButtonColor.primary,
  href: "spiderman",
  label: "Button CTA",
  icon: ButtonIcons.leading,
  text: "leading",
};

export const Trailing = Template.bind({});
Trailing.args = {
  size: ButtonSize.md,
  color: ButtonColor.primary,
  href: "superman",
  label: "Button CTA",
  icon: ButtonIcons.trailing,
  text: "trailing",
};

export const Only = Template.bind({});
Only.args = {
  size: ButtonSize.md,
  color: ButtonColor.primary,
  href: "batman",
  icon: ButtonIcons.only,
  text: "only",
};
