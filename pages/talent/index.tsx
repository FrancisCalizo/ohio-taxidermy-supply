import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { darken } from 'polished';

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

      <div className="sort-filter-container">
        <div className="filter">
          <TalentFilter categoryFilters={categoryFilters} setCategoryFilters={setCategoryFilters} />
        </div>
        <div className="sort">
          <TalentSort sort={sort} setSort={setSort} />
        </div>
      </div>

      <TalentCards />

      <div className="join-now">
        <h4>Interested in joining the talent pool?</h4>
        <Link href="/signup?signupType=influencer">
          <JoinNowButton>Sign Up</JoinNowButton>
        </Link>
      </div>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  padding: 0 2rem 1rem;
  max-width: 1400px;
  margin: 0 auto;

  .join-now {
    text-align: center;
    margin: 2.5rem 0 1rem;

    h4 {
      font-size: 0.9rem;
      margin-bottom: 0.5rem;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.gray};
    }
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

  .filter-container {
    max-width: 300px;
    margin: 0 auto;

    @media (max-width: 600px) {
      max-width: none;
    }
  }
`;

const JoinNowButton = styled.button`
  display: block;
  width: 120px;
  background: ${(props) => props.theme.colors.teal};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  margin: 0 auto 2rem;
  font-size: calc(10px + (18 - 10) * ((100vw - 900px) / (1800 - 900)));
  cursor: pointer;
  box-shadow: ${(props) => props.theme.button.boxShadow};
  border: 1px solid ${(props) => darken(0.1, props.theme.colors.teal)};

  &:hover {
    background: ${(props) => darken(0.1, props.theme.colors.teal)};
  }

  ${(props) => props.theme.global.setFocus(props.theme.colors.teal)};

  @media (max-width: 1050px) {
    font-size: calc(10px + (14 - 10) * ((100vw - 600px) / (1050 - 600)));
  }

  @media (max-width: 810px) {
    font-size: 0.8rem;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

Talent.getLayout = (page: any) => <SiteLayout>{page}</SiteLayout>;
