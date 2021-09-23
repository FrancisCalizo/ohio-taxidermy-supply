import React from 'react';
import styled from 'styled-components';

import Carousel from 'components/page-index/Carousel';
import IconButtonSection from 'components/page-index/IconButtonSection';
import Workflow from 'components/page-index/Workflow';

export default function Header() {
  return (
    <MainContainer>
      <Carousel />
      <IconButtonSection />
      <Workflow />
    </MainContainer>
  );
}

const MainContainer = styled.div``;
