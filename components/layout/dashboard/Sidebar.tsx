import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { lighten } from 'polished';
import {
  faGlobeAmericas,
  faWindowMaximize,
  faEdit,
  faFileInvoice,
  faMoneyCheckAlt,
  faChartBar,
} from '@fortawesome/free-solid-svg-icons';

import { getPathName } from 'components/utils';

export const LINKS = ['Overview', 'Discover', 'Proposals', 'Conversions', 'Payments', 'Reporting'];
const ICONS = [
  faWindowMaximize,
  faGlobeAmericas,
  faEdit,
  faFileInvoice,
  faMoneyCheckAlt,
  faChartBar,
];

export default function Sidebar() {
  const router = useRouter();

  const [currentRoute, setCurrentRoute] = useState<any>(null);

  useEffect(() => {
    setCurrentRoute(getPathName(router.pathname, 'dashboard/'));
  }, [router.pathname]);

  return (
    <SidebarContainer>
      <SidebarLinks>
        {LINKS.map((link: string, key: number) => (
          <GLink key={key} href={key === 0 ? '/dashboard' : `/dashboard/${link.toLowerCase()}`}>
            <Li
              isCurrent={
                currentRoute === undefined && link === LINKS[0]
                  ? true
                  : currentRoute === link.toLowerCase()
              }
            >
              <FontAwesomeIcon
                icon={ICONS[key]}
                style={{ fontSize: 24, marginRight: '0.5rem', color: 'gray' }}
              />
              <div style={{ textTransform: 'capitalize' }}>{link}</div>
            </Li>
          </GLink>
        ))}
      </SidebarLinks>
    </SidebarContainer>
  );
}

export const SidebarContainer = styled.div`
  background: #f2f2f2;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0px;
  left: 0px;
  bottom: 0px;
  z-index: 99;
  width: 260px;
  padding: 2rem 0;
  box-sizing: border-box;
  overflow-y: auto;
  transition: all 300ms ease-in-out;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SidebarLinks = styled.div`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin-top: 40px;
`;

const Li = styled.li<{ isCurrent: boolean }>`
  font-size: 1rem;
  padding: 1rem 1.85rem;
  transition: all 0.1s ease-out;
  display: flex;
  align-items: center;
  background: ${(props) => (props.isCurrent ? props.theme.colors.teal : 'transparent')};
  color: ${(props) => (props.isCurrent ? '#fff' : 'inherit')};

  & svg {
    width: 40px !important;
    color: ${(props) => (props.isCurrent ? '#fff' : 'gray')} !important;
  }

  &:hover {
    background: ${(props) => lighten(0.075, props.theme.colors.teal)};
    cursor: pointer;
    color: #fff;

    & svg {
      color: #fff !important;
    }
  }

  & a {
    padding: 0.3rem;
    border-radius: 2px;
    background-position: right bottom;
    transition: all 0.1s ease-out;
  }
`;

export const GLink = styled(Link)`
  color: #000;
  border-bottom: 2px solid black;
  transition: all 300ms ease-in-out;
  text-transform: capitalize;
`;
