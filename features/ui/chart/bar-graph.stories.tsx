import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BarGraph } from "./bar-graph";

export default {
  title: "UI/Chart/bar-chart",
  component: BarGraph,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof BarGraph>;

const Template: ComponentStory<typeof BarGraph> = () => (
  <div style={{ padding: 50 }}>
    <BarGraph />
  </div>
);

export const Default = Template.bind({});
