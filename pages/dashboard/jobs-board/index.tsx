import React from 'react';
import styled from 'styled-components';

import DashboardLayout from 'components/layout/dashboard/DashboardLayout';
import JobCard from 'components/pages/dashboard/JobCard';

export default function JobsBoard() {
  return (
    <DashboardLayout>
      <TopContainer>
        <JobCard />
      </TopContainer>
    </DashboardLayout>
  );
}

const TopContainer = styled.div``;
