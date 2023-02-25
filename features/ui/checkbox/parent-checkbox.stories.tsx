import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ParentCheckbox } from "./parent-checkbox";

export default {
  title: "UI/ParentCheckbox",
  component: ParentCheckbox,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ParentCheckbox>;

const Template: ComponentStory<typeof ParentCheckbox> = () => (
  <div style={{ padding: 50 }}>
    <ParentCheckbox />
  </div>
);

export const Default = Template.bind({});
