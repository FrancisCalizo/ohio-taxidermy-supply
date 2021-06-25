import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { darken, lighten } from 'polished';
import { useRouter } from 'next/router';

import { NavLink } from 'components/layout/Navbar';
import { theme } from 'components/Theme';
import { middleRoutes } from 'components/utils/routes';

interface MobileNavMiddleDropdownProps {
  setIsMiddleSelectionOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileNavMiddleDropdown({
  setIsMiddleSelectionOpen,
}: MobileNavMiddleDropdownProps) {
  return (
    <MobileMiddleNavLinksSmall onClick={() => setIsMiddleSelectionOpen((old) => !old)}>
      <NavLink>
        About Us
        <FontAwesomeIcon
          icon={faChevronDown}
          style={{ fontSize: 16, marginTop: 3, marginLeft: 10, color: theme.colors.pink }}
        />
      </NavLink>
    </MobileMiddleNavLinksSmall>
  );
}

interface MobileNavMiddleLinksProps {
  isMiddleSelectionOpen: boolean;
}

export function MobileNavMiddleLinks({ isMiddleSelectionOpen }: MobileNavMiddleLinksProps) {
  const router = useRouter();
  const ref = React.useRef();

  return (
    <div>
      <HamburgerLinks ref={ref} isHamburgerOpen={isMiddleSelectionOpen}>
        {middleRoutes.map((route, key) => (
          <HamburgerLink
            key={key}
            onClick={() => {
              // setIsHamburgerOpen(false);
              router.push(route.path);
            }}
          >
            {route.title}
          </HamburgerLink>
        ))}
      </HamburgerLinks>
    </div>
  );
}

const MobileMiddleNavLinksSmall = styled.div`
  display: block;

  @media (min-width: 1200px) {
    display: none;
  }

  @media (min-width: 500px) {
    display: none;
  }
`;

const HamburgerLinks = styled.div<{ isHamburgerOpen: boolean; ref: any }>`
  position: fixed;
  top: 82px;
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

  @media (min-width: 1200px) {
    display: none;
  }
`;

const HamburgerLink = styled.div`
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;
  border-bottom: black;
  font-weight: 400;
  color: ${(props) => props.theme.colors.purple};
  transition: background 250ms linear;
  border-bottom: 1px solid lightgray;

  &:hover {
    background: ${(props) => lighten(0.1, props.theme.colors.pink)};
    color: ${(props) => darken(0.1, props.theme.colors.purple)};
  }
`;
