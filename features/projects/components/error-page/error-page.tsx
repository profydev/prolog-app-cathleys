import React from "react";
import { useRouter } from "next/router";
import * as E from "./error.style";

export function ErrorPage() {
  const router = useRouter();

  return (
    <E.Container>
      <E.Wrapper>
        <E.AlertWrapper>
          <E.AlertIcon src={"/icons/alert-circle.svg"} alt="alert" />
          <E.Message>
            There was a problem while loading the project data
          </E.Message>
        </E.AlertWrapper>

        <E.RefreshButton onClick={() => router.reload()}>
          Try again
          <E.ArrowIcon src={"/icons/refresh-arrow.svg"} alt="arrow" />
        </E.RefreshButton>
      </E.Wrapper>
    </E.Container>
  );
}
