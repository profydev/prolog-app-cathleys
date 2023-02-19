import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Checkbox, CheckboxSize, CheckboxState } from "./checkbox";

export default {
  title: "UI/Checkbox",
  component: Checkbox,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (props) => (
  <div style={{ padding: 50 }}>
    <Checkbox {...props}></Checkbox>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  label: "Label",
  check: CheckboxState.checked,
  size: CheckboxSize.sm,
};
