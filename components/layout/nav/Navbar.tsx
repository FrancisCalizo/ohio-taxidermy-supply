import React, { useState, useEffect, Fragment } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

import { device } from 'components/utils/mediaQueries';

export default function Navbar() {
  const router = useRouter();

  return (
    <Nav>
      <div className="image-container">
        <Image src={`/images/logo.png`} alt="logo" width={216} height={145} quality={90} />
      </div>
      <div className="button-container">
        <Button variant="taxidermist">Taxidermist</Button>
        <Button variant="hunter">Hunter</Button>
      </div>
    </Nav>
  );
}

const Nav = styled.div`
  background: ${({ theme }) => theme.colors.dark};
  border-bottom: 2px solid ${({ theme }) => theme.colors.gold};
  box-shadow: ${({ theme }) => theme.colors.brown} 0px 0px 0px 3px;
  margin-bottom: 3px;

  .image-container {
    padding: 1rem 0 0;
    text-align: center;
  }

  .button-container {
    display: flex;
    max-width: 280px;
    margin: 0 auto;
  }
`;

const Button = styled.button<{ variant: 'taxidermist' | 'hunter' }>`
  display: block;
  width: 100%;
  background: ${({ theme, variant }) =>
    variant === 'taxidermist' ? theme.colors.green : theme.colors.gold};
  color: white;
  border: 0.5px solid white;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  margin: ${({ variant }) => (variant === 'taxidermist' ? '1rem 1rem 1rem 0' : '1rem 0 1rem 1rem')};
  font-size: 1rem;
  cursor: pointer;
  box-shadow: ${(props) => props.theme.button.boxShadow};
  transition: background 300ms ease-in-out, transform 150ms ease-in-out;

  &:hover {
    background: ${({ theme, variant }) =>
      variant === 'taxidermist'
        ? darken(0.05, theme.colors.green)
        : darken(0.1, theme.colors.gold)};
    transform: scale(1.02);
  }

  ${(props) => props.theme.global.setFocus(props.theme.colors.brown)}
`;
