import React from 'react';

import DashboardLayout from 'components/layout/dashboard/DashboardLayout';
import JobTicketSingleView from 'components/pages/dashboard/JobTickets/JobTicketSingleView';

export default function index() {
  return (
    <DashboardLayout>
      <JobTicketSingleView />
    </DashboardLayout>
  );
}
