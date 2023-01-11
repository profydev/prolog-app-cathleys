import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { UiSelect as Select } from "./select";

export default {
  title: "UI/Select",
  component: Select,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (props) => (
  <div style={{ padding: 50 }}>
    <Select {...props} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  isDisabled: false,
  isSearchable: true,
  isClearable: true,
  placeholder: "Select a team member",
  options: [
    { value: "Phoenix Baker", label: "Phoenix Baker" },
    { value: "Olivia Rhye", label: "Olivia Rhye" },
    { value: "Lana Steiner", label: "Lana Steiner" },
    { value: "Demi Wilkinson", label: "Demi Wilkinson" },
    { value: "Candice Wu", label: "Candice Wu" },
    { value: "Natali Craig", label: "Natali Craig" },
    { value: "Drew Cano", label: "Drew Cano" },
  ],
};
