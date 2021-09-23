import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import Carousel from 'components/page-index/Carousel';

export default function Header() {
  const router = useRouter();

  return (
    <MainContainer>
      <Carousel />
    </MainContainer>
  );
}

const MainContainer = styled.div``;
