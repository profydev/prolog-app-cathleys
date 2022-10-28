import styled from "styled-components";
import { Routes } from "@config/routes";
import Popup from "reactjs-popup";
import * as M from "../features/ui/modal/index";

const Header = styled.header`
  width: 100%;
  height: 80px;
  padding: 0 2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
`;

const ContactButton = styled.button`
  position: absolute;
  bottom: 2.5rem;
  right: 2.5rem;
  padding: 1rem;
  background: #7f56d9;
  border-radius: 50%;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border: none;
  cursor: pointer;

  &:hover {
    background: #6941c6;
  }
`;

const StyledPopup = styled(Popup)`
  &-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(52, 64, 84, 0.6);
    backdrop-filter: blur(8px);
    animation: fadein 0.5s;

    /* animation */

    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    .text {
      -webkit-animation: anvil 0.3s cubic-bezier(0.38, 0.1, 0.36, 0.9) forwards;
    }
  }
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25rem;
  height: 18rem;
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.1),
    0px 8px 8px -4px rgba(16, 24, 40, 0.04);
  z-index: 1;
  transition: all 0.5s ease;

  @media (max-width: 26.75rem) {
    width: 21.438rem;
  }
`;

const IssuesPage = () => {
  return (
    <div>
      <Header>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/logo-large.svg" alt="Prolog logo" />
        <a href={Routes.projects}>Dashboard</a>
      </Header>

      {/* Contact Modal */}
      <StyledPopup
        trigger={
          <ContactButton data-cy="contact-button">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icons/message.svg" alt="Contact" />
          </ContactButton>
        }
        modal
      >
        {(close) => (
          <Modal>
            <M.Icon src="/icons/mail.svg" alt="Email Icon" />
            <M.Title> Contact Us Via Email </M.Title>
            <M.Text className="text">
              Any questions? Send us an email at prolog@profy.dev. We usually
              answer within 24 hours.
            </M.Text>
            <M.ButtonWrapper>
              <M.CancelButton
                onClick={() => {
                  console.log("modal closed ");
                  close();
                }}
                data-cy="cancel-button"
              >
                Cancel
              </M.CancelButton>
              <M.EmailButton
                text="Open Email App"
                href="mailto:support@prolog-app.com?subject='Support Request:'"
              />
            </M.ButtonWrapper>
          </Modal>
        )}
      </StyledPopup>
    </div>
  );
};

export default IssuesPage;
