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

const Container = styled.div<{ iconSrc: string; isInputValid: boolean }>`
  display: flex;
  max-width: 20rem;
  border: 1px solid
    ${({ isInputValid }) =>
      isInputValid ? color("gray", 300) : color("error", 300)};
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

const Span = styled.span<{ isInputValid: boolean }>`
  display: ${({ isInputValid }) => (isInputValid ? "none" : "inline")};
`;

const Hint = styled.p<{ isInputValid: boolean }>`
  margin-top: 0.375rem;
  ${textFont("sm", "regular")};
  color: ${color("gray", 500)};
  display: ${({ isInputValid }) => (isInputValid ? "" : "none")};
`;

const ErrorMessage = styled.p<{ isInputValid: boolean }>`
  margin: 0;
  ${textFont("sm", "regular")}
  color: ${({ isInputValid }) =>
    isInputValid ? color("gray", 500) : color("error", 500)};
  display: ${({ isInputValid }) => (isInputValid ? "none" : "")};
`;

export function Input({
  label,
  hint,
  iconSrc,
  error,
  placeholder,
}: InputProps) {
  const [isInputValid, setInputValid] = useState(true);

  const onChangeValue = (e: any) => {
    setInputValid(e.target.value);
  };

  return (
    <>
      <Label>{label}</Label>
      <Container
        iconSrc={iconSrc}
        onChange={onChangeValue}
        isInputValid={isInputValid}
      >
        <InputBox placeholder={placeholder} />
        <Span isInputValid={isInputValid}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/alert-circle-input.svg" alt="error icon" />
        </Span>
      </Container>
      <Hint isInputValid={isInputValid}>{hint}</Hint>
      <ErrorMessage isInputValid={!isInputValid}>{error}</ErrorMessage>
    </>
  );
}
