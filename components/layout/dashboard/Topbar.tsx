import React, { useState, useEffect } from 'react';
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

  // Popover was displaying odd console error on render
  // Using this eliminates the error
  useEffect(() => {
    setIsInitialLoad(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [userRole, setUserRole] = useState<'hunter' | 'taxidermist' | null>('taxidermist');
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(false);

  return (
    <TopbarContainer>
      <div>
        <LogoContainer onClick={() => router.push('/')}>
          <Image src={`/images/logo-4-white.png`} alt="logo" width={95} height={45} quality={50} />
        </LogoContainer>

        <MenuContainer>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FontAwesomeIcon icon={faBars} style={{ fontSize: 30, color: '#fff' }} />
          </div>

          <MobileSidebar setIsBurgerOpen={setIsBurgerOpen} isBurgerOpen={isBurgerOpen} />
        </MenuContainer>
      </div>

      <div className="right-section">
        <div>
          <span className="user-name">John Stamos</span>
          <p className="user-title">
            {userRole === 'hunter' && <>Hunter</>}
            {userRole === 'taxidermist' && <>Taxidermist</>}
          </p>
        </div>

        {/* Currently, React-Tiny-Popover does not have SSR support. So we must
        check to see if the window exists before we render the component */}
        {isInitialLoad && (
          <Popover
            isOpen={isPopoverOpen}
            positions={['bottom']}
            content={(props: PopoverState) => <UserDropdown {...props} />}
            align="end"
            onClickOutside={() => setIsPopoverOpen(false)}
            containerStyle={{ top: '-15px', zIndex: '100' }}
          >
            <button className="user-button" onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
              <FontAwesomeIcon icon={faUserCircle} style={{ fontSize: 36, color: '#fff' }} />
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
    rgba(36, 31, 33, 1) 0%,
    rgba(41, 35, 37, 1) 48%,
    rgba(55, 47, 50, 1) 100%
  );

  border-bottom: 2px solid ${(props) => props.theme.colors.orange};
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

  & .right-section {
    display: flex;
    align-items: center;

    & .user-name {
      color: #fff;
    }
    & .user-title {
      margin: 0 0 0 1px;
      font-size: 11px;
      color: ${({ theme }) => theme.colors.orange};
    }
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
    font-size: 24px;
    font-weight: 500;
    margin-left: 10px;
    color: #fff;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
