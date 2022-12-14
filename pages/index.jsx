import React, { useState } from "react";
import styled from "styled-components";
import { Routes } from "@config/routes";
import { ButtonHeader } from "@features/ui/button-header/index";
import { MenuButton, MenuIcon } from "@features/ui/sidebar-navigation/index";
import { useHero } from "@features/landing page";
import * as H from "@features/landing page/components/hero-section";
import { ContactModal } from "@features/ui/modal";

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
  position: fixed;
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
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { data } = useHero();

  return (
    <div>
      <Header>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/logo-large.svg" alt="Prolog logo" />

        <MenuButton onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
          <a href={Routes.projects}>
            <MenuIcon src="/icons/menu-home.svg" alt="open sesame" />
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

      <ContactButton
        data-cy="contact-button"
        onClick={() => setShowModal(!showModal)}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/message.svg" alt="Contact" />
      </ContactButton>
      {showModal && <ContactModal setShowModal={setShowModal} />}
    </div>
  );
};

export default IssuesPage;
