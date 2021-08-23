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

      <div className="filter-container">
        <TalentFilter categoryFilters={categoryFilters} setCategoryFilters={setCategoryFilters} />
      </div>

      <div className="sort-container">
        <div>
          <TalentSort sort={sort} setSort={setSort} />
        </div>
      </div>
      <TalentCards />

      <div className="sub-heading">
        <h4>Interested in joining the talent pool?</h4>
        <Link href="/signup?signupType=influencer">
          <JoinNowButton>Sign Up</JoinNowButton>
        </Link>
      </div>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  padding: 0 1rem 1rem;

  .sub-heading {
    text-align: center;
    margin: 2.5rem 0 1rem;

    h4 {
      font-size: 0.9rem;
      margin-bottom: 0.5rem;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.gray};
    }
  }

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

const JoinNowButton = styled.button`
  display: block;
  width: 120px;
  background: ${(props) => props.theme.colors.teal};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
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
