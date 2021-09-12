import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { darken, lighten } from 'polished';
import { useRouter } from 'next/router';

import { NavLink } from 'components/layout/nav/Navbar';
import { theme } from 'components/Theme';
import { middleRoutes } from 'components/utils/routes';
import useOnOutsideClick from 'components/hooks/useOnOutsideClick';

interface MobileNavMiddleDropdownProps {
  setIsMiddleSelectionOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMiddleSelectionOpen: boolean;
}

export default function MobileNavMiddleDropdown({
  isMiddleSelectionOpen,
  setIsMiddleSelectionOpen,
}: MobileNavMiddleDropdownProps) {
  return (
    <MobileMiddleNavLinksSmall
      className="middle-dropdown"
      onClick={() => setIsMiddleSelectionOpen((old) => !old)}
    >
      <NavLink className="middle-dropdown">
        About Us
        <FontAwesomeIcon
          icon={isMiddleSelectionOpen ? faChevronUp : faChevronDown}
          style={{ fontSize: 16, marginTop: 3, marginLeft: 12, color: theme.colors.pink }}
        />
      </NavLink>
    </MobileMiddleNavLinksSmall>
  );
}

interface MobileNavMiddleLinksProps {
  isMiddleSelectionOpen: boolean;
  setIsMiddleSelectionOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isHamburgerOpen: boolean;
  currentPathname: string;
}

export function MobileNavMiddleLinks({
  isMiddleSelectionOpen,
  setIsMiddleSelectionOpen,
  isHamburgerOpen,
  currentPathname,
}: MobileNavMiddleLinksProps) {
  const router = useRouter();
  const ref = React.useRef();

  useOnOutsideClick(ref, () => setIsMiddleSelectionOpen(false), {
    isMiddleSelectionOpen,
    isHamburgerOpen,
  });

  return (
    <div>
      <MiddleLinks ref={ref} isMiddleSelectionOpen={isMiddleSelectionOpen}>
        {middleRoutes.map((route, key) => (
          <MiddleLink
            key={key}
            currentPathname={currentPathname}
            path={route.path}
            onClick={() => {
              setIsMiddleSelectionOpen(false);
              router.push(route.path);
            }}
          >
            {route.title}
          </MiddleLink>
        ))}
      </MiddleLinks>
    </div>
  );
}

const MobileMiddleNavLinksSmall = styled.div`
  display: block;

  @media (min-width: 1200px) {
    display: none;
  }

  @media (min-width: 650px) {
    display: none;
  }
`;

const MiddleLinks = styled.div<{ isMiddleSelectionOpen: boolean; ref: any }>`
  position: fixed;
  top: 82px;
  z-index: 10;
  width: 100%;
  display: ${(props) => (props.isMiddleSelectionOpen ? 'flex' : 'none')};
  text-align: center;
  align-content: center;
  flex-wrap: wrap;
  text-transform: uppercase;
  font-weight: 700;
  background: white;
  color: black;
  z-index: 20;

  @media (min-width: 650px) {
    display: none;
  }
`;

const MiddleLink = styled.div<{ currentPathname: string; path: string }>`
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;
  border-bottom: black;
  font-weight: 400;
  background: ${({ theme, currentPathname, path }) =>
    currentPathname === path ? lighten(0.17, theme.colors.purple) : '#fff'};
  color: ${(props) => props.theme.colors.purple};
  transition: background 250ms linear;
  border-bottom: 1px solid lightgray;

  &:hover {
    background: ${(props) => lighten(0.1, props.theme.colors.pink)};
    color: ${(props) => darken(0.1, props.theme.colors.purple)};
  }
`;
