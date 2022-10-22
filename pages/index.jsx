import styled from "styled-components";
import { Routes } from "@config/routes";
import * as M from "./dashboard/components";
import Popup from "reactjs-popup";
import { EmailApp } from "./dashboard/components/email-app";
import { OpenModal } from "./dashboard/components/open-modal";

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

const IssuesPage = () => {
  return (
    <div>
      <Header>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/logo-large.svg" alt="Prolog logo" />

        {/* TURN THIS INTO A BUTTON COMPONENT*/}
        <a href={Routes.projects}>Dashboard</a>
      </Header>

      <M.StyledPopup
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
            <M.Modal>
              <OpenModal
                className="popup-content"
                src="/icons/modal.svg"
                alt="email icon"
                title=" Contact Us Via Email"
                content="Any questions? Send us an email at prolog@profy.dev. We usually
                answer within 24 hours."
              />

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
              </M.ButtonWrapper>
            </M.Modal>
          </div>
        )}
      </M.StyledPopup>
    </div>
  );
};

export default IssuesPage;
