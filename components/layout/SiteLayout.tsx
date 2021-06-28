import React from 'react';
import Navbar from 'components/layout/nav/Navbar';

export default function SiteLayout({ children }: any) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
