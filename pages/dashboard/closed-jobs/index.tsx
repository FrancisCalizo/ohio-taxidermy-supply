import React from 'react';

import styled from 'styled-components';

import DashboardLayout from 'components/layout/dashboard/DashboardLayout';
import ClosedJobs from 'components/pages/dashboard/ClosedJobs';

export default function ClosedJobsPage() {
  return (
    <DashboardLayout>
      <TopContainer>
        <ClosedJobs />
      </TopContainer>
    </DashboardLayout>
  );
}

const TopContainer = styled.div``;
