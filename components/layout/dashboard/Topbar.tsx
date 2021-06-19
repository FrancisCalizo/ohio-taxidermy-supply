import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faBars } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { slide as Menu } from 'react-burger-menu';
import { darken } from 'polished';

export default function Topbar() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const getBurgerOpen = (status: any) => {
    setIsBurgerOpen(status.isOpen);
  };

  const handleClick = () => {
    setIsBurgerOpen(false);
  };

  const menuStyles = {
    bmBurgerButton: {
      position: 'fixed',
      height: '20px',
      width: '50px',
      top: '18px',
      left: '35px',
    },
    bmOverlay: {
      top: '0',
      left: '0',
    },
    bmMenuWrap: {
      display: isBurgerOpen ? 'block' : 'none',
      width: '300px',
      top: '0',
      left: '0',
    },
    bmMorphShape: {
      fill: '#fff',
    },
    bmItemList: {
      display: 'flex',
      width: '300px',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#fff',
    },
    bmItem: {
      display: 'inline-block',
      margin: '1rem 0',
    },
    bmCross: {
      background: '#f00',
    },
  };

  return (
    <TopbarContainer>
      <div>
        <LogoContainer>
          <Image src={`/appreciation.svg`} alt="logo" width={30} height={30} quality={50} />
          <div style={{ marginLeft: 10 }}>Influencer App</div>
        </LogoContainer>

        <MenuContainer>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FontAwesomeIcon icon={faBars} style={{ fontSize: 30 }} />

            <LogoContainerMobile>
              <Image src={`/appreciation.svg`} alt="logo" width={30} height={30} quality={50} />
              <div style={{ marginLeft: 10 }}>Influencer App</div>
            </LogoContainerMobile>
          </div>
          <Menu styles={menuStyles} onStateChange={getBurgerOpen} isOpen={isBurgerOpen}>
            <BurgerLink id="home" className="menu-item" href="/" onClick={handleClick}>
              Home
            </BurgerLink>
            <BurgerLink id="skills" className="menu-item" href="/skills" onClick={handleClick}>
              Skills
            </BurgerLink>
            <BurgerLink
              id="portfolio"
              className="menu-item"
              href="/portfolio"
              onClick={handleClick}
            >
              Portfolio
            </BurgerLink>
            <BurgerLink id="featured" className="menu-item" href="/featured" onClick={handleClick}>
              Featured
            </BurgerLink>
            <BurgerLinkA
              as="a"
              id="blog"
              className="menu-item"
              href="https://ohyoufrancybruh.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClick}
            >
              Blog
            </BurgerLinkA>
          </Menu>
        </MenuContainer>
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div>
          John Stamos
          <p style={{ margin: '0 0 0 1px', fontSize: 11, color: 'darkgray' }}>Marketing Manager</p>
        </div>
        <FontAwesomeIcon icon={faUserCircle} style={{ fontSize: 36, marginLeft: '1rem' }} />
      </div>
    </TopbarContainer>
  );
}

const TopbarContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  text-transform: uppercase;
  font-size: 1.2rem;
  background: #fff;
  border-bottom: 1px solid #ddd;
  transition: all 500ms ease-in-out;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.5rem;

  @media (max-width: 560px) {
    padding: 0.75rem;
  }
`;

const BurgerLink = styled(Link)<{ id: string; className: string; onClick: any }>`
  border-bottom: 2px solid transparent;
  color: #000;
  border-bottom: 2px solid black;
  transition: all 300ms ease-in-out;

  &:hover {
    color: ${(props) => props.theme.textLight};
    transition: color 0.2s ease-in-out;
  }
`;

const BurgerLinkA = styled(BurgerLink)`
  color: ${(props) => props.theme.textLight};
  font-weight: 400;
  border: none;
  transition: all 300ms ease-in-out;
`;

const MenuContainer = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
`;

const LogoContainer = styled.h4`
  display: flex;
  align-items: center;
  background: #e20046;
  text-transform: lowercase;
  border-radius: 2px;
  padding: 0.5rem 1rem;
  margin: 0 0 0 0.4rem;
  color: white;
  cursor: pointer;
  border: 1px solid #990030;

  &:hover {
    background: ${darken(0.05, '#e20046')};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const LogoContainerMobile = styled(LogoContainer)`
  @media (min-width: 768px) {
    display: none;
  }

  @media (max-width: 767px) {
    display: flex;
    padding: 0.25rem 0.75rem;
    margin: 0 0 0 1rem;
  }

  @media (max-width: 560px) {
    display: none;
  }
`;
