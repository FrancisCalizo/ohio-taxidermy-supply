import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

export default function Navbar() {
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
