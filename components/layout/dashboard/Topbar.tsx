import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faBars } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import styled from 'styled-components';
import { Popover, PopoverState } from 'react-tiny-popover';

import MobileSidebar from 'components/layout/dashboard/MobileSidebar';
import UserDropdown from 'components/layout/dashboard/UserDropdown';

export default function Topbar() {
  const router = useRouter();

  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  return (
    <TopbarContainer>
      <div>
        <LogoContainer onClick={() => router.push('/')}>
          <Image src={`/circle-gradient.png`} alt="logo" width={45} height={45} quality={50} />
          <div className="title" style={{ marginLeft: 10, fontFamily: 'Shadows Into Light' }}>
            <span>Cast</span>
            <span>Me</span>
            <span>App</span>
          </div>
        </LogoContainer>

        <MenuContainer>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FontAwesomeIcon icon={faBars} style={{ fontSize: 30 }} />
          </div>

          <MobileSidebar setIsBurgerOpen={setIsBurgerOpen} isBurgerOpen={isBurgerOpen} />
        </MenuContainer>
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div>
          John Stamos
          <p style={{ margin: '0 0 0 1px', fontSize: 11, color: '#fff' }}>Marketing Manager</p>
        </div>

        {/* Currently, React-Tiny-Popover does not have SSR support. So we must 
        check to see if the window exists before we render the component */}
        {typeof window !== 'undefined' && (
          <Popover
            isOpen={isPopoverOpen}
            positions={['bottom']}
            content={(props: PopoverState) => <UserDropdown {...props} />}
            align="end"
            onClickOutside={() => setIsPopoverOpen(false)}
            containerStyle={{ top: '-15px', zIndex: '100' }}
          >
            <button className="user-button" onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
              <FontAwesomeIcon icon={faUserCircle} style={{ fontSize: 36 }} />
            </button>
          </Popover>
        )}
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
  background: linear-gradient(
    0deg,
    rgba(125, 140, 222, 1) 0%,
    rgba(149, 160, 214, 1) 48%,
    rgba(156, 166, 215, 1) 100%
  );

  border-bottom: 2px solid ${(props) => props.theme.colors.pink};
  transition: all 500ms ease-in-out;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.5rem;

  .user-button {
    margin-left: 0.5rem;
    border: none;
    background: transparent;
    cursor: pointer;
  }

  @media (max-width: 560px) {
    padding: 0.75rem;
  }
`;

const MenuContainer = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
`;

export const LogoContainer = styled.h3`
  position: relative;
  margin: 0 0.85rem 0 2rem;
  display: flex;
  align-items: center;
  border: 1px solid white;
  transform: none;
  border-radius: 100px;
  cursor: pointer;

  & .title {
    color: gray;
    position: absolute;
    left: -48px;
    top: 5px;
    font-size: 24px;

    & > span:nth-child(1) {
      color: ${(props) => props.theme.colors.teal};
    }
    & > span:nth-child(2) {
      color: #fff;
    }
    & > span:nth-child(3) {
      color: ${(props) => props.theme.colors.pink};
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
