import React, { useEffect, useState, Fragment } from 'react';
import { Transition, TransitionStatus } from 'react-transition-group';
import styled from 'styled-components';

export const size = {
  sm: '425px',
  md: '768px',
  lg: '1024px',
  xl: '1440px',
};

export const device = {
  minSm: `(min-width: ${size.sm})`,
  minMd: `(min-width: ${size.md})`,
  minLg: `(min-width: ${size.lg})`,
  minXl: `(min-width: ${size.xl})`,
  maxSm: `(max-width: ${size.sm})`,
  maxMd: `(max-width: ${size.md})`,
  maxLg: `(max-width: ${size.lg})`,
  maxXl: `(max-width: ${size.xl})`,
};

export default function Navbar() {
  const [isNavColored, setisNavColored] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 150) {
      setisNavColored(true);
    } else {
      setisNavColored(false);
    }
  };

  const handleClick = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Fragment>
      <Transition in={isNavColored} timeout={500}>
        {(state) => (
          <Nav state={state} isHamburgerOpen={isHamburgerOpen}>
            <Container>
              <LogoContainer>Logo Here</LogoContainer>
              <Hamburger onClick={handleClick}>
                <BurgerLine isHamburgerOpen={isHamburgerOpen}></BurgerLine>
                <BurgerLine isHamburgerOpen={isHamburgerOpen}></BurgerLine>
                <BurgerLine isHamburgerOpen={isHamburgerOpen}></BurgerLine>
              </Hamburger>
              <NavLinks>
                <NavLink>
                  <div>Story</div>
                </NavLink>
                <NavLink>
                  <div>When & Where</div>
                </NavLink>
                <NavLink>
                  <div>Wedding Party</div>
                </NavLink>
                <NavLink>
                  <div>Gallery</div>
                </NavLink>
                <NavLink>
                  <div>Registry</div>
                </NavLink>
                <NavLink>
                  <div>FAQs</div>
                </NavLink>
                <NavLink>
                  <div>RSVP</div>
                </NavLink>
                <NavButton>
                  <span>Login</span>
                </NavButton>
              </NavLinks>
            </Container>
          </Nav>
        )}
      </Transition>
      <Transition in={isHamburgerOpen} timeout={0}>
        {(state) => (
          <HamburgerLinks state={state} isHamburgerOpen={isHamburgerOpen}>
            <HamburgerLink
              onClick={() => {
                setIsHamburgerOpen(false);
              }}
            >
              Home
            </HamburgerLink>
            <HamburgerLink
              onClick={() => {
                setIsHamburgerOpen(false);
              }}
            >
              Story
            </HamburgerLink>
            <HamburgerLink
              onClick={() => {
                setIsHamburgerOpen(false);
              }}
            >
              When And Where
            </HamburgerLink>
            <HamburgerLink
              onClick={() => {
                setIsHamburgerOpen(false);
              }}
            >
              Wedding Party
            </HamburgerLink>
            <HamburgerLink
              onClick={() => {
                setIsHamburgerOpen(false);
              }}
            >
              Gallery
            </HamburgerLink>
            <HamburgerLink
              onClick={() => {
                setIsHamburgerOpen(false);
              }}
            >
              Registry
            </HamburgerLink>
            <HamburgerLink
              onClick={() => {
                setIsHamburgerOpen(false);
              }}
            >
              FAQs
            </HamburgerLink>
            <HamburgerLink
              onClick={() => {
                setIsHamburgerOpen(false);
              }}
            >
              RSVP
            </HamburgerLink>
            <HamburgerLink
              onClick={() => {
                setIsHamburgerOpen(false);
              }}
            >
              Contact
            </HamburgerLink>
          </HamburgerLinks>
        )}
      </Transition>
    </Fragment>
  );
}

export const Nav = styled.nav<{ state: TransitionStatus }>`
  background-color: white;
  /* opacity: ${(props) => (props.state === 'entering' ? 0.0 : 1.0)}; */
  /* height: ${(props) => (props.state === 'entering' ? 0 : '85px')}; */
  color: black;
  /* box-shadow: ${(props) =>
    props.isNavColored ? '0 3px 1px -1px var(--heart)' : '0 4px 7px -7px #dff9fb'}; */
  /* transition: height 500ms ease-in, opacity 100ms ease-in, background-color 100ms ease-in-out 100ms,
    color 100ms ease-in 300ms, box-shadow 100ms ease-in 300ms; */
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
  max-width: var(--container);
  margin: 0 auto;
  height: 100%;

  @media ${device.maxLg} {
    margin: auto 3rem;
  }
  @media ${device.maxMd} {
    margin: auto 1.2rem;
  }
  @media ${device.minLg} {
    justify-content: space-around;
  }
`;

const NavLinks = styled.div`
  display: none;

  @media ${device.minLg} {
    display: flex;
  }
`;

const Hamburger = styled.div`
  /*border: 1px solid ${(props) => (props.isNavColored ? 'var(--header-black)' : 'white')};*/
  border-radius: 10px;
  padding: 0.4rem 0.7rem;
  cursor: pointer;

  @media ${device.minLg} {
    display: none;
  }
`;

const HamburgerLinks = styled.div`
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
  /* opacity: ${(props) => (props.state === 'entered' ? 1 : 0)}; */

  transition: opacity 0.2s ease-in-out, background-color 1.4s;

  /* & div:nth-child(8) {
    border-bottom: none;
  } */

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

const BurgerLine = styled.div`
  width: 40px;
  height: 3px;
  background-color: black;
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

  transition: transform 500ms ease-in-out, opacity 500ms ease-in-out;
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
    border-bottom: 2px solid var(--heart);
    transform: scale(1.05);
    cursor: pointer;
  }
`;

// const LogoContainer = styled.div`
//   transition: border 500ms ease-in;
//   border: 1px solid ${(props) => (props.isNavColored ? 'var(--header-black)' : 'white')};
//   box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
//   padding: 0.3rem 0.7rem;
//   border-radius: 10px;
//   cursor: pointer;

//   @media ${device.maxLg} {
//     font-size: 0.9rem;
//   }
//   @media ${device.maxSm} {
//     font-size: 0.8rem;
//   }
// `;

const NavButton = styled.h3`
  background: #e20046;
  display: inline-block;
  padding: 0.5rem 1rem;
  margin-left: 0.4rem;
  color: white;
  text-transform: uppercase;
  transform: skewX(-20deg);

  & > span {
    transform: skewX(20deg);
  }
`;

const LogoContainer = styled(NavButton)`
  background: #000;
`;
