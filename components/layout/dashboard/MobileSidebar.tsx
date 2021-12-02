import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { lighten } from 'polished';
import { slide as Menu } from 'react-burger-menu';

import { TAXIDERMIST_LINKS } from 'components/layout/dashboard/Sidebar';
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
      width: '100%',
      textAlign: 'center',
    },
    bmCross: {
      background: '#000',
    },
  };

  return (
    <Menu
      styles={menuStyles}
      onStateChange={(status: any) => setIsBurgerOpen(status.isOpen)}
      isOpen={isBurgerOpen}
    >
      <LogoContainer onClick={() => router.push('/')}>
        <Image src={`/images/logo-4.png`} alt="logo" width={135} height={60} quality={50} />
      </LogoContainer>

      {TAXIDERMIST_LINKS.map((link: { title: string; url: string }, key: number) => (
        <BurgerContainer
          key={key}
          isCurrent={
            currentRoute === undefined && link.url === TAXIDERMIST_LINKS[0].url
              ? true
              : currentRoute === link.url.toLowerCase()
          }
        >
          <BurgerLink
            className="menu-item"
            href={
              key === 0
                ? '/taxidermist/dashboard'
                : `/taxidermist/dashboard/${link.url.toLowerCase()}`
            }
          >
            {link.title}
          </BurgerLink>
        </BurgerContainer>
      ))}
    </Menu>
  );
}

const BurgerLink = styled(Link)<{ className: string; href: string }>``;

const BurgerContainer = styled.div<{ isCurrent: boolean }>`
  background: ${(props) =>
    props.isCurrent ? `${props.theme.colors.orange} !important` : 'transparent !important'};
  color: ${(props) => (props.isCurrent ? '#fff !important' : 'inherit !important')};

  &:hover {
    background: ${(props) => lighten(0.075, props.theme.colors.orange)} !important;
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

  @media (max-width: 768px) {
    display: none;
  }
`;
