import React from 'react';
import styled from 'styled-components';

import SiteLayout from 'components/layout/SiteLayout';
import { PageTitle } from 'components/utils/styled';
import TalentCards from 'components/pages/talent/TalentCards';
import TalentSort from 'components/pages/talent/TalentSort';

export default function Talent() {
  return (
    <MainContainer>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <PageTitle>The Talent</PageTitle>
      </div>

      <TalentSort />
      <TalentCards />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  padding: 0 1rem 1rem;
`;

Talent.getLayout = (page: any) => <SiteLayout>{page}</SiteLayout>;
