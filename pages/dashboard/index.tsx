import React from 'react';

import styled from 'styled-components';

import DashboardLayout from 'components/layout/dashboard/DashboardLayout';
import JobTickets from 'components/pages/dashboard/JobTickets';

export default function index() {
  return (
    <DashboardLayout>
      <JobTickets />
    </DashboardLayout>
  );
}
