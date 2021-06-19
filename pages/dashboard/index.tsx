import React from 'react';

import Sidebar from 'components/layout/dashboard/Sidebar';
import Topbar from 'components/layout/dashboard/Topbar';
import Content from 'components/layout/dashboard/Content';

export default function index() {
  return (
    <>
      <Topbar />
      <Sidebar />
      <Content />
    </>
  );
}
