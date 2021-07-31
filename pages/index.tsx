import Head from 'next/head';

import SiteLayout from 'components/layout/SiteLayout';

export default function Home() {
  return (
    <div style={{ background: '#f1f2f3' }}>
      <Head>
        <title>CastMeApp</title>
        <meta name="description" content="CastMeApp Mockup" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Header /> */}

      {/* {categories
        .filter((cat) => ['beautyCosmetics', 'comedy'].includes(cat.id))
        .map((cat, key) => (
          <VerticalRows key={key} categoryTitle={cat.title} profiles={profilesVertical} />
        ))} */}

      {/* {categories
        .filter((cat) => !['beautyCosmetics', 'comedy'].includes(cat.id))
        .map((cat, key) => (
          <HorizontalRows key={key} categoryTitle={cat.title} profiles={profilesHorizontal} />
        ))} */}
    </div>
  );
}

Home.getLayout = (page: any) => <SiteLayout>{page}</SiteLayout>;
