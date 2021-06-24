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

  const getBurgerOpen = (status: any) => {
    setIsBurgerOpen(status.isOpen);
  };

  // const handleClick = () => {
  //   setIsBurgerOpen(false);
  // };

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
      background: '#f00',
    },
  };

  return (
    <Menu styles={menuStyles} onStateChange={getBurgerOpen} isOpen={isBurgerOpen}>
      <SidebarLogoContainer>
        <Image src={`/appreciation.svg`} alt="logo" width={30} height={30} quality={50} />
        <div style={{ marginLeft: 10, fontFamily: 'Shadows Into Light' }}>CastMeApp</div>
      </SidebarLogoContainer>
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
  background: ${(props) => (props.isCurrent ? '#e20046 !important' : 'transparent !important')};
  color: ${(props) => (props.isCurrent ? '#fff !important' : 'inherit !important')};

  &:hover {
    background: ${lighten(0.45, '#e20046')} !important;
  }

  & > a {
    display: block !important;
    padding: 1rem 0 !important;
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
  width: 210px !important;
`;
