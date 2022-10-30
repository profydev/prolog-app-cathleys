import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./ui-kit-button";

export default {
  title: "UI/Button",
  component: Button,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = () => (
  <div style={{ padding: 50 }}>
    <Button>Button CTA</Button>
  </div>
);
export const Primary = Template.bind({});
