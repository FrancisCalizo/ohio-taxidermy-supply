import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { slide as Menu } from 'react-burger-menu';

const Topbar = () => {
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
        <div>
          <span>Menu</span>
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
        </div>
        <div>
          <Link href="/">Some Link</Link>
        </div>
        <div>Another Link</div>
      </div>
    </TopbarContainer>
  );
};

export default Topbar;

export const TopbarContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  text-transform: uppercase;
  font-size: 1.2rem;
  color: ${(props) => props.theme.textDark};
  background: #fff;
  border-bottom: #000;
  transition: all 500ms ease-in-out;

  > div {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 2rem;
    transition: padding 500ms ease-in-out;

    > div:nth-child(2) {
      font-weight: 600;
    }
  }

  a {
    text-transform: uppercase;
    font-size: 1.2rem;
    color: ${(props) => props.theme.textDark};
    text-decoration: none;
    transition: all 300ms ease-in-out;
  }
`;

export const BurgerLink = styled(Link)<{ id: string; className: string; onClick: any }>`
  border-bottom: 2px solid transparent;
  color: #000;
  border-bottom: 2px solid black;
  transition: all 300ms ease-in-out;

  &:hover {
    color: ${(props) => props.theme.textLight};
    transition: color 0.2s ease-in-out;
  }
`;

export const BurgerLinkA = styled(BurgerLink)`
  color: ${(props) => props.theme.textLight};
  font-weight: 400;
  border: none;
  transition: all 300ms ease-in-out;
`;
