import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ButtonIcons, ButtonwithIcon } from "./button-header-icon";
import { ButtonColor, ButtonHeader, ButtonSize } from "@features/ui";

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
    <ButtonHeader size={ButtonSize.md} color={ButtonColor.primary} href="">
      <ButtonwithIcon {...props}></ButtonwithIcon>
    </ButtonHeader>
  </div>
);
export const Leading = Template.bind({});
Leading.args = {
  label: "Button CTA",
  icon: ButtonIcons.leading,
};

export const Trailing = Template.bind({});
Trailing.args = {
  label: "Button CTA",
  icon: ButtonIcons.trailing,
};

export const Only = Template.bind({});
Only.args = {
  icon: ButtonIcons.only,
};
