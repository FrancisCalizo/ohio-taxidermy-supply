import React, { useState } from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';

import SiteLayout from 'components/layout/SiteLayout';
import { PageTitle } from 'components/utils/styled';
import TravelSort from 'components/pages/travel/TravelSort';
import TravelFilter from 'components/pages/travel/TravelFilter';
import TravelCards from 'components/pages/travel/TravelCards';
import { getTravelCoupons } from 'components/api/travel';

export default function Travel() {
  const [categoryFilters, setCategoryFilters] = useState<any>([]);
  const [sort, setSort] = useState<any>('NONE');

  const { data, isLoading } = useQuery('travelCoupons', getTravelCoupons);

  console.log(data);

  if (isLoading) <h1>Loading</h1>;

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

      <GridContainer>
        <TravelCards data={data} />
      </GridContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
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

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem 1rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 760px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

Travel.getLayout = (page: any) => <SiteLayout>{page}</SiteLayout>;
