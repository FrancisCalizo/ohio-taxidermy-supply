import React from 'react';
import styled from 'styled-components';

import SiteLayout from 'components/layout/SiteLayout';
import { PageTitle } from 'components/utils/styled';

export default function Vending() {
  return (
    <MainContainer>
      <div className="title-container">
        <PageTitle>Vending</PageTitle>
      </div>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  padding: 0 1rem 1rem;

  & > .title-container {
    display: flex;
    justify-content: center;
  }
`;

Vending.getLayout = (page: any) => <SiteLayout>{page}</SiteLayout>;
