import React, { useState, createContext } from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';

import SiteLayout from 'components/layout/SiteLayout';
import VendingFilter from 'components/pages/vending/VendingFilter';
import { PageTitle } from 'components/utils/styled';
import { getTravelCoupons } from 'components/api/travel';

export const VendingContext = createContext({} as any);

export default function Vending() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [companyFilters, setCompanyFilters] = useState<any>([]);
  const [categoryFilters, setCategoryFilters] = useState<any>([]);
  const [postTypeFilters, setPostTypeFilters] = useState<any>([]);

  const { data, isLoading } = useQuery('travelCoupons', getTravelCoupons);

  if (isLoading) <h1>Loading</h1>;

  return (
    <VendingContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        data,
        companyFilters,
        setCompanyFilters,
        categoryFilters,
        setCategoryFilters,
        postTypeFilters,
        setPostTypeFilters,
        // selectedCoupon,
        // setSelectedCoupon,
      }}
    >
      <MainContainer>
        <div className="title-container">
          <PageTitle>Vending</PageTitle>
        </div>

        <div className="filter-container">
          <div className="filter">
            <VendingFilter />
          </div>
        </div>
      </MainContainer>
    </VendingContext.Provider>
  );
}

const MainContainer = styled.div`
  padding: 0 1rem 1rem;

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
  }
`;

Vending.getLayout = (page: any) => <SiteLayout>{page}</SiteLayout>;
