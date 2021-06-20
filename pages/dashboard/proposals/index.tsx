import React from 'react';

import DashboardLayout from 'components/layout/dashboard/DashboardLayout';
import OverviewComponent from 'components/pages/dashboard/overview';

export default function Proposals() {
  return (
    <DashboardLayout>
      <OverviewComponent />
    </DashboardLayout>
  );
}
