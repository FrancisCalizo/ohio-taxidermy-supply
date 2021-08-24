import React, { useState } from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

import SiteLayout from 'components/layout/SiteLayout';
import { PageTitle } from 'components/utils/styled';
import TravelSort from 'components/pages/travel/TravelSort';
import TravelFilter from 'components/pages/travel/TravelFilter';

export default function Travel() {
  const [categoryFilters, setCategoryFilters] = useState<any>([]);
  const [sort, setSort] = useState<any>('NONE');

  return (
    <MainContainer>
      <div className="title-container">
        <PageTitle>Travel</PageTitle>
      </div>

      <div className="sort-filter-container">
        <div className="filter">
          <TravelFilter categoryFilters={categoryFilters} setCategoryFilters={setCategoryFilters} />
        </div>
        <div className="sort">
          <TravelSort sort={sort} setSort={setSort} />
        </div>
      </div>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  padding: 0 2rem 1rem;

  & > .title-container {
    display: flex;
    justify-content: center;
  }

  .sort-filter-container {
    display: flex;
    justify-content: space-between;
    margin: 0 0 1rem;

    & .sort {
      width: 215px;
      margin: 0.5rem 0;
    }

    & .filter {
      width: 400px;
      margin: 0.5rem 0;
    }

    & .filter,
    & .sort {
      @media (max-width: 800px) {
        width: 100%;
      }
    }

    @media (max-width: 800px) {
      flex-direction: column;
      width: 100%;
    }
  }
`;

Travel.getLayout = (page: any) => <SiteLayout>{page}</SiteLayout>;
