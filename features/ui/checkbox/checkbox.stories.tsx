import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Checkbox } from "./checkbox";
import { addBasePath } from "next/dist/shared/lib/router/router";

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
};
Default.parameters = {
  viewMode: "docs",
};
