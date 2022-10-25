import styled from "styled-components";
import { Routes } from "@config/routes";
import Popup from "reactjs-popup";
import { OpenModal } from "../features/ui/modal/open-modal/index";
import { EmailApp } from "../features/ui/modal/email-app/index";
import { Button } from "@features/ui";
import { color, space, textFont } from "@styles/theme";

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

const Modal = styled.div`
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
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: ${space(8)};
`;

const CancelButton = styled(Button)`
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

const IssuesPage = () => {
  return (
    <div>
      <Header>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/logo-large.svg" alt="Prolog logo" />

        {/* TURN THIS INTO A BUTTON COMPONENT*/}
        <a href={Routes.projects}>Dashboard</a>
      </Header>

      <StyledPopup
        trigger={
          <ContactButton data-cy="contact-button">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icons/message.svg" alt="Contact" />
          </ContactButton>
        }
        modal
        nested
      >
        {(close) => (
          <div>
            <Modal>
              <OpenModal
                className="popup-content"
                src="/icons/modal.svg"
                alt="email icon"
                title=" Contact Us Via Email"
                content="Any questions? Send us an email at prolog@profy.dev. We usually
                answer within 24 hours."
              />

              <ButtonWrapper>
                <CancelButton
                  onClick={() => {
                    console.log("modal closed ");
                    close();
                  }}
                  data-cy="cancel-button"
                >
                  Cancel
                </CancelButton>
                <div>
                  <Popup
                    trigger={
                      <EmailApp
                        text="Open Email App"
                        href="mailto:support@prolog-app.com?subject='Support Request:'"
                      />
                    }
                  ></Popup>
                </div>
              </ButtonWrapper>
            </Modal>
          </div>
        )}
      </StyledPopup>
    </div>
  );
};

export default IssuesPage;
