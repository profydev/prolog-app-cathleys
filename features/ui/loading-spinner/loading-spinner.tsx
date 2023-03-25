import React from "react";
import { Container, Loader } from "./loading-spinner.style";

export function LoadingSpinner() {
  return (
    <Container>
      <Loader data-cy="loader" />
    </Container>
  );
}
