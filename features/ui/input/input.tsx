import { color, textFont } from "@styles/theme";
import React, { useState } from "react";
import styled from "styled-components";

type InputProps = {
  label?: string;
  hint?: string;
  iconSrc: string;
  placeholder: string;
  error: string;
};

const Container = styled.div<{ iconSrc: string; isEmailValid: boolean }>`
  display: flex;
  max-width: 20rem;
  border: 1px solid
    ${({ isEmailValid }) =>
      isEmailValid ? color("gray", 300) : color("error", 300)};
  border-radius: 0.5rem;
  padding: 0.625rem 0.875rem;
  background: white ${(props) => `url(${props.iconSrc}) no-repeat scroll 15px`};
  padding-left: 1.875rem;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
`;

const InputBox = styled.input`
  flex: 1 0;
  box-sizing: border-box;
  padding: unset;
  padding-left: 0.625rem;
  background-color: transparent;
  border: 0;
  outline: none;

  ::placeholder {
    color: ${color("gray", 500)};
    ${textFont("md", "regular")};
  }
`;

const Label = styled.p`
  margin-bottom: 0.375rem;
  ${textFont("sm", "medium")};
  color: ${color("gray", 700)};
`;

const Span = styled.span<{ isEmailValid: boolean }>`
  display: ${({ isEmailValid }) => (isEmailValid ? "none" : "inline")};
`;

const Hint = styled.p<{ isEmailValid: boolean }>`
  margin-top: 0.375rem;
  ${textFont("sm", "regular")};
  color: ${color("gray", 500)};
  display: ${({ isEmailValid }) => (isEmailValid ? "" : "none")};
`;

const ErrorMessage = styled.p<{ isEmailValid: boolean }>`
  margin: 0;
  ${textFont("sm", "regular")}
  color: ${({ isEmailValid }) =>
    isEmailValid ? color("gray", 500) : color("error", 500)};
  display: ${({ isEmailValid }) => (isEmailValid ? "none" : "")};
`;

export function Input({
  label,
  hint,
  iconSrc,
  error,
  placeholder,
}: InputProps) {
  const [email, setEmail] = useState("");
  const isEmailValid = !!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

  const onChangeValue = (e: any) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <Label>{label}</Label>
      <Container
        iconSrc={iconSrc}
        onChange={onChangeValue}
        isEmailValid={isEmailValid}
      >
        <InputBox value={email} placeholder={placeholder} />
        <Span isEmailValid={isEmailValid}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/alert-circle-input.svg" alt="error icon" />
        </Span>
      </Container>
      <Hint isEmailValid={isEmailValid}>{hint}</Hint>
      <ErrorMessage isEmailValid={isEmailValid}>{error} </ErrorMessage>
    </>
  );
}
