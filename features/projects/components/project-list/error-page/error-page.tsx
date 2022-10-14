import React from "react";
import {
  AlertIcon,
  AlertWrapper,
  ArrowIcon,
  Container,
  Message,
  RefreshButton,
  Wrapper,
} from "./error-style";

export function ErrorPage() {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <Container>
      <Wrapper>
        <AlertWrapper>
          <AlertIcon src={"/icons/alert-circle.svg"} alt="alert" />
          <Message>There was a problem while loading the project data</Message>
        </AlertWrapper>

        <RefreshButton onClick={refreshPage}>
          Try again
          <ArrowIcon src={"/icons/refresh-arrow.svg"} alt="arrow" />
        </RefreshButton>
      </Wrapper>
    </Container>
  );
}
