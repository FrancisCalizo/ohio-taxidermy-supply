import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faBars } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import styled from 'styled-components';
import { darken } from 'polished';

import MobileSidebar from 'components/layout/dashboard/MobileSidebar';

export default function Topbar() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  return (
    <TopbarContainer>
      <div>
        <LogoContainer>
          <Image src={`/circle-gradient.png`} alt="logo" width={30} height={30} quality={50} />
          <div style={{ marginLeft: 10, fontFamily: 'Shadows Into Light' }}>CastMeApp</div>
        </LogoContainer>

        <MenuContainer>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FontAwesomeIcon icon={faBars} style={{ fontSize: 30 }} />

            <LogoContainerMobile>
              <Image src={`/circle-gradient.png`} alt="logo" width={30} height={30} quality={50} />
              <div style={{ marginLeft: 10, fontFamily: 'Shadows Into Light' }}>CastMeApp</div>
            </LogoContainerMobile>
          </div>

          <MobileSidebar setIsBurgerOpen={setIsBurgerOpen} isBurgerOpen={isBurgerOpen} />
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

const MenuContainer = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
`;

export const LogoContainer = styled.h4`
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
