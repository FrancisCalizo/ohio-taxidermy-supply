import React from 'react';

import SiteLayout from 'components/layout/SiteLayout';

export default function index() {
  return (
    <div>
      <h1>Contact Page</h1>
    </div>
  );
}

index.getLayout = (page: any) => <SiteLayout>{page}</SiteLayout>;
