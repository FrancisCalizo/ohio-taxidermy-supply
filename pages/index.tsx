import Head from 'next/head';

import SiteLayout from 'components/layout/SiteLayout';
import Header from 'components/page-index/Header';

export default function Home() {
  return (
    <div style={{ background: '#f1f2f3' }}>
      <Head>
        <title>CastMeApp</title>
        <meta name="description" content="CastMeApp Mockup" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  );
}

Home.getLayout = (page: any) => <SiteLayout>{page}</SiteLayout>;
