import React from 'react';

import SiteLayout from 'components/layout/SiteLayout';
import { PageTitle } from 'components/utils/styled';

export default function Cast() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <PageTitle>Your Cast</PageTitle>
      </div>
    </div>
  );
}

Cast.getLayout = (page: any) => <SiteLayout>{page}</SiteLayout>;
