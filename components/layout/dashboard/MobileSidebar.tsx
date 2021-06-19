import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { lighten } from 'polished';
import { slide as Menu } from 'react-burger-menu';

import { LINKS } from 'components/layout/dashboard/Sidebar';

interface MobileSidebarProps {
  isBurgerOpen: boolean;
  setIsBurgerOpen: any;
}

export default function MobileSidebar({ isBurgerOpen, setIsBurgerOpen }: MobileSidebarProps) {
  const getBurgerOpen = (status: any) => {
    setIsBurgerOpen(status.isOpen);
  };

  // const handleClick = () => {
  //   setIsBurgerOpen(false);
  // };

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
      alignItems: 'center',
      background: '#fff',
    },
    bmItem: {
      display: 'inline-block',
    },
    bmCross: {
      background: '#f00',
    },
  };

  return (
    <Menu styles={menuStyles} onStateChange={getBurgerOpen} isOpen={isBurgerOpen}>
      <SidebarLogoContainer>
        <Image src={`/appreciation.svg`} alt="logo" width={30} height={30} quality={50} />
        <div style={{ marginLeft: 10 }}>Influencer App</div>
      </SidebarLogoContainer>
      {LINKS.map((link: string, key: number) => (
        <BurgerContainer key={key}>
          <BurgerLink
            className="menu-item"
            href={key === 0 ? '/dashboard' : `/dashboard/${link.toLowerCase()}`}
          >
            {link}
          </BurgerLink>
        </BurgerContainer>
      ))}
    </Menu>
  );
}

const BurgerLink = styled(Link)<{ className: string; href: string }>``;

const BurgerContainer = styled.div`
  margin: 1rem 0;

  & > a {
    color: #000;
    transition: all 300ms ease-in-out;

    &:hover {
      color: ${lighten(0.2, '#000')};
      transition: color 0.2s ease-in-out;
    }
  }
`;
const SidebarLogoContainer = styled.h4`
  display: flex !important;
  justify-content: center;
  align-items: center;
  background: #e20046;
  text-transform: lowercase;
  border-radius: 2px;
  padding: 0.5rem 1rem;
  margin: 3rem 0 !important;
  color: white;
  cursor: pointer;
  border: 1px solid #990030;
`;
