import React from "react";
import {
  Container,
  HeaderImage,
  HeroPage,
  SupportingText,
  Title,
} from "@features/landing page";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Hero Section",
  component: HeroPage,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof HeroPage>;

const Template: ComponentStory<typeof HeroPage> = () => (
  <Container>
    <Title>Your Application Issues In Sight. At All Times.</Title>
    <SupportingText>
      {" "}
      Powerful error tracking and monitoring for software applications. Trusted
      by over 4,000 startups.
    </SupportingText>
    <div>
      <HeaderImage
        src={`/icons/home-hero-macbook.png`}
        width={768}
        height={449}
        alt="hero"
      />
    </div>
  </Container>
);

export const Default = Template.bind({});
