import React from 'react';

import CookingKitchenRow from 'components/page-index/CookingKitchenRow';
import TravelRow from 'components/page-index/TravelRow';
import DiyRow from 'components/page-index/DiyRow';
import DramaRow from 'components/page-index/DramaRow';
import FitnessSportsRow from 'components/page-index/FitnessSportsRow';
import HomeGardenRow from 'components/page-index/HomeGardenRow';

export default function Discover() {
  return (
    <>
      <CookingKitchenRow />
      <DiyRow />
      <DramaRow />
      <FitnessSportsRow />
      <HomeGardenRow />
      <TravelRow />
    </>
  );
}
