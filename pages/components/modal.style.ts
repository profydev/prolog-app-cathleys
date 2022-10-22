import styled from "styled-components";
import { Button } from "@features/ui";
import { color, space, textFont } from "@styles/theme";
import Popup from "reactjs-popup";

export const StyledPopup = styled(Popup)`
  &-overlay {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(52, 64, 84, 0.6);
    backdrop-filter: blur(8px);

    /* animation */

    @keyframes anvil {
      0% {
        transform: scale(1) translateY(0px);
        opacity: 0;
        box-shadow: 0 0 0 rgba(241, 241, 241, 0);
      }
      1% {
        transform: scale(0.96) translateY(10px);
        opacity: 0;
        box-shadow: 0 0 0 rgba(241, 241, 241, 0);
      }
      100% {
        transform: scale(1) translateY(0px);
        opacity: 1;
        box-shadow: 0 0 500px rgba(241, 241, 241, 0);
      }
    }
    .popup-content {
      -webkit-animation: anvil 0.3s cubic-bezier(0.38, 0.1, 0.36, 0.9) forwards;
    }
  }
`;

export const Modal = styled.div`
  width: 25em;
  height: 18em;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  background: white;
  border-radius: 12px;
  box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.1),
    0px 8px 8px -4px rgba(16, 24, 40, 0.04);
  z-index: 1;

  @media (max-width: 26.563em) {
    width: 21.4375em;
  }
`;

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
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: ${space(8)};
`;

export const CancelButton = styled(Button)`
  color: ${color("gray", 700)};
  padding: 0.625rem 3.66rem;
  border: 1px solid ${color("gray", 300)};
  border-radius: 0.5rem;
  background: white;
  margin-right: 0.375rem;
  ${textFont("md", "medium")}

  &:hover {
    background: ${color("gray", 50)};
  }

  @media (max-width: 26.563em) {
    padding: 0.625rem 2.766rem;
  }
`;

export const OpenEmailButton = styled(CancelButton)`
  padding: 0.625rem 1.5rem;
  margin: 0 0 0 0.375rem;
  background: ${color("primary", 600)};

  &:hover {
    background: ${color("primary", 700)};
  }

  @media (max-width: 26.563em) {
    padding: 0.625rem 0.609rem;
  }
`;

export const Anchor = styled.a`
  text-decoration: none;
  color: white;
`;
