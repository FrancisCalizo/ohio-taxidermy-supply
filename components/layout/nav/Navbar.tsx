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
    </Nav>
  );
}

const Nav = styled.div`
  background: ${({ theme }) => theme.colors.light};
  border-bottom: 2px solid ${({ theme }) => theme.colors.orange};
  box-shadow: ${({ theme }) => theme.colors.brown} 0px 0px 0px 4px;
  margin-bottom: 4px;

  .image-container {
    padding: 1.25rem 0;
    text-align: center;
  }
`;
