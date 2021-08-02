import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { lighten } from 'polished';
import { slide as Menu } from 'react-burger-menu';

import { LINKS } from 'components/layout/dashboard/Sidebar';
import { getPathName } from 'components/utils';

interface MobileSidebarProps {
  isBurgerOpen: boolean;
  setIsBurgerOpen: any;
}

export default function MobileSidebar({ isBurgerOpen, setIsBurgerOpen }: MobileSidebarProps) {
  const router = useRouter();

  const [currentRoute, setCurrentRoute] = useState<any>(null);

  useEffect(() => {
    setCurrentRoute(getPathName(router.pathname, 'dashboard/'));
  }, [router.pathname]);

  const menuStyles = {
    bmBurgerButton: {
      position: 'fixed',
      height: '50px',
      width: '50px',
      top: '5px',
      left: '2px',
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
      width: '100% !important',
      textAlign: 'center',
    },
    bmCross: {
      background: '#EDBECD',
    },
  };

  return (
    <Menu
      styles={menuStyles}
      onStateChange={(status: any) => setIsBurgerOpen(status.isOpen)}
      isOpen={isBurgerOpen}
    >
      <LogoContainer onClick={() => router.push('/')}>
        <Image src={`/images/logo.png`} alt="logo" width={45} height={45} quality={50} />
        <div className="title" style={{ marginLeft: 10, fontFamily: 'Shadows Into Light' }}>
          <span>Cast</span>
          <span>Me</span>
          <span>App</span>
        </div>
      </LogoContainer>

      {LINKS.map((link: string, key: number) => (
        <BurgerContainer
          key={key}
          isCurrent={
            currentRoute === undefined && link === LINKS[0]
              ? true
              : currentRoute === link.toLowerCase()
          }
        >
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

const BurgerContainer = styled.div<{ isCurrent: boolean }>`
  background: ${(props) =>
    props.isCurrent ? `${props.theme.colors.teal} !important` : 'transparent !important'};
  color: ${(props) => (props.isCurrent ? '#fff !important' : 'inherit !important')};

  &:hover {
    background: ${(props) => lighten(0.075, props.theme.colors.teal)} !important;
    color: #fff !important;
  }

  & > a {
    display: block !important;
    padding: 1rem 0 !important;
  }
`;

export const LogoContainer = styled.div`
  margin: 3rem 0 !important;
  display: flex;
  align-items: center;
  transform: none;
  border-radius: 100px;
  cursor: pointer;
  width: 55px !important;

  img {
    border-radius: 50px;
    border: 1px solid rgba(0, 0, 0, 0.1) !important;
  }

  & .title {
    font-size: 24px;

    & > span:nth-child(1) {
      color: ${(props) => props.theme.colors.teal};
    }
    & > span:nth-child(2) {
      color: ${(props) => props.theme.colors.yellow};
    }
    & > span:nth-child(3) {
      color: ${(props) => props.theme.colors.pink};
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
