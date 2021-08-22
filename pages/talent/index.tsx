import React, { useState } from 'react';
import styled from 'styled-components';

import SiteLayout from 'components/layout/SiteLayout';
import { PageTitle } from 'components/utils/styled';
import TalentCards from 'components/pages/talent/TalentCards';
import TalentSort from 'components/pages/talent/TalentSort';
import TalentFilter from 'components/pages/talent/TalentFilter';

export default function Talent() {
  const [categoryFilters, setCategoryFilters] = useState<any>([]);
  const [sort, setSort] = useState<any>('NONE');

  return (
    <MainContainer>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <PageTitle>Talent</PageTitle>
      </div>

      <div className="filter-container">
        <TalentFilter categoryFilters={categoryFilters} setCategoryFilters={setCategoryFilters} />
      </div>

      <div className="sort-container">
        <div>
          <TalentSort sort={sort} setSort={setSort} />
        </div>
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
    margin: 1rem 0;

    & > div:first-child {
      width: 220px;

      @media (max-width: 600px) {
        width: 100%;
      }
    }
  }

  .filter-container {
    max-width: 300px;
    margin: 0 auto;

    @media (max-width: 600px) {
      max-width: none;
    }
  }
`;

Talent.getLayout = (page: any) => <SiteLayout>{page}</SiteLayout>;
