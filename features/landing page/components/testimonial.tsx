import React from "react";
import styled from "styled-components";
import { breakpoint, color, displayFont, space, textFont } from "@styles/theme";
import { SupportingText, Title } from "../components";
import { useTestimonial } from "../hooks/use-testimonial";

const Section = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: ${space(0)};

  @media (min-width: ${breakpoint("tablet")}) {
    padding: ${space(24)} ${space(8)};
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const HeaderContainer = styled(Title)`
  display: flex;
  flex-direction: column;
  padding-top: ${space(0)};

  @media (max-width: ${breakpoint("tablet")}) {
    padding: ${space(0)} ${space(4)};
  }
`;
const HeaderText = styled(Title)`
  padding-top: ${space(0)};
`;

const SubHeader = styled(SupportingText)`
  max-width: unset;
`;

const TestimonialCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Quote = styled.p`
  margin: ${space(0)};
  ${displayFont("xs", "medium")};
  color: ${color("primary", 900)};
`;

const Name = styled.p`
  margin: ${space(0)};
  margin-bottom: ${space(3)};
  color: ${color("primary", 900)};
  ${textFont("md", "medium")};
`;

const SupportingTitle = styled.p`
  margin: ${space(0)};
  color: ${color("primary", 700)};
  ${textFont("sm", "regular")};

  &:nth-child(2) {
    color: ${color("gray", 900)};
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${space(10)} ${space(6)};
  border-radius: ${space(0)};
  background-color: ${color("primary", 50)};

  &:nth-child(2) {
    margin: ${space(0)};
    background-color: white;

    ${Quote},${Name},${SupportingTitle} {
      color: ${color("gray", 900)};
    }
  }
  @media (min-width: ${breakpoint("tablet")}) {
    border-radius: ${space(4)};

    &:nth-child(2) {
      margin: ${space(4)} ${space(16)};
      background-color: ${color("primary", 50)};
    }
  }
`;

const AvatarAndText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Avatar = styled.img`
  margin-bottom: ${space(4)};
  border-radius: 50%;
`;

const QuoteAndSubheading = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-bottom: 3.5rem;
  width: 20rem;

  @media (max-width: ${breakpoint("tablet")}) {
    padding-bottom: ${space(6)};
  }
`;

const Subheading = styled.p`
  margin: ${space(0)};
  margin-bottom: ${space(3)};
  ${textFont("sm", "semibold")}
  color: ${color("primary", 700)}
`;

export function Testimonial() {
  const testimonial = useTestimonial();

  const { sections } = testimonial.data || {};

  const findTestimonial = sections?.find(
    (el) => el.sectionType === "testimonials"
  );

  return (
    <Section>
      {findTestimonial && (
        <>
          <HeaderContainer>
            <HeaderText>{findTestimonial.title}</HeaderText>
            <SubHeader>{findTestimonial.subtitle}</SubHeader>
          </HeaderContainer>

          <Container>
            <TestimonialCard>
              {findTestimonial.testimonials.map((testimonial) => (
                <Content key={testimonial.userCompany}>
                  <QuoteAndSubheading>
                    <Subheading>{testimonial.title}</Subheading>
                    <Quote>{testimonial.text}</Quote>
                  </QuoteAndSubheading>

                  <AvatarAndText>
                    <Avatar
                      src={`https://prolog-api.profy.dev/${testimonial.userImage.src}`}
                      width={testimonial.userImage.width}
                      height={testimonial.userImage.height}
                      alt={testimonial.userCompany}
                    ></Avatar>

                    <Name>{testimonial.userName}</Name>
                    <SupportingTitle>
                      {testimonial.userRole}, {testimonial.userCompany}
                    </SupportingTitle>
                  </AvatarAndText>
                </Content>
              ))}
            </TestimonialCard>
          </Container>
        </>
      )}
    </Section>
  );
}
