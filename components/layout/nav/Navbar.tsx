import React, { useState, Fragment } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styled from 'styled-components';
import { darken, lighten } from 'polished';

import { device } from 'components/utils/mediaQueries';
import { middleRoutes, routes } from 'components/utils/routes';
import MobileNavLinks from 'components/layout/nav/MobileNavLinks';
import MobileNavMiddleDropdown, {
  MobileNavMiddleLinks,
} from 'components/layout/nav/MobileNavMiddleLinks';

export default function Navbar() {
  const router = useRouter();
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isMiddleSelectionOpen, setIsMiddleSelectionOpen] = useState(false);

  return (
    <Fragment>
      <Nav isHamburgerOpen={isHamburgerOpen}>
        <Container>
          <LogoContainer onClick={() => router.push('/')}>
            <Image
              src={`/images/logo.png`}
              alt="logo"
              width={50}
              height={50}
              quality={50}
              layout="fixed"
            />
            <div className="title" style={{ marginLeft: 10, fontFamily: 'Shadows Into Light' }}>
              <span>Cast</span>
              <span>Me</span>
              <span>App</span>
            </div>
          </LogoContainer>

          {/* Browser Display */}
          <NavLinks>
            {[...middleRoutes, ...routes].map((route, key) => (
              <React.Fragment key={key}>
                {!['Login', 'Contact'].includes(route.title) && (
                  <NavLink key={key} onClick={() => router.push(route.path)}>
                    {route.title}
                  </NavLink>
                )}

                {route.title === 'Login' && (
                  <LoginButton isMobile={false} key={key} onClick={() => router.push(route.path)}>
                    {route.title}
                  </LoginButton>
                )}

                {route.title === 'Contact' && (
                  <ContactButton key={key} onClick={() => router.push(route.path)}>
                    {route.title}
                  </ContactButton>
                )}
              </React.Fragment>
            ))}
          </NavLinks>

          {/* Mobile Display */}
          <MobileLinks>
            {middleRoutes.map((route, key) => (
              <NavLink key={key} onClick={() => router.push(route.path)}>
                {route.title}
              </NavLink>
            ))}
          </MobileLinks>

          {/* Display middle dropdown when smallest media */}
          <MobileNavMiddleDropdown
            isMiddleSelectionOpen={isMiddleSelectionOpen}
            setIsMiddleSelectionOpen={setIsMiddleSelectionOpen}
          />

          <div className="right-container">
            {/* Login button that is displayed outside of hamburger on mobile */}
            <LoginButton onClick={() => router.push('/login')}>Login</LoginButton>

            <Hamburger>
              <div
                className="burger-line"
                role="button"
                tabIndex={0}
                onKeyDown={() => setIsHamburgerOpen(!isHamburgerOpen)}
                onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
              >
                <BurgerLine className="burger-line" isHamburgerOpen={isHamburgerOpen} />
                <BurgerLine className="burger-line" isHamburgerOpen={isHamburgerOpen} />
                <BurgerLine className="burger-line" isHamburgerOpen={isHamburgerOpen} />
              </div>
            </Hamburger>
          </div>
        </Container>
      </Nav>

      <MobileNavLinks
        routes={routes}
        isHamburgerOpen={isHamburgerOpen}
        setIsHamburgerOpen={setIsHamburgerOpen}
        isMiddleSelectionOpen={isMiddleSelectionOpen}
      />

      <MobileNavMiddleLinks
        isMiddleSelectionOpen={isMiddleSelectionOpen}
        setIsMiddleSelectionOpen={setIsMiddleSelectionOpen}
        isHamburgerOpen={isHamburgerOpen}
      />
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
    margin: auto 0.75rem;
  }

  & .right-container {
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 1200px) {
      display: none !important;
    }
  }
`;

export const NavLinks = styled.div`
  display: none;

  @media (min-width: 1200px) {
    display: flex;
  }
`;

const BurgerLine = styled.div<{ isHamburgerOpen: boolean }>`
  width: 40px;
  height: 2px;
  background-color: ${(props) => props.theme.colors.purple};
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

  transition: transform 300ms ease-in-out, opacity 300ms ease-in-out, background 200ms linear;
`;

const Hamburger = styled.div`
  border-radius: 10px;
  padding: 0.4rem 0.7rem;
  display: flex;
  justify-content: flex-end;

  &:hover {
    ${BurgerLine} {
      background: ${(props) => props.theme.colors.pink};
    }
  }

  & > div {
    cursor: pointer;
  }

  @media (min-width: 1200px) {
    display: none;
  }
`;

export const NavLink = styled.button`
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

  ${(props) => props.theme.global.setFocus(props.theme.colors.purple)}
`;

export const MobileLinks = styled(NavLinks)`
  display: flex;

  @media (min-width: 1200px) {
    display: none;
  }

  @media (max-width: 649px) {
    display: none;
  }
`;

const LoginButton = styled.button<{ isMobile?: any }>`
  margin: 1rem 0.6rem;
  padding: 0.85rem 1.25rem;
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 500;
  transform: translateY(3px);
  border: ${(props) => `2px solid ${props.theme.colors.pink}`};
  background: transparent;
  color: ${(props) => props.theme.colors.pink};
  border-radius: 50px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: color 250ms linear, background 250ms linear;
  display: ${({ isMobile }) => (isMobile ? 'none' : 'block')};

  &:hover {
    background: ${(props) => lighten(0.03, props.theme.colors.pink)};
    color: #fff;
  }

  ${(props) => props.theme.global.setFocus(props.theme.colors.pink)}

  @media (max-width: 700px) {
    padding: 0.85rem 1rem;
    font-size: 0.8rem;
  }
`;

const ContactButton = styled(LoginButton)`
  background: ${(props) => props.theme.colors.pink};
  color: #fff;

  &:hover {
    background: ${(props) => darken(0.1, props.theme.colors.pink)};
  }
`;

export const LogoContainer = styled.h3`
  margin: 0 0.85rem 0 2rem;
  display: flex;
  align-items: center;
  transform: none;
  border-radius: 100px;
  cursor: pointer;

  img {
    border-radius: 50px;
    border: 1px solid rgba(0, 0, 0, 0.1) !important;
  }

  & .title {
    font-size: 30px;

    & > span:nth-child(1) {
      color: ${(props) => props.theme.colors.teal};
    }
    & > span:nth-child(2) {
      color: ${(props) => props.theme.colors.yellow};
    }
    & > span:nth-child(3) {
      color: ${(props) => props.theme.colors.pink};
    }
    @media (max-width: 530px) {
      display: none;
    }
  }

  @media (max-width: 700px) {
    margin: 0 0.85rem 0 0;
  }
`;
