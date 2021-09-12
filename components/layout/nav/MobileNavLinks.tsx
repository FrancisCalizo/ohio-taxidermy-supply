import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { darken, lighten } from 'polished';

import useOnOutsideClick from 'components/hooks/useOnOutsideClick';

interface MobileNavLinkProps {
  routes: any[];
  isMiddleSelectionOpen: boolean;
  isHamburgerOpen: boolean;
  setIsHamburgerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  currentPathname: string;
}

export default function MobileNavLinks(props: MobileNavLinkProps) {
  const { routes, isHamburgerOpen, setIsHamburgerOpen, isMiddleSelectionOpen, currentPathname } =
    props;
  const router = useRouter();

  const ref = useRef();

  useOnOutsideClick(ref, () => setIsHamburgerOpen(false), {
    isMiddleSelectionOpen,
    isHamburgerOpen,
  });

  return (
    <div>
      <HamburgerLinks ref={ref} isHamburgerOpen={isHamburgerOpen}>
        {routes.map((route, key) => (
          <HamburgerLink
            key={key}
            currentPathname={currentPathname}
            path={route.path}
            onClick={() => {
              setIsHamburgerOpen(false);
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

const HamburgerLink = styled.div<{ currentPathname: string; path: string }>`
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
