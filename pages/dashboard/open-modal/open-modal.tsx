import React from "react";
import styled from "styled-components";
import { color, space, textFont } from "@styles/theme";

type OpenModalProps = {
  className: string;
  src: string;
  alt: string;
  title: string;
  content: string;
};

export const IconEmail = styled.img`
  margin: 0;
  padding-top: ${space(8)};
  padding-bottom: 1.75rem;
`;
export const Title = styled.h1`
  color: ${color("gray", 900)};
  ${textFont("lg", "medium")};
  margin: 0;
`;

export const Content = styled.p`
  display: inline-block;
  color: ${color("gray", 500)};
  ${textFont("sm", "regular")};
  margin: 0;
  padding: 0.5rem 1.5rem 0;
  text-align: center;
`;

export function OpenModal(props: OpenModalProps) {
  const { src, alt, title, content, className } = props;
  return (
    <>
      <IconEmail src={src} alt={alt} />
      <Title> {title} </Title>
      <Content className={className}>{content}</Content>
    </>
  );
}
