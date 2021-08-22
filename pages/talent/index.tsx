import React, { useState } from 'react';
import styled from 'styled-components';

import SiteLayout from 'components/layout/SiteLayout';
import { PageTitle } from 'components/utils/styled';
import TalentCards from 'components/pages/talent/TalentCards';
import TalentSort from 'components/pages/talent/TalentSort';
import TalentFilter from 'components/pages/talent/TalentFilter';

export default function Talent() {
  const [categoryFilters, setCategoryFilters] = useState<any>([]);

  return (
    <MainContainer>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <PageTitle>Talent</PageTitle>
      </div>

      <div className="filter-container">
        <TalentFilter categoryFilters={categoryFilters} setCategoryFilters={setCategoryFilters} />
      </div>

      <div className="sort-container">
        <TalentSort />
      </div>
      <TalentCards />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  padding: 0 1rem 1rem;

  .sort-container {
    display: flex;
    justify-content: flex-end;
  }

  .filter-container {
    max-width: 300px;
    margin: 0 auto;
  }
`;

Talent.getLayout = (page: any) => <SiteLayout>{page}</SiteLayout>;
