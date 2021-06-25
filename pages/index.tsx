import Head from 'next/head';

import Navbar from 'components/layout/Navbar';
import Header from 'components/page-index/Header';
import VerticalRows from 'components/page-index/VerticalRows';
import HorizontalRows from 'components/page-index/HorizontalRows';

import { categories } from 'data/categoryList';
import { profilesVertical, profilesHorizontal } from 'data/profiles';

export default function Home() {
  return (
    <div style={{ background: '#f1f2f3' }}>
      <Head>
        <title>CastMeApp</title>
        <meta name="description" content="CastMeApp Mockup" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Header />

      {categories
        .filter((cat) => ['beautyCosmetics', 'comedy'].includes(cat.id))
        .map((cat, key) => (
          <VerticalRows key={key} categoryTitle={cat.title} profiles={profilesVertical} />
        ))}

      {categories
        .filter((cat) => !['beautyCosmetics', 'comedy'].includes(cat.id))
        .map((cat, key) => (
          <HorizontalRows key={key} categoryTitle={cat.title} profiles={profilesHorizontal} />
        ))}
    </div>
  );
}
