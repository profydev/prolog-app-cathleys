import React, { useState } from "react";
import styled from "styled-components";
import { space, color, textFont } from "@styles/theme";
import { EmailButton } from "./email-button";

const Overlay = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(52, 64, 84, 0.6);
  backdrop-filter: blur(8px);
  animation: fadein 0.5s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Modal = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25rem;
  height: 18rem;
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.1),
    0px 8px 8px -4px rgba(16, 24, 40, 0.04);
  transition: all 0.5s ease;
  z-index: 1;
  @media (max-width: 26.75rem) {
    width: 21.438rem;
  }
`;

const Icon = styled.img`
  padding-top: ${space(6)};
`;

const Title = styled.div`
  display: flex;
  padding-top: ${space(5)};
  color: ${color("gray", 900)};
  ${textFont("lg", "medium")};
`;

const Text = styled.div`
  padding: ${space(2, 6, 0)};
  text-align: center;
  color: ${color("gray", 500)};
  ${textFont("sm", "regular")};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: ${space(8)};
  padding-bottom: ${space(6)};
  ${textFont("md", "medium")};
  transition: all 0.5s ease;
`;

const CancelButton = styled.button`
  padding: 0.719rem 3.656rem;
  margin-right: ${space(3)};
  border-radius: 0.5rem;
  border: 1px solid ${color("gray", 300)};
  color: ${color("gray", 700)};
  background: white;
  cursor: pointer;
  @media (max-width: 26.75rem) {
    padding: 0.656rem 2.766rem;
  }

  &:hover {
    color: ${color("gray", 600)};
  }
`;

export function ContactModal({ setShowModal }: any) {
  return (
    <Overlay onClick={() => setShowModal(false)}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Icon src="/icons/mail.svg" alt="Email Icon" />
        <Title> Contact Us Via Email </Title>
        <Text>
          Any questions? Send us an email at prolog@profy.dev. We usually answer
          within 24 hours.
        </Text>

        <Wrapper>
          <CancelButton
            data-cy="cancel-button"
            onClick={() => setShowModal(false)}
          >
            Cancel
          </CancelButton>

          <EmailButton
            href="mailto:support@prolog-app.com?subject='Support Request:'"
            label="Open Email App"
          />
        </Wrapper>
      </Modal>
    </Overlay>
  );
}
