import React from 'react';

import DashboardLayout from 'components/layout/dashboard/DashboardLayout';
import Discover from 'components/pages/dashboard/discover';

export default function index() {
  return (
    <DashboardLayout>
      <Discover />
    </DashboardLayout>
  );
}
