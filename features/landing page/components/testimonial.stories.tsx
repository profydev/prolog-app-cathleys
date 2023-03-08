import React from "react";
import { Testimonial } from "@features/landing page";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "react-query";

export default {
  title: "Testimonial Section",
  component: Testimonial,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Testimonial>;

const queryClient = new QueryClient();
const Template: ComponentStory<typeof Testimonial> = () => (
  <div>
    <QueryClientProvider client={queryClient}>
      <Testimonial />
    </QueryClientProvider>
  </div>
);

export const Default = Template.bind({});
