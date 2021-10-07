import React from 'react';
import styled from 'styled-components';

import DashboardLayout from 'components/layout/dashboard/DashboardLayout';

export default function JobsBoard() {
  return (
    <DashboardLayout>
      <TopContainer></TopContainer>
    </DashboardLayout>
  );
}

const TopContainer = styled.div``;
