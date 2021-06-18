import React, { useState, Fragment } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { darken, lighten } from 'polished';

import { device } from 'components/utils/mediaQueries';

export default function Navbar() {
  const router = useRouter();
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  return (
    <Fragment>
      <Nav isHamburgerOpen={isHamburgerOpen}>
        <Container>
          <LogoContainer>
            <Image src={`/appreciation.svg`} alt="logo" width={30} height={30} quality={50} />
            <div style={{ marginLeft: 10 }}>Influencer App</div>
          </LogoContainer>
          <Hamburger onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}>
            <BurgerLine isHamburgerOpen={isHamburgerOpen}></BurgerLine>
            <BurgerLine isHamburgerOpen={isHamburgerOpen}></BurgerLine>
            <BurgerLine isHamburgerOpen={isHamburgerOpen}></BurgerLine>
          </Hamburger>
          <NavLinks>
            <NavLink>
              <div>About Us</div>
            </NavLink>
            <NavLink>
              <div>Our Work</div>
            </NavLink>
            <NavLink>
              <div>Resources</div>
            </NavLink>
            <NavLink>
              <div>Contact</div>
            </NavLink>
            <NavButton onClick={() => router.push('/login')}>
              <span>Login</span>
            </NavButton>
          </NavLinks>
        </Container>
      </Nav>
      <HamburgerLinks isHamburgerOpen={isHamburgerOpen}>
        <HamburgerLink
          onClick={() => {
            setIsHamburgerOpen(false);
          }}
        >
          About Us
        </HamburgerLink>
        <HamburgerLink
          onClick={() => {
            setIsHamburgerOpen(false);
          }}
        >
          Our Work
        </HamburgerLink>
        <HamburgerLink
          onClick={() => {
            setIsHamburgerOpen(false);
          }}
        >
          Resources
        </HamburgerLink>
        <HamburgerLink
          onClick={() => {
            setIsHamburgerOpen(false);
          }}
        >
          Contact
        </HamburgerLink>
        <HamburgerLink
          onClick={() => {
            setIsHamburgerOpen(false);
            router.push('/login');
          }}
        >
          Login
        </HamburgerLink>
      </HamburgerLinks>
    </Fragment>
  );
}

export const Nav = styled.nav<{ isHamburgerOpen: boolean }>`
  background-color: white;
  color: black;
  box-shadow: 0 4px 4px -3px #000;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 15;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 3rem;
  height: 100%;

  @media ${device.maxLg} {
    margin: auto 3rem;
  }
  @media ${device.maxMd} {
    margin: auto 1.2rem;
  }
`;

const NavLinks = styled.div`
  display: none;

  @media ${device.minLg} {
    display: flex;
  }
`;

const BurgerLine = styled.div<{ isHamburgerOpen: boolean }>`
  width: 40px;
  height: 3px;
  background-color: gray;
  margin: 8px 0;
  border-radius: 5px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.13), 0 2px 3px 0 rgba(0, 0, 0, 0.15);

  &:nth-child(1) {
    opacity: ${(props) => (props.isHamburgerOpen ? 0 : 1)};
  }

  &:nth-child(2) {
    transform: ${(props) => (props.isHamburgerOpen ? 'rotate(45deg)' : 'rotate(0)')};
  }

  &:nth-child(3) {
    transform: ${(props) =>
      props.isHamburgerOpen ? 'rotate(-45deg) translate(7px, -8px);' : 'rotate(0)'};
  }

  transition: transform 300ms ease-in-out, opacity 300ms ease-in-out, background 300ms linear;
`;

const Hamburger = styled.div`
  border-radius: 10px;
  padding: 0.4rem 0.7rem;
  cursor: pointer;

  &:hover {
    ${BurgerLine} {
      background: #e20046;
    }
  }

  @media ${device.minLg} {
    display: none;
  }
`;

const HamburgerLinks = styled.div<{ isHamburgerOpen: boolean }>`
  position: fixed;
  top: 85px;
  z-index: 10;
  width: 100%;
  display: ${(props) => (props.isHamburgerOpen ? 'flex' : 'none')};
  text-align: center;
  align-content: center;
  flex-wrap: wrap;
  text-transform: uppercase;
  font-weight: 700;
  background: white;
  color: black;
  z-index: 20;

  transition: opacity 0.2s ease-in-out, background-color 1.4s;

  @media ${device.minLg} {
    display: none;
  }
`;

const HamburgerLink = styled.div`
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;
  border-bottom: black;

  &:hover {
    background: 'rgba(235,235,235)';
  }
`;

const NavLink = styled.div`
  margin: 1rem 0.85rem;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 700;
  transform: translateY(3px);

  & > div {
    padding: 1rem 0;
  }

  & > div:hover {
    color: #e20046;
    cursor: pointer;
  }
`;

const NavButton = styled.h3`
  background: #e20046;
  display: inline-block;
  padding: 0.5rem 1rem;
  margin-left: 0.7rem;
  color: white;
  text-transform: uppercase;
  transform: skewX(-20deg);
  cursor: pointer;

  &:hover {
    background: ${darken(0.05, '#e20046')};
  }

  & > span {
    transform: skewX(20deg);
  }
`;

export const LogoContainer = styled(NavButton)`
  display: flex;
  align-items: center;
  background: #000;
  transform: none;
  text-transform: lowercase;
  border-radius: 2px;

  & > span {
    transform: none;
  }

  &:hover {
    background: ${lighten(0.05, '#000')};
  }
`;
