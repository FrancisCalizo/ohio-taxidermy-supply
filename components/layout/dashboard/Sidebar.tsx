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

export default function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarLinks>
        <li>
          <div style={{ display: 'inline-block', width: 40 }}>
            <FontAwesomeIcon
              icon={faWindowMaximize}
              style={{ fontSize: 24, marginRight: '0.5rem', color: 'gray' }}
            />
          </div>
          <GLink href="/">Overview</GLink>
        </li>
        <li>
          <div style={{ display: 'inline-block', width: 40 }}>
            <FontAwesomeIcon
              icon={faGlobeAmericas}
              style={{ fontSize: 24, marginRight: '0.5rem', color: 'gray' }}
            />
          </div>
          <GLink href="/#">Discover</GLink>
        </li>
        <li>
          <div style={{ display: 'inline-block', width: 40 }}>
            <FontAwesomeIcon
              icon={faEdit}
              style={{ fontSize: 24, marginRight: '0.5rem', color: 'gray' }}
            />
          </div>
          <GLink href="/#">Proposals</GLink>
        </li>
        <li>
          <div style={{ display: 'inline-block', width: 40 }}>
            <FontAwesomeIcon
              icon={faFileInvoice}
              style={{ fontSize: 24, marginRight: '0.5rem', color: 'gray' }}
            />
          </div>
          <GLink href="/#">Conversions</GLink>
        </li>
        <li>
          <div style={{ display: 'inline-block', width: 40 }}>
            <FontAwesomeIcon
              icon={faMoneyCheckAlt}
              style={{ fontSize: 24, marginRight: '0.5rem', color: 'gray' }}
            />
          </div>
          <GLink href="/#">Payments</GLink>
        </li>
        <li>
          <div style={{ display: 'inline-block', width: 40 }}>
            <FontAwesomeIcon
              icon={faChartBar}
              style={{ fontSize: 24, marginRight: '0.5rem', color: 'gray' }}
            />
          </div>
          <GLink href="/#">Reporting</GLink>
        </li>
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

  a {
    text-decoration: none;
  }

  & div:nth-child(1) {
    & span {
      color: ${(props) => props.theme.textDark};
      font-size: 1.6rem;
      font-weight: 600;
      transition: all 300ms ease-in-out;
    }

    & p {
      color: ${(props) => props.theme.textLight};
      margin: 1rem 0 0;
      line-height: 1.4;
      font-size: 15px;
      transition: all 300ms ease-in-out;
    }
  }

  & div:nth-child(3) {
    color: ${(props) => props.theme.textLight};
    font-size: 15px;
    transition: all 300ms ease-in-out;

    & a {
      color: ${(props) => props.theme.bright};
      font-weight: 500;
      text-decoration: underline;
      transition: all 300ms ease-in-out;
    }

    & a:hover {
      color: ${(props) => props.theme.hoverBright};
      transition: color 0.2s ease-in-out;
    }

    & > div {
      margin-top: 1.4rem;
    }
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
    display: flex;
    align-items: center;
    transition: all 0.1s ease-out;

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
      background: linear-gradient(to right, ${(props) => props.theme.bright} 50%, transparent 50%);
      background-size: 202% 100%;
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
