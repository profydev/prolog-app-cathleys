import React from "react";
import { Title, SubHeader, Image, HeroPage } from "@features/landing page";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Hero Page",
  component: HeroPage,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof HeroPage>;

const Template: ComponentStory<typeof HeroPage> = () => (
  <HeroPage>
    <Title>Your Issues In Sight. At All Times.</Title>
    <SubHeader>
      Powerful error tracking and monitoring for software applications. Trusted
      by over 4,000 startups.
    </SubHeader>
    <Image>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={"./icons/home-hero-macbook.png"}
        width={768}
        height={449}
        alt="Hero Image"
      />
    </Image>
  </HeroPage>
);

export const Default = Template.bind({});
