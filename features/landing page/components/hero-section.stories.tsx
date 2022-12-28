import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { HeroSection } from "./hero-section";
import { HeroPageSection } from "@features/landing page";

export default {
  title: "Hero",
  component: HeroSection,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof HeroSection>;

const Template: ComponentStory<typeof HeroSection> = (props) => (
  <HeroSection {...props} />
);

export const Default = Template.bind({});
Default.args = {
  hero: {
    sectionType: HeroPageSection.hero,
    title: "Your Issues In Sight. At All Times.",
    subtitle: `Powerful error tracking and monitoring for software applications. 
       Trusted by over 4,000 startups.`,
    image: {
      src: "./icons/home-hero-macbook.png",
      width: 768,
      height: 449,
    },
  },
};
