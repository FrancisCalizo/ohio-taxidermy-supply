import Head from 'next/head';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Navbar from 'components/layout/Navbar';
import Header from 'components/page-index/Header';
import BeautyCosmeticsRow from 'components/page-index/BeautyCosmeticsRow';
import ComedyRow from 'components/page-index/ComedyRow';
import CookingKitchenRow from 'components/page-index/CookingKitchenRow';
import TravelRow from 'components/page-index/TravelRow';
import DiyRow from 'components/page-index/DiyRow';
import DramaRow from 'components/page-index/DramaRow';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Influencer</title>
        <meta name="description" content="Influencer Mockup App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Header />
      <BeautyCosmeticsRow />
      <ComedyRow />
      <CookingKitchenRow />
      <TravelRow />
      <DiyRow />
      <DramaRow />
    </div>
  );
}
