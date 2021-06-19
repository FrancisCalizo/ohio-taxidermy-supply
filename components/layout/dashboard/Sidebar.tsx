import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
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

const LINKS = ['Overview', 'Discover', 'Proposals', 'Conversions', 'Payments', 'Reporting'];
const ICONS = [
  faWindowMaximize,
  faGlobeAmericas,
  faEdit,
  faFileInvoice,
  faMoneyCheckAlt,
  faChartBar,
];

export default function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarLinks>
        {LINKS.map((link: string, key: number) => (
          <GLink key={key} href={key === 0 ? '/dashboard' : `/dashboard/${link.toLowerCase()}`}>
            <li>
              <FontAwesomeIcon
                icon={ICONS[key]}
                style={{ fontSize: 24, marginRight: '0.5rem', color: 'gray' }}
              />
              <div>{link}</div>
            </li>
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

  li {
    font-size: 1rem;
    padding: 1rem 1.85rem;
    transition: all 0.1s ease-out;
    display: flex;
    align-items: center;

    & svg {
      width: 40px !important;
    }

    &:hover {
      background: ${lighten(0.45, '#e20046')};
      cursor: pointer;

      & a {
        color: #000;
      }

      & svg {
        color: #e20046 !important;
      }
    }

    & a {
      padding: 0.3rem;
      border-radius: 2px;
      background-position: right bottom;
      transition: all 0.1s ease-out;
    }
  }
`;

export const GLink = styled(Link)`
  color: #000;
  border-bottom: 2px solid black;
  transition: all 300ms ease-in-out;
  text-transform: capitalize;
`;
