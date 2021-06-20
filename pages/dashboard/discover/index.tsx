import React from 'react';

import DashboardLayout from 'components/layout/dashboard/DashboardLayout';

import CookingKitchenRow from 'components/page-index/CookingKitchenRow';
import TravelRow from 'components/page-index/TravelRow';
import DiyRow from 'components/page-index/DiyRow';
import DramaRow from 'components/page-index/DramaRow';
import FitnessSportsRow from 'components/page-index/FitnessSportsRow';
import HomeGardenRow from 'components/page-index/HomeGardenRow';

export default function index() {
  return (
    <DashboardLayout>
      <CookingKitchenRow />
      <DiyRow />
      <DramaRow />
      <FitnessSportsRow />
      <HomeGardenRow />
      <TravelRow />
    </DashboardLayout>
  );
}
