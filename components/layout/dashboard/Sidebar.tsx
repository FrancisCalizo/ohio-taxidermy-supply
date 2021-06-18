import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarLinks>
        <li>
          <GLink href="/">Home</GLink>
        </li>
        <li>
          <GLink href="/#">Discover</GLink>
        </li>
        <li>
          <GLink href="/#">Proposals</GLink>
        </li>
        <li>
          <GLink href="/#">Conversions</GLink>
        </li>
        <li>
          <GLink href="/#">Payments</GLink>
        </li>
        <li>
          <GLink href="/#">Reporting</GLink>
        </li>
      </SidebarLinks>
    </SidebarContainer>
  );
};

export default Sidebar;

export const SidebarContainer = styled.div`
  background: #fafafa;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0px;
  left: 0px;
  bottom: 0px;
  z-index: 99;
  width: 280px;
  padding: 2rem 1.85rem;
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
    text-transform: uppercase;
    margin: 1rem 0;
    font-weight: 500;
    letter-spacing: 1.4px;

    & a {
      padding: 0.3rem;
      border-radius: 2px;
      background: linear-gradient(to right, ${(props) => props.theme.bright} 50%, transparent 50%);
      background-size: 202% 100%;
      background-position: right bottom;
      transition: all 0.3s ease-out;
    }

    & a:hover {
      background-position: left bottom;
      color: ${(props) => props.theme.bgAlt};
    }
  }
`;

export const GLink = styled(Link)`
  color: #000;
  border-bottom: 2px solid black;
  transition: all 300ms ease-in-out;
`;
