import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';

import SiteLayout from 'components/layout/SiteLayout';
import EventCards from 'components/pages/events/EventCards';
import LoadingSpinner from 'components/layout/LoadingSpinner';
import { PageTitle } from 'components/utils/styled';
import { getEvents } from 'components/api/events';

export default function Events() {
  const { data, isLoading } = useQuery('events', getEvents);

  if (isLoading) <LoadingSpinner />;

  return (
    <>
      <MainContainer>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <PageTitle>Events</PageTitle>
        </div>

        <GridContainer>
          <EventCards data={data} />
        </GridContainer>
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  padding: 0 2rem 1rem;
  max-width: 1400px;
  margin: 0 auto;
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

Events.getLayout = (page: any) => <SiteLayout>{page}</SiteLayout>;
