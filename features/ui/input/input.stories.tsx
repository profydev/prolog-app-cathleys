import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "./input";

export default {
  title: "UI/Input",
  component: Input,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (props) => (
  <div style={{ padding: 50 }}>
    <Input {...props} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  label: "Email",
  iconSrc: "icons/mail-input.svg",
};
Default.parameters = {
  viewMode: "docs",
};

export const hasError = Template.bind({});
hasError.args = {
  label: "Email",
  hint: "",
  iconSrc: "",
  error: "This is a error message.",
};
