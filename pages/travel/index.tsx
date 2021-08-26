import React, { useState, createContext } from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';

import SiteLayout from 'components/layout/SiteLayout';
import OptInModal from 'components/pages/travel/OptInModal';
import TravelFilter from 'components/pages/travel/TravelFilter';
import TravelCards from 'components/pages/travel/TravelCards';
import { PageTitle } from 'components/utils/styled';
import { getTravelCoupons } from 'components/api/travel';

export const TravelContext = createContext({} as any);

export default function Travel() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState(null);
  const [categoryFilters, setCategoryFilters] = useState<any>([]);
  const [sort, setSort] = useState<any>('NONE');

  const { data, isLoading } = useQuery('travelCoupons', getTravelCoupons);

  if (isLoading) <h1>Loading</h1>;

  return (
    <TravelContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        data,
        categoryFilters,
        setCategoryFilters,
        sort,
        setSort,
        selectedCoupon,
        setSelectedCoupon,
      }}
    >
      <MainContainer>
        <div className="title-container">
          <PageTitle>Travel</PageTitle>
        </div>

        <div className="filter-container">
          <div className="filter">
            <TravelFilter />
          </div>
        </div>

        <GridContainer>
          <TravelCards />
        </GridContainer>
      </MainContainer>

      <OptInModal />
    </TravelContext.Provider>
  );
}

const MainContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem 1rem;

  & > .title-container {
    display: flex;
    justify-content: center;
    margin-bottom: -2rem;
  }

  .filter-container {
    display: flex;
    justify-content: center;
    margin: 0 0 1rem;

    & .filter {
      width: 400px;
      margin: 0.5rem 0;

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
