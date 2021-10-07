import React from 'react';
import styled from 'styled-components';

import DashboardLayout from 'components/layout/dashboard/DashboardLayout';
import JobCard from 'components/pages/dashboard/JobCard';

export default function JobsBoard() {
  return (
    <DashboardLayout>
      <TopContainer>
        <JobCardsContainer>
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </JobCardsContainer>
      </TopContainer>
    </DashboardLayout>
  );
}

const TopContainer = styled.div``;

const JobCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem 1rem;

  @media (max-width: 1050px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 810px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
