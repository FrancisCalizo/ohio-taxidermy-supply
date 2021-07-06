import React from 'react';
import Navbar from 'components/layout/nav/Navbar';
import Footer from 'components/layout/Footer';

export default function SiteLayout({ children }: any) {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: 83 }}>{children}</div>
      <Footer />
    </div>
  );
}
