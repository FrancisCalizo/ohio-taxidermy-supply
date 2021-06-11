import Head from 'next/head';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import BeautyCosmeticsRow from 'components/page-index/BeautyCosmeticsRow';
import ComedyRow from 'components/page-index/ComedyRow';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Influencer</title>
        <meta name="description" content="Influencer Mockup App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BeautyCosmeticsRow />
      <ComedyRow />
    </div>
  );
}
