import React, { useState, Fragment } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styled from 'styled-components';
import { darken, lighten } from 'polished';

import { device } from 'components/utils/mediaQueries';
import { middleRoutes, routes } from 'components/utils/routes';

export default function Navbar() {
  const router = useRouter();
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  return (
    <Fragment>
      <Nav isHamburgerOpen={isHamburgerOpen}>
        <Container>
          <LogoContainer>
            <Image src={`/appreciation.svg`} alt="logo" width={30} height={30} quality={50} />
            <div style={{ marginLeft: 10, fontFamily: 'Shadows Into Light' }}>CastMeApp</div>
          </LogoContainer>

          {/* Browser Display */}
          <NavLinks>
            {[...middleRoutes, ...routes].map((route, key) => (
              <NavLink key={key} onClick={() => router.push(route.path)}>
                {route.title}
              </NavLink>
            ))}
          </NavLinks>

          {/* Mobile Display */}
          <MobileMiddleNavLinks>
            {middleRoutes.map((route, key) => (
              <NavLink key={key} onClick={() => router.push(route.path)}>
                {route.title}
              </NavLink>
            ))}
          </MobileMiddleNavLinks>

          <Hamburger onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}>
            <div>
              <BurgerLine isHamburgerOpen={isHamburgerOpen} />
              <BurgerLine isHamburgerOpen={isHamburgerOpen} />
              <BurgerLine isHamburgerOpen={isHamburgerOpen} />
            </div>
          </Hamburger>
        </Container>
      </Nav>

      <HamburgerLinks isHamburgerOpen={isHamburgerOpen}>
        {routes.map((route, key) => (
          <HamburgerLink
            key={key}
            onClick={() => {
              setIsHamburgerOpen(false);
              router.push(route.path);
            }}
          >
            {route.title}
          </HamburgerLink>
        ))}
      </HamburgerLinks>
    </Fragment>
  );
}

export const Nav = styled.nav<{ isHamburgerOpen: boolean }>`
  background-color: white;
  box-shadow: ${(props) => `0 4px 3px -1px ${props.theme.colors.pink}`};
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 15;
  max-height: 80px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 3rem;
  height: 100%;

  @media (max-width: 1200px) {
    margin: auto 3rem;
  }
  @media ${device.maxMd} {
    margin: auto 1.2rem;
  }
`;

const NavLinks = styled.div`
  display: none;

  @media (min-width: 1200px) {
    display: flex;
  }
`;

const MobileMiddleNavLinks = styled(NavLinks)`
  display: flex;

  @media (min-width: 1200px) {
    display: none;
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
  width: 145px;
  display: flex;
  justify-content: flex-end;

  &:hover {
    ${BurgerLine} {
      background: #e20046;
    }
  }

  @media (min-width: 1200px) {
    display: none;
  }
`;

const HamburgerLinks = styled.div<{ isHamburgerOpen: boolean }>`
  position: fixed;
  top: 78px;
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

  @media (min-width: 1200px) {
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

const NavLink = styled.button`
  margin: 1rem 0.6rem;
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 500;
  transform: translateY(3px);
  border: none;
  background: transparent;
  color: ${(props) => props.theme.colors.purple};
  padding: 1rem 0.25rem;
  transition: color 400ms linear;
  border-bottom: 1.5px solid transparent;
  cursor: pointer;

  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 10px;
    content: '';
    display: block;
    height: 1px;
    left: 50%;
    position: absolute;
    background: ${(props) => darken(0.1, props.theme.colors.purple)};
    transition: width 300ms ease 0s, left 300ms ease 0s;
    width: 0;
  }

  &:hover:after {
    width: 100%;
    left: 0;
  }

  &:hover {
    color: ${(props) => darken(0.1, props.theme.colors.purple)};
  }
`;

export const LogoContainer = styled.h3`
  margin: 1rem 0.85rem;
  color: white;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background: ${(props) => props.theme.colors.teal};
  transform: none;
  text-transform: lowercase;
  border-radius: 2px;
  min-width: 145px;

  & > span {
    transform: none;
  }

  &:hover {
    background: ${(props) => darken(0.15, props.theme.colors.teal)};
  }
`;
