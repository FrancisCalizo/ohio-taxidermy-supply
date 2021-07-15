import React from 'react';
import styled from 'styled-components';

import SiteLayout from 'components/layout/SiteLayout';

export default function SingleInfluencer() {
  return (
    <div>
      <h1>This is a single Influencer Page</h1>
    </div>
  );
}

SingleInfluencer.getLayout = (page: any) => <SiteLayout>{page}</SiteLayout>;
