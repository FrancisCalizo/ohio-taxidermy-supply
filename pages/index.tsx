import Head from 'next/head';

import Navbar from 'components/layout/Navbar';
import Header from 'components/page-index/Header';
import BeautyCosmeticsRow from 'components/page-index/BeautyCosmeticsRow';
import ComedyRow from 'components/page-index/ComedyRow';
import CookingKitchenRow from 'components/page-index/CookingKitchenRow';
import TravelRow from 'components/page-index/TravelRow';
import DiyRow from 'components/page-index/DiyRow';
import DramaRow from 'components/page-index/DramaRow';
import FitnessSportsRow from 'components/page-index/FitnessSportsRow';
import HomeGardenRow from 'components/page-index/HomeGardenRow';
import HostRow from 'components/page-index/HostRow';
import MusicRow from 'components/page-index/MusicRow';
import SkitsRow from 'components/page-index/SkitsRow';
import SupplementsRow from 'components/page-index/SupplementsRow';

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
      <BeautyCosmeticsRow />
      <ComedyRow />
      <CookingKitchenRow />
      <DiyRow />
      <DramaRow />
      <FitnessSportsRow />
      <HomeGardenRow />
      <HostRow />
      <MusicRow />
      <SkitsRow />
      <TravelRow />
      <SupplementsRow />
    </div>
  );
}
