import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BarChart } from "./chart";

export default {
  title: "BarChart",
  component: BarChart,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof BarChart>;

const Template: ComponentStory<typeof BarChart> = () => (
  <div style={{ padding: 50 }}>
    <BarChart />;
  </div>
);

export const Default = Template.bind({});
