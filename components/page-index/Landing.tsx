import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

export default function Header() {
  const router = useRouter();

  return (
    <MainContainer>
      <h1>Main Container</h1>
    </MainContainer>
  );
}

const MainContainer = styled.div``;
