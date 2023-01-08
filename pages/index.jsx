import React, { useState } from "react";
import styled from "styled-components";
import Popup from "reactjs-popup";
import { Routes } from "@config/routes";
import * as M from "@features/ui/modal/index";
import { ButtonHeader } from "@features/ui/button-header/index";
import { MenuButton, MenuIcon } from "@features/ui/sidebar-navigation/index";
import { useHero } from "@features/landing page/index";
import * as H from "../features/landing page/components/hero-section";

const Header = styled.header`
  display: flex;
  width: 100%;
  padding: 1.469rem 7rem;
  box-sizing: border-box;
  position: relative;
  justify-content: space-between;
  align-items: center;
  background: white;

  @media (max-width: 64rem) {
    padding: 1.219rem 0.75rem 1.219rem 1rem;
  }
`;

const ButtonDiv = styled.div`
  @media (max-width: 64rem) {
    display: none;
  }
`;

const Nav = styled.nav`
  display: flex;

  @media (max-width: 64rem) {
    display: none;
  }
`;

const LinkItems = styled.a`
  display: flex;
  flex: 1;
  text-decoration: none;
  padding: 0 1rem;
  font-weight: 500;
  color: #667085;
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
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data } = useHero();

  return (
    <div>
      <Header>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/logo-large.svg" alt="Prolog logo" />

        <MenuButton onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
          <a href={Routes.projects}>
            <MenuIcon src="/icons/menu-home.svg" alt="open dashboard" />
          </a>
        </MenuButton>

        <Nav isMobileMenuOpen={isMobileMenuOpen}>
          <LinkItems href="/">Home</LinkItems>
          <LinkItems href="/products">Products</LinkItems>
          <LinkItems href="/documentation">Documentation</LinkItems>
          <LinkItems href="/pricing">Pricing</LinkItems>
        </Nav>

        <ButtonDiv>
          <ButtonHeader label="Open Dashboard" href={Routes.projects} />
        </ButtonDiv>
      </Header>

      <H.Container>
        <H.Title>{data?.sections[0].title}</H.Title>
        <H.Subtitle>{data?.sections[0].subtitle}</H.Subtitle>
        <H.Image>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            data-cy="hero-image"
            src={`https://prolog-api.profy.dev${data?.sections[0].image.src}`}
            alt="Hero image"
          />
        </H.Image>
      </H.Container>

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
