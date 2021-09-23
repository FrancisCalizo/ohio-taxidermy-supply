import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import Carousel from 'components/page-index/Carousel';
import IconButtonSection from 'components/page-index/IconButtonSection';

export default function Header() {
  const router = useRouter();

  return (
    <MainContainer>
      <Carousel />
      <IconButtonSection />
    </MainContainer>
  );
}

const MainContainer = styled.div``;
