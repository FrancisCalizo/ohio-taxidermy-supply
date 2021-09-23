import Head from 'next/head';

import SiteLayout from 'components/layout/SiteLayout';
import Landing from 'components/page-index/Landing';

export default function Home() {
  return (
    <div style={{ background: '#f1f2f3' }}>
      <Head>
        <title>Mount Tracker</title>
        <meta name="description" content="Mount Tracker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
    </div>
  );
}

Home.getLayout = (page: any) => <SiteLayout>{page}</SiteLayout>;
