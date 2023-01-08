import React from "react";
import {
  Container,
  Title,
  Subtitle,
  Image,
  Hero,
} from "@features/landing page";

export default {
  title: "Hero",
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const Template = () => (
  <Container>
    <Title>Your Issues In Sight. At All Times.</Title>
    <Subtitle>
      Powerful error tracking and monitoring for software applications. Trusted
      by over 4,000 startups.
    </Subtitle>
    <Image>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={"./icons/home-hero-macbook.png"} width={768} height={449} />
    </Image>
  </Container>
);

export const Default = Template.bind({});
