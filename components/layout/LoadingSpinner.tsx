import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

export default function LoadingSpinner() {
  return (
    <MainContainer>
      <Image
        src={'/images/loading-spinner.gif'}
        layout="fixed"
        width={300}
        height={230}
        quality={50}
      />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
`;
