import styled from "styled-components";
import { color, space, textFont } from "@styles/theme";
import { Button } from "@features/ui";

export const Container = styled.div`
  border: 1px solid ${color("error", 300)};
  border-radius: ${space(2)};
  background: ${color("error", 25)};
  padding: ${space(4, 0)};
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: ${space(4)};
`;

export const AlertWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;
export const AlertIcon = styled.img`
  padding-right: ${space(3)};
`;

export const Message = styled.div`
  color: ${color("error", 700)};
  ${textFont("sm", "medium")};
  padding-right: ${space(3)};
`;

export const RefreshButton = styled(Button)`
  display: flex;
  justify-content: flex-end;
  color: ${color("error", 700)};
  ${textFont("sm", "medium")};
  padding-right: ${space(4)};

  @media (max-width: 40em) {
    justify-content: center;
    align-items: center;
    white-space: nowrap;
  }
`;
export const ArrowIcon = styled.img`
  padding-left: ${space(2)};
`;
