import React from 'react';

import Sidebar from 'components/layout/dashboard/Sidebar';
import Topbar from 'components/layout/dashboard/Topbar';

export default function index() {
  return (
    <div>
      <Topbar />
      <Sidebar />
    </div>
  );
}
