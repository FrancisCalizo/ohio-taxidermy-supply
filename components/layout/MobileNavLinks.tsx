import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { darken, lighten } from 'polished';

import useOnOutsideClick from 'components/hooks/useOnOutsideClick';

interface MobileNavLinkProps {
  routes: any[];
  isHamburgerOpen: boolean;
  setIsHamburgerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileNavLinks(props: MobileNavLinkProps) {
  const { routes, isHamburgerOpen, setIsHamburgerOpen } = props;
  const router = useRouter();

  const ref = useRef();

  useOnOutsideClick(ref, () => setIsHamburgerOpen(false));

  return (
    <div>
      <HamburgerLinks ref={ref} isHamburgerOpen={isHamburgerOpen}>
        {routes.map((route, key) => (
          <HamburgerLink
            key={key}
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
