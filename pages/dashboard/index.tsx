import React from 'react';

import DashboardLayout from 'components/layout/dashboard/DashboardLayout';
import JobTickets from 'components/pages/dashboard/JobTickets/JobTickets';

export default function index() {
  return (
    <DashboardLayout>
      <JobTickets />
    </DashboardLayout>
  );
}
