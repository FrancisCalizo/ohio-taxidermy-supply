import React from 'react';

import styled from 'styled-components';

import DashboardLayout from 'components/layout/dashboard/DashboardLayout';
import Reports from 'components/pages/dashboard/Reports';

export default function ReportsPage() {
  return (
    <DashboardLayout>
      <TopContainer>
        <Reports />
      </TopContainer>
    </DashboardLayout>
  );
}

const TopContainer = styled.div``;
